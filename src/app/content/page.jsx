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
      title="Current Focus"
      subtitle="What I am building, learning, and getting better at."
    >
      <div className="flex flex-col gap-10">
        <section className="space-y-4">
          <h3 className="text-xl font-bold font-doto text-foreground">
            {currentBuilding.title}
          </h3>
          <p className="text-sm text-muted-foreground font-space-mono leading-relaxed">
            {currentBuilding.summary}
          </p>
          <div className="grid gap-3">
            {currentBuilding.body.map((item) => (
              <div
                key={item}
                className="border border-black/[0.06] bg-black/[0.02] p-4 dark:border-white/[0.06] dark:bg-white/[0.03]"
              >
                <p className="text-sm text-muted-foreground font-space-mono leading-relaxed">
                  {item}
                </p>
              </div>
            ))}
          </div>
        </section>

        <section className="space-y-4">
          <h3 className="text-xl font-bold font-doto text-foreground">
            What I&apos;m Learning
          </h3>
          <div className="grid gap-3 md:grid-cols-2">
            {learningThemes.map((item) => (
              <div
                key={item}
                className="border border-black/[0.06] bg-black/[0.02] p-4 dark:border-white/[0.06] dark:bg-white/[0.03]"
              >
                <p className="text-sm text-muted-foreground font-space-mono leading-relaxed">
                  {item}
                </p>
              </div>
            ))}
          </div>
        </section>

        <section className="space-y-4">
          <h3 className="text-xl font-bold font-doto text-foreground">
            Tech Stack
          </h3>
          <div className="grid gap-3">
            {techStackGroups.map((group) => (
              <div
                key={group.title}
                className="border border-black/[0.06] bg-black/[0.02] p-4 dark:border-white/[0.06] dark:bg-white/[0.03]"
              >
                <h4 className="text-sm font-semibold text-foreground md:text-base">
                  {group.title}
                </h4>
                <p className="mt-2 text-sm text-muted-foreground font-space-mono leading-relaxed">
                  {group.description}
                </p>
                <p className="mt-3 text-sm text-muted-foreground font-space-mono leading-relaxed">
                  {group.items.join(" · ")}
                </p>
              </div>
            ))}
          </div>
        </section>

        <section className="space-y-4">
          <h3 className="text-xl font-bold font-doto text-foreground">
            Personal Edge / Engineering Strengths
          </h3>
          <div className="flex flex-wrap gap-2">
            {engineeringStrengths.map((item) => (
              <span
                key={item}
                className="border border-black/[0.06] bg-black/[0.02] px-3 py-2 text-xs text-muted-foreground font-space-mono dark:border-white/[0.06] dark:bg-white/[0.03] md:text-sm"
              >
                {item}
              </span>
            ))}
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default Content;
