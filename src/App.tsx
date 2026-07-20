import React, { useState, useEffect } from "react";
import { DEFAULT_CONFIG, READMEConfig } from "./types";
import { generateMarkdown } from "./utils";
import SidebarEditor from "./components/SidebarEditor";
import GitHubMockup from "./components/GitHubMockup";
import MarkdownPreview from "./components/MarkdownPreview";
import AssetGenerator from "./components/AssetGenerator";
import { 
  Github, 
  Sparkles, 
  BookOpen, 
  Terminal, 
  FileCode, 
  Info,
  ChevronRight,
  ShieldCheck,
  Zap
} from "lucide-react";

export default function App() {
  const [config, setConfig] = useState<READMEConfig>(DEFAULT_CONFIG);
  const [markdown, setMarkdown] = useState<string>("");
  const [activeTab, setActiveTab] = useState<"mockup" | "markdown" | "assets">("mockup");

  // Re-generate markdown whenever config changes
  useEffect(() => {
    setMarkdown(generateMarkdown(config));
  }, [config]);

  const handleReset = () => {
    if (window.confirm("Are you sure you want to restore the optimized Transitioning Finance & AI defaults? Any custom edits will be reset.")) {
      setConfig(DEFAULT_CONFIG);
    }
  };

  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-100 flex flex-col font-sans select-none antialiased">
      {/* Premium Top Navigation Bar - Elegant Dark Theme */}
      <header className="bg-zinc-900/80 border-b border-zinc-850/80 backdrop-blur-md sticky top-0 z-50 px-6 py-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-emerald-500 to-cyan-500 flex items-center justify-center text-zinc-950 font-bold text-lg">
            {config.name ? config.name.split(" ").map(n => n[0]).join("") : "AV"}
          </div>
          <div>
            <div className="flex items-center gap-2">
              <h1 className="font-display font-semibold text-white text-base leading-none">{config.name}</h1>
              <span className="text-[10px] font-mono bg-zinc-900/80 text-emerald-400 border border-zinc-800 px-2 py-0.5 rounded font-medium uppercase tracking-widest">PRO_ARCHITECT</span>
            </div>
            <p className="text-xs text-zinc-500 mt-1 uppercase tracking-widest font-mono">System Architect // {config.intersectionStatement}</p>
          </div>
        </div>

        {/* Quick Badge info */}
        <div className="hidden sm:flex items-center gap-3">
          <div className="px-3 py-1 rounded border border-zinc-800 bg-zinc-900/50 text-[10px] font-mono text-emerald-400">RECRUITER_OPTIMIZED</div>
          <div className="px-3 py-1 rounded border border-zinc-800 bg-zinc-900/50 text-[10px] font-mono text-zinc-400">ESTABLISHED MMXXVI</div>
        </div>
      </header>

      {/* Workspace Split Layout */}
      <div className="flex-1 grid grid-cols-1 lg:grid-cols-[380px_1fr] overflow-hidden">
        
        {/* Left Side: Sidebar Panel */}
        <div className="border-b lg:border-b-0 border-zinc-850 h-[500px] lg:h-[calc(100vh-73px)]">
          <SidebarEditor 
            config={config} 
            onChange={setConfig} 
            onReset={handleReset} 
          />
        </div>

        {/* Right Side: Preview / Workspace Panels */}
        <div className="h-[calc(100vh-73px)] overflow-y-auto flex flex-col bg-zinc-950 p-6 space-y-6">
          
          {/* Workspace Controls & Tabs */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-zinc-850 pb-4">
            {/* View Mode Tabs */}
            <div className="flex gap-1 bg-zinc-900 border border-zinc-800/80 p-1 rounded-xl w-fit">
              <button
                onClick={() => setActiveTab("mockup")}
                className={`flex items-center gap-1.5 px-4 py-2 rounded-lg text-xs font-medium transition-all ${
                  activeTab === "mockup" 
                    ? "bg-zinc-800 text-white shadow-sm font-semibold border border-zinc-700/50" 
                    : "text-zinc-400 hover:text-zinc-200"
                }`}
              >
                <BookOpen className="w-3.5 h-3.5" />
                Live GitHub Simulator
              </button>
              <button
                onClick={() => setActiveTab("markdown")}
                className={`flex items-center gap-1.5 px-4 py-2 rounded-lg text-xs font-medium transition-all ${
                  activeTab === "markdown" 
                    ? "bg-zinc-800 text-white shadow-sm font-semibold border border-zinc-700/50" 
                    : "text-zinc-400 hover:text-zinc-200"
                }`}
              >
                <Terminal className="w-3.5 h-3.5" />
                Raw Markdown Code
              </button>
              <button
                onClick={() => setActiveTab("assets")}
                className={`flex items-center gap-1.5 px-4 py-2 rounded-lg text-xs font-medium transition-all ${
                  activeTab === "assets" 
                    ? "bg-zinc-800 text-white shadow-sm font-semibold border border-zinc-700/50" 
                    : "text-zinc-400 hover:text-zinc-200"
                }`}
              >
                <FileCode className="w-3.5 h-3.5" />
                Asset Studio (Banners)
              </button>
            </div>

            {/* Micro branding indicators */}
            <div className="flex items-center gap-2 text-xs text-zinc-400 bg-zinc-900/40 border border-zinc-850 px-3 py-1.5 rounded-lg font-mono">
              <Sparkles className="w-3.5 h-3.5 text-emerald-400" />
              <span>Identity Anchor: <strong className="text-white">Active</strong></span>
            </div>
          </div>

          {/* Render Active Workspace Panel */}
          <div className="flex-1">
            {activeTab === "mockup" && (
              <div className="space-y-4">
                <div className="flex items-center gap-2 text-xs text-zinc-400 bg-zinc-900/50 border border-zinc-800/80 p-3 rounded-lg leading-relaxed">
                  <Info className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <p>
                    Below is an ultra-realistic rendering of your GitHub profile page. You can customize descriptions, skills, and background milestones on the left. Toggle between <strong className="text-white">GitHub Light and Dark Modes</strong> in the simulator toolbar below.
                  </p>
                </div>
                <GitHubMockup config={config} />
              </div>
            )}

            {activeTab === "markdown" && (
              <div className="space-y-4 h-full">
                <div className="flex items-center gap-2 text-xs text-zinc-400 bg-zinc-900/50 border border-zinc-800/80 p-3 rounded-lg leading-relaxed">
                  <Info className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <p>
                    Here is your final compiled recruiter-grade Markdown readme. Click the <strong className="text-white">Copy Markdown</strong> button to save the entire source code directly to your clipboard, then paste it inside your special GitHub profile repository file.
                  </p>
                </div>
                <div className="h-[550px]">
                  <MarkdownPreview markdown={markdown} />
                </div>
              </div>
            )}

            {activeTab === "assets" && (
              <div className="space-y-4">
                <div className="flex items-center gap-2 text-xs text-zinc-400 bg-zinc-900/50 border border-zinc-800/80 p-3 rounded-lg leading-relaxed">
                  <Info className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <p>
                    A premium profile deserves a clean visual anchor. Instantly build, configure, and download a custom vector SVG banner styled specifically around your quantitative software engineering mindset.
                  </p>
                </div>
                <AssetGenerator config={config} />
              </div>
            )}
          </div>
        </div>

      </div>
    </div>
  );
}
