"use client";

// ==============================================================================
// Split-Screen Left Pane: Problem Statement, Limits, Samples, and KaTeX Math
// ==============================================================================

import React, { useState } from "react";
import { Copy, Check, Clock, Cpu, Tag, HelpCircle, AlertCircle, PlayCircle } from "lucide-react";
import { MarkdownView } from "../MarkdownView";
import { TaskSeed } from "@/lib/seed-data";

interface ProblemPaneProps {
  task: TaskSeed;
  onLoadSampleToRunner?: (sampleInput: string) => void;
}

export function ProblemPane({ task, onLoadSampleToRunner }: ProblemPaneProps) {
  const [copiedInput, setCopiedInput] = useState(false);
  const [copiedOutput, setCopiedOutput] = useState(false);
  const [showHints, setShowHints] = useState(false);

  const copyToClipboard = (text: string, type: "input" | "output") => {
    navigator.clipboard.writeText(text);
    if (type === "input") {
      setCopiedInput(true);
      setTimeout(() => setCopiedInput(false), 2000);
    } else {
      setCopiedOutput(true);
      setTimeout(() => setCopiedOutput(false), 2000);
    }
  };

  const isPosn = task.trackId === "POSN-Camp-1";

  return (
    <div className="h-full overflow-y-auto p-6 space-y-6 text-zinc-300">
      {/* Title & Metadata Banner */}
      <div className="space-y-3 pb-4 border-b border-zinc-800">
        <div className="flex flex-wrap items-center gap-2">
          <span className="font-mono text-sm font-bold px-2 py-0.5 rounded bg-zinc-800 text-zinc-100 border border-zinc-700">
            {task.id}
          </span>
          <span
            className={`text-xs px-2.5 py-0.5 rounded-full font-medium border ${
              isPosn
                ? "bg-sky-500/10 text-sky-400 border-sky-500/30"
                : "bg-orange-500/10 text-orange-400 border-orange-500/30"
            }`}
          >
            {isPosn ? "POSN Camp 1 (สอวน. คอม)" : "Eng ComProg (วิศวะคอมฯ)"}
          </span>
          <span
            className={`text-xs px-2 py-0.5 rounded font-mono ${
              task.difficulty === "EASY"
                ? "bg-emerald-500/10 text-emerald-400 border border-emerald-500/30"
                : task.difficulty === "MEDIUM"
                ? "bg-amber-500/10 text-amber-400 border border-amber-500/30"
                : "bg-rose-500/10 text-rose-400 border border-rose-500/30"
            }`}
          >
            {task.difficulty}
          </span>
        </div>

        <h1 className="text-2xl font-black text-white tracking-tight">{task.title}</h1>

        {/* Limits & Constraints Bar */}
        <div className="flex flex-wrap items-center gap-4 text-xs font-mono text-zinc-400 pt-1">
          <div className="flex items-center space-x-1.5 bg-zinc-900 px-2.5 py-1 rounded border border-zinc-800">
            <Clock className="w-3.5 h-3.5 text-sky-400" />
            <span>Time Limit:</span>
            <span className="text-zinc-200 font-bold">{(task.timeLimitMs / 1000).toFixed(1)}s ({task.timeLimitMs}ms)</span>
          </div>
          <div className="flex items-center space-x-1.5 bg-zinc-900 px-2.5 py-1 rounded border border-zinc-800">
            <Cpu className="w-3.5 h-3.5 text-purple-400" />
            <span>Memory Limit:</span>
            <span className="text-zinc-200 font-bold">{task.memoryLimitMb} MB</span>
          </div>
        </div>

        {/* Tags */}
        <div className="flex flex-wrap gap-1.5 pt-1">
          {task.tags.map((tag) => (
            <span
              key={tag}
              className="text-[11px] bg-zinc-900 text-zinc-400 px-2 py-0.5 rounded border border-zinc-800 flex items-center gap-1"
            >
              <Tag className="w-3 h-3 text-zinc-500" />
              {tag}
            </span>
          ))}
        </div>
      </div>

      {/* Problem Statement (Markdown + KaTeX) */}
      <div className="space-y-4">
        <MarkdownView content={task.statementMarkdown} />
      </div>

      {/* Input / Output Specifications */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="bg-zinc-900/50 p-4 rounded-lg border border-zinc-800/80">
          <h3 className="text-xs uppercase tracking-wider font-bold text-zinc-400 mb-2">
            ข้อมูลนำเข้า (Input Format)
          </h3>
          <MarkdownView content={task.inputFormat} />
        </div>
        <div className="bg-zinc-900/50 p-4 rounded-lg border border-zinc-800/80">
          <h3 className="text-xs uppercase tracking-wider font-bold text-zinc-400 mb-2">
            ข้อมูลส่งออก (Output Format)
          </h3>
          <MarkdownView content={task.outputFormat} />
        </div>
      </div>

      {/* Interactive Sample I/O */}
      <div className="space-y-3">
        <div className="flex items-center justify-between">
          <h3 className="text-sm font-bold text-zinc-200 uppercase tracking-wide">
            ตัวอย่างข้อมูล (Sample Cases)
          </h3>
          {onLoadSampleToRunner && (
            <button
              onClick={() => onLoadSampleToRunner(task.sampleInput)}
              className="text-xs font-mono text-emerald-400 hover:text-emerald-300 flex items-center gap-1 transition-colors"
            >
              <PlayCircle className="w-3.5 h-3.5" />
              Load Sample to Pyodide
            </button>
          )}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {/* Sample Input */}
          <div className="space-y-1.5">
            <div className="flex items-center justify-between text-xs text-zinc-400 font-mono">
              <span>Sample Input</span>
              <button
                onClick={() => copyToClipboard(task.sampleInput, "input")}
                className="hover:text-white flex items-center gap-1 text-[11px] transition-colors"
              >
                {copiedInput ? <Check className="w-3 h-3 text-emerald-400" /> : <Copy className="w-3 h-3" />}
                {copiedInput ? "Copied" : "Copy"}
              </button>
            </div>
            <pre className="p-3 bg-zinc-950 rounded-lg border border-zinc-800 font-mono text-xs text-emerald-400 overflow-x-auto whitespace-pre">
              {task.sampleInput}
            </pre>
          </div>

          {/* Sample Output */}
          <div className="space-y-1.5">
            <div className="flex items-center justify-between text-xs text-zinc-400 font-mono">
              <span>Sample Output</span>
              <button
                onClick={() => copyToClipboard(task.sampleOutput, "output")}
                className="hover:text-white flex items-center gap-1 text-[11px] transition-colors"
              >
                {copiedOutput ? <Check className="w-3 h-3 text-emerald-400" /> : <Copy className="w-3 h-3" />}
                {copiedOutput ? "Copied" : "Copy"}
              </button>
            </div>
            <pre className="p-3 bg-zinc-950 rounded-lg border border-zinc-800 font-mono text-xs text-amber-300 overflow-x-auto whitespace-pre">
              {task.sampleOutput}
            </pre>
          </div>
        </div>
      </div>

      {/* Constraints & Hints */}
      <div className="space-y-3 pt-2">
        <div className="bg-zinc-900/30 p-3.5 rounded-lg border border-zinc-800">
          <h4 className="text-xs uppercase font-bold text-zinc-400 mb-1.5 flex items-center gap-1.5">
            <AlertCircle className="w-3.5 h-3.5 text-zinc-500" />
            ข้อกำหนดและเงื่อนไข (Constraints)
          </h4>
          <MarkdownView content={task.constraints} />
        </div>

        {task.hints && (
          <div className="border border-zinc-800/80 rounded-lg overflow-hidden">
            <button
              onClick={() => setShowHints(!showHints)}
              className="w-full text-left px-3.5 py-2.5 bg-zinc-900/50 hover:bg-zinc-900 text-xs font-semibold text-zinc-300 flex items-center justify-between transition-colors"
            >
              <span className="flex items-center gap-2">
                <HelpCircle className="w-3.5 h-3.5 text-amber-400" />
                คำแนะนำและเทคนิคสำหรับค่าย 1 / วิศวะ (Hints & Tips)
              </span>
              <span className="text-zinc-500 text-[10px]">{showHints ? "ซ่อน" : "แสดงคำใบ้"}</span>
            </button>
            {showHints && (
              <div className="p-3.5 bg-zinc-950 border-t border-zinc-800 text-xs text-zinc-300">
                <MarkdownView content={task.hints} />
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
