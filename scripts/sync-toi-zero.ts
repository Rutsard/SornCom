#!/usr/bin/env tsx
// ==============================================================================
// TOI-Zero Problem Ingestion & Sync Pipeline
// Scans PDF problem statements from A1/A2/A3 folders, extracts metadata,
// copies PDFs for static serving, and upserts into judge_db.
//
// Usage:  npx tsx scripts/sync-toi-zero.ts [--source ./problems/TOI-Zero]
// ==============================================================================

import * as fs from "fs/promises";
import * as fsSync from "fs";
import * as path from "path";

// pdf-parse v2 exports PDFParse as a named class
const { PDFParse } = require("pdf-parse") as {
  PDFParse: new (opts: { data: Buffer }) => {
    getText: () => Promise<{ pages: { text: string }[] }>;
  };
};

// ---------------------------------------------------------------------------
// Types
// ---------------------------------------------------------------------------
interface SampleCase {
  input: string;
  output: string;
}

interface ParsedTask {
  code: string;       // e.g. "TOI0-A1-001"
  filename: string;   // e.g. "A1-001"
  category: string;   // "A1" | "A2" | "A3"
  title: string;
  difficulty: "EASY" | "MEDIUM" | "HARD";
  timeLimitMs: number;
  memoryLimitMb: number;
  pdfUrl: string;
  statementMarkdown: string;
  sampleCases: SampleCase[];
  sampleInput: string;
  sampleOutput: string;
  tags: string[];
}

// ---------------------------------------------------------------------------
// Configuration
// ---------------------------------------------------------------------------
const CATEGORY_DIFFICULTY: Record<string, "EASY" | "MEDIUM" | "HARD"> = {
  A1: "EASY",
  A2: "MEDIUM",
  A3: "HARD",
};

const CATEGORY_TAGS: Record<string, string[]> = {
  A1: ["Basic I/O", "Selection", "If-Else"],
  A2: ["Loops", "Arrays", "Lists"],
  A3: ["Strings", "2D Arrays", "Functions", "Problem Solving"],
};

const DEFAULT_TIME_LIMIT_MS = 1000;
const DEFAULT_MEMORY_LIMIT_MB = 64;

// ---------------------------------------------------------------------------
// CLI Argument Parsing
// ---------------------------------------------------------------------------
function parseArgs(): { sourcePath: string; dryRun: boolean } {
  const args = process.argv.slice(2);
  let sourcePath = path.resolve("./problems/TOI-Zero");
  let dryRun = false;

  for (let i = 0; i < args.length; i++) {
    if (args[i] === "--source" && args[i + 1]) {
      sourcePath = path.resolve(args[i + 1]);
      i++;
    } else if (args[i] === "--dry-run") {
      dryRun = true;
    }
  }

  return { sourcePath, dryRun };
}

// ---------------------------------------------------------------------------
// PDF Parsing Helpers
// ---------------------------------------------------------------------------

/**
 * Extract the full text content from a PDF file.
 */
async function extractPdfText(filePath: string): Promise<string> {
  const buffer = await fs.readFile(filePath);
  const parser = new PDFParse({ data: buffer });
  const result = await parser.getText();
  return result.pages.map((p) => p.text).join("\n");
}

/**
 * Extract the problem title from PDF text.
 *
 * A1-format PDFs (and some A2): start with "ข้อสอบสำหรับโครงการ TOI-Zero"
 *   → Title is the LAST non-empty line of the document
 *
 * A2/A3-format PDFs: start with the Thai title, followed by
 *   "การทดสอบความสามารถในการแก้ปัญหาโดยการเขียนโปรแกรม"
 *   → Title is the line immediately before that marker
 */
