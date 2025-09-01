import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Starfield from "./components/Starfield";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Varsha Hemakumar — Portfolio",
  description: "Projects, fundamentals, and experience.",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      {}
      <body
        className={`${inter.className} site relative min-h-screen bg-black text-[#e8e8ee] overflow-x-hidden antialiased`}
      >
        {}
        <Starfield />
        {}
        <main id="main" className="relative z-0">
          {children}
        </main>
      </body>
    </html>
  );
}
