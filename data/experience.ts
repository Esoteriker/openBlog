import type { Locale, SectionHeaderContent } from "@/data/profile";

export type WorkExperienceItem = {
  name: string;
  role: string;
  context: string;
  impact: string;
  highlights: string[];
  tech: string[];
};

export type WorkExperienceSection = {
  header: SectionHeaderContent;
  labels: {
    role: string;
    impact: string;
  };
  items: WorkExperienceItem[];
};

export const workExperienceByLocale: Record<Locale, WorkExperienceSection> = {
  en: {
    header: {
      eyebrow: "Experience",
      title: "Work Experience",
      description: "Resume-backed delivery work across AI integrations, backend APIs, frontend product workflows, and developer-facing packages."
    },
    labels: {
      role: "Role",
      impact: "Impact"
    },
    items: [
      {
        name: "Siemens Digital Industries Software",
        role: "Software Engineer, Full-time | 08.2022 - Present | Göttingen, Germany",
        context:
          "Delivering production features for an industrial testing platform across TypeScript frontend modules, Java backend services, REST APIs, and data-heavy engineering workflows.",
        impact:
          "Improved product reliability by clarifying API contracts, hardening long-running job flows, and connecting AI-assisted services to internal product workflows.",
        highlights: [
          "Integrated external model APIs with internal services for retrieval, explanation, and report-generation scenarios",
          "Designed backend APIs for web and mobile clients with clear service boundaries, error behavior, and ownership",
          "Built async task-processing flows with retry, timeout, error propagation, status tracking, and recoverable execution paths",
          "Improved debugging by analyzing logs, dependency chains, service interactions, and user impact during production investigations",
          "Drove Cypress regression coverage, CI quality gates, API reviews, release workflows, and production issue triage"
        ],
        tech: ["TypeScript", "Java", "REST APIs", "AI API Integration", "Async Jobs", "Cypress", "CI/CD"]
      },
      {
        name: "Internal NPM UI Component Package",
        role: "Software Engineer, Part-time | 10.2021 - 08.2022",
        context:
          "Built and published a typed internal UI component library for data-heavy enterprise applications, including reusable design primitives and product-team integration conventions.",
        impact:
          "Reduced duplicate frontend implementation work and improved adoption consistency across product teams while raising visualization performance on key views.",
        highlights: [
          "Defined component API contracts, state patterns, usage guidelines, and package release flow",
          "Maintained reusable Canvas-based visualization components with unified interfaces and coding conventions",
          "Optimized rendering and data-flow pipelines, delivering an 18% runtime performance improvement on critical views",
          "Refactored legacy modules into cleaner layered structures for better testability and maintainability"
        ],
        tech: ["TypeScript", "NPM Packages", "Canvas", "Data Visualization", "Developer Experience", "Documentation"]
      }
    ]
  },
  zh: {
    header: {
      eyebrow: "经历",
      title: "工作经历",
      description: "基于最新英文简历同步，覆盖 AI 集成、后端 API、前端产品工作流与开发者包。"
    },
    labels: {
      role: "角色",
      impact: "业务价值"
    },
    items: [
      {
        name: "Siemens Digital Industries Software",
        role: "Software Engineer，全职 | 08.2022 - 至今 | Göttingen, Germany",
        context: "为工业测试平台交付生产功能，覆盖 TypeScript 前端模块、Java 后端服务、REST API 与数据密集型工程工作流。",
        impact: "通过明确 API 契约、加固长任务流程，并将 AI 辅助服务接入内部产品工作流，提升产品可靠性。",
        highlights: [
          "集成外部模型 API 与内部服务，支持检索、解释与报告生成场景",
          "为 Web 与移动客户端设计后端 API，明确服务边界、错误行为与集成责任",
          "构建带重试、超时、错误传播、状态追踪与可恢复路径的异步任务流程",
          "通过日志、依赖链、服务交互与用户影响分析改进生产问题调试",
          "推进 Cypress 回归覆盖、CI 质量门、API review、发布流程与线上问题排障"
        ],
        tech: ["TypeScript", "Java", "REST APIs", "AI API 集成", "异步任务", "Cypress", "CI/CD"]
      },
      {
        name: "内部 NPM UI 组件包",
        role: "Software Engineer，兼职 | 10.2021 - 08.2022",
        context: "为数据密集型企业应用构建并发布类型化内部 UI 组件库，包含可复用设计基础、发布流程与团队集成规范。",
        impact: "减少跨产品团队的重复前端实现，提高组件采用一致性，并在关键视图上提升可视化性能。",
        highlights: [
          "定义组件 API 契约、状态模式、使用规范与包发布流程",
          "维护基于 Canvas 的可复用可视化组件，统一接口与编码约定",
          "优化渲染与数据流管线，使关键视图运行时性能提升 18%",
          "将遗留模块重构为更清晰的分层结构，提升可测试性与可维护性"
        ],
        tech: ["TypeScript", "NPM Packages", "Canvas", "数据可视化", "开发者体验", "文档"]
      }
    ]
  },
  de: {
    header: {
      eyebrow: "Erfahrung",
      title: "Berufserfahrung",
      description:
        "Lebenslaufbasierte Delivery-Arbeit über AI-Integrationen, Backend APIs, Frontend-Workflows und Developer Packages."
    },
    labels: {
      role: "Rolle",
      impact: "Wirkung"
    },
    items: [
      {
        name: "Siemens Digital Industries Software",
        role: "Software Engineer, Vollzeit | 08.2022 - Heute | Göttingen, Deutschland",
        context:
          "Liefere produktive Features für eine industrielle Testplattform über TypeScript-Frontendmodule, Java-Backendservices, REST APIs und datenintensive Engineering-Workflows.",
        impact:
          "Verbesserte Produktzuverlässigkeit durch klare API-Verträge, robustere Long-Running Jobs und AI-gestützte Services in internen Produktworkflows.",
        highlights: [
          "Externe Modell-APIs mit internen Services für Retrieval, Erklärungen und Report-Generierung integriert",
          "Backend APIs für Web- und Mobile-Clients mit klaren Service-Grenzen, Fehlerverhalten und Ownership entworfen",
          "Async-Task-Flows mit Retry, Timeout, Error Propagation, Status Tracking und Recovery-Pfaden gebaut",
          "Debugging durch Analyse von Logs, Dependency Chains, Service Interactions und User Impact verbessert",
          "Cypress Regression Coverage, CI Quality Gates, API Reviews, Release Workflows und Production Triage vorangetrieben"
        ],
        tech: ["TypeScript", "Java", "REST APIs", "AI API Integration", "Async Jobs", "Cypress", "CI/CD"]
      },
      {
        name: "Internes NPM UI Component Package",
        role: "Software Engineer, Teilzeit | 10.2021 - 08.2022",
        context:
          "Baute und veröffentlichte eine typisierte interne UI-Komponentenbibliothek für datenintensive Enterprise-Anwendungen inklusive Design-Primitives und Integrationskonventionen.",
        impact:
          "Reduzierte doppelte Frontend-Implementierungen und verbesserte Adoption-Konsistenz über Produktteams hinweg; kritische Visualisierungsansichten wurden schneller.",
        highlights: [
          "Component API Contracts, State Patterns, Usage Guidelines und Package Release Flow definiert",
          "Canvas-basierte Visualisierungskomponenten mit einheitlichen Interfaces und Coding Conventions gepflegt",
          "Rendering- und Data-Flow-Pipelines optimiert und 18% Runtime Performance Improvement auf Key Views erreicht",
          "Legacy-Module in sauberere Schichten refaktoriert, um Testbarkeit und Wartbarkeit zu verbessern"
        ],
        tech: ["TypeScript", "NPM Packages", "Canvas", "Datenvisualisierung", "Developer Experience", "Dokumentation"]
      }
    ]
  }
};
