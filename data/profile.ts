export type Locale = "en" | "zh" | "de";

export const defaultLocale: Locale = "en";

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
    positioningStatement: string;
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
    currentFocusTitle: string;
    currentFocus: string[];
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
      problemContext: string;
      architectureStrategy: string;
      architectureHighlights: string;
      techStack: string;
      scalabilityApproach: string;
      securityConsiderations: string;
    };
    buttons: {
      github: string;
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
    title: "Solution Architect and AI Agent Application Developer",
    tagline: "Architecting scalable AI-native systems for the next decade",
    navigation: [
      { label: "About", href: "#about" },
      { label: "Systems", href: "#systems" },
      { label: "Stack", href: "#stack" },
      { label: "Philosophy", href: "#principles" },
      { label: "Contact", href: "#contact" }
    ],
    hero: {
      systemRole: "AI Infrastructure Command Center",
      headlineLeading: "Architecting",
      headlineEmphasis: "AI-native systems",
      headlineTrailing: "for the next decade",
      positioningStatement:
        "I design resilient, secure, event-driven architectures that power intelligent systems at scale.",
      ctas: {
        primary: { label: "Explore Systems", href: "#systems" },
        secondary: { label: "Contact", href: "#contact" }
      },
      telemetry: ["Microservices", "Distributed Systems", "Event-Driven Core", "AI Infrastructure"]
    },
    about: {
      header: {
        eyebrow: "About",
        title: "Solution Architect for Production Systems",
        description:
          "Backend systems engineer focused on reliability, scale, and architecture clarity across distributed and AI-native platforms."
      },
      intro:
        "I work as a Solution Architect and AI Agent Application Developer, building backend systems that remain operable under growth through clear service boundaries, explicit contracts, resilient event flows, and measurable runtime behavior.",
      capabilitiesTitle: "Core Capability Modules",
      capabilities: [
        "Microservices architecture with bounded contexts and API contracts",
        "Distributed workflow design with asynchronous processing patterns",
        "Production hardening across performance, resilience, and maintainability"
      ],
      currentFocusTitle: "Current Build Targets",
      currentFocus: [
        "openTree: AI knowledge graph platform with reasoning workflows",
        "LLM integration for production decision support",
        "Observability-first event-driven backend infrastructure"
      ]
    },
    principles: {
      header: {
        eyebrow: "Philosophy",
        title: "System Design Principles",
        description:
          "Architecture modules that guide how systems are shaped, scaled, and secured in production."
      },
      items: [
        {
          module: "M-01",
          title: "Scalable by Architecture",
          summary: "Use domain boundaries and contract-first interfaces so scaling decisions stay predictable."
        },
        {
          module: "M-02",
          title: "Event-Driven Core",
          summary: "Model system behavior through events to enable decoupling, resilience, and replayability."
        },
        {
          module: "M-03",
          title: "Secure by Default",
          summary: "Apply least privilege, controlled secrets, and strong authentication from the initial design."
        },
        {
          module: "M-04",
          title: "Data-Centric Intelligence",
          summary: "Design for graph, search, and transactional workloads to support intelligent product behavior."
        },
        {
          module: "M-05",
          title: "Observability Built-In",
          summary: "Instrument traces, metrics, and logs so distributed systems stay explainable in production."
        },
        {
          module: "M-06",
          title: "AI-Ready Infrastructure",
          summary: "Build infrastructure that supports model integration, safety controls, and iterative rollout."
        }
      ]
    },
    stack: {
      header: {
        eyebrow: "Stack",
        title: "Technology Matrix",
        description:
          "Categorized stack for backend systems, delivery automation, and AI-native architecture execution."
      },
      groups: [
        {
          category: "Backend",
          items: ["FastAPI", "Node.js", "PostgreSQL", "Redis", "Neo4j", "Elasticsearch"]
        },
        {
          category: "Architecture",
          items: ["Microservices", "Distributed Systems", "Event-Driven Architecture", "Multi-tenant APIs"]
        },
        {
          category: "DevOps",
          items: ["Docker", "Docker Compose", "GitHub Actions", "CI/CD", "Git Hooks", "Lint + Secret Scan"]
        },
        {
          category: "Frontend",
          items: ["React", "Web Components", "Modern CSS"]
        }
      ]
    },
    systemsUi: {
      header: {
        eyebrow: "Systems",
        title: "Featured Systems",
        description:
          "Architecture-led project snapshots with strategy, scalability, and security considerations."
      },
      labels: {
        problemContext: "Problem Context",
        architectureStrategy: "Architecture Strategy",
        architectureHighlights: "Architecture Highlights",
        techStack: "Tech Stack",
        scalabilityApproach: "Scalability Approach",
        securityConsiderations: "Security Considerations"
      },
      buttons: {
        github: "GitHub"
      }
    },
    insights: {
      header: {
        eyebrow: "Insights",
        title: "Engineering Philosophy / Insights",
        description:
          "Architecture notes that capture design tradeoffs, operational lessons, and backend strategy decisions."
      },
      items: [
        {
          title: "From Features to System Boundaries",
          summary: "Why early boundary design prevents hidden coupling in rapidly scaling platforms.",
          status: "Draft",
          href: "#"
        },
        {
          title: "Event Streams as Operational Memory",
          summary: "Using event logs to improve resilience, replay, and observability in distributed systems.",
          status: "Draft",
          href: "#"
        },
        {
          title: "Designing AI Workflows for Production",
          summary: "Patterns for combining LLM services with guardrails, caching, and fallback paths.",
          status: "Draft",
          href: "#"
        }
      ]
    },
    contact: {
      header: {
        eyebrow: "Contact",
        title: "Build the Next Intelligent Platform",
        description:
          "Available for solution architecture, backend strategy, and AI-native infrastructure collaboration."
      },
      invitation:
        "If your platform needs resilient architecture and production-grade execution, let's connect.",
      channels: [
        { label: "Email", value: "esoteriker.dev@gmail.com", href: "mailto:esoteriker.dev@gmail.com" },
        {
          label: "LinkedIn",
          value: "Haidong Xu",
          href: "https://www.linkedin.com/search/results/all/?keywords=Haidong%20Xu"
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
      title: "Haidong Xu | Solution Architect",
      description:
        "Cyberpunk-inspired portfolio for a Solution Architect and Backend Systems Engineer focused on microservices, distributed systems, and AI-native infrastructure.",
      url: "https://haidong-dev.com",
      ogImage: "/opengraph-image"
    },
    footer: {
      note: "AI-native systems architecture dashboard for backend and distributed engineering strategy."
    }
  },
  zh: {
    name: "徐海东",
    github: "https://github.com/Esoteriker",
    title: "Solution Architect and AI Agent Application Developer",
    tagline: "为下一个十年构建可扩展的 AI 原生系统",
    navigation: [
      { label: "关于", href: "#about" },
      { label: "系统", href: "#systems" },
      { label: "技术栈", href: "#stack" },
      { label: "设计理念", href: "#principles" },
      { label: "联系", href: "#contact" }
    ],
    hero: {
      systemRole: "AI 基础设施指挥中心",
      headlineLeading: "架构",
      headlineEmphasis: "AI 原生系统",
      headlineTrailing: "面向下一个十年",
      positioningStatement: "我设计具备韧性、安全性与事件驱动能力的架构，让智能系统在规模化场景中稳定运行。",
      ctas: {
        primary: { label: "查看系统", href: "#systems" },
        secondary: { label: "联系我", href: "#contact" }
      },
      telemetry: ["微服务", "分布式系统", "事件驱动核心", "AI 基础设施"]
    },
    about: {
      header: {
        eyebrow: "关于",
        title: "面向生产环境的解决方案架构师",
        description: "专注于后端系统的可靠性、可扩展性与架构清晰度，覆盖分布式与 AI 原生平台。"
      },
      intro:
        "我是一名 Solution Architect and AI Agent Application Developer，专注于构建可持续演进的后端系统：明确的服务边界、清晰的接口契约、稳健的事件流，以及可观测的运行行为。",
      capabilitiesTitle: "核心能力模块",
      capabilities: [
        "基于边界上下文与 API 契约的微服务架构设计",
        "面向异步处理模式的分布式流程设计",
        "围绕性能、韧性与可维护性的生产级工程落地"
      ],
      currentFocusTitle: "当前重点方向",
      currentFocus: [
        "openTree：具备推理能力的 AI 知识图谱平台",
        "面向生产系统的 LLM 集成",
        "可观测性优先的事件驱动后端基础设施"
      ]
    },
    principles: {
      header: {
        eyebrow: "理念",
        title: "系统设计原则",
        description: "用于指导系统建模、扩展与安全治理的架构模块。"
      },
      items: [
        {
          module: "M-01",
          title: "以架构实现可扩展",
          summary: "通过清晰的领域边界与契约优先接口，让扩展决策保持可预测。"
        },
        {
          module: "M-02",
          title: "事件驱动核心",
          summary: "以事件建模系统行为，提升解耦能力、韧性与可回放性。"
        },
        {
          module: "M-03",
          title: "默认安全",
          summary: "从设计初期就落地最小权限、密钥控制与强认证机制。"
        },
        {
          module: "M-04",
          title: "数据驱动智能",
          summary: "兼顾图数据库、搜索与事务数据，支撑智能化产品能力。"
        },
        {
          module: "M-05",
          title: "内建可观测性",
          summary: "通过指标、链路与日志让分布式系统在生产中可解释、可排障。"
        },
        {
          module: "M-06",
          title: "AI 就绪基础设施",
          summary: "构建可支持模型集成、安全护栏与渐进式发布的基础设施。"
        }
      ]
    },
    stack: {
      header: {
        eyebrow: "技术栈",
        title: "技术能力矩阵",
        description: "覆盖后端系统、交付自动化与 AI 原生架构实施的核心技术。"
      },
      groups: [
        {
          category: "后端",
          items: ["FastAPI", "Node.js", "PostgreSQL", "Redis", "Neo4j", "Elasticsearch"]
        },
        {
          category: "架构",
          items: ["微服务", "分布式系统", "事件驱动架构", "多租户 API"]
        },
        {
          category: "DevOps",
          items: ["Docker", "Docker Compose", "GitHub Actions", "CI/CD", "Git Hooks", "Lint + 密钥扫描"]
        },
        {
          category: "前端",
          items: ["React", "Web Components", "现代 CSS"]
        }
      ]
    },
    systemsUi: {
      header: {
        eyebrow: "系统",
        title: "精选系统项目",
        description: "以架构视角展示项目策略、扩展方案与安全设计要点。"
      },
      labels: {
        problemContext: "问题背景",
        architectureStrategy: "架构策略",
        architectureHighlights: "架构亮点",
        techStack: "技术栈",
        scalabilityApproach: "扩展性方案",
        securityConsiderations: "安全考量"
      },
      buttons: {
        github: "GitHub"
      }
    },
    insights: {
      header: {
        eyebrow: "洞察",
        title: "工程理念 / 技术笔记",
        description: "记录架构取舍、运行经验与后端系统设计思路。"
      },
      items: [
        {
          title: "从功能到系统边界",
          summary: "为何早期边界设计能避免规模增长后的隐性耦合。",
          status: "草稿",
          href: "#"
        },
        {
          title: "事件流即系统记忆",
          summary: "如何用事件日志增强分布式系统的韧性、回放与可观测性。",
          status: "草稿",
          href: "#"
        },
        {
          title: "面向生产的 AI 工作流设计",
          summary: "结合 LLM 服务、缓存与降级策略的实战模式。",
          status: "草稿",
          href: "#"
        }
      ]
    },
    contact: {
      header: {
        eyebrow: "联系",
        title: "一起构建下一代智能平台",
        description: "可合作方向包括解决方案架构、后端系统策略与 AI 原生基础设施。"
      },
      invitation: "如果你的平台需要高韧性架构与生产级交付能力，欢迎联系我。",
      channels: [
        { label: "邮箱", value: "esoteriker.dev@gmail.com", href: "mailto:esoteriker.dev@gmail.com" },
        {
          label: "LinkedIn",
          value: "Haidong Xu",
          href: "https://www.linkedin.com/search/results/all/?keywords=Haidong%20Xu"
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
      title: "Haidong Xu | 解决方案架构师",
      description: "面向微服务、分布式系统与 AI 原生基础设施的赛博风格架构师个人站。",
      url: "https://haidong-dev.com",
      ogImage: "/opengraph-image"
    },
    footer: {
      note: "聚焦后端与分布式工程策略的 AI 原生系统架构面板。"
    }
  },
  de: {
    name: "Haidong Xu",
    github: "https://github.com/Esoteriker",
    title: "Solution Architect and AI Agent Application Developer",
    tagline: "Skalierbare KI-native Systeme für das nächste Jahrzehnt",
    navigation: [
      { label: "Über mich", href: "#about" },
      { label: "Systeme", href: "#systems" },
      { label: "Stack", href: "#stack" },
      { label: "Prinzipien", href: "#principles" },
      { label: "Kontakt", href: "#contact" }
    ],
    hero: {
      systemRole: "KI-Infrastruktur Command Center",
      headlineLeading: "Architektur für",
      headlineEmphasis: "KI-native Systeme",
      headlineTrailing: "im nächsten Jahrzehnt",
      positioningStatement:
        "Ich entwerfe resiliente, sichere und ereignisgetriebene Architekturen, die intelligente Systeme in großem Maßstab tragen.",
      ctas: {
        primary: { label: "Systeme erkunden", href: "#systems" },
        secondary: { label: "Kontakt", href: "#contact" }
      },
      telemetry: ["Microservices", "Verteilte Systeme", "Event-Driven Core", "KI-Infrastruktur"]
    },
    about: {
      header: {
        eyebrow: "Über mich",
        title: "Solution Architect für produktive Systeme",
        description:
          "Backend Engineer mit Fokus auf Zuverlässigkeit, Skalierung und Architekturklarheit in verteilten und KI-nativen Plattformen."
      },
      intro:
        "Ich arbeite als Solution Architect and AI Agent Application Developer und fokussiere mich auf Backend-Systeme, die unter Wachstum stabil bleiben: klare Service-Grenzen, explizite Verträge, robuste Event-Flows und messbares Laufzeitverhalten.",
      capabilitiesTitle: "Kernfähigkeiten",
      capabilities: [
        "Microservice-Architekturen mit Bounded Contexts und API-Verträgen",
        "Design verteilter Abläufe mit asynchronen Verarbeitungsmustern",
        "Produktionshärtung in Bezug auf Performance, Resilienz und Wartbarkeit"
      ],
      currentFocusTitle: "Aktuelle Schwerpunkte",
      currentFocus: [
        "openTree: KI-Wissensgraph mit Reasoning-Workflows",
        "LLM-Integration für produktive Entscheidungsprozesse",
        "Observability-first Infrastruktur für eventgetriebene Backends"
      ]
    },
    principles: {
      header: {
        eyebrow: "Prinzipien",
        title: "System Design Principles",
        description:
          "Architekturmodule, die den Aufbau, die Skalierung und die Absicherung produktiver Systeme steuern."
      },
      items: [
        {
          module: "M-01",
          title: "Skalierbar durch Architektur",
          summary: "Domänengrenzen und Contract-first Schnittstellen machen Skalierungsentscheidungen berechenbar."
        },
        {
          module: "M-02",
          title: "Event-Driven Core",
          summary: "Systemverhalten über Events modellieren, um Entkopplung, Resilienz und Replay zu ermöglichen."
        },
        {
          module: "M-03",
          title: "Secure by Default",
          summary: "Least Privilege, kontrollierte Secrets und starke Authentifizierung von Anfang an."
        },
        {
          module: "M-04",
          title: "Datenzentrierte Intelligenz",
          summary: "Graph-, Search- und transaktionale Workloads kombinieren, um intelligente Produkte zu ermöglichen."
        },
        {
          module: "M-05",
          title: "Observability Built-In",
          summary: "Metriken, Traces und Logs integrieren, damit verteilte Systeme erklärbar bleiben."
        },
        {
          module: "M-06",
          title: "KI-fähige Infrastruktur",
          summary: "Infrastruktur für Modellintegration, Sicherheitsleitplanken und iterativen Rollout bauen."
        }
      ]
    },
    stack: {
      header: {
        eyebrow: "Stack",
        title: "Technologie-Matrix",
        description:
          "Kategorisierter Stack für Backend-Systeme, Delivery-Automatisierung und KI-native Architekturumsetzung."
      },
      groups: [
        {
          category: "Backend",
          items: ["FastAPI", "Node.js", "PostgreSQL", "Redis", "Neo4j", "Elasticsearch"]
        },
        {
          category: "Architektur",
          items: ["Microservices", "Verteilte Systeme", "Event-Driven Architecture", "Multi-Tenant APIs"]
        },
        {
          category: "DevOps",
          items: ["Docker", "Docker Compose", "GitHub Actions", "CI/CD", "Git Hooks", "Lint + Secret Scan"]
        },
        {
          category: "Frontend",
          items: ["React", "Web Components", "Modern CSS"]
        }
      ]
    },
    systemsUi: {
      header: {
        eyebrow: "Systeme",
        title: "Ausgewählte Systeme",
        description:
          "Architekturfokussierte Projekteinblicke mit Strategie, Skalierungsansatz und Sicherheitsaspekten."
      },
      labels: {
        problemContext: "Problemkontext",
        architectureStrategy: "Architekturstrategie",
        architectureHighlights: "Architektur-Highlights",
        techStack: "Tech Stack",
        scalabilityApproach: "Skalierungsansatz",
        securityConsiderations: "Sicherheitsaspekte"
      },
      buttons: {
        github: "GitHub"
      }
    },
    insights: {
      header: {
        eyebrow: "Insights",
        title: "Engineering Philosophy / Insights",
        description:
          "Architekturnotizen zu Trade-offs, Betriebserfahrungen und Backend-Strategieentscheidungen."
      },
      items: [
        {
          title: "Von Features zu Systemgrenzen",
          summary: "Warum frühes Boundary-Design versteckte Kopplung in skalierenden Plattformen verhindert.",
          status: "Entwurf",
          href: "#"
        },
        {
          title: "Event Streams als operatives Gedächtnis",
          summary: "Wie Event-Logs Resilienz, Replay und Observability in verteilten Systemen stärken.",
          status: "Entwurf",
          href: "#"
        },
        {
          title: "KI-Workflows für Produktion entwerfen",
          summary: "Muster für LLM-Services mit Guardrails, Caching und Fallback-Pfaden.",
          status: "Entwurf",
          href: "#"
        }
      ]
    },
    contact: {
      header: {
        eyebrow: "Kontakt",
        title: "Gemeinsam die nächste intelligente Plattform bauen",
        description:
          "Offen für Zusammenarbeit bei Solution Architecture, Backend-Strategie und KI-nativer Infrastruktur."
      },
      invitation:
        "Wenn Ihre Plattform resiliente Architektur und produktionsreife Umsetzung braucht, lassen Sie uns sprechen.",
      channels: [
        { label: "E-Mail", value: "esoteriker.dev@gmail.com", href: "mailto:esoteriker.dev@gmail.com" },
        {
          label: "LinkedIn",
          value: "Haidong Xu",
          href: "https://www.linkedin.com/search/results/all/?keywords=Haidong%20Xu"
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
      title: "Haidong Xu | Solution Architect",
      description:
        "Cyberpunk-inspirierte Website für einen Solution Architect mit Fokus auf Microservices, verteilte Systeme und KI-native Infrastruktur.",
      url: "https://haidong-dev.com",
      ogImage: "/opengraph-image"
    },
    footer: {
      note: "KI-native Architekturzentrale für Backend- und Distributed-Engineering-Strategien."
    }
  }
};

export const profileData = profileDataByLocale[defaultLocale];
