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
      description: "Selected delivery work focused on UI systems, architecture ownership, and production reliability."
    },
    labels: {
      role: "Role",
      impact: "Impact"
    },
    items: [
      {
        name: "SCADAS RS Web Application",
        role: "Web Developer (UI and Data Visualization)",
        context:
          "Built and maintained operational dashboards for industrial monitoring where clarity and reliability were critical.",
        impact: "Improved real-time data readability and operator decision speed through stable, visualization-first UI design.",
        highlights: [
          "Implemented dynamic charts using the internal visualization library",
          "Developed reusable UI modules to improve maintainability",
          "Partnered with backend teams to align data contracts and rendering behavior"
        ],
        tech: ["Web Components", "Data Visualization", "Internal UI Library", "Frontend Architecture"]
      },
      {
        name: "Testlab Event Marker Mobile App",
        role: "Angular Developer",
        context:
          "Delivered a mobile workflow for event marking and data interaction that had to stay responsive in lab environments.",
        impact: "Shipped an end-to-end mobile app flow with consistent behavior, helping teams capture and classify events faster.",
        highlights: [
          "Developed Angular-based web components with structured UI interactions",
          "Integrated frontend modules with backend services via contract-driven APIs",
          "Owned lifecycle from implementation to deployment and production fixes"
        ],
        tech: ["Angular", "TypeScript", "Mobile UI", "REST APIs"]
      },
      {
        name: "Siemens-Style Internal UI Library",
        role: "Developer and Maintainer",
        context:
          "Maintained a shared internal component and chart library used by multiple enterprise applications.",
        impact: "Standardized design language and reduced repeated UI implementation effort across product teams.",
        highlights: [
          "Built and maintained reusable UI patterns and chart modules",
          "Improved performance and resolved cross-application UI defects",
          "Documented usage guidelines to improve consistency and onboarding"
        ],
        tech: ["Design System", "Component Library", "Charting", "UI Performance"]
      }
    ]
  },
  zh: {
    header: {
      eyebrow: "经历",
      title: "工作经历",
      description: "聚焦于界面系统、架构负责与生产稳定性的代表性项目经历。"
    },
    labels: {
      role: "角色",
      impact: "业务价值"
    },
    items: [
      {
        name: "SCADAS RS Web 应用",
        role: "Web Developer（UI 与数据可视化）",
        context: "负责工业监控场景下的可视化看板开发与维护，强调可读性与稳定性。",
        impact: "通过稳定的数据可视化交互提升实时信息可读性，加快操作决策效率。",
        highlights: [
          "基于内部图表库实现动态可视化组件",
          "构建可复用 UI 模块，降低后续维护成本",
          "与后端团队协作对齐数据契约与渲染行为"
        ],
        tech: ["Web Components", "数据可视化", "内部 UI 库", "前端架构"]
      },
      {
        name: "Testlab Event Marker 移动应用",
        role: "Angular Developer",
        context: "交付用于事件标记与数据交互的移动端流程，要求在实验室场景保持稳定响应。",
        impact: "完成端到端移动应用交付，帮助团队更快完成事件记录与分类。",
        highlights: [
          "使用 Angular 开发结构化交互组件",
          "通过契约化 API 与后端服务联调",
          "负责从实现到部署与线上修复的完整生命周期"
        ],
        tech: ["Angular", "TypeScript", "移动端 UI", "REST APIs"]
      },
      {
        name: "Siemens 风格内部 UI 库",
        role: "开发与维护负责人",
        context: "维护多业务线复用的内部组件与图表库，保障一致性与可扩展性。",
        impact: "统一设计语言并减少重复开发，提升跨团队交付效率。",
        highlights: [
          "构建并维护可复用 UI 模式与图表模块",
          "优化性能并修复跨应用 UI 问题",
          "沉淀使用规范，降低上手与协作成本"
        ],
        tech: ["Design System", "组件库", "图表系统", "UI 性能优化"]
      }
    ]
  },
  de: {
    header: {
      eyebrow: "Erfahrung",
      title: "Berufserfahrung",
      description:
        "Ausgewählte Lieferprojekte mit Fokus auf UI-Systeme, Architekturverantwortung und produktive Stabilität."
    },
    labels: {
      role: "Rolle",
      impact: "Wirkung"
    },
    items: [
      {
        name: "SCADAS RS Web-Anwendung",
        role: "Web Developer (UI und Datenvisualisierung)",
        context:
          "Entwicklung und Wartung von Dashboards für industrielles Monitoring mit hohen Anforderungen an Klarheit und Verlässlichkeit.",
        impact:
          "Verbesserte Lesbarkeit von Echtzeitdaten und schnellere Entscheidungen durch stabile, visualisierungsorientierte UI-Architektur.",
        highlights: [
          "Dynamische Visualisierungen mit einer internen Chart-Bibliothek umgesetzt",
          "Wiederverwendbare UI-Module zur besseren Wartbarkeit aufgebaut",
          "Mit Backend-Teams Datenverträge und Rendering-Verhalten abgestimmt"
        ],
        tech: ["Web Components", "Datenvisualisierung", "Interne UI-Bibliothek", "Frontend-Architektur"]
      },
      {
        name: "Testlab Event Marker Mobile App",
        role: "Angular Developer",
        context:
          "Lieferung eines mobilen Workflows für Event-Markierung und Datennutzung mit stabiler Bedienung im Laborbetrieb.",
        impact:
          "End-to-End-Mobilablauf erfolgreich ausgeliefert und die Geschwindigkeit bei Erfassung und Klassifizierung von Events erhöht.",
        highlights: [
          "Angular-basierte Komponenten mit klaren UI-Interaktionen entwickelt",
          "Frontend-Module über vertraglich definierte APIs mit Backend-Services integriert",
          "Verantwortung über den gesamten Zyklus von Implementierung bis Deployment und Fixes"
        ],
        tech: ["Angular", "TypeScript", "Mobile UI", "REST APIs"]
      },
      {
        name: "Siemens-Style interne UI-Bibliothek",
        role: "Developer und Maintainer",
        context:
          "Pflege einer gemeinsamen internen Komponenten- und Chart-Bibliothek für mehrere Enterprise-Anwendungen.",
        impact:
          "Designsprache standardisiert und wiederholten UI-Implementierungsaufwand über Produktteams hinweg reduziert.",
        highlights: [
          "Wiederverwendbare UI-Patterns und Chart-Module aufgebaut und gepflegt",
          "Performance optimiert und anwendungsübergreifende UI-Fehler behoben",
          "Nutzungsrichtlinien dokumentiert und Onboarding beschleunigt"
        ],
        tech: ["Design System", "Komponentenbibliothek", "Charting", "UI-Performance"]
      }
    ]
  }
};
