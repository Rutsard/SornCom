"use client";

// ==============================================================================
// programming.in.th Inspired Task Table with Dual-Track Filtering
// Supports POSN Computer Camp 1 & University Engineering ComProg Tracks
// ==============================================================================

import React, { useState, useMemo } from "react";
import Link from "next/link";
import { Search, Filter, BookOpen, Clock, Cpu, ArrowRight, FileQuestion, CheckCircle2 } from "lucide-react";
import { TaskSeed } from "@/lib/seed-data";

interface TaskFilterTableProps {
  initialTasks: TaskSeed[];
}

export function TaskFilterTable({ initialTasks }: TaskFilterTableProps) {
  const [selectedTrack, setSelectedTrack] = useState<string>("ALL");
  const [selectedDifficulty, setSelectedDifficulty] = useState<string>("ALL");
  const [selectedTag, setSelectedTag] = useState<string>("ALL");
  const [searchQuery, setSearchQuery] = useState("");

  // Extract unique tags
  const allTags = useMemo(() => {
    const set = new Set<string>();
    initialTasks.forEach((t) => t.tags.forEach((tag) => set.add(tag)));
    return Array.from(set);
  }, [initialTasks]);

  // Filter tasks
  const filteredTasks = useMemo(() => {
    return initialTasks.filter((task) => {
      // Track filter
      if (selectedTrack !== "ALL" && task.trackId !== selectedTrack) {
        return false;
      }
      // Difficulty filter
      if (selectedDifficulty !== "ALL" && task.difficulty !== selectedDifficulty) {
        return false;
      }
      // Tag filter
      if (selectedTag !== "ALL" && !task.tags.includes(selectedTag)) {
        return false;
      }
      // Search query
      if (searchQuery.trim()) {
        const q = searchQuery.toLowerCase();
        const matchesId = task.id.toLowerCase().includes(q);
        const matchesTitle = task.title.toLowerCase().includes(q);
        const matchesTag = task.tags.some((t) => t.toLowerCase().includes(q));
        if (!matchesId && !matchesTitle && !matchesTag) return false;
      }
      return true;
    });
  }, [initialTasks, selectedTrack, selectedDifficulty, selectedTag, searchQuery]);

  return (
    <div className="space-y-6">
      {/* Track Selector Tabs */}
      <div className="flex flex-wrap gap-2 border-b border-zinc-800 pb-4">
        <button
          onClick={() => setSelectedTrack("ALL")}
          className={`px-4 py-2 rounded-lg text-sm font-semibold transition-all ${
            selectedTrack === "ALL"
              ? "bg-zinc-100 text-zinc-950 shadow-md"
              : "bg-zinc-900 text-zinc-400 hover:text-zinc-200 border border-zinc-800"
          }`}
        >
          All Tracks (ทุกหลักสูตร)
        </button>

        <button
          onClick={() => setSelectedTrack("POSN-Camp-1")}
          className={`px-4 py-2 rounded-lg text-sm font-semibold flex items-center space-x-2 transition-all ${
            selectedTrack === "POSN-Camp-1"
              ? "bg-sky-500 text-white shadow-lg shadow-sky-500/25 border border-sky-400"
              : "bg-zinc-900 text-sky-400 hover:bg-sky-950/40 border border-sky-900/50"
          }`}
        >
          <span>สอวน. คอมพิวเตอร์ ค่าย 1 (POSN Camp 1)</span>
          <span className="text-xs px-2 py-0.5 rounded-full bg-black/30 font-mono">
            {initialTasks.filter((t) => t.trackId === "POSN-Camp-1").length}
          </span>
        </button>

        <button
          onClick={() => setSelectedTrack("Eng-ComProg")}
          className={`px-4 py-2 rounded-lg text-sm font-semibold flex items-center space-x-2 transition-all ${
            selectedTrack === "Eng-ComProg"
              ? "bg-orange-600 text-white shadow-lg shadow-orange-600/25 border border-orange-400"
              : "bg-zinc-900 text-orange-400 hover:bg-orange-950/40 border border-orange-900/50"
          }`}
        >
          <span>University Engineering ComProg (วิศวะคอมฯ)</span>
          <span className="text-xs px-2 py-0.5 rounded-full bg-black/30 font-mono">
            {initialTasks.filter((t) => t.trackId === "Eng-ComProg").length}
          </span>
        </button>
      </div>

      {/* Filter & Search Bar */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-3 bg-zinc-900/60 p-3.5 rounded-xl border border-zinc-800">
        {/* Search */}
        <div className="relative md:col-span-2">
          <Search className="w-4 h-4 text-zinc-500 absolute left-3 top-3" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search by ID (0001, ENG01), title, or tag..."
            className="w-full bg-zinc-950 border border-zinc-800 rounded-lg pl-9 pr-4 py-2 text-xs font-mono text-white placeholder-zinc-500 focus:outline-none focus:border-sky-500"
          />
        </div>

        {/* Difficulty */}
        <div>
          <select
            value={selectedDifficulty}
            onChange={(e) => setSelectedDifficulty(e.target.value)}
            className="w-full bg-zinc-950 border border-zinc-800 rounded-lg px-3 py-2 text-xs font-medium text-zinc-300 focus:outline-none focus:border-sky-500"
          >
            <option value="ALL">All Difficulties</option>
            <option value="EASY">Easy</option>
            <option value="MEDIUM">Medium</option>
            <option value="HARD">Hard</option>
          </select>
        </div>

        {/* Tag */}
        <div>
          <select
            value={selectedTag}
            onChange={(e) => setSelectedTag(e.target.value)}
            className="w-full bg-zinc-950 border border-zinc-800 rounded-lg px-3 py-2 text-xs font-medium text-zinc-300 focus:outline-none focus:border-sky-500"
          >
            <option value="ALL">All Tags</option>
            {allTags.map((t) => (
              <option key={t} value={t}>
                {t}
              </option>
            ))}
          </select>
        </div>
      </div>

      {/* programming.in.th Style Tasks Table */}
      <div className="bg-zinc-950 rounded-xl border border-zinc-800 overflow-hidden shadow-2xl">
        <div className="overflow-x-auto">
          <table className="w-full text-left text-sm">
            <thead className="bg-zinc-900/90 text-zinc-400 text-xs font-semibold uppercase tracking-wider border-b border-zinc-800">
              <tr>
                <th className="py-3 px-4 w-20">Task ID</th>
                <th className="py-3 px-4">Problem Name & Tags</th>
                <th className="py-3 px-4 w-44">Track</th>
                <th className="py-3 px-4 w-28">Difficulty</th>
                <th className="py-3 px-4 w-36">Limits</th>
                <th className="py-3 px-4 w-32 text-center">Action</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-zinc-800/60 font-sans">
              {filteredTasks.map((task) => {
                const isPosn = task.trackId === "POSN-Camp-1";

                return (
                  <tr
                    key={task.id}
                    className="hover:bg-zinc-900/40 transition-colors group"
                  >
                    {/* ID */}
                    <td className="py-4 px-4 font-mono font-bold text-sm text-zinc-100">
                      <Link
                        href={`/tasks/${task.id}`}
                        className="hover:text-sky-400 transition-colors"
                      >
                        {task.id}
                      </Link>
                    </td>

                    {/* Title & Tags */}
                    <td className="py-4 px-4">
                      <div className="space-y-1.5">
                        <div className="flex items-center space-x-2">
                          <Link
                            href={`/tasks/${task.id}`}
                            className="font-bold text-zinc-100 group-hover:text-sky-400 transition-colors text-base"
                          >
                            {task.title}
                          </Link>
                          {task.hasTracingQuiz && (
                            <span className="inline-flex items-center gap-1 text-[10px] font-medium bg-sky-500/10 text-sky-400 border border-sky-500/30 px-2 py-0.5 rounded-full">
                              <FileQuestion className="w-3 h-3" />
                              มีโหมดสอบข้อเขียน
                            </span>
                          )}
                        </div>

                        <div className="flex flex-wrap gap-1">
                          {task.tags.map((tag) => (
                            <span
                              key={tag}
                              className="text-[11px] font-mono text-zinc-400 bg-zinc-900 px-2 py-0.5 rounded border border-zinc-800"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>
                      </div>
                    </td>

                    {/* Track */}
                    <td className="py-4 px-4">
                      <span
                        className={`text-xs px-2.5 py-1 rounded-full font-medium inline-block border ${
                          isPosn
                            ? "bg-sky-500/10 text-sky-400 border-sky-500/30"
                            : "bg-orange-500/10 text-orange-400 border-orange-500/30"
                        }`}
                      >
                        {isPosn ? "POSN Camp 1" : "Eng ComProg"}
                      </span>
                    </td>

                    {/* Difficulty */}
                    <td className="py-4 px-4">
                      <span
                        className={`text-xs px-2 py-0.5 rounded font-mono font-medium ${
                          task.difficulty === "EASY"
                            ? "bg-emerald-500/10 text-emerald-400 border border-emerald-500/30"
                            : task.difficulty === "MEDIUM"
                            ? "bg-amber-500/10 text-amber-400 border border-amber-500/30"
                            : "bg-rose-500/10 text-rose-400 border border-rose-500/30"
                        }`}
                      >
                        {task.difficulty}
                      </span>
                    </td>

                    {/* Limits */}
                    <td className="py-4 px-4 text-xs font-mono text-zinc-400">
                      <div>{(task.timeLimitMs / 1000).toFixed(1)}s</div>
                      <div className="text-[11px] text-zinc-500">{task.memoryLimitMb} MB</div>
                    </td>

                    {/* Action */}
                    <td className="py-4 px-4 text-center">
                      <Link
                        href={`/tasks/${task.id}`}
                        className="inline-flex items-center space-x-1 px-3 py-1.5 bg-zinc-900 hover:bg-sky-600 text-zinc-200 hover:text-white rounded-lg text-xs font-medium border border-zinc-700 hover:border-sky-500 transition-all shadow-sm"
                      >
                        <span>Solve</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </Link>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>

          {filteredTasks.length === 0 && (
            <div className="p-12 text-center text-zinc-500 text-sm">
              No tasks found matching your filter criteria.
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
