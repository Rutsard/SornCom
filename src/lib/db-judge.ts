// ==============================================================================
// Database 2: judge_db (PostgreSQL) Prisma Client Singleton
// Manages: Problem Statements, Test Cases, Submissions, Verdicts
// Configured via JUDGE_DATABASE_URL
// ==============================================================================

import { PrismaClient as JudgePrismaClient, Difficulty, SubmissionStatus, CaseVerdict } from "../generated/judge";
import { TASKS_SEED, TaskSeed } from "./seed-data";

const globalForJudge = globalThis as unknown as {
  judgePrisma: JudgePrismaClient | undefined;
  memorySubmissions: Map<string, StoredSubmission> | undefined;
};

export const judgePrisma =
  globalForJudge.judgePrisma ??
  new JudgePrismaClient({
    log: process.env.NODE_ENV === "development" ? ["warn", "error"] : ["error"],
  });

export const memorySubmissions =
  globalForJudge.memorySubmissions ?? new Map<string, StoredSubmission>();

if (process.env.NODE_ENV !== "production") {
  globalForJudge.judgePrisma = judgePrisma;
  globalForJudge.memorySubmissions = memorySubmissions;
}

export interface CaseVerdictItem {
  order: number;
  verdictChar: string; // "P", "-", "T", "X", "M"
  verdictLabel: string; // "Passed", "Wrong Answer", etc.
  executionTimeMs: number;
  memoryUsedKb: number;
  passed: boolean;
  isSample: boolean;
  scoreWeight: number;
  stdout?: string;
  stderr?: string;
}

export interface StoredSubmission {
  id: string;
  taskId: string;
  taskTitle?: string;
  trackId?: string;
  userId: string;
  language: string;
  code: string;
  status: "WAITING" | "GRADING" | "COMPLETED" | "FAILED";
  verdictString: string; // e.g. "----" or "[PPPPPPPPPP]"
  rawVerdict: string;
  score: number;
  executionTimeMs: number;
  memoryUsedKb: number;
  errorMessage?: string | null;
  submittedAt: string;
  caseVerdicts: CaseVerdictItem[];
}

// Resilient in-memory submission store (syncs with live PostgreSQL or serves as fast cache/fallback)

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
    // Graceful fallback to static seed data
  }

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
    // Fallback to seed data
  }

  const found = TASKS_SEED.find((t) => t.id === taskId || t.slug === taskId);
  return found || null;
}

/**
 * 1. Create Initial Submission in WAITING status
 */
export async function createInitialSubmission(params: {
  taskId: string;
  sourceCode: string;
  userId?: string;
}): Promise<StoredSubmission> {
  const submissionId = `sub_${Date.now()}_${Math.random().toString(36).substring(2, 7)}`;
  const userId = params.userId || "camper-guest";
  const task = TASKS_SEED.find((t) => t.id === params.taskId);

  const initialRecord: StoredSubmission = {
    id: submissionId,
    taskId: params.taskId,
    taskTitle: task?.title || params.taskId,
    trackId: task?.trackId || "POSN-Camp-1",
    userId,
    language: "python3",
    code: params.sourceCode,
    status: "WAITING",
    verdictString: "----",
    rawVerdict: "----",
    score: 0,
    executionTimeMs: 0,
    memoryUsedKb: 0,
    submittedAt: new Date().toISOString(),
    caseVerdicts: [],
  };

  memorySubmissions.set(submissionId, initialRecord);

  try {
    await judgePrisma.submission.create({
      data: {
        id: submissionId,
        taskId: params.taskId,
        userId,
        language: "python3",
        code: params.sourceCode,
        status: SubmissionStatus.WAITING,
        verdictString: "----",
        score: 0,
        executionTimeMs: 0,
        memoryUsedKb: 0,
      },
    });
  } catch (err) {
    // If DB is offline, memory fallback is used
  }

  return initialRecord;
}

/**
 * 2. Update Submission Status (e.g. WAITING -> GRADING -> COMPLETED / FAILED)
 */
