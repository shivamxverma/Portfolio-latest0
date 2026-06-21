export const navLinks = [
  {
    path: "/",
    name: "About",
  },
  {
    path: "/projects",
    name: "Projects",
  },
  {
    path: "/content",
    name: "Focus",
  },
  {
    path: "/experience",
    name: "Experience",
  },
];

export const notableAchievements = [
  {
    title: "Competitive Programming",
    body: [
      { text: "Ranked in the " },
      { text: "top 5% globally on LeetCode", bold: true },
      { text: " with an " },
      { text: "1800+ rating", bold: true },
      { text: ". Also reached " },
      { text: "3-star on CodeChef", bold: true },
      { text: " with a " },
      { text: "1700+ rating", bold: true },
      { text: ", became a " },
      { text: "Pupil on Codeforces", bold: true },
      { text: " with a max rating of " },
      { text: "1261", bold: true },
      { text: ", and is " },
      { text: "rated on AtCoder", bold: true },
      { text: " at " },
      { text: "440+", bold: true },
      { text: ". I treat these as evidence of analytical problem solving, algorithmic depth, and comfort reasoning through difficult technical constraints." },
    ],
  },
];

export const intros = [
  "Software Engineer",
  "Backend-Heavy Full-Stack Engineer",
  "Distributed Systems Builder",
  "Async Systems Engineer",
  "Developer Tools Builder",
];

export const experiences = [
  {
    role: "Software Developer Intern",
    year: "Nov 2025 - Current",
    company: "klimb.io",
    type: "Internship",
    location: "Remote",
    logo: "/klimbio_logo.jpeg",
    responsibility: [
      [
        { text: "Engineered a " },
        { text: "PostgreSQL-backed credit-based monetization system", bold: true },
        { text: " to replace simple AI feature flags with usage-aware access control, and designed middleware that tracked and enforced credit limits across " },
        { text: "6+ AI features", bold: true },
        { text: " so the product could support usage-based billing and subscription add-ons." },
      ],
      [
        { text: "Redesigned the product’s field model around a " },
        { text: "shared global template architecture", bold: true },
        { text: " after duplicated per-tenant definitions caused database bloat and management complexity, reducing duplicate records and making field management cleaner across customers." },
      ],
      [
        { text: "Improved recruiter dashboard performance by replacing expensive request-time aggregations with " },
        { text: "precomputed and indexed data", bold: true },
        { text: ", moving heavy computation out of the hot path and improving load time without increasing product complexity." },
      ],
    ],
    techstacks: [
      "TypeScript",
      "React",
      "Node.js",
      "Express.js",
      "PostgreSQL",
      "Redis",
      "AWS S3",
      "AWS EC2",
    ],
  },
];

