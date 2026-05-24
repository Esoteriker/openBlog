import type { Locale } from "@/data/profile";

export type PreviewVariant =
  | "knowledge"
  | "api"
  | "product"
  | "observability"
  | "architecture"
  | "workflow"
  | "signals"
  | "spring"
  | "docker"
  | "systems"
  | "charts";

export type BlogShowcasePost = {
  title: string;
  summary: string;
  category: "notes" | "projects" | "learning";
  tags: string[];
  date: string;
  readTime: string;
  variant: PreviewVariant;
  href: string;
};

export type ProjectShowcaseCard = {
  title: string;
  summary: string;
  category: "frontend" | "backend" | "fullstack";
  tags: string[];
  variant: PreviewVariant;
  githubUrl?: string;
  liveUrl?: string;
};

export type AboutMilestone = {
  year: string;
  title: string;
  summary: string;
  accentClass: string;
};

export type InterestCard = {
  icon: string;
  title: string;
  summary: string;
};

export type SkillMetric = {
  category: "frontend" | "backend" | "tools";
  name: string;
  value: number;
  tone: string;
};

export type SkillTagGroup = {
  key: "frontend" | "backend" | "tools" | "foundation";
  title: string;
  icon: string;
  tone: string;
  tags: string[];
};

type LocaleShowcase = {
  about: {
    location: string;
    subtitle: string;
    bioLines: string[];
    resumeLabel: string;
    timelineTitle: string;
    interestsTitle: string;
    interests: InterestCard[];
    milestones: AboutMilestone[];
  };
  skills: {
    tabs: Array<{ key: "all" | "frontend" | "backend" | "tools"; label: string; icon: string }>;
    radarTitle: string;
    proficiencyTitle: string;
    trendTitle: string;
    tagTitle: string;
    radarAxes: string[];
    radarValues: number[];
    proficiency: SkillMetric[];
    trendLabels: string[];
    trendStudy: number[];
    trendImprove: number[];
    trendStudyLabel: string;
    trendImproveLabel: string;
    footerNote: string;
    tagGroups: SkillTagGroup[];
  };
  projects: {
    tabs: Array<{ key: ProjectShowcaseCard["category"] | "all"; label: string }>;
    searchPlaceholder: string;
    githubLabel: string;
    liveLabel: string;
    items: ProjectShowcaseCard[];
  };
  blog: {
    tabs: Array<{ key: BlogShowcasePost["category"] | "all"; label: string }>;
    searchPlaceholder: string;
    categoriesTitle: string;
    hotTagsTitle: string;
    recentTitle: string;
    subscribeTitle: string;
    subscribeDescription: string;
    subscribePlaceholder: string;
    subscribeButton: string;
    openLabel: string;
    posts: BlogShowcasePost[];
  };
  resume: {
    title: string;
    description: string;
    summaryTitle: string;
    summary: string[];
    strengthsTitle: string;
    strengths: string[];
    experienceTitle: string;
    educationTitle: string;
    education: string[];
    availabilityTitle: string;
    availability: string[];
  };
};

