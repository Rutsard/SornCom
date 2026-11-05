import React from "react";
import Link from "next/link";
import {
  Terminal,
  Code2,
  Cpu,
  Layers,
  Zap,
  ShieldCheck,
  CheckCircle2,
  ArrowRight,
  Database,
  FileQuestion,
  Binary,
} from "lucide-react";
import { TRACKS_SEED } from "@/lib/seed-data";

export default function HomePage() {
  return (
    <div className="space-y-20 pb-24">
      {/* Hero Section */}
      <section className="relative pt-16 sm:pt-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto text-center space-y-6">
        <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-sky-500/10 border border-sky-500/30 text-sky-400 text-xs font-mono">
          <Terminal className="w-3.5 h-3.5" />
          <span>Next-Generation Competitive Programming & Python Grader</span>
        </div>

        <h1 className="text-4xl sm:text-6xl font-black text-white tracking-tight leading-tight max-w-4xl mx-auto">
          Modern Online Judge & Python Platform{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-400 via-indigo-400 to-orange-400">
            programming.in.th
          </span>
        </h1>

        <p className="text-base sm:text-lg text-zinc-400 max-w-2xl mx-auto leading-relaxed">
          แพลตฟอร์มตรวจการบ้านและโจทย์อัลกอริทึมที่ออกแบบเป็นพิเศษสำหรับ 2 สายการเรียนรู้หลัก:{" "}
          <strong className="text-sky-300">สอวน. คอมพิวเตอร์ ค่าย 1</strong> และ{" "}
          <strong className="text-orange-300">University Engineering ComProg</strong> ขับเคลื่อนด้วยสถาปัตยกรรมฐานข้อมูลแยกส่วนและ Pyodide WebAssembly
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-4 pt-4">
          <Link
            href="/tasks"
            className="px-6 py-3 bg-sky-500 hover:bg-sky-400 text-zinc-950 font-bold rounded-xl text-sm transition-all shadow-lg shadow-sky-500/25 flex items-center space-x-2"
          >
            <span>สำรวจคลังโจทย์ทั้งหมด (/tasks)</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
          <Link
            href="/tasks/0001"
            className="px-6 py-3 bg-zinc-900 hover:bg-zinc-800 text-zinc-200 font-semibold rounded-xl text-sm border border-zinc-700 transition-all flex items-center space-x-2"
          >
            <Binary className="w-4 h-4 text-sky-400" />
            <span>ลองทำข้อ 0001: A+B & Modulo</span>
          </Link>
        </div>
      </section>

      {/* Two Dedicated Tracks Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="text-center space-y-2">
          <h2 className="text-2xl sm:text-3xl font-black text-white">
            เลือกเส้นทางการเรียนรู้ (Tailored Learning Tracks)
          </h2>
          <p className="text-sm text-zinc-400">
            แยกเนื้อหาและการตรวจข้อสอบให้ตรงตามเป้าหมายของแต่ละค่ายและหลักสูตร
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Track 1: POSN Computer Camp 1 */}
          <div className="bg-gradient-to-b from-sky-950/30 to-zinc-950 p-8 rounded-2xl border border-sky-800/40 space-y-6 relative overflow-hidden group hover:border-sky-500/60 transition-all">
            <div className="absolute top-0 right-0 w-32 h-32 bg-sky-500/10 rounded-full blur-3xl"></div>

            <div className="flex items-center justify-between">
              <div className="p-3 bg-sky-500/20 text-sky-400 rounded-xl">
                <Binary className="w-6 h-6" />
              </div>
              <span className="text-xs font-mono font-bold px-2.5 py-1 rounded bg-sky-500/20 text-sky-300 border border-sky-500/30">
                POSN Camp 1
              </span>
            </div>

            <div className="space-y-2">
              <h3 className="text-xl font-bold text-white">สอวน. คอมพิวเตอร์ ค่าย 1</h3>
              <p className="text-xs text-sky-400 font-medium">Algorithmic Problem Solving & Discrete Mathematics</p>
              <p className="text-sm text-zinc-400 leading-relaxed">
                เน้นทักษะคณิตศาสตร์ไม่ต่อเนื่อง, ทฤษฎีจำนวน, การจัดสรรเวลา Time Limit (1.0s) และโหมดจำลองการสอบข้อเขียนบนกระดาษ (Code Tracing Mode)
              </p>
            </div>

            <ul className="space-y-2 text-xs text-zinc-300">
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-sky-400" />
                <span>โจทย์ทดสอบ Standard I/O และ Modular Exponentiation ($O(\\log N)$)</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-sky-400" />
                <span><strong>โหมดสอบข้อเขียน (Paper Exam Trace):</strong> ล็อคการรันโค้ด ให้ทำนาย Output</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-sky-400" />
                <span>แสดงผลแบบ <code>[PPPPPPPPPP]</code> สไตล์ programming.in.th</span>
              </li>
            </ul>

            <Link
              href="/tasks/0001"
              className="inline-flex items-center justify-center w-full py-2.5 bg-sky-600 hover:bg-sky-500 text-white font-semibold text-xs rounded-lg transition-colors shadow-lg shadow-sky-600/20 gap-2"
            >
              <span>เริ่มข้อ 0001: A+B & Modulo Magic</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          {/* Track 2: University Engineering ComProg */}
          <div className="bg-gradient-to-b from-orange-950/30 to-zinc-950 p-8 rounded-2xl border border-orange-800/40 space-y-6 relative overflow-hidden group hover:border-orange-500/60 transition-all">
            <div className="absolute top-0 right-0 w-32 h-32 bg-orange-500/10 rounded-full blur-3xl"></div>

            <div className="flex items-center justify-between">
              <div className="p-3 bg-orange-500/20 text-orange-400 rounded-xl">
                <Cpu className="w-6 h-6" />
              </div>
              <span className="text-xs font-mono font-bold px-2.5 py-1 rounded bg-orange-500/20 text-orange-300 border border-orange-500/30">
                Eng ComProg
              </span>
            </div>

            <div className="space-y-2">
              <h3 className="text-xl font-bold text-white">University Engineering ComProg</h3>
              <p className="text-xs text-orange-400 font-medium">Applied Numerical Computing & IoT Data Science</p>
              <p className="text-sm text-zinc-400 leading-relaxed">
                เน้นการเขียนโปรแกรมเชิงวิศวกรรม การกรองสัญญาณรบกวนของเซนเซอร์ IoT, เมทริกซ์ 2 มิติ และการประมวลผลอาร์เรย์ด้วย NumPy ในเบราว์เซอร์
              </p>
            </div>

            <ul className="space-y-2 text-xs text-zinc-300">
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-orange-400" />
                <span>รองรับไลบรารี <code>numpy</code> / <code>pandas</code> รันบน Pyodide WASM ทันที</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-orange-400" />
                <span>การวิเคราะห์ข้อมูลทางสถิติ $\mu, \sigma$ และ Min-Max Normalization</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-orange-400" />
                <span>ข้อจำกัดหน่วยความจำ 128 MB พร้อมตรวจผลทศนิยมอย่างแม่นยำ</span>
              </li>
            </ul>

            <Link
              href="/tasks/ENG01"
              className="inline-flex items-center justify-center w-full py-2.5 bg-orange-600 hover:bg-orange-500 text-white font-semibold text-xs rounded-lg transition-colors shadow-lg shadow-orange-600/20 gap-2"
            >
              <span>เริ่มข้อ ENG01: Sensor Data Array</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Architecture & Tech Stack Highlights */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="text-center space-y-2">
          <div className="text-xs font-mono text-zinc-400">ENTERPRISE SYSTEM ARCHITECTURE</div>
          <h2 className="text-2xl font-black text-white">ออกแบบด้วยหลัก Database Isolation & Client WASM</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 text-left">
          {/* Card 1: Decoupled DB */}
          <div className="bg-zinc-900/60 p-5 rounded-xl border border-zinc-800 space-y-3">
            <div className="p-2.5 bg-blue-500/10 text-blue-400 rounded-lg w-fit">
              <Database className="w-5 h-5" />
            </div>
            <h4 className="font-bold text-white text-sm">Dual Prisma Decoupled</h4>
            <p className="text-xs text-zinc-400 leading-relaxed">
              แยกอิสระระหว่าง <code>core_db</code> (Users, Tracks, Lessons) และ <code>judge_db</code> (Problems, TestCases, Verdicts) พร้อมพอร์ต 5432 / 5433
            </p>
          </div>

          {/* Card 2: Pyodide WASM */}
          <div className="bg-zinc-900/60 p-5 rounded-xl border border-zinc-800 space-y-3">
            <div className="p-2.5 bg-amber-500/10 text-amber-400 rounded-lg w-fit">
              <Zap className="w-5 h-5" />
            </div>
            <h4 className="font-bold text-white text-sm">Client Pyodide (WASM)</h4>
            <p className="text-xs text-zinc-400 leading-relaxed">
              รัน Python 3.12 ในเบราว์เซอร์ได้ทันทีโดยไม่ต้องรอคิว Backend พร้อมโหลด <code>numpy</code> และ <code>pandas</code> ได้ในตัว
            </p>
          </div>

          {/* Card 3: Judge0 & Redis */}
          <div className="bg-zinc-900/60 p-5 rounded-xl border border-zinc-800 space-y-3">
            <div className="p-2.5 bg-emerald-500/10 text-emerald-400 rounded-lg w-fit">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <h4 className="font-bold text-white text-sm">Redis Queue & Strict Judge</h4>
            <p className="text-xs text-zinc-400 leading-relaxed">
              ระบบตรวจเซิร์ฟเวอร์ควบคุม Time Limit (ms) และ Memory Limit (MB) อย่างเข้มงวด ป้องกันการสแปมด้วย Rate Limiting
            </p>
          </div>

          {/* Card 4: Paper Exam Tracing */}
          <div className="bg-zinc-900/60 p-5 rounded-xl border border-zinc-800 space-y-3">
            <div className="p-2.5 bg-purple-500/10 text-purple-400 rounded-lg w-fit">
              <FileQuestion className="w-5 h-5" />
            </div>
            <h4 className="font-bold text-white text-sm">Paper Exam Tracing Mode</h4>
            <p className="text-xs text-zinc-400 leading-relaxed">
              โหมดพิเศษสำหรับเตรียมสอบข้อเขียน สอวน. ล็อคการรันโค้ด บังคับให้นักเรียนคิดและไล่ค่าตัวแปรในกระดาษทด
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