export const projects = [
  {
    title: "Yuvro Web IDE",
    category: "Platform Engineering · Browser IDE",
    description:
      "A browser-based online IDE with separate metadata, orchestration, and runtime layers for isolated developer workspaces with terminals, previews, and database tooling.",
    problem:
      "Developers need instant remotely hosted coding environments with file editing, interactive shells, app previews, and database inspection, but the hard part is maintaining isolated workspace state and runtime infrastructure at scale.",
    architecture:
      "Frontend in React, TypeScript, and Vite; an init service in FastAPI with PostgreSQL and S3-backed content-addressed storage; a FastAPI orchestrator on Kubernetes; and a per-workspace runtime agent exposing PTY sockets, file APIs, and port proxying.",
    decisions: [
      "Split the system into frontend, init service, orchestrator, and runner so identity, metadata, and execution concerns remain decoupled.",
      "Used content-addressed storage with SHA-256 hashing and S3-backed blob storage to reduce duplication.",
      "Modeled file explorer metadata with a normalized self-referential nodes table and indexes for fast lookups.",
      "Provisioned isolated Kubernetes resources and project-specific databases per workspace.",
      "Kept the runtime agent thin so shell, file I/O, and proxying happen inside the workspace boundary.",
    ],
    whyItMatters:
      "This project reflects platform engineering, runtime isolation, workspace orchestration, control-plane design, browser-based developer tooling, and real-time terminal streaming.",
    mapsWellTo:
      "Developer platforms, cloud IDEs, internal tooling teams, and products built around managed execution environments.",
    techstacks: ["React", "TypeScript", "Vite", "FastAPI", "PostgreSQL", "AWS S3", "Kubernetes", "PTY streaming"],
    status: "active",
  },
  {
    title: "CodeSM",
    category: "Sandboxing · Async Infrastructure",
    description:
      "A scalable sandboxed code execution engine that safely compiles and runs untrusted code across multiple languages.",
    problem:
      "Executing user-submitted code safely is difficult because it can be malicious, resource-intensive, or unstable. The system needs to run code asynchronously, evaluate test cases, and return results without compromising the host system.",
    architecture:
      "React frontend with a Node.js and Express.js backend, PostgreSQL and Redis for state and coordination, BullMQ for execution jobs, and Docker on AWS EC2 for sandboxed runners.",
    decisions: [
      "Used Docker-based isolation for secure execution environments.",
      "Applied resource limits, filesystem isolation, disabled networking, and restricted process capabilities.",
      "Reused persistent containers instead of creating a fresh container per execution to reduce overhead.",
      "Implemented early-exit evaluation to stop grading after the first failed test case and free worker resources faster.",
      "Built an async queue-based execution pipeline with BullMQ, Redis, and PostgreSQL.",
      "Supported C++, Java, Python, JavaScript, and Go.",
    ],
    whyItMatters:
      "This project shows depth in security, sandboxing, job processing, performance optimization, infrastructure design, and high-throughput backend systems.",
    mapsWellTo:
      "Online judges, AI agents with tool execution, developer infrastructure, education products, and secure compute platforms.",
    techstacks: ["React", "Node.js", "Express.js", "PostgreSQL", "Redis", "BullMQ", "Docker", "AWS EC2"],
    status: "active",
    preview: "/projects/Codesm-white.png",
    previewDark: "/projects/Codesm-black.png",
  },
  {
    title: "Storix",
    category: "Async Pipelines · Real-Time Status",
    description:
      "A real-time asynchronous document ingestion and processing pipeline.",
    problem:
      "Heavy PDF extraction should not block the request lifecycle or cause server timeouts, but users still need live progress visibility across the processing flow.",
    architecture:
      "Next.js and TypeScript on the frontend, FastAPI on the backend, Celery for task execution, PostgreSQL and Redis for persistence and coordination, and AWS S3 for document storage.",
    decisions: [
      "Chose FastAPI and Celery for structured APIs and reliable background processing.",
      "Used Redis Pub/Sub and WebSockets to bridge worker-side task events to the frontend.",
      "Moved document extraction fully outside the request lifecycle.",
      "Designed the UX so users can track parse, extract, and save stages in real time.",
    ],
    whyItMatters:
      "This project demonstrates async processing, data pipelines, background jobs, real-time status streaming, and practical architecture for document-heavy products.",
    mapsWellTo:
      "Document-heavy SaaS, workflow automation tools, ingestion systems, and applied AI pipelines.",
    techstacks: ["Next.js", "TypeScript", "FastAPI", "Celery", "PostgreSQL", "Redis", "AWS S3", "WebSockets"],
    status: "active",
    preview: "/projects/Storix.png",
    previewDark: "/projects/Storix.png",
  },
  {
    title: "Chatterly",
    category: "Real-Time Systems · Event-Driven Messaging",
    description:
      "A scalable real-time chat architecture built for high-throughput messaging.",
    problem:
      "Directly writing chat messages to the database under high concurrency creates a bottleneck and can crash the system, so ingestion and persistence have to be decoupled.",
    architecture:
      "Next.js and TypeScript on the frontend, Node.js with Socket.io on the backend, Apache Kafka for message brokering, Redis for synchronization, and PostgreSQL with Prisma ORM for persistence.",
    decisions: [
      "Used Kafka to decouple message ingestion from persistence.",
      "Used Redis Pub/Sub to synchronize WebSocket events across multiple server instances.",
      "Designed the system around durable persistence plus fast live delivery.",
      "Considered event ordering and delivery guarantees through Kafka offsets.",
    ],
    whyItMatters:
      "This project shows experience with event-driven systems, streaming architecture, real-time applications, and scalable WebSocket infrastructure.",
    mapsWellTo:
      "Chat, collaboration, customer messaging, live support, and streaming products.",
    techstacks: ["Next.js", "TypeScript", "Node.js", "Socket.io", "Apache Kafka", "Redis", "PostgreSQL", "Prisma"],
    status: "active",
    preview: "/projects/chatterly.png",
    previewDark: "/projects/chatterly.png",
  },
  {
    title: "Collab-Draw",
    category: "Collaborative UX · State Synchronization",
    description:
      "A real-time collaborative whiteboard and drawing platform.",
    problem:
      "Synchronizing drawing state like paths, coordinates, and shapes across multiple clients with low latency is difficult when updates are frequent and conflicts must stay minimal.",
    architecture:
      "Next.js 14, TypeScript, Canvas API, and Tailwind CSS on the frontend; a Node.js REST API plus a separate Node.js WebSocket server on the backend; PostgreSQL with Prisma; and a Turborepo monorepo managed with pnpm.",
    decisions: [
      "Separated the HTTP backend and WebSocket backend so they can scale independently.",
      "Used a Turborepo monorepo to share database schemas, UI pieces, and common utilities.",
      "Managed normalized drawing state and live canvas synchronization.",
      "Focused on efficiently broadcasting high-frequency coordinate updates.",
    ],
    whyItMatters:
      "This project highlights collaborative UX, real-time synchronization, WebSocket systems, and modular backend separation.",
    mapsWellTo:
      "Collaborative design tools, whiteboards, multiplayer interfaces, and browser-native real-time products.",
    techstacks: ["Next.js", "TypeScript", "Canvas API", "Tailwind CSS", "Node.js", "WebSockets", "PostgreSQL", "Prisma"],
    status: "active",
  },
  {
    title: "Raft-KV",
    category: "Distributed Systems · Consensus",
    description:
      "A distributed key-value store built in Go using the Raft consensus algorithm.",
    problem:
      "Distributed systems need to stay consistent and available even when nodes fail or network partitions happen.",
    architecture:
      "Go implementation of a key-value store with Raft handling leader election, heartbeat coordination, replicated logs, and state machine replication.",
    decisions: [
      "Implemented Raft from scratch to understand leader election, heartbeat handling, distributed logs, and state machine replication.",
      "Used Go concurrency primitives for replication and coordination logic.",
      "Focused on correctness under non-deterministic network behavior.",
      "Worked through strict consistency and fault tolerance tradeoffs.",
    ],
    whyItMatters:
      "This project reflects strong systems thinking, distributed systems fundamentals, high-availability design, and interest in infrastructure internals.",
    mapsWellTo:
      "Infrastructure teams, databases, storage engines, control planes, and distributed systems roles.",
    techstacks: ["Go", "Distributed systems", "Raft consensus", "Fault tolerance", "State machines"],
    status: "active",
  },
  {
    title: "WebVox",
    category: "Peer-to-Peer Communication · WebRTC",
    description:
      "A peer-to-peer video chat application using WebRTC and Node.js signaling.",
    problem:
      "Real-time video and audio communication should happen directly between browsers to reduce latency and server bandwidth usage.",
    architecture:
      "HTML, JavaScript, and EJS on the frontend, Node.js and Express.js on the backend, WebRTC for media transport, and WebSockets for signaling.",
    decisions: [
      "Used WebRTC to establish direct browser-to-browser media connections.",
      "Built a custom signaling server for SDP offers, answers, and ICE candidate exchange.",
      "Structured the application around room-based coordination.",
    ],
    whyItMatters:
      "This project shows understanding of low-latency communication, peer-to-peer networking, browser media systems, and signaling infrastructure.",
    mapsWellTo:
      "Communication products, telepresence apps, collaboration tools, and browser media systems.",
    techstacks: ["HTML", "JavaScript", "EJS", "Node.js", "Express.js", "WebRTC", "WebSockets"],
    status: "active",
  },
  {
    title: "Courseq",
    category: "Transactional Backends · RBAC",
    description:
      "A backend API for a digital course marketplace with secure transactions and role-based flows.",
    problem:
      "A course marketplace must handle multi-role authorization and transaction state changes safely without race conditions or duplicate purchases.",
    architecture:
      "Node.js, Express, and TypeScript on the backend with PostgreSQL for transactional state management.",
    decisions: [
      "Designed clear RBAC boundaries between user, creator, and admin roles.",
      "Modeled the purchase lifecycle with explicit PENDING, SUCCESS, and FAILED states.",
      "Used database-level uniqueness constraints to prevent duplicate purchases.",
      "Focused on transactional integrity and idempotency.",
    ],
    whyItMatters:
      "This project shows backend API design, transactional logic, auth models, and e-commerce-style workflow handling.",
    mapsWellTo:
      "Marketplaces, SaaS billing flows, commerce products, and backend systems with transactional guarantees.",
    techstacks: ["Node.js", "Express.js", "TypeScript", "PostgreSQL", "RBAC", "Transactional integrity"],
    status: "active",
  },
];

