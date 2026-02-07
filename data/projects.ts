import type { Locale } from "@/data/profile";

export type Project = {
  name: string;
  subtitle: string;
  problemContext: string;
  architectureStrategy: string;
  architectureHighlights: string[];
  techStack: string[];
  scalabilityApproach: string;
  securityConsiderations: string;
  githubUrl: string;
  liveUrl?: string;
  caseStudyUrl?: string;
};

export const projectsDataByLocale: Record<Locale, Project[]> = {
  en: [
    {
      name: "openTree",
      subtitle: "AI Knowledge Graph Platform",
      problemContext:
        "Unstructured knowledge from notes, meetings, and interviews lacked traceable structure and cross-source reasoning capability.",
      architectureStrategy:
        "Designed a 4-service microservices pipeline: ingestion -> NLP parsing -> graph storage -> suggestion engine, with asynchronous orchestration between services.",
      architectureHighlights: [
        "Asynchronous processing flow for ingestion and NLP stages",
        "Neo4j graph modeling for concept relationships and reasoning paths",
        "Elasticsearch full-text retrieval for hybrid search workflows",
        "Redis caching for low-latency access on repeated query paths",
        "Evidence tracking layer for traceable knowledge assertions",
        "Knowledge reasoning layer for context-aware suggestion generation"
      ],
      techStack: ["Python", "FastAPI", "PostgreSQL", "Neo4j", "Elasticsearch", "Redis"],
      scalabilityApproach:
        "Service isolation allows independent scaling of NLP and search-intensive workloads; async pipeline smooths throughput under burst traffic.",
      securityConsiderations:
        "Scoped service-to-service access, environment-protected secrets, and controlled data lineage for AI-generated knowledge artifacts.",
      githubUrl: "https://github.com/Esoteriker/openTree",
      caseStudyUrl: "https://github.com/Esoteriker/openTree"
    },
    {
      name: "clouDA-backup-fastapi",
      subtitle: "Production Backend System",
      problemContext:
        "A backend platform required reproducible deployment, robust data persistence, and secure environment-specific configuration.",
      architectureStrategy:
        "Implemented FastAPI with PostgreSQL and SQLAlchemy using Docker Compose orchestration, migration workflows, and test coverage for release confidence.",
      architectureHighlights: [
        "FastAPI service layer for maintainable domain endpoints",
        "PostgreSQL persistence with migration-ready schema evolution",
        "Docker Compose orchestration for deterministic runtime environments",
        "Environment-scoped configuration and secret injection",
        "Automated test coverage supporting regression control"
      ],
      techStack: ["FastAPI", "PostgreSQL", "SQLAlchemy", "Docker", "Docker Compose"],
      scalabilityApproach:
        "Containerized deployment and clear API boundaries allow horizontal service growth and isolated component upgrades.",
      securityConsiderations:
        "Environment-based secret management, strict configuration boundaries, and secure database access patterns.",
      githubUrl: "https://github.com/Esoteriker/clouDA-backup-fastapi",
      caseStudyUrl: "https://github.com/Esoteriker/clouDA-backup-fastapi"
    },
    {
      name: "pj-reactjs-petmate",
      subtitle: "Full-stack System",
      problemContext:
        "A product workflow needed a responsive user interface while maintaining a reliable backend API foundation for daily operations.",
      architectureStrategy:
        "Built a React frontend with Node.js backend and REST API integration, combined with a practical deployment pipeline for consistent delivery.",
      architectureHighlights: [
        "React interface for responsive user experiences",
        "Node backend exposing clean REST API contracts",
        "Frontend/backend separation for independent iteration cycles",
        "Deployment pipeline oriented for stable production rollout"
      ],
      techStack: ["React", "Node.js", "REST API", "JavaScript", "Responsive UI"],
      scalabilityApproach:
        "Decoupled UI and API layers support independent scaling and simplify ongoing feature evolution.",
      securityConsiderations:
        "Validated request handling, controlled API boundaries, and deployment-time configuration hygiene.",
      githubUrl: "https://github.com/Esoteriker/pj-reactjs-petmate",
      liveUrl: "https://esoteriker.github.io/pj-reactjs-petmate",
      caseStudyUrl: "https://github.com/Esoteriker/pj-reactjs-petmate"
    }
  ],
  zh: [
    {
      name: "openTree",
      subtitle: "AI 知识图谱平台",
      problemContext: "来自笔记、会议与访谈的非结构化信息难以追踪关系，跨来源推理能力不足。",
      architectureStrategy:
        "构建 4 服务微服务流水线：ingestion -> NLP parsing -> graph storage -> suggestion engine，并以异步编排连接各服务。",
      architectureHighlights: [
        "面向 ingestion 与 NLP 阶段的异步处理流程",
        "使用 Neo4j 进行概念关系与推理路径建模",
        "借助 Elasticsearch 实现全文检索与混合搜索",
        "使用 Redis 缓存高频查询路径，降低延迟",
        "证据追踪层保障知识断言可追溯",
        "知识推理层支持上下文感知建议生成"
      ],
      techStack: ["Python", "FastAPI", "PostgreSQL", "Neo4j", "Elasticsearch", "Redis"],
      scalabilityApproach: "通过服务隔离实现 NLP 与检索负载独立扩展，异步流水线可平滑处理突发流量。",
      securityConsiderations: "采用服务间最小权限访问、环境级密钥保护与 AI 生成内容的数据链路治理。",
      githubUrl: "https://github.com/Esoteriker/openTree",
      caseStudyUrl: "https://github.com/Esoteriker/openTree"
    },
    {
      name: "clouDA-backup-fastapi",
      subtitle: "生产级后端系统",
      problemContext: "后端平台需要可复现部署、稳健的数据持久化能力与按环境隔离的安全配置。",
      architectureStrategy:
        "基于 FastAPI + PostgreSQL + SQLAlchemy，结合 Docker Compose 编排、迁移策略与测试覆盖确保发布质量。",
      architectureHighlights: [
        "FastAPI 服务层实现清晰的领域接口",
        "PostgreSQL 持久化与可迁移的 schema 演进",
        "Docker Compose 提供确定性的运行环境",
        "环境隔离配置与密钥注入机制",
        "自动化测试覆盖支持回归控制"
      ],
      techStack: ["FastAPI", "PostgreSQL", "SQLAlchemy", "Docker", "Docker Compose"],
      scalabilityApproach: "容器化部署与清晰 API 边界支持水平扩展，并降低组件独立升级成本。",
      securityConsiderations: "环境级密钥管理、严格配置边界与安全数据库访问策略。",
      githubUrl: "https://github.com/Esoteriker/clouDA-backup-fastapi",
      caseStudyUrl: "https://github.com/Esoteriker/clouDA-backup-fastapi"
    },
    {
      name: "pj-reactjs-petmate",
      subtitle: "全栈系统",
      problemContext: "产品场景需要响应式前端体验，同时要求后端 API 在日常业务中稳定可靠。",
      architectureStrategy: "构建 React 前端与 Node.js 后端，通过 REST API 连接，并配套持续部署流程。",
      architectureHighlights: [
        "React 提供响应式交互体验",
        "Node 后端提供清晰 REST API 契约",
        "前后端职责分离，支持独立迭代",
        "部署流水线保障稳定发布"
      ],
      techStack: ["React", "Node.js", "REST API", "JavaScript", "Responsive UI"],
      scalabilityApproach: "前后端解耦支持独立扩展，有利于持续功能演进。",
      securityConsiderations: "请求校验、API 边界控制与部署阶段配置治理。",
      githubUrl: "https://github.com/Esoteriker/pj-reactjs-petmate",
      liveUrl: "https://esoteriker.github.io/pj-reactjs-petmate",
      caseStudyUrl: "https://github.com/Esoteriker/pj-reactjs-petmate"
    }
  ],
  de: [
    {
      name: "openTree",
      subtitle: "KI-Wissensgraph Plattform",
      problemContext:
        "Unstrukturierte Inhalte aus Notizen, Meetings und Interviews waren schwer nachverfolgbar und boten kaum quellübergreifende Reasoning-Fähigkeit.",
      architectureStrategy:
        "Entwurf einer 4-Service-Microservice-Pipeline: ingestion -> NLP parsing -> graph storage -> suggestion engine, orchestriert über asynchrone Verarbeitung.",
      architectureHighlights: [
        "Asynchroner Verarbeitungsfluss für Ingestion und NLP",
        "Neo4j-Modellierung für Konzeptbeziehungen und Reasoning-Pfade",
        "Elasticsearch für Full-Text- und Hybrid-Search",
        "Redis-Caching für niedrige Latenz auf häufigen Abfragepfaden",
        "Evidence-Tracking für nachvollziehbare Wissensbehauptungen",
        "Reasoning-Layer für kontextbasierte Vorschlagsgenerierung"
      ],
      techStack: ["Python", "FastAPI", "PostgreSQL", "Neo4j", "Elasticsearch", "Redis"],
      scalabilityApproach:
        "Service-Isolation erlaubt unabhängiges Skalieren von NLP- und Search-Workloads; die asynchrone Pipeline glättet Lastspitzen.",
      securityConsiderations:
        "Abgesicherter Service-to-Service Zugriff, umgebungsbasierte Secret-Kontrolle und kontrollierte Datenherkunft für KI-generierte Inhalte.",
      githubUrl: "https://github.com/Esoteriker/openTree",
      caseStudyUrl: "https://github.com/Esoteriker/openTree"
    },
    {
      name: "clouDA-backup-fastapi",
      subtitle: "Produktives Backend-System",
      problemContext:
        "Eine Backend-Plattform benötigte reproduzierbare Deployments, robuste Persistenz und sichere, umgebungsspezifische Konfiguration.",
      architectureStrategy:
        "Umsetzung mit FastAPI, PostgreSQL und SQLAlchemy inkl. Docker-Compose-Orchestrierung, Migrationsstrategie und Testabdeckung für zuverlässige Releases.",
      architectureHighlights: [
        "FastAPI-Service-Layer mit klarer Domänenstruktur",
        "PostgreSQL-Persistenz mit migrationsfähiger Schema-Evolution",
        "Deterministische Laufzeitumgebung durch Docker Compose",
        "Umgebungsbasierte Konfiguration und Secret-Injektion",
        "Automatisierte Tests zur Absicherung gegen Regressionen"
      ],
      techStack: ["FastAPI", "PostgreSQL", "SQLAlchemy", "Docker", "Docker Compose"],
      scalabilityApproach:
        "Containerisierte Auslieferung und klare API-Grenzen ermöglichen horizontale Skalierung und isolierte Upgrades.",
      securityConsiderations:
        "Umgebungsbasierte Secret-Verwaltung, strikte Konfigurationsgrenzen und sichere Datenbankzugriffsmuster.",
      githubUrl: "https://github.com/Esoteriker/clouDA-backup-fastapi",
      caseStudyUrl: "https://github.com/Esoteriker/clouDA-backup-fastapi"
    },
    {
      name: "pj-reactjs-petmate",
      subtitle: "Full-Stack-System",
      problemContext:
        "Die Anwendung brauchte eine responsive UI und gleichzeitig eine zuverlässige Backend-API für den täglichen Betrieb.",
      architectureStrategy:
        "React-Frontend mit Node.js-Backend und REST-API-Anbindung, ergänzt durch eine stabile Deployment-Pipeline.",
      architectureHighlights: [
        "Responsive UX mit React",
        "Node-Backend mit klaren REST-API-Verträgen",
        "Saubere Trennung von Frontend- und Backend-Verantwortung",
        "Deployment-Pipeline für konsistente Releases"
      ],
      techStack: ["React", "Node.js", "REST API", "JavaScript", "Responsive UI"],
      scalabilityApproach:
        "Entkoppelte UI- und API-Schichten unterstützen unabhängige Skalierung und schnellere Weiterentwicklung.",
      securityConsiderations:
        "Validierte Request-Verarbeitung, kontrollierte API-Grenzen und sichere Konfigurationspraxis im Deployment.",
      githubUrl: "https://github.com/Esoteriker/pj-reactjs-petmate",
      liveUrl: "https://esoteriker.github.io/pj-reactjs-petmate",
      caseStudyUrl: "https://github.com/Esoteriker/pj-reactjs-petmate"
    }
  ]
};

export const projectsData = projectsDataByLocale.en;
