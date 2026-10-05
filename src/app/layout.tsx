import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "JobVista - Find Your Dream Job That Matches Your Skill",
  description: "Discover a fast, transparent job search that gives you direct access to top companies looking for exactly your skills and background.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-[#fcfdff] text-slate-800 antialiased selection:bg-blue-100 selection:text-blue-700">
        {children}
      </body>
    </html>
  );
}
