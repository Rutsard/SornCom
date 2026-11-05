"use client";

// ==============================================================================
// Verdict Display: programming.in.th Style Test Case Grader View
// Shows: [PPPPPPPPPP], [PP-PTPPP], execution time, memory usage, and confetti
// ==============================================================================

import React, { useEffect } from "react";
import confetti from "canvas-confetti";
import { CheckCircle2, XCircle, Clock, AlertTriangle, Layers, Award } from "lucide-react";
import { SubmissionResult } from "@/lib/judge-engine";

interface VerdictDisplayProps {
  verdict: SubmissionResult | null;
  isLoading: boolean;
}

export function VerdictDisplay({ verdict, isLoading }: VerdictDisplayProps) {
  useEffect(() => {
    if (verdict && verdict.score === 100) {
      confetti({
        particleCount: 80,
        spread: 70,
        origin: { y: 0.6 },
        colors: ["#22c55e", "#38bdf8", "#f59e0b", "#a855f7"],
      });
    }
  }, [verdict]);

  if (isLoading) {
    return (
      <div className="flex flex-col items-center justify-center p-8 text-center space-y-3">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-emerald-500"></div>
        <p className="text-sm text-zinc-400 font-mono">
          Grading submission against official test cases...
        </p>
      </div>
    );
  }

  if (!verdict) {
    return (
      <div className="p-6 text-center text-zinc-500 text-sm">
        No submission made yet. Click &quot;Submit to Judge&quot; to test your code against official test cases.
      </div>
    );
  }

  const isFullScore = verdict.score === 100;

  return (
    <div className="space-y-4">
      {/* Verdict Header Summary */}
      <div
        className={`p-4 rounded-lg border flex flex-wrap items-center justify-between gap-4 ${
          isFullScore
            ? "bg-emerald-950/30 border-emerald-800/60 text-emerald-300"
            : verdict.score > 0
            ? "bg-amber-950/30 border-amber-800/60 text-amber-300"
            : "bg-rose-950/30 border-rose-800/60 text-rose-300"
        }`}
      >
        <div className="space-y-1">
          <div className="flex items-center space-x-2">
            {isFullScore ? (
              <CheckCircle2 className="w-5 h-5 text-emerald-400" />
            ) : (
              <AlertTriangle className="w-5 h-5 text-amber-400" />
            )}
            <span className="font-bold text-base">
              {isFullScore ? "Accepted (Full Score)" : `Partial Score (${verdict.score}/100)`}
            </span>
          </div>
          <div className="text-xs font-mono text-zinc-400">
            Passed {verdict.passedCases} of {verdict.totalCases} test cases
          </div>
        </div>

        {/* programming.in.th verdict string format: e.g. [PPPPPPPPPP] */}
        <div className="flex items-center space-x-3">
          <div className="text-right">
            <div className="text-[10px] uppercase tracking-wider text-zinc-400">Verdict</div>
            <div className="font-mono text-xl tracking-widest font-black text-white px-2 py-0.5 rounded bg-zinc-900 border border-zinc-700">
              {verdict.verdictString}
            </div>
          </div>
          <div className="text-right border-l border-zinc-700/60 pl-3">
            <div className="text-[10px] uppercase tracking-wider text-zinc-400">Score</div>
            <div className="font-mono text-xl font-black text-emerald-400">
              {verdict.score} <span className="text-xs text-zinc-500 font-normal">pts</span>
            </div>
          </div>
        </div>
      </div>

      {/* Metrics Row */}
      <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 text-xs font-mono">
        <div className="bg-zinc-900/80 p-2.5 rounded border border-zinc-800 flex items-center space-x-2">
          <Clock className="w-4 h-4 text-sky-400" />
          <div>
            <span className="text-zinc-500">Max Time: </span>
            <span className="text-zinc-200 font-semibold">{verdict.maxExecutionTimeMs} ms</span>
          </div>
        </div>
        <div className="bg-zinc-900/80 p-2.5 rounded border border-zinc-800 flex items-center space-x-2">
          <Layers className="w-4 h-4 text-purple-400" />
          <div>
            <span className="text-zinc-500">Peak Memory: </span>
            <span className="text-zinc-200 font-semibold">{(verdict.maxMemoryUsedKb / 1024).toFixed(1)} MB</span>
          </div>
        </div>
        <div className="bg-zinc-900/80 p-2.5 rounded border border-zinc-800 flex items-center space-x-2 col-span-2 sm:col-span-1">
          <Award className="w-4 h-4 text-amber-400" />
          <div>
            <span className="text-zinc-500">Status: </span>
            <span className="text-zinc-200 font-semibold">
              {verdict.passedCases === verdict.totalCases ? "100% Passed" : `${verdict.passedCases}/${verdict.totalCases}`}
            </span>
          </div>
        </div>
      </div>

      {/* programming.in.th Test Case Grid (Boxes) */}
      <div className="space-y-2">
        <div className="flex items-center justify-between text-xs text-zinc-400">
          <span className="font-medium">Test Case Verdicts</span>
          <div className="flex items-center space-x-3 text-[11px]">
            <span className="flex items-center gap-1">
              <span className="w-2.5 h-2.5 rounded-sm bg-emerald-500 inline-block"></span> P (Passed)
            </span>
            <span className="flex items-center gap-1">
              <span className="w-2.5 h-2.5 rounded-sm bg-rose-500 inline-block"></span> - (Wrong)
            </span>
            <span className="flex items-center gap-1">
              <span className="w-2.5 h-2.5 rounded-sm bg-amber-500 inline-block"></span> T (TLE)
            </span>
            <span className="flex items-center gap-1">
              <span className="w-2.5 h-2.5 rounded-sm bg-purple-500 inline-block"></span> X (RTE)
            </span>
          </div>
        </div>

        <div className="grid grid-cols-5 sm:grid-cols-10 gap-1.5">
          {verdict.cases.map((c) => {
            let badgeBg = "bg-rose-500/20 text-rose-400 border-rose-500/40";
            if (c.verdictChar === "P") {
              badgeBg = "bg-emerald-500/20 text-emerald-400 border-emerald-500/40 font-bold";
            } else if (c.verdictChar === "T") {
              badgeBg = "bg-amber-500/20 text-amber-400 border-amber-500/40";
            } else if (c.verdictChar === "X") {
              badgeBg = "bg-purple-500/20 text-purple-400 border-purple-500/40";
            }

            return (
              <div
                key={c.order}
                title={`Case #${c.order}: ${c.verdictLabel} (${c.executionTimeMs} ms)`}
                className={`flex flex-col items-center justify-center p-2 rounded border font-mono transition-all hover:scale-105 cursor-default ${badgeBg}`}
              >
                <span className="text-[10px] text-zinc-500">#{c.order}</span>
                <span className="text-base font-bold">{c.verdictChar}</span>
                <span className="text-[9px] opacity-75">{c.executionTimeMs}ms</span>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
