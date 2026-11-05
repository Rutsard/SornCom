import React from "react";
import { getTasksList } from "@/lib/db-judge";
import { TASKS_SEED } from "@/lib/seed-data";
import { TaskFilterTable } from "@/components/tasks/TaskFilterTable";
import { Code2, Sparkles, BookOpen, Layers } from "lucide-react";

export const revalidate = 0; // dynamic

export default async function TasksPage({
  searchParams,
}: {
  searchParams: { track?: string };
}) {
  let tasks = await getTasksList(searchParams.track);

  // Ensure full TaskSeed structure for client interaction
  const fullTasks = TASKS_SEED;

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8">
      {/* Page Header */}
      <div className="space-y-3">
        <div className="flex items-center space-x-2 text-xs font-mono text-sky-400">
          <Code2 className="w-4 h-4" />
          <span>PROBLEM ARCHIVE & TRACK CURRICULUM</span>
        </div>
        <h1 className="text-3xl font-black text-white tracking-tight">
          คลังโจทย์และระบบตรวจอัตโนมัติ (Task Archive)
        </h1>
        <p className="text-sm text-zinc-400 max-w-3xl">
          ฝึกเขียนโปรแกรมและแก้ปัญหาอัลกอริทึมสำหรับ 2 สายการเรียนรู้หลัก:{" "}
          <strong className="text-sky-400 font-semibold">สอวน. คอมพิวเตอร์ ค่าย 1</strong> (เน้น I/O, Discrete Math, และการไล่โค้ดข้อเขียน) และ{" "}
          <strong className="text-orange-400 font-semibold">Engineering ComProg</strong> (เน้นการประมวลผลข้อมูลเซนเซอร์, อาร์เรย์, และ NumPy)
        </p>
      </div>

      {/* Track Stats Overview Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {/* Total Tasks */}
        <div className="bg-zinc-900/60 p-5 rounded-xl border border-zinc-800 space-y-2">
          <div className="flex items-center justify-between text-zinc-400 text-xs">
            <span>Total Problems</span>
            <Layers className="w-4 h-4 text-zinc-500" />
          </div>
          <div className="text-3xl font-black text-white font-mono">{fullTasks.length}</div>
          <div className="text-[11px] text-zinc-500">Graded against official testcases</div>
        </div>

        {/* POSN Track */}
        <div className="bg-sky-950/20 p-5 rounded-xl border border-sky-800/40 space-y-2">
          <div className="flex items-center justify-between text-sky-400 text-xs font-medium">
            <span>POSN Camp 1 Track</span>
            <span className="w-2 h-2 rounded-full bg-sky-400"></span>
          </div>
          <div className="text-3xl font-black text-sky-300 font-mono">
            {fullTasks.filter((t) => t.trackId === "POSN-Camp-1").length}
          </div>
          <div className="text-[11px] text-zinc-400">Includes Paper Exam Tracing Quizzes</div>
        </div>

        {/* Engineering Track */}
        <div className="bg-orange-950/20 p-5 rounded-xl border border-orange-800/40 space-y-2">
          <div className="flex items-center justify-between text-orange-400 text-xs font-medium">
            <span>Engineering ComProg</span>
            <span className="w-2 h-2 rounded-full bg-orange-400"></span>
          </div>
          <div className="text-3xl font-black text-orange-300 font-mono">
            {fullTasks.filter((t) => t.trackId === "Eng-ComProg").length}
          </div>
          <div className="text-[11px] text-zinc-400">NumPy & Sensor Array Analysis</div>
        </div>
      </div>

      {/* Task Filter and Table */}
      <TaskFilterTable initialTasks={fullTasks} />
    </div>
  );
}