export async function updateSubmissionStatus(
  submissionId: string,
  status: "WAITING" | "GRADING" | "COMPLETED" | "FAILED",
  errorMessage?: string
): Promise<void> {
  const existing = memorySubmissions.get(submissionId);
  if (existing) {
    existing.status = status;
    if (errorMessage) existing.errorMessage = errorMessage;
  }

  try {
    const prismaStatus =
      status === "WAITING"
        ? SubmissionStatus.WAITING
        : status === "GRADING"
        ? SubmissionStatus.GRADING
        : status === "COMPLETED"
        ? SubmissionStatus.COMPLETED
        : SubmissionStatus.FAILED;

    await judgePrisma.submission.update({
      where: { id: submissionId },
      data: {
        status: prismaStatus,
        errorMessage: errorMessage || null,
      },
    });
  } catch (err) {
    // Handled in memory
  }
}

/**
 * 3. Save Final Submission Verdict
 */
export async function completeSubmissionVerdict(
  submissionId: string,
  data: {
    verdictString: string;
    rawVerdict: string;
    score: number;
    executionTimeMs: number;
    memoryUsedKb: number;
    caseVerdicts: CaseVerdictItem[];
  }
): Promise<StoredSubmission> {
  let existing = memorySubmissions.get(submissionId);
  if (!existing) {
    existing = {
      id: submissionId,
      taskId: "unknown",
      userId: "camper-guest",
      language: "python3",
      code: "",
      status: "COMPLETED",
      verdictString: data.verdictString,
      rawVerdict: data.rawVerdict,
      score: data.score,
      executionTimeMs: data.executionTimeMs,
      memoryUsedKb: data.memoryUsedKb,
      submittedAt: new Date().toISOString(),
      caseVerdicts: data.caseVerdicts,
    };
    memorySubmissions.set(submissionId, existing);
  } else {
    existing.status = "COMPLETED";
    existing.verdictString = data.verdictString;
    existing.rawVerdict = data.rawVerdict;
    existing.score = data.score;
    existing.executionTimeMs = data.executionTimeMs;
    existing.memoryUsedKb = data.memoryUsedKb;
    existing.caseVerdicts = data.caseVerdicts;
  }

  try {
    await judgePrisma.submission.update({
      where: { id: submissionId },
      data: {
        status: SubmissionStatus.COMPLETED,
        verdictString: data.verdictString,
        score: data.score,
        executionTimeMs: data.executionTimeMs,
        memoryUsedKb: data.memoryUsedKb,
      },
    });

    // Save individual test case verdict records if test cases exist in DB
    const testCases = await judgePrisma.testCase.findMany({
      where: { taskId: existing.taskId },
      orderBy: { order: "asc" },
    });

    if (testCases.length > 0) {
      for (const cv of data.caseVerdicts) {
        const matchingTc = testCases.find((tc) => tc.order === cv.order);
        if (matchingTc) {
          const charToEnum: Record<string, CaseVerdict> = {
            P: CaseVerdict.P,
            "-": CaseVerdict.W,
            T: CaseVerdict.T,
            X: CaseVerdict.X,
            M: CaseVerdict.M,
          };

          await judgePrisma.submissionVerdict.create({
            data: {
              submissionId,
              testCaseId: matchingTc.id,
              order: cv.order,
              verdict: charToEnum[cv.verdictChar] || CaseVerdict.W,
              verdictChar: cv.verdictChar,
              executionTimeMs: cv.executionTimeMs,
              memoryUsedKb: cv.memoryUsedKb,
              stdout: cv.stdout,
              stderr: cv.stderr,
            },
          });
        }
      }
    }
  } catch (err) {
    // Memory store remains consistent
  }

  return existing;
}

/**
 * 4. Fetch Submission by ID with task metadata & case verdicts
 */
