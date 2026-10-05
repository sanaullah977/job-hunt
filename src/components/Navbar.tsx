"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Briefcase, Menu, X } from "lucide-react";

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Brand Logo */}
          <div className="flex items-center gap-3">
            <Link href="/" className="flex items-center gap-2.5">
              <div className="w-10 h-10 rounded-xl bg-blue-600 flex items-center justify-center text-white shadow-md shadow-blue-500/20">
                <Briefcase className="w-5 h-5 stroke-[2.5]" />
              </div>
              <span className="text-2xl font-black tracking-tight text-slate-900 font-sans">
                JobVista
              </span>
            </Link>
          </div>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center space-x-9">
            <Link
              href="/"
              className="text-sm font-semibold text-blue-600 transition-colors"
            >
              Home
            </Link>
            <Link
              href="#jobs"
              className="text-sm font-medium text-slate-600 hover:text-slate-950 transition-colors"
            >
              Find Jobs
            </Link>
            <Link
              href="#companies"
              className="text-sm font-medium text-slate-600 hover:text-slate-950 transition-colors"
            >
              Companies
            </Link>
            <Link
              href="#about"
              className="text-sm font-medium text-slate-600 hover:text-slate-950 transition-colors"
            >
              About
            </Link>
          </nav>

          {/* Desktop Action Buttons */}
          <div className="hidden md:flex items-center gap-6">
            <Link
              href="/signin"
              className="text-sm font-medium text-slate-700 hover:text-slate-950 transition-colors"
            >
              Sign In
            </Link>
            <Link
              href="/post-job"
              className="px-5 py-2.5 text-sm font-semibold text-white bg-blue-600 hover:bg-blue-700 active:scale-[0.98] rounded-xl transition-all shadow-md shadow-blue-600/20"
            >
              Post a Job
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="flex md:hidden items-center gap-3">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-slate-600 hover:text-slate-900 hover:bg-slate-100 transition-colors"
              aria-label="Toggle navigation"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden border-b border-slate-200 bg-white px-4 pt-3 pb-6 space-y-4">
          <div className="flex flex-col space-y-3">
            <Link
              href="/"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2 rounded-lg font-medium text-blue-600 bg-blue-50"
            >
              Home
            </Link>
            <Link
              href="#jobs"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2 rounded-lg font-medium text-slate-700 hover:bg-slate-50"
            >
              Find Jobs
            </Link>
            <Link
              href="#companies"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2 rounded-lg font-medium text-slate-700 hover:bg-slate-50"
            >
              Companies
            </Link>
            <Link
              href="#about"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2 rounded-lg font-medium text-slate-700 hover:bg-slate-50"
            >
              About
            </Link>
          </div>
          <div className="pt-3 border-t border-slate-100 flex flex-col gap-3">
            <Link
              href="/signin"
              onClick={() => setMobileMenuOpen(false)}
              className="text-center py-2 text-sm font-medium text-slate-700 hover:text-slate-900"
            >
              Sign In
            </Link>
            <Link
              href="/post-job"
              onClick={() => setMobileMenuOpen(false)}
              className="text-center py-2.5 text-sm font-semibold text-white bg-blue-600 hover:bg-blue-700 rounded-xl"
            >
              Post a Job
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
