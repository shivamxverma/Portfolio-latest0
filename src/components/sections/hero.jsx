"use client";

import React, { useState, useEffect } from "react";
import { motion } from "motion/react";
import Link from "next/link";
import GithubIcon from "@/components/icons/github";
import LinkedinIcon from "@/components/icons/linkedin";
import HouseIcon from "@/components/icons/house";
import { Button } from "@/components/ui/button";
import { CornerBrackets } from "@/components/ui/corner-brackets";
import {
  currentBuilding,
  engineeringStrengths,
  notableAchievements,
} from "@/constants";

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 16 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.4, delay, ease: [0.16, 1, 0.3, 1] },
});

const socialLinks = [
  {
    label: "Portfolio",
    href: "https://www.shivamworks.dev/",
    icon: <HouseIcon className="h-3.5 w-3.5" />,
  },
  {
    label: "GitHub",
    href: "https://github.com/shivamxverma",
    icon: <GithubIcon className="h-3.5 w-3.5" />,
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/shivamv99/",
    icon: <LinkedinIcon className="h-3.5 w-3.5" />,
  },
];

const focusAreas = [
  "Backend systems and APIs",
  "Background jobs and queues",
  "Real-time apps",
  "Applied AI (RAG, LLM workflows)",
];

const WaveEmoji = () => {
  const [phase, setPhase] = useState("idle");
  const [key, setKey] = useState(0);

  useEffect(() => {
    setPhase("waving");
    const timer = setTimeout(() => setPhase("grayscale"), 700);
    return () => clearTimeout(timer);
  }, []);

  const handleMouseEnter = () => {
    setKey((k) => k + 1);
    setPhase("hover-wave");
  };

  const handleMouseLeave = () => {
    setPhase("grayscale");
  };

  const isWaving = phase === "waving" || phase === "hover-wave";
  const isGrayscale = phase === "grayscale";

  return (
    <span
      key={key}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className={`inline-block origin-[70%_70%] cursor-default transition-all duration-500 ${isWaving ? "animate-wave-slow" : ""} ${isGrayscale ? "grayscale" : ""}`}
    >
      👋🏻
    </span>
  );
};