export async function getSubmissionById(submissionId: string): Promise<StoredSubmission | null> {
  try {
    const sub = await judgePrisma.submission.findUnique({
      where: { id: submissionId },
      include: {
        task: {
          select: { title: true, trackId: true },
        },
        caseVerdicts: {
          orderBy: { order: "asc" },
        },
      },
    });

    if (sub) {
      const task = TASKS_SEED.find((t) => t.id === sub.taskId);
      return {
        id: sub.id,
        taskId: sub.taskId,
        taskTitle: sub.task?.title || task?.title || sub.taskId,
        trackId: sub.task?.trackId || task?.trackId || "POSN-Camp-1",
        userId: sub.userId,
        language: sub.language,
        code: sub.code,
        status: sub.status as StoredSubmission["status"],
        verdictString: sub.verdictString,
        rawVerdict: sub.verdictString.replace(/[[\]]/g, ""),
        score: sub.score,
        executionTimeMs: sub.executionTimeMs || 0,
        memoryUsedKb: sub.memoryUsedKb || 0,
        errorMessage: sub.errorMessage,
        submittedAt: sub.submittedAt.toISOString(),
        caseVerdicts: sub.caseVerdicts.map((cv) => ({
          order: cv.order,
          verdictChar: cv.verdictChar,
          verdictLabel:
            cv.verdictChar === "P"
              ? "Passed"
              : cv.verdictChar === "T"
              ? "Time Limit Exceeded"
              : cv.verdictChar === "X"
              ? "Runtime Error"
              : "Wrong Answer",
          executionTimeMs: cv.executionTimeMs,
          memoryUsedKb: cv.memoryUsedKb,
          passed: cv.verdictChar === "P",
          isSample: cv.order <= 2,
          scoreWeight: 10,
          stdout: cv.stdout || undefined,
          stderr: cv.stderr || undefined,
        })),
      };
    }
  } catch (err) {
    // Fallback to memory
  }

  return memorySubmissions.get(submissionId) || null;
}

/**
 * 5. List Recent Submissions with filters
 */
export async function listSubmissions(filter?: {
  taskId?: string;
  userId?: string;
  status?: string;
  limit?: number;
}): Promise<StoredSubmission[]> {
  const limit = filter?.limit || 50;

  try {
    const where: any = {};
    if (filter?.taskId) where.taskId = filter.taskId;
    if (filter?.userId) where.userId = filter.userId;
    if (filter?.status && filter.status !== "ALL") where.status = filter.status;

    const subs = await judgePrisma.submission.findMany({
      where,
      orderBy: { submittedAt: "desc" },
      take: limit,
      include: {
        task: {
          select: { title: true, trackId: true },
        },
        caseVerdicts: {
          orderBy: { order: "asc" },
        },
      },
    });

    if (subs.length > 0) {
      return subs.map((sub) => {
        const task = TASKS_SEED.find((t) => t.id === sub.taskId);
        return {
          id: sub.id,
          taskId: sub.taskId,
          taskTitle: sub.task?.title || task?.title || sub.taskId,
          trackId: sub.task?.trackId || task?.trackId || "POSN-Camp-1",
          userId: sub.userId,
          language: sub.language,
          code: sub.code,
          status: sub.status as StoredSubmission["status"],
          verdictString: sub.verdictString,
          rawVerdict: sub.verdictString.replace(/[[\]]/g, ""),
          score: sub.score,
          executionTimeMs: sub.executionTimeMs || 0,
          memoryUsedKb: sub.memoryUsedKb || 0,
          errorMessage: sub.errorMessage,
          submittedAt: sub.submittedAt.toISOString(),
          caseVerdicts: sub.caseVerdicts.map((cv) => ({
            order: cv.order,
            verdictChar: cv.verdictChar,
            verdictLabel:
              cv.verdictChar === "P"
                ? "Passed"
                : cv.verdictChar === "T"
                ? "Time Limit Exceeded"
                : cv.verdictChar === "X"
                ? "Runtime Error"
                : "Wrong Answer",
            executionTimeMs: cv.executionTimeMs,
            memoryUsedKb: cv.memoryUsedKb,
            passed: cv.verdictChar === "P",
            isSample: cv.order <= 2,
            scoreWeight: 10,
          })),
        };
      });
    }
  } catch (err) {
    // Fallback to memory
  }

  // Fallback from memory array
  let list = Array.from(memorySubmissions.values()).sort(
    (a, b) => new Date(b.submittedAt).getTime() - new Date(a.submittedAt).getTime()
  );

  if (filter?.taskId) list = list.filter((s) => s.taskId === filter.taskId);
  if (filter?.userId) list = list.filter((s) => s.userId === filter.userId);
  if (filter?.status && filter.status !== "ALL") list = list.filter((s) => s.status === filter.status);

  return list.slice(0, limit);
}
