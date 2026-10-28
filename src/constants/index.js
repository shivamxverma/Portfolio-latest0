export const navLinks = [
  { path: "/projects", name: "Projects" },
  { path: "/experience", name: "Experience" },
  { path: "/content", name: "Focus" },
];

export const profile = {
  name: "Shivam Kumar Verma",
  shortName: "Shivam Verma",
  email: "shivam0xverma@gmail.com",
  resume:
    "https://drive.google.com/file/d/16d5YHOrGaU7fEV-F1JWMutj1Sdb38ObC/view?usp=sharing",
  education: "B.Tech in Computer Science, IIIT Nagpur (2022–2026)",
};

export const socials = [
  { label: "GitHub", href: "https://github.com/shivamxverma" },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/shivamv99/" },
  { label: "Twitter", href: "https://x.com/Shivam_v99" },
  { label: "LeetCode", href: "https://leetcode.com/u/MahavirCoder/" },
  { label: "CodeChef", href: "https://www.codechef.com/users/mahavir99" },
];

export const notableAchievements = [
  {
    title: "Competitive Programming",
    body: [
      { text: "Top 5% globally on LeetCode", bold: true },
      { text: " (1800+ contest rating, 800+ problems solved). " },
      { text: "3-star on CodeChef", bold: true },
      { text: " (1700+ rating)." },
    ],
  },
  {
    title: "Hackathons",
    body: [
      { text: "3rd place", bold: true },
      { text: " at Tantrafiesta 2024, IIIT Nagpur." },
    ],
  },
];

export const intros = [
  "Software Engineer",
  "Backend Engineer",
  "Full-Stack Engineer",
];

// Shown oldest first in this array; the experience page reverses it.
export const experiences = [
  {
    role: "Full Stack Developer Intern",
    year: "Nov 2025 – May 2026",
    company: "klimb.io",
    type: "Internship",
    location: "Remote",
    logo: "/klimbio_logo.jpeg",
    responsibility: [
      [
        { text: "Usage-based billing ledger: ", bold: true },
        { text: "built a credit ledger to replace on/off feature flags. It meters every use of " },
        { text: "6+ AI features", bold: true },
        { text: " per customer and debits it from their balance, which let klimb charge customers by usage." },
      ],
    ],
    techstacks: ["TypeScript", "Express.js", "PostgreSQL", "Redis", "AWS"],
  },
  {
    role: "Full Stack Developer Intern",
    year: "Jul 2026 – present",
    company: "poiro.com",
    type: "Internship",
    location: "Remote",
    responsibility: [
      [
        { text: "Creative Asset Manager: ", bold: true },
        { text: "built one library where every upload and AI generation is saved through a single path, so users can organise assets into folders to build a full film or video. Each generation keeps its model, prompt and reference images. Added " },
        { text: "Elements", bold: true },
        { text: ": reusable character, prop and location image sets you can @mention in the prompt box." },
      ],
      [
        { text: "Async Celery worker runtime: ", bold: true },
        { text: "gave each Celery worker one long-lived event loop and a shared Mongo client and Redis pool. This cut connection churn and ended dead-connection write failures after database restarts." },
      ],
      [
        { text: "MCP agent access: ", bold: true },
        { text: "built the auth layer that lets AI assistants like Claude run Poiro apps for a user, capped by scopes and daily and per-run credit limits. RS256 tokens are verified via JWKS, refresh tokens rotate, and grants are checked on every request, so revoking access is instant." },
      ],
    ],
    techstacks: ["Python", "FastAPI", "MongoDB", "Redis", "Celery", "asyncio", "Next.js", "TypeScript", "Cloudflare R2", "Turborepo"],
  },
];

