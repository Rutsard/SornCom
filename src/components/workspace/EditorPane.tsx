"use client";

// ==============================================================================
// Split-Screen Right Pane: Monaco Python Editor + Pyodide WASM + Judge Submitter
// ==============================================================================

import React, { useState, useEffect } from "react";
import Editor from "@monaco-editor/react";
import { Play, Send, RotateCcw, Terminal, CheckCircle, Zap, Code2, AlertTriangle } from "lucide-react";
import { usePyodide, PyodideRunResult } from "@/lib/usePyodide";
import { LiveGradingPanel } from "./LiveGradingPanel";
import { TaskSeed } from "@/lib/seed-data";

interface EditorPaneProps {
  task: TaskSeed;
  externalInput?: string;
}

export function EditorPane({ task, externalInput }: EditorPaneProps) {
  const [code, setCode] = useState(task.starterCode || "# Write your Python solution here\n");
  const [customInput, setCustomInput] = useState(task.sampleInput || "");
  const [activeTab, setActiveTab] = useState<"pyodide" | "verdict">("pyodide");

  // Pyodide in-browser execution
  const { isReady, isLoading: isPyodideLoading, statusMessage, runCode } = usePyodide();
  const [isPyodideRunning, setIsPyodideRunning] = useState(false);
  const [pyodideOutput, setPyodideOutput] = useState<PyodideRunResult | null>(null);

  // Server-side Judge grading
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [activeSubmissionId, setActiveSubmissionId] = useState<string | null>(null);
  const [submitError, setSubmitError] = useState<string | null>(null);

  // When external input is updated (e.g. from sample case click)
  useEffect(() => {
    if (externalInput) {
      setCustomInput(externalInput);
      setActiveTab("pyodide");
    }
  }, [externalInput]);

  // Handle client-side run with Pyodide
  const handleRunPyodide = async () => {
    setIsPyodideRunning(true);
    setActiveTab("pyodide");
    try {
      const result = await runCode(code, customInput);
      setPyodideOutput(result);
    } catch (err) {
      setPyodideOutput({
        stdout: "",
        stderr: (err as Error).message,
        executionTimeMs: 0,
        success: false,
      });
    } finally {
      setIsPyodideRunning(false);
    }
  };

  // Handle official submit to Auto-Grader (POST /api/submissions -> Redis queue -> Judge Worker)
  const handleSubmitToJudge = async () => {
    setIsSubmitting(true);
    setActiveTab("verdict");
    setSubmitError(null);

    try {
      const res = await fetch("/api/submissions", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          taskId: task.id,
          sourceCode: code,
          userId: "camper-guest",
        }),
      });

      const data = await res.json();
      if (!data.success) {
        setSubmitError(data.error || "Grading service returned an error.");
      } else {
        setActiveSubmissionId(data.submissionId);
      }
    } catch (err) {
      setSubmitError((err as Error).message || "Failed to submit code to judge.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleResetCode = () => {
    if (confirm("Reset code to starter template? Your unsaved changes will be lost.")) {
      setCode(task.starterCode || "# Write your Python solution here\n");
    }
  };

  return (
    <div className="h-full flex flex-col bg-zinc-950 border-l border-zinc-800">
      {/* Editor Toolbar */}
      <div className="px-4 py-2.5 bg-zinc-900 border-b border-zinc-800 flex items-center justify-between text-xs">
        <div className="flex items-center space-x-3">
          <div className="flex items-center space-x-1.5 text-zinc-300 font-medium">
            <Code2 className="w-4 h-4 text-sky-400" />
            <span>Python 3.12</span>
          </div>

          <div className="h-3.5 w-[1px] bg-zinc-700"></div>

          {/* Pyodide Runtime Status Indicator */}
          <div className="flex items-center space-x-1.5 font-mono text-[11px]">
            <span
              className={`w-2 h-2 rounded-full ${
                isReady
                  ? "bg-emerald-500 animate-pulse"
                  : isPyodideLoading
                  ? "bg-amber-500 animate-spin"
                  : "bg-zinc-600"
              }`}
            ></span>
            <span className="text-zinc-400 truncate max-w-[200px]">{statusMessage}</span>
          </div>
        </div>

        <div className="flex items-center space-x-2">
          <button
            onClick={handleResetCode}
            title="Reset to starter code"
            className="p-1.5 text-zinc-400 hover:text-white rounded hover:bg-zinc-800 transition-colors"
          >
            <RotateCcw className="w-3.5 h-3.5" />
          </button>

          {/* Pyodide Client Runner */}
          <button
            onClick={handleRunPyodide}
            disabled={!isReady || isPyodideRunning}
            className="flex items-center space-x-1.5 px-3 py-1.5 bg-zinc-800 hover:bg-zinc-700 text-zinc-200 rounded font-medium disabled:opacity-50 transition-colors"
          >
            <Zap className="w-3.5 h-3.5 text-amber-400" />
            <span>{isPyodideRunning ? "Running (WASM)..." : "Run Sample (Pyodide)"}</span>
          </button>

          {/* Submit to Judge Button */}
          <button
            onClick={handleSubmitToJudge}
            disabled={isSubmitting}
            className="flex items-center space-x-1.5 px-3.5 py-1.5 bg-emerald-600 hover:bg-emerald-500 text-white font-semibold rounded shadow-md shadow-emerald-700/20 disabled:opacity-50 transition-colors"
          >
            <Send className="w-3.5 h-3.5" />
            <span>{isSubmitting ? "Grading..." : "Submit to Judge"}</span>
          </button>
        </div>
      </div>

      {/* Monaco Code Editor */}
      <div className="flex-1 min-h-[300px]">
        <Editor
          height="100%"
          defaultLanguage="python"
          theme="vs-dark"
          value={code}
          onChange={(val) => setCode(val || "")}
          options={{
            minimap: { enabled: false },
            fontSize: 14,
            lineNumbers: "on",
            scrollBeyondLastLine: false,
            automaticLayout: true,
            tabSize: 4,
            insertSpaces: true,
            fontFamily: "'JetBrains Mono', 'Fira Code', Menlo, Consolas, monospace",
          }}
        />
      </div>

      {/* Bottom Output & Console Area */}
      <div className="h-64 border-t border-zinc-800 flex flex-col bg-zinc-950">
        {/* Tabs Bar */}
        <div className="flex items-center justify-between px-4 bg-zinc-900/80 border-b border-zinc-800 text-xs">
          <div className="flex space-x-1">
            <button
              onClick={() => setActiveTab("pyodide")}
              className={`px-3 py-2 font-medium flex items-center space-x-1.5 border-b-2 transition-colors ${
                activeTab === "pyodide"
                  ? "border-sky-500 text-sky-400 bg-zinc-900"
                  : "border-transparent text-zinc-400 hover:text-zinc-200"
              }`}
            >
              <Terminal className="w-3.5 h-3.5" />
              <span>Pyodide WASM Console</span>
            </button>
            <button
              onClick={() => setActiveTab("verdict")}
              className={`px-3 py-2 font-medium flex items-center space-x-1.5 border-b-2 transition-colors ${
                activeTab === "verdict"
                  ? "border-emerald-500 text-emerald-400 bg-zinc-900"
                  : "border-transparent text-zinc-400 hover:text-zinc-200"
              }`}
            >
              <CheckCircle className="w-3.5 h-3.5" />
              <span>Judge Verdict</span>
              {verdict && (
                <span className="font-mono text-[10px] px-1.5 py-0.2 rounded bg-zinc-800 text-emerald-400">
                  {verdict.score}/100
                </span>
              )}
            </button>
          </div>

          <span className="text-[11px] text-zinc-500 font-mono">
            {activeTab === "pyodide" ? "Client-Side WebAssembly" : "Official Auto-Grader"}
          </span>
        </div>

        {/* Tab 1: Pyodide WASM Console */}
        {activeTab === "pyodide" && (
          <div className="flex-1 p-3 grid grid-cols-1 md:grid-cols-2 gap-3 overflow-hidden">
            {/* Custom Input */}
            <div className="flex flex-col h-full">
              <span className="text-[11px] text-zinc-400 font-mono mb-1">Standard Input (stdin):</span>
              <textarea
                value={customInput}
                onChange={(e) => setCustomInput(e.target.value)}
                placeholder="Enter custom input for Python testing..."
                className="flex-1 bg-zinc-900 border border-zinc-800 rounded p-2 text-xs font-mono text-zinc-200 resize-none focus:outline-none focus:border-sky-500"
              />
            </div>

            {/* Execution Output */}
            <div className="flex flex-col h-full">
              <div className="flex items-center justify-between text-[11px] font-mono text-zinc-400 mb-1">
                <span>Standard Output (stdout):</span>
                {pyodideOutput && (
                  <span className="text-zinc-500">{pyodideOutput.executionTimeMs} ms</span>
                )}
              </div>
              <div className="flex-1 bg-zinc-900 border border-zinc-800 rounded p-2 text-xs font-mono overflow-y-auto whitespace-pre">
                {isPyodideRunning ? (
                  <div className="text-amber-400 animate-pulse">Running Python inside WebAssembly...</div>
                ) : pyodideOutput?.stderr ? (
                  <div className="text-rose-400">{pyodideOutput.stderr}</div>
                ) : pyodideOutput?.stdout ? (
                  <div className="text-emerald-400">{pyodideOutput.stdout}</div>
                ) : (
                  <span className="text-zinc-600">Click &quot;Run Sample (Pyodide)&quot; to view instant output.</span>
                )}
              </div>
            </div>
          </div>
        )}

        {/* Tab 2: Judge Verdict Display */}
        {activeTab === "verdict" && (
          <div className="flex-1 p-3 overflow-y-auto">
            {submitError && (
              <div className="p-3 mb-3 bg-rose-950/40 border border-rose-800/80 rounded text-xs text-rose-300 flex items-center gap-2">
                <AlertTriangle className="w-4 h-4 text-rose-400 flex-shrink-0" />
                <span>{submitError}</span>
              </div>
            )}
            <LiveGradingPanel submissionId={activeSubmissionId} />
          </div>
        )}
      </div>
    </div>
  );
}
