import "./globals.css";
import { Assistant, Lora } from "next/font/google";
import Navbar from "@/components/site/navbar";
import SiteFooter from "@/components/site/footer";
import { ThemeProvider } from "@/components/theme-provider";

const assistant = Assistant({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-assistant",
  display: "swap",
});

const lora = Lora({
  subsets: ["latin"],
  style: ["normal", "italic"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-lora",
  display: "swap",
});

export const metadata = {
  title: {
    template: "%s | Shivam Kumar Verma",
    default: "Shivam Kumar Verma - Software Engineer",
  },
  description:
    "Software engineer focused on backend systems, async workers, sandboxed code execution and AI workflows.",
  keywords: [
    "Shivam Kumar Verma",
    "Software Engineer",
    "Full Stack Developer",
    "Backend Engineer",
    "Python",
    "FastAPI",
    "React",
    "Next.js",
    "Node.js",
    "TypeScript",
    "Distributed Systems",
    "Portfolio",
  ],
  authors: [{ name: "Shivam Kumar Verma" }],
  creator: "Shivam Kumar Verma",
  publisher: "Shivam Kumar Verma",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://www.shivamworks.dev/",
    title: "Shivam Kumar Verma - Software Engineer",
    description:
      "Software engineer focused on backend systems, async workers, sandboxed code execution and AI workflows.",
    siteName: "Shivam Kumar Verma Portfolio",
    images: [
      {
        url: "https://www.shivamworks.dev/opengraph.png",
        width: 1200,
        height: 630,
        alt: "Shivam Kumar Verma - Software Engineer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Shivam Kumar Verma - Software Engineer",
    description:
      "Software engineer focused on backend systems, async workers, sandboxed code execution and AI workflows.",
    images: ["https://www.shivamworks.dev/opengraph.png"],
  },
  alternates: {
    canonical: "https://www.shivamworks.dev/",
  },
};

export default function RootLayout({ children }) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Shivam Kumar Verma",
    jobTitle: "Software Engineer",
    description:
      "Software engineer focused on backend systems, async workers, sandboxed code execution and AI workflows.",
    url: "https://www.shivamworks.dev/",
    sameAs: [
      "https://www.shivamworks.dev/",
      "https://github.com/shivamxverma",
      "https://www.linkedin.com/in/shivamv99/",
      "https://x.com/Shivam_v99",
    ],
    alumniOf: {
      "@type": "CollegeOrUniversity",
      name: "IIIT Nagpur",
    },
  };

  return (
    <html lang="en" suppressHydrationWarning className={`${assistant.variable} ${lora.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body>
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem={false}
          disableTransitionOnChange
        >
          <a href="#content" className="skip-link">
            Skip to content
          </a>
          <Navbar />
          <main id="content" className="site-main">
            {children}
          </main>
          <SiteFooter />
        </ThemeProvider>
      </body>
    </html>
  );
}
