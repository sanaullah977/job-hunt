import React from "react";
import Link from "next/link";
import { Briefcase } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      name: "Facebook",
      href: "#",
      icon: (
        <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
          <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
        </svg>
      ),
    },
    {
      name: "Twitter",
      href: "#",
      icon: (
        <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
          <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
        </svg>
      ),
    },
    {
      name: "LinkedIn",
      href: "#",
      icon: (
        <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
          <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.738-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
        </svg>
      ),
    },
    {
      name: "Dribbble",
      href: "#",
      icon: (
        <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
          <path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm10.163 11.233c-.347-.076-2.593-.526-5.186-.239.513 1.455.975 2.977 1.348 4.498 2.29-1.077 3.565-2.772 3.838-4.259zm-4.945 5.565c-.381-1.464-.828-2.924-1.326-4.322-3.87 1.155-7.468 1.164-8.032 1.164-.035 0-.063 0-.097-.001.696 2.502 2.274 4.582 4.382 5.765 1.722-.865 3.518-1.796 5.073-2.606zm-10.741-4.275c.427 0 3.32-.016 6.843-.997-.999-2.091-2.196-4.008-3.483-5.59-3.238 1.488-5.385 4.673-5.385 8.358 0 .42.04.831.11 1.23.511-.908 1.191-2.037 1.915-3.001zm4.492-7.585c1.237 1.503 2.388 3.332 3.352 5.318 2.115-.758 3.84-1.921 4.545-2.518-2.05-1.996-4.832-3.228-7.897-3.228-.002.143 0 .285 0 .428zm6.39 3.876c-.636.529-2.228 1.583-4.237 2.273.439 1.258.835 2.569 1.176 3.88 2.308-.227 4.33.155 4.672.225-.015-2.48-1.229-4.717-1.611-6.378z" />
        </svg>
      ),
    },
  ];

  const resourceLinks = [
    { label: "Find Jobs", href: "#jobs" },
    { label: "Browse Companies", href: "#companies" },
    { label: "Salary Calculator", href: "#" },
    { label: "Career Advice", href: "#" },
    { label: "Help Center", href: "#" },
  ];

  const employerLinks = [
    { label: "Post a Job", href: "/post-job" },
    { label: "Talent Pool", href: "#" },
    { label: "Pricing Plans", href: "#" },
    { label: "Enterprise", href: "#" },
    { label: "Success Stories", href: "#" },
  ];

  const companyLinks = [
    { label: "About Us", href: "#about" },
    { label: "Careers", href: "#" },
    { label: "Press & Media", href: "#" },
    { label: "Our Partners", href: "#" },
    { label: "Contact", href: "#" },
  ];

  return (
    <footer className="bg-[#0b1329] text-slate-300 pt-16 pb-12 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-slate-800/80">
          {/* Brand info (2 cols on large screen) */}
          <div className="lg:col-span-2 space-y-5">
            <Link href="/" className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-lg bg-blue-600 flex items-center justify-center text-white shadow-md shadow-blue-500/30">
                <Briefcase className="w-4 h-4 stroke-[2.5]" />
              </div>
              <span className="text-xl font-bold tracking-tight text-white font-sans">
                JobVista
              </span>
            </Link>

            <p className="text-xs text-slate-400 leading-relaxed max-w-sm">
              Connecting exceptional talent with world-class opportunities. Discover your dream role or find your next game-changing team member with JobVista.
            </p>

            {/* Social Icons */}
            <div className="flex items-center gap-3 pt-2">
              {socialLinks.map((s) => (
                <a
                  key={s.name}
                  href={s.href}
                  aria-label={s.name}
                  className="w-8 h-8 rounded-full bg-slate-800/80 hover:bg-blue-600 text-slate-400 hover:text-white flex items-center justify-center transition-all duration-200"
                >
                  {s.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Resources Column */}
          <div>
            <h4 className="text-[11px] font-bold uppercase tracking-wider text-slate-400 mb-4">
              Resources
            </h4>
            <ul className="space-y-2.5">
              {resourceLinks.map((item) => (
                <li key={item.label}>
                  <Link
                    href={item.href}
                    className="text-xs text-slate-400 hover:text-white transition-colors"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Employers Column */}
          <div>
            <h4 className="text-[11px] font-bold uppercase tracking-wider text-slate-400 mb-4">
              Employers
            </h4>
            <ul className="space-y-2.5">
              {employerLinks.map((item) => (
                <li key={item.label}>
                  <Link
                    href={item.href}
                    className="text-xs text-slate-400 hover:text-white transition-colors"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Column */}
          <div>
            <h4 className="text-[11px] font-bold uppercase tracking-wider text-slate-400 mb-4">
              Company
            </h4>
            <ul className="space-y-2.5">
              {companyLinks.map((item) => (
                <li key={item.label}>
                  <Link
                    href={item.href}
                    className="text-xs text-slate-400 hover:text-white transition-colors"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom copyright & legal */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-slate-500">
          <p>© {currentYear} JobVista. All rights reserved. Built with precision for top talent.</p>

          <div className="flex items-center gap-6">
            <Link href="#" className="hover:text-slate-300 transition-colors">
              Privacy Policy
            </Link>
            <Link href="#" className="hover:text-slate-300 transition-colors">
              Terms of Service
            </Link>
            <Link href="#" className="hover:text-slate-300 transition-colors">
              Cookie Settings
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
