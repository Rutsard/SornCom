"use client";

// ==============================================================================
// Code Tracing Mode Component (for POSN Camp 1 Paper Exam)
// Simulates paper-based tracing examination: execution is disabled.
// Students must manually predict stdout or trace variables step-by-step.
// ==============================================================================

import React, { useState } from "react";
import { FileText, CheckCircle2, XCircle, HelpCircle, Eye, EyeOff } from "lucide-react";
import { TaskSeed } from "@/lib/seed-data";

interface CodeTracingQuizProps {
  task: TaskSeed;
}

export function CodeTracingQuiz({ task }: CodeTracingQuizProps) {
  const [prediction, setPrediction] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [result, setResult] = useState<{
    checked: boolean;
    isCorrect: boolean;
    explanation?: string;
  } | null>(null);
  const [showExplanation, setShowExplanation] = useState(false);

  // Scratchpad variable table state
  const [traceRows, setTraceRows] = useState([
    { step: "1", line: "Line 1-2", variable: "a, b", value: "15, 4" },
    { step: "2", line: "Line 3", variable: "c", value: "12" },
  ]);

  if (!task.hasTracingQuiz) {
    return (
      <div className="p-8 text-center text-zinc-500">
        No paper exam code tracing quiz available for this problem.
      </div>
    );
  }

  const handleVerify = async () => {
    if (!prediction.trim()) return;

    setIsSubmitting(true);
    try {
      const res = await fetch(`/api/trace/${task.id}`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ userPrediction: prediction }),
      });
      const data = await res.json();

      setResult({
        checked: true,
        isCorrect: data.isCorrect,
        explanation: data.explanation,
      });

      if (data.isCorrect) {
        setShowExplanation(true);
      }
    } catch (err) {
      console.error(err);
    } finally {
      setIsSubmitting(false);
    }
  };

  const addScratchpadRow = () => {
    setTraceRows((prev) => [
      ...prev,
      { step: String(prev.length + 1), line: "", variable: "", value: "" },
    ]);
  };

  return (
    <div className="p-6 max-w-4xl mx-auto space-y-6">
      {/* Paper Exam Header Banner */}
      <div className="border border-sky-500/30 bg-sky-950/20 rounded-xl p-5 flex items-start space-x-4">
        <div className="p-2.5 bg-sky-500/20 text-sky-400 rounded-lg">
          <FileText className="w-6 h-6" />
        </div>
        <div>
          <div className="flex items-center space-x-2">
            <h2 className="text-lg font-bold text-sky-300">
              โหมดฝึกสอบข้อเขียน (POSN Paper-Based Tracing Exam)
            </h2>
            <span className="text-xs bg-sky-500/20 text-sky-400 px-2 py-0.5 rounded-full font-mono">
              สอวน. ค่าย 1
            </span>
          </div>
          <p className="text-xs text-zinc-400 mt-1">
            ในโหมดนี้ <strong>ระบบจะปิดการรันโค้ดทั้งหมด (Code Execution Disabled)</strong> เสมือนท่านอยู่ในห้องสอบข้อเขียนของค่าย สอวน.
            ท่านต้องใช้การคิดวิเคราะห์และไล่ตัวแปรบนกระดาษทด เพื่อทำนายผลลัพธ์ที่พิมพ์ออกทางหน้าจอ
          </p>
        </div>
      </div>

      {/* Code Snippet Card */}
      <div className="bg-zinc-950 rounded-xl border border-zinc-800 overflow-hidden shadow-xl">
        <div className="bg-zinc-900/80 px-4 py-2 border-b border-zinc-800 flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="w-3 h-3 rounded-full bg-red-500/60"></div>
            <div className="w-3 h-3 rounded-full bg-yellow-500/60"></div>
            <div className="w-3 h-3 rounded-full bg-green-500/60"></div>
            <span className="text-xs font-mono text-zinc-400 ml-2">paper_exam_trace.py</span>
          </div>
          <span className="text-[11px] text-amber-400 font-mono flex items-center gap-1">
            🔒 Sandbox: Execution Locked
          </span>
        </div>

        <div className="p-4 overflow-x-auto font-mono text-sm leading-relaxed">
          {task.tracingSnippet?.split("\n").map((line, idx) => (
            <div key={idx} className="flex hover:bg-zinc-900/50 px-2 rounded">
              <span className="text-zinc-600 select-none w-8 text-right pr-4 text-xs">
                {idx + 1}
              </span>
              <span className="text-emerald-400">{line}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Question and Answer Prediction Section */}
      <div className="bg-zinc-900/60 rounded-xl border border-zinc-800 p-5 space-y-4">
        <div>
          <h3 className="font-semibold text-zinc-100 text-sm flex items-center gap-2">
            <HelpCircle className="w-4 h-4 text-sky-400" />
            คำถามข้อเขียน:
          </h3>
          <p className="text-zinc-300 text-sm mt-1">{task.tracingQuestion}</p>
        </div>

        <div className="space-y-2">
          <label className="text-xs font-medium text-zinc-400">
            ระบุผลลัพธ์ที่คาดว่าจะแสดงผล (Predicted Output):
          </label>
          <div className="flex gap-3">
            <input
              type="text"
              value={prediction}
              onChange={(e) => setPrediction(e.target.value)}
              placeholder="พิมพ์ค่าที่โปรแกรมจะ print ออกมา เช่น 24"
              className="flex-1 bg-zinc-950 border border-zinc-700 rounded-lg px-4 py-2.5 text-sm font-mono text-white placeholder-zinc-600 focus:outline-none focus:border-sky-500"
              onKeyDown={(e) => e.key === "Enter" && handleVerify()}
            />
            <button
              onClick={handleVerify}
              disabled={isSubmitting || !prediction.trim()}
              className="px-5 py-2.5 bg-sky-600 hover:bg-sky-500 disabled:opacity-50 text-white font-medium text-sm rounded-lg transition-colors shadow-lg shadow-sky-600/20"
            >
              {isSubmitting ? "กำลังตรวจ..." : "ตรวจคำตอบ"}
            </button>
          </div>
        </div>

        {/* Verification Result Feedback */}
        {result?.checked && (
          <div
            className={`p-4 rounded-lg border text-sm flex items-start space-x-3 ${
              result.isCorrect
                ? "bg-emerald-950/40 border-emerald-800 text-emerald-300"
                : "bg-rose-950/40 border-rose-800 text-rose-300"
            }`}
          >
            {result.isCorrect ? (
              <CheckCircle2 className="w-5 h-5 text-emerald-400 flex-shrink-0 mt-0.5" />
            ) : (
              <XCircle className="w-5 h-5 text-rose-400 flex-shrink-0 mt-0.5" />
            )}
            <div className="space-y-1">
              <div className="font-bold">
                {result.isCorrect
                  ? "ถูกต้องยอดเยี่ยม! (Correct Prediction)"
                  : "คำตอบยังไม่ถูกต้อง (Incorrect)"}
              </div>
              <p className="text-xs opacity-90">{result.explanation}</p>
            </div>
          </div>
        )}

        {/* Reveal Explanation Toggle */}
        <div className="pt-2">
          <button
            onClick={() => setShowExplanation(!showExplanation)}
            className="text-xs text-zinc-400 hover:text-zinc-200 flex items-center gap-1 transition-colors"
          >
            {showExplanation ? <EyeOff className="w-3.5 h-3.5" /> : <Eye className="w-3.5 h-3.5" />}
            {showExplanation ? "ซ่อนเฉลยการไล่โค้ด" : "ดูเฉลยและขั้นตอนการ Trace"}
          </button>

          {showExplanation && task.tracingExplanation && (
            <div className="mt-3 p-4 bg-zinc-950 border border-zinc-800 rounded-lg text-xs font-mono text-zinc-300 whitespace-pre-wrap leading-relaxed">
              {task.tracingExplanation}
            </div>
          )}
        </div>
      </div>

      {/* Interactive Variable Tracing Scratchpad (Paper simulation) */}
      <div className="bg-zinc-900/40 rounded-xl border border-zinc-800/80 p-5 space-y-3">
        <div className="flex items-center justify-between">
          <div>
            <h4 className="text-sm font-semibold text-zinc-200">
              กระดาษทดจำลองการไล่ตัวแปร (Trace Table Scratchpad)
            </h4>
            <p className="text-[11px] text-zinc-500">
              จดบันทึกค่าตัวแปรในแต่ละรอบเพื่อใช้คำนวณเหมือนเขียนบนข้อสอบจริง
            </p>
          </div>
          <button
            onClick={addScratchpadRow}
            className="text-xs bg-zinc-800 hover:bg-zinc-700 text-zinc-300 px-3 py-1 rounded transition-colors"
          >
            + เพิ่มแถวทด
          </button>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs font-mono">
            <thead>
              <tr className="border-b border-zinc-800 text-zinc-500">
                <th className="py-2 px-3 w-16">Step</th>
                <th className="py-2 px-3 w-32">Line No.</th>
                <th className="py-2 px-3 w-40">Variable</th>
                <th className="py-2 px-3">Recorded Value / Evaluation</th>
              </tr>
            </thead>
            <tbody>
              {traceRows.map((row, idx) => (
                <tr key={idx} className="border-b border-zinc-800/40">
                  <td className="py-2 px-3 text-zinc-500">{row.step}</td>
                  <td className="py-2 px-3">
                    <input
                      type="text"
                      defaultValue={row.line}
                      placeholder="e.g. Line 3"
                      className="bg-zinc-950 border border-zinc-800 rounded px-2 py-1 text-xs text-zinc-200 w-full"
                    />
                  </td>
                  <td className="py-2 px-3">
                    <input
                      type="text"
                      defaultValue={row.variable}
                      placeholder="e.g. c"
                      className="bg-zinc-950 border border-zinc-800 rounded px-2 py-1 text-xs text-sky-400 w-full"
                    />
                  </td>
                  <td className="py-2 px-3">
                    <input
                      type="text"
                      defaultValue={row.value}
                      placeholder="e.g. 12"
                      className="bg-zinc-950 border border-zinc-800 rounded px-2 py-1 text-xs text-emerald-400 w-full"
                    />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
