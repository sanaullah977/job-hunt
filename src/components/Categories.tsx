"use client";

import React from "react";
import Link from "next/link";
import {
  Code2,
  PenTool,
  TrendingUp,
  BarChart3,
  Cloud,
  Smartphone,
  ChevronRight,
} from "lucide-react";

interface Category {
  title: string;
  jobsCount: string;
  icon: React.ReactNode;
  iconBg: string;
  iconColor: string;
}

const categories: Category[] = [
  {
    title: "Development",
    jobsCount: "1.2k+ jobs",
    icon: <Code2 className="w-5 h-5" />,
    iconBg: "bg-blue-50",
    iconColor: "text-blue-600",
  },
  {
    title: "Design",
    jobsCount: "850+ jobs",
    icon: <PenTool className="w-5 h-5" />,
    iconBg: "bg-amber-50",
    iconColor: "text-amber-500",
  },
  {
    title: "Marketing",
    jobsCount: "420+ jobs",
    icon: <TrendingUp className="w-5 h-5" />,
    iconBg: "bg-emerald-50",
    iconColor: "text-emerald-500",
  },
  {
    title: "Data & Analytics",
    jobsCount: "540+ jobs",
    icon: <BarChart3 className="w-5 h-5" />,
    iconBg: "bg-purple-50",
    iconColor: "text-purple-600",
  },
  {
    title: "DevOps & Cloud",
    jobsCount: "290+ jobs",
    icon: <Cloud className="w-5 h-5" />,
    iconBg: "bg-rose-50",
    iconColor: "text-rose-500",
  },
  {
    title: "Mobile Dev",
    jobsCount: "350+ jobs",
    icon: <Smartphone className="w-5 h-5" />,
    iconBg: "bg-sky-50",
    iconColor: "text-sky-500",
  },
];

interface CategoriesProps {
  onSelectCategory?: (category: string) => void;
}

export default function Categories({ onSelectCategory }: CategoriesProps) {
  return (
    <section className="py-14 bg-white border-t border-b border-slate-100/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-8 gap-4">
          <div>
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight">
              Explore by Category
            </h2>
            <p className="mt-1.5 text-sm text-slate-500 font-normal">
              Find your professional path in curated sectors
            </p>
          </div>

          <Link
            href="#categories"
            className="inline-flex items-center text-sm font-semibold text-blue-600 hover:text-blue-700 transition-colors group"
          >
            All Categories
            <ChevronRight className="w-4 h-4 ml-1 transition-transform group-hover:translate-x-0.5" />
          </Link>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
          {categories.map((cat) => (
            <button
              key={cat.title}
              onClick={() => onSelectCategory?.(cat.title)}
              type="button"
              className="flex flex-col items-start p-5 rounded-2xl bg-white border border-slate-200/70 hover:border-blue-400 hover:shadow-lg hover:shadow-blue-500/5 transition-all duration-200 text-left group"
            >
              <div
                className={`w-11 h-11 rounded-xl flex items-center justify-center ${cat.iconBg} ${cat.iconColor} mb-4 transition-transform group-hover:scale-105`}
              >
                {cat.icon}
              </div>
              <h3 className="text-sm font-bold text-slate-900 group-hover:text-blue-600 transition-colors">
                {cat.title}
              </h3>
              <p className="text-xs text-slate-400 font-medium mt-1">
                {cat.jobsCount}
              </p>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
