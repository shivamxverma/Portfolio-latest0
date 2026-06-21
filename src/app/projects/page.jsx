import ProjectCard from "@/components/sections/projects";
import Layout from "@/components/layout/layout";
import { projects } from "@/constants";
import { fetchGitHubStars } from "@/lib/github";

export const metadata = {
  title: "Projects",
};

const Projects = async () => {
  const projectsWithStars = await Promise.all(
    projects.map(async (project) => {
      if (!project.github) return { ...project, stars: null };
      const stars = await fetchGitHubStars(project.github);
      return { ...project, stars };
    })
  );

  return (
    <Layout
      showHeader
      title="Projects"
      subtitle="Backend-heavy systems, async pipelines, real-time applications, and developer tools."
    >
      <div className="grid grid-cols-1 gap-4 lg:grid-cols-2">
        {projectsWithStars.map((project, index) => (
          <ProjectCard key={index} index={index} {...project} />
        ))}
      </div>
    </Layout>
  );
};

export default Projects;