export const techStackGroups = [
  {
    title: "Languages",
    description:
      "I use these languages across product engineering, backend infrastructure, and systems work.",
    items: ["TypeScript", "JavaScript", "Go", "Python"],
  },
  {
    title: "Frontend",
    description:
      "I use the frontend to expose complex backend behavior cleanly, especially in real-time and developer-facing products.",
    items: ["React", "Next.js", "Vite", "Tailwind CSS", "Canvas API", "EJS", "HTML"],
  },
  {
    title: "Backend",
    description:
      "My strongest work centers on APIs, orchestration, backend workflows, and real-time infrastructure.",
    items: ["Node.js", "Express.js", "FastAPI", "WebSocket systems", "Socket.io", "REST API design"],
  },
  {
    title: "Databases and Storage",
    description:
      "Most of my systems rely on relational modeling, coordination layers, and storage patterns built for correctness and speed.",
    items: ["PostgreSQL", "Redis", "Prisma", "S3-backed content-addressed storage", "AWS S3"],
  },
  {
    title: "Async, Messaging, and Real-Time",
    description:
      "A recurring theme in my projects is moving heavy work off the request path and keeping progress visible in real time.",
    items: ["BullMQ", "Celery", "Redis Pub/Sub", "Apache Kafka", "WebSockets", "PTY streaming", "Event-driven backend patterns"],
  },
  {
    title: "Infrastructure, DevOps, and Platform",
    description:
      "I am especially interested in the layer where runtime safety, orchestration, and product behavior meet.",
    items: ["Docker", "Kubernetes", "AWS EC2", "Runtime isolation", "Workspace orchestration", "Sandboxed execution environments"],
  },
  {
    title: "Systems and CS Foundations",
    description:
      "I care about the fundamentals behind reliable systems, not just the frameworks used to expose them.",
    items: ["Distributed systems", "Raft consensus", "Fault tolerance", "State machines", "Transactional integrity", "RBAC", "Performance optimization", "Indexing and schema design"],
  },
];