function extractTitle(text: string, filename: string): string {
  const lines = text
    .trim()
    .split("\n")
    .map((l) => l.trim())
    .filter(Boolean);

  if (lines.length === 0) return filename;

  // Check if it's the A1-format header
  const isA1Format =
    lines[0].includes("TOI-Zero") ||
    lines[0].includes("โครงการ") ||
    lines[0].includes("ข") && lines[0].includes("สอบสำหรับ");

  if (isA1Format) {
    // Title is the last line for A1-format PDFs
    const lastLine = lines[lines.length - 1];
    // Validate: title shouldn't be too long or contain footer-like content
    if (lastLine.length < 80 && !lastLine.includes("โครงการ TOI-Zero")) {
      return lastLine;
    }
  }

  // A2/A3 format: look for marker
  const marker = "การทดสอบความสามารถในการแก้ปัญหาโดยการเขียนโปรแกรม";
  const markerIdx = text.indexOf(marker);
  if (markerIdx !== -1) {
    const before = text
      .slice(0, markerIdx)
      .trim()
      .split("\n")
      .map((l) => l.trim())
      .filter(Boolean);
    if (before.length > 0) {
      const candidate = before[before.length - 1];
      if (
        candidate.length < 80 &&
        !candidate.includes("TOI-Zero") &&
        !candidate.includes("โครงการ")
      ) {
        return candidate;
      }
    }
  }

  // Final fallback: first non-header, non-marker line
  for (const line of lines) {
    if (
      !line.includes("TOI-Zero") &&
      !line.includes("โครงการ") &&
      !line.includes("สอบสำหรับ") &&
      !line.includes("สมัครสอบ") &&
      !line.includes("ออกโจทย") &&
      line.length < 80
    ) {
      return line;
    }
  }

  return filename;
}

/**
 * Parse time limit from PDF text.
 * Looks for patterns like "ภายใน 1 วินาที", "Time Limit: 2s", etc.
 */
function parseTimeLimit(text: string): number {
  // Pattern 1: "ภายใน X วินาที" or "ทำงานภายใน X วินาที"
  const thaiMatch = text.match(/ภายใน\s*([0-9.]+)\s*วินาที/);
  if (thaiMatch) return Math.round(parseFloat(thaiMatch[1]) * 1000);

  // Pattern 2: "X วินาที" preceding memory info
  const thaiMatch2 = text.match(
    /([0-9.]+)\s*วินาที\s*(?:ใช้หน่วยความจำ|Memory)/
  );
  if (thaiMatch2) return Math.round(parseFloat(thaiMatch2[1]) * 1000);

  // Pattern 3: Generic "X วินาที"
  const thaiMatch3 = text.match(/([0-9.]+)\s*วินาที/);
  if (thaiMatch3) return Math.round(parseFloat(thaiMatch3[1]) * 1000);

  // Pattern 4: English "Time Limit: Xs"
  const engMatch = text.match(
    /Time\s*Limit[\s:]*([0-9.]+)\s*(s|sec|ms|seconds?)/i
  );
  if (engMatch) {
    const val = parseFloat(engMatch[1]);
    return engMatch[2].toLowerCase().startsWith("ms") ? val : val * 1000;
  }

  return DEFAULT_TIME_LIMIT_MS;
}

/**
 * Parse memory limit from PDF text.
 * Looks for patterns like "หน่วยความจำไม่เกิน 256 MB", "Memory Limit: 64MB"
 */
function parseMemoryLimit(text: string): number {
  // Pattern 1: Thai "ไม่เกิน X MB" or "หน่วยความจำ X MB"
  const thaiMatch = text.match(
    /(?:หน่วยความจำ|ไม่เกิน)[\s\S]{0,20}?([0-9]+)\s*MB/i
  );
  if (thaiMatch) return parseInt(thaiMatch[1], 10);

  // Pattern 2: Generic "X MB"
  const genericMatch = text.match(/([0-9]+)\s*MB/);
  if (genericMatch) return parseInt(genericMatch[1], 10);

  // Pattern 3: English
  const engMatch = text.match(/Memory\s*Limit[\s:]*([0-9]+)\s*MB/i);
  if (engMatch) return parseInt(engMatch[1], 10);

  return DEFAULT_MEMORY_LIMIT_MB;
}

