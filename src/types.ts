export interface Project {
  id: string;
  name: string;
  subtitle: string;
  description: string;
  highlights: string[];
}

export interface JourneyNode {
  id: string;
  title: string;
  details: string;
}

export interface TechItem {
  name: string;
  category: "programming" | "ai" | "data" | "engineering";
  enabled: boolean;
  iconSlug?: string;
  badgeColor?: string;
}

export interface READMEConfig {
  name: string;
  roleTitle: string;
  tagline: string;
  intersectionStatement: string;
  philosophy: string;
  projects: Project[];
  journey: JourneyNode[];
  techStack: TechItem[];
  principles: string[];
  bannerStyle: "grid" | "wave" | "silhouette" | "slate" | "none";
  accentColor: "emerald" | "indigo" | "cyan" | "violet" | "teal";
  badgeStyle: "flat-square" | "for-the-badge" | "plastic";
}

export const INITIAL_TECH_STACK: TechItem[] = [
  // Programming
  { name: "Python", category: "programming", enabled: true, iconSlug: "python", badgeColor: "3776AB" },
  { name: "C++", category: "programming", enabled: true, iconSlug: "cplusplus", badgeColor: "00599C" },
  { name: "SQL", category: "programming", enabled: true, iconSlug: "postgresql", badgeColor: "4169E1" },
  { name: "TypeScript", category: "programming", enabled: false, iconSlug: "typescript", badgeColor: "3178C6" },
  
  // AI
  { name: "Large Language Models", category: "ai", enabled: true, iconSlug: "openai", badgeColor: "412991" },
  { name: "RAG Systems", category: "ai", enabled: true, iconSlug: "cohere", badgeColor: "00C0FF" },
  { name: "Machine Learning", category: "ai", enabled: true, iconSlug: "scikitlearn", badgeColor: "F7931E" },
  { name: "AI APIs", category: "ai", enabled: true, iconSlug: "google", badgeColor: "4285F4" },
  { name: "PyTorch", category: "ai", enabled: false, iconSlug: "pytorch", badgeColor: "EE4C2C" },

  // Data
  { name: "Pandas", category: "data", enabled: true, iconSlug: "pandas", badgeColor: "150458" },
  { name: "NumPy", category: "data", enabled: true, iconSlug: "numpy", badgeColor: "013243" },
  { name: "Data Visualization", category: "data", enabled: true, iconSlug: "d3dotjs", badgeColor: "F9A03F" },
  { name: "SciPy", category: "data", enabled: false, iconSlug: "scipy", badgeColor: "8CAAE6" },

  // Engineering
  { name: "Git", category: "engineering", enabled: true, iconSlug: "git", badgeColor: "F05032" },
  { name: "GitHub", category: "engineering", enabled: true, iconSlug: "github", badgeColor: "181717" },
  { name: "Linux", category: "engineering", enabled: true, iconSlug: "linux", badgeColor: "FCC624" },
  { name: "Software Design", category: "engineering", enabled: true, iconSlug: "codepen", badgeColor: "4A154B" },
  { name: "Docker", category: "engineering", enabled: false, iconSlug: "docker", badgeColor: "2496ED" },
];

