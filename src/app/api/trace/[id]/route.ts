// ==============================================================================
// POST /api/trace/[id]
// Validates paper exam prediction for Code Tracing Mode
// ==============================================================================

import { NextResponse } from "next/server";
import { getTaskById } from "@/lib/db-judge";
import { normalizeOutput } from "@/lib/judge-engine";

export async function POST(
  request: Request,
  { params }: { params: { id: string } }
) {
  try {
    const task = await getTaskById(params.id);

    if (!task || !task.hasTracingQuiz) {
      return NextResponse.json(
        { success: false, error: "Code tracing quiz not found for this task." },
        { status: 404 }
      );
    }

    const { userPrediction } = await request.json();

    if (typeof userPrediction !== "string") {
      return NextResponse.json(
        { success: false, error: "Missing user prediction." },
        { status: 400 }
      );
    }

    const userNorm = normalizeOutput(userPrediction);
    const expectedNorm = normalizeOutput(task.tracingExpectedOutput || "");
    const isCorrect = userNorm === expectedNorm;

    return NextResponse.json({
      success: true,
      isCorrect,
      expectedOutput: isCorrect ? expectedNorm : undefined, // reveal only on success or client request
      explanation: isCorrect ? task.tracingExplanation : "คำตอบยังไม่ถูกต้อง ลองไล่ค่าตัวแปรทีละบรรทัดอีกครั้งนะ!",
      userPrediction: userNorm,
    });
  } catch (error) {
    return NextResponse.json(
      { success: false, error: (error as Error).message },
      { status: 500 }
    );
  }
}