/**
 * Extract sample input/output cases from PDF text.
 * Supports two formats:
 *   A1 format: "ข้อมูลเข้า \t ผลลัพธ์" pairs
 *   A2/A3 format: "Input \t Output" / "ตัวอย่าง N" blocks
 */
function extractSampleCases(
  text: string,
  category: string
): SampleCase[] {
  const cases: SampleCase[] = [];

  // Try A2/A3 format first: "Input\s+Output" blocks
  const ioPattern = /(?:ตัวอย่[าง\u0003.]*\s*\d*\s*\n)?Input\s+Output\s*\n([\s\S]*?)(?=(?:ตัวอย่[าง\u0003.]*\s*\d|คำ[าอ.]*ธิบาย|ข้อสอบสํ|ข้อสอบสำ|โครงการ\s*TOI|$))/gi;

  let match: RegExpExecArray | null;
  while ((match = ioPattern.exec(text)) !== null) {
    const block = match[1].trim();
    if (!block) continue;

    const lines = block.split("\n").map((l) => l.trim()).filter(Boolean);
    if (lines.length === 0) continue;

    // Heuristic: last line is typically the output, rest is input
    if (lines.length === 1) {
      // Single line — likely "input output" on same line
      const parts = lines[0].split(/\t+/);
      if (parts.length >= 2) {
        cases.push({ input: parts[0].trim(), output: parts.slice(1).join("\t").trim() });
      } else {
        cases.push({ input: lines[0], output: "" });
      }
    } else {
      // Multiple lines: last line is output
      const output = lines[lines.length - 1];
      const input = lines.slice(0, -1).join("\n");
      cases.push({ input, output });
    }
  }

  if (cases.length > 0) return cases;

  // Try A1 format: "ข;อมูลเข;า \t ผลลัพธA" or variants
  const a1Marker = /ข.{0,3}อมูลเข.{0,3}า\s+ผลลัพธ./g;
  const markerPositions: number[] = [];
  let a1Match: RegExpExecArray | null;
  while ((a1Match = a1Marker.exec(text)) !== null) {
    markerPositions.push(a1Match.index + a1Match[0].length);
  }

  // Also check "ตัวอย" as block separator
  const titleEndMarkers = [
    "ตัวอย",
    "ข;อมูลเข;า",
    "ข\"อมูลเข\"า",
  ];

  // For A1 format, each marker pair defines a sample block
  for (let i = 0; i < markerPositions.length; i++) {
    const start = markerPositions[i];
    // End at next marker, or at the title (last line for A1), or end of text
    let end: number;
    if (i + 1 < markerPositions.length) {
      // Find the start of the next marker line
      const nextMarkerSearch = text.lastIndexOf("\n", markerPositions[i + 1]);
      end = nextMarkerSearch > start ? nextMarkerSearch : markerPositions[i + 1];
    } else {
      // Last marker: ends at the last line (which is the title for A1)
      const lastNewline = text.lastIndexOf("\n");
      end = lastNewline > start ? lastNewline : text.length;
    }

    const block = text
      .slice(start, end)
      .trim()
      .split("\n")
      .map((l) => l.trim())
      .filter(Boolean);

    if (block.length === 0) continue;

    // Check if first line has tab separation (table columns)
    const firstLine = block[0];
    if (firstLine.includes("\t")) {
      const parts = firstLine.split(/\t+/);
      const inputParts = [parts[0].trim()];
      const outputParts = [parts.slice(1).join(" ").trim()];

      // Remaining lines alternate or are output continuation
      for (let j = 1; j < block.length; j++) {
        if (block[j].includes("\t")) {
          const p = block[j].split(/\t+/);
          inputParts.push(p[0].trim());
          outputParts.push(p.slice(1).join(" ").trim());
        } else {
          outputParts.push(block[j]);
        }
      }

      cases.push({
        input: inputParts.filter(Boolean).join("\n"),
        output: outputParts.filter(Boolean).join("\n"),
      });
    } else {
      // No tab: try splitting in half (first half input, second half output)
      const mid = Math.ceil(block.length / 2);
      cases.push({
        input: block.slice(0, mid).join("\n"),
        output: block.slice(mid).join("\n"),
      });
    }
  }

  return cases;
}

