// ==============================================================================
// GET /api/tasks/[id]
// Returns full problem details for the split-screen workspace
// ==============================================================================

import { NextResponse } from "next/server";
import { getTaskById } from "@/lib/db-judge";

export async function GET(
  request: Request,
  { params }: { params: { id: string } }
) {
  try {
    const task = await getTaskById(params.id);

    if (!task) {
      return NextResponse.json(
        { success: false, error: "Task not found" },
        { status: 404 }
      );
    }

    // Hide secret test cases from the client workspace (only return samples)
    const publicTestCases = task.testCases.map((tc, index) => ({
      order: index + 1,
      isSample: tc.isSample,
      input: tc.isSample ? tc.input : "Hidden test case",
      expectedOutput: tc.isSample ? tc.expectedOutput : "Hidden test case",
      scoreWeight: tc.scoreWeight,
    }));

    return NextResponse.json({
      success: true,
      task: {
        ...task,
        testCases: publicTestCases,
        totalCasesCount: task.testCases.length,
      },
    });
  } catch (error) {
    return NextResponse.json(
      { success: false, error: (error as Error).message },
      { status: 500 }
    );
  }
}
