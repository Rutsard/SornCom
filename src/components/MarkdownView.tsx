"use client";

// ==============================================================================
// Markdown + KaTeX Problem Statement Viewer
// Supports TeX Math Formulas ($...$ and $$...$$), Callout boxes, and Code Blocks
// ==============================================================================

import React, { useMemo } from "react";
import katex from "katex";
import "katex/dist/katex.min.css";

interface MarkdownViewProps {
  content: string;
}

export function MarkdownView({ content }: MarkdownViewProps) {
  const renderedContent = useMemo(() => {
    if (!content) return "";

    // 1. Render display math ($$...$$)
    let processed = content.replace(/\$\$([\s\S]+?)\$\$/g, (_, math) => {
      try {
        return `<div class="my-4 text-center overflow-x-auto py-2 px-3 bg-zinc-900/60 rounded-md border border-zinc-800">${katex.renderToString(
          math.trim(),
          { displayMode: true, throwOnError: false }
        )}</div>`;
      } catch (e) {
        return `<code>${math}</code>`;
      }
    });

    // 2. Render inline math ($...$)
    processed = processed.replace(/\$([^\$\n]+?)\$/g, (_, math) => {
      try {
        return `<span class="inline-math px-1">${katex.renderToString(math.trim(), {
          displayMode: false,
          throwOnError: false,
        })}</span>`;
      } catch (e) {
        return `<code>${math}</code>`;
      }
    });

    // 3. Render callout blockquotes (> **คำเตือน...**)
    processed = processed.replace(
      /^>\s*(.+)$/gm,
      '<div class="my-3 border-l-4 border-amber-500 bg-amber-500/10 p-3 rounded-r-md text-amber-200 text-sm">$1</div>'
    );

    // 4. Headings
    processed = processed.replace(/^### (.*$)/gim, '<h3 class="text-lg font-bold text-zinc-100 mt-5 mb-2">$1</h3>');
    processed = processed.replace(/^## (.*$)/gim, '<h2 class="text-xl font-bold text-zinc-50 mt-6 mb-3 pb-1 border-b border-zinc-800">$1</h2>');
    processed = processed.replace(/^# (.*$)/gim, '<h1 class="text-2xl font-black text-white mt-6 mb-4">$1</h1>');

    // 5. Bold & Italic
    processed = processed.replace(/\*\*(.*?)\*\*/g, '<strong class="font-bold text-zinc-100">$1</strong>');
    processed = processed.replace(/\*(.*?)\*/g, '<em class="italic text-zinc-300">$1</em>');

    // 6. Code blocks and inline code
    processed = processed.replace(
      /```([a-z]*)\n([\s\S]*?)```/g,
      '<pre class="my-3 p-3 bg-zinc-950 text-emerald-400 font-mono text-sm rounded-lg border border-zinc-800 overflow-x-auto"><code>$2</code></pre>'
    );
    processed = processed.replace(
      /`([^`]+)`/g,
      '<code class="bg-zinc-800/80 text-amber-300 font-mono text-xs px-1.5 py-0.5 rounded border border-zinc-700/60">$1</code>'
    );

    // 7. Unordered lists
    processed = processed.replace(/^\* (.*$)/gim, '<li class="ml-4 list-disc text-zinc-300 my-1">$1</li>');
    processed = processed.replace(/^- (.*$)/gim, '<li class="ml-4 list-disc text-zinc-300 my-1">$1</li>');

    // 8. Numbered lists
    processed = processed.replace(/^\d+\. (.*$)/gim, '<li class="ml-4 list-decimal text-zinc-300 my-1">$1</li>');

    // 9. Paragraph breaks
    processed = processed.replace(/\n\n/g, '<div class="h-3"></div>');

    return processed;
  }, [content]);

  return (
    <div
      className="prose prose-invert max-w-none text-zinc-300 text-sm leading-relaxed"
      dangerouslySetInnerHTML={{ __html: renderedContent }}
    />
  );
}
