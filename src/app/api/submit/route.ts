// ==============================================================================
// POST /api/submit
// Handles official submission, rate limiting, and real-time verdicts
// ==============================================================================

import { NextResponse } from "next/server";
import { gradeSubmission } from "@/lib/judge-engine";
import { checkRateLimit } from "@/lib/redis";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { taskId, code, userId = "camper-guest" } = body;

    if (!taskId || typeof code !== "string") {
      return NextResponse.json(
        { success: false, error: "Missing taskId or code." },
        { status: 400 }
      );
    }

    // Rate Limiting (5 submissions per 30 seconds)
    const clientIp = request.headers.get("x-forwarded-for") || "local-camper";
    const rateCheck = await checkRateLimit(`${clientIp}:${userId}`, 5, 30);

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

    // Run Auto-Grader
    const verdictResult = await gradeSubmission(taskId, code, userId);

    return NextResponse.json({
      success: true,
      data: verdictResult,
      remainingQuota: rateCheck.remaining,
    });
  } catch (error) {
    console.error("[Submit API Error]", error);
    return NextResponse.json(
      {
        success: false,
        error: (error as Error).message || "Internal auto-grader error.",
      },
      { status: 500 }
    );
  }
}
