import React, { useState } from "react";
import { Copy, Check, Terminal, ExternalLink } from "lucide-react";

interface MarkdownPreviewProps {
  markdown: string;
}

export default function MarkdownPreview({ markdown }: MarkdownPreviewProps) {
  const [copied, setCopied] = useState(false);

  const copyToClipboard = () => {
    navigator.clipboard.writeText(markdown);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  // Simple syntax high-lighting parser for the code editor look
  const highlightMarkdownLine = (line: string, index: number) => {
    if (line.startsWith("# ")) {
      return (
        <span key={index} className="text-pink-400 font-semibold">
          {line.slice(0, 2)}
          <span className="text-white font-bold">{line.slice(2)}</span>
        </span>
      );
    }
    if (line.startsWith("## ")) {
      return (
        <span key={index} className="text-amber-400 font-semibold">
          {line.slice(0, 3)}
          <span className="text-slate-100">{line.slice(3)}</span>
        </span>
      );
    }
    if (line.startsWith("### ")) {
      return (
        <span key={index} className="text-cyan-400 font-medium">
          {line.slice(0, 4)}
          <span className="text-slate-200">{line.slice(4)}</span>
        </span>
      );
    }
    if (line.startsWith("> ")) {
      return (
        <span key={index} className="text-emerald-400 italic">
          &gt; <span className="text-emerald-300/80">{line.slice(2)}</span>
        </span>
      );
    }
    if (line.startsWith("```")) {
      return <span key={index} className="text-slate-500 font-medium">{line}</span>;
    }
    if (line.startsWith("- ")) {
      return (
        <span key={index} className="text-slate-300">
          <span className="text-indigo-400 font-bold">- </span>
          {highlightInlineCode(line.slice(2))}
        </span>
      );
    }
    if (line.startsWith("└─") || line.includes("└──") || line.includes("↓")) {
      return <span key={index} className="text-teal-400 font-mono">{line}</span>;
    }
    return <span key={index} className="text-slate-300">{highlightInlineCode(line)}</span>;
  };

  const highlightInlineCode = (text: string) => {
    const parts = text.split(/(`[^`]+`|\*\*[^*]+\*\*)/g);
    return parts.map((part, i) => {
      if (part.startsWith("`") && part.endsWith("`")) {
        return <code key={i} className="text-emerald-400 bg-emerald-950/40 px-1 py-0.5 rounded font-mono text-xs">{part.slice(1, -1)}</code>;
      }
      if (part.startsWith("**") && part.endsWith("**")) {
        return <strong key={i} className="text-white font-semibold">{part.slice(2, -2)}</strong>;
      }
      return part;
    });
  };

  const lines = markdown.split("\n");

  return (
    <div className="flex flex-col h-full bg-zinc-950 rounded-xl border border-zinc-800 overflow-hidden shadow-2xl">
      {/* Editor Tab Bar */}
      <div className="flex items-center justify-between px-4 py-3 bg-zinc-900 border-b border-zinc-800">
        <div className="flex items-center gap-2">
          <Terminal className="w-4 h-4 text-emerald-400" />
          <span className="text-xs font-mono font-medium text-zinc-300">README.md</span>
          <span className="text-[10px] bg-zinc-800 text-zinc-400 px-1.5 py-0.5 rounded font-mono">MARKDOWN</span>
        </div>
        <button
          onClick={copyToClipboard}
          className="flex items-center gap-1.5 px-3 py-1.5 text-xs bg-emerald-600 hover:bg-emerald-500 text-white font-medium rounded-lg transition-all shadow-md shadow-emerald-900/20 active:scale-95 font-mono"
        >
          {copied ? (
            <>
              <Check className="w-3.5 h-3.5" />
              Copied!
            </>
          ) : (
            <>
              <Copy className="w-3.5 h-3.5" />
              Copy Markdown
            </>
          )}
        </button>
      </div>

      {/* Code Editor Body */}
      <div className="flex-1 overflow-auto p-5 font-mono text-[13px] leading-relaxed bg-zinc-950/80 scrollbar-thin">
        <div className="grid grid-cols-[30px_1fr] gap-4">
          {/* Line Numbers */}
          <div className="text-zinc-600 text-right select-none pr-1 border-r border-zinc-900/60 font-mono text-xs">
            {lines.map((_, i) => (
              <div key={i} className="h-6 leading-6">{i + 1}</div>
            ))}
          </div>

          {/* Code Lines */}
          <div className="overflow-x-auto font-mono text-xs select-text">
            {lines.map((line, i) => (
              <div key={i} className="h-6 leading-6 whitespace-pre min-h-[1.5rem]">
                {highlightMarkdownLine(line, i)}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Code Editor Info Bar */}
      <div className="px-4 py-2 bg-zinc-900 border-t border-zinc-800 flex items-center justify-between text-[11px] text-zinc-500 font-mono">
        <span className="flex items-center gap-1.5">
          <span>UTF-8</span>
          <span className="w-1 h-1 bg-zinc-700 rounded-full" />
          <span>Markdown (MD)</span>
        </span>
        <span className="flex items-center gap-1">
          <span>Lines: {lines.length}</span>
          <span className="w-1 h-1 bg-zinc-700 rounded-full" />
          <span>Chars: {markdown.length}</span>
        </span>
      </div>
    </div>
  );
}
