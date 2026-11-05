// ==============================================================================
// POST /api/submissions - Enqueue new submission with status WAITING
// GET /api/submissions - List submissions with filtering
// ==============================================================================

import { NextResponse } from "next/server";
import { createInitialSubmission, listSubmissions } from "@/lib/db-judge";
import { enqueueGradingJob, checkRateLimit } from "@/lib/redis";
import { processGradingJob } from "@/lib/judge-engine";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const taskId = body.taskId;
    const sourceCode = body.sourceCode || body.code;
    const userId = body.userId || "camper-guest";

    if (!taskId || typeof sourceCode !== "string") {
      return NextResponse.json(
        { success: false, error: "Missing required fields: taskId and sourceCode." },
        { status: 400 }
      );
    }

    // 1. Rate Limiting Check
    const clientIp = request.headers.get("x-forwarded-for") || "local-client";
    const rateCheck = await checkRateLimit(`${clientIp}:${userId}`, 10, 30);

    if (!rateCheck.allowed) {
      return NextResponse.json(
        {
          success: false,
          error: `Rate limit exceeded. Please wait ${rateCheck.resetInSeconds}s before submitting again.`,
          retryAfter: rateCheck.resetInSeconds,
        },
        { status: 429 }
      );
    }

    // 2. Save initial submission status as WAITING in judge_db
    const initialSubmission = await createInitialSubmission({
      taskId,
      sourceCode,
      userId,
    });

    // 3. Push grading job to Redis queue & dispatch to worker
    const job = {
      submissionId: initialSubmission.id,
      taskId,
      sourceCode,
      userId,
      enqueuedAt: initialSubmission.submittedAt,
    };
    await enqueueGradingJob(job);

    // Background asynchronous execution worker dispatch (with brief simulated queue interval)
    setTimeout(async () => {
      try {
        await processGradingJob(job);
      } catch (err) {
        console.error("[GradingWorker Error]", err);
      }
    }, 200);

    return NextResponse.json({
      success: true,
      submissionId: initialSubmission.id,
      status: initialSubmission.status,
      taskId: initialSubmission.taskId,
      userId: initialSubmission.userId,
      submittedAt: initialSubmission.submittedAt,
      message: "Submission received and queued for grading.",
    });
  } catch (error) {
    console.error("[Submission API Error]", error);
    return NextResponse.json(
      {
        success: false,
        error: (error as Error).message || "Internal server error submitting solution.",
      },
      { status: 500 }
    );
  }
}

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const taskId = searchParams.get("taskId") || undefined;
    const userId = searchParams.get("userId") || undefined;
    const status = searchParams.get("status") || undefined;
    const limit = searchParams.get("limit") ? parseInt(searchParams.get("limit")!, 10) : 50;

    const submissions = await listSubmissions({ taskId, userId, status, limit });

    return NextResponse.json({
      success: true,
      count: submissions.length,
      submissions,
    });
  } catch (error) {
    return NextResponse.json(
      { success: false, error: (error as Error).message },
      { status: 500 }
    );
  }
}
