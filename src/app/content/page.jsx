import Layout from "@/components/layout/layout";

export const metadata = {
  title: "Content",
};

const Content = () => {
  return (
    <Layout
      showHeader
      title="Content & Blogs"
      subtitle="My thoughts, tutorials, and content on building tech."
    >
      <div className="flex flex-col gap-10">
        {/* YouTube Video Container */}
        <div className="flex flex-col gap-3">
          <h3 className="text-xl font-bold font-doto text-foreground">YouTube</h3>
          <p className="text-sm text-muted-foreground font-space-mono">
            Check out my latest videos below.
          </p>
          <div className="flex justify-center w-full">
            <div className="relative w-full max-w-sm aspect-[9/16] rounded-xl overflow-hidden border border-border">
              <iframe 
                className="absolute top-0 left-0 w-full h-full"
                src="https://www.youtube.com/embed/W2EaxnUW1es" 
                title="YouTube video player" 
                frameBorder="0" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                allowFullScreen>
              </iframe>
            </div>
          </div>
        </div>

        {/* LinkedIn Post Container */}
        <div className="flex flex-col gap-3 mt-4">
          <h3 className="text-xl font-bold font-doto text-foreground">LinkedIn</h3>
          <p className="text-sm text-muted-foreground font-space-mono">
            Some of my recent posts and thoughts shared on LinkedIn.
          </p>
          <div className="w-full flex justify-center rounded-xl overflow-hidden">
            <iframe 
              src="https://www.linkedin.com/embed/feed/update/urn:li:activity:7438873717046255616" 
              height="800" 
              width="100%" 
              frameBorder="0" 
              allowFullScreen="" 
              title="Embedded post">
            </iframe>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Content;