/**
 * Slugify a string for URL use.
 */
function slugify(text: string): string {
  return text
    .toLowerCase()
    .replace(/[^\w\u0E00-\u0E7Fs-]/g, "-")
    .replace(/-+/g, "-")
    .replace(/^-|-$/g, "")
    .slice(0, 80);
}

// ---------------------------------------------------------------------------
// Directory Scanning
// ---------------------------------------------------------------------------

async function scanCategory(
  basePath: string,
  category: string
): Promise<string[]> {
  const dirPath = path.join(basePath, category);
  try {
    const entries = await fs.readdir(dirPath);
    return entries
      .filter((f) => f.toLowerCase().endsWith(".pdf"))
      .sort()
      .map((f) => path.join(dirPath, f));
  } catch {
    console.warn(`  ⚠ Directory not found: ${dirPath}`);
    return [];
  }
}

/**
 * Check for test case files alongside PDFs (.in / .sol / .out files).
 */
async function findTestCases(
  basePath: string,
  category: string,
  filename: string
): Promise<{ input: string; expectedOutput: string; isSample: boolean; scoreWeight: number }[]> {
  const testCases: { input: string; expectedOutput: string; isSample: boolean; scoreWeight: number }[] = [];
  const stem = filename.replace(".pdf", "");

  // Check multiple possible locations for test data
  const searchDirs = [
    path.join(basePath, category),
    path.join(basePath, category, stem),
    path.join(basePath, category, "testcases"),
    path.join(basePath, category, "testcases", stem),
  ];

  for (const dir of searchDirs) {
    try {
      const entries = await fs.readdir(dir);
      const inFiles = entries.filter(
        (f) => f.startsWith(stem) && f.endsWith(".in")
      );

      for (const inFile of inFiles) {
        const baseName = inFile.replace(/\.in$/, "");
        const solFile =
          entries.find((f) => f === `${baseName}.sol`) ||
          entries.find((f) => f === `${baseName}.out`);

        if (solFile) {
          const input = await fs.readFile(path.join(dir, inFile), "utf-8");
          const output = await fs.readFile(path.join(dir, solFile), "utf-8");
          testCases.push({
            input: input.trim(),
            expectedOutput: output.trim(),
            isSample: testCases.length === 0, // First case is sample
            scoreWeight: 10,
          });
        }
      }
    } catch {
      // Directory doesn't exist, skip
    }
  }

  return testCases;
}

// ---------------------------------------------------------------------------
// PDF Copy to Public
// ---------------------------------------------------------------------------

async function copyPdfToPublic(
  srcPath: string,
  category: string,
  filename: string,
  projectRoot: string
): Promise<string> {
  const destDir = path.join(projectRoot, "public", "pdfs", "TOI-Zero", category);
  const destPath = path.join(destDir, filename);
  const pdfUrl = `/pdfs/TOI-Zero/${category}/${filename}`;

  await fs.mkdir(destDir, { recursive: true });
  await fs.copyFile(srcPath, destPath);

  return pdfUrl;
}

// ---------------------------------------------------------------------------
// Main Processing
// ---------------------------------------------------------------------------

