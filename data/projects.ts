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
      name: "WFP HungerMap",
      subtitle: "Public data product contribution",
      oneLineValue: "Next.js public data product for hunger and food-security maps, charts, comparison views, downloads, and chatbot flows.",
      tags: ["Next.js", "TypeScript", "Maps", "Charts"],
      myRole: "Contributor on the public HungerMap repository.",
      outcome: "A public-facing data product with map, chart, comparison, download, and chatbot feature areas.",
      problemContext: "Food-security data needs to be visible, explorable, and understandable through web product workflows.",
      architectureStrategy: "Next.js, TypeScript, Tailwind, React Leaflet, Highcharts, TanStack Query, and domain-oriented frontend structure.",
      architectureHighlights: ["Map-based data exploration", "Chart and comparison workflows", "Download and chatbot feature areas"],
      techStack: ["Next.js", "TypeScript", "Tailwind", "React Leaflet", "Highcharts"],
      scalabilityApproach: "Feature areas are separated into domain-oriented application structure.",
      securityConsiderations: "Public data product with documented environment configuration and deployment flow.",
      githubUrl: "https://github.com/Esoteriker/wfp-hunger-map",
      liveUrl: "https://wfp-hunger-map.vercel.app/"
    },
    {
      name: "RevOps Agent Demo",
      subtitle: "Agent workflow automation demo",
      oneLineValue: "OpenAI Agents SDK and LangGraph demo for sales/operations routing, CRM tools, memory, and human approvals.",
      tags: ["Python", "OpenAI Agents", "LangGraph", "CRM"],
      myRole: "Built the demo agent flows, local CRM tooling, approval checkpoints, and offline ERP-style console.",
      outcome: "A runnable demo for enterprise workflow planning, interrupts, approvals, and local side effects.",
      problemContext: "Sales and operations automation needs routing, tool use, memory, and approval boundaries before actions execute.",
      architectureStrategy: "Python demo with OpenAI Agents SDK patterns, LangGraph-backed offline runtime, local JSON data, and CLI/console entry points.",
      architectureHighlights: ["Router agent", "Function tools over mock CRM data", "Human approval before sensitive actions"],
      techStack: ["Python", "OpenAI Agents SDK", "LangGraph", "SQLiteSession", "JSON store"],
      scalabilityApproach: "Workflow steps are separated into agent definitions, tools, store, and offline runtime.",
      securityConsiderations: "Sensitive actions such as email and discount escalation pause for human approval.",
      githubUrl: "https://github.com/Esoteriker/revops-agent-demo"
    },
    {
      name: "DateCraft",
      subtitle: "AI-powered date idea generator",
      oneLineValue: "Next.js app that generates date plans from mood, budget, available time, and setting.",
      tags: ["Next.js", "TypeScript", "Tailwind", "AI UI"],
      myRole: "Built the web application, interaction flow, and production deployment.",
      outcome: "A focused consumer app that turns lightweight inputs into structured date plans.",
      problemContext: "Couples need quick, contextual ideas without searching through generic recommendation lists.",
      architectureStrategy: "Next.js App Router with TypeScript and Tailwind for a compact, prompt-driven product flow.",
      architectureHighlights: ["Mood/budget/time inputs", "Step-by-step plan output", "Live Vercel deployment"],
      techStack: ["Next.js", "TypeScript", "Tailwind CSS", "Vercel"],
      scalabilityApproach: "Small App Router structure keeps the experience easy to extend with more planning signals.",
      securityConsiderations: "Public frontend deployment with no sensitive data displayed in the repository.",
      githubUrl: "https://github.com/Esoteriker/openDate",
      liveUrl: "https://opendate.vercel.app"
    }
  ],
  zh: [
    {
      name: "WFP HungerMap",
      subtitle: "公开数据产品贡献",
      oneLineValue: "基于 Next.js 的公开数据产品，覆盖饥饿与粮食安全地图、图表、对比、下载与聊天流程。",
      tags: ["Next.js", "TypeScript", "地图", "图表"],
      myRole: "参与公开 HungerMap 仓库贡献。",
      outcome: "一个面向公众的数据产品，包含地图、图表、对比、下载与聊天功能区。",
      problemContext: "粮食安全数据需要通过 Web 产品流程被清晰展示、探索和理解。",
      architectureStrategy: "使用 Next.js、TypeScript、Tailwind、React Leaflet、Highcharts、TanStack Query 与领域化前端结构。",
      architectureHighlights: ["地图数据探索", "图表与对比流程", "下载与聊天功能区"],
      techStack: ["Next.js", "TypeScript", "Tailwind", "React Leaflet", "Highcharts"],
      scalabilityApproach: "按功能领域拆分前端结构，便于继续扩展。",
      securityConsiderations: "公开数据产品，仓库中有环境配置与部署说明。",
      githubUrl: "https://github.com/Esoteriker/wfp-hunger-map",
      liveUrl: "https://wfp-hunger-map.vercel.app/"
    },
    {
      name: "RevOps Agent Demo",
      subtitle: "Agent 工作流自动化 Demo",
      oneLineValue: "基于 OpenAI Agents SDK 与 LangGraph 的销售/运营路由、CRM 工具、记忆与人工审批演示。",
      tags: ["Python", "OpenAI Agents", "LangGraph", "CRM"],
      myRole: "实现 agent 流程、本地 CRM 工具、审批节点与离线 ERP 风格控制台。",
      outcome: "可运行的企业工作流 demo，展示规划、中断、审批与本地副作用。",
      problemContext: "销售与运营自动化在真正执行动作前，需要路由、工具调用、记忆和审批边界。",
      architectureStrategy: "Python demo，结合 OpenAI Agents SDK 模式、LangGraph 离线运行时、本地 JSON 数据和 CLI/控制台入口。",
      architectureHighlights: ["路由 agent", "基于 mock CRM 的函数工具", "敏感动作执行前人工审批"],
      techStack: ["Python", "OpenAI Agents SDK", "LangGraph", "SQLiteSession", "JSON store"],
      scalabilityApproach: "将 agent 定义、工具、存储和离线运行时分层组织。",
      securityConsiderations: "邮件发送、折扣升级等敏感动作会先暂停等待人工审批。",
      githubUrl: "https://github.com/Esoteriker/revops-agent-demo"
    },
    {
      name: "DateCraft",
      subtitle: "AI 约会灵感生成器",
      oneLineValue: "根据心情、预算、可用时间和场景生成约会计划的 Next.js 应用。",
      tags: ["Next.js", "TypeScript", "Tailwind", "AI UI"],
      myRole: "实现 Web 应用、交互流程与线上部署。",
      outcome: "一个聚焦的消费级小产品，把轻量输入转换为结构化约会计划。",
      problemContext: "情侣需要快速获得有上下文的灵感，而不是在泛泛推荐列表里搜索。",
      architectureStrategy: "使用 Next.js App Router、TypeScript 与 Tailwind 构建紧凑的 prompt-driven 产品流程。",
      architectureHighlights: ["心情/预算/时间输入", "分步骤计划输出", "Vercel 在线部署"],
      techStack: ["Next.js", "TypeScript", "Tailwind CSS", "Vercel"],
      scalabilityApproach: "轻量 App Router 结构方便继续加入更多规划信号。",
      securityConsiderations: "公开前端部署，仓库不展示敏感数据。",
      githubUrl: "https://github.com/Esoteriker/openDate",
      liveUrl: "https://opendate.vercel.app"
    }
  ],
  de: [
    {
      name: "WFP HungerMap",
      subtitle: "Public data product contribution",
      oneLineValue: "Next.js-Datenprodukt für Hunger- und Food-Security-Karten, Charts, Vergleiche, Downloads und Chatbot-Flows.",
      tags: ["Next.js", "TypeScript", "Maps", "Charts"],
      myRole: "Contributor im öffentlichen HungerMap Repository.",
      outcome: "Ein öffentliches Datenprodukt mit Karten-, Chart-, Vergleichs-, Download- und Chatbot-Bereichen.",
      problemContext: "Food-Security-Daten müssen im Web sichtbar, explorierbar und verständlich werden.",
      architectureStrategy: "Next.js, TypeScript, Tailwind, React Leaflet, Highcharts, TanStack Query und domänenorientierte Frontend-Struktur.",
      architectureHighlights: ["Map-basierte Exploration", "Chart- und Vergleichsflows", "Download- und Chatbot-Bereiche"],
      techStack: ["Next.js", "TypeScript", "Tailwind", "React Leaflet", "Highcharts"],
      scalabilityApproach: "Feature-Bereiche sind domänenorientiert getrennt.",
      securityConsiderations: "Öffentliches Datenprodukt mit dokumentierter Environment- und Deployment-Konfiguration.",
      githubUrl: "https://github.com/Esoteriker/wfp-hunger-map",
      liveUrl: "https://wfp-hunger-map.vercel.app/"
    },
    {
      name: "RevOps Agent Demo",
      subtitle: "Agent workflow automation demo",
      oneLineValue: "OpenAI Agents SDK und LangGraph Demo für Sales/Ops Routing, CRM Tools, Memory und Human Approvals.",
      tags: ["Python", "OpenAI Agents", "LangGraph", "CRM"],
      myRole: "Agent-Flows, lokale CRM-Tools, Approval-Checkpoints und Offline-ERP-Konsole gebaut.",
      outcome: "Runnable Demo für Workflow Planning, Interrupts, Approvals und lokale Side Effects.",
      problemContext: "Sales- und Operations-Automation braucht Routing, Tool Use, Memory und Approval-Grenzen.",
      architectureStrategy: "Python Demo mit OpenAI Agents SDK Patterns, LangGraph Offline Runtime, lokalen JSON-Daten und CLI/Konsolen-Einstiegen.",
      architectureHighlights: ["Router Agent", "Function Tools über Mock-CRM-Daten", "Human Approval vor sensiblen Aktionen"],
      techStack: ["Python", "OpenAI Agents SDK", "LangGraph", "SQLiteSession", "JSON store"],
      scalabilityApproach: "Workflow-Schritte sind in Agent Definitions, Tools, Store und Offline Runtime getrennt.",
      securityConsiderations: "Sensitive Aktionen wie E-Mail und Discount Escalation pausieren für Human Approval.",
      githubUrl: "https://github.com/Esoteriker/revops-agent-demo"
    },
    {
      name: "DateCraft",
      subtitle: "AI-powered date idea generator",
      oneLineValue: "Next.js App, die Date-Pläne aus Mood, Budget, verfügbarer Zeit und Setting generiert.",
      tags: ["Next.js", "TypeScript", "Tailwind", "AI UI"],
      myRole: "Web-App, Interaction Flow und Production Deployment gebaut.",
      outcome: "Ein fokussiertes Consumer-Tool, das leichte Inputs in strukturierte Date-Pläne umwandelt.",
      problemContext: "Paare brauchen schnelle, kontextuelle Ideen statt generischer Empfehlungslisten.",
      architectureStrategy: "Next.js App Router mit TypeScript und Tailwind für einen kompakten prompt-driven Product Flow.",
      architectureHighlights: ["Mood/Budget/Time Inputs", "Step-by-step Plan Output", "Live Vercel Deployment"],
      techStack: ["Next.js", "TypeScript", "Tailwind CSS", "Vercel"],
      scalabilityApproach: "Kleine App-Router-Struktur lässt sich leicht mit weiteren Planungssignalen erweitern.",
      securityConsiderations: "Öffentliches Frontend Deployment ohne sensible Daten im Repository.",
      githubUrl: "https://github.com/Esoteriker/openDate",
      liveUrl: "https://opendate.vercel.app"
    }
  ]
};

export const projectsData = projectsDataByLocale.en;
