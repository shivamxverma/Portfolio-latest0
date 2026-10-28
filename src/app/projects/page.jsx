import Layout from "@/components/layout/layout";
import { projects } from "@/constants";
import { fetchGitHubStars } from "@/lib/github";
import { slugify } from "@/lib/utils";

export const metadata = {
  title: "Projects",
};

const ext = { target: "_blank", rel: "noopener noreferrer" };

const Projects = async () => {
  const items = await Promise.all(
    projects.map(async (project) => {
      const githubUrl = project.github ? `https://github.com/${project.github}` : null;
      const liveUrl = project.link && project.link !== githubUrl ? project.link : null;
      const stars = project.github ? await fetchGitHubStars(project.github) : null;
      return { ...project, githubUrl, liveUrl, stars, id: slugify(project.title) };
    })
  );

  return (
    <Layout
      showHeader
      title="Projects"
      subtitle="Things I have built, mostly backend and AI. Short summary first, details below."
    >
      <ul className="project-list">
        {items.map((p) => (
          <li key={p.id}>
            <span className="project-stars">{p.stars ? `★ ${p.stars}` : ""}</span>
            <a href={`#${p.id}`} className="project-name">
              {p.title}
            </a>
            <span className="project-desc" title={p.description}>
              {p.description}
            </span>
          </li>
        ))}
      </ul>

      <div style={{ marginTop: "2.5rem" }}>
        {items.map((p) => (
          <section key={p.id} id={p.id} className="detail">
            <div className="detail-head">
              <h2 className="detail-title">{p.title}</h2>
              <span className="detail-tag">{p.category}</span>
            </div>

            <div className="prose-block">
              <p>{p.description}</p>
              {p.problem && (
                <p>
                  <strong>Problem.</strong> {p.problem}
                </p>
              )}
              {p.architecture && (
                <p>
                  <strong>How it works.</strong> {p.architecture}
                </p>
              )}
              {p.decisions?.length > 0 && (
                <ul>
                  {p.decisions.map((d) => (
                    <li key={d}>{d}</li>
                  ))}
                </ul>
              )}
            </div>

            <p className="detail-stack">{p.techstacks.join(", ")}</p>

            {(p.githubUrl || p.liveUrl) && (
              <div className="detail-links">
                {p.liveUrl && (
                  <a href={p.liveUrl} {...ext}>
                    {p.linkLabel ?? "Live"} ↗
                  </a>
                )}
                {p.githubUrl && (
                  <a href={p.githubUrl} {...ext}>
                    GitHub ↗
                  </a>
                )}
              </div>
            )}
          </section>
        ))}
      </div>
    </Layout>
  );
};

export default Projects;