export const projects = [
  {
    title: "CodeSM",
    category: "Sandboxed Code Execution",
    description:
      "A coding platform that safely runs untrusted code and grades it in the background.",
    problem:
      "User code can be malicious or loop forever. It has to run safely, and grading must not block the API.",
    architecture:
      "Express API stores the submission and puts it on a BullMQ queue, so it returns instantly. Workers run the code in Docker and save results to PostgreSQL (Drizzle). Problem files live in S3.",
    decisions: [
      "Each submission runs in an isolated Docker container with no network, a read-only filesystem, and CPU, memory and time limits. This contains infinite loops, fork bombs and network calls.",
      "Grading runs on BullMQ workers, so the API never waits on it.",
      "All of a submission's test cases run in one reused container, and grading stops at the first failure.",
    ],
    techstacks: ["Node.js", "Express.js", "BullMQ", "Redis", "PostgreSQL", "Drizzle", "Docker", "AWS S3"],
    github: "shivamxverma/CodeSM",
    link: "https://code-sm.vercel.app/",
    status: "live",
    preview: "/projects/Codesm-white.png",
    previewDark: "/projects/Codesm-black.png",
  },
  {
    title: "DeepDoc",
    category: "RAG, Retrieval Tuning",
    description:
      "Ask questions about your PDFs and get answers grounded in the document.",
    problem:
      "Simple RAG loses context: chunks cut sections in half, follow-up questions retrieve the wrong parts, and weak matches waste the token budget.",
    architecture:
      "Next.js app with Azure OpenAI for answers and embeddings, Pinecone for vector search, PostgreSQL (Drizzle) for chat history, and Vercel Blob for uploaded PDFs.",
    decisions: [
      "Documents are split into section-aware chunks, so headings and bullets stay together.",
      "Search only looks at the active document's vectors.",
      "Follow-up questions are rewritten from chat history before retrieval.",
      "Retrieved chunks are ranked by score, weak and duplicate matches are dropped, and the best are packed into a fixed token budget.",
      "Chunking and retrieval settings were tuned across 100+ configurations.",
    ],
    techstacks: ["Next.js", "TypeScript", "Azure OpenAI", "Pinecone", "PostgreSQL", "Drizzle", "Vercel Blob"],
    github: "shivamxverma/DeepDoc",
    link: "https://github.com/shivamxverma/DeepDoc",
    status: "active",
    preview: "/projects/DeepDoc.png",
    previewDark: "/projects/DeepDoc.png",
  },
  {
    title: "Yuvro",
    category: "Web IDE, Kubernetes",
    description:
      "A browser IDE like Replit. Each project runs in its own container with a terminal, file editor, app preview and database browser.",
    problem:
      "User code has to run somewhere isolated. Every project needs its own runtime, files and terminal, kept off the main servers.",
    architecture:
      "FastAPI services for auth and metadata, an orchestrator that starts a Kubernetes container per project on demand, and a small runner inside each one. Files are stored in S3, metadata in PostgreSQL.",
    decisions: [
      "Every file is stored once by its content hash, so identical files across projects are never duplicated. A scheduled garbage collector deletes files nothing points to.",
      "Each project gets its own on-demand Kubernetes container, keeping user code off the main servers.",
      "The runner streams a live terminal over WebSockets and serves the file editor, app preview and database browser.",
    ],
    techstacks: ["Python", "FastAPI", "PostgreSQL", "Kubernetes", "AWS S3", "WebSockets"],
    github: "shivamxverma/yuvro",
    link: "https://drive.google.com/file/d/1Tb_NXvNCp8AcG48K_PUl4GhvSY1ZqiAY/view?usp=sharing",
    linkLabel: "Demo",
    status: "active",
  },
  {
    title: "Hireflow",
    category: "AI Automation, Job Pipelines",
    description:
      "Finds job listings, tailors resume bullets to each one, and applies automatically. I used it for my own job search.",
    problem:
      "Applying to many roles by hand is slow, and AI rewrites can invent skills you do not have.",
    architecture:
      "Collection, AI processing and browser automation run as separate BullMQ queues, so a block in one stage does not stall the others.",
    decisions: [
      "Pulls listings from LinkedIn, Wellfound, YC Work at a Startup and Telegram.",
      "A validator rejects any rewritten bullet that mentions a skill not in my real profile.",
      "Duplicate listings across sources are removed by hashing title, company and description.",
    ],
    techstacks: ["Node.js", "TypeScript", "BullMQ", "Redis", "PostgreSQL", "Playwright", "Gemini"],
    github: "shivamxverma/hireflow",
    link: "https://github.com/shivamxverma/hireflow",
    status: "active",
  },
  {
    title: "Storix",
    category: "Async Pipelines, Live Status",
    description:
      "Upload a PDF and watch each processing stage happen live.",
    problem:
      "Heavy PDF extraction inside a request causes timeouts, and users wait without knowing what is happening.",
    architecture:
      "FastAPI takes the upload, Celery workers do the extraction, and Redis Pub/Sub sends progress to the Next.js client over WebSockets.",
    decisions: [
      "All extraction runs outside the request.",
      "Users see parse, extract and save stages as they happen.",
    ],
    techstacks: ["Next.js", "TypeScript", "FastAPI", "Celery", "PostgreSQL", "Redis", "AWS S3", "WebSockets"],
    github: "shivamxverma/Storix",
    link: "https://async-doc.vercel.app",
    status: "live",
    preview: "/projects/Storix.png",
    previewDark: "/projects/Storix.png",
  },
  {
    title: "Chatterly",
    category: "Real-Time Chat, Kafka",
    description:
      "A real-time chat app built to handle many messages at once.",
    problem:
      "Writing every message straight to the database becomes a bottleneck under heavy traffic.",
    architecture:
      "Socket.io servers publish messages to Kafka. Workers batch-write them to PostgreSQL, and Redis Pub/Sub shares events across servers.",
    decisions: [
      "Kafka separates receiving messages from saving them.",
      "Users connected to different servers can still share a room.",
    ],
    techstacks: ["Next.js", "TypeScript", "Node.js", "Socket.io", "Apache Kafka", "Redis", "PostgreSQL", "Prisma"],
    github: "shivamxverma/chatterly",
    link: "https://github.com/shivamxverma/chatterly",
    status: "active",
    preview: "/projects/chatterly.png",
    previewDark: "/projects/chatterly.png",
  },
  {
    title: "Collab-Draw",
    category: "Real-Time Collaboration",
    description:
      "A shared whiteboard where several people draw on the same canvas live.",
    architecture:
      "Next.js and Canvas on the frontend, a REST API and a separate WebSocket server, PostgreSQL with Prisma, in a Turborepo monorepo.",
    decisions: [
      "HTTP and WebSocket servers are separate, so they scale on their own.",
      "Shared database schema and UI code live in one monorepo.",
    ],
    techstacks: ["Next.js", "TypeScript", "Canvas API", "Node.js", "WebSockets", "PostgreSQL", "Prisma"],
    status: "active",
  },
  {
    title: "WebVox",
    category: "Video Calls, WebRTC",
    description:
      "Peer-to-peer video calls in the browser, with a Node.js signaling server.",
    decisions: [
      "Video and audio go directly between browsers over WebRTC.",
      "A WebSocket server exchanges the connection details and manages rooms.",
    ],
    techstacks: ["JavaScript", "Node.js", "Express.js", "WebRTC", "WebSockets"],
    status: "active",
  },
  {
    title: "Courseq",
    category: "Backend API, Payments",
    description:
      "Backend for a course marketplace with user, creator and admin roles.",
    decisions: [
      "Purchases move through PENDING, SUCCESS and FAILED states.",
      "Database constraints block duplicate purchases.",
    ],
    techstacks: ["Node.js", "Express.js", "TypeScript", "PostgreSQL"],
    status: "active",
  },
];

