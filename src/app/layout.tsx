import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const playfair = Playfair_Display({ subsets: ["latin"], variable: "--font-playfair" });

export const metadata: Metadata = {
  title: "Noor Fatima | Full Stack & Mobile Developer",
  description: "Portfolio of Noor Fatima. Where creativity meets code 🌸. Discover my projects, skills, and experience.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <body className={`${inter.variable} ${playfair.variable} antialiased selection:bg-brand-purple/30 selection:text-white`}>
        {children}
      </body>
    </html>
  );
}