export const DEFAULT_CONFIG: READMEConfig = {
  name: "Alessandro Vedovato",
  roleTitle: "Quantitative Analyst & Financial AI Architect",
  tagline: "Building intelligent, data-driven systems at the intersection of Finance, Artificial Intelligence, and Software Engineering.",
  intersectionStatement: "Finance × Computer Science × Artificial Intelligence",
  philosophy: "I design practical, high-utility systems that model and navigate financial complexity. By pairing quantitative fundamentals with modern AI frameworks and software rigor, I build software that does not just process numbers, but synthesizes strategic, explainable insight.",
  bannerStyle: "grid",
  accentColor: "emerald",
  badgeStyle: "flat-square",
  techStack: INITIAL_TECH_STACK,
  projects: [
    {
      id: "p1",
      name: "Financial AI Research Assistant",
      subtitle: "Retrieval-Augmented Generation (RAG) for Quantitative Document Intelligence",
      description: "An automated intelligence engine that digests multi-hundred page SEC filings (10-K/10-Q) and earnings transcripts. Features high-accuracy layout extraction, vector database parsing, and real-time structured risk profiling.",
      highlights: ["Python", "HuggingFace", "ChromaDB", "LlamaIndex"]
    },
    {
      id: "p2",
      name: "Portfolio Risk Engine",
      subtitle: "Quantitative Value-at-Risk (VaR) & Portfolio Allocation Simulator",
      description: "A fast risk simulation framework implementing Monte Carlo methods, historical covariance estimation, and portfolio optimization. Models asset dependencies and draws risk surfaces under stressful financial scenarios.",
      highlights: ["C++", "Python", "NumPy", "Matplotlib"]
    },
    {
      id: "p3",
      name: "Global Economic Intelligence Platform",
      subtitle: "Macroeconomic Purchasing Power Index & Live Cost-of-Living Visualizer",
      description: "Ingests global financial datasets to model real purchasing power across major city hubs. Translates complex local economic variables (inflation, housing indexes, tax brackets) into readable multi-scenario comparisons.",
      highlights: ["SQL", "Pandas", "Recharts", "FastAPI"]
    }
  ],
  journey: [
    {
      id: "j1",
      title: "Finance Foundations",
      details: "Formed a robust mental model of capital markets, quantitative portfolio theory, accounting structures, and economic systems."
    },
    {
      id: "j2",
      title: "Programming & Computer Science Core",
      details: "Transitioned to pure engineering, mastering low-level operations in C++, deterministic algorithms, and standard data structures."
    },
    {
      id: "j3",
      title: "Data Analytics & Engineering",
      details: "Engineered scalable pipelines to ingest and normalize messy financial time-series using SQL and Python."
    },
    {
      id: "j4",
      title: "Artificial Intelligence Integration",
      details: "Advanced into modern deep learning, deploying localized RAG systems, tuning LLM contexts, and working with deep semantic vector search."
    },
    {
      id: "j5",
      title: "Financial AI Systems",
      details: "Directing focus on autonomous research agents, high-frequency intelligence pipelines, and explainable AI in FinTech."
    }
  ],
  principles: [
    "Architectural Integrity — Code is design; simple, robust, and statically typed wherever possible.",
    "Data-Driven Grounding — Reject AI hallucinations. Every automated insight must be traced back to verified, audit-ready data sources.",
    "Quantitative Rigor — Deep financial acumen underpins every algorithmic assumption; tech serves the numbers.",
    "High Utility Output — Only build software that has immediate, measurable impact and solves actual problems."
  ]
};

export const COLOR_MAP = {
  emerald: {
    primary: "text-emerald-500",
    bg: "bg-emerald-500/10",
    border: "border-emerald-500/30",
    gradient: "from-emerald-500/20 to-emerald-950/40",
    glow: "shadow-emerald-500/20",
    hex: "059669",
    accent: "bg-emerald-500",
    ring: "focus:ring-emerald-500",
    text: "text-emerald-400"
  },
  indigo: {
    primary: "text-indigo-500",
    bg: "bg-indigo-500/10",
    border: "border-indigo-500/30",
    gradient: "from-indigo-500/20 to-indigo-950/40",
    glow: "shadow-indigo-500/20",
    hex: "6366f1",
    accent: "bg-indigo-500",
    ring: "focus:ring-indigo-500",
    text: "text-indigo-400"
  },
  cyan: {
    primary: "text-cyan-500",
    bg: "bg-cyan-500/10",
    border: "border-cyan-500/30",
    gradient: "from-cyan-500/20 to-cyan-950/40",
    glow: "shadow-cyan-500/20",
    hex: "06b6d4",
    accent: "bg-cyan-500",
    ring: "focus:ring-cyan-500",
    text: "text-cyan-400"
  },
  violet: {
    primary: "text-violet-500",
    bg: "bg-violet-500/10",
    border: "border-violet-500/30",
    gradient: "from-violet-500/20 to-violet-950/40",
    glow: "shadow-violet-500/20",
    hex: "8b5cf6",
    accent: "bg-violet-500",
    ring: "focus:ring-violet-500",
    text: "text-violet-400"
  },
  teal: {
    primary: "text-teal-500",
    bg: "bg-teal-500/10",
    border: "border-teal-500/30",
    gradient: "from-teal-500/20 to-teal-950/40",
    glow: "shadow-teal-500/20",
    hex: "0d9488",
    accent: "bg-teal-500",
    ring: "focus:ring-teal-500",
    text: "text-teal-400"
  }
};
