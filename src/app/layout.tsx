import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});
const space = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://noorfatima.dev"),
  title: {
    default: "Noor Fatima | Flutter & Full Stack Developer",
    template: "%s | Noor Fatima",
  },
  description:
    "Full Stack & Mobile Developer specializing in Flutter, React/Next.js, and AI/ML. Building premium digital experiences from Pakistan.",
  keywords: [
    "Noor Fatima",
    "Flutter Developer",
    "Full Stack Developer",
    "Mobile Developer",
    "React Developer",
    "Next.js",
    "AI ML Developer",
    "Pakistan Developer",
    "Portfolio",
  ],
  authors: [{ name: "Noor Fatima", url: "https://github.com/noorfatima018" }],
  creator: "Noor Fatima",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://noorfatima.dev",
    title: "Noor Fatima | Flutter & Full Stack Developer",
    description:
      "Full Stack & Mobile Developer specializing in Flutter, React/Next.js, and AI/ML. Building premium digital experiences from Pakistan.",
    siteName: "Noor Fatima Portfolio",
    images: [
      {
        url: "https://avatars.githubusercontent.com/u/187599428?v=4",
        width: 1200,
        height: 630,
        alt: "Noor Fatima - Flutter & Full Stack Developer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Noor Fatima | Flutter & Full Stack Developer",
    description:
      "Full Stack & Mobile Developer specializing in Flutter, React/Next.js, and AI/ML. Building premium digital experiences from Pakistan.",
    images: ["https://avatars.githubusercontent.com/u/187599428?v=4"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Noor Fatima",
  url: "https://noorfatima.dev",
  image: "https://avatars.githubusercontent.com/u/187599428?v=4",
  sameAs: [
    "https://github.com/noorfatima018",
    "https://www.linkedin.com/in/noor-fatima-653aa3337/",
  ],
  jobTitle: "Full Stack & Mobile Developer",
  description:
    "Flutter Developer, MERN Stack Developer, and AI/ML enthusiast passionate about building modern, scalable, and user-centric applications.",
  knowsAbout: [
    "Flutter",
    "React",
    "Next.js",
    "Python",
    "Machine Learning",
    "Firebase",
    "UI/UX Design",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body
        className={`${inter.variable} ${space.variable} antialiased`}
        style={{ fontFamily: "var(--font-inter), sans-serif" }}
      >
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
