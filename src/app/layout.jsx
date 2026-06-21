import "./globals.css";
import { Toaster } from "@/components/ui/toaster";
import NavigationBar from "@/components/sections/navigation";
import Footer from "@/components/sections/footer";
import TopLoader from "@/components/top-loader";
import OnekoCat from "@/components/OnekoCat";
import { SmoothScrollProvider } from "@/components/smooth-scroll-provider";
import { ThemeProvider } from "@/components/theme-provider";
import { ScrollToTopButton } from "@/components/scroll-to-top";

export const metadata = {
  title: {
    template: "%s | Shivam Kumar Verma",
    default: "Shivam Kumar Verma - Software Engineer",
  },
  description:
    "Software engineer with strong backend depth and full-stack execution ability, focused on scalable systems, async workflows, real-time products, and developer tools.",
  keywords: [
    "Shivam Kumar Verma",
    "Software Engineer",
    "Full Stack Developer",
    "Backend Engineer",
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
  icons: {
    shortcut: "/favicon.ico",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://www.shivamworks.dev/",
    title: "Shivam Kumar Verma - Software Engineer",
    description:
      "Backend-heavy full-stack engineer building scalable systems, async workflows, real-time products, and developer-focused tools.",
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
      "Backend-heavy full-stack engineer building scalable systems, async workflows, real-time products, and developer-focused tools.",
    images: ["https://www.shivamworks.dev/opengraph.png"],
  },
  alternates: {
    canonical: "https://www.shivamworks.dev/",
  },
};

import { GeistPixelSquare } from "geist/font/pixel";
import { Space_Mono, Press_Start_2P } from "next/font/google";

const spaceMono = Space_Mono({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-space-mono",
  display: "swap",
});

const pressStart = Press_Start_2P({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-press-start",
  display: "swap",
});

export default function RootLayout({ children }) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Shivam Kumar Verma",
    jobTitle: "Software Engineer",
    description:
      "Backend-heavy full-stack engineer building scalable systems, async workflows, real-time products, and developer tools.",
    url: "https://www.shivamworks.dev/",
    sameAs: [
      "https://www.shivamworks.dev/",
      "https://github.com/shivamxverma",
      "https://www.linkedin.com/in/shivamv99/",
    ],
    alumniOf: {
      "@type": "CollegeOrUniversity",
      name: "IIIT Nagpur",
    },
  };

  return (
    <html lang="en" suppressHydrationWarning className={`${spaceMono.variable} ${pressStart.variable}`}>
      <head>
        <meta name="theme-color" content="#0B0D0E" />
        <meta name="color-scheme" content="dark light" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Doto:wght@100..900&display=swap"
          rel="stylesheet"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <TopLoader />
          <SmoothScrollProvider>
            <div className="grid min-h-[100dvh] grid-rows-[1fr_auto] overflow-x-hidden">
              <main
                className={`${GeistPixelSquare.className} max-w-[1800px] px-6 pt-14 md:mx-auto md:px-0 md:pt-24`}
              >
                <OnekoCat />
                {children}
              </main>
              <Footer />
              <NavigationBar />
              <Toaster />
              <ScrollToTopButton />
            </div>
          </SmoothScrollProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