const zhShowcase: LocaleShowcase = {
  about: {
    location: "维也纳，奥地利",
    subtitle: "AI 产品工程师 / 全栈软件工程师",
    bioLines: [
      "我专注把 AI/LLM 能力接入真实产品流程，让检索、解释与报告生成不仅能跑，还能可靠交付。",
      "日常工作横跨 TypeScript 前端、Java/Python 后端服务、REST API、异步任务与数据密集型工作流。",
      "我喜欢把产品体验、系统可靠性和开发者体验放在同一张桌子上解决。"
    ],
    resumeLabel: "查看简历",
    timelineTitle: "成长历程",
    interestsTitle: "兴趣爱好",
    interests: [
      { icon: "</>", title: "编程", summary: "享受编码的乐趣，探索技术边界。" },
      { icon: "Run", title: "跑步", summary: "保持身体与思维健康，挑战自我极限。" },
      { icon: "Book", title: "阅读", summary: "阅读技术书籍与文章，持续学习成长。" },
      { icon: "Fly", title: "旅行", summary: "探索世界、打开视野、获得新灵感。" },
      { icon: "Cam", title: "摄影", summary: "记录生活中的美好瞬间，发现不同视角。" }
    ],
    milestones: [
      {
        year: "2025",
        title: "AI Product Engineer",
        summary: "聚焦模型 API、RAG、重试/回退与优雅降级，把 AI 能力做成可交付的产品工作流。",
        accentClass: "bg-stone-400"
      },
      {
        year: "2022",
        title: "TUM Master + Siemens Software Engineer",
        summary: "开始在慕尼黑工业大学攻读信息系统硕士，并在 Siemens 全职交付工业测试平台功能。",
        accentClass: "bg-zinc-500"
      },
      {
        year: "2021",
        title: "Siemens Part-time Engineer",
        summary: "构建内部 NPM UI 组件包与数据可视化模块，沉淀类型化 API、使用规范和发布流程。",
        accentClass: "bg-neutral-400"
      },
      {
        year: "2019",
        title: "Bachelor at University of Göttingen",
        summary: "在哥廷根大学学习 Business Informatics，为后续产品工程、数据分析和软件交付打下基础。",
        accentClass: "bg-amber-600/80"
      }
    ]
  },
  skills: {
    tabs: [
      { key: "all", label: "全部", icon: "◫" },
      { key: "frontend", label: "前端", icon: "⌘" },
      { key: "backend", label: "后端", icon: "▤" },
      { key: "tools", label: "工具&基础", icon: "✚" }
    ],
    radarTitle: "技能雷达图",
    proficiencyTitle: "技能熟练度",
    trendTitle: "学习趋势（近一年）",
    tagTitle: "技术标签",
    radarAxes: ["前端产品", "后端 API", "AI 集成", "异步任务", "调试排障", "交付质量"],
    radarValues: [90, 88, 84, 82, 86, 84],
    proficiency: [
      { category: "frontend", name: "TypeScript", value: 90, tone: "from-zinc-600 to-stone-400" },
      { category: "frontend", name: "Angular", value: 88, tone: "from-slate-600 to-zinc-400" },
      { category: "frontend", name: "React / Next.js", value: 84, tone: "from-neutral-600 to-stone-400" },
      { category: "frontend", name: "Data Visualization", value: 82, tone: "from-stone-600 to-zinc-400" },
      { category: "backend", name: "REST API Design", value: 88, tone: "from-zinc-700 to-zinc-400" },
      { category: "backend", name: "Java / Spring Boot", value: 82, tone: "from-stone-700 to-amber-600" },
      { category: "backend", name: "Python / FastAPI", value: 78, tone: "from-neutral-700 to-stone-500" },
      { category: "backend", name: "Async Jobs", value: 82, tone: "from-slate-700 to-neutral-400" },
      { category: "tools", name: "OpenAI API / RAG", value: 82, tone: "from-stone-700 to-amber-500" },
      { category: "tools", name: "Cypress / CI", value: 80, tone: "from-zinc-700 to-stone-500" },
      { category: "tools", name: "Docker / Linux", value: 74, tone: "from-neutral-700 to-zinc-500" },
      { category: "tools", name: "Observability", value: 76, tone: "from-slate-700 to-stone-500" }
    ],
    trendLabels: ["5月", "7月", "9月", "11月", "1月", "3月", "5月"],
    trendStudy: [28, 38, 70, 72, 58, 78, 94],
    trendImprove: [12, 20, 48, 50, 38, 62, 70],
    trendStudyLabel: "学习投入",
    trendImproveLabel: "技能提升",
    footerNote: "把 AI 集成、API 契约和交付质量放到同一个工程闭环里。",
    tagGroups: [
      {
        key: "frontend",
        title: "前端产品",
        icon: "</>",
        tone: "text-zinc-300",
        tags: ["TypeScript", "React", "Next.js", "Angular", "JavaScript", "HTML/CSS", "Data Visualization", "WebAssembly"]
      },
      {
        key: "backend",
        title: "后端与数据",
        icon: "▤",
        tone: "text-stone-300",
        tags: ["Java", "Python", "Spring Boot", "FastAPI", "Node.js", "Express", "REST APIs", "SQL", "Async Jobs"]
      },
      {
        key: "tools",
        title: "AI 与交付",
        icon: "✚",
        tone: "text-neutral-300",
        tags: ["OpenAI API", "RAG", "Prompt Engineering", "Tool Calling", "Retry/Fallback", "Docker", "GitLab CI/CD", "Cypress"]
      },
      {
        key: "foundation",
        title: "开发者体验",
        icon: "▣",
        tone: "text-amber-300",
        tags: ["NPM Packages", "Typed APIs", "Swagger/OpenAPI", "Documentation", "Observability", "Debugging", "Code Review", "Jira"]
      }
    ]
  },
  projects: {
    tabs: [
      { key: "all", label: "全部" },
      { key: "frontend", label: "前端项目" },
      { key: "backend", label: "后端项目" },
      { key: "fullstack", label: "全栈项目" }
    ],
    searchPlaceholder: "搜索项目...",
    githubLabel: "GitHub",
    liveLabel: "预览",
    items: [
      {
        title: "WFP Hunger-Map",
        summary: "用 Next.js、TypeScript 与 AI API 构建数据密集型公共产品的解释与摘要体验。",
        category: "fullstack",
        tags: ["Next.js", "TypeScript", "AI API", "Data"],
        variant: "signals",
        liveUrl: "https://www.wfp.org/hunger-map"
      },
      {
        title: "EDA 任务编排平台",
        summary: "连接 Web 前端与多个 EDA 工具服务，支持长耗时任务、状态追踪、日志反馈与权限控制。",
        category: "backend",
        tags: ["Backend", "Docker", "Async Jobs", "Auth"],
        variant: "workflow"
      },
      {
        title: "内部 NPM UI 组件包",
        summary: "面向数据密集型产品团队的类型化 UI 组件库与 Canvas 可视化模块。",
        category: "frontend",
        tags: ["TypeScript", "NPM", "Canvas", "DX"],
        variant: "product"
      },
      {
        title: "AI 辅助报告生成流程",
        summary: "将外部模型 API 接入内部服务，围绕检索、解释、报告生成、重试与降级组织产品流程。",
        category: "backend",
        tags: ["OpenAI API", "RAG", "Fallback", "Reports"],
        variant: "knowledge"
      },
      {
        title: "生产调试与可观测性流程",
        summary: "结合日志、依赖链、服务交互与用户影响分析，缩短跨模块生产问题定位时间。",
        category: "backend",
        tags: ["Logs", "Debugging", "Observability", "Triage"],
        variant: "observability"
      },
      {
        title: "Cypress 与 CI 质量门",
        summary: "用回归覆盖、API review、发布流程和线上排障机制支撑稳定迭代。",
        category: "fullstack",
        tags: ["Cypress", "CI/CD", "Release", "API Review"],
        variant: "systems"
      }
    ]
  },
  blog: {
    tabs: [
      { key: "all", label: "全部文章" },
      { key: "notes", label: "技术笔记" },
      { key: "projects", label: "项目分享" },
      { key: "learning", label: "学习心得" }
    ],
    searchPlaceholder: "搜索文章...",
    categoriesTitle: "分类",
    hotTagsTitle: "热门标签",
    recentTitle: "最近文章",
    subscribeTitle: "订阅我的博客",
    subscribeDescription: "获取最新文章到你的邮箱",
    subscribePlaceholder: "输入你的邮箱",
    subscribeButton: "订阅",
    openLabel: "打开",
    posts: [
      {
        title: "AI API 也是产品工作流",
        summary: "为什么重试、回退、缓存、限流和用户可见状态与模型调用同样重要。",
        category: "notes",
        tags: ["AI", "Reliability"],
        date: "2026-05-23",
        readTime: "6 分钟阅读",
        variant: "signals",
        href: "#"
      },
      {
        title: "类型化接口如何降低产品摩擦",
        summary: "组件包 API、使用指南和集成约定如何减少重复实现并提升跨团队采用质量。",
        category: "projects",
        tags: ["TypeScript", "DX", "NPM"],
        date: "2026-05-22",
        readTime: "7 分钟阅读",
        variant: "product",
        href: "#"
      },
      {
        title: "长耗时任务应该怎样对用户透明",
        summary: "围绕状态追踪、日志反馈、重试和权限控制设计异步任务体验。",
        category: "learning",
        tags: ["Async Jobs", "Backend", "UX"],
        date: "2026-05-18",
        readTime: "6 分钟阅读",
        variant: "workflow",
        href: "#"
      },
      {
        title: "跨服务边界调试",
        summary: "从日志、依赖链、服务交互和用户影响四个角度拆解生产排障路径。",
        category: "notes",
        tags: ["Debugging", "Observability", "Triage"],
        date: "2026-03-10",
        readTime: "8 分钟阅读",
        variant: "observability",
        href: "#"
      },
      {
        title: "数据可视化性能优化笔记",
        summary: "一次 Canvas 可视化与数据流重构如何带来关键视图 18% 的运行时性能提升。",
        category: "projects",
        tags: ["Canvas", "Data Viz", "Performance"],
        date: "2026-02-20",
        readTime: "7 分钟阅读",
        variant: "charts",
        href: "#"
      }
    ]
  },
  resume: {
    title: "我的简历",
    description: "面向 AI 产品工程、全栈交付、后端 API 与开发者体验的能力摘要。",
    summaryTitle: "职业摘要",
    summary: [
      "全栈产品工程师，具备 TypeScript 前端、Java/Python 后端服务、REST API 与数据密集型产品经验。",
      "有 AI/LLM 产品工作流实践，覆盖模型 API 集成、检索/解释流程、重试/回退、调试与发布质量。",
      "能够在用户体验、API 契约、异步任务、可观测性与开发者体验之间建立稳定交付闭环。"
    ],
    strengthsTitle: "优势能力",
    strengths: [
      "AI API 集成与 RAG 产品流程",
      "后端 API、异步任务与状态追踪",
      "TypeScript 前端与数据可视化",
      "NPM 包、类型化接口与开发者体验",
      "Cypress、CI/CD 与发布质量"
    ],
    experienceTitle: "项目 / 经验亮点",
    educationTitle: "教育背景",
    education: [
      "10.2022 - 12.2025 M.Sc. Information Systems, Technical University of Munich",
      "10.2019 - 08.2022 B.Sc. Business Informatics, University of Goettingen",
      "12.2021 Google Data Analytics Professional Certificate"
    ],
    availabilityTitle: "合作方向",
    availability: [
      "AI Product Engineering",
      "Full-stack Product Delivery",
      "Backend API and Async Jobs",
      "Developer Experience"
    ]
  }
};

