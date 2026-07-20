import React, { useRef } from "react";
import { READMEConfig, COLOR_MAP } from "../types";
import { Download, Copy, Check, Info, FileCode } from "lucide-react";

interface AssetGeneratorProps {
  config: READMEConfig;
}

export default function AssetGenerator({ config }: AssetGeneratorProps) {
  const [copied, setCopied] = React.useState(false);
  const svgRef = useRef<SVGSVGElement>(null);
  const colors = COLOR_MAP[config.accentColor];

  // Colors based on accent
  const accentHex = `#${colors.hex}`;
  const gradientStart = accentHex;
  const gradientEnd = config.accentColor === "emerald" ? "#022c22" : "#0f172a";

  const downloadSVG = () => {
    if (!svgRef.current) return;
    try {
      const svgData = new XMLSerializer().serializeToString(svgRef.current);
      const svgBlob = new Blob([svgData], { type: "image/svg+xml;charset=utf-8" });
      const svgUrl = URL.createObjectURL(svgBlob);
      const downloadLink = document.createElement("a");
      downloadLink.href = svgUrl;
      downloadLink.download = `${config.name.toLowerCase().replace(/\s+/g, "_")}_github_banner.svg`;
      document.body.appendChild(downloadLink);
      downloadLink.click();
      document.body.removeChild(downloadLink);
      URL.revokeObjectURL(svgUrl);
    } catch (e) {
      console.error("Failed to export SVG banner", e);
    }
  };

  const copySVGCode = () => {
    if (!svgRef.current) return;
    try {
      const svgData = new XMLSerializer().serializeToString(svgRef.current);
      navigator.clipboard.writeText(svgData);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-5 space-y-6 text-zinc-300 font-sans shadow-lg">
      <div className="flex items-center justify-between border-b border-zinc-800 pb-3">
        <div>
          <h3 className="font-mono text-xs uppercase tracking-wider text-white font-semibold">// Dynamic SVG Banner Builder</h3>
          <p className="text-xs text-zinc-500 mt-1">High-fidelity vector background engineered on-the-fly.</p>
        </div>
        <div className="flex gap-2">
          <button
            onClick={copySVGCode}
            className="flex items-center gap-1.5 px-3 py-1.5 text-xs text-zinc-300 hover:text-white bg-zinc-850 hover:bg-zinc-800 border border-zinc-750 rounded-lg transition-all font-mono"
          >
            {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <FileCode className="w-3.5 h-3.5 text-zinc-500" />}
            {copied ? "Copied SVG" : "Copy Code"}
          </button>
          <button
            onClick={downloadSVG}
            className="flex items-center gap-1.5 px-3 py-1.5 text-xs text-white bg-emerald-600 hover:bg-emerald-500 rounded-lg transition-all font-mono font-semibold"
          >
            <Download className="w-3.5 h-3.5" />
            Download SVG
          </button>
        </div>
      </div>

      {/* SVG Canvas Preview */}
      <div className="border border-zinc-850 rounded-lg overflow-hidden bg-zinc-950 p-2 shadow-inner">
        <svg
          ref={svgRef}
          viewBox="0 0 800 240"
          width="100%"
          height="100%"
          className="rounded shadow-xl"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Base Background */}
          <rect width="800" height="240" fill="#090d16" />

          {/* Gradients */}
          <defs>
            <linearGradient id="brandGlow" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor={gradientStart} stopOpacity="0.12" />
              <stop offset="50%" stopColor="#1e293b" stopOpacity="0.02" />
              <stop offset="100%" stopColor={gradientEnd} stopOpacity="0" />
            </linearGradient>
            <radialGradient id="radialAccent" cx="80%" cy="40%" r="50%">
              <stop offset="0%" stopColor={accentHex} stopOpacity="0.15" />
              <stop offset="100%" stopColor="#090d16" stopOpacity="0" />
            </radialGradient>
            <pattern id="dotPattern" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
              <circle cx="2" cy="2" r="1" fill="#334155" fillOpacity="0.15" />
            </pattern>
            <pattern id="gridPattern" x="0" y="0" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#334155" strokeWidth="0.5" strokeOpacity="0.1" />
            </pattern>
          </defs>

          {/* Background Patterns */}
          <rect width="800" height="240" fill="url(#dotPattern)" />
          <rect width="800" height="240" fill="url(#brandGlow)" />
          <rect width="800" height="240" fill="url(#radialAccent)" />

          {/* MINIMAL GRID VISUALS */}
          {config.bannerStyle === "grid" && (
            <g>
              <rect width="800" height="240" fill="url(#gridPattern)" />
              {/* Coordinate axis */}
              <line x1="80" y1="40" x2="80" y2="200" stroke="#475569" strokeWidth="0.5" strokeOpacity="0.2" />
              <line x1="80" y1="200" x2="720" y2="200" stroke="#475569" strokeWidth="0.5" strokeOpacity="0.2" />
              {/* Grid ticks */}
              <line x1="75" y1="80" x2="80" y2="80" stroke="#475569" strokeWidth="0.75" strokeOpacity="0.3" />
              <line x1="75" y1="120" x2="80" y2="120" stroke="#475569" strokeWidth="0.75" strokeOpacity="0.3" />
              <line x1="75" y1="160" x2="80" y2="160" stroke="#475569" strokeWidth="0.75" strokeOpacity="0.3" />
              <line x1="160" y1="200" x2="160" y2="205" stroke="#475569" strokeWidth="0.75" strokeOpacity="0.3" />
              <line x1="240" y1="200" x2="240" y2="205" stroke="#475569" strokeWidth="0.75" strokeOpacity="0.3" />
              <line x1="320" y1="200" x2="320" y2="205" stroke="#475569" strokeWidth="0.75" strokeOpacity="0.3" />
              <line x1="400" y1="200" x2="400" y2="205" stroke="#475569" strokeWidth="0.75" strokeOpacity="0.3" />
              <line x1="480" y1="200" x2="480" y2="205" stroke="#475569" strokeWidth="0.75" strokeOpacity="0.3" />
              <line x1="560" y1="200" x2="560" y2="205" stroke="#475569" strokeWidth="0.75" strokeOpacity="0.3" />
              <line x1="640" y1="200" x2="640" y2="205" stroke="#475569" strokeWidth="0.75" strokeOpacity="0.3" />

              {/* Data curve */}
              <path d="M 120 180 Q 220 140 320 160 T 520 80 T 700 110" fill="none" stroke={accentHex} strokeWidth="1.5" strokeOpacity="0.4" />
              {/* Mathematical scatter nodes */}
              <circle cx="320" cy="160" r="3.5" fill="#090d16" stroke={accentHex} strokeWidth="1" />
              <circle cx="520" cy="80" r="3.5" fill="#090d16" stroke={accentHex} strokeWidth="1" />
              <circle cx="700" cy="110" r="3.5" fill="#090d16" stroke={accentHex} strokeWidth="1" />

              {/* Decorative data node flags */}
              <text x="532" y="78" fill={accentHex} fontSize="8" fontFamily="monospace" letterSpacing="0.5" fillOpacity="0.7">σ = 0.042</text>
              <text x="332" y="158" fill={accentHex} fontSize="8" fontFamily="monospace" letterSpacing="0.5" fillOpacity="0.7">μ = 0.158</text>
            </g>
          )}

          {/* EMERALD WAVE / CANDLESTICKS */}
          {config.bannerStyle === "wave" && (
            <g>
              {/* Trendline grids */}
              <line x1="0" y1="60" x2="800" y2="60" stroke="#1e293b" strokeDasharray="5,5" strokeWidth="0.5" />
              <line x1="0" y1="120" x2="800" y2="120" stroke="#1e293b" strokeDasharray="5,5" strokeWidth="0.5" />
              <line x1="0" y1="180" x2="800" y2="180" stroke="#1e293b" strokeDasharray="5,5" strokeWidth="0.5" />

              {/* Financial Candlesticks fading out right */}
              {/* candle 1 */}
              <line x1="500" y1="120" x2="500" y2="170" stroke={accentHex} strokeWidth="1" strokeOpacity="0.5" />
              <rect x="495" y="130" width="10" height="25" fill="#090d16" stroke={accentHex} strokeWidth="1" strokeOpacity="0.6" />
              
              {/* candle 2 */}
              <line x1="530" y1="100" x2="530" y2="150" stroke={accentHex} strokeWidth="1" strokeOpacity="0.6" />
              <rect x="525" y="110" width="10" height="30" fill={accentHex} fillOpacity="0.2" stroke={accentHex} strokeWidth="1" strokeOpacity="0.8" />

              {/* candle 3 */}
              <line x1="560" y1="80" x2="560" y2="130" stroke={accentHex} strokeWidth="1" strokeOpacity="0.8" />
              <rect x="555" y="90" width="10" height="25" fill={accentHex} stroke={accentHex} strokeWidth="1" />

              {/* candle 4 */}
              <line x1="590" y1="110" x2="590" y2="160" stroke="#ef4444" strokeWidth="1" strokeOpacity="0.8" />
              <rect x="585" y="120" width="10" height="30" fill="#ef4444" fillOpacity="0.2" stroke="#ef4444" strokeWidth="1" strokeOpacity="0.8" />

              {/* candle 5 */}
              <line x1="620" y1="70" x2="620" y2="120" stroke={accentHex} strokeWidth="1" strokeOpacity="0.9" />
              <rect x="615" y="80" width="10" height="25" fill={accentHex} stroke={accentHex} strokeWidth="1" />

              {/* Sine-Wave Liquidity Sweep */}
              <path d="M 0 160 C 150 210, 250 80, 400 130 C 550 180, 650 90, 800 100" fill="none" stroke={accentHex} strokeWidth="2" strokeOpacity="0.4" />
              <path d="M 0 160 C 150 210, 250 80, 400 130 C 550 180, 650 90, 800 100 L 800 240 L 0 240 Z" fill={`url(#brandGlow)`} strokeWidth="0" />
            </g>
          )}

          {/* GRAPH SILHOUETTE */}
          {config.bannerStyle === "silhouette" && (
            <g>
              {/* Regression line */}
              <line x1="50" y1="210" x2="750" y2="30" stroke="#334155" strokeWidth="0.75" strokeOpacity="0.3" strokeDasharray="4,4" />
              {/* Neural network lines */}
              <path d="M 450 160 L 500 120 L 580 140 L 640 60 L 720 90" fill="none" stroke={accentHex} strokeWidth="1" strokeOpacity="0.3" />
              <path d="M 480 200 L 500 120 L 550 80 L 640 60 L 690 150" fill="none" stroke={accentHex} strokeWidth="0.75" strokeOpacity="0.2" />

              {/* Nodes */}
              <circle cx="500" cy="120" r="4" fill={accentHex} />
              <circle cx="580" cy="140" r="3" fill="#090d16" stroke={accentHex} strokeWidth="1" />
              <circle cx="640" cy="60" r="5" fill={accentHex} />
              <circle cx="720" cy="90" r="3" fill={accentHex} fillOpacity="0.7" />
              <circle cx="550" cy="80" r="4" fill="#38bdf8" />

              {/* Little vector annotations */}
              <text x="652" y="58" fill={accentHex} fontSize="7" fontFamily="monospace" fillOpacity="0.8">[NEURON_MAX_ACT]</text>
              <text x="495" y="108" fill={accentHex} fontSize="7" fontFamily="monospace" fillOpacity="0.8">R² = 0.985</text>
            </g>
          )}

          {/* SOLID SLATE STYLE */}
          {config.bannerStyle === "slate" && (
            <rect width="800" height="240" fill="#0b0f19" fillOpacity="0.4" stroke="#1e293b" strokeWidth="0.5" />
          )}

          {/* Text/Branding Layout */}
          {/* Header Code-Marker */}
          <g transform="translate(60, 65)">
            <rect width="8" height="8" fill={accentHex} rx="1" />
            <text x="16" y="8" fill="#64748b" fontSize="9" fontFamily="monospace" fontWeight="bold" letterSpacing="2">SYSTEM_ENTRY: ONLINE</text>
          </g>

          {/* Primary Name Display */}
          <text
            x="60"
            y="115"
            fill="#ffffff"
            fontSize="26"
            fontFamily="'Space Grotesk', system-ui, sans-serif"
            fontWeight="700"
            letterSpacing="0.5"
          >
            {config.name.toUpperCase()}
          </text>

          {/* Subtitle Intersection */}
          <text
            x="60"
            y="145"
            fill={accentHex}
            fontSize="11"
            fontFamily="monospace"
            fontWeight="bold"
            letterSpacing="3"
          >
            {config.intersectionStatement.toUpperCase()}
          </text>

          {/* Short tagline */}
          <text
            x="60"
            y="172"
            fill="#94a3b8"
            fontSize="10"
            fontFamily="system-ui, sans-serif"
            letterSpacing="0.2"
            width="450"
          >
            {config.tagline.length > 70 ? `${config.tagline.slice(0, 70)}...` : config.tagline}
          </text>

          {/* Right margin technical terminal box */}
          <g transform="translate(560, 45)" opacity="0.8">
            {/* Terminal outline */}
            <rect width="180" height="150" rx="6" fill="#060910" stroke="#1e293b" strokeWidth="1" />
            
            {/* Terminal Window dots */}
            <circle cx="15" cy="15" r="3" fill="#ef4444" />
            <circle cx="25" cy="15" r="3" fill="#f59e0b" />
            <circle cx="35" cy="15" r="3" fill="#10b981" />
            
            {/* Terminal title */}
            <text x="50" y="18" fill="#475569" fontSize="8" fontFamily="monospace" fontWeight="bold">v1.0.0_compiler</text>
            <line x1="0" y1="30" x2="180" y2="30" stroke="#1e293b" strokeWidth="0.5" />

            {/* Terminal code lines */}
            <text x="12" y="50" fill={accentHex} fontSize="8" fontFamily="monospace" fontWeight="500">&gt; import quant_ai</text>
            <text x="12" y="65" fill="#64748b" fontSize="8" fontFamily="monospace">&gt; model = quant_ai.Load()</text>
            <text x="12" y="80" fill="#94a3b8" fontSize="8" fontFamily="monospace">&gt; model.fit(capital, ml)</text>
            
            {/* Interactive blinking terminal cursor */}
            <text x="12" y="98" fill={accentHex} fontSize="8" fontFamily="monospace" fontWeight="bold">&gt; system status: 100%</text>
            <rect x="110" y="91" width="5" height="8" fill={accentHex}>
              <animate attributeName="opacity" values="0;1;0" dur="1s" repeatCount="indefinite" />
            </rect>

            {/* Coordinates info overlay */}
            <line x1="12" y1="115" x2="168" y2="115" stroke="#1e293b" strokeWidth="0.5" />
            <text x="12" y="132" fill="#475569" fontSize="7" fontFamily="monospace">STABILITY: EXCELLENT</text>
            <text x="12" y="142" fill="#475569" fontSize="7" fontFamily="monospace">ALPHA GENERATED: SECURE</text>
          </g>

          {/* Border line bottom accent */}
          <rect y="237" width="800" height="3" fill={accentHex} />
        </svg>
      </div>

      <div className="flex gap-3 bg-zinc-950/40 border border-zinc-800/80 rounded-lg p-3 text-xs leading-relaxed text-zinc-400">
        <Info className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
        <div className="space-y-1">
          <p className="text-zinc-300 font-medium font-mono">// HOW_TO_USE_VECTOR_ASSET:</p>
          <p>
            1. Configure your banner colors and structures on the left side menu.<br />
            2. Click the <strong className="text-white">Download SVG</strong> button to save the vector file locally.<br />
            3. Commit the file to your personal GitHub repository (e.g. in an <code className="text-emerald-400 font-mono">assets/</code> directory).<br />
            4. Reference it directly in your profile README with the relative or raw rawgit link!
          </p>
        </div>
      </div>
    </div>
  );
}
