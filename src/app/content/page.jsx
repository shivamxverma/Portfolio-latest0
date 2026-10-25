import Layout from "@/components/layout/layout";
import {
  currentBuilding,
  engineeringStrengths,
  learningThemes,
  techStackGroups,
} from "@/constants";

export const metadata = {
  title: "Focus",
};

const Content = () => {
  return (
    <Layout
      showHeader
      title="Focus"
      subtitle="What I am building and learning right now, and the tools I use."
    >
      <section className="detail">
        <h2 className="section-title" style={{ marginBottom: "0.75rem" }}>
          {currentBuilding.title}
        </h2>
        <div className="prose-block">
          <p>{currentBuilding.summary}</p>
          <ul>
            {currentBuilding.body.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
      </section>

      <section className="detail">
        <h2 className="section-title" style={{ marginBottom: "0.75rem" }}>
          What I&apos;m Learning
        </h2>
        <div className="prose-block">
          <ul>
            {learningThemes.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
      </section>

      <section className="detail">
        <h2 className="section-title" style={{ marginBottom: "1rem" }}>
          Tech Stack
        </h2>
        <dl className="skills-table">
          {techStackGroups.map((group) => (
            <div key={group.title} className="contents">
              <dt>{group.title}</dt>
              <dd className="muted">{group.items.join(", ")}</dd>
            </div>
          ))}
        </dl>
      </section>

      <section className="detail">
        <h2 className="section-title" style={{ marginBottom: "0.75rem" }}>
          Strengths
        </h2>
        <div className="prose-block">
          <ul>
            {engineeringStrengths.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
      </section>
    </Layout>
  );
};

export default Content;
