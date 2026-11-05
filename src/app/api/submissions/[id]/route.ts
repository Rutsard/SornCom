// ==============================================================================
// GET /api/submissions/[id]
// Fetches real-time status and verdict breakdown for a single submission
// ==============================================================================

import { NextResponse } from "next/server";
import { getSubmissionById } from "@/lib/db-judge";

export async function GET(
  request: Request,
  { params }: { params: { id: string } }
) {
  try {
    const submissionId = params.id;
    const submission = await getSubmissionById(submissionId);

    if (!submission) {
      return NextResponse.json(
        { success: false, error: `Submission ${submissionId} not found.` },
        { status: 404 }
      );
    }

    return NextResponse.json({
      success: true,
      submission,
    });
  } catch (error) {
    return NextResponse.json(
      { success: false, error: (error as Error).message },
      { status: 500 }
    );
  }
}
