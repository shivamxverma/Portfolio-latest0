import Link from "next/link";
import { navLinks, profile, projects, socials } from "@/constants";

const hints = {
  "/projects": "Side projects",
  "/experience": "Internships",
  "/content": "Skills",
};

export default function SiteFooter() {
  const featured = projects.filter((p) => p.github).slice(0, 5);

  return (
    <footer className="site-footer">
      <div className="container">
        <div className="footer-grid">
          <div>
            <h4 className="footer-heading">Pages</h4>
            <ul className="footer-links">
              {navLinks.map((link) => (
                <li key={link.path}>
                  <Link href={link.path}>
                    {link.name}
                    <span className="link-hint">{hints[link.path]}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="footer-heading">Projects</h4>
            <ul className="footer-links">
              {featured.map((p) => (
                <li key={p.title}>
                  <a href={`https://github.com/${p.github}`} target="_blank" rel="noopener noreferrer">
                    {p.title} ↗
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="footer-heading">Elsewhere</h4>
            <ul className="footer-links">
              {socials.map((s) => (
                <li key={s.label}>
                  <a href={s.href} target="_blank" rel="noopener noreferrer">
                    {s.label} ↗
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="footer-heading">Contact</h4>
            <ul className="footer-links">
              <li>
                <a href={`mailto:${profile.email}`}>Email</a>
              </li>
              <li>
                <a href={profile.resume} target="_blank" rel="noopener noreferrer">
                  Resume ↗
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <span>© {new Date().getFullYear()} {profile.name}</span>
          <a href={`mailto:${profile.email}`}>{profile.email}</a>
        </div>
      </div>
    </footer>
  );
}