const enShowcase: LocaleShowcase = {
  about: {
    location: "Vienna, Austria",
    subtitle: "AI Product Engineer / Full-Stack Software Engineer",
    bioLines: [
      "I focus on bringing AI/LLM capabilities into real product workflows, where retrieval, explanation, and report generation need to be reliable.",
      "My day-to-day work spans TypeScript frontends, Java/Python backend services, REST APIs, async jobs, and data-heavy workflows.",
      "I like solving product experience, system reliability, and developer experience as one connected engineering problem."
    ],
    resumeLabel: "Open Resume",
    timelineTitle: "Growth Timeline",
    interestsTitle: "Interests",
    interests: [
      { icon: "</>", title: "Coding", summary: "Shipping clean systems and exploring technical edges." },
      { icon: "Run", title: "Running", summary: "Staying physically and mentally sharp through movement." },
      { icon: "Book", title: "Reading", summary: "Technical books and essays keep my learning loop active." },
      { icon: "Fly", title: "Travel", summary: "New places help me reset perspective and spot better ideas." },
      { icon: "Cam", title: "Photography", summary: "Capturing details helps me notice patterns others miss." }
    ],
    milestones: [
      { year: "2025", title: "AI Product Engineer", summary: "Focused on model APIs, RAG, retry/fallback handling, and graceful degradation to make AI useful inside product workflows.", accentClass: "bg-stone-400" },
      { year: "2022", title: "TUM Master + Siemens Software Engineer", summary: "Started the M.Sc. in Information Systems at TUM and joined Siemens full-time to ship industrial testing platform features.", accentClass: "bg-zinc-500" },
      { year: "2021", title: "Siemens Part-time Engineer", summary: "Built an internal NPM UI package and visualization modules with typed APIs, usage conventions, and release flow.", accentClass: "bg-neutral-400" },
      { year: "2019", title: "Business Informatics at Göttingen", summary: "Started B.Sc. Business Informatics, building foundations in product engineering, data analysis, and software delivery.", accentClass: "bg-amber-600/80" }
    ]
  },
  skills: {
    tabs: [
      { key: "all", label: "All", icon: "◫" },
      { key: "frontend", label: "Frontend", icon: "⌘" },
      { key: "backend", label: "Backend", icon: "▤" },
      { key: "tools", label: "Tools & Core", icon: "✚" }
    ],
    radarTitle: "Skill Radar",
    proficiencyTitle: "Proficiency",
    trendTitle: "Learning Trend (12 months)",
    tagTitle: "Technology Tags",
    radarAxes: ["Frontend Product", "Backend APIs", "AI Integration", "Async Jobs", "Debugging", "Delivery Quality"],
    radarValues: [90, 88, 84, 82, 86, 84],
    proficiency: [
      { category: "frontend", name: "TypeScript", value: 90, tone: "from-zinc-600 to-stone-400" },
      { category: "frontend", name: "Angular", value: 88, tone: "from-slate-600 to-zinc-400" },
      { category: "frontend", name: "React / Next.js", value: 84, tone: "from-neutral-600 to-stone-400" },
      { category: "frontend", name: "Data Visualization", value: 82, tone: "from-stone-600 to-zinc-400" },
      { category: "backend", name: "REST API Design", value: 88, tone: "from-zinc-700 to-zinc-400" },
      { category: "backend", name: "Java / Spring Boot", value: 82, tone: "from-stone-700 to-amber-600" },
      { category: "backend", name: "Python / FastAPI", value: 78, tone: "from-neutral-700 to-stone-500" },
      { category: "backend", name: "Async Jobs", value: 82, tone: "from-slate-700 to-neutral-400" },
      { category: "tools", name: "OpenAI API / RAG", value: 82, tone: "from-stone-700 to-amber-500" },
      { category: "tools", name: "Cypress / CI", value: 80, tone: "from-zinc-700 to-stone-500" },
      { category: "tools", name: "Docker / Linux", value: 74, tone: "from-neutral-700 to-zinc-500" },
      { category: "tools", name: "Observability", value: 76, tone: "from-slate-700 to-stone-500" }
    ],
    trendLabels: ["May", "Jul", "Sep", "Nov", "Jan", "Mar", "May"],
    trendStudy: [28, 38, 70, 72, 58, 78, 94],
    trendImprove: [12, 20, 48, 50, 38, 62, 70],
    trendStudyLabel: "Learning Investment",
    trendImproveLabel: "Skill Growth",
    footerNote: "Keeping AI integration, API contracts, and delivery quality in one engineering loop.",
    tagGroups: [
      {
        key: "frontend",
        title: "Frontend Product",
        icon: "</>",
        tone: "text-zinc-300",
        tags: ["TypeScript", "React", "Next.js", "Angular", "JavaScript", "HTML/CSS", "Data Visualization", "WebAssembly"]
      },
      {
        key: "backend",
        title: "Backend and Data",
        icon: "▤",
        tone: "text-stone-300",
        tags: ["Java", "Python", "Spring Boot", "FastAPI", "Node.js", "Express", "REST APIs", "SQL", "Async Jobs"]
      },
      {
        key: "tools",
        title: "AI and Delivery",
        icon: "✚",
        tone: "text-neutral-300",
        tags: ["OpenAI API", "RAG", "Prompt Engineering", "Tool Calling", "Retry/Fallback", "Docker", "GitLab CI/CD", "Cypress"]
      },
      {
        key: "foundation",
        title: "Developer Experience",
        icon: "▣",
        tone: "text-amber-300",
        tags: ["NPM Packages", "Typed APIs", "Swagger/OpenAPI", "Documentation", "Observability", "Debugging", "Code Review", "Jira"]
      }
    ]
  },
  projects: {
    tabs: [
      { key: "all", label: "All" },
      { key: "frontend", label: "Frontend" },
      { key: "backend", label: "Backend" },
      { key: "fullstack", label: "Full-stack" }
    ],
    searchPlaceholder: "Search projects...",
    githubLabel: "GitHub",
    liveLabel: "Open",
    items: [
      { title: "WFP Hunger-Map", summary: "A data-rich public product using Next.js, TypeScript, and AI APIs for explanation and summary experiences.", category: "fullstack", tags: ["Next.js", "TypeScript", "AI API", "Data"], variant: "signals", liveUrl: "https://www.wfp.org/hunger-map" },
      { title: "EDA Task Orchestration Platform", summary: "Connects a web frontend with multiple EDA tool services through async jobs, status tracking, logs, and authorization.", category: "backend", tags: ["Backend", "Docker", "Async Jobs", "Auth"], variant: "workflow" },
      { title: "Internal NPM UI Package", summary: "Typed UI primitives and Canvas visualization modules for data-heavy product teams.", category: "frontend", tags: ["TypeScript", "NPM", "Canvas", "DX"], variant: "product" },
      { title: "AI-assisted Report Workflow", summary: "Connects external model APIs with internal services for retrieval, explanation, reporting, retry, and graceful degradation.", category: "backend", tags: ["OpenAI API", "RAG", "Fallback", "Reports"], variant: "knowledge" },
      { title: "Production Debugging Flow", summary: "Uses logs, dependency chains, service interactions, and user impact analysis to shorten cross-module investigations.", category: "backend", tags: ["Logs", "Debugging", "Observability", "Triage"], variant: "observability" },
      { title: "Cypress and CI Quality Gates", summary: "Regression coverage, API reviews, release workflow, and production triage practices for stable iteration.", category: "fullstack", tags: ["Cypress", "CI/CD", "Release", "API Review"], variant: "systems" }
    ]
  },
  blog: {
    tabs: [
      { key: "all", label: "All posts" },
      { key: "notes", label: "Engineering Notes" },
      { key: "projects", label: "Project Stories" },
      { key: "learning", label: "Learning" }
    ],
    searchPlaceholder: "Search articles...",
    categoriesTitle: "Categories",
    hotTagsTitle: "Hot Tags",
    recentTitle: "Recent Posts",
    subscribeTitle: "Subscribe",
    subscribeDescription: "Receive new notes in your inbox.",
    subscribePlaceholder: "Your email",
    subscribeButton: "Subscribe",
    openLabel: "Open",
    posts: [
      { title: "AI APIs Are Product Workflows", summary: "Why retries, fallbacks, caching, rate limits, and visible user states matter as much as the model call.", category: "notes", tags: ["AI", "Reliability"], date: "2026-05-23", readTime: "6 min read", variant: "signals", href: "#" },
      { title: "Typed Interfaces Reduce Product Friction", summary: "How package APIs, usage guidelines, and integration conventions reduce duplicate implementation work.", category: "projects", tags: ["TypeScript", "DX", "NPM"], date: "2026-05-22", readTime: "7 min read", variant: "product", href: "#" },
      { title: "Making Long-running Jobs Transparent", summary: "Designing async job UX around status tracking, log feedback, retries, and authorization controls.", category: "learning", tags: ["Async Jobs", "Backend", "UX"], date: "2026-05-18", readTime: "6 min read", variant: "workflow", href: "#" },
      { title: "Debugging Across Service Boundaries", summary: "A practical loop for reading logs, dependency chains, service interactions, and user impact.", category: "notes", tags: ["Debugging", "Observability", "Triage"], date: "2026-03-10", readTime: "8 min read", variant: "observability", href: "#" },
      { title: "Data Visualization Performance Notes", summary: "How Canvas visualization and data-flow refactoring produced an 18% runtime improvement on key views.", category: "projects", tags: ["Canvas", "Data Viz", "Performance"], date: "2026-02-20", readTime: "7 min read", variant: "charts", href: "#" }
    ]
  },
  resume: {
    title: "Resume",
    description: "A concise summary for AI product engineering, full-stack delivery, backend APIs, and developer experience.",
    summaryTitle: "Professional Summary",
    summary: [
      "Full-stack product engineer with production experience across TypeScript frontends, Java/Python backend services, REST APIs, and data-heavy product workflows.",
      "Built AI/LLM product workflows with model API integration, retrieval/explanation flows, retry/fallback handling, debugging, and release quality ownership.",
      "Comfortable connecting user experience, API contracts, async execution, observability, and developer experience into one delivery loop."
    ],
    strengthsTitle: "Core Strengths",
    strengths: [
      "AI API integration and RAG product flows",
      "Backend APIs, async jobs, and status tracking",
      "TypeScript frontend and data visualization",
      "NPM packages, typed APIs, and developer experience",
      "Cypress, CI/CD, and release quality"
    ],
    experienceTitle: "Selected Experience",
    educationTitle: "Education",
    education: [
      "10.2022 - 12.2025 M.Sc. Information Systems, Technical University of Munich",
      "10.2019 - 08.2022 B.Sc. Business Informatics, University of Göttingen",
      "12.2021 Google Data Analytics Professional Certificate"
    ],
    availabilityTitle: "Open To",
    availability: ["AI Product Engineering", "Full-stack Product Delivery", "Backend API and Async Jobs", "Developer Experience"]
  }
};

export const showcasePagesByLocale: Record<Locale, LocaleShowcase> = {
  en: enShowcase,
  zh: zhShowcase,
  de: enShowcase
};
