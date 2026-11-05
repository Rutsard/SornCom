"use client";

// ==============================================================================
// Split-Screen Workspace Container
// Handles dual-pane layout, Sample IO transfer, and Code Tracing Exam toggle
// ==============================================================================

import React, { useState } from "react";
import Link from "next/link";
import { ArrowLeft, Code, FileQuestion, Sparkles } from "lucide-react";
import { ProblemPane } from "./ProblemPane";
import { EditorPane } from "./EditorPane";
import { CodeTracingQuiz } from "./CodeTracingQuiz";
import { TaskSeed } from "@/lib/seed-data";

interface SplitWorkspaceProps {
  task: TaskSeed;
}

export function SplitWorkspace({ task }: SplitWorkspaceProps) {
  const [activeMode, setActiveMode] = useState<"workspace" | "tracing">("workspace");
  const [sharedInput, setSharedInput] = useState<string | undefined>(undefined);

  const isPosn = task.trackId === "POSN-Camp-1";

  const handleLoadSample = (sampleInput: string) => {
    setSharedInput(sampleInput);
  };

  return (
    <div className="h-screen flex flex-col bg-zinc-950 text-zinc-100 overflow-hidden">
      {/* Top Navigation Bar */}
      <header className="h-14 border-b border-zinc-800 bg-zinc-900/90 backdrop-blur px-4 flex items-center justify-between shrink-0">
        <div className="flex items-center space-x-3">
          <Link
            href="/tasks"
            className="flex items-center space-x-1.5 text-xs text-zinc-400 hover:text-white px-2.5 py-1.5 rounded-md hover:bg-zinc-800 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back to Tasks</span>
          </Link>

          <div className="h-4 w-[1px] bg-zinc-700"></div>

          <div className="flex items-center space-x-2">
            <span className="font-mono font-bold text-xs px-2 py-0.5 rounded bg-zinc-800 text-zinc-200">
              {task.id}
            </span>
            <span className="font-bold text-sm text-white truncate max-w-[240px] sm:max-w-md">
              {task.title}
            </span>
          </div>
        </div>

        {/* Mode Switcher: Coding Workspace vs Code Tracing Mode */}
        <div className="flex items-center bg-zinc-950 p-1 rounded-lg border border-zinc-800 text-xs">
          <button
            onClick={() => setActiveMode("workspace")}
            className={`flex items-center space-x-1.5 px-3 py-1.5 rounded-md font-medium transition-all ${
              activeMode === "workspace"
                ? "bg-zinc-800 text-white shadow-sm"
                : "text-zinc-400 hover:text-zinc-200"
            }`}
          >
            <Code className="w-3.5 h-3.5 text-sky-400" />
            <span>Coding Workspace</span>
          </button>

          {task.hasTracingQuiz && (
            <button
              onClick={() => setActiveMode("tracing")}
              className={`flex items-center space-x-1.5 px-3 py-1.5 rounded-md font-medium transition-all ${
                activeMode === "tracing"
                  ? "bg-sky-600 text-white shadow-sm shadow-sky-600/30"
                  : "text-zinc-400 hover:text-zinc-200"
              }`}
            >
              <FileQuestion className="w-3.5 h-3.5" />
              <span>โหมดข้อเขียน (Paper Trace)</span>
              <span className="text-[10px] bg-sky-400/20 text-sky-300 px-1.5 py-0.2 rounded font-mono">
                POSN
              </span>
            </button>
          )}
        </div>
      </header>

      {/* Main Content Area */}
      <div className="flex-1 overflow-hidden">
        {activeMode === "workspace" ? (
          <div className="h-full grid grid-cols-1 lg:grid-cols-2">
            {/* Left Pane: Problem Description */}
            <div className="h-full overflow-hidden bg-zinc-900/30 border-r border-zinc-800">
              <ProblemPane task={task} onLoadSampleToRunner={handleLoadSample} />
            </div>

            {/* Right Pane: Editor & Runner */}
            <div className="h-full overflow-hidden">
              <EditorPane task={task} externalInput={sharedInput} />
            </div>
          </div>
        ) : (
          <div className="h-full overflow-y-auto bg-zinc-950 py-8">
            <CodeTracingQuiz task={task} />
          </div>
        )}
      </div>
    </div>
  );
}
