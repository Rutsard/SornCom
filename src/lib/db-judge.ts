// ==============================================================================
// Database 2: judge_db (PostgreSQL) Prisma Client Singleton
// Manages: Problem Statements, Test Cases, Submissions, Verdicts
// Configured via JUDGE_DATABASE_URL
// ==============================================================================

import { PrismaClient as JudgePrismaClient, Difficulty } from "../generated/judge";
import { TASKS_SEED, TaskSeed } from "./seed-data";

const globalForJudge = globalThis as unknown as {
  judgePrisma: JudgePrismaClient | undefined;
};

export const judgePrisma =
  globalForJudge.judgePrisma ??
  new JudgePrismaClient({
    log: process.env.NODE_ENV === "development" ? ["warn", "error"] : ["error"],
  });

if (process.env.NODE_ENV !== "production") {
  globalForJudge.judgePrisma = judgePrisma;
}

// In-memory submission cache for resilient mock grading mode
export interface StoredSubmission {
  id: string;
  taskId: string;
  userId: string;
  language: string;
  code: string;
  status: "COMPLETED" | "FAILED" | "PENDING";
  verdictString: string;
  score: number;
  executionTimeMs: number;
  memoryUsedKb: number;
  submittedAt: string;
  caseVerdicts: {
    order: number;
    verdictChar: string;
    executionTimeMs: number;
    memoryUsedKb: number;
    passed: boolean;
    isSample: boolean;
  }[];
}

const memorySubmissions = new Map<string, StoredSubmission>();

/**
 * Fetch all tasks with optional track filter
 */
export async function getTasksList(trackId?: string) {
  try {
    const where = trackId ? { trackId } : {};
    const tasks = await judgePrisma.task.findMany({
      where,
      orderBy: { id: "asc" },
      include: {
        testCases: {
          select: { id: true, isSample: true, scoreWeight: true },
        },
      },
    });
    if (tasks.length > 0) {
      return tasks.map((t) => ({
        ...t,
        testCaseCount: t.testCases.length,
      }));
    }
  } catch (error) {
    console.warn("[judge_db] Offline or query failed. Using resilient fallback data.");
  }

  // Graceful fallback
  return TASKS_SEED.filter((t) => (trackId ? t.trackId === trackId : true)).map((t) => ({
    id: t.id,
    title: t.title,
    slug: t.slug,
    trackId: t.trackId,
    difficulty: t.difficulty,
    timeLimitMs: t.timeLimitMs,
    memoryLimitMb: t.memoryLimitMb,
    tags: t.tags,
    statementMarkdown: t.statementMarkdown,
    sampleInput: t.sampleInput,
    sampleOutput: t.sampleOutput,
    hasTracingQuiz: t.hasTracingQuiz,
    testCaseCount: t.testCases.length,
    createdAt: new Date(),
    updatedAt: new Date(),
  }));
}

/**
 * Fetch a single task by ID
 */
export async function getTaskById(taskId: string): Promise<TaskSeed | null> {
  try {
    const task = await judgePrisma.task.findUnique({
      where: { id: taskId },
      include: {
        testCases: {
          orderBy: { order: "asc" },
        },
      },
    });

    if (task) {
      return {
        id: task.id,
        title: task.title,
        slug: task.slug,
        trackId: task.trackId as "POSN-Camp-1" | "Eng-ComProg",
        difficulty: task.difficulty as "EASY" | "MEDIUM" | "HARD",
        timeLimitMs: task.timeLimitMs,
        memoryLimitMb: task.memoryLimitMb,
        tags: task.tags,
        statementMarkdown: task.statementMarkdown,
        inputFormat: task.inputFormat,
        outputFormat: task.outputFormat,
        sampleInput: task.sampleInput,
        sampleOutput: task.sampleOutput,
        constraints: task.constraints,
        hints: task.hints || "",
        starterCode: TASKS_SEED.find((t) => t.id === taskId)?.starterCode || "# Python 3 solution\n",
        hasTracingQuiz: task.hasTracingQuiz,
        tracingSnippet: task.tracingSnippet || undefined,
        tracingQuestion: task.tracingQuestion || undefined,
        tracingExpectedOutput: task.tracingExpectedOutput || undefined,
        tracingExplanation: task.tracingExplanation || undefined,
        testCases: task.testCases.map((tc) => ({
          input: tc.input,
          expectedOutput: tc.expectedOutput,
          isSample: tc.isSample,
          scoreWeight: tc.scoreWeight,
        })),
      };
    }
  } catch (error) {
    console.warn(`[judge_db] Offline. Reading task ${taskId} from fallback seed data.`);
  }

  const found = TASKS_SEED.find((t) => t.id === taskId || t.slug === taskId);
  return found || null;
}

/**
 * Record a submission verdict in judge_db and memory
 */
export async function saveSubmissionVerdict(data: {
  taskId: string;
  userId: string;
  code: string;
  verdictString: string;
  score: number;
  executionTimeMs: number;
  memoryUsedKb: number;
  caseVerdicts: {
    order: number;
    verdictChar: string;
    executionTimeMs: number;
    memoryUsedKb: number;
    passed: boolean;
    isSample: boolean;
  }[];
}): Promise<StoredSubmission> {
  const submissionId = `sub_${Date.now()}_${Math.random().toString(36).substring(2, 7)}`;

  const stored: StoredSubmission = {
    id: submissionId,
    taskId: data.taskId,
    userId: data.userId,
    language: "python3",
    code: data.code,
    status: "COMPLETED",
    verdictString: data.verdictString,
    score: data.score,
    executionTimeMs: data.executionTimeMs,
    memoryUsedKb: data.memoryUsedKb,
    submittedAt: new Date().toISOString(),
    caseVerdicts: data.caseVerdicts,
  };

  memorySubmissions.set(submissionId, stored);

  try {
    const submission = await judgePrisma.submission.create({
      data: {
        id: submissionId,
        taskId: data.taskId,
        userId: data.userId,
        language: "python3",
        code: data.code,
        status: "COMPLETED",
        verdictString: data.verdictString,
        score: data.score,
        executionTimeMs: data.executionTimeMs,
        memoryUsedKb: data.memoryUsedKb,
      },
    });

    return stored;
  } catch (err) {
    // If DB is offline, memory fallback is returned
    return stored;
  }
}

export function getSubmissionFromMemory(id: string) {
  return memorySubmissions.get(id) || null;
}
