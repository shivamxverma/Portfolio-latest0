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
  "Scalable backend systems",
  "Async workflows and pipelines",
  "Real-time products and streaming",
  "Developer tools and platform engineering",
  "Performance, reliability, and isolation",
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
            Hero / Intro
          </h5>
          <p className="text-xs font-space-mono md:text-base md:leading-relaxed text-muted-foreground">
            I am a software engineer with strong backend depth and full-stack
            execution ability. I build scalable systems, async workflows,
            developer tools, and real-time products with a clear focus on
            performance, reliability, isolation, automation, and practical
            product engineering.
          </p>
          <p className="mt-4 text-xs font-space-mono md:text-base md:leading-relaxed text-muted-foreground">
            My strongest work sits at the intersection of backend architecture,
            real-time systems, automation, infrastructure, and applied AI
            workflows. I enjoy taking technically difficult problems such as
            sandboxed execution, message-driven systems, distributed
            coordination, runtime isolation, and background processing, then
            turning them into usable products.
          </p>
        </motion.div>

        <motion.div {...fadeUp(0.2)}>
          <h5 className="mb-4 font-doto text-2xl font-medium md:text-3xl">
            About Me
          </h5>
          <p className="text-xs font-space-mono md:text-base md:leading-relaxed text-muted-foreground">
            I am a backend-heavy full-stack engineer and a B.Tech student in
            Computer Science and Engineering at{" "}
            <strong className="font-semibold text-foreground">IIIT Nagpur</strong>,
            graduating in{" "}
            <strong className="font-semibold text-foreground">May 2026</strong>.
            I am especially interested in system design, distributed systems,
            platform engineering, and applied AI. I am comfortable designing
            APIs, queues, orchestration layers, and real-time infrastructure
            when product quality depends on getting the backend architecture
            right.
          </p>
          <p className="mt-4 text-xs font-space-mono md:text-base md:leading-relaxed text-muted-foreground">
            I care more about solving real product bottlenecks than listing
            technologies. That usually means reducing latency, simplifying data
            models, moving heavy work out of the request path, or creating
            cleaner boundaries around execution and coordination. Across the
            systems I build, I have a strong bias toward reliability,
            maintainability, architecture clarity, and scale.
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
            Core Positioning
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
            What I&apos;m Currently Building
          </h5>
          <p className="text-xs font-space-mono md:text-base md:leading-relaxed text-muted-foreground">
            {currentBuilding.summary}
          </p>
          <p className="mt-4 text-xs font-space-mono md:text-base md:leading-relaxed text-muted-foreground">
            The core idea is straightforward: founders do not buy skills; they
            buy solutions to bottlenecks. I am using this repository to
            structure my experience, project evidence, startup analysis
            frameworks, and prompting workflows so an outreach system can infer
            likely engineering problems and connect them to relevant technical
            work.
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
