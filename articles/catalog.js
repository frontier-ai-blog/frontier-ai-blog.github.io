// Site catalog. The homepage renders its research areas, category filters, and article cards from these lists.
// Add a new article by creating <slug>/index.html at the site root and adding one entry to FRONTIER_ARTICLES.
window.FRONTIER_CATEGORIES = [
  {
    name: "Agent Architecture",
    description: "How agent systems are put together: harnesses, delegation, and where reasoning hands off to execution."
  },
  {
    name: "Memory and Context",
    description: "How agents remember, retrieve, and manage context across sessions, apps, and teams."
  },
  {
    name: "Tools and Interfaces",
    description: "How agents act through tools, APIs, protocols such as MCP, and code."
  },
  {
    name: "Models and Efficiency",
    description: "Choosing, routing, and tuning models for quality, cost, and latency."
  }
];

window.FRONTIER_ARTICLES = [
  {
    href: "enterprise-agent-memory/",
    title: "Designing Memory for Enterprise Agents",
    summary: "Design principles for small, scoped, and governed memory in enterprise agent harnesses.",
    date: "2026-10-20",
    displayDate: "October 20, 2026",
    category: "Memory and Context",
    additionalCategories: ["Agent Architecture"],
    visual: "enterpriseMemory",
    visualLabel: "A governed memory layer compressing observations into durable context"
  },
  {
    href: "semantic-intent-and-execution/",
    title: "Separating Semantic Intent from Execution in Knowledge-Work Agents",
    summary: "Keeping judgment in the core agent loop while delegated runtimes handle the mechanics of building documents, spreadsheets, and slides.",
    date: "2026-10-06",
    displayDate: "October 6, 2026",
    category: "Agent Architecture",
    visual: "boundary",
    visualLabel: "Layers separated by a semantic boundary"
  },
  {
    href: "code-dsls-vs-json-tool-calling/",
    title: "Code DSLs Versus JSON Tool Calling in Multi-Step Agent Workflows",
    summary: "A controlled comparison in which typed code DSLs used 76% fewer tokens and 48% fewer turns than JSON tool calling, with MCP kept as the transport layer.",
    date: "2026-09-22",
    displayDate: "September 22, 2026",
    category: "Tools and Interfaces",
    visual: "systems",
    visualLabel: "A typed code layer connecting agents to tools"
  },
  {
    href: "executable-agent-memory/",
    title: "Persistent, Executable Memory for AI Agents",
    summary: "Giving agents a code repository they can read, write, and reorganize improved accuracy, cut reasoning steps, and transferred across models.",
    date: "2026-09-08",
    displayDate: "September 8, 2026",
    category: "Memory and Context",
    visual: "memory",
    visualLabel: "Persistent executable memory organized for reuse"
  },
  {
    href: "knowledge-work-model-routing/",
    title: "Routing Knowledge Work Between Small and Frontier Models",
    summary: "A lightweight router that sends routine tasks to a small model and hard tasks to a frontier model came within 10 ELO points of the top GDPval-AA entry at much lower cost.",
    date: "2026-08-25",
    displayDate: "August 25, 2026",
    category: "Models and Efficiency",
    visual: "evaluation",
    visualLabel: "A lightweight router selecting the right model for each task"
  }
];
