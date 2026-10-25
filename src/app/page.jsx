import Image from "next/image";
import Link from "next/link";
import { slugify } from "@/lib/utils";
import { FaGithub, FaLinkedin, FaXTwitter, FaRegFileLines, FaRegEnvelope } from "react-icons/fa6";
import { SiLeetcode } from "react-icons/si";
import {
  experiences,
  notableAchievements,
  profile,
  projects,
  socials,
  techStackGroups,
} from "@/constants";

export const metadata = {
  title: "Shivam Kumar Verma",
};

const socialIcons = {
  GitHub: FaGithub,
  LinkedIn: FaLinkedin,
  Twitter: FaXTwitter,
  LeetCode: SiLeetcode,
};

const ext = { target: "_blank", rel: "noopener noreferrer" };

function HeroImage({ className, size }) {
  return (
    <div className={`hero-image ${className}`}>
      <Image
        src="/shivam.png"
        alt="Shivam Kumar Verma"
        width={size}
        height={Math.round((size * 1761) / 2048)}
        sizes="(max-width: 768px) 256px, 400px"
        priority
      />
    </div>
  );
}

export default function Home() {
  const skillCount = techStackGroups.reduce((n, g) => n + g.items.length, 0);
  const jobs = [...experiences].reverse();

  const cards = [
    {
      href: "/projects",
      tag: "Side projects",
      count: projects.length,
      title: "Projects",
      desc: "Sandboxes, queues, RAG and real-time apps I have built.",
      action: "View projects",
    },
    {
      href: "/experience",
      tag: "Internships",
      count: experiences.length,
      title: "Experience",
      desc: "What I built at poiro.com and klimb.io.",
      action: "View experience",
    },
    {
      href: "/content",
      tag: "Stack",
      count: skillCount,
      title: "Focus",
      desc: "What I am building, learning, and the tools I use.",
      action: "View focus",
    },
    {
      href: profile.resume,
      external: true,
      tag: "PDF",
      count: "1 page",
      title: "Resume",
      desc: "One page: experience, projects and achievements.",
      action: "Open resume",
    },
  ];

  return (
    <div className="container">
      {/* Intro */}
      <div className="hero-grid">
        <div>
          <HeroImage className="hero-image-mobile" size={256} />
          <section>
            <h1 className="hero-title">Hey, I am Shivam</h1>
            <h3 className="hero-tagline">
              backend, async systems, and applied AI. always building.
            </h3>

            <div className="prose-block">
              <p>
                I am a software engineer who mostly works on the backend.
                Currently, I am a Fullstack Developer Intern at{" "}
                <a href="https://poiro.com" {...ext}>poiro.com</a>, where I
                work on the shared asset service and the AI workflow builder
                behind its generation tools.
              </p>
              <p>
                Before that, I interned at{" "}
                <a href="https://klimb.io" {...ext}>klimb.io</a>, where I built
                a credit ledger that made usage-based billing possible for 6+
                AI features.
              </p>
              <p>
                I build a lot of <Link href="/projects">side projects</Link>.
                Some favourites: <a href="https://github.com/shivamxverma/yuvro" {...ext}>Yuvro</a>,
                a browser IDE that runs each project in its own Kubernetes
                container; <a href="https://code-sm.vercel.app/" {...ext}>CodeSM</a>,
                a sandbox that runs untrusted code safely; and{" "}
                <a href="https://github.com/shivamxverma/DeepDoc" {...ext}>DeepDoc</a>,
                a RAG app for asking questions about PDFs.
              </p>
              <p>
                I finished my B.Tech in Computer Science at IIIT Nagpur in May
                2026. I am in the top 5% on{" "}
                <a href="https://leetcode.com/u/MahavirCoder/" {...ext}>LeetCode</a>{" "}
                and 3-star on{" "}
                <a href="https://www.codechef.com/users/mahavir99" {...ext}>CodeChef</a>.
              </p>
              <p>
                I am looking for a full-time backend or full-stack role, remote
                or in Bangalore, from 23 November 2026. Reach me at{" "}
                <a href={`mailto:${profile.email}`}>{profile.email}</a>.
              </p>
            </div>

            <div className="social-pill-group">
              {socials
                .filter((s) => socialIcons[s.label])
                .map((s) => {
                  const Icon = socialIcons[s.label];
                  return (
                    <a key={s.label} className="social-pill" href={s.href} {...ext}>
                      <Icon />
                      <span>{s.label}</span>
                    </a>
                  );
                })}
              <a className="social-pill" href={profile.resume} {...ext}>
                <FaRegFileLines />
                <span>Resume</span>
              </a>
              <a className="social-pill" href={`mailto:${profile.email}`}>
                <FaRegEnvelope />
                <span>Email</span>
              </a>
            </div>
          </section>
        </div>
        <div className="hero-spacer" />
        <HeroImage className="hero-image-desktop" size={300} />
      </div>

      {/* Explore */}
      <div className="explore-section">
        <div className="explore-header">
          <h2 className="section-title">Explore Work</h2>
          <p className="section-subtitle">
            Everything I have built and where I have worked.
          </p>
        </div>
        <div className="explore-grid">
          {cards.map((c) => {
            const body = (
              <>
                <div className="card-top">
                  <span className="card-tag">{c.tag}</span>
                  <span className="card-count">{c.count}</span>
                </div>
                <h3 className="card-title">{c.title}</h3>
                <p className="card-desc">{c.desc}</p>
                <div className="card-action">{c.action}</div>
              </>
            );
            return c.external ? (
              <a key={c.title} href={c.href} className="explore-card" {...ext}>
                {body}
              </a>
            ) : (
              <Link key={c.title} href={c.href} className="explore-card">
                {body}
              </Link>
            );
          })}
        </div>
      </div>

      {/* Lists */}
      <div className="two-col">
        <div>
          <h2 className="list-heading">
            <span>Projects</span>
            <span className="dot">•</span>
            <span className="archive">
              <Link href="/projects">All projects</Link>
            </span>
          </h2>
          <p className="list-sub">Things I have built, mostly backend and AI.</p>
          <ul className="recent-list">
            {projects.map((p) => (
              <li key={p.title}>
                <div className="item-row">
                  <Link href={`/projects#${slugify(p.title)}`} className="item-link" title={p.description}>
                    <strong className="font-semibold" style={{ color: "inherit" }}>{p.title}</strong>
                    <span className="muted"> : {p.description}</span>
                  </Link>
                </div>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h2 className="list-heading">
            <span>Experience</span>
            <span className="dot">•</span>
            <span className="archive">
              <Link href="/experience">Details</Link>
            </span>
          </h2>
          <p className="list-sub">Where I have worked.</p>
          <ul className="recent-list">
            {jobs.map((job) => (
              <li key={job.company}>
                <div className="item-row">
                  <span className="date-prefix hide-mobile">{job.year.split(" – ")[0]}</span>
                  <Link href="/experience" className="item-link">
                    {job.role}, {job.company}
                  </Link>
                </div>
              </li>
            ))}
          </ul>

          <h2 className="list-heading" style={{ marginTop: "2rem" }}>
            Achievements
          </h2>
          <p className="list-sub">Competitive programming and hackathons.</p>
          <ul className="recent-list">
            {notableAchievements.map((a) => (
              <li key={a.title}>
                {a.body.map((seg, i) =>
                  seg.bold ? <strong key={i}>{seg.text}</strong> : <span key={i}>{seg.text}</span>
                )}
              </li>
            ))}
            <li>{profile.education}</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

