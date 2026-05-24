import type { Locale } from "@/data/profile";

export type Project = {
  name: string;
  subtitle: string;
  oneLineValue: string;
  tags: string[];
  myRole: string;
  outcome: string;
  problemContext: string;
  architectureStrategy: string;
  architectureHighlights: string[];
  techStack: string[];
  scalabilityApproach: string;
  securityConsiderations: string;
  githubUrl?: string;
  liveUrl?: string;
  caseStudyUrl?: string;
};

export const projectsDataByLocale: Record<Locale, Project[]> = {
  en: [
    {
      name: "WFP Hunger-Map",
      subtitle: "Full-stack AI-assisted Data Product",
      oneLineValue: "Turns complex hunger and food-security data into a clearer web experience with AI-assisted explanation flows.",
      tags: ["Next.js", "TypeScript", "AI API", "Data Workflows"],
      myRole: "Full-stack engineer across presentation, business logic, API integration, and data-access boundaries.",
      outcome: "Improved clarity and resilience for data-rich user workflows by combining structured APIs with AI-assisted summaries and fallbacks.",
      problemContext:
        "Data-rich public workflows need fast, understandable, and reliable interactions even when upstream datasets or AI services are unstable.",
      architectureStrategy:
        "Built a Next.js and TypeScript application with clean boundaries across UI, business logic, API integration, data aggregation, and external AI-service calls.",
      architectureHighlights: [
        "Data aggregation flows for multi-source product views",
        "AI-assisted explanation and summary enhancement through external model APIs",
        "Caching and request-response optimization on critical paths",
        "Rate limiting, retry, and graceful degradation for unstable upstream services",
        "Clear separation between presentation, business logic, API integration, and data access"
      ],
      techStack: ["Next.js", "TypeScript", "AI API", "REST APIs", "Caching", "Data Aggregation"],
      scalabilityApproach:
        "Critical-path caching, rate limiting, and boundary separation reduce coupling and keep the product responsive under variable traffic and upstream latency.",
      securityConsiderations:
        "External service access is isolated behind backend/API boundaries, with careful degradation paths when AI providers or data sources fail.",
      liveUrl: "https://www.wfp.org/hunger-map"
    },
    {
      name: "EDA Task Orchestration Platform",
      subtitle: "Backend Services for Long-running Compute Jobs",
      oneLineValue: "Unifies web clients and multiple EDA tool services through secure async job orchestration.",
      tags: ["Backend Services", "Docker", "Async Jobs", "Authorization"],
      myRole: "Backend engineer responsible for service boundaries, task execution flows, status tracking, and secure integration behavior.",
      outcome: "Made long-running compute workflows more transparent and reusable across users by exposing unified status, logs, and access controls.",
      problemContext:
        "Engineering teams needed one interface for launching, tracking, and debugging long-running EDA tool jobs across multiple backend services.",
      architectureStrategy:
        "Designed modular backend services for users, projects, tasks, and logs, then connected them to a web frontend and EDA tools through async execution and Docker-based deployment.",
      architectureHighlights: [
        "Asynchronous job execution for long-running tool workloads",
        "Status tracking and log feedback for transparent user progress",
        "Authorization controls for data isolation and secure job access",
        "Modular backend domains for user, project, task, and logging behavior",
        "Docker-based reproducible integration workflows"
      ],
      techStack: ["Backend Services", "REST APIs", "Docker", "Async Jobs", "Authorization", "Logging"],
      scalabilityApproach:
        "Task execution and status feedback are separated so long-running jobs can continue without blocking the user-facing workflow.",
      securityConsiderations:
        "Authorization, auditable operations, and data isolation protect multi-user execution while keeping debugging information visible to the right users."
    },
    {
      name: "Internal NPM UI Component Package",
      subtitle: "Developer-facing Frontend Infrastructure",
      oneLineValue: "Standardizes typed UI primitives and visualization modules for data-heavy product teams.",
      tags: ["TypeScript", "NPM Package", "Canvas", "Developer Experience"],
      myRole: "Frontend platform engineer defining component APIs, release flow, usage guidelines, and adoption conventions.",
      outcome: "Reduced duplicate UI work and improved integration consistency across teams, including an 18% runtime performance improvement on key views.",
      problemContext:
        "Multiple product modules needed reusable UI and visualization patterns without repeatedly rebuilding component APIs and data-flow conventions.",
      architectureStrategy:
        "Published a typed internal NPM package with reusable design primitives, Canvas-based visualization modules, API contracts, documentation, and release conventions.",
      architectureHighlights: [
        "Typed TypeScript APIs for predictable component adoption",
        "Reusable Canvas-based visualization components with unified interfaces",
        "Usage guidelines and integration conventions for product-team consumers",
        "Rendering and data-flow refactoring for performance-critical views",
        "Legacy module restructuring for stronger testability and maintainability"
      ],
      techStack: ["TypeScript", "NPM", "Canvas", "Data Visualization", "Documentation", "UI Performance"],
      scalabilityApproach:
        "Package-level interfaces and release conventions let multiple teams adopt shared UI behavior without duplicating implementation details.",
      securityConsiderations:
        "Typed API contracts, documented integration paths, and reviewable releases reduce accidental misuse across internal consumers."
    }
  ],
  zh: [
    {
      name: "WFP Hunger-Map",
      subtitle: "全栈 AI 辅助数据产品",
      oneLineValue: "将复杂的饥饿与粮食安全数据组织成更清晰的 Web 体验，并加入 AI 辅助解释流程。",
      tags: ["Next.js", "TypeScript", "AI API", "数据工作流"],
      myRole: "负责展示层、业务逻辑、API 集成与数据访问边界的全栈工程实现。",
      outcome: "通过结构化 API、AI 辅助摘要与回退策略，提升数据密集型用户流程的清晰度与韧性。",
      problemContext: "数据密集型公共产品需要快速、易理解且可靠的交互，即使上游数据或 AI 服务不稳定也要保持可用。",
      architectureStrategy:
        "基于 Next.js 与 TypeScript 构建应用，在 UI、业务逻辑、API 集成、数据聚合与外部 AI 服务调用之间保持清晰边界。",
      architectureHighlights: [
        "面向多来源产品视图的数据聚合流程",
        "通过外部模型 API 增强解释与摘要体验",
        "关键路径缓存与请求响应流程优化",
        "针对上游服务不稳定性的限流、重试与优雅降级",
        "展示层、业务逻辑、API 集成与数据访问的清晰分层"
      ],
      techStack: ["Next.js", "TypeScript", "AI API", "REST APIs", "缓存", "数据聚合"],
      scalabilityApproach: "关键路径缓存、限流与边界分离减少耦合，在流量和上游延迟变化时保持产品响应性。",
      securityConsiderations: "外部服务访问被隔离在后端/API 边界之后，并为 AI 服务或数据源失败准备可控降级路径。",
      liveUrl: "https://www.wfp.org/hunger-map"
    },
    {
      name: "EDA 任务编排平台",
      subtitle: "面向长耗时计算任务的后端服务",
      oneLineValue: "通过安全的异步任务编排，将 Web 客户端与多个 EDA 工具服务统一起来。",
      tags: ["后端服务", "Docker", "异步任务", "权限控制"],
      myRole: "负责服务边界、任务执行流程、状态追踪与安全集成行为的后端工程实现。",
      outcome: "通过统一状态、日志与访问控制，让长耗时计算工作流对多用户更透明、更可复用。",
      problemContext: "工程团队需要一个统一入口来启动、追踪和调试跨多个后端服务的长耗时 EDA 工具任务。",
      architectureStrategy:
        "围绕用户、项目、任务与日志设计模块化后端服务，并通过异步执行与 Docker 化部署连接 Web 前端和 EDA 工具。",
      architectureHighlights: [
        "支持长耗时工具任务的异步执行",
        "通过状态追踪与日志反馈让用户进度透明",
        "用权限控制保障数据隔离与任务访问安全",
        "按 user、project、task、logging 拆分后端领域",
        "基于 Docker 的可复现集成工作流"
      ],
      techStack: ["后端服务", "REST APIs", "Docker", "异步任务", "权限控制", "日志"],
      scalabilityApproach: "任务执行与状态反馈分离，使长耗时任务不阻塞用户可见工作流。",
      securityConsiderations: "权限控制、可审计操作与数据隔离保障多用户执行安全，同时让合适的用户看到调试信息。"
    },
    {
      name: "内部 NPM UI 组件包",
      subtitle: "面向开发者的前端基础设施",
      oneLineValue: "为数据密集型产品团队标准化类型化 UI 基础组件与可视化模块。",
      tags: ["TypeScript", "NPM Package", "Canvas", "开发者体验"],
      myRole: "负责组件 API、发布流程、使用指南与采用规范的前端平台工程实现。",
      outcome: "减少重复 UI 实现、提升跨团队集成一致性，并在关键视图取得 18% 运行时性能提升。",
      problemContext: "多个产品模块需要复用 UI 与可视化模式，而不是反复重建组件 API 和数据流约定。",
      architectureStrategy: "发布类型化内部 NPM 包，提供设计基础组件、Canvas 可视化模块、API 契约、文档与发布约定。",
      architectureHighlights: [
        "类型化 TypeScript API 让组件采用更可预测",
        "统一接口的可复用 Canvas 可视化组件",
        "面向产品团队消费者的使用指南与集成规范",
        "为性能关键视图重构渲染与数据流",
        "重组遗留模块以提升可测试性与可维护性"
      ],
      techStack: ["TypeScript", "NPM", "Canvas", "数据可视化", "文档", "UI 性能"],
      scalabilityApproach: "通过包级接口和发布规范，让多个团队复用一致 UI 行为而不复制实现细节。",
      securityConsiderations: "类型化 API 契约、文档化集成路径与可 review 的发布流程，降低内部消费者误用风险。"
    }
  ],
  de: [
    {
      name: "WFP Hunger-Map",
      subtitle: "Full-Stack AI-assisted Data Product",
      oneLineValue: "Macht komplexe Hunger- und Food-Security-Daten durch klarere Web-Workflows und AI-Erklärungen verständlicher.",
      tags: ["Next.js", "TypeScript", "AI API", "Data Workflows"],
      myRole: "Full-Stack Engineer über Presentation, Business Logic, API Integration und Data-Access-Grenzen.",
      outcome: "Verbesserte Klarheit und Resilienz datenintensiver Workflows durch strukturierte APIs, AI-gestützte Zusammenfassungen und Fallbacks.",
      problemContext:
        "Datenintensive öffentliche Workflows brauchen schnelle, verständliche und zuverlässige Interaktionen, auch wenn Datenquellen oder AI-Services instabil sind.",
      architectureStrategy:
        "Next.js- und TypeScript-Anwendung mit klaren Grenzen zwischen UI, Business Logic, API Integration, Data Aggregation und externen AI-Service-Calls.",
      architectureHighlights: [
        "Data Aggregation Flows für Multi-Source Product Views",
        "AI-gestützte Erklärungs- und Summary-Features über externe Modell-APIs",
        "Caching und Request-Response-Optimierung auf kritischen Pfaden",
        "Rate Limiting, Retry und Graceful Degradation für instabile Upstream-Services",
        "Klare Trennung von Presentation, Business Logic, API Integration und Data Access"
      ],
      techStack: ["Next.js", "TypeScript", "AI API", "REST APIs", "Caching", "Data Aggregation"],
      scalabilityApproach:
        "Critical-Path Caching, Rate Limiting und Boundary Separation reduzieren Kopplung und halten das Produkt bei variabler Latenz responsiv.",
      securityConsiderations:
        "Externe Service-Zugriffe bleiben hinter Backend/API-Grenzen isoliert, mit kontrollierten Degradation-Pfaden bei Provider- oder Datenfehlern.",
      liveUrl: "https://www.wfp.org/hunger-map"
    },
    {
      name: "EDA Task Orchestration Platform",
      subtitle: "Backend Services for Long-running Compute Jobs",
      oneLineValue: "Vereinheitlicht Web-Clients und mehrere EDA-Tool-Services über sichere Async-Job-Orchestrierung.",
      tags: ["Backend Services", "Docker", "Async Jobs", "Authorization"],
      myRole: "Backend Engineer für Service Boundaries, Task Execution Flows, Status Tracking und sichere Integration.",
      outcome: "Machte Long-Running Compute Workflows durch einheitliche Status-, Log- und Access-Control-Flows transparenter und wiederverwendbarer.",
      problemContext:
        "Engineering-Teams brauchten eine Oberfläche, um Long-Running EDA Tool Jobs über mehrere Backend-Services zu starten, zu verfolgen und zu debuggen.",
      architectureStrategy:
        "Modulare Backend-Services für User, Projects, Tasks und Logs, verbunden mit Web Frontend und EDA Tools über Async Execution und Docker-basierte Deployments.",
      architectureHighlights: [
        "Asynchrone Job-Ausführung für Long-Running Tool Workloads",
        "Status Tracking und Log Feedback für transparenten Fortschritt",
        "Authorization Controls für Data Isolation und sicheren Job Access",
        "Modulare Backend-Domänen für User, Project, Task und Logging",
        "Docker-basierte reproduzierbare Integration Workflows"
      ],
      techStack: ["Backend Services", "REST APIs", "Docker", "Async Jobs", "Authorization", "Logging"],
      scalabilityApproach:
        "Task Execution und Status Feedback sind getrennt, damit Long-Running Jobs den nutzerseitigen Workflow nicht blockieren.",
      securityConsiderations:
        "Authorization, auditable Operations und Data Isolation schützen Multi-User Execution, während relevante Debug-Informationen sichtbar bleiben."
    },
    {
      name: "Internal NPM UI Component Package",
      subtitle: "Developer-facing Frontend Infrastructure",
      oneLineValue: "Standardisiert typisierte UI-Primitives und Visualisierungsmodule für datenintensive Produktteams.",
      tags: ["TypeScript", "NPM Package", "Canvas", "Developer Experience"],
      myRole: "Frontend Platform Engineer für Component APIs, Release Flow, Usage Guidelines und Adoption Conventions.",
      outcome: "Reduzierte doppelte UI-Arbeit, verbesserte Integrationskonsistenz und erreichte 18% Runtime Performance Improvement auf Key Views.",
      problemContext:
        "Mehrere Produktmodule benötigten wiederverwendbare UI- und Visualisierungspatterns ohne wiederholtes Nachbauen von Component APIs und Data-Flow-Konventionen.",
      architectureStrategy:
        "Veröffentlichung eines typisierten internen NPM Packages mit Design Primitives, Canvas-Visualisierung, API Contracts, Dokumentation und Release Conventions.",
      architectureHighlights: [
        "Typisierte TypeScript APIs für vorhersehbare Component Adoption",
        "Wiederverwendbare Canvas-basierte Visualisierungskomponenten mit einheitlichen Interfaces",
        "Usage Guidelines und Integration Conventions für Produktteam-Consumer",
        "Rendering- und Data-Flow-Refactoring für performancekritische Views",
        "Legacy Module Restructuring für bessere Testbarkeit und Wartbarkeit"
      ],
      techStack: ["TypeScript", "NPM", "Canvas", "Data Visualization", "Documentation", "UI Performance"],
      scalabilityApproach:
        "Package-Level Interfaces und Release Conventions ermöglichen mehreren Teams gemeinsame UI-Nutzung ohne Implementierungsduplikate.",
      securityConsiderations:
        "Typisierte API Contracts, dokumentierte Integrationspfade und reviewbare Releases reduzieren Fehlverwendung durch interne Consumer."
    }
  ]
};

export const projectsData = projectsDataByLocale.en;
