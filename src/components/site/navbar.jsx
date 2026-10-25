"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useTheme } from "next-themes";
import { Menu, Moon, Sun, X } from "lucide-react";
import { navLinks, profile } from "@/constants";

export default function Navbar() {
  const pathname = usePathname();
  const { resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => setMounted(true), []);
  useEffect(() => setOpen(false), [pathname]);

  const isDark = mounted && resolvedTheme === "dark";

  return (
    <nav className="site-nav" aria-label="Main navigation">
      <div className="container site-nav-inner">
        <Link href="/" className="site-brand">
          {profile.shortName}
        </Link>

        <div className="flex items-center gap-1 md:hidden">
          <ThemeButton isDark={isDark} onClick={() => setTheme(isDark ? "light" : "dark")} />
          <button
            type="button"
            className="nav-burger"
            aria-label="Menu"
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>

        <div className={`site-nav-links ${open ? "is-open" : ""}`}>
          {navLinks.map((link) => (
            <Link
              key={link.path}
              href={link.path}
              className={`site-nav-link ${pathname === link.path ? "is-active" : ""}`}
            >
              {link.name}
            </Link>
          ))}
          <a
            href={profile.resume}
            target="_blank"
            rel="noopener noreferrer"
            className="site-nav-link"
          >
            Resume
          </a>
          <span className="hidden md:inline-flex">
            <ThemeButton isDark={isDark} onClick={() => setTheme(isDark ? "light" : "dark")} />
          </span>
        </div>
      </div>
    </nav>
  );
}

function ThemeButton({ isDark, onClick }) {
  return (
    <button
      type="button"
      className="theme-toggle"
      onClick={onClick}
      aria-label="Toggle dark mode"
      title="Toggle dark mode"
    >
      {isDark ? <Sun size={18} /> : <Moon size={18} />}
    </button>
  );
}
