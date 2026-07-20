import React, { useState } from "react";
import { READMEConfig, TechItem, COLOR_MAP, Project, JourneyNode } from "../types";
import { 
  User, 
  Terminal, 
  Cpu, 
  Layers, 
  GitMerge, 
  FileText, 
  Plus, 
  Trash2, 
  Check, 
  Settings, 
  Sparkles,
  RefreshCw
} from "lucide-react";

interface SidebarEditorProps {
  config: READMEConfig;
  onChange: (newConfig: READMEConfig) => void;
  onReset: () => void;
}

export default function SidebarEditor({ config, onChange, onReset }: SidebarEditorProps) {
  const [activeTab, setActiveTab] = useState<"identity" | "tech" | "projects" | "journey" | "principles" | "visuals">("identity");

  const updateField = (key: keyof READMEConfig, value: any) => {
    onChange({ ...config, [key]: value });
  };

  const handleTechToggle = (index: number) => {
    const updated = [...config.techStack];
    updated[index] = { ...updated[index], enabled: !updated[index].enabled };
    updateField("techStack", updated);
  };

  const handleProjectChange = (id: string, field: keyof Project, value: any) => {
    const updated = config.projects.map((p) => {
      if (p.id === id) {
        if (field === "highlights" && typeof value === "string") {
          return { ...p, highlights: value.split(",").map((t) => t.trim()).filter(Boolean) };
        }
        return { ...p, [field]: value };
      }
      return p;
    });
    updateField("projects", updated);
  };

  const handleJourneyChange = (id: string, field: keyof JourneyNode, value: string) => {
    const updated = config.journey.map((node) => {
      if (node.id === id) {
        return { ...node, [field]: value };
      }
      return node;
    });
    updateField("journey", updated);
  };

  const handleAddProject = () => {
    const newProj: Project = {
      id: `p-${Date.now()}`,
      name: "New Analytical System",
      subtitle: "Quantitative or Data-Driven Software",
      description: "Explain the system purpose, engineering hurdles resolved, and practical outputs.",
      highlights: ["Python", "SQL"]
    };
    updateField("projects", [...config.projects, newProj]);
  };

  const handleRemoveProject = (id: string) => {
    updateField("projects", config.projects.filter((p) => p.id !== id));
  };

  const handleAddPrinciple = () => {
    updateField("principles", [...config.principles, "New Principle — Explanation of engineering approach."]);
  };

  const handleRemovePrinciple = (idx: number) => {
    updateField("principles", config.principles.filter((_, i) => i !== idx));
  };

  const handlePrincipleChange = (idx: number, val: string) => {
    const updated = [...config.principles];
    updated[idx] = val;
    updateField("principles", updated);
  };

  const colors: Array<keyof typeof COLOR_MAP> = ["emerald", "indigo", "cyan", "violet", "teal"];

  return (
    <div className="flex flex-col h-full bg-zinc-900 border-r border-zinc-800 text-zinc-300 font-sans">
      {/* Editor Header */}
      <div className="p-4 border-b border-zinc-800 flex items-center justify-between bg-zinc-950/50">
        <div className="flex items-center gap-2">
          <Settings className="w-5 h-5 text-emerald-400" />
          <h2 className="font-mono text-xs uppercase tracking-wider text-white font-semibold">// Brand Architect</h2>
        </div>
        <button 
          onClick={onReset}
          className="flex items-center gap-1.5 px-2 py-1 text-xs text-zinc-400 hover:text-white bg-zinc-850 hover:bg-zinc-800 border border-zinc-700/50 rounded transition-all font-mono"
          title="Reset to optimized defaults"
        >
          <RefreshCw className="w-3.5 h-3.5" />
          Reset
        </button>
      </div>

      {/* Accordion Tabs */}
      <div className="flex border-b border-zinc-800 bg-zinc-950/30 overflow-x-auto whitespace-nowrap scrollbar-none">
        <button 
          onClick={() => setActiveTab("identity")}
          className={`flex-1 py-3 px-4 text-xs font-medium border-b-2 flex flex-col items-center gap-1 transition-colors ${
            activeTab === "identity" ? "border-emerald-500 text-white bg-zinc-800/30" : "border-transparent text-zinc-400 hover:text-zinc-200"
          }`}
        >
          <User className="w-4 h-4" />
          Identity
        </button>
        <button 
          onClick={() => setActiveTab("tech")}
          className={`flex-1 py-3 px-4 text-xs font-medium border-b-2 flex flex-col items-center gap-1 transition-colors ${
            activeTab === "tech" ? "border-emerald-500 text-white bg-zinc-800/30" : "border-transparent text-zinc-400 hover:text-zinc-200"
          }`}
        >
          <Terminal className="w-4 h-4" />
          Stack
        </button>
        <button 
          onClick={() => setActiveTab("projects")}
          className={`flex-1 py-3 px-4 text-xs font-medium border-b-2 flex flex-col items-center gap-1 transition-colors ${
            activeTab === "projects" ? "border-emerald-500 text-white bg-zinc-800/30" : "border-transparent text-zinc-400 hover:text-zinc-200"
          }`}
        >
          <Cpu className="w-4 h-4" />
          Systems
        </button>
        <button 
          onClick={() => setActiveTab("journey")}
          className={`flex-1 py-3 px-4 text-xs font-medium border-b-2 flex flex-col items-center gap-1 transition-colors ${
            activeTab === "journey" ? "border-emerald-500 text-white bg-zinc-800/30" : "border-transparent text-zinc-400 hover:text-zinc-200"
          }`}
        >
          <GitMerge className="w-4 h-4" />
          Journey
        </button>
        <button 
          onClick={() => setActiveTab("principles")}
          className={`flex-1 py-3 px-4 text-xs font-medium border-b-2 flex flex-col items-center gap-1 transition-colors ${
            activeTab === "principles" ? "border-emerald-500 text-white bg-zinc-800/30" : "border-transparent text-zinc-400 hover:text-zinc-200"
          }`}
        >
          <Layers className="w-4 h-4" />
          Mindset
        </button>
        <button 
          onClick={() => setActiveTab("visuals")}
          className={`flex-1 py-3 px-4 text-xs font-medium border-b-2 flex flex-col items-center gap-1 transition-colors ${
            activeTab === "visuals" ? "border-emerald-500 text-white bg-zinc-800/30" : "border-transparent text-zinc-400 hover:text-zinc-200"
          }`}
        >
          <FileText className="w-4 h-4" />
          Styling
        </button>
      </div>

      {/* Editor Body */}
      <div className="flex-1 overflow-y-auto p-5 space-y-5">
        
        {/* IDENTITY TAB */}
        {activeTab === "identity" && (
          <div className="space-y-4">
            <div>
              <label className="block text-xs font-mono text-zinc-400 mb-1.5">// FULL NAME</label>
              <input 
                type="text" 
                value={config.name}
                onChange={(e) => updateField("name", e.target.value)}
                className="w-full bg-zinc-950 border border-zinc-800 rounded px-3 py-2 text-sm text-white focus:outline-none focus:border-emerald-500 font-sans"
              />
            </div>

            <div>
              <label className="block text-xs font-mono text-zinc-400 mb-1.5">// HERO SUBTITLE (INTERSECTION)</label>
              <input 
                type="text" 
                value={config.intersectionStatement}
                onChange={(e) => updateField("intersectionStatement", e.target.value)}
                className="w-full bg-zinc-950 border border-zinc-800 rounded px-3 py-2 text-sm text-white focus:outline-none focus:border-emerald-500 font-mono"
              />
              <span className="text-[10px] text-zinc-500 block mt-1">This sets the core messaging of your technical brand.</span>
            </div>

            <div>
              <label className="block text-xs font-mono text-zinc-400 mb-1.5">// TAGLINE / VISION STATEMENT</label>
              <textarea 
                rows={3}
                value={config.tagline}
                onChange={(e) => updateField("tagline", e.target.value)}
                className="w-full bg-zinc-950 border border-zinc-800 rounded px-3 py-2 text-sm text-white focus:outline-none focus:border-emerald-500 leading-relaxed font-sans"
              />
            </div>

            <div>
              <label className="block text-xs font-mono text-zinc-400 mb-1.5">// ENGINEERING PHILOSOPHY</label>
              <textarea 
                rows={4}
                value={config.philosophy}
                onChange={(e) => updateField("philosophy", e.target.value)}
                className="w-full bg-zinc-950 border border-zinc-800 rounded px-3 py-2 text-sm text-white focus:outline-none focus:border-emerald-500 leading-relaxed font-sans"
              />
              <span className="text-[10px] text-zinc-500 block mt-1">Explain how you bridge financial mechanics with rigorous computer science.</span>
            </div>
          </div>
        )}

        {/* TECH STACK TAB */}
        {activeTab === "tech" && (
          <div className="space-y-4">
            <p className="text-xs text-zinc-400 leading-relaxed font-sans">
              Toggle core competencies. These dynamically compile into clean Shields.io badge grids with custom theme parameters.
            </p>

            <div className="space-y-4">
              {(["programming", "ai", "data", "engineering"] as const).map((category) => {
                const items = config.techStack.filter(t => t.category === category);
                return (
                  <div key={category} className="space-y-2 border border-zinc-800/60 bg-zinc-950/20 rounded p-3">
                    <h4 className="text-xs font-mono text-emerald-500 uppercase tracking-tighter border-b border-zinc-800 pb-1 flex justify-between items-center">
                      <span>// {category === "ai" ? "Artificial Intelligence" : category}</span>
                      <span className="text-[10px] text-zinc-500 font-mono">
                        {config.techStack.filter(t => t.category === category && t.enabled).length} Active
                      </span>
                    </h4>
                    <div className="flex flex-wrap gap-1.5 pt-1.5">
                      {config.techStack.map((item, idx) => {
                        if (item.category !== category) return null;
                        return (
                          <button
                            key={item.name}
                            onClick={() => handleTechToggle(idx)}
                            className={`px-2.5 py-1 text-xs rounded transition-all flex items-center gap-1.5 border ${
                              item.enabled 
                                ? "bg-emerald-500/10 text-emerald-400 border-emerald-500/30 font-medium" 
                                : "bg-zinc-900 text-zinc-500 border-zinc-800/80 hover:border-zinc-700"
                            }`}
                          >
                            {item.name}
                            {item.enabled && <Check className="w-3 h-3" />}
                          </button>
                        );
                      })}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        )}

        {/* PROJECTS TAB */}
        {activeTab === "projects" && (
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <h3 className="text-xs font-mono text-zinc-400">// FEATURED SYSTEMS</h3>
              <button 
                onClick={handleAddProject}
                className="flex items-center gap-1 text-[11px] font-medium text-emerald-400 hover:text-white bg-emerald-500/10 border border-emerald-500/20 px-2 py-1 rounded transition-colors font-mono"
              >
                <Plus className="w-3.5 h-3.5" />
                Add System
              </button>
            </div>

            <div className="space-y-4">
              {config.projects.map((proj, idx) => (
                <div key={proj.id} className="bg-zinc-950 border border-zinc-800 rounded p-4 relative group space-y-3">
                  <div className="absolute right-3 top-3 opacity-0 group-hover:opacity-100 transition-opacity">
                    <button 
                      onClick={() => handleRemoveProject(proj.id)}
                      className="text-zinc-500 hover:text-rose-400 p-1"
                      title="Remove System"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>

                  <span className="text-[10px] font-mono text-zinc-600 uppercase tracking-widest block">0{idx + 1}. SYSTEM</span>

                  <div>
                    <label className="block text-[10px] font-mono text-zinc-500 mb-1">SYSTEM NAME</label>
                    <input 
                      type="text"
                      value={proj.name}
                      onChange={(e) => handleProjectChange(proj.id, "name", e.target.value)}
                      className="w-full bg-zinc-900 border border-zinc-800 rounded px-2.5 py-1.5 text-xs text-white focus:outline-none focus:border-emerald-500 font-sans font-semibold"
                    />
                  </div>

                  <div>
                    <label className="block text-[10px] font-mono text-zinc-500 mb-1">SUBTITLE / VALUE STATEMENT</label>
                    <input 
                      type="text"
                      value={proj.subtitle}
                      onChange={(e) => handleProjectChange(proj.id, "subtitle", e.target.value)}
                      className="w-full bg-zinc-900 border border-zinc-800 rounded px-2.5 py-1.5 text-xs text-zinc-300 focus:outline-none focus:border-emerald-500"
                    />
                  </div>

                  <div>
                    <label className="block text-[10px] font-mono text-zinc-500 mb-1">DESCRIPTION (PUNCHY & QUANTITATIVE)</label>
                    <textarea 
                      rows={3}
                      value={proj.description}
                      onChange={(e) => handleProjectChange(proj.id, "description", e.target.value)}
                      className="w-full bg-zinc-900 border border-zinc-800 rounded px-2.5 py-1.5 text-xs text-zinc-300 focus:outline-none focus:border-emerald-500 leading-relaxed"
                    />
                  </div>

                  <div>
                    <label className="block text-[10px] font-mono text-zinc-500 mb-1">TECHNOLOGIES USED (COMMA-SEPARATED)</label>
                    <input 
                      type="text"
                      value={proj.highlights.join(", ")}
                      onChange={(e) => handleProjectChange(proj.id, "highlights", e.target.value)}
                      className="w-full bg-zinc-900 border border-zinc-800 rounded px-2.5 py-1.5 text-xs text-zinc-300 focus:outline-none focus:border-emerald-500 font-mono"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* TRANSITION JOURNEY TAB */}
        {activeTab === "journey" && (
          <div className="space-y-4">
            <p className="text-xs text-zinc-400 leading-relaxed">
              Define the progression points of your career pivot. This timeline illustrates clear professional intent, guiding recruiters through your skill acquisition model.
            </p>

            <div className="space-y-3">
              {config.journey.map((node, idx) => (
                <div key={node.id} className="bg-zinc-950/40 border border-zinc-800/80 rounded p-3 space-y-2">
                  <div className="flex items-center justify-between border-b border-zinc-800/40 pb-1.5">
                    <span className="text-[10px] font-mono text-emerald-400">// MILESTONE 0{idx + 1}</span>
                  </div>

                  <div>
                    <input 
                      type="text"
                      value={node.title}
                      onChange={(e) => handleJourneyChange(node.id, "title", e.target.value)}
                      className="w-full bg-zinc-950 border border-zinc-850 rounded px-2 py-1 text-xs text-white font-medium focus:outline-none focus:border-emerald-500"
                      placeholder="Milestone Title"
                    />
                  </div>

                  <div>
                    <textarea 
                      rows={2}
                      value={node.details}
                      onChange={(e) => handleJourneyChange(node.id, "details", e.target.value)}
                      className="w-full bg-zinc-950 border border-zinc-850 rounded px-2 py-1.5 text-xs text-zinc-300 focus:outline-none focus:border-emerald-500 leading-relaxed"
                      placeholder="Technical achievements or competencies gained."
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* PRINCIPLES TAB */}
        {activeTab === "principles" && (
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <h3 className="text-xs font-mono text-zinc-400">// ENGINEERING MINDSET</h3>
              <button 
                onClick={handleAddPrinciple}
                className="flex items-center gap-1 text-[11px] font-medium text-emerald-400 hover:text-white bg-emerald-500/10 border border-emerald-500/20 px-2 py-1 rounded transition-colors font-mono"
              >
                <Plus className="w-3.5 h-3.5" />
                Add Principle
              </button>
            </div>

            <p className="text-xs text-zinc-400 leading-relaxed font-sans">
              Use a <code className="text-emerald-400 font-mono">Title — Explanation</code> format to render these with bold inline headers automatically.
            </p>

            <div className="space-y-2">
              {config.principles.map((p, idx) => (
                <div key={idx} className="flex gap-2 items-start bg-zinc-950 p-2.5 rounded border border-zinc-800/60">
                  <span className="text-zinc-500 font-mono text-xs pt-1.5">{idx + 1}</span>
                  <textarea 
                    rows={2}
                    value={p}
                    onChange={(e) => handlePrincipleChange(idx, e.target.value)}
                    className="flex-1 bg-zinc-900 border border-zinc-800 rounded px-2 py-1 text-xs text-white focus:outline-none focus:border-emerald-500 font-sans"
                  />
                  <button 
                    onClick={() => handleRemovePrinciple(idx)}
                    className="text-zinc-500 hover:text-rose-400 p-1.5 self-center"
                  >
                    <Trash2 className="w-3.5 h-3.5" />
                  </button>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* VISUALS TAB */}
        {activeTab === "visuals" && (
          <div className="space-y-4">
            <div>
              <label className="block text-xs font-mono text-zinc-400 mb-2">// ACCENT THEME COLOR</label>
              <div className="grid grid-cols-5 gap-2">
                {colors.map((color) => (
                  <button
                    key={color}
                    onClick={() => updateField("accentColor", color)}
                    className={`h-10 rounded border capitalize flex items-center justify-center text-xs font-medium transition-all ${
                      config.accentColor === color 
                        ? "border-white bg-zinc-850 text-white scale-[1.04] shadow-md shadow-emerald-500/5" 
                        : "border-zinc-800 hover:border-zinc-700 bg-zinc-950 text-zinc-500"
                    }`}
                  >
                    <div className="flex flex-col items-center gap-1">
                      <div className={`w-3.5 h-3.5 rounded-full ${COLOR_MAP[color].accent}`} />
                      <span className="text-[9px] font-mono tracking-wider">{color}</span>
                    </div>
                  </button>
                ))}
              </div>
            </div>

            <div>
              <label className="block text-xs font-mono text-zinc-400 mb-2">// GITHUB BANNER MODEL</label>
              <div className="grid grid-cols-2 gap-2">
                <button
                  onClick={() => updateField("bannerStyle", "grid")}
                  className={`p-3 rounded border text-left text-xs font-mono transition-all ${
                    config.bannerStyle === "grid" 
                      ? "border-emerald-500 text-white bg-zinc-950" 
                      : "border-zinc-800 text-zinc-400 hover:border-zinc-700 bg-zinc-950/40"
                  }`}
                >
                  <div className="font-semibold text-white">Minimal Grid</div>
                  <div className="text-[10px] text-zinc-500 mt-0.5">Abstract math-vector network pattern</div>
                </button>

                <button
                  onClick={() => updateField("bannerStyle", "wave")}
                  className={`p-3 rounded border text-left text-xs font-mono transition-all ${
                    config.bannerStyle === "wave" 
                      ? "border-emerald-500 text-white bg-zinc-950" 
                      : "border-zinc-800 text-zinc-400 hover:border-zinc-700 bg-zinc-950/40"
                  }`}
                >
                  <div className="font-semibold text-white">Emerald Wave</div>
                  <div className="text-[10px] text-zinc-500 mt-0.5">Smooth market liquidity wave</div>
                </button>

                <button
                  onClick={() => updateField("bannerStyle", "silhouette")}
                  className={`p-3 rounded border text-left text-xs font-mono transition-all ${
                    config.bannerStyle === "silhouette" 
                      ? "border-emerald-500 text-white bg-zinc-950" 
                      : "border-zinc-800 text-zinc-400 hover:border-zinc-700 bg-zinc-950/40"
                  }`}
                >
                  <div className="font-semibold text-white">Graph Lines</div>
                  <div className="text-[10px] text-zinc-500 mt-0.5">Technical regression trends</div>
                </button>

                <button
                  onClick={() => updateField("bannerStyle", "slate")}
                  className={`p-3 rounded border text-left text-xs font-mono transition-all ${
                    config.bannerStyle === "slate" 
                      ? "border-emerald-500 text-white bg-zinc-950" 
                      : "border-zinc-800 text-zinc-400 hover:border-zinc-700 bg-zinc-950/40"
                  }`}
                >
                  <div className="font-semibold text-white">Solid Slate</div>
                  <div className="text-[10px] text-zinc-500 mt-0.5">Clean solid charcoal layout</div>
                </button>
              </div>
            </div>

            <div>
              <label className="block text-xs font-mono text-zinc-400 mb-2">// BADGE SHAPE (SHIELDS.IO)</label>
              <div className="grid grid-cols-3 gap-2">
                {[
                  { key: "flat-square", name: "Flat Square" },
                  { key: "for-the-badge", name: "High Tech" },
                  { key: "plastic", name: "Minimal" }
                ].map((b) => (
                  <button
                    key={b.key}
                    onClick={() => updateField("badgeStyle", b.key)}
                    className={`py-2 rounded border text-center text-xs font-mono transition-all ${
                      config.badgeStyle === b.key 
                        ? "border-emerald-500 text-white bg-zinc-950" 
                        : "border-zinc-800 text-zinc-400 hover:border-zinc-700 bg-zinc-950/40"
                    }`}
                  >
                    {b.name}
                  </button>
                ))}
              </div>
            </div>
          </div>
        )}

      </div>

      {/* Editor Footer */}
      <div className="p-4 border-t border-zinc-800 bg-zinc-950/80 flex items-center justify-between text-[11px] text-zinc-500">
        <span className="font-mono">V1.1 • Ready for export</span>
        <div className="flex items-center gap-1 text-emerald-400 font-mono">
          <Sparkles className="w-3.5 h-3.5" />
          <span>Finance × CS × AI</span>
        </div>
      </div>
    </div>
  );
}
