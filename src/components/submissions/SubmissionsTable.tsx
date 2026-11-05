"use client";

// ==============================================================================
// Submissions Archive Table Component
// programming.in.th inspired live submissions history
// Filterable by Track, Task ID, Status with real-time refresh
// ==============================================================================

import React, { useState, useEffect, useMemo } from "react";
import Link from "next/link";
import {
  Clock,
  Cpu,
  Search,
  Filter,
  RefreshCw,
  Hourglass,
  Cog,
  CheckCircle2,
  AlertTriangle,
  XCircle,
  Eye,
  ExternalLink,
  Code2,
} from "lucide-react";
import { StoredSubmission } from "@/lib/db-judge";

interface SubmissionsTableProps {
  initialSubmissions: StoredSubmission[];
}

export function SubmissionsTable({ initialSubmissions }: SubmissionsTableProps) {
  const [submissions, setSubmissions] = useState<StoredSubmission[]>(initialSubmissions);
  const [selectedTrack, setSelectedTrack] = useState<string>("ALL");
  const [selectedStatus, setSelectedStatus] = useState<string>("ALL");
  const [searchQuery, setSearchQuery] = useState("");
  const [autoRefresh, setAutoRefresh] = useState(true);
  const [isRefreshing, setIsRefreshing] = useState(false);
  const [inspectingSub, setInspectingSub] = useState<StoredSubmission | null>(null);

  const fetchSubmissions = async () => {
    setIsRefreshing(true);
    try {
      const res = await fetch("/api/submissions?limit=100");
      const data = await res.json();
      if (data.success) {
        setSubmissions(data.submissions);
      }
    } catch (err) {
      console.error(err);
    } finally {
      setIsRefreshing(false);
    }
  };

  useEffect(() => {
    if (!autoRefresh) return;
    const interval = setInterval(fetchSubmissions, 2000);
    return () => clearInterval(interval);
  }, [autoRefresh]);

  // Filtered submissions
  const filteredSubmissions = useMemo(() => {
    return submissions.filter((sub) => {
      if (selectedTrack !== "ALL" && sub.trackId !== selectedTrack) {
        return false;
      }
      if (selectedStatus !== "ALL" && sub.status !== selectedStatus) {
        return false;
      }
      if (searchQuery.trim()) {
        const q = searchQuery.toLowerCase();
        const matchesId = sub.id.toLowerCase().includes(q);
        const matchesTask = sub.taskId.toLowerCase().includes(q);
        const matchesUser = sub.userId.toLowerCase().includes(q);
        if (!matchesId && !matchesTask && !matchesUser) return false;
      }
      return true;
    });
  }, [submissions, selectedTrack, selectedStatus, searchQuery]);

  return (
    <div className="space-y-6">
      {/* Filter and Control Bar */}
      <div className="flex flex-wrap items-center justify-between gap-4 bg-zinc-900/60 p-4 rounded-xl border border-zinc-800">
        <div className="flex flex-wrap items-center gap-3">
          {/* Search */}
          <div className="relative w-64">
            <Search className="w-4 h-4 text-zinc-500 absolute left-3 top-2.5" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Filter by sub ID, task, or user..."
              className="w-full bg-zinc-950 border border-zinc-800 rounded-lg pl-9 pr-3 py-1.5 text-xs font-mono text-white placeholder-zinc-500 focus:outline-none focus:border-sky-500"
            />
          </div>

          {/* Track Filter */}
          <select
            value={selectedTrack}
            onChange={(e) => setSelectedTrack(e.target.value)}
            className="bg-zinc-950 border border-zinc-800 rounded-lg px-3 py-1.5 text-xs font-medium text-zinc-300 focus:outline-none focus:border-sky-500"
          >
            <option value="ALL">All Tracks</option>
            <option value="POSN-Camp-1">POSN Camp 1</option>
            <option value="Eng-ComProg">Engineering ComProg</option>
          </select>

          {/* Status Filter */}
          <select
            value={selectedStatus}
            onChange={(e) => setSelectedStatus(e.target.value)}
            className="bg-zinc-950 border border-zinc-800 rounded-lg px-3 py-1.5 text-xs font-medium text-zinc-300 focus:outline-none focus:border-sky-500"
          >
            <option value="ALL">All Statuses</option>
            <option value="WAITING">WAITING</option>
            <option value="GRADING">GRADING</option>
            <option value="COMPLETED">COMPLETED</option>
            <option value="FAILED">FAILED</option>
          </select>
        </div>

        {/* Live Controls */}
        <div className="flex items-center space-x-3 text-xs">
          <label className="flex items-center space-x-2 text-zinc-400 cursor-pointer font-mono text-[11px]">
            <input
              type="checkbox"
              checked={autoRefresh}
              onChange={(e) => setAutoRefresh(e.target.checked)}
              className="rounded bg-zinc-950 border-zinc-700 text-sky-500 focus:ring-0"
            />
            <span className="flex items-center gap-1.5">
              <span className={`w-2 h-2 rounded-full ${autoRefresh ? "bg-emerald-500 animate-pulse" : "bg-zinc-600"}`}></span>
              Live Polling (2s)
            </span>
          </label>

          <button
            onClick={fetchSubmissions}
            disabled={isRefreshing}
            className="p-1.5 bg-zinc-800 hover:bg-zinc-700 text-zinc-300 rounded-md transition-colors"
            title="Manual refresh"
          >
            <RefreshCw className={`w-3.5 h-3.5 ${isRefreshing ? "animate-spin" : ""}`} />
          </button>
        </div>
      </div>

      {/* Submissions Table */}
      <div className="bg-zinc-950 rounded-xl border border-zinc-800 overflow-hidden shadow-2xl">
        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs font-mono">
            <thead className="bg-zinc-900/90 text-zinc-400 font-semibold uppercase tracking-wider border-b border-zinc-800">
              <tr>
                <th className="py-3 px-4 w-28">Submission ID</th>
                <th className="py-3 px-4 w-48">Problem</th>
                <th className="py-3 px-4 w-32">Track</th>
                <th className="py-3 px-4 w-28">User</th>
                <th className="py-3 px-4 w-36">Status</th>
                <th className="py-3 px-4">Verdict</th>
                <th className="py-3 px-4 w-24 text-right">Score</th>
                <th className="py-3 px-4 w-28 text-right">Time / Mem</th>
                <th className="py-3 px-4 w-24 text-center">Action</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-zinc-800/60">
              {filteredSubmissions.map((sub) => {
                const isPosn = sub.trackId === "POSN-Camp-1";
                const isFull = sub.score === 100;

                return (
                  <tr key={sub.id} className="hover:bg-zinc-900/40 transition-colors">
                    {/* ID */}
                    <td className="py-3 px-4 text-zinc-400 font-bold truncate max-w-[120px]">
                      {sub.id}
                    </td>

                    {/* Problem */}
                    <td className="py-3 px-4">
                      <Link
                        href={`/tasks/${sub.taskId}`}
                        className="font-bold text-zinc-200 hover:text-sky-400 transition-colors flex items-center gap-1.5"
                      >
                        <span className="px-1.5 py-0.2 rounded bg-zinc-800 text-[10px] text-zinc-300 border border-zinc-700">
                          {sub.taskId}
                        </span>
                        <span className="truncate max-w-[140px] font-sans font-medium text-xs">
                          {sub.taskTitle || sub.taskId}
                        </span>
                      </Link>
                    </td>

                    {/* Track */}
                    <td className="py-3 px-4">
                      <span
                        className={`text-[10px] px-2 py-0.5 rounded-full font-medium inline-block border font-sans ${
                          isPosn
                            ? "bg-sky-500/10 text-sky-400 border-sky-500/30"
                            : "bg-orange-500/10 text-orange-400 border-orange-500/30"
                        }`}
                      >
                        {isPosn ? "POSN Camp 1" : "Eng ComProg"}
                      </span>
                    </td>

                    {/* User */}
                    <td className="py-3 px-4 text-zinc-400 font-sans text-xs truncate max-w-[100px]">
                      {sub.userId}
                    </td>

                    {/* Status Badge */}
                    <td className="py-3 px-4">
                      {sub.status === "WAITING" && (
                        <span className="inline-flex items-center gap-1 text-[11px] font-bold text-amber-400 bg-amber-500/10 border border-amber-500/30 px-2 py-0.5 rounded-full">
                          <Hourglass className="w-3 h-3 animate-spin" />
                          <span>WAITING</span>
                        </span>
                      )}

                      {sub.status === "GRADING" && (
                        <span className="inline-flex items-center gap-1 text-[11px] font-bold text-sky-400 bg-sky-500/10 border border-sky-500/30 px-2 py-0.5 rounded-full">
                          <Cog className="w-3 h-3 animate-spin" />
                          <span>GRADING</span>
                        </span>
                      )}

                      {sub.status === "COMPLETED" && (
                        <span
                          className={`inline-flex items-center gap-1 text-[11px] font-bold px-2 py-0.5 rounded-full border ${
                            isFull
                              ? "text-emerald-400 bg-emerald-500/10 border-emerald-500/30"
                              : "text-amber-400 bg-amber-500/10 border-amber-500/30"
                          }`}
                        >
                          {isFull ? <CheckCircle2 className="w-3 h-3" /> : <AlertTriangle className="w-3 h-3" />}
                          <span>{isFull ? "ACCEPTED" : "PARTIAL"}</span>
                        </span>
                      )}

                      {sub.status === "FAILED" && (
                        <span className="inline-flex items-center gap-1 text-[11px] font-bold text-rose-400 bg-rose-500/10 border border-rose-500/30 px-2 py-0.5 rounded-full">
                          <XCircle className="w-3 h-3" />
                          <span>FAILED</span>
                        </span>
                      )}
                    </td>

                    {/* Verdict (e.g. [PPPP-P]) */}
                    <td className="py-3 px-4">
                      {sub.status === "COMPLETED" ? (
                        <div className="flex items-center space-x-1.5">
                          <span className="font-bold tracking-widest text-zinc-100 bg-zinc-900 px-2 py-0.5 rounded border border-zinc-800">
                            {sub.verdictString}
                          </span>
                        </div>
                      ) : (
                        <span className="text-zinc-600">Evaluating...</span>
                      )}
                    </td>

                    {/* Score */}
                    <td className="py-3 px-4 text-right">
                      {sub.status === "COMPLETED" ? (
                        <span className={`font-bold ${isFull ? "text-emerald-400" : "text-amber-400"}`}>
                          {sub.score} <span className="text-[10px] text-zinc-500 font-normal">pts</span>
                        </span>
                      ) : (
                        <span className="text-zinc-600">-</span>
                      )}
                    </td>

                    {/* Time / Memory */}
                    <td className="py-3 px-4 text-right text-zinc-400">
                      {sub.status === "COMPLETED" ? (
                        <div>
                          <div>{sub.executionTimeMs} ms</div>
                          <div className="text-[10px] text-zinc-500">
                            {(sub.memoryUsedKb / 1024).toFixed(1)} MB
                          </div>
                        </div>
                      ) : (
                        <span className="text-zinc-600">-</span>
                      )}
                    </td>

                    {/* Action */}
                    <td className="py-3 px-4 text-center">
                      <button
                        onClick={() => setInspectingSub(sub)}
                        className="p-1.5 bg-zinc-900 hover:bg-zinc-800 text-zinc-300 hover:text-white rounded border border-zinc-800 transition-colors"
                        title="Inspect Code & Verdict Details"
                      >
                        <Eye className="w-3.5 h-3.5" />
                      </button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>

          {filteredSubmissions.length === 0 && (
            <div className="p-12 text-center text-zinc-500 text-sm font-sans">
              No submissions found. Submit code from the problem workspace to see it appear live here!
            </div>
          )}
        </div>
      </div>

      {/* Inspection Modal */}
      {inspectingSub && (
        <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4 overflow-y-auto">
          <div className="bg-zinc-950 border border-zinc-800 rounded-2xl max-w-3xl w-full max-h-[90vh] flex flex-col shadow-2xl overflow-hidden">
            {/* Modal Header */}
            <div className="p-4 bg-zinc-900 border-b border-zinc-800 flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <Code2 className="w-5 h-5 text-sky-400" />
                <h3 className="font-bold text-zinc-100 text-sm">
                  Submission Details ({inspectingSub.id})
                </h3>
              </div>
              <button
                onClick={() => setInspectingSub(null)}
                className="text-zinc-400 hover:text-white p-1 rounded hover:bg-zinc-800"
              >
                ✕
              </button>
            </div>

            {/* Modal Body */}
            <div className="p-6 overflow-y-auto space-y-6">
              {/* Overview Cards */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-xs font-mono">
                <div className="bg-zinc-900/60 p-3 rounded-lg border border-zinc-800">
                  <span className="text-zinc-500">Problem</span>
                  <div className="font-bold text-white mt-0.5">{inspectingSub.taskId}</div>
                </div>
                <div className="bg-zinc-900/60 p-3 rounded-lg border border-zinc-800">
                  <span className="text-zinc-500">Verdict</span>
                  <div className="font-bold text-emerald-400 mt-0.5">{inspectingSub.verdictString}</div>
                </div>
                <div className="bg-zinc-900/60 p-3 rounded-lg border border-zinc-800">
                  <span className="text-zinc-500">Score</span>
                  <div className="font-bold text-white mt-0.5">{inspectingSub.score} / 100</div>
                </div>
                <div className="bg-zinc-900/60 p-3 rounded-lg border border-zinc-800">
                  <span className="text-zinc-500">Max Time</span>
                  <div className="font-bold text-sky-400 mt-0.5">{inspectingSub.executionTimeMs} ms</div>
                </div>
              </div>

              {/* Submitted Python Code */}
              <div className="space-y-1.5">
                <span className="text-xs font-mono text-zinc-400 font-semibold">Submitted Source Code:</span>
                <pre className="p-4 bg-zinc-900 rounded-lg border border-zinc-800 font-mono text-xs text-emerald-400 overflow-x-auto whitespace-pre max-h-60 leading-relaxed">
                  {inspectingSub.code}
                </pre>
              </div>

              {/* Test Cases Breakdown Table */}
              {inspectingSub.caseVerdicts.length > 0 && (
                <div className="space-y-2">
                  <span className="text-xs font-mono text-zinc-400 font-semibold">
                    Test Case Breakdown ({inspectingSub.caseVerdicts.length} cases):
                  </span>
                  <div className="border border-zinc-800 rounded-lg overflow-hidden">
                    <table className="w-full text-left text-xs font-mono">
                      <thead className="bg-zinc-900 text-zinc-400 border-b border-zinc-800">
                        <tr>
                          <th className="py-2 px-3">Case</th>
                          <th className="py-2 px-3">Verdict</th>
                          <th className="py-2 px-3">Label</th>
                          <th className="py-2 px-3 text-right">Time</th>
                          <th className="py-2 px-3 text-right">Score</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-zinc-800/40">
                        {inspectingSub.caseVerdicts.map((c) => (
                          <tr key={c.order}>
                            <td className="py-2 px-3 text-zinc-400">#{c.order}</td>
                            <td className="py-2 px-3">
                              <span
                                className={`font-bold px-1.5 py-0.2 rounded text-[11px] ${
                                  c.verdictChar === "P"
                                    ? "bg-emerald-500/20 text-emerald-400"
                                    : "bg-rose-500/20 text-rose-400"
                                }`}
                              >
                                {c.verdictChar}
                              </span>
                            </td>
                            <td className="py-2 px-3 text-zinc-300">{c.verdictLabel}</td>
                            <td className="py-2 px-3 text-right text-zinc-400">{c.executionTimeMs} ms</td>
                            <td className="py-2 px-3 text-right text-zinc-200">
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
          </div>
        </div>
      )}
    </div>
  );
}
