// ==============================================================================
// GET /api/tasks
// Query params: ?track=POSN-Camp-1 | Eng-ComProg & tag=... & difficulty=...
// ==============================================================================

import { NextResponse } from "next/server";
import { getTasksList } from "@/lib/db-judge";

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const track = searchParams.get("track") || undefined;
    const difficulty = searchParams.get("difficulty") || undefined;
    const tag = searchParams.get("tag") || undefined;

    let tasks = await getTasksList(track);

    if (difficulty) {
      tasks = tasks.filter((t) => t.difficulty === difficulty);
    }

    if (tag) {
      tasks = tasks.filter((t) => t.tags.some((tg) => tg.toLowerCase() === tag.toLowerCase()));
    }

    return NextResponse.json({
      success: true,
      count: tasks.length,
      tasks,
    });
  } catch (error) {
    return NextResponse.json(
      {
        success: false,
        error: (error as Error).message,
      },
      { status: 500 }
    );
  }
}
