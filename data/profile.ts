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
      caseStudy: string;
      caseStudySoon: string;
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

export const profileData: ProfileData = {
  name: "Haidong Xu",
  github: "https://github.com/Esoteriker",
  title: "Solution Architect | Backend Systems Engineer",
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
    telemetry: [
      "Microservices",
      "Distributed Systems",
      "Event-Driven Core",
      "AI Infrastructure"
    ]
  },
  about: {
    header: {
      eyebrow: "About",
      title: "Solution Architect for Production Systems",
      description:
        "Backend systems engineer focused on reliability, scale, and architecture clarity across distributed and AI-native platforms."
    },
    intro:
      "My work centers on designing backend systems that remain operable under growth: clear service boundaries, explicit contracts, resilient event flows, and measurable runtime behavior.",
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
        category: "Languages",
        items: ["Python", "JavaScript", "TypeScript", "HTML", "CSS"]
      },
      {
        category: "Backend",
        items: ["FastAPI", "Node.js", "PostgreSQL", "Redis", "Neo4j", "Elasticsearch"]
      },
      {
        category: "Architecture",
        items: ["Microservices", "Distributed Systems", "Event-Driven Architecture", "Multi-tenant APIs"]
      },
      {
        category: "Security",
        items: ["JWT", "API Key Auth", "Encryption Practices", "Secret Management"]
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
      github: "GitHub",
      caseStudy: "Case Study",
      caseStudySoon: "Case Study Soon",
      live: "Live"
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
    invitation: "If your platform needs resilient architecture and production-grade execution, let's connect.",
    channels: [
      {
        label: "Email",
        value: "esoteriker.dev@gmail.com",
        href: "mailto:esoteriker.dev@gmail.com"
      },
      {
        label: "LinkedIn",
        value: "Haidong Xu",
        href: "https://www.linkedin.com/search/results/all/?keywords=Haidong%20Xu"
      },
      {
        label: "Website",
        value: "haidong-dev.com",
        href: "https://haidong-dev.com"
      }
    ]
  },
  labels: {
    navbarGithub: "GitHub",
    readInsight: "Read Insight",
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
};
