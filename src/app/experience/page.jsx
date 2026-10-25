import Layout from "@/components/layout/layout";
import { experiences, profile } from "@/constants";

export const metadata = {
  title: "Experience",
};

const Experience = () => {
  const jobs = [...experiences].reverse();

  return (
    <Layout
      showHeader
      title="Experience"
      subtitle="Where I have worked and what I built there."
    >
      {jobs.map((job) => (
        <section key={job.company} className="detail">
          <div className="detail-head">
            <h2 className="detail-title">
              {job.logo && (
                // eslint-disable-next-line @next/next/no-img-element
                <img src={job.logo} alt="" className="detail-logo" />
              )}
              {job.company}
            </h2>
            <span className="detail-meta">
              {job.year}, {job.location.toLowerCase()}
            </span>
          </div>
          <p className="muted" style={{ fontWeight: 600 }}>
            {job.role}
          </p>

          <div className="prose-block" style={{ marginTop: "0.75rem" }}>
            <ul>
              {job.responsibility.map((bullet, i) => (
                <li key={i}>
                  {bullet.map((seg, j) =>
                    seg.bold ? <strong key={j}>{seg.text}</strong> : <span key={j}>{seg.text}</span>
                  )}
                </li>
              ))}
            </ul>
          </div>

          <p className="detail-stack">{job.techstacks.join(", ")}</p>
        </section>
      ))}

      <section className="detail">
        <div className="detail-head">
          <h2 className="detail-title">Education</h2>
        </div>
        <p>{profile.education}</p>
      </section>
    </Layout>
  );
};

export default Experience;
