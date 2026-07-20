import { READMEConfig } from "./types";

export function generateMarkdown(config: READMEConfig): string {
  const accentHex = "059669"; // Emerald default or from COLOR_MAP
  const badgeStyleStr = `style=${config.badgeStyle}`;

  // Helper to build a Shields.io badge URL
  const getBadgeUrl = (name: string, slug: string, color: string) => {
    const formattedSlug = slug.toLowerCase();
    return `https://img.shields.io/badge/${encodeURIComponent(name)}-${color}?${badgeStyleStr}&logo=${formattedSlug}&logoColor=white`;
  };

  // Tech Stack categories
  const progEnabled = config.techStack.filter(t => t.category === "programming" && t.enabled);
  const aiEnabled = config.techStack.filter(t => t.category === "ai" && t.enabled);
  const dataEnabled = config.techStack.filter(t => t.category === "data" && t.enabled);
  const engEnabled = config.techStack.filter(t => t.category === "engineering" && t.enabled);

  // Dynamic Badges Block
  let badgesMarkdown = "";
  if (progEnabled.length > 0 || aiEnabled.length > 0) {
    badgesMarkdown = `\n### Core Technologies\n\n`;
    if (progEnabled.length > 0) {
      badgesMarkdown += `**Programming:** ` + progEnabled.map(t => `![${t.name}](${getBadgeUrl(t.name, t.iconSlug || t.name, t.badgeColor || "555555")})`).join(" ") + `\\\n`;
    }
    if (aiEnabled.length > 0) {
      badgesMarkdown += `**Artificial Intelligence:** ` + aiEnabled.map(t => `![${t.name}](${getBadgeUrl(t.name, t.iconSlug || t.name, t.badgeColor || "555555")})`).join(" ") + `\\\n`;
    }
    if (dataEnabled.length > 0) {
      badgesMarkdown += `**Data & Analysis:** ` + dataEnabled.map(t => `![${t.name}](${getBadgeUrl(t.name, t.iconSlug || t.name, t.badgeColor || "555555")})`).join(" ") + `\\\n`;
    }
    if (engEnabled.length > 0) {
      badgesMarkdown += `**Engineering:** ` + engEnabled.map(t => `![${t.name}](${getBadgeUrl(t.name, t.iconSlug || t.name, t.badgeColor || "555555")})`).join(" ") + `\n`;
    }
  }

  // Generate ASCII timeline
  let timelineMarkdown = "";
  config.journey.forEach((node, idx) => {
    timelineMarkdown += `**${node.title}**\n└─ ${node.details}\n`;
    if (idx < config.journey.length - 1) {
      timelineMarkdown += `\n$$\\downarrow$$\n\n`; // Elegant math-style arrow, or standard arrow depending on theme
    }
  });

  // Dynamic Projects Block
  let projectsMarkdown = "";
  config.projects.forEach((proj, idx) => {
    const num = String(idx + 1).padStart(2, "0");
    projectsMarkdown += `### ${num}. ${proj.name}\n`;
    if (proj.subtitle) {
      projectsMarkdown += `> **${proj.subtitle}**\n\n`;
    }
    projectsMarkdown += `${proj.description}\n\n`;
    if (proj.highlights.length > 0) {
      projectsMarkdown += `*Technologies:* ${proj.highlights.map(h => `\`${h}\``).join(" • ")}\n\n`;
    }
    if (idx < config.projects.length - 1) {
      projectsMarkdown += `---\n\n`;
    }
  });

  // Dynamic Principles
  const principlesMarkdown = config.principles
    .map(p => {
      const parts = p.split(" — ");
      if (parts.length > 1) {
        return `- **${parts[0].trim()}** — ${parts[1].trim()}`;
      }
      return `- ${p}`;
    })
    .join("\n");

  // Custom banner setup
  let bannerMarkdown = "";
  if (config.bannerStyle !== "none") {
    // Generate a beautiful, clean abstract pattern using an inline-styled SVG (or instructions)
    // For GitHub README, standard is to center a dynamic image. We'll suggest a standard high-quality shields or direct dynamic banner
    bannerMarkdown = `<p align="center">
  <img src="https://raw.githubusercontent.com/alessandro-vedovato/alessandro-vedovato/main/assets/banner.svg" alt="${config.name} Banner" width="100%" />
</p>

`;
  }

  return `# ${config.name}
### ⚡ ${config.intersectionStatement}

> **${config.tagline}**

${bannerMarkdown}

## 01. Engineering Philosophy

${config.philosophy}

---

## 02. Core Technology Stack
${badgesMarkdown}
---

## 03. Engineering Journey & Transition

The quantitative structural shift from financial analyst to software and artificial intelligence engineer:

\`\`\`yaml
${config.journey.map((node, idx) => `[Step 0${idx + 1}] ${node.title}
          └── ${node.details}`).join("\n\n    ↓\n\n")}
\`\`\`

---

## 04. Selected Systems

${projectsMarkdown}
---

## 05. Engineering Principles

How I approach software architecture, model design, and development workflows:

${principlesMarkdown}

---

## ── Connect & Collaborate ──

<p align="left">
  <a href="https://linkedin.com/in/alessandro-vedovato" target="_blank">
    <img src="https://img.shields.io/badge/LinkedIn-0077B5?style=flat-square&logo=linkedin&logoColor=white" alt="LinkedIn" />
  </a>
  <a href="mailto:vedovatoalessandro1@gmail.com">
    <img src="https://img.shields.io/badge/Email-D14836?style=flat-square&logo=gmail&logoColor=white" alt="Email" />
  </a>
</p>

<!-- Generated dynamically via GitHub Profile Architect -->
`;
}