async function processOnePdf(
  filePath: string,
  category: string,
  basePath: string,
  projectRoot: string
): Promise<ParsedTask> {
  const filename = path.basename(filePath);
  const stem = filename.replace(".pdf", "");
  const code = `TOI0-${stem}`;

  // Extract text
  const text = await extractPdfText(filePath);

  // Extract metadata
  const title = extractTitle(text, stem);
  const timeLimitMs = parseTimeLimit(text);
  const memoryLimitMb = parseMemoryLimit(text);
  const sampleCases = extractSampleCases(text, category);
  const difficulty = CATEGORY_DIFFICULTY[category] || "EASY";
  const tags = [...(CATEGORY_TAGS[category] || []), "TOI-Zero"];

  // Copy PDF
  const pdfUrl = await copyPdfToPublic(filePath, category, filename, projectRoot);

  // Build first sample for legacy sampleInput/sampleOutput fields
  const sampleInput =
    sampleCases.length > 0 ? sampleCases[0].input : "";
  const sampleOutput =
    sampleCases.length > 0 ? sampleCases[0].output : "";

  return {
    code,
    filename: stem,
    category,
    title,
    difficulty,
    timeLimitMs,
    memoryLimitMb,
    pdfUrl,
    statementMarkdown: text,
    sampleCases,
    sampleInput,
    sampleOutput,
    tags,
  };
}

// ---------------------------------------------------------------------------
// Database Upsert
// ---------------------------------------------------------------------------

async function upsertToDatabase(tasks: ParsedTask[], dryRun: boolean) {
  if (dryRun) {
    console.log("\n🔍 DRY RUN — Skipping database upsert.");
    console.log("   Would upsert", tasks.length, "tasks.");
    return;
  }

  let judgePrisma: any;
  try {
    // Dynamic import to avoid issues when DB is not available
    const { PrismaClient: JudgePrismaClient } = require("../src/generated/judge");
    judgePrisma = new JudgePrismaClient();
    await judgePrisma.$connect();
    console.log("\n📡 Connected to judge_db (PostgreSQL)");
  } catch (err) {
    console.warn(
      "\n⚠️ Could not connect to judge_db. Tasks parsed but NOT saved to database."
    );
    console.warn("   Error:", (err as Error).message);
    console.warn("   Ensure PostgreSQL is running and JUDGE_DATABASE_URL is set in .env");
    return;
  }

  try {
    let created = 0;
    let updated = 0;

    for (const task of tasks) {
      const slug = `toi-zero-${slugify(task.filename)}`;

      const data = {
        title: task.title,
        slug,
        trackId: "TOI-Zero",
        difficulty: task.difficulty,
        timeLimitMs: task.timeLimitMs,
        memoryLimitMb: task.memoryLimitMb,
        tags: task.tags,
        statementMarkdown: task.statementMarkdown,
        inputFormat: "(See PDF statement)",
        outputFormat: "(See PDF statement)",
        sampleInput: task.sampleInput,
        sampleOutput: task.sampleOutput,
        constraints: `Time: ${task.timeLimitMs}ms, Memory: ${task.memoryLimitMb}MB`,
        category: task.category,
        pdfUrl: task.pdfUrl,
        sampleCases: task.sampleCases,
        hasTracingQuiz: false,
      };

      const existing = await judgePrisma.task.findUnique({
        where: { id: task.code },
      });

      await judgePrisma.task.upsert({
        where: { id: task.code },
        update: data,
        create: { id: task.code, ...data },
      });

      if (existing) {
        updated++;
      } else {
        created++;
      }

      // Seed sample cases as test cases if no real test cases exist
      if (task.sampleCases.length > 0) {
        const existingTestCases = await judgePrisma.testCase.count({
          where: { taskId: task.code },
        });

        if (existingTestCases === 0) {
          for (let i = 0; i < task.sampleCases.length; i++) {
            const sc = task.sampleCases[i];
            if (sc.input && sc.output) {
              await judgePrisma.testCase.create({
                data: {
                  taskId: task.code,
                  order: i + 1,
                  input: sc.input,
                  expectedOutput: sc.output,
                  isSample: true,
                  scoreWeight: Math.round(100 / task.sampleCases.length),
                },
              });
            }
          }
        }
      }

      console.log(
        `   ${existing ? "🔄" : "✨"} [${task.code}] ${task.title} (${task.category}, ${task.difficulty})`
      );
    }

    console.log(`\n✅ Database sync complete: ${created} created, ${updated} updated`);
  } finally {
    await judgePrisma.$disconnect();
  }
}