const Hero = () => {
  return (
    <div className="mx-auto flex flex-col gap-10 md:max-w-4xl">
      <motion.div className="flex flex-col gap-6" {...fadeUp(0)}>
        <div>
          <p className="mb-3 font-doto text-xs text-muted-foreground md:text-sm">
            Hello, I&apos;m <WaveEmoji />
          </p>

          <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
            <h1 className="text-2xl font-bold uppercase tracking-tight md:text-4xl">
              Shivam Kumar Verma
            </h1>
          </div>

          <p className="mt-2 text-[11px] font-medium uppercase tracking-widest text-muted-foreground md:text-sm">
            Software Engineer · Full-Stack, Backend Heavy
          </p>
        </div>
      </motion.div>

      <div className="space-y-8">
        <motion.div {...fadeUp(0.1)}>
          <h5 className="mb-4 font-doto text-2xl font-medium md:text-3xl">
            Intro
          </h5>
          <p className="text-xs font-space-mono md:text-base md:leading-relaxed text-muted-foreground">
            I am a software engineer who mostly works on the backend. I build
            APIs, background jobs, real-time features and AI workflows.
          </p>
          <p className="mt-4 text-xs font-space-mono md:text-base md:leading-relaxed text-muted-foreground">
            Right now I am a Fullstack Developer Intern at{" "}
            <strong className="font-semibold text-foreground">poiro.com</strong>,
            working on the asset service and workflow builder behind its AI
            tools. Before that I interned at{" "}
            <strong className="font-semibold text-foreground">klimb.io</strong>,
            where I built usage-based billing for its AI features.
          </p>
        </motion.div>

        <motion.div {...fadeUp(0.2)}>
          <h5 className="mb-4 font-doto text-2xl font-medium md:text-3xl">
            About Me
          </h5>
          <p className="text-xs font-space-mono md:text-base md:leading-relaxed text-muted-foreground">
            I finished my B.Tech in Computer Science at{" "}
            <strong className="font-semibold text-foreground">IIIT Nagpur</strong>{" "}
            in{" "}
            <strong className="font-semibold text-foreground">May 2026</strong>.
            I like problems where the backend decides whether the product
            works: slow queries, heavy work that should not block a request,
            and code that must run safely.
          </p>
          <p className="mt-4 text-xs font-space-mono md:text-base md:leading-relaxed text-muted-foreground">
            I am looking for a full-time backend or full-stack role, remote or
            in Bangalore, starting{" "}
            <strong className="font-semibold text-foreground">23 November 2026</strong>.
          </p>
        </motion.div>

        <motion.div {...fadeUp(0.3)}>
          <p className="mb-3 text-xs text-muted-foreground md:text-sm">
            Links
          </p>
          <div className="flex flex-wrap gap-2 p-1">
            {socialLinks.map(({ label, href, icon }) => (
              <Link key={label} href={href} target="_blank" rel="noopener noreferrer">
                <CornerBrackets>
                  <Button size="sm" variant="noShadow">
                    {icon}
                    <span className="ml-1.5">{label}</span>
                  </Button>
                </CornerBrackets>
              </Link>
            ))}
          </div>
        </motion.div>

        <motion.div {...fadeUp(0.4)}>
          <h5 className="mb-4 font-doto text-2xl font-medium md:text-3xl">
            What I Work On
          </h5>
          <ul className="grid gap-3 md:grid-cols-2">
            {focusAreas.map((item) => (
              <li
                key={item}
                className="border border-black/[0.06] bg-black/[0.02] p-3 font-space-mono text-xs leading-relaxed text-muted-foreground dark:border-white/[0.06] dark:bg-white/[0.03] md:text-sm"
              >
                {item}
              </li>
            ))}
          </ul>
        </motion.div>

        <motion.div {...fadeUp(0.5)}>
          <h5 className="mb-4 font-doto text-2xl font-medium md:text-3xl">
            What I&apos;m Building
          </h5>
          <p className="text-xs font-space-mono md:text-base md:leading-relaxed text-muted-foreground">
            {currentBuilding.summary}
          </p>
        </motion.div>

        <motion.div {...fadeUp(0.6)}>
          <h5 className="mb-4 font-doto text-2xl font-medium md:text-3xl">
            Engineering Strengths
          </h5>
          <div className="flex flex-wrap gap-2">
            {engineeringStrengths.map((item) => (
              <span
                key={item}
                className="border border-black/[0.06] bg-black/[0.02] px-3 py-2 font-space-mono text-[11px] text-muted-foreground dark:border-white/[0.06] dark:bg-white/[0.03] md:text-xs"
              >
                {item}
              </span>
            ))}
          </div>
        </motion.div>

        <motion.div {...fadeUp(0.7)}>
          <h5 className="mb-4 font-doto text-2xl font-medium md:text-3xl">
            Notable Achievements
          </h5>
          <ul className="space-y-6">
            {notableAchievements.map(({ title, body }) => (
              <li
                key={title}
                className="border-l-2 border-muted-foreground/25 pl-4"
              >
                <span className="text-sm font-semibold text-foreground md:text-base">
                  {title}.{" "}
                </span>
                <span className="font-space-mono text-sm leading-relaxed text-muted-foreground md:text-base">
                  {Array.isArray(body)
                    ? body.map((seg, i) =>
                        seg.bold ? (
                          <strong key={i} className="font-semibold text-foreground">
                            {seg.text}
                          </strong>
                        ) : (
                          <span key={i}>{seg.text}</span>
                        )
                      )
                    : body}
                </span>
              </li>
            ))}
          </ul>
        </motion.div>
      </div>
    </div>
  );
};

export default Hero;
