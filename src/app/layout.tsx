import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Vo Viet Dung | Software Engineer – AI & Front-end",
  description:
    "Portfolio of Vo Viet Dung — a dynamic AI graduate and modern Front-end engineer passionate about architecting high-performance systems and seamless web applications.",
  keywords: [
    "Vo Viet Dung",
    "Software Engineer",
    "AI",
    "Front-end",
    "Next.js",
    "React",
    "Portfolio",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body
        className={`${geistSans.variable} ${geistMono.variable} font-sans antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