// ---------------------------------------------------------------------------
// Main Entry Point
// ---------------------------------------------------------------------------

async function main() {
  console.log("═══════════════════════════════════════════════════════════");
  console.log("  TOI-Zero Problem Ingestion & Sync Pipeline");
  console.log("═══════════════════════════════════════════════════════════");

  const { sourcePath, dryRun } = parseArgs();
  const projectRoot = path.resolve(__dirname, "..");
  const categories = ["A1", "A2", "A3"];

  console.log(`\n📂 Source path: ${sourcePath}`);
  console.log(`📁 Project root: ${projectRoot}`);
  if (dryRun) console.log("🔍 Mode: DRY RUN");

  // Verify source path exists
  try {
    await fs.access(sourcePath);
  } catch {
    console.error(`❌ Source path not found: ${sourcePath}`);
    console.error(
      "   Create the folder or use --source <path> to specify a different location."
    );
    process.exit(1);
  }

  // Process all categories
  const allTasks: ParsedTask[] = [];
  let totalPdfs = 0;

  for (const category of categories) {
    console.log(
      `\n── ${category} (${CATEGORY_DIFFICULTY[category]}) ──────────────────────`
    );
    const pdfFiles = await scanCategory(sourcePath, category);
    console.log(`   Found ${pdfFiles.length} PDF files`);

    for (const pdfFile of pdfFiles) {
      try {
        const task = await processOnePdf(pdfFile, category, sourcePath, projectRoot);
        allTasks.push(task);
        totalPdfs++;

        const sampleInfo =
          task.sampleCases.length > 0
            ? `${task.sampleCases.length} samples`
            : "no samples";
        console.log(
          `   📄 ${task.filename}: "${task.title}" [${task.timeLimitMs}ms/${task.memoryLimitMb}MB] (${sampleInfo})`
        );
      } catch (err) {
        console.error(
          `   ❌ Error processing ${path.basename(pdfFile)}:`,
          (err as Error).message
        );
      }
    }
  }

  console.log(
    `\n📊 Total processed: ${totalPdfs} PDFs across ${categories.length} categories`
  );
  console.log(
    `   A1: ${allTasks.filter((t) => t.category === "A1").length} | ` +
    `A2: ${allTasks.filter((t) => t.category === "A2").length} | ` +
    `A3: ${allTasks.filter((t) => t.category === "A3").length}`
  );

  // Copy static PDFs is already done in processOnePdf
  console.log(`\n📋 PDFs copied to public/pdfs/TOI-Zero/`);

  // Upsert to database
  await upsertToDatabase(allTasks, dryRun);

  // Export summary JSON for offline review
  const summaryPath = path.join(projectRoot, "public", "pdfs", "TOI-Zero", "manifest.json");
  const manifest = allTasks.map((t) => ({
    code: t.code,
    filename: t.filename,
    category: t.category,
    title: t.title,
    difficulty: t.difficulty,
    timeLimitMs: t.timeLimitMs,
    memoryLimitMb: t.memoryLimitMb,
    pdfUrl: t.pdfUrl,
    sampleCaseCount: t.sampleCases.length,
    tags: t.tags,
  }));

  await fs.writeFile(summaryPath, JSON.stringify(manifest, null, 2), "utf-8");
  console.log(`📝 Manifest saved: ${summaryPath}`);

  console.log("\n🎉 TOI-Zero sync complete!");
}

main().catch((err) => {
  console.error("Fatal error:", err);
  process.exit(1);
});
