"use client";

import React from "react";
import Link from "next/link";
import { Terminal, Code2, Cpu, FileQuestion, Database } from "lucide-react";

export function Navbar() {
  return (
    <header className="border-b border-zinc-800 bg-zinc-950/80 backdrop-blur sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        {/* Brand */}
        <Link href="/" className="flex items-center space-x-3 group">
          <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-sky-500 to-indigo-600 flex items-center justify-center text-white shadow-lg shadow-sky-500/20 group-hover:scale-105 transition-transform">
            <Terminal className="w-5 h-5" />
          </div>
          <div>
            <div className="flex items-center space-x-1.5">
              <span className="font-black text-base text-white tracking-tight">programming</span>
              <span className="font-black text-sky-400">.in.th</span>
              <span className="text-[10px] bg-zinc-800 text-zinc-300 px-1.5 py-0.5 rounded font-mono ml-1">
                2.0
              </span>
            </div>
            <p className="text-[10px] text-zinc-400 leading-none">
              POSN Camp 1 & Engineering ComProg
            </p>
          </div>
        </Link>

        {/* Links */}
        <nav className="flex items-center space-x-1 sm:space-x-3 text-xs font-medium">
          <Link
            href="/tasks"
            className="px-3 py-1.5 text-zinc-300 hover:text-white hover:bg-zinc-800/80 rounded-md transition-colors flex items-center gap-1.5"
          >
            <Code2 className="w-3.5 h-3.5 text-sky-400" />
            <span>Problem Archive (/tasks)</span>
          </Link>

          <Link
            href="/submissions"
            className="px-3 py-1.5 text-zinc-300 hover:text-white hover:bg-zinc-800/80 rounded-md transition-colors flex items-center gap-1.5"
          >
            <Terminal className="w-3.5 h-3.5 text-emerald-400" />
            <span>Submissions</span>
          </Link>

          <Link
            href="/tasks?track=POSN-Camp-1"
            className="hidden md:flex items-center gap-1.5 px-3 py-1.5 text-sky-400 hover:bg-sky-950/30 rounded-md transition-colors border border-sky-500/20"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-sky-400"></span>
            <span>สอวน. ค่าย 1</span>
          </Link>

          <Link
            href="/tasks?track=Eng-ComProg"
            className="hidden md:flex items-center gap-1.5 px-3 py-1.5 text-orange-400 hover:bg-orange-950/30 rounded-md transition-colors border border-orange-500/20"
          >
            <Cpu className="w-3.5 h-3.5" />
            <span>Eng ComProg</span>
          </Link>

          <div className="h-4 w-[1px] bg-zinc-800 hidden sm:block"></div>

          <div className="flex items-center space-x-1 text-[11px] font-mono text-zinc-500 bg-zinc-900 px-2.5 py-1 rounded border border-zinc-800">
            <Database className="w-3 h-3 text-emerald-400" />
            <span>Dual-DB: core_db + judge_db</span>
          </div>
        </nav>
      </div>
    </header>
  );
}
