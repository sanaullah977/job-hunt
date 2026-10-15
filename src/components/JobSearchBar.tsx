"use client";

import React from "react";
import { Search, MapPin } from "lucide-react";

export interface JobSearchBarProps {
  keyword: string;
  onKeywordChange: (value: string) => void;
  location: string;
  onLocationChange: (value: string) => void;
  onSubmit: (e: React.FormEvent) => void;
  buttonText?: string;
  placeholderKeyword?: string;
  placeholderLocation?: string;
  className?: string;
}

export default function JobSearchBar({
  keyword,
  onKeywordChange,
  location,
  onLocationChange,
  onSubmit,
  buttonText = "Find Jobs",
  placeholderKeyword = "Search job titles or keywords...",
  placeholderLocation = "Location...",
  className = "",
}: JobSearchBarProps) {
  return (
    <form
      onSubmit={onSubmit}
      className={`bg-white rounded-2xl md:rounded-full p-2.5 md:p-2 border border-slate-200/90 shadow-sm flex flex-col md:flex-row items-center gap-2 md:gap-0 ${className}`}
    >
      {/* Keyword Search */}
      <div className="flex items-center gap-3 px-4 py-2.5 w-full md:flex-1 text-left">
        <Search className="w-5 h-5 text-blue-500 shrink-0" />
        <input
          type="text"
          value={keyword}
          onChange={(e) => onKeywordChange(e.target.value)}
          placeholder={placeholderKeyword}
          className="w-full text-sm text-slate-800 placeholder-slate-400 focus:outline-none bg-transparent"
        />
      </div>

      <div className="hidden md:block w-px h-8 bg-slate-200 mx-1"></div>

      {/* Location Search */}
      <div className="flex items-center gap-3 px-4 py-2.5 w-full md:w-72 text-left">
        <MapPin className="w-5 h-5 text-slate-400 shrink-0" />
        <input
          type="text"
          value={location}
          onChange={(e) => onLocationChange(e.target.value)}
          placeholder={placeholderLocation}
          className="w-full text-sm text-slate-800 placeholder-slate-400 focus:outline-none bg-transparent"
        />
      </div>

      {/* Action Submit Button */}
      <button
        type="submit"
        className="w-full md:w-auto px-7 py-3 rounded-xl md:rounded-full bg-blue-600 hover:bg-blue-700 text-white font-medium text-sm transition-all duration-200 shadow-md shadow-blue-500/20 active:scale-95 shrink-0"
      >
        {buttonText}
      </button>
    </form>
  );
}