export const techStackGroups = [
  {
    title: "Languages",
    items: ["Python", "TypeScript", "SQL", "JavaScript", "C++"],
  },
  {
    title: "Backend",
    items: ["FastAPI", "Node.js", "Express.js", "asyncio", "REST APIs", "WebSockets", "JWT/OAuth"],
  },
  {
    title: "Databases",
    items: ["PostgreSQL", "MongoDB", "Redis", "Pinecone", "Drizzle", "Prisma"],
  },
  {
    title: "Queues and Workers",
    items: ["Celery", "BullMQ", "Apache Kafka", "Redis Pub/Sub"],
  },
  {
    title: "Cloud and DevOps",
    items: ["Docker", "Kubernetes", "AWS (S3, EC2)", "Cloudflare R2", "Linux", "CI/CD"],
  },
  {
    title: "AI",
    items: ["RAG", "Vector search", "Azure OpenAI", "MCP", "Gemini"],
  },
  {
    title: "Frontend and Tools",
    items: ["React", "Next.js", "Tailwind CSS", "Git", "Turborepo"],
  },
];

export const currentBuilding = {
  title: "What I'm Building",
  summary:
    "A personal knowledge base that helps me write better cold messages to startup founders.",
  body: [
    "My experience, skills and projects are stored as structured notes.",
    "Prompts look at a startup, guess its hardest engineering problems, and match them to work I have done.",
    "The output is a short message: the problem, my proof, and a simple ask.",
  ],
};

export const learningThemes = [
  "Backend architecture and system design",
  "Async workflows and background jobs",
  "Applied AI: RAG, retrieval tuning and MCP",
  "Developer tools and isolated runtimes",
];

export const engineeringStrengths = [
  "Async workers and queues",
  "Sandboxed code execution",
  "Auth for AI agents (MCP, OAuth)",
  "Content-addressed storage",
  "Usage-based billing",
  "RAG pipelines",
];

export const hackathons = [];

export const research = [];
