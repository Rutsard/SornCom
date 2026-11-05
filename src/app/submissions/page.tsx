import React from "react";
import { listSubmissions } from "@/lib/db-judge";
import { SubmissionsTable } from "@/components/submissions/SubmissionsTable";
import { Send, CheckCircle2, Clock, Layers } from "lucide-react";

export const revalidate = 0; // dynamic

export default async function SubmissionsPage() {
  const initialSubmissions = await listSubmissions({ limit: 100 });

  const total = initialSubmissions.length;
  const fullScore = initialSubmissions.filter((s) => s.score === 100).length;

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8">
      {/* Page Header */}
      <div className="space-y-3">
        <div className="flex items-center space-x-2 text-xs font-mono text-sky-400">
          <Send className="w-4 h-4" />
          <span>REAL-TIME GRADING PIPELINE & SUBMISSION LOGS</span>
        </div>
        <h1 className="text-3xl font-black text-white tracking-tight">
          ประวัติการส่งโค้ดและการตรวจ (Live Submissions)
        </h1>
        <p className="text-sm text-zinc-400 max-w-3xl">
          ติดตามสถานะการส่งโค้ดแบบ Real-time ตั้งแต่การเข้าคิวใน Redis (<code>WAITING</code>), การรันใน Sandbox Auto-Grader (<code>GRADING</code>), จนถึงการบันทึกผลการตรวจรายเทสต์เคส (<code>COMPLETED</code>)
        </p>
      </div>

      {/* Overview Stats */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        <div className="bg-zinc-900/60 p-4 rounded-xl border border-zinc-800 space-y-1">
          <span className="text-xs text-zinc-400">Total Submissions</span>
          <div className="text-2xl font-black font-mono text-white">{total}</div>
          <span className="text-[11px] text-zinc-500">Live queue and graded history</span>
        </div>

        <div className="bg-emerald-950/20 p-4 rounded-xl border border-emerald-800/40 space-y-1">
          <span className="text-xs text-emerald-400 font-medium">Full Score (100 pts)</span>
          <div className="text-2xl font-black font-mono text-emerald-300">{fullScore}</div>
          <span className="text-[11px] text-zinc-400">Accepted all test cases</span>
        </div>

        <div className="bg-sky-950/20 p-4 rounded-xl border border-sky-800/40 space-y-1">
          <span className="text-xs text-sky-400 font-medium">Pipeline Status</span>
          <div className="text-sm font-bold font-mono text-sky-300 flex items-center gap-2 mt-1">
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse"></span>
            Redis Queue Active
          </div>
          <span className="text-[11px] text-zinc-400">Worker listening on judge:queue</span>
        </div>
      </div>

      {/* Submissions Table with Live Polling */}
      <SubmissionsTable initialSubmissions={initialSubmissions} />
    </div>
  );
}
