export type Locale = "en" | "zh" | "de";

export const defaultLocale: Locale = "zh";

export const localeOptions: Array<{ code: Locale; label: string }> = [
  { code: "en", label: "EN" },
  { code: "zh", label: "中文" },
  { code: "de", label: "DE" }
];

export type NavItem = {
  label: string;
  href: string;
};

export type SectionHeaderContent = {
  eyebrow: string;
  title: string;
  description: string;
};

export type PrincipleItem = {
  module: string;
  title: string;
  summary: string;
};

export type InsightItem = {
  title: string;
  summary: string;
  status: string;
  href: string;
};

export type ContactChannel = {
  label: string;
  value: string;
  href: string;
};

export type ProfileData = {
  name: string;
  github: string;
  title: string;
  tagline: string;
  navigation: NavItem[];
  hero: {
    systemRole: string;
    headlineLeading: string;
    headlineEmphasis: string;
    headlineTrailing: string;
    typingTitles: string[];
    positioningStatement: string;
    highlightsTitle: string;
    quickPoints: string[];
    ctas: {
      primary: NavItem;
      secondary: NavItem;
    };
    telemetry: string[];
  };
  about: {
    header: SectionHeaderContent;
    intro: string;
    capabilitiesTitle: string;
    capabilities: string[];
    workingStyleTitle: string;
    workingStyle: string[];
    timelineTitle: string;
    timeline: {
      label: string;
      text: string;
    }[];
  };
  principles: {
    header: SectionHeaderContent;
    items: PrincipleItem[];
  };
  stack: {
    header: SectionHeaderContent;
    groups: {
      category: string;
      items: string[];
    }[];
  };
  systemsUi: {
    header: SectionHeaderContent;
    labels: {
      oneLineValue: string;
      myRole: string;
      outcome: string;
      problemContext: string;
      architectureStrategy: string;
      architectureHighlights: string;
      techStack: string;
      scalabilityApproach: string;
      securityConsiderations: string;
    };
    buttons: {
      github: string;
      live: string;
    };
  };
  insights: {
    header: SectionHeaderContent;
    items: InsightItem[];
  };
  contact: {
    header: SectionHeaderContent;
    invitation: string;
    channels: ContactChannel[];
  };
  labels: {
    navbarGithub: string;
    readInsight: string;
    language: string;
    theme: {
      dark: string;
      light: string;
      loading: string;
    };
  };
  seo: {
    title: string;
    description: string;
    url: string;
    ogImage: string;
  };
  footer: {
    note: string;
  };
};

