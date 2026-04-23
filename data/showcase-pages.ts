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
    tabs: Array<{ key: SkillTagGroup["key"] | "all"; label: string; icon: string }>;
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
    subtitle: "全栈与 AI 应用架构工程师",
    bioLines: [
      "热爱技术，专注于把复杂系统做成可长期演进的产品。",
      "擅长后端系统、数据工作流、前端体验与工程化交付之间的平衡。",
      "持续把新技术应用到真实业务里，追求稳定、清晰、可维护。"
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
        title: "Agent Engineer",
        summary: "开始专注于 Agent 工程方向，围绕 AI 工作流、运行时治理与多 Agent 协作持续深入。",
        accentClass: "bg-emerald-400"
      },
      {
        year: "2022",
        title: "TUM Master + Full Stack Engineer at Siemens",
        summary: "同年开始在慕尼黑工业大学攻读硕士，并在西门子正式担任全栈工程师，参与企业级系统研发与交付。",
        accentClass: "bg-sky-400"
      },
      {
        year: "2021",
        title: "Siemens Intern",
        summary: "在西门子开始实习，进入真实工业软件环境，参与前后端协作与工程交付流程。",
        accentClass: "bg-violet-400"
      },
      {
        year: "2019",
        title: "Bachelor at University of Göttingen",
        summary: "本科阶段进入哥廷根大学，系统学习计算机与软件工程相关基础，为后续工程实践打下扎实基础。",
        accentClass: "bg-amber-400"
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
    radarAxes: ["前端开发", "后端开发", "系统设计", "问题解决", "性能优化", "工具使用"],
    radarValues: [86, 88, 82, 84, 76, 72],
    proficiency: [
      { name: "TypeScript", value: 90, tone: "from-violet-400 to-fuchsia-300" },
      { name: "Angular", value: 88, tone: "from-blue-500 to-cyan-400" },
      { name: "Spring Boot", value: 82, tone: "from-cyan-400 to-emerald-400" },
      { name: "Java", value: 75, tone: "from-emerald-400 to-lime-400" },
      { name: "Docker", value: 70, tone: "from-orange-400 to-amber-300" },
      { name: "MySQL", value: 65, tone: "from-pink-500 to-rose-400" }
    ],
    trendLabels: ["5月", "7月", "9月", "11月", "1月", "3月", "5月"],
    trendStudy: [28, 38, 70, 72, 58, 78, 94],
    trendImprove: [12, 20, 48, 50, 38, 62, 70],
    trendStudyLabel: "学习投入",
    trendImproveLabel: "技能提升",
    footerNote: "保持学习，持续成长。",
    tagGroups: [
      {
        key: "frontend",
        title: "前端开发",
        icon: "</>",
        tone: "text-sky-300",
        tags: ["TypeScript", "Angular", "JavaScript", "HTML5", "CSS3", "RxJS", "NgRx", "ECharts"]
      },
      {
        key: "backend",
        title: "后端开发",
        icon: "▤",
        tone: "text-emerald-300",
        tags: ["Java", "Spring Boot", "Spring MVC", "RESTful API", "GraphQL", "Redis", "MySQL", "JPA"]
      },
      {
        key: "tools",
        title: "工具&平台",
        icon: "✚",
        tone: "text-violet-300",
        tags: ["Docker", "Git", "Linux", "PostgreSQL", "Nginx", "Kafka", "RabbitMQ", "Jenkins"]
      },
      {
        key: "foundation",
        title: "基础能力",
        icon: "▣",
        tone: "text-amber-300",
        tags: ["数据结构", "算法", "设计模式", "系统设计", "性能优化", "测试", "CI/CD", "敏捷开发"]
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
        title: "openTree 知识图谱平台",
        summary: "围绕知识抽取、图谱建模与混合检索构建可追踪的 AI 知识平台。",
        category: "backend",
        tags: ["FastAPI", "Neo4j", "Elasticsearch", "Redis"],
        variant: "knowledge",
        githubUrl: "https://github.com/Esoteriker/openTree"
      },
      {
        title: "clouDA Backup API",
        summary: "面向生产环境的后端底座，强调可复现部署、迁移策略与稳定运维。",
        category: "backend",
        tags: ["FastAPI", "PostgreSQL", "Docker", "SQLAlchemy"],
        variant: "api",
        githubUrl: "https://github.com/Esoteriker/clouDA-backup-fastapi"
      },
      {
        title: "PetMate 全栈应用",
        summary: "提供完整用户流程与交互体验的全栈产品原型，支持持续迭代。",
        category: "fullstack",
        tags: ["React", "Node.js", "REST API", "Responsive UI"],
        variant: "product",
        githubUrl: "https://github.com/Esoteriker/pj-reactjs-petmate",
        liveUrl: "https://esoteriker.github.io/pj-reactjs-petmate"
      },
      {
        title: "Agent Runtime Guardrails",
        summary: "把执行策略、回退链路和审计日志组织成可治理的 Agent 运行时。",
        category: "backend",
        tags: ["Workflow", "Guardrails", "Tracing", "Policy"],
        variant: "workflow"
      },
      {
        title: "Observability Command Center",
        summary: "用于链路、指标与事件聚合的可观测性面板，帮助快速定位异常。",
        category: "frontend",
        tags: ["Dashboard", "Metrics", "Logs", "Tracing"],
        variant: "observability"
      },
      {
        title: "Architecture Decision Notebook",
        summary: "以 ADR 与案例快照沉淀架构演进轨迹，便于团队共享上下文。",
        category: "fullstack",
        tags: ["ADR", "Knowledge Base", "Docs", "Collaboration"],
        variant: "architecture"
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
        title: "从功能到系统边界",
        summary: "为什么早期边界设计能避免规模增长后的隐性耦合，以及如何识别服务拆分拐点。",
        category: "notes",
        tags: ["Architecture", "Microservices"],
        date: "2026-04-28",
        readTime: "5 分钟阅读",
        variant: "signals",
        href: "#"
      },
      {
        title: "面向生产的 AI 工作流设计",
        summary: "结合 LLM 服务、缓存、降级和审计机制，构建可治理的 Agent 执行流程。",
        category: "projects",
        tags: ["AI", "Workflows", "Reliability"],
        date: "2026-04-15",
        readTime: "8 分钟阅读",
        variant: "spring",
        href: "#"
      },
      {
        title: "Docker Compose 在后端交付中的价值",
        summary: "把本地开发、CI 与预发布环境拉到同一条运行基线时，需要注意哪些细节。",
        category: "learning",
        tags: ["Docker", "DevOps", "Compose"],
        date: "2026-03-30",
        readTime: "6 分钟阅读",
        variant: "docker",
        href: "#"
      },
      {
        title: "如何设计一个高可用系统",
        summary: "从故障域、超时、重试与可观测性四个方面拆解高可用系统设计的基本盘。",
        category: "notes",
        tags: ["Systems", "Architecture", "Availability"],
        date: "2026-03-10",
        readTime: "10 分钟阅读",
        variant: "systems",
        href: "#"
      },
      {
        title: "用 ECharts 构建架构可视化面板",
        summary: "如何用图表、密度和层级关系把复杂运行数据组织成一眼可读的界面。",
        category: "projects",
        tags: ["Charts", "Data Viz", "Frontend"],
        date: "2026-02-20",
        readTime: "7 分钟阅读",
        variant: "charts",
        href: "#"
      }
    ]
  },
  resume: {
    title: "我的简历",
    description: "面向 AI Agent 平台、后端系统和分布式工程的能力摘要。",
    summaryTitle: "职业摘要",
    summary: [
      "专注于 AI Agent 应用、分布式系统与生产级后端平台建设。",
      "擅长把模糊需求收敛为清晰架构边界、可靠交付路径与可观测运行策略。",
      "在服务拆分、异步编排、数据建模和交付工程上有持续实践。"
    ],
    strengthsTitle: "优势能力",
    strengths: [
      "微服务与事件驱动架构设计",
      "AI 工作流与知识图谱场景建模",
      "生产环境稳定性与可观测性治理",
      "前后端协作与产品化交付"
    ],
    experienceTitle: "项目 / 经验亮点",
    educationTitle: "教育背景",
    education: [
      "2022-2025 M.Sc., Technical University of Munich",
      "2019-2022 Bachelor's studies, University of Goettingen"
    ],
    availabilityTitle: "合作方向",
    availability: [
      "Solution Architecture",
      "AI Agent Engineering",
      "Backend Platform Strategy",
      "System Design Review"
    ]
  }
};

