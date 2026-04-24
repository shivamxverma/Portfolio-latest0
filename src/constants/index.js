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
    name: "Content",
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
      { text: "Ranked top 5% globally on " },
      { text: "LeetCode", bold: true },
      { text: " (1,800+ rating) and reached " },
      { text: "3-star", bold: true },
      { text: " on CodeChef (1,700+ rating). Also a Pupil on Codeforces (max 1,261) and Rated on AtCoder (440+)." },
    ],
    link: "https://leetcode.com/u/MahavirCoder/",
    linkLabel: "LeetCode Profile",
  },
];

export const intros = [
  "Software Engineer",
  "Full-Stack Developer",
  "Backend Engineer",
  "Competitive Programmer",
  "Problem Solver",
];

export const experiences = [
  {
    role: "Software Developer Intern",
    year: "Nov 2025 - Mar 2026",
    company: "klimb.io",
    type: "Internship",
    location: "Remote",
    logo: "/klimbio_logo.jpeg",
    responsibility: [
      [
        { text: "Built an end-to-end " },
        { text: "AI-powered interview platform", bold: true },
        { text: " with adaptive question generation and automated proctoring, owning the full candidate data pipeline across multiple hiring stage workflows — reducing recruiter intervention at each stage." },
      ],
      [
        { text: "Redesigned the permission system from a rigid feature-flag model to a scalable " },
        { text: "credit-based entitlement architecture", bold: true },
        { text: ", enabling granular access control across core backend services and making the system significantly easier to extend for new product tiers." },
      ],
      [
        { text: "Improved recruiter dashboard performance by replacing live aggregation queries with " },
        { text: "precomputed data pipelines", bold: true },
        { text: " across multiple reporting modules, reducing query complexity and cutting load times noticeably." },
      ],
    ],
    techstacks: [
      "TypeScript",
      "React",
      "Node.js",
      "Express.js",
      "PostgreSQL",
      "Redis",
      "AWS (S3, EC2)",
    ],
  },
];

export const projects = [
  {
    title: "CodeSM",
    category: "Full-Stack · Web App",
    description:
      "Architected a queue-based code execution pipeline using BullMQ and Redis, safely executing untrusted user code across 5 languages via isolated Docker sandboxes managed by Node.js workers.",
    techstacks: ["React", "Node.js", "Express.js", "Redis", "BullMQ", "Docker", "PostgreSQL", "AWS EC2"],
    status: "active",
    link: "https://code-sm.vercel.app/",
    github: "shivamxverma/CodeSM",
    preview: "/projects/Codesm-white.png",
    previewDark: "/projects/Codesm-black.png",
  },
  {
    title: "Storix",
    category: "Full-Stack · Web App",
    description:
      "Architected a production-grade async PDF processing pipeline using FastAPI and Celery workers, featuring S3 pre-signed URL uploads and real-time job status via Redis Pub/Sub and WebSockets.",
    techstacks: ["Next.js", "TypeScript", "FastAPI", "Celery", "Redis", "PostgreSQL", "AWS S3"],
    status: "active",
    link: "https://async-doc.vercel.app",
    github: "shivamxverma/Storix",
    preview: "/projects/Storix.png",
    previewDark: "/projects/Storix.png",
  },
  {
    title: "Chatterly",
    category: "Full-Stack · Web App",
    description:
      "Architected a horizontally scalable real-time messaging system using Socket.IO and Redis Pub/Sub, featuring room-based event routing and NextAuth JWT-based authentication.",
    techstacks: ["Next.js", "Socket.IO", "Redis", "PostgreSQL", "Prisma", "NextAuth"],
    status: "active",
    link: "https://chatterly-olive.vercel.app/",
    github: "shivamxverma/Chatterly",
    preview: "/projects/chatterly.png",
    previewDark: "/projects/chatterly.png",
  },
  {
    title: "DeepDoc",
    category: "AI · Web App",
    description:
      "Built an AI-powered document Q&A system using semantic chunking and cosine similarity-based vector retrieval with a two-stage context assembly pipeline.",
    techstacks: ["Next.js", "TypeScript", "PostgreSQL", "Pinecone", "Clerk"],
    status: "active",
    link: "https://deep-doc-coral.vercel.app/",
    github: "shivamxverma/DeepDoc",
    preview: "/projects/DeepDoc.png",
    previewDark: "/projects/DeepDoc.png",
  },
];

export const hackathons = [
  {
    title: "Not Available in Resume",
    event: "Placeholder Event",
    year: "2024",
    placement: "Participant",
    college: "Placeholder",
    body: [
      { text: "No hackathon experience was found in the provided resume data. This is a placeholder to maintain the page structure." },
    ],
    techstacks: ["Placeholder"],
  },
];

export const research = [
  {
    title: "Not Available in Resume",
    category: "Placeholder Category",
    description: "No research experience was found in the provided resume data. This is a placeholder to maintain the page structure.",
    techstacks: ["Placeholder"],
    status: "placeholder",
    link: "#",
    journal: "Placeholder Journal",
    year: "2024",
    collaboration: "Placeholder",
  },
];
