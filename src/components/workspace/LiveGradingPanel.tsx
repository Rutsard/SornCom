"use client";

// ==============================================================================
// Live Real-Time Grading Panel
// Polls /api/submissions/[id] until grading completes
// Displays live status transitions (WAITING -> GRADING -> COMPLETED)
// programming.in.th style verdicts [PPPP-P] & test-case breakdown table
// ==============================================================================

import React, { useState, useEffect } from "react";
import confetti from "canvas-confetti";
import Link from "next/link";
import {
  Clock,
  Cpu,
  Layers,
  Award,
  CheckCircle2,
  AlertTriangle,
  XCircle,
  ExternalLink,
  Loader2,
  Hourglass,
  Cog,
} from "lucide-react";
import { StoredSubmission } from "@/lib/db-judge";

interface LiveGradingPanelProps {
  submissionId: string | null;
  initialData?: StoredSubmission | null;
  onGradingComplete?: (sub: StoredSubmission) => void;
}

export function LiveGradingPanel({
  submissionId,
  initialData,
  onGradingComplete,
}: LiveGradingPanelProps) {
  const [submission, setSubmission] = useState<StoredSubmission | null>(initialData || null);
  const [isPolling, setIsPolling] = useState(false);

  useEffect(() => {
    if (!submissionId) {
      setSubmission(null);
      return;
    }

    let isMounted = true;
    let timeoutId: NodeJS.Timeout;

    const poll = async () => {
      try {
        const res = await fetch(`/api/submissions/${submissionId}`);
        const data = await res.json();

        if (data.success && isMounted) {
          const sub = data.submission as StoredSubmission;
          setSubmission(sub);

          if (sub.status === "WAITING" || sub.status === "GRADING") {
            setIsPolling(true);
            timeoutId = setTimeout(poll, 400);
          } else {
            setIsPolling(false);
            if (onGradingComplete) {
              onGradingComplete(sub);
            }
            if (sub.score === 100) {
              confetti({
                particleCount: 80,
                spread: 70,
                origin: { y: 0.6 },
                colors: ["#22c55e", "#38bdf8", "#f59e0b", "#a855f7"],
              });
            }
          }
        }
      } catch (err) {
        console.error("Polling error", err);
        if (isMounted) {
          timeoutId = setTimeout(poll, 1000);
        }
      }
    };

    poll();

    return () => {
      isMounted = false;
      clearTimeout(timeoutId);
    };
  }, [submissionId, onGradingComplete]);

  if (!submissionId && !submission) {
    return (
      <div className="p-8 text-center text-zinc-500 text-sm">
        No submission made yet. Click &quot;Submit to Judge&quot; to test your code against official test cases.
      </div>
    );
  }

  const status = submission?.status || "WAITING";
  const isFullScore = submission?.score === 100;
  const isCompleted = status === "COMPLETED";

  return (
    <div className="space-y-4">
      {/* 1. Live Status Header Card */}
      <div
        className={`p-4 rounded-xl border transition-all ${
          status === "WAITING"
            ? "bg-amber-950/20 border-amber-800/50 text-amber-300"
            : status === "GRADING"
            ? "bg-sky-950/20 border-sky-800/50 text-sky-300"
            : isFullScore
            ? "bg-emerald-950/30 border-emerald-800/60 text-emerald-300"
            : submission?.score && submission.score > 0
            ? "bg-amber-950/30 border-amber-800/60 text-amber-300"
            : "bg-rose-950/30 border-rose-800/60 text-rose-300"
        }`}
      >
        <div className="flex flex-wrap items-center justify-between gap-4">
          {/* Status Badge & Subtext */}
          <div className="space-y-1">
            <div className="flex items-center space-x-2">
              {status === "WAITING" && (
                <span className="flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-mono font-bold bg-amber-500/20 text-amber-400 border border-amber-500/30">
                  <Hourglass className="w-3.5 h-3.5 animate-spin" />
                  <span>WAITING IN QUEUE</span>
                </span>
              )}

              {status === "GRADING" && (
                <span className="flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-mono font-bold bg-sky-500/20 text-sky-400 border border-sky-500/30">
                  <Cog className="w-3.5 h-3.5 animate-spin" />
                  <span>GRADING IN PROGRESS</span>
                </span>
              )}

              {isCompleted && (
                <span
                  className={`flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-mono font-bold border ${
                    isFullScore
                      ? "bg-emerald-500/20 text-emerald-400 border-emerald-500/30"
                      : "bg-amber-500/20 text-amber-400 border-amber-500/30"
                  }`}
                >
                  {isFullScore ? <CheckCircle2 className="w-3.5 h-3.5" /> : <AlertTriangle className="w-3.5 h-3.5" />}
                  <span>{isFullScore ? "ACCEPTED (FULL SCORE)" : "PARTIAL SCORE"}</span>
                </span>
              )}

              {status === "FAILED" && (
                <span className="flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-mono font-bold bg-rose-500/20 text-rose-400 border border-rose-500/30">
                  <XCircle className="w-3.5 h-3.5" />
                  <span>EXECUTION FAILED</span>
                </span>
              )}

              <span className="text-xs font-mono text-zinc-500">ID: {submission?.id}</span>
            </div>

            <p className="text-xs text-zinc-400 font-mono">
              {status === "WAITING" && "Job dispatched to Redis queue. Awaiting grader worker..."}
              {status === "GRADING" && "Executing Python 3 against hidden test cases (.in & .sol)..."}
              {isCompleted &&
                `Completed: ${submission?.caseVerdicts.filter((c) => c.passed).length} of ${
                  submission?.caseVerdicts.length
                } test cases passed`}
              {status === "FAILED" && (submission?.errorMessage || "Execution crashed.")}
            </p>
          </div>

          {/* Compact Verdict String [PPPP-P] and Score */}
          <div className="flex items-center space-x-3">
            {isCompleted && (
              <>
                <div className="text-right">
                  <div className="text-[10px] uppercase tracking-wider text-zinc-400">Verdict</div>
                  <div className="font-mono text-xl tracking-widest font-black text-white px-2.5 py-0.5 rounded bg-zinc-900 border border-zinc-700 shadow-inner">
                    {submission.verdictString}
                  </div>
                </div>

                <div className="text-right border-l border-zinc-700/60 pl-3">
                  <div className="text-[10px] uppercase tracking-wider text-zinc-400">Score</div>
                  <div className="font-mono text-xl font-black text-emerald-400">
                    {submission.score} <span className="text-xs text-zinc-500 font-normal">pts</span>
                  </div>
                </div>
              </>
            )}

            {(status === "WAITING" || status === "GRADING") && (
              <div className="flex items-center space-x-2 text-xs font-mono text-zinc-400">
                <Loader2 className="w-4 h-4 animate-spin text-sky-400" />
                <span>Grading live...</span>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* 2. Metrics Row (Execution Time & Peak Memory) */}
      {isCompleted && (
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 text-xs font-mono">
          <div className="bg-zinc-900/80 p-2.5 rounded-lg border border-zinc-800 flex items-center space-x-2">
            <Clock className="w-4 h-4 text-sky-400" />
            <div>
              <span className="text-zinc-500">Max Time: </span>
              <span className="text-zinc-200 font-semibold">{submission.executionTimeMs} ms</span>
            </div>
          </div>

          <div className="bg-zinc-900/80 p-2.5 rounded-lg border border-zinc-800 flex items-center space-x-2">
            <Layers className="w-4 h-4 text-purple-400" />
            <div>
              <span className="text-zinc-500">Peak Memory: </span>
              <span className="text-zinc-200 font-semibold">
                {(submission.memoryUsedKb / 1024).toFixed(1)} MB
              </span>
            </div>
          </div>

          <div className="bg-zinc-900/80 p-2.5 rounded-lg border border-zinc-800 flex items-center space-x-2 col-span-2 sm:col-span-1">
            <Award className="w-4 h-4 text-amber-400" />
            <div>
              <span className="text-zinc-500">Verdict Summary: </span>
              <span className="text-zinc-200 font-semibold">{submission.rawVerdict}</span>
            </div>
          </div>
        </div>
      )}

      {/* 3. programming.in.th Test Case Boxes */}
      {isCompleted && submission.caseVerdicts.length > 0 && (
        <div className="space-y-2">
          <div className="flex items-center justify-between text-xs text-zinc-400">
            <span className="font-semibold text-zinc-300">Test Case Verdicts</span>
            <div className="flex items-center space-x-3 text-[11px] font-mono">
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

          {/* Test Case Badges Grid */}
          <div className="grid grid-cols-5 sm:grid-cols-10 gap-1.5">
            {submission.caseVerdicts.map((c) => {
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
                  className={`flex flex-col items-center justify-center p-2 rounded-lg border font-mono transition-transform hover:scale-105 cursor-default ${badgeBg}`}
                >
                  <span className="text-[10px] text-zinc-500">#{c.order}</span>
                  <span className="text-base font-bold">{c.verdictChar}</span>
                  <span className="text-[9px] opacity-75">{c.executionTimeMs}ms</span>
                </div>
              );
            })}
          </div>
        </div>
      )}

      {/* 4. Detailed Test-Case Breakdown Table */}
      {isCompleted && submission.caseVerdicts.length > 0 && (
        <div className="space-y-2 pt-2">
          <div className="flex items-center justify-between text-xs text-zinc-400">
            <span className="font-semibold text-zinc-300">Detailed Case Breakdown</span>
            <Link
              href="/submissions"
              className="text-xs text-sky-400 hover:text-sky-300 flex items-center gap-1 font-mono transition-colors"
            >
              <span>View All Submissions</span>
              <ExternalLink className="w-3 h-3" />
            </Link>
          </div>

          <div className="border border-zinc-800 rounded-lg overflow-hidden bg-zinc-950">
            <table className="w-full text-left text-xs font-mono">
              <thead className="bg-zinc-900/90 text-zinc-400 border-b border-zinc-800">
                <tr>
                  <th className="py-2 px-3 w-16">Case</th>
                  <th className="py-2 px-3 w-24">Verdict</th>
                  <th className="py-2 px-3">Result Description</th>
                  <th className="py-2 px-3 w-24 text-right">Time</th>
                  <th className="py-2 px-3 w-28 text-right">Memory</th>
                  <th className="py-2 px-3 w-20 text-right">Score</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-zinc-800/40">
                {submission.caseVerdicts.map((c) => (
                  <tr key={c.order} className="hover:bg-zinc-900/30">
                    <td className="py-2 px-3 text-zinc-400">#{c.order}</td>
                    <td className="py-2 px-3">
                      <span
                        className={`inline-block w-6 text-center py-0.5 rounded text-xs font-bold ${
                          c.verdictChar === "P"
                            ? "bg-emerald-500/20 text-emerald-400 border border-emerald-500/30"
                            : c.verdictChar === "T"
                            ? "bg-amber-500/20 text-amber-400 border border-amber-500/30"
                            : "bg-rose-500/20 text-rose-400 border border-rose-500/30"
                        }`}
                      >
                        {c.verdictChar}
                      </span>
                    </td>
                    <td className="py-2 px-3 text-zinc-300">
                      <span>{c.verdictLabel}</span>
                      {c.isSample && <span className="ml-2 text-[10px] text-zinc-500 font-sans">(Sample)</span>}
                    </td>
                    <td className="py-2 px-3 text-right text-zinc-400">{c.executionTimeMs} ms</td>
                    <td className="py-2 px-3 text-right text-zinc-400">
                      {(c.memoryUsedKb / 1024).toFixed(1)} MB
                    </td>
                    <td className="py-2 px-3 text-right font-bold text-zinc-200">
                      {c.passed ? `+${c.scoreWeight}` : "0"}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}
    </div>
  );
}
