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
      { text: " (1800+ rating, 800+ problems). " },
      { text: "3-star on CodeChef", bold: true },
      { text: " (1700+). Pupil on Codeforces (max 1261)." },
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
        { text: "Replaced on/off feature flags with a " },
        { text: "PostgreSQL credit ledger", bold: true },
        { text: " that tracks each customer's usage of " },
        { text: "6+ AI features", bold: true },
        { text: ", so the product could charge by usage." },
      ],
      [
        { text: "Rewrote slow queries and restructured how the " },
        { text: "recruiter dashboard", bold: true },
        { text: " loads data, so it stays fast under concurrent load." },
      ],
    ],
    techstacks: ["TypeScript", "React", "Node.js", "Express.js", "PostgreSQL", "Prisma", "Redis", "AWS S3", "AWS EC2"],
  },
  {
    role: "Fullstack Developer Intern",
    year: "Jul 2026 – present",
    company: "poiro.com",
    type: "Internship",
    location: "Remote",
    responsibility: [
      [
        { text: "Built the " },
        { text: "node and group system", bold: true },
        { text: " for an AI workflow builder: steps pass typed outputs to each other, and groups run as reusable sub-workflows." },
      ],
      [
        { text: "Designed the data models and backend for a " },
        { text: "shared asset service used by 3 apps", bold: true },
        { text: ", migrated existing assets into it, and added folders, prompt Elements and duplicate-image blocking." },
      ],
      [
        { text: "Replaced one query per folder level with a single " },
        { text: "MongoDB $graphLookup", bold: true },
        { text: ", and cut folder edits from 3 database round-trips to 1." },
      ],
      [
        { text: "Put Pixabay, Unsplash and Pinterest behind " },
        { text: "one adapter interface", bold: true },
        { text: ", with per-org Redis caching and spend caps (500 calls per org per day) to stop runaway costs." },
      ],
      [
        { text: "Cleared " },
        { text: "1,041 lint findings", bold: true },
        { text: " across 7 Python packages and made lint blocking in CI; deleted " },
        { text: "13,769 lines", bold: true },
        { text: " of dead TypeScript." },
      ],
    ],
    techstacks: ["Python", "FastAPI", "MongoDB", "Redis", "Celery", "Next.js", "TypeScript", "Cloudflare R2", "Turborepo"],
  },
];

export const projects = [
  {
    title: "Yuvro",
    category: "Cloud IDE, Kubernetes",
    description:
      "A browser IDE like Replit. Each project gets its own container with an editor, terminal, app preview and database browser.",
    problem:
      "Running user code needs isolation. Every project needs its own runtime, files and terminal without touching the main servers.",
    architecture:
      "React client, a FastAPI service for auth and metadata, a FastAPI orchestrator that starts per-project Kubernetes deployments, and a small runner inside each workspace.",
    decisions: [
      "Files are stored once by their SHA-256 hash in S3, so identical files are never duplicated. A scheduled job deletes unused ones.",
      "The runner streams the terminal over WebSockets, serves file APIs and proxies app ports.",
      "The file tree is one self-referencing Postgres table with indexes for fast lookups.",
    ],
    techstacks: ["React", "TypeScript", "FastAPI", "PostgreSQL", "Kubernetes", "AWS S3", "WebSockets"],
    github: "shivamxverma/yuvro",
    link: "https://github.com/shivamxverma/yuvro",
    status: "active",
  },
  {
    title: "CodeSM",
    category: "Sandboxed Code Execution",
    description:
      "A coding platform that safely runs untrusted code in C, C++, Java, Go, Python and JavaScript.",
    problem:
      "User code can be malicious or loop forever. It has to run safely, and grading must not block the API.",
    architecture:
      "Express API stores the submission and puts it on a BullMQ queue. Workers run the code in Docker and save results to PostgreSQL.",
    decisions: [
      "Each run has no network, a read-only filesystem, dropped capabilities, and limits on memory (256 MB), processes (32), CPU and time.",
      "One container is reused across a submission's test cases, then destroyed.",
      "Grading stops at the first failed test case.",
      "Gemini gives step-by-step hints for each problem.",
    ],
    techstacks: ["Node.js", "Express.js", "TypeScript", "BullMQ", "Redis", "PostgreSQL", "Docker", "AWS EC2"],
    github: "shivamxverma/CodeSM",
    link: "https://code-sm.vercel.app/",
    status: "live",
    preview: "/projects/Codesm-white.png",
    previewDark: "/projects/Codesm-black.png",
  },
  {
    title: "DeepDoc",
    category: "RAG, LLM Evaluation",
    description:
      "Ask questions about your PDFs and get answers grounded in the document.",
    problem:
      "Simple RAG loses context: chunks cut sections in half, and follow-up questions retrieve the wrong parts.",
    architecture:
      "Next.js app with Azure OpenAI for answers and embeddings, Pinecone for vector search, and PostgreSQL for chat history.",
    decisions: [
      "Chunks follow the document's sections, so headings and bullets stay together.",
      "Follow-up questions are rewritten into standalone questions using chat history.",
      "A 36-case test set compares retrieval settings and prompts. Tuned across 100+ configurations.",
    ],
    techstacks: ["Next.js", "TypeScript", "Azure OpenAI", "Pinecone", "PostgreSQL", "Drizzle"],
    github: "shivamxverma/DeepDoc",
    link: "https://github.com/shivamxverma/DeepDoc",
    status: "active",
    preview: "/projects/DeepDoc.png",
    previewDark: "/projects/DeepDoc.png",
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
    items: ["TypeScript", "JavaScript", "Python", "C++", "SQL"],
  },
  {
    title: "Backend",
    items: ["Node.js", "Express.js", "FastAPI", "REST APIs", "WebSockets", "Socket.io", "WebRTC"],
  },
  {
    title: "Databases",
    items: ["PostgreSQL", "MongoDB", "Redis", "Pinecone", "Prisma", "Drizzle"],
  },
  {
    title: "Queues and Streaming",
    items: ["BullMQ", "Celery", "Apache Kafka", "Redis Pub/Sub"],
  },
  {
    title: "Infrastructure",
    items: ["Docker", "Kubernetes", "AWS (EC2, S3)", "Cloudflare R2", "Linux", "CI/CD"],
  },
  {
    title: "AI",
    items: ["RAG", "Vector search", "LLM evaluation", "Azure OpenAI", "Gemini"],
  },
  {
    title: "Frontend",
    items: ["React", "Next.js", "Tailwind CSS", "Turborepo"],
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
  "Applied AI: RAG and evaluating LLM output",
  "Developer tools and isolated runtimes",
];

export const engineeringStrengths = [
  "Background jobs and queues",
  "Sandboxed code execution",
  "Live progress over WebSockets",
  "Database design and query tuning",
  "Usage-based billing",
  "RAG pipelines",
];

export const hackathons = [];

export const research = [];
