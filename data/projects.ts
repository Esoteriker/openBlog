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

export const projectsData: Project[] = [
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
];