export const profileDataByLocale: Record<Locale, ProfileData> = {
  en: {
    name: "Haidong Xu",
    github: "https://github.com/Esoteriker",
    title: "AI Product Engineer | Full-Stack Engineer",
    tagline: "Shipping AI-assisted product workflows across frontend, backend, and data-heavy systems",
    navigation: [
      { label: "About", href: "#about" },
      { label: "Experience", href: "#experience" },
      { label: "Systems", href: "#systems" },
      { label: "Stack", href: "#stack" },
      { label: "Contact", href: "#contact" }
    ],
    hero: {
      systemRole: "Product Engineering Portfolio",
      headlineLeading: "Turning",
      headlineEmphasis: "AI Features",
      headlineTrailing: "into reliable products",
      typingTitles: [
        "AI Product Engineer",
        "Senior Product Engineer (AI/LLM)",
        "Full-Stack Software Engineer"
      ],
      positioningStatement:
        "Full-stack TypeScript/Next.js, Java/Python APIs, async jobs, RAG/LLM integration, and production debugging.",
      highlightsTitle: "Why This Site",
      quickPoints: [
        "AI-assisted retrieval, explanation, and report-generation workflows",
        "Backend APIs and async jobs with retry, timeout, status, and fallback paths",
        "Typed product interfaces, developer packages, Cypress coverage, and release ownership"
      ],
      ctas: {
        primary: { label: "Explore Product Systems", href: "#systems" },
        secondary: { label: "Contact", href: "#contact" }
      },
      telemetry: ["AI API Integration", "TypeScript", "REST APIs", "Async Jobs"]
    },
    about: {
      header: {
        eyebrow: "About",
        title: "AI Product Engineer",
        description:
          "I turn product requirements into reliable full-stack workflows, API contracts, and AI-assisted user experiences."
      },
      intro:
        "As a full-stack product engineer, I work across TypeScript interfaces, backend APIs, AI/LLM service integration, async execution, debugging, and release quality. I like the practical middle ground where product behavior, system reliability, and developer experience all have to agree.",
      capabilitiesTitle: "Core Capability Modules",
      capabilities: [
        "AI/LLM product workflows with model APIs, RAG patterns, retry/fallback handling, and graceful degradation",
        "Backend API design for web and mobile clients with clear contracts, error behavior, and ownership boundaries",
        "Frontend product delivery with TypeScript, React/Next.js, Angular, data visualization, and reusable component packages"
      ],
      workingStyleTitle: "How I Work",
      workingStyle: [
        "Translate user workflows into typed interfaces, API reviews, and maintainable service boundaries",
        "Design long-running jobs around status tracking, retries, timeouts, logs, and recoverable execution paths",
        "Use observability, Cypress regression coverage, CI gates, and release triage to keep delivery grounded"
      ],
      timelineTitle: "Now / Recently / Next",
      timeline: [
        {
          label: "Now",
          text: "Shipping AI-assisted product workflows that connect model APIs with internal services for retrieval, explanation, and reporting."
        },
        {
          label: "Recently",
          text: "Delivered backend APIs, async task orchestration, and data-heavy TypeScript workflows for industrial engineering software."
        },
        {
          label: "Next",
          text: "Deepening developer-facing product work around typed packages, integration guides, observability, and AI workflow quality."
        }
      ]
    },
    principles: {
      header: {
        eyebrow: "Philosophy",
        title: "Product Engineering Principles",
        description:
          "The delivery habits I use when product behavior, AI services, and backend reliability meet in production."
      },
      items: [
        {
          module: "M-01",
          title: "Contracts Before Coupling",
          summary: "Clarify typed interfaces, API contracts, and error behavior before teams depend on hidden assumptions."
        },
        {
          module: "M-02",
          title: "Resilience in the Workflow",
          summary: "Build retry, timeout, status tracking, fallback, and graceful degradation into user-facing flows."
        },
        {
          module: "M-03",
          title: "Debuggable by Design",
          summary: "Use logs, dependency chains, service interaction traces, and user impact analysis to shorten investigations."
        },
        {
          module: "M-04",
          title: "AI as Product Behavior",
          summary: "Treat model calls as product workflows with retrieval context, quality checks, rate limits, and fallbacks."
        },
        {
          module: "M-05",
          title: "Developer Experience Compounds",
          summary: "Invest in typed packages, documentation, API reviews, and integration conventions to reduce future friction."
        },
        {
          module: "M-06",
          title: "Quality Gates Enable Speed",
          summary: "Use Cypress coverage, CI workflows, code reviews, and release triage so product iteration can stay fast."
        }
      ]
    },
    stack: {
      header: {
        eyebrow: "Stack",
        title: "Core Technology Stack",
        description:
          "Grouped around the product surfaces and runtime paths I work on most."
      },
      groups: [
        {
          category: "AI / Product",
          items: ["OpenAI API", "RAG", "Prompt Engineering", "Tool Calling", "Retry / Fallback Design"]
        },
        {
          category: "Backend / Data",
          items: ["Java", "Python", "Spring Boot", "FastAPI", "Node.js", "REST APIs", "SQL", "Async Jobs"]
        },
        {
          category: "Frontend / Delivery",
          items: ["TypeScript", "React", "Next.js", "Angular", "Data Visualization", "WebAssembly", "Cypress", "Docker"]
        }
      ]
    },
    systemsUi: {
      header: {
        eyebrow: "Systems",
        title: "Featured Product Systems",
        description:
          "A short list of product systems I have worked on."
      },
      labels: {
        oneLineValue: "System Value",
        myRole: "My Role",
        outcome: "Outcome",
        problemContext: "Problem Context",
        architectureStrategy: "Architecture Strategy",
        architectureHighlights: "Architecture Highlights",
        techStack: "Tech Stack",
        scalabilityApproach: "Scalability Approach",
        securityConsiderations: "Security Considerations"
      },
      buttons: {
        github: "GitHub",
        live: "Open"
      }
    },
    insights: {
      header: {
        eyebrow: "Insights",
        title: "Engineering Philosophy / Insights",
        description:
          "Notes on product engineering tradeoffs, AI integration reliability, and developer experience."
      },
      items: [
        {
          title: "RevOps Agent Demo: Approvals Before Automation",
          summary: "Routing agents, CRM tools, memory, and human approval boundaries in a real public repo.",
          status: "Published",
          href: "/blog/revops-agent-demo"
        },
        {
          title: "DateCraft: Turning Small Inputs Into a Date Plan",
          summary: "A shipped Next.js app that generates date ideas from mood, budget, time, and setting.",
          status: "Published",
          href: "/blog/datecraft-open-date"
        },
        {
          title: "WFP HungerMap: Notes From a Public Data Product",
          summary: "Project notes around maps, charts, comparison views, downloads, and chatbot flows.",
          status: "Published",
          href: "/blog/wfp-hungermap"
        }
      ]
    },
    contact: {
      header: {
        eyebrow: "Contact",
        title: "Build Reliable AI Product Workflows",
        description:
          "Available for AI product engineering, full-stack delivery, backend APIs, and developer experience work."
      },
      invitation:
        "If your product needs AI integration that survives real users, changing data, and production constraints, let's connect.",
      channels: [
        { label: "Email", value: "esoteriker.dev@gmail.com", href: "mailto:esoteriker.dev@gmail.com" },
        {
          label: "LinkedIn",
          value: "Haidong Xu",
          href: "https://www.linkedin.com/in/haidong-xu/"
        },
        { label: "Website", value: "haidong-dev.com", href: "https://haidong-dev.com" }
      ]
    },
    labels: {
      navbarGithub: "GitHub",
      readInsight: "Read Insight",
      language: "Language",
      theme: {
        dark: "Dark",
        light: "Light",
        loading: "Theme"
      }
    },
    seo: {
      title: "Haidong Xu | AI Product Engineer",
      description:
        "Portfolio for an AI Product Engineer and Full-Stack Software Engineer focused on AI integrations, backend APIs, TypeScript workflows, and developer experience.",
      url: "https://haidong-dev.com",
      ogImage: "/opengraph-image"
    },
    footer: {
      note: "Product engineering portfolio for AI integrations, backend APIs, and full-stack delivery."
    }
  },
  zh: {
    name: "徐海东",
    github: "https://github.com/Esoteriker",
    title: "AI Product Engineer | Full-Stack Engineer",
    tagline: "交付覆盖前端、后端与数据工作流的 AI 辅助产品体验",
    navigation: [
      { label: "关于", href: "#about" },
      { label: "经历", href: "#experience" },
      { label: "系统", href: "#systems" },
      { label: "技术栈", href: "#stack" },
      { label: "联系", href: "#contact" }
    ],
    hero: {
      systemRole: "个人产品工程作品集",
      headlineLeading: "把",
      headlineEmphasis: "AI 功能",
      headlineTrailing: "做成可靠产品",
      typingTitles: [
        "AI Product Engineer",
        "Senior Product Engineer (AI/LLM)",
        "Full-Stack Software Engineer"
      ],
      positioningStatement:
        "全栈 TypeScript/Next.js、Java/Python API、异步任务、RAG/LLM 集成与生产调试。",
      highlightsTitle: "价值摘要",
      quickPoints: [
        "AI 辅助的检索、解释与报告生成产品流程",
        "带重试、超时、状态追踪与回退路径的后端 API 和异步任务",
        "类型化产品接口、开发者包、Cypress 覆盖与发布质量负责"
      ],
      ctas: {
        primary: { label: "查看产品系统", href: "#systems" },
        secondary: { label: "联系我", href: "#contact" }
      },
      telemetry: ["AI API 集成", "TypeScript", "REST APIs", "异步任务"]
    },
    about: {
      header: {
        eyebrow: "关于",
        title: "AI 产品工程师",
        description: "把产品需求转化为可靠的全栈工作流、API 契约与 AI 辅助用户体验。"
      },
      intro:
        "作为全栈产品工程师，我跨 TypeScript 界面、后端 API、AI/LLM 服务集成、异步执行、调试与发布质量工作。我的兴趣点在产品行为、系统可靠性与开发者体验真正对齐的地方。",
      capabilitiesTitle: "核心能力模块",
      capabilities: [
        "基于模型 API、RAG、重试/回退与优雅降级的 AI/LLM 产品工作流",
        "面向 Web 与移动端的后端 API 设计，明确契约、错误行为与集成责任边界",
        "基于 TypeScript、React/Next.js、Angular、数据可视化与组件包的前端产品交付"
      ],
      workingStyleTitle: "我的协作方式",
      workingStyle: [
        "把用户流程拆成类型化接口、API review 与可维护的服务边界",
        "围绕状态追踪、重试、超时、日志与可恢复执行路径设计长任务",
        "通过可观测性、Cypress 回归、CI 质量门与发布排障保持交付稳定"
      ],
      timelineTitle: "Now / Recently / Next",
      timeline: [
        {
          label: "Now",
          text: "交付连接模型 API 与内部服务的 AI 辅助产品流程，覆盖检索、解释与报告生成。"
        },
        {
          label: "Recently",
          text: "为工业工程软件交付后端 API、异步任务编排与数据密集型 TypeScript 工作流。"
        },
        {
          label: "Next",
          text: "继续深入类型化包、集成文档、可观测性与 AI 工作流质量等开发者体验方向。"
        }
      ]
    },
    principles: {
      header: {
        eyebrow: "理念",
        title: "产品工程原则",
        description: "当产品行为、AI 服务与后端可靠性在生产环境相遇时，我遵循的交付习惯。"
      },
      items: [
        {
          module: "M-01",
          title: "先契约，后耦合",
          summary: "在团队依赖形成前，先明确类型化接口、API 契约与错误行为。"
        },
        {
          module: "M-02",
          title: "把韧性放进流程",
          summary: "在用户可见流程里内建重试、超时、状态追踪、回退与优雅降级。"
        },
        {
          module: "M-03",
          title: "默认可调试",
          summary: "用日志、依赖链、服务交互与用户影响分析缩短生产问题定位时间。"
        },
        {
          module: "M-04",
          title: "把 AI 当成产品行为",
          summary: "将模型调用放进完整产品流程，配套检索上下文、质量检查、限流与回退。"
        },
        {
          module: "M-05",
          title: "开发者体验会复利",
          summary: "投资类型化包、文档、API review 与集成约定，降低未来协作摩擦。"
        },
        {
          module: "M-06",
          title: "质量门支撑速度",
          summary: "用 Cypress、CI、代码评审与发布排障机制，让产品迭代保持速度。"
        }
      ]
    },
    stack: {
      header: {
        eyebrow: "技术栈",
        title: "核心技术栈",
        description: "围绕我最常处理的产品界面与运行路径分组。"
      },
      groups: [
        {
          category: "AI / 产品",
          items: ["OpenAI API", "RAG", "Prompt Engineering", "Tool Calling", "重试 / 回退设计"]
        },
        {
          category: "后端 / 数据",
          items: ["Java", "Python", "Spring Boot", "FastAPI", "Node.js", "REST APIs", "SQL", "异步任务"]
        },
        {
          category: "前端 / 交付",
          items: ["TypeScript", "React", "Next.js", "Angular", "数据可视化", "WebAssembly", "Cypress", "Docker"]
        }
      ]
    },
    systemsUi: {
      header: {
        eyebrow: "系统",
        title: "精选产品系统",
        description: "我做过的一些产品系统，保留最核心的信息。"
      },
      labels: {
        oneLineValue: "系统价值",
        myRole: "我的角色",
        outcome: "结果价值",
        problemContext: "问题背景",
        architectureStrategy: "架构策略",
        architectureHighlights: "架构亮点",
        techStack: "技术栈",
        scalabilityApproach: "扩展性方案",
        securityConsiderations: "安全考量"
      },
      buttons: {
        github: "GitHub",
        live: "打开"
      }
    },
    insights: {
      header: {
        eyebrow: "洞察",
        title: "工程理念 / 技术笔记",
        description: "记录产品工程取舍、AI 集成可靠性与开发者体验思考。"
      },
      items: [
        {
          title: "RevOps Agent Demo：自动化之前先做审批边界",
          summary: "真实公开仓库里的路由 agent、CRM 工具、记忆和人工审批边界。",
          status: "已发布",
          href: "/blog/revops-agent-demo"
        },
        {
          title: "DateCraft：把轻量输入变成可执行约会计划",
          summary: "一个已部署的 Next.js 应用，根据心情、预算、时间和场景生成约会灵感。",
          status: "已发布",
          href: "/blog/datecraft-open-date"
        },
        {
          title: "WFP HungerMap：公开数据产品笔记",
          summary: "基于公开仓库的地图、图表、对比、下载和聊天功能区笔记。",
          status: "已发布",
          href: "/blog/wfp-hungermap"
        }
      ]
    },
    contact: {
      header: {
        eyebrow: "联系",
        title: "一起构建可靠的 AI 产品工作流",
        description: "可合作方向包括 AI 产品工程、全栈交付、后端 API 与开发者体验。"
      },
      invitation: "如果你的产品需要能经受真实用户、复杂数据与生产约束的 AI 集成，欢迎联系我。",
      channels: [
        { label: "邮箱", value: "esoteriker.dev@gmail.com", href: "mailto:esoteriker.dev@gmail.com" },
        {
          label: "LinkedIn",
          value: "Haidong Xu",
          href: "https://www.linkedin.com/in/haidong-xu/"
        },
        { label: "网站", value: "haidong-dev.com", href: "https://haidong-dev.com" }
      ]
    },
    labels: {
      navbarGithub: "GitHub",
      readInsight: "阅读笔记",
      language: "语言",
      theme: {
        dark: "深色",
        light: "浅色",
        loading: "主题"
      }
    },
    seo: {
      title: "Haidong Xu | AI 产品工程师",
      description: "面向 AI 集成、后端 API、TypeScript 工作流与开发者体验的全栈产品工程作品集。",
      url: "https://haidong-dev.com",
      ogImage: "/opengraph-image"
    },
    footer: {
      note: "聚焦 AI 集成、后端 API 与全栈交付的产品工程作品集。"
    }
  },
  de: {
    name: "Haidong Xu",
    github: "https://github.com/Esoteriker",
    title: "AI Product Engineer | Full-Stack Engineer",
    tagline: "AI-gestützte Produkt-Workflows über Frontend, Backend und datenintensive Systeme liefern",
    navigation: [
      { label: "Über mich", href: "#about" },
      { label: "Erfahrung", href: "#experience" },
      { label: "Systeme", href: "#systems" },
      { label: "Stack", href: "#stack" },
      { label: "Kontakt", href: "#contact" }
    ],
    hero: {
      systemRole: "Product-Engineering-Portfolio",
      headlineLeading: "AI",
      headlineEmphasis: "Features",
      headlineTrailing: "als verlässliche Produkte",
      typingTitles: [
        "AI Product Engineer",
        "Senior Product Engineer (AI/LLM)",
        "Full-Stack Software Engineer"
      ],
      positioningStatement:
        "Full-Stack TypeScript/Next.js, Java/Python APIs, Async-Jobs, RAG/LLM-Integration und Production Debugging.",
      highlightsTitle: "Kernnutzen",
      quickPoints: [
        "AI-gestützte Retrieval-, Erklärungs- und Report-Workflows",
        "Backend APIs und Async-Jobs mit Retry, Timeout, Status und Fallback-Pfaden",
        "Typisierte Produktinterfaces, Developer Packages, Cypress Coverage und Release Ownership"
      ],
      ctas: {
        primary: { label: "Produktsysteme erkunden", href: "#systems" },
        secondary: { label: "Kontakt", href: "#contact" }
      },
      telemetry: ["AI API Integration", "TypeScript", "REST APIs", "Async Jobs"]
    },
    about: {
      header: {
        eyebrow: "Über mich",
        title: "AI Product Engineer",
        description:
          "Ich übersetze Produktanforderungen in verlässliche Full-Stack-Workflows, API-Verträge und AI-gestützte Nutzererlebnisse."
      },
      intro:
        "Als Full-Stack Product Engineer arbeite ich über TypeScript-UIs, Backend APIs, AI/LLM-Serviceintegration, asynchrone Ausführung, Debugging und Release-Qualität hinweg.",
      capabilitiesTitle: "Kernfähigkeiten",
      capabilities: [
        "AI/LLM-Produktworkflows mit Modell-APIs, RAG, Retry/Fallback und Graceful Degradation",
        "Backend-API-Design für Web- und Mobile-Clients mit klaren Verträgen, Fehlerverhalten und Ownership",
        "Frontend Product Delivery mit TypeScript, React/Next.js, Angular, Datenvisualisierung und wiederverwendbaren Packages"
      ],
      workingStyleTitle: "Arbeitsweise",
      workingStyle: [
        "Übersetze User Workflows in typisierte Interfaces, API Reviews und wartbare Service-Grenzen",
        "Modelliere Long-Running Jobs mit Status Tracking, Retries, Timeouts, Logs und recoverable Execution Paths",
        "Nutze Observability, Cypress Regression Coverage, CI Gates und Release Triage für stabile Lieferung"
      ],
      timelineTitle: "Now / Recently / Next",
      timeline: [
        {
          label: "Now",
          text: "Liefere AI-gestützte Produktworkflows, die Modell-APIs mit internen Services für Retrieval, Erklärung und Reporting verbinden."
        },
        {
          label: "Recently",
          text: "Geliefert: Backend APIs, Async-Task-Orchestrierung und datenintensive TypeScript-Workflows für industrielle Engineering-Software."
        },
        {
          label: "Next",
          text: "Vertiefe Developer Experience rund um typisierte Packages, Integration Guides, Observability und AI-Workflow-Qualität."
        }
      ]
    },
    principles: {
      header: {
        eyebrow: "Prinzipien",
        title: "Product Engineering Principles",
        description:
          "Lieferprinzipien für Produktverhalten, AI-Services und Backend-Zuverlässigkeit in Produktion."
      },
      items: [
        {
          module: "M-01",
          title: "Contracts Before Coupling",
          summary: "Typisierte Interfaces, API-Verträge und Fehlerverhalten klären, bevor Abhängigkeiten wachsen."
        },
        {
          module: "M-02",
          title: "Resilienz im Workflow",
          summary: "Retry, Timeout, Status Tracking, Fallback und Graceful Degradation in User-Flows einbauen."
        },
        {
          module: "M-03",
          title: "Debuggable by Design",
          summary: "Logs, Dependency Chains, Service Interactions und User Impact für schnelle Ursachenanalyse nutzen."
        },
        {
          module: "M-04",
          title: "AI als Produktverhalten",
          summary: "Modellaufrufe als Workflow mit Retrieval-Kontext, Qualitätschecks, Rate Limits und Fallbacks behandeln."
        },
        {
          module: "M-05",
          title: "Developer Experience zahlt sich aus",
          summary: "Typisierte Packages, Dokumentation, API Reviews und Integrationskonventionen reduzieren Reibung."
        },
        {
          module: "M-06",
          title: "Quality Gates ermöglichen Tempo",
          summary: "Cypress, CI, Code Reviews und Release Triage halten Produktiteration schnell und belastbar."
        }
      ]
    },
    stack: {
      header: {
        eyebrow: "Stack",
        title: "Core Technology Stack",
        description:
          "Gruppiert nach Produktflächen und Runtime-Pfaden, an denen ich am häufigsten arbeite."
      },
      groups: [
        {
          category: "AI / Produkt",
          items: ["OpenAI API", "RAG", "Prompt Engineering", "Tool Calling", "Retry / Fallback Design"]
        },
        {
          category: "Backend / Data",
          items: ["Java", "Python", "Spring Boot", "FastAPI", "Node.js", "REST APIs", "SQL", "Async Jobs"]
        },
        {
          category: "Frontend / Delivery",
          items: ["TypeScript", "React", "Next.js", "Angular", "Datenvisualisierung", "WebAssembly", "Cypress", "Docker"]
        }
      ]
    },
    systemsUi: {
      header: {
        eyebrow: "Systeme",
        title: "Ausgewählte Produktsysteme",
        description:
          "Eine kurze Auswahl an Produktsystemen, an denen ich gearbeitet habe."
      },
      labels: {
        oneLineValue: "Systemwert",
        myRole: "Meine Rolle",
        outcome: "Ergebnis",
        problemContext: "Problemkontext",
        architectureStrategy: "Architekturstrategie",
        architectureHighlights: "Architektur-Highlights",
        techStack: "Tech Stack",
        scalabilityApproach: "Skalierungsansatz",
        securityConsiderations: "Sicherheitsaspekte"
      },
      buttons: {
        github: "GitHub",
        live: "Öffnen"
      }
    },
    insights: {
      header: {
        eyebrow: "Insights",
        title: "Engineering Philosophy / Insights",
        description:
          "Notizen zu Product-Engineering-Tradeoffs, AI-Integrationszuverlässigkeit und Developer Experience."
      },
      items: [
        {
          title: "RevOps Agent Demo: Approvals Before Automation",
          summary: "Routing Agents, CRM Tools, Memory und Human Approval Boundaries in einem öffentlichen Repo.",
          status: "Published",
          href: "/blog/revops-agent-demo"
        },
        {
          title: "DateCraft: Turning Small Inputs Into a Date Plan",
          summary: "Eine deployte Next.js App für Date-Pläne aus Mood, Budget, Zeit und Setting.",
          status: "Published",
          href: "/blog/datecraft-open-date"
        },
        {
          title: "WFP HungerMap: Notes From a Public Data Product",
          summary: "Notizen zu Maps, Charts, Comparison Views, Downloads und Chatbot Flows.",
          status: "Published",
          href: "/blog/wfp-hungermap"
        }
      ]
    },
    contact: {
      header: {
        eyebrow: "Kontakt",
        title: "Zuverlässige AI-Produktworkflows bauen",
        description:
          "Offen für AI Product Engineering, Full-Stack Delivery, Backend APIs und Developer Experience."
      },
      invitation:
        "Wenn Ihr Produkt AI-Integration braucht, die reale Nutzer, wechselnde Daten und Produktionsbedingungen aushält, lassen Sie uns sprechen.",
      channels: [
        { label: "E-Mail", value: "esoteriker.dev@gmail.com", href: "mailto:esoteriker.dev@gmail.com" },
        {
          label: "LinkedIn",
          value: "Haidong Xu",
          href: "https://www.linkedin.com/in/haidong-xu/"
        },
        { label: "Webseite", value: "haidong-dev.com", href: "https://haidong-dev.com" }
      ]
    },
    labels: {
      navbarGithub: "GitHub",
      readInsight: "Insight lesen",
      language: "Sprache",
      theme: {
        dark: "Dunkel",
        light: "Hell",
        loading: "Theme"
      }
    },
    seo: {
      title: "Haidong Xu | AI Product Engineer",
      description:
        "Portfolio für einen AI Product Engineer und Full-Stack Software Engineer mit Fokus auf AI-Integrationen, Backend APIs, TypeScript Workflows und Developer Experience.",
      url: "https://haidong-dev.com",
      ogImage: "/opengraph-image"
    },
    footer: {
      note: "Product-Engineering-Portfolio für AI-Integrationen, Backend APIs und Full-Stack Delivery."
    }
  }
};

export const profileData = profileDataByLocale[defaultLocale];
