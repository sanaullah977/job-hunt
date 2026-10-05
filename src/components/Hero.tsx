"use client";

import React, { useState } from "react";
import { Search, MapPin } from "lucide-react";

interface HeroProps {
  onSearch?: (title: string, location: string) => void;
  onTagClick?: (tag: string) => void;
}

export default function Hero({ onSearch, onTagClick }: HeroProps) {
  const [keyword, setKeyword] = useState("");
  const [location, setLocation] = useState("");

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (onSearch) {
      onSearch(keyword, location);
    }
  };

  const popularTags = ["Designer", "React", "DevOps", "Project Manager", "iOS"];

  const hiringCompanies = [
    {
      name: "google",
      svg: (
        <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12.48 10.92v3.28h7.84c-.24 1.84-.853 3.187-1.787 4.133-1.147 1.147-2.933 2.4-6.053 2.4-4.827 0-8.6-3.893-8.6-8.72s3.773-8.72 8.6-8.72c2.6 0 4.507 1.027 5.907 2.347l2.307-2.307C18.747 1.44 16.133 0 12.48 0 5.867 0 .307 5.387.307 12s5.56 12 12.173 12c3.573 0 6.267-1.173 8.373-3.36 2.16-2.16 2.84-5.213 2.84-7.667 0-.76-.053-1.467-.173-2.053H12.48z" />
        </svg>
      ),
    },
    {
      name: "microsoft",
      svg: (
        <svg className="w-4 h-4" viewBox="0 0 23 23" fill="currentColor">
          <path d="M0 0h11v11H0zM12 0h11v11H12zM0 12h11v11H0zM12 12h11v11H12z" />
        </svg>
      ),
    },
    {
      name: "amazon",
      svg: (
        <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
          <path d="M14.07 13.06c-1.39.2-2.82.35-4.24.46-1.95.15-3.32-.49-3.32-2.16 0-1.89 1.78-2.73 4.2-2.73.99 0 2.01.12 2.97.35l.39 4.08zm4.33 6.01c-.34.34-.84.34-1.25.12-1.96-1.27-4.49-1.95-7.05-1.95-3.56 0-7.04 1.39-9.52 3.82-.33.32-.82.32-1.16-.02-.32-.34-.3-1.02.04-1.37 2.84-2.78 6.83-4.37 10.93-4.37 2.91 0 5.8.77 8.01 2.22.46.3.56.96.22 1.34l-.22.21zm.99-3.92c-.22.3-.61.42-.96.3l-1.34-.48c-.28-.1-.47-.36-.45-.65.29-3.23-.97-5.91-3.66-6.66-.41-.12-.66-.54-.57-.96.09-.41.51-.68.93-.56 3.4 1 4.95 4.34 4.6 8.35-.02.26.12.5.37.58l1.08.38z" />
        </svg>
      ),
    },
    {
      name: "meta",
      svg: (
        <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
          <path d="M16.96 4.06c-2.4 0-4.4 1.57-5.06 3.73-.66-2.16-2.66-3.73-5.06-3.73C3.07 4.06 0 7.13 0 10.92c0 5.37 6.44 10.37 11.45 12.87.28.14.62.14.9 0 5.01-2.5 11.45-7.5 11.45-12.87 0-3.79-3.07-6.86-6.84-6.86zm-5.06 14.56C8.16 16.5 2.4 12.33 2.4 10.92c0-2.46 2-4.46 4.46-4.46 2.05 0 3.79 1.4 4.32 3.38.11.4.47.69.88.69s.77-.29.88-.69c.53-1.98 2.27-3.38 4.32-3.38 2.46 0 4.46 2 4.46 4.46 0 1.41-5.76 5.58-9.5 7.7z" />
        </svg>
      ),
    },
    {
      name: "stripe",
      svg: (
        <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
          <path d="M13.976 9.15c-2.172-.806-3.356-1.426-3.356-2.409 0-.831.683-1.305 1.901-1.305 2.227 0 4.515.858 6.09 1.631l.89-5.494C18.252.97 15.688.5 12.482.5 7.153.5 3.322 3.376 3.322 7.742c0 4.326 3.693 5.485 7.108 6.741 2.408.887 3.238 1.673 3.238 2.68 0 1.042-.99 1.642-2.457 1.642-2.58 0-5.493-1.229-7.258-2.298L2.9 22.106C5.076 23.233 8.35 24 11.895 24c5.789 0 9.789-2.827 9.789-7.464 0-4.568-3.793-5.717-7.708-6.986z" />
        </svg>
      ),
    },
    {
      name: "shopify",
      svg: (
        <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
          <path d="M15.34 2.87l-1.6 1.49c-.19-.53-.51-.97-.99-1.24-.76-.43-1.64-.32-2.28.16-.46.34-.73.84-.79 1.4-.04.4.05.8.27 1.15l-3.36 1.04c-.39.12-.53.62-.27.92l5.12 5.92c.16.18.39.29.64.29.08 0 .16-.01.24-.04l6.09-2.02c.38-.13.56-.57.38-.94l-3.45-8.07zm-2.82 2.27c.18-.13.43-.16.65-.04.22.13.35.36.35.61l-2.05.65c.08-.66.49-1.07 1.05-1.22z" />
        </svg>
      ),
    },
  ];

  return (
    <section className="relative pt-12 pb-16 md:pt-20 md:pb-24 overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-50 border border-blue-100 text-blue-600 text-xs font-semibold tracking-wide uppercase shadow-sm mb-6">
          <span className="w-1.5 h-1.5 rounded-full bg-blue-600"></span>
          No.1 Trusted Job Board
        </div>

        {/* Hero Title */}
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-black text-slate-900 tracking-tight leading-[1.15] max-w-4xl mx-auto mb-6">
          Find Your Dream Job That Matches Your Skill
        </h1>

        {/* Subtitle */}
        <p className="text-base sm:text-lg text-slate-500 max-w-2xl mx-auto font-normal leading-relaxed mb-10">
          Discover a fast, transparent job search that gives you direct access to top companies looking for exactly your skills and background.
        </p>

        {/* Search Bar */}
        <form
          onSubmit={handleSearchSubmit}
          className="max-w-3xl mx-auto bg-white rounded-2xl md:rounded-full p-2.5 md:p-2 border border-slate-200/80 shadow-xl shadow-slate-200/50 flex flex-col md:flex-row items-center gap-2 md:gap-0"
        >
          {/* Keyword Search */}
          <div className="flex items-center gap-3 px-4 py-2.5 w-full md:flex-1 text-left">
            <Search className="w-5 h-5 text-blue-500 shrink-0" />
            <input
              type="text"
              value={keyword}
              onChange={(e) => setKeyword(e.target.value)}
              placeholder="Job title, keyword, or company..."
              className="w-full text-sm text-slate-800 placeholder-slate-400 focus:outline-none bg-transparent"
            />
          </div>

          <div className="hidden md:block w-px h-8 bg-slate-200 mx-1"></div>

          {/* Location Search */}
          <div className="flex items-center gap-3 px-4 py-2.5 w-full md:w-64 text-left">
            <MapPin className="w-5 h-5 text-slate-400 shrink-0" />
            <input
              type="text"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
              placeholder="City or state..."
              className="w-full text-sm text-slate-800 placeholder-slate-400 focus:outline-none bg-transparent"
            />
          </div>

          {/* Search Button */}
          <button
            type="submit"
            className="w-full md:w-auto px-7 py-3 rounded-xl md:rounded-full bg-blue-600 hover:bg-blue-700 text-white font-medium text-sm transition-all duration-200 shadow-md shadow-blue-500/25 active:scale-95 shrink-0"
          >
            Search Jobs
          </button>
        </form>

        {/* Popular Searches */}
        <div className="mt-5 flex flex-wrap items-center justify-center gap-2 text-xs text-slate-400">
          <span className="font-medium mr-1">Popular Searches:</span>
          {popularTags.map((tag) => (
            <button
              key={tag}
              onClick={() => onTagClick?.(tag)}
              type="button"
              className="px-3 py-1 rounded-full border border-slate-200 bg-white text-slate-600 hover:border-blue-500 hover:text-blue-600 hover:bg-blue-50/50 transition-all text-xs font-medium"
            >
              {tag}
            </button>
          ))}
        </div>

        {/* Top Hiring Companies Section */}
        <div className="mt-20 pt-8 border-t border-slate-100">
          <p className="text-[11px] font-semibold text-slate-400 uppercase tracking-widest text-center mb-6">
            TOP HIRING COMPANIES
          </p>

          <div className="flex flex-wrap items-center justify-center gap-8 sm:gap-12 md:gap-16 opacity-75 grayscale hover:grayscale-0 transition-all">
            {hiringCompanies.map((c) => (
              <div
                key={c.name}
                className="flex items-center gap-2 text-slate-700 hover:text-slate-900 transition-colors cursor-pointer group"
              >
                <div className="text-slate-500 group-hover:text-blue-600 transition-colors">
                  {c.svg}
                </div>
                <span className="font-semibold text-sm tracking-tight capitalize">
                  {c.name}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
