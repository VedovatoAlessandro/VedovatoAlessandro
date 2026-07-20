import React, { useState } from "react";
import { READMEConfig, COLOR_MAP } from "../types";
import { 
  MapPin, 
  Link as LinkIcon, 
  Users, 
  Star, 
  GitFork, 
  BookOpen, 
  Folder, 
  Sun, 
  Moon, 
  FileText,
  Mail,
  Award,
  Compass,
  Briefcase
} from "lucide-react";

interface GitHubMockupProps {
  config: READMEConfig;
}

export default function GitHubMockup({ config }: GitHubMockupProps) {
  const [ghTheme, setGhTheme] = useState<"dark" | "light">("dark");
  const colors = COLOR_MAP[config.accentColor];

  // Accent specific styles
  const accentText = colors.text;
  const accentBorder = colors.border;
  const accentBg = colors.bg;

  // GitHub Theme styles
  const isDark = ghTheme === "dark";
  const bgMain = isDark ? "bg-[#0d1117]" : "bg-[#f6f8fa]";
  const bgCard = isDark ? "bg-[#161b22]" : "bg-[#ffffff]";
  const textPrimary = isDark ? "text-[#c9d1d9]" : "text-[#24292f]";
  const textHeading = isDark ? "text-[#f0f6fc]" : "text-[#1f2328]";
  const textMuted = isDark ? "text-[#8b949e]" : "text-[#57606a]";
  const borderCol = isDark ? "border-[#30363d]" : "border-[#d0d7de]";
  const linkCol = isDark ? "text-[#58a6ff] hover:underline" : "text-[#0969da] hover:underline";
  const btnSec = isDark ? "bg-[#21262d] hover:bg-[#30363d] text-[#c9d1d9]" : "bg-[#f3f4f6] hover:bg-[#e5e7eb] text-[#24292f]";

  // Mock Contributions Grid
  const renderContributions = () => {
    const days = 53 * 7; // weeks * days
    const cells = [];
    for (let i = 0; i < days; i++) {
      // Pick random contribution levels (0 to 4)
      const rand = Math.random();
      let level = "bg-slate-800/10";
      if (isDark) {
        level = rand > 0.85 ? "bg-[#39d353]" : rand > 0.7 ? "bg-[#26a641]" : rand > 0.5 ? "bg-[#0e4429]" : "bg-[#161b22]";
      } else {
        level = rand > 0.85 ? "bg-[#216e39]" : rand > 0.7 ? "bg-[#30a14e]" : rand > 0.5 ? "bg-[#9be9a8]" : "bg-[#ebedf0]";
      }
      cells.push(<div key={i} className={`w-2.5 h-2.5 rounded-sm ${level}`} />);
    }
    return cells;
  };

  return (
    <div className={`rounded-xl border ${borderCol} ${bgMain} overflow-hidden shadow-2xl transition-colors duration-200 font-sans`}>
      {/* Top Banner Toolbar */}
      <div className={`px-4 py-2.5 border-b ${borderCol} flex items-center justify-between ${isDark ? "bg-[#161b22]" : "bg-[#f6f8fa]"}`}>
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 rounded-full bg-[#ff5f56]" />
          <div className="w-3 h-3 rounded-full bg-[#ffbd2e]" />
          <div className="w-3 h-3 rounded-full bg-[#27c93f]" />
          <span className={`text-xs font-mono ml-2 ${textMuted}`}>github_profile_mockup.html</span>
        </div>
        
        {/* Theme Switcher */}
        <div className="flex items-center gap-1.5 bg-zinc-800/20 p-1 rounded-lg border border-zinc-750/30">
          <button
            onClick={() => setGhTheme("light")}
            className={`p-1.5 rounded-md transition-all ${!isDark ? "bg-white text-amber-500 shadow-sm" : "text-zinc-400 hover:text-zinc-200"}`}
            title="GitHub Light Mode"
          >
            <Sun className="w-3.5 h-3.5" />
          </button>
          <button
            onClick={() => setGhTheme("dark")}
            className={`p-1.5 rounded-md transition-all ${isDark ? "bg-[#0d1117] text-indigo-400 shadow-sm" : "text-zinc-400 hover:text-zinc-600"}`}
            title="GitHub Dark Mode"
          >
            <Moon className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>

      {/* GitHub Navbar Mockup */}
      <div className={`px-6 py-4 border-b ${borderCol} ${isDark ? "bg-[#161b22]" : "bg-[#f6f8fa]"} flex items-center justify-between text-xs`}>
        <div className="flex items-center gap-4">
          <svg height="24" viewBox="0 0 16 16" width="24" className={isDark ? "fill-white" : "fill-[#24292f]"}>
            <path d="M8 0c4.42 0 8 3.58 8 8a8.013 8.013 0 0 1-5.45 7.59c-.4.08-.55-.17-.55-.38 0-.27.01-1.13.01-2.2 0-.75-.25-1.23-.54-1.48 1.78-.2 3.65-.88 3.65-3.95 0-.88-.31-1.59-.82-2.15.08-.2.36-1.02-.08-2.12 0 0-.67-.22-2.2.82-.64-.18-1.32-.27-2-.27-.68 0-1.36.09-2 .27-1.53-1.03-2.2-.82-2.2-.82-.44 1.1-.16 1.92-.08 2.12-.51.56-.82 1.28-.82 2.15 0 3.06 1.86 3.75 3.64 3.95-.23.2-.44.55-.51 1.07-.46.21-1.61.55-2.33-.66-.15-.24-.6-.83-1.23-.82-.67.01-.27.38.01.53.34.19.73.9.82 1.13.16.45.68 1.35 2.69.91 0 .67.01 1.3.01 1.49 0 .21-.15.45-.55.38A7.995 7.995 0 0 1 0 8c0-4.42 3.58-8 8-8Z" />
          </svg>
          <div className={`px-3 py-1 bg-transparent border ${borderCol} rounded-md text-[11px] w-48 ${textMuted} flex items-center`}>
            Search or jump to...
          </div>
          <span className={`font-semibold ${textPrimary}`}>Pull requests</span>
          <span className={`font-semibold ${textPrimary}`}>Issues</span>
          <span className={`font-semibold ${textPrimary}`}>Codespaces</span>
          <span className={`font-semibold ${textPrimary}`}>Marketplace</span>
        </div>
        <div className="flex items-center gap-3">
          <div className="w-5 h-5 rounded-full bg-zinc-750 flex items-center justify-center font-bold text-[10px] text-white">AV</div>
        </div>
      </div>

      {/* Main Profile Columns */}
      <div className="px-6 py-6 md:grid md:grid-cols-[260px_1fr] gap-6">
        
        {/* Left Column: User Profile Card */}
        <div className="space-y-4 mb-6 md:mb-0">
          <div className="relative group">
            {/* Avatar block with customizable gradient background */}
            <div className={`w-full aspect-square rounded-full border-2 ${borderCol} bg-gradient-to-br ${COLOR_MAP[config.accentColor].gradient} p-4 flex items-center justify-center shadow-md`}>
              <div className="text-center">
                <span className={`font-display text-4xl font-bold text-white tracking-widest`}>
                  {config.name.split(" ").map(n => n[0]).join("")}
                </span>
                <span className={`block text-[10px] font-mono tracking-wider mt-1 text-zinc-300 uppercase`}>QUANT_ENGINE</span>
              </div>
            </div>
            {/* Online indicator badge */}
            <div className="absolute bottom-4 right-4 w-5 h-5 rounded-full bg-emerald-500 border-4 border-[#0d1117] flex items-center justify-center" />
          </div>

          <div>
            <h1 className={`text-xl font-bold ${textHeading} tracking-tight`}>{config.name}</h1>
            <p className={`text-sm ${textMuted} font-mono`}>@{config.name.toLowerCase().replace(/\s+/g, "")}</p>
          </div>

          {/* Quick Stats Bio */}
          <p className={`text-xs ${textPrimary} leading-relaxed`}>
            {config.tagline}
          </p>

          <button className={`w-full py-1.5 border ${borderCol} rounded-lg text-xs font-semibold ${btnSec} transition-colors shadow-sm`}>
            Follow
          </button>

          {/* Followers and Sponsorship counts */}
          <div className={`flex items-center gap-4 text-xs ${textMuted} py-2 border-y ${borderCol}`}>
            <span className="flex items-center gap-1 hover:text-[#58a6ff] cursor-pointer">
              <Users className="w-3.5 h-3.5" />
              <strong className={textPrimary}>242</strong> followers
            </span>
            <span className="flex items-center gap-1 hover:text-[#58a6ff] cursor-pointer">
              <strong className={textPrimary}>180</strong> following
            </span>
          </div>

          {/* User Details metadata */}
          <div className={`space-y-2 text-xs ${textMuted}`}>
            <div className="flex items-center gap-2">
              <Briefcase className="w-3.5 h-3.5" />
              <span className={textPrimary}>Transitioning Analyst</span>
            </div>
            <div className="flex items-center gap-2">
              <MapPin className="w-3.5 h-3.5" />
              <span className={textPrimary}>Zurich, Switzerland</span>
            </div>
            <div className="flex items-center gap-2">
              <Mail className="w-3.5 h-3.5" />
              <a href={`mailto:vedovatoalessandro1@gmail.com`} className={linkCol}>vedovatoalessandro1@gmail.com</a>
            </div>
            <div className="flex items-center gap-2">
              <LinkIcon className="w-3.5 h-3.5" />
              <a href="https://linkedin.com/in/alessandro-vedovato" target="_blank" rel="noreferrer" className={linkCol}>linkedin/alessandro-vedovato</a>
            </div>
          </div>
        </div>

        {/* Right Column: Main Content */}
        <div className="space-y-6">
          {/* Sub Navigation tabs */}
          <div className={`border-b ${borderCol} flex items-center gap-4 text-xs ${textPrimary}`}>
            <span className={`pb-2.5 font-semibold border-b-2 border-[#f78166] flex items-center gap-1.5 cursor-pointer`}>
              <BookOpen className="w-3.5 h-3.5" />
              Overview
            </span>
            <span className={`pb-2.5 font-medium flex items-center gap-1.5 cursor-pointer opacity-70 hover:opacity-100`}>
              <Folder className="w-3.5 h-3.5" />
              Repositories
              <span className={`px-1.5 py-0.5 rounded-full text-[10px] ${isDark ? "bg-[#30363d]" : "bg-[#eaeff5]"} text-xs`}>
                {config.projects.length + 2}
              </span>
            </span>
          </div>

          {/* Popular Repositories Mock-Up Grid (2x2) */}
          <div>
            <div className="flex items-center justify-between mb-3">
              <h2 className={`text-xs font-mono tracking-wider ${textMuted}`}>POPULAR SYSTEMS</h2>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {config.projects.slice(0, 2).map((proj, i) => (
                <div key={proj.id} className={`p-3 rounded-lg border ${borderCol} ${bgCard} flex flex-col justify-between shadow-sm`}>
                  <div className="space-y-1.5">
                    <div className="flex items-center justify-between">
                      <span className={`text-xs font-semibold ${linkCol} font-mono cursor-pointer`}>
                        {proj.name.toLowerCase().replace(/\s+/g, "-")}
                      </span>
                      <span className={`text-[10px] px-1.5 py-0.5 border ${borderCol} rounded-full ${textMuted}`}>
                        Public
                      </span>
                    </div>
                    <p className={`text-[11px] ${textMuted} line-clamp-2 leading-relaxed`}>
                      {proj.subtitle || proj.description}
                    </p>
                  </div>
                  <div className={`flex items-center gap-4 text-[10px] ${textMuted} mt-3`}>
                    <span className="flex items-center gap-1">
                      <span className={`w-2 h-2 rounded-full ${i === 0 ? "bg-amber-400" : "bg-[#00599C]"}`} />
                      {i === 0 ? "Python" : "C++"}
                    </span>
                    <span className="flex items-center gap-0.5">
                      <Star className="w-3 h-3" />
                      12
                    </span>
                    <span className="flex items-center gap-0.5">
                      <GitFork className="w-3 h-3" />
                      4
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* README SECTION CONTROLLER */}
          <div className={`border ${borderCol} rounded-xl overflow-hidden shadow-sm ${bgCard}`}>
            {/* Header border tab */}
            <div className={`px-4 py-3 border-b ${borderCol} ${isDark ? "bg-[#161b22]" : "bg-[#f6f8fa]"} flex items-center justify-between`}>
              <div className="flex items-center gap-2">
                <FileText className={`w-4 h-4 ${textMuted}`} />
                <span className={`text-xs font-mono font-medium ${textPrimary}`}>README.md</span>
              </div>
              <span className={`text-[10px] font-mono text-zinc-500`}>SECURE_COMPILED</span>
            </div>

            {/* THE ACTUAL README BODY RENDERING (Mimics GitHub stylesheet perfectly!) */}
            <div className={`p-6 md:p-8 space-y-6 ${isDark ? "text-[#c9d1d9]" : "text-[#24292f]"} leading-relaxed text-sm`}>
              
              {/* README HEADER */}
              <div className="space-y-2 border-b pb-4 border-zinc-800/20">
                <h1 className={`text-3xl font-display font-bold ${textHeading} tracking-tight`}>
                  {config.name}
                </h1>
                <h4 className={`text-sm font-mono tracking-wider ${accentText} font-semibold uppercase`}>
                  ⚡ {config.intersectionStatement}
                </h4>
                <p className={`text-xs ${textMuted} italic mt-1 font-sans`}>
                  &quot;{config.tagline}&quot;
                </p>
              </div>

              {/* Dynamic SVG Live Banner Render */}
              {config.bannerStyle !== "none" && (
                <div className="border border-zinc-800/40 rounded-lg overflow-hidden bg-[#090d16] p-1.5 shadow-md">
                  <svg
                    viewBox="0 0 800 200"
                    width="100%"
                    height="100%"
                    xmlns="http://www.w3.org/2000/svg"
                    className="rounded"
                  >
                    <rect width="800" height="200" fill="#090d16" />
                    
                    {/* Gradients & radial nodes */}
                    <defs>
                      <linearGradient id="glowG" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor={`#${colors.hex}`} stopOpacity="0.1" />
                        <stop offset="100%" stopColor="#090d16" stopOpacity="0" />
                      </linearGradient>
                    </defs>

                    <rect width="800" height="200" fill="url(#glowG)" />

                    {/* Banner style-specific background layout elements */}
                    {config.bannerStyle === "grid" && (
                      <g opacity="0.3">
                        <line x1="50" y1="20" x2="50" y2="180" stroke={`#${colors.hex}`} strokeWidth="0.5" />
                        <line x1="50" y1="150" x2="750" y2="150" stroke={`#${colors.hex}`} strokeWidth="0.5" />
                        <path d="M 50 150 Q 200 90 350 120 T 650 60" fill="none" stroke={`#${colors.hex}`} strokeWidth="1" />
                        <circle cx="350" cy="120" r="3" fill={`#${colors.hex}`} />
                        <circle cx="650" cy="60" r="3" fill={`#${colors.hex}`} />
                      </g>
                    )}

                    {config.bannerStyle === "wave" && (
                      <path d="M 0 130 C 150 170, 250 60, 400 100 C 550 140, 650 50, 800 60 L 800 200 L 0 200 Z" fill={`#${colors.hex}`} fillOpacity="0.06" stroke={`#${colors.hex}`} strokeWidth="0.5" strokeOpacity="0.2" />
                    )}

                    {config.bannerStyle === "silhouette" && (
                      <g opacity="0.2">
                        <circle cx="500" cy="100" r="3" fill={`#${colors.hex}`} />
                        <circle cx="580" cy="120" r="4" fill={`#${colors.hex}`} />
                        <circle cx="640" cy="50" r="3" fill={`#${colors.hex}`} />
                        <line x1="500" y1="100" x2="580" y2="120" stroke={`#${colors.hex}`} strokeWidth="0.75" />
                        <line x1="580" y1="120" x2="640" y2="50" stroke={`#${colors.hex}`} strokeWidth="0.75" />
                      </g>
                    )}

                    {/* Overlay text */}
                    <text x="40" y="75" fill="#ffffff" fontSize="22" fontFamily="'Space Grotesk', sans-serif" fontWeight="bold">{config.name.toUpperCase()}</text>
                    <text x="40" y="105" fill={`#${colors.hex}`} fontSize="9" fontFamily="monospace" fontWeight="bold" letterSpacing="3">{config.intersectionStatement.toUpperCase()}</text>
                    <text x="40" y="132" fill="#64748b" fontSize="9" fontFamily="sans-serif">{config.tagline.length > 70 ? `${config.tagline.slice(0, 70)}...` : config.tagline}</text>

                    {/* Accent border right */}
                    <rect x="794" y="0" width="6" height="200" fill={`#${colors.hex}`} />
                  </svg>
                </div>
              )}

              {/* SECTION 1: PHILOSOPHY */}
              <div className="space-y-2">
                <h2 className={`text-lg font-semibold ${textHeading} border-b ${borderCol} pb-1 flex items-center gap-2`}>
                  <span className={`${accentText} font-mono text-sm`}>01.</span> Engineering Philosophy
                </h2>
                <p className={`leading-relaxed text-sm ${textPrimary}`}>
                  {config.philosophy}
                </p>
              </div>

              {/* SECTION 2: TECH STACK BADGES */}
              <div className="space-y-3">
                <h2 className={`text-lg font-semibold ${textHeading} border-b ${borderCol} pb-1 flex items-center gap-2`}>
                  <span className={`${accentText} font-mono text-sm`}>02.</span> Core Technology Stack
                </h2>
                
                {/* Visualizing dynamic shields.io style HTML elements */}
                <div className="space-y-2 pt-1">
                  {[
                    { cat: "programming", label: "Programming" },
                    { cat: "ai", label: "Artificial Intelligence" },
                    { cat: "data", label: "Data & Modeling" },
                    { cat: "engineering", label: "Engineering" }
                  ].map((group) => {
                    const items = config.techStack.filter(t => t.category === group.cat && t.enabled);
                    if (items.length === 0) return null;
                    return (
                      <div key={group.cat} className="grid grid-cols-[100px_1fr] gap-3 items-center">
                        <span className={`text-xs font-semibold ${textMuted}`}>{group.label}:</span>
                        <div className="flex flex-wrap gap-1.5">
                          {items.map((item) => (
                            <span 
                              key={item.name}
                              className={`px-2 py-0.5 text-[10px] font-mono font-bold uppercase rounded border tracking-wider transition-colors bg-zinc-950`}
                              style={{ 
                                borderColor: `#${item.badgeColor}30`, 
                                color: `#${item.badgeColor || "ffffff"}`
                              }}
                            >
                              {item.name}
                            </span>
                          ))}
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* SECTION 3: JOURNEY TIMELINE */}
              <div className="space-y-3">
                <h2 className={`text-lg font-semibold ${textHeading} border-b ${borderCol} pb-1 flex items-center gap-2`}>
                  <span className={`${accentText} font-mono text-sm`}>03.</span> Engineering Journey & Transition
                </h2>
                <p className={`text-xs ${textMuted} italic`}>
                  The quantitative structural shift from financial analyst to software and artificial intelligence engineer:
                </p>

                {/* Render terminal-style journey */}
                <div className={`rounded-lg p-4 font-mono text-xs ${isDark ? "bg-[#161b22] border border-[#30363d]" : "bg-[#f6f8fa] border border-[#d0d7de]"} space-y-4`}>
                  {config.journey.map((node, idx) => (
                    <div key={node.id} className="space-y-1">
                      <div className="flex items-center gap-2">
                        <span className={`${accentText} font-bold`}>[Step 0{idx + 1}]</span>
                        <span className={`font-semibold ${textHeading}`}>{node.title}</span>
                      </div>
                      <div className="pl-6 border-l border-zinc-700/30 text-zinc-400">
                        {node.details}
                      </div>
                      {idx < config.journey.length - 1 && (
                        <div className="pl-2 text-indigo-400/50 font-bold my-1">
                          ↓
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>

              {/* SECTION 4: SELECTED SYSTEMS */}
              <div className="space-y-4">
                <h2 className={`text-lg font-semibold ${textHeading} border-b ${borderCol} pb-1 flex items-center gap-2`}>
                  <span className={`${accentText} font-mono text-sm`}>04.</span> Selected Systems
                </h2>

                <div className="space-y-4">
                  {config.projects.map((proj, idx) => (
                    <div key={proj.id} className="space-y-1">
                      <h3 className={`text-md font-semibold ${textHeading} flex items-center gap-2`}>
                        <span className={`text-xs ${accentText} font-mono`}>0{idx + 1}.</span> {proj.name}
                      </h3>
                      {proj.subtitle && (
                        <p className={`text-xs ${textMuted} italic font-sans font-medium pl-4 border-l-2 ${accentBorder}`}>
                          {proj.subtitle}
                        </p>
                      )}
                      <p className={`text-sm ${textPrimary} pl-4 leading-relaxed pt-1`}>
                        {proj.description}
                      </p>
                      <div className="pl-4 flex flex-wrap gap-1.5 pt-1.5">
                        {proj.highlights.map(h => (
                          <span key={h} className="text-[10px] font-mono px-1.5 py-0.5 bg-zinc-800/30 text-zinc-400 rounded">
                            {h}
                          </span>
                        ))}
                      </div>
                      {idx < config.projects.length - 1 && (
                        <div className={`h-px ${borderCol} my-4 opacity-50`} />
                      )}
                    </div>
                  ))}
                </div>
              </div>

              {/* SECTION 5: PRINCIPLES */}
              <div className="space-y-3">
                <h2 className={`text-lg font-semibold ${textHeading} border-b ${borderCol} pb-1 flex items-center gap-2`}>
                  <span className={`${accentText} font-mono text-sm`}>05.</span> Engineering Principles
                </h2>

                <ul className="space-y-2.5 pl-4 list-none text-sm">
                  {config.principles.map((p, idx) => {
                    const parts = p.split(" — ");
                    return (
                      <li key={idx} className="relative pl-5">
                        <span className={`absolute left-0 top-1 text-xs ${accentText} font-bold`}>■</span>
                        {parts.length > 1 ? (
                          <span>
                            <strong className={textHeading}>{parts[0]}</strong> — <span className={textPrimary}>{parts[1]}</span>
                          </span>
                        ) : (
                          <span className={textPrimary}>{p}</span>
                        )}
                      </li>
                    );
                  })}
                </ul>
              </div>

              {/* SECTION 6: CONNECT */}
              <div className="pt-4 border-t border-zinc-800/20 flex flex-wrap gap-3">
                <span className="px-3 py-1 bg-[#0077b5]/10 border border-[#0077b5]/30 text-[#0077b5] text-xs font-semibold rounded font-mono flex items-center gap-1.5 uppercase tracking-wider">
                  <span>LinkedIn</span>
                </span>
                <span className="px-3 py-1 bg-[#d14836]/10 border border-[#d14836]/30 text-[#d14836] text-xs font-semibold rounded font-mono flex items-center gap-1.5 uppercase tracking-wider">
                  <span>Email Direct</span>
                </span>
              </div>

            </div>
          </div>

          {/* GitHub Contributions Graph Mockup (Premium visual asset) */}
          <div className={`border ${borderCol} rounded-xl p-4 ${bgCard} shadow-sm space-y-3`}>
            <div className="flex items-center justify-between text-xs">
              <span className={`font-semibold ${textPrimary}`}>2,842 contributions in the last year</span>
              <span className={textMuted}>Contribution settings</span>
            </div>
            
            {/* The Green Grid */}
            <div className="overflow-x-auto whitespace-nowrap pb-1">
              <div className="grid grid-flow-col grid-rows-7 gap-1 w-max">
                {renderContributions()}
              </div>
            </div>

            <div className="flex items-center justify-between text-[10px] ${textMuted} pt-1">
              <span>Learn how we count contributions</span>
              <div className="flex items-center gap-1">
                <span>Less</span>
                <div className={`w-2.5 h-2.5 rounded-sm ${isDark ? "bg-[#161b22]" : "bg-[#ebedf0]"}`} />
                <div className={`w-2.5 h-2.5 rounded-sm ${isDark ? "bg-[#0e4429]" : "bg-[#9be9a8]"}`} />
                <div className={`w-2.5 h-2.5 rounded-sm ${isDark ? "bg-[#26a641]" : "bg-[#30a14e]"}`} />
                <div className={`w-2.5 h-2.5 rounded-sm ${isDark ? "bg-[#39d353]" : "bg-[#216e39]"}`} />
                <span>More</span>
              </div>
            </div>
          </div>

        </div>

      </div>
    </div>
  );
}