export const currentBuilding = {
  title: "What I'm Currently Building",
  summary:
    "This repository is a founder-outreach AI knowledge base designed as a single source of truth for an AI outreach agent that maps my engineering experience, projects, and skills directly to startup problems.",
  body: [
    "The core idea is that founders do not buy skills; they buy solutions to bottlenecks.",
    "The system analyzes a startup, infers likely engineering challenges, matches those challenges to evidence from my past work, and generates highly personalized founder outreach.",
    "The repository contains profile, experience, skills, interests, achievements, project deep-dives, startup analysis frameworks, outreach guidelines, and prompts for startup analysis, problem matching, and DM writing.",
    "The workflow is straightforward: analyze the startup, infer the hardest technical bottlenecks, match those bottlenecks to project evidence, and generate a concise outreach message.",
    "I think of it as a blend of applied AI, knowledge design, structured prompting, and engineering positioning. It treats portfolio content as reusable structured intelligence instead of static resume text and reflects how I like to productize technical knowledge.",
  ],
};

export const learningThemes = [
  "Building highly scalable automated workflows that can move complex work off the request path without losing clarity or operational control.",
  "AI and LLM integrations with an emphasis on applied AI systems rather than isolated model demos.",
  "Backend architecture and system design, especially where product behavior depends on strong infrastructure decisions.",
  "Developer tools and platform engineering, including runtime isolation, orchestration, and browser-based tooling.",
  "Distributed systems and execution isolation, both as technical interests and as practical constraints in real products.",
  "Better ways to connect deep technical work to real business bottlenecks so engineering becomes easier to position, explain, and sell.",
];

export const engineeringStrengths = [
  "Asynchronous job processing and pipelines",
  "Sandboxed code execution",
  "Real-time status streaming",
  "Complex database modeling and optimization",
  "Monetization and access control systems",
  "Workspace orchestration and isolated runtime environments",
  "Distributed consensus and fault tolerance",
  "Real-time peer-to-peer communication",
  "Transactional backend systems",
  "High-volume data streaming and brokering",
  "Complex state synchronization",
];

export const hackathons = [];

export const research = [];