const enShowcase: LocaleShowcase = {
  about: {
    location: "Vienna, Austria",
    subtitle: "Full-stack and AI systems engineer",
    bioLines: [
      "I enjoy turning complex ideas into products that can evolve for years.",
      "My work sits at the intersection of backend systems, data workflows, frontend experience, and delivery engineering.",
      "I like bringing new technology into real business contexts without losing clarity or reliability."
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
      { year: "2025", title: "Agent Engineer", summary: "Moved fully into agent engineering with a focus on production AI workflows, runtime governance, and orchestration.", accentClass: "bg-emerald-400" },
      { year: "2022", title: "TUM Master + Full Stack Engineer at Siemens", summary: "Started a master's degree at the Technical University of Munich and formally joined Siemens as a full stack engineer in the same year.", accentClass: "bg-sky-400" },
      { year: "2021", title: "Siemens Intern", summary: "Began an internship at Siemens and worked inside enterprise software delivery and cross-functional product teams.", accentClass: "bg-violet-400" },
      { year: "2019", title: "Bachelor at University of Göttingen", summary: "Started bachelor's studies at the University of Göttingen and built the academic foundation for later engineering work.", accentClass: "bg-amber-400" }
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
    radarAxes: ["Frontend", "Backend", "System Design", "Problem Solving", "Performance", "Tooling"],
    radarValues: [86, 88, 82, 84, 76, 72],
    proficiency: [
      { name: "TypeScript", value: 90, tone: "from-violet-400 to-fuchsia-300" },
      { name: "Angular", value: 88, tone: "from-blue-500 to-cyan-400" },
      { name: "Spring Boot", value: 82, tone: "from-cyan-400 to-emerald-400" },
      { name: "Java", value: 75, tone: "from-emerald-400 to-lime-400" },
      { name: "Docker", value: 70, tone: "from-orange-400 to-amber-300" },
      { name: "MySQL", value: 65, tone: "from-pink-500 to-rose-400" }
    ],
    trendLabels: ["May", "Jul", "Sep", "Nov", "Jan", "Mar", "May"],
    trendStudy: [28, 38, 70, 72, 58, 78, 94],
    trendImprove: [12, 20, 48, 50, 38, 62, 70],
    trendStudyLabel: "Learning Investment",
    trendImproveLabel: "Skill Growth",
    footerNote: "Keep learning and compounding.",
    tagGroups: [
      {
        key: "frontend",
        title: "Frontend",
        icon: "</>",
        tone: "text-sky-300",
        tags: ["TypeScript", "Angular", "JavaScript", "HTML5", "CSS3", "RxJS", "NgRx", "ECharts"]
      },
      {
        key: "backend",
        title: "Backend",
        icon: "▤",
        tone: "text-emerald-300",
        tags: ["Java", "Spring Boot", "Spring MVC", "RESTful API", "GraphQL", "Redis", "MySQL", "JPA"]
      },
      {
        key: "tools",
        title: "Tools & Platform",
        icon: "✚",
        tone: "text-violet-300",
        tags: ["Docker", "Git", "Linux", "PostgreSQL", "Nginx", "Kafka", "RabbitMQ", "Jenkins"]
      },
      {
        key: "foundation",
        title: "Core Fundamentals",
        icon: "▣",
        tone: "text-amber-300",
        tags: ["Data Structures", "Algorithms", "Design Patterns", "System Design", "Testing", "CI/CD", "Performance", "Agile"]
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
      { title: "openTree Knowledge Graph", summary: "Traceable AI knowledge platform for extraction, graph modeling, and hybrid retrieval.", category: "backend", tags: ["FastAPI", "Neo4j", "Elasticsearch", "Redis"], variant: "knowledge", githubUrl: "https://github.com/Esoteriker/openTree" },
      { title: "clouDA Backup API", summary: "Production backend foundation focused on reproducible deployment and safe schema evolution.", category: "backend", tags: ["FastAPI", "PostgreSQL", "Docker", "SQLAlchemy"], variant: "api", githubUrl: "https://github.com/Esoteriker/clouDA-backup-fastapi" },
      { title: "PetMate Full-stack App", summary: "A full-stack product prototype with clear user flows and sustainable iteration speed.", category: "fullstack", tags: ["React", "Node.js", "REST API", "Responsive UI"], variant: "product", githubUrl: "https://github.com/Esoteriker/pj-reactjs-petmate", liveUrl: "https://esoteriker.github.io/pj-reactjs-petmate" },
      { title: "Agent Runtime Guardrails", summary: "Governed runtime patterns for execution policies, fallbacks, and audit traces.", category: "backend", tags: ["Workflow", "Guardrails", "Tracing", "Policy"], variant: "workflow" },
      { title: "Observability Command Center", summary: "A dashboard-first view for metrics, traces, and operational event correlation.", category: "frontend", tags: ["Dashboard", "Metrics", "Logs", "Tracing"], variant: "observability" },
      { title: "Architecture Decision Notebook", summary: "A knowledge system for ADR snapshots and architecture evolution narratives.", category: "fullstack", tags: ["ADR", "Knowledge Base", "Docs", "Collaboration"], variant: "architecture" }
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
      { title: "From Features to System Boundaries", summary: "Why early boundary design prevents hidden coupling and slows future complexity growth.", category: "notes", tags: ["Architecture", "Microservices"], date: "2026-04-28", readTime: "5 min read", variant: "signals", href: "#" },
      { title: "Designing AI Workflows for Production", summary: "Blending LLM calls, caching, fallback policies, and audit trails into one runtime.", category: "projects", tags: ["AI", "Workflows", "Reliability"], date: "2026-04-15", readTime: "8 min read", variant: "spring", href: "#" },
      { title: "Docker Compose for Predictable Delivery", summary: "How to keep local development, CI, and preview environments aligned on one runtime baseline.", category: "learning", tags: ["Docker", "DevOps", "Compose"], date: "2026-03-30", readTime: "6 min read", variant: "docker", href: "#" },
      { title: "How to Design Highly Available Systems", summary: "A practical checklist for fault domains, timeout budgets, retries, and observability coverage.", category: "notes", tags: ["Systems", "Architecture", "Availability"], date: "2026-03-10", readTime: "10 min read", variant: "systems", href: "#" },
      { title: "Building Architecture Dashboards with ECharts", summary: "Ways to turn dense runtime data into calm, legible visual hierarchy.", category: "projects", tags: ["Charts", "Data Viz", "Frontend"], date: "2026-02-20", readTime: "7 min read", variant: "charts", href: "#" }
    ]
  },
  resume: {
    title: "Resume",
    description: "A concise summary focused on AI agent platforms, backend systems, and distributed engineering.",
    summaryTitle: "Professional Summary",
    summary: [
      "Focused on AI agent applications, distributed systems, and production backend platforms.",
      "Strong at turning ambiguity into architecture boundaries, delivery plans, and resilient runtime paths.",
      "Hands-on across service design, async orchestration, data modeling, and engineering delivery."
    ],
    strengthsTitle: "Core Strengths",
    strengths: [
      "Microservices and event-driven architecture",
      "AI workflows and knowledge graph modeling",
      "Production reliability and observability strategy",
      "Cross-functional delivery from architecture to implementation"
    ],
    experienceTitle: "Selected Experience",
    educationTitle: "Education",
    education: ["2022-2025 M.Sc., Technical University of Munich", "2019-2022 Bachelor's studies, University of Göttingen"],
    availabilityTitle: "Open To",
    availability: ["Solution Architecture", "AI Agent Engineering", "Backend Platform Strategy", "System Design Review"]
  }
};

export const showcasePagesByLocale: Record<Locale, LocaleShowcase> = {
  en: enShowcase,
  zh: zhShowcase,
  de: enShowcase
};
