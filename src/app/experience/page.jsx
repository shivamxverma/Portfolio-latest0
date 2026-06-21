import Layout from "@/components/layout/layout";
import Timeline from "@/components/layout/timeline";
import { experiences } from "@/constants";


export const metadata = {
  title: "Experience",
};

const Experience = () => {
  return (
    <Layout
      showHeader
      title="Experience"
      subtitle="Product-facing backend work focused on monetization, schema design, and performance."
    >
      <div>
        {[...experiences].reverse().map((experience, index) => (
          <Timeline {...experience} key={index} index={index} />
        ))}
      </div>
    </Layout>
  );
};

export default Experience;
