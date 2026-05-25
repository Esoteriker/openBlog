import type { Locale } from "@/data/profile";
import type { PreviewVariant } from "@/data/showcase-pages";

export type BlogPost = {
  slug: string;
  title: string;
  summary: string;
  category: "notes" | "projects" | "learning";
  tags: string[];
  date: string;
  readTime: string;
  variant: PreviewVariant;
  href: string;
  sourceLinks: Array<{ label: string; href: string }>;
  sections: Array<{
    heading: string;
    body: string[];
  }>;
};

export const blogPostsByLocale: Record<Locale, BlogPost[]> = {
  en: [
    {
      slug: "revops-agent-demo",
      title: "RevOps Agent Demo: Approvals Before Automation",
      summary: "A real project note on routing agents, CRM tools, memory, and human approval boundaries.",
      category: "learning",
      tags: ["Agents", "LangGraph", "Python"],
      date: "2026-04-07",
      readTime: "4 min read",
      variant: "api",
      href: "/blog/revops-agent-demo",
      sourceLinks: [{ label: "GitHub", href: "https://github.com/Esoteriker/revops-agent-demo" }],
      sections: [
        {
          heading: "What This Project Is",
          body: [
            "RevOps Agent Demo is a small sales and operations automation project built around realistic enterprise constraints: routing, tool use, memory, approvals, and local side effects.",
            "The demo uses OpenAI Agents SDK patterns together with a LangGraph-backed offline runtime so the workflow can be explored even before wiring a production API environment."
          ]
        },
        {
          heading: "What Is Actually Implemented",
          body: [
            "The repository includes a router agent, function tools over local mock CRM data, session memory, and approval checkpoints before sensitive actions such as email sending or discount escalation.",
            "It also includes an ERP-style local console for composing goals, reviewing execution steps, approving actions, and watching task/note/email counters update."
          ]
        },
        {
          heading: "Why It Matters",
          body: [
            "The useful lesson is that automation quality is not just model output. The product needs clear handoffs, tool boundaries, recoverable runtime state, and a visible approval path before anything sensitive happens."
          ]
        }
      ]
    },
    {
      slug: "datecraft-open-date",
      title: "DateCraft: Turning Small Inputs Into a Date Plan",
      summary: "A shipped Next.js app that generates date ideas from mood, budget, time, and setting.",
      category: "projects",
      tags: ["Next.js", "TypeScript", "AI UI"],
      date: "2026-02-07",
      readTime: "3 min read",
      variant: "product",
      href: "/blog/datecraft-open-date",
      sourceLinks: [
        { label: "GitHub", href: "https://github.com/Esoteriker/openDate" },
        { label: "Live", href: "https://opendate.vercel.app" }
      ],
      sections: [
        {
          heading: "What This Project Is",
          body: [
            "DateCraft is a focused web app for generating date plans from a few practical inputs: mood, budget, available time, and setting.",
            "The output is structured as a plan rather than a loose recommendation list, with flow, mood, conversation prompts, and a small surprise idea."
          ]
        },
        {
          heading: "What Is Actually Implemented",
          body: [
            "The public repository uses Next.js App Router, TypeScript, and Tailwind CSS. The app is also deployed publicly on Vercel.",
            "The main product idea is intentionally compact: ask for the minimum useful context, then return a plan that feels ready to use."
          ]
        },
        {
          heading: "Why It Matters",
          body: [
            "This is a useful pattern for small AI products: keep the input surface narrow, make the output concrete, and avoid turning a playful tool into a dashboard."
          ]
        }
      ]
    },
    {
      slug: "wfp-hungermap",
      title: "WFP HungerMap: Notes From a Public Data Product",
      summary: "A public repository contribution around maps, charts, comparison views, downloads, and chatbot flows.",
      category: "projects",
      tags: ["Next.js", "Maps", "Charts"],
      date: "2025-07-09",
      readTime: "5 min read",
      variant: "knowledge",
      href: "/blog/wfp-hungermap",
      sourceLinks: [
        { label: "GitHub", href: "https://github.com/Esoteriker/wfp-hunger-map" },
        { label: "Live", href: "https://wfp-hunger-map.vercel.app/" },
        { label: "Docs", href: "https://docs-wfp-hungermap.netlify.app/" }
      ],
      sections: [
        {
          heading: "What This Project Is",
          body: [
            "WFP HungerMap is a public data product repository for exploring hunger and food-security data through web product surfaces.",
            "The repository documents feature areas such as maps, information pages, chatbot flows, comparison views, download flows, and email service integration."
          ]
        },
        {
          heading: "What Is Actually Implemented",
          body: [
            "The stack includes Next.js, TypeScript, Tailwind, React Leaflet, Highcharts, TanStack Query, and a domain-oriented frontend structure.",
            "The project is not just a static page. It is a data-heavy interface where map exploration, chart reading, comparison, and download behavior need to stay coherent."
          ]
        },
        {
          heading: "Why It Matters",
          body: [
            "The main product lesson is that public data UX needs more than visualization. It needs paths for context, comparison, export, and explanation so users can turn data into decisions."
          ]
        }
      ]
    }
  ],
  zh: [
    {
      slug: "revops-agent-demo",
      title: "RevOps Agent Demo：自动化之前先做审批边界",
      summary: "一篇真实项目笔记，记录路由 agent、CRM 工具、记忆和人工审批边界。",
      category: "learning",
      tags: ["Agents", "LangGraph", "Python"],
      date: "2026-04-07",
      readTime: "4 分钟阅读",
      variant: "api",
      href: "/blog/revops-agent-demo",
      sourceLinks: [{ label: "GitHub", href: "https://github.com/Esoteriker/revops-agent-demo" }],
      sections: [
        {
          heading: "这个项目是什么",
          body: [
            "RevOps Agent Demo 是一个销售与运营自动化小项目，关注更接近企业场景的约束：路由、工具调用、记忆、审批和本地副作用。",
            "项目结合 OpenAI Agents SDK 的模式和 LangGraph 离线运行时，因此即使不先接生产 API 环境，也能演示工作流。"
          ]
        },
        {
          heading: "真实实现了什么",
          body: [
            "仓库里有路由 agent、基于本地 mock CRM 数据的函数工具、会话记忆，以及邮件发送、折扣升级等敏感动作前的审批节点。",
            "它还提供了一个本地 ERP 风格控制台，可以编写目标、查看执行步骤、批准动作，并观察任务、备注、邮件等运行时计数变化。"
          ]
        },
        {
          heading: "为什么值得放在博客里",
          body: [
            "这个项目的重点不是模型回答本身，而是自动化产品必须具备清晰交接、工具边界、可恢复状态，以及敏感动作执行前的可见审批路径。"
          ]
        }
      ]
    },
    {
      slug: "datecraft-open-date",
      title: "DateCraft：把轻量输入变成可执行约会计划",
      summary: "一个已部署的 Next.js 应用，根据心情、预算、时间和场景生成约会灵感。",
      category: "projects",
      tags: ["Next.js", "TypeScript", "AI UI"],
      date: "2026-02-07",
      readTime: "3 分钟阅读",
      variant: "product",
      href: "/blog/datecraft-open-date",
      sourceLinks: [
        { label: "GitHub", href: "https://github.com/Esoteriker/openDate" },
        { label: "Live", href: "https://opendate.vercel.app" }
      ],
      sections: [
        {
          heading: "这个项目是什么",
          body: [
            "DateCraft 是一个聚焦的小型 Web 应用，通过心情、预算、可用时间和场景这几个输入生成约会计划。",
            "输出不是松散推荐列表，而是更具体的计划：流程、氛围、对话提示和一个小惊喜。"
          ]
        },
        {
          heading: "真实实现了什么",
          body: [
            "公开仓库使用 Next.js App Router、TypeScript 和 Tailwind CSS，并且已经部署到 Vercel。",
            "产品思路很克制：只收集必要上下文，然后给出能直接使用的计划。"
          ]
        },
        {
          heading: "为什么值得放在博客里",
          body: [
            "这是小型 AI 产品很实用的模式：输入保持窄，输出保持具体，不把一个轻量工具做成复杂仪表盘。"
          ]
        }
      ]
    },
    {
      slug: "wfp-hungermap",
      title: "WFP HungerMap：公开数据产品笔记",
      summary: "一篇基于公开仓库的项目笔记，涉及地图、图表、对比、下载和聊天功能区。",
      category: "projects",
      tags: ["Next.js", "Maps", "Charts"],
      date: "2025-07-09",
      readTime: "5 分钟阅读",
      variant: "knowledge",
      href: "/blog/wfp-hungermap",
      sourceLinks: [
        { label: "GitHub", href: "https://github.com/Esoteriker/wfp-hunger-map" },
        { label: "Live", href: "https://wfp-hunger-map.vercel.app/" },
        { label: "Docs", href: "https://docs-wfp-hungermap.netlify.app/" }
      ],
      sections: [
        {
          heading: "这个项目是什么",
          body: [
            "WFP HungerMap 是一个公开数据产品仓库，用 Web 产品界面呈现饥饿与粮食安全数据。",
            "仓库文档中能看到地图、信息页、聊天功能、对比视图、下载流程和邮件服务等功能区。"
          ]
        },
        {
          heading: "真实实现了什么",
          body: [
            "技术栈包括 Next.js、TypeScript、Tailwind、React Leaflet、Highcharts、TanStack Query，以及领域化前端结构。",
            "这不是静态展示页，而是数据密集型界面：地图探索、图表阅读、对比和下载行为都需要保持一致。"
          ]
        },
        {
          heading: "为什么值得放在博客里",
          body: [
            "公开数据产品不只是可视化。它还需要上下文、对比、导出和解释路径，让用户能把数据转化成判断。"
          ]
        }
      ]
    }
  ],
  de: [
    {
      slug: "revops-agent-demo",
      title: "RevOps Agent Demo: Approvals Before Automation",
      summary: "Projektnotiz über Routing Agents, CRM Tools, Memory und Human Approval Boundaries.",
      category: "learning",
      tags: ["Agents", "LangGraph", "Python"],
      date: "2026-04-07",
      readTime: "4 min read",
      variant: "api",
      href: "/blog/revops-agent-demo",
      sourceLinks: [{ label: "GitHub", href: "https://github.com/Esoteriker/revops-agent-demo" }],
      sections: [
        {
          heading: "What This Project Is",
          body: [
            "RevOps Agent Demo is a compact sales and operations automation project with realistic constraints: routing, tool use, memory, approvals, and local side effects.",
            "It combines OpenAI Agents SDK patterns with a LangGraph-backed offline runtime so the workflow can be demonstrated locally."
          ]
        },
        {
          heading: "What Is Actually Implemented",
          body: [
            "The repository includes a router agent, mock CRM tools, session memory, and approval checkpoints before sensitive actions.",
            "It also includes a local ERP-style console for goals, execution steps, approvals, and runtime counters."
          ]
        }
      ]
    },
    {
      slug: "datecraft-open-date",
      title: "DateCraft: Turning Small Inputs Into a Date Plan",
      summary: "A shipped Next.js app that generates date ideas from mood, budget, time, and setting.",
      category: "projects",
      tags: ["Next.js", "TypeScript", "AI UI"],
      date: "2026-02-07",
      readTime: "3 min read",
      variant: "product",
      href: "/blog/datecraft-open-date",
      sourceLinks: [
        { label: "GitHub", href: "https://github.com/Esoteriker/openDate" },
        { label: "Live", href: "https://opendate.vercel.app" }
      ],
      sections: [
        {
          heading: "What This Project Is",
          body: [
            "DateCraft is a focused web app that generates date plans from mood, budget, available time, and setting.",
            "The public repository uses Next.js App Router, TypeScript, and Tailwind CSS, with a Vercel deployment."
          ]
        }
      ]
    },
    {
      slug: "wfp-hungermap",
      title: "WFP HungerMap: Notes From a Public Data Product",
      summary: "A public repository contribution around maps, charts, comparison views, downloads, and chatbot flows.",
      category: "projects",
      tags: ["Next.js", "Maps", "Charts"],
      date: "2025-07-09",
      readTime: "5 min read",
      variant: "knowledge",
      href: "/blog/wfp-hungermap",
      sourceLinks: [
        { label: "GitHub", href: "https://github.com/Esoteriker/wfp-hunger-map" },
        { label: "Live", href: "https://wfp-hunger-map.vercel.app/" },
        { label: "Docs", href: "https://docs-wfp-hungermap.netlify.app/" }
      ],
      sections: [
        {
          heading: "What This Project Is",
          body: [
            "WFP HungerMap is a public data product repository for web-based hunger and food-security data exploration.",
            "The stack includes Next.js, TypeScript, Tailwind, React Leaflet, Highcharts, and TanStack Query."
          ]
        }
      ]
    }
  ]
};

export function findBlogPost(locale: Locale, slug: string) {
  return blogPostsByLocale[locale].find((post) => post.slug === slug);
}
