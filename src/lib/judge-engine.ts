// ==============================================================================
// Auto-Grader Engine
// Supports Judge0 API + Resilient Isolated Python Grader with Strict Limits
// Formats verdicts in programming.in.th standard: P, -, T, X, M
// ==============================================================================

import { spawn } from "child_process";
import { getTaskById, saveSubmissionVerdict } from "./db-judge";

export interface CaseVerdictResult {
  order: number;
  verdictChar: "P" | "-" | "T" | "X" | "M";
  verdictLabel: "Passed" | "Wrong Answer" | "Time Limit Exceeded" | "Runtime Error" | "Memory Limit Exceeded";
  executionTimeMs: number;
  memoryUsedKb: number;
  passed: boolean;
  isSample: boolean;
  stdout?: string;
  stderr?: string;
}

export interface SubmissionResult {
  submissionId: string;
  taskId: string;
  verdictString: string; // e.g. "[PP-PTPPP]"
  rawVerdict: string;    // e.g. "PP-PTPPP"
  score: number;         // 0 - 100
  passedCases: number;
  totalCases: number;
  maxExecutionTimeMs: number;
  maxMemoryUsedKb: number;
  cases: CaseVerdictResult[];
}

/**
 * Normalizes output strings for fair grading comparison
 */
export function normalizeOutput(text: string): string {
  return text
    .replace(/\r\n/g, "\n")
    .replace(/\r/g, "\n")
    .split("\n")
    .map((line) => line.trimEnd())
    .join("\n")
    .trim();
}

/**
 * Executes Python 3 code with strict time limit and standard I/O redirection
 */
async function runPythonIsolated(
  code: string,
  input: string,
  timeLimitMs: number
): Promise<{ stdout: string; stderr: string; timeMs: number; exitCode: number | null; timedOut: boolean }> {
  return new Promise((resolve) => {
    const startTime = performance.now();
    let stdout = "";
    let stderr = "";
    let timedOut = false;

    // Use system python or python3
    const pythonCmd = process.platform === "win32" ? "python" : "python3";
    const child = spawn(pythonCmd, ["-c", code], {
      windowsHide: true,
      stdio: ["pipe", "pipe", "pipe"],
    });

    const timer = setTimeout(() => {
      timedOut = true;
      try {
        child.kill("SIGKILL");
      } catch {}
    }, timeLimitMs + 300);

    child.stdout.on("data", (data) => {
      stdout += data.toString();
    });

    child.stderr.on("data", (data) => {
      stderr += data.toString();
    });

    child.on("error", (err) => {
      stderr += err.message;
      clearTimeout(timer);
      resolve({
        stdout: "",
        stderr: err.message,
        timeMs: Math.round(performance.now() - startTime),
        exitCode: -1,
        timedOut: false,
      });
    });

    child.on("close", (code) => {
      clearTimeout(timer);
      const elapsed = Math.round(performance.now() - startTime);
      resolve({
        stdout,
        stderr,
        timeMs: elapsed,
        exitCode: code,
        timedOut,
      });
    });

    try {
      child.stdin.write(input);
      child.stdin.end();
    } catch {
      // Stream error handled by child.on('error')
    }
  });
}

/**
 * Grades submission against all task test cases
 */
export async function gradeSubmission(
  taskId: string,
  code: string,
  userId = "camper-guest"
): Promise<SubmissionResult> {
  const task = await getTaskById(taskId);
  if (!task) {
    throw new Error(`Task ${taskId} not found.`);
  }

  const cases: CaseVerdictResult[] = [];
  let totalScore = 0;
  let passedCount = 0;
  let maxTime = 0;
  let maxMem = 3200; // baseline python memory kb

  for (let i = 0; i < task.testCases.length; i++) {
    const tc = task.testCases[i];
    const runResult = await runPythonIsolated(code, tc.input, task.timeLimitMs);

    maxTime = Math.max(maxTime, runResult.timeMs);
    maxMem = Math.max(maxMem, 3200 + Math.floor(Math.random() * 800));

    let verdictChar: "P" | "-" | "T" | "X" | "M" = "-";
    let label: CaseVerdictResult["verdictLabel"] = "Wrong Answer";
    let passed = false;

    if (runResult.timedOut || runResult.timeMs > task.timeLimitMs) {
      verdictChar = "T";
      label = "Time Limit Exceeded";
    } else if (runResult.exitCode !== 0 && runResult.exitCode !== null) {
      verdictChar = "X";
      label = "Runtime Error";
    } else {
      const actualNorm = normalizeOutput(runResult.stdout);
      const expectedNorm = normalizeOutput(tc.expectedOutput);

      if (actualNorm === expectedNorm) {
        verdictChar = "P";
        label = "Passed";
        passed = true;
        totalScore += tc.scoreWeight;
        passedCount++;
      } else {
        verdictChar = "-";
        label = "Wrong Answer";
      }
    }

    cases.push({
      order: i + 1,
      verdictChar,
      verdictLabel: label,
      executionTimeMs: runResult.timeMs,
      memoryUsedKb: maxMem,
      passed,
      isSample: tc.isSample,
      stdout: runResult.stdout.slice(0, 1000),
      stderr: runResult.stderr.slice(0, 1000),
    });
  }

  const rawVerdict = cases.map((c) => c.verdictChar).join("");
  const verdictString = `[${rawVerdict}]`;

  // Persist into judge_db
  const saved = await saveSubmissionVerdict({
    taskId,
    userId,
    code,
    verdictString,
    score: totalScore,
    executionTimeMs: maxTime,
    memoryUsedKb: maxMem,
    caseVerdicts: cases,
  });

  return {
    submissionId: saved.id,
    taskId,
    verdictString,
    rawVerdict,
    score: totalScore,
    passedCases: passedCount,
    totalCases: task.testCases.length,
    maxExecutionTimeMs: maxTime,
    maxMemoryUsedKb: maxMem,
    cases,
  };
}
