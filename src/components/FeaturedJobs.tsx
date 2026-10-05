"use client";

import React, { useState } from "react";
import { Check, MapPin, Briefcase } from "lucide-react";

export interface Job {
  id: string;
  company: string;
  title: string;
  type: string;
  workMode: string;
  location: string;
  salary: string;
  postedAgo: string;
  experience: string;
  salaryRangeKey: string;
  logoBg: string;
  logoColor: string;
  logo: React.ReactNode;
}

const initialJobs: Job[] = [
  {
    id: "1",
    company: "Google",
    title: "Senior Frontend Developer",
    type: "Full-time",
    workMode: "Remote",
    location: "Remote, US",
    salary: "$140k - $180k",
    postedAgo: "2 hours ago",
    experience: "Senior Level",
    salaryRangeKey: "$120k - $160k",
    logoBg: "bg-blue-50 text-blue-600 border-blue-100",
    logoColor: "text-blue-600",
    logo: (
      <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12.48 10.92v3.28h7.84c-.24 1.84-.853 3.187-1.787 4.133-1.147 1.147-2.933 2.4-6.053 2.4-4.827 0-8.6-3.893-8.6-8.72s3.773-8.72 8.6-8.72c2.6 0 4.507 1.027 5.907 2.347l2.307-2.307C18.747 1.44 16.133 0 12.48 0 5.867 0 .307 5.387.307 12s5.56 12 12.173 12c3.573 0 6.267-1.173 8.373-3.36 2.16-2.16 2.84-5.213 2.84-7.667 0-.76-.053-1.467-.173-2.053H12.48z" />
      </svg>
    ),
  },
  {
    id: "2",
    company: "Meta",
    title: "Product Designer",
    type: "Full-time",
    workMode: "On-site",
    location: "Menlo Park, CA",
    salary: "$120k - $170k",
    postedAgo: "1 day ago",
    experience: "Mid Level",
    salaryRangeKey: "$120k - $160k",
    logoBg: "bg-blue-50 text-blue-600 border-blue-100",
    logoColor: "text-blue-600",
    logo: (
      <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
        <path d="M16.96 4.06c-2.4 0-4.4 1.57-5.06 3.73-.66-2.16-2.66-3.73-5.06-3.73C3.07 4.06 0 7.13 0 10.92c0 5.37 6.44 10.37 11.45 12.87.28.14.62.14.9 0 5.01-2.5 11.45-7.5 11.45-12.87 0-3.79-3.07-6.86-6.84-6.86zm-5.06 14.56C8.16 16.5 2.4 12.33 2.4 10.92c0-2.46 2-4.46 4.46-4.46 2.05 0 3.79 1.4 4.32 3.38.11.4.47.69.88.69s.77-.29.88-.69c.53-1.98 2.27-3.38 4.32-3.38 2.46 0 4.46 2 4.46 4.46 0 1.41-5.76 5.58-9.5 7.7z" />
      </svg>
    ),
  },
  {
    id: "3",
    company: "Stripe",
    title: "DevOps Engineer",
    type: "Full-time",
    workMode: "Hybrid",
    location: "Hybrid",
    salary: "$150k - $190k",
    postedAgo: "3 days ago",
    experience: "Senior Level",
    salaryRangeKey: "$120k - $160k",
    logoBg: "bg-indigo-50 text-indigo-600 border-indigo-100",
    logoColor: "text-indigo-600",
    logo: (
      <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
        <path d="M13.976 9.15c-2.172-.806-3.356-1.426-3.356-2.409 0-.831.683-1.305 1.901-1.305 2.227 0 4.515.858 6.09 1.631l.89-5.494C18.252.97 15.688.5 12.482.5 7.153.5 3.322 3.376 3.322 7.742c0 4.326 3.693 5.485 7.108 6.741 2.408.887 3.238 1.673 3.238 2.68 0 1.042-.99 1.642-2.457 1.642-2.58 0-5.493-1.229-7.258-2.298L2.9 22.106C5.076 23.233 8.35 24 11.895 24c5.789 0 9.789-2.827 9.789-7.464 0-4.568-3.793-5.717-7.708-6.986z" />
      </svg>
    ),
  },
  {
    id: "4",
    company: "Shopify",
    title: "Data & Analytics Specialist",
    type: "Contract",
    workMode: "Remote",
    location: "Remote",
    salary: "$95k - $120k",
    postedAgo: "4 days ago",
    experience: "Mid Level",
    salaryRangeKey: "$80k - $120k",
    logoBg: "bg-emerald-50 text-emerald-600 border-emerald-100",
    logoColor: "text-emerald-600",
    logo: (
      <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
        <path d="M15.34 2.87l-1.6 1.49c-.19-.53-.51-.97-.99-1.24-.76-.43-1.64-.32-2.28.16-.46.34-.73.84-.79 1.4-.04.4.05.8.27 1.15l-3.36 1.04c-.39.12-.53.62-.27.92l5.12 5.92c.16.18.39.29.64.29.08 0 .16-.01.24-.04l6.09-2.02c.38-.13.56-.57.38-.94l-3.45-8.07zm-2.82 2.27c.18-.13.43-.16.65-.04.22.13.35.36.35.61l-2.05.65c.08-.66.49-1.07 1.05-1.22z" />
      </svg>
    ),
  },
  {
    id: "5",
    company: "Amazon",
    title: "Mobile App Developer",
    type: "Full-time",
    workMode: "On-site",
    location: "Seattle, WA",
    salary: "$130k - $200k",
    postedAgo: "1 week ago",
    experience: "Senior Level",
    salaryRangeKey: "$120k - $160k",
    logoBg: "bg-amber-50 text-amber-600 border-amber-100",
    logoColor: "text-amber-600",
    logo: (
      <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
        <path d="M14.07 13.06c-1.39.2-2.82.35-4.24.46-1.95.15-3.32-.49-3.32-2.16 0-1.89 1.78-2.73 4.2-2.73.99 0 2.01.12 2.97.35l.39 4.08zm4.33 6.01c-.34.34-.84.34-1.25.12-1.96-1.27-4.49-1.95-7.05-1.95-3.56 0-7.04 1.39-9.52 3.82-.33.32-.82.32-1.16-.02-.32-.34-.3-1.02.04-1.37 2.84-2.78 6.83-4.37 10.93-4.37 2.91 0 5.8.77 8.01 2.22.46.3.56.96.22 1.34l-.22.21zm.99-3.92c-.22.3-.61.42-.96.3l-1.34-.48c-.28-.1-.47-.36-.45-.65.29-3.23-.97-5.91-3.66-6.66-.41-.12-.66-.54-.57-.96.09-.41.51-.68.93-.56 3.4 1 4.95 4.34 4.6 8.35-.02.26.12.5.37.58l1.08.38z" />
      </svg>
    ),
  },
  {
    id: "6",
    company: "Microsoft",
    title: "Security Researcher",
    type: "Full-time",
    workMode: "On-site",
    location: "Redmond, WA",
    salary: "$145k - $185k",
    postedAgo: "1 week ago",
    experience: "Senior Level",
    salaryRangeKey: "$120k - $160k",
    logoBg: "bg-sky-50 text-sky-600 border-sky-100",
    logoColor: "text-sky-600",
    logo: (
      <svg className="w-4 h-4" viewBox="0 0 23 23" fill="currentColor">
        <path d="M0 0h11v11H0zM12 0h11v11H12zM0 12h11v11H0zM12 12h11v11H12z" />
      </svg>
    ),
  },
];

const extraJobs: Job[] = [
  {
    id: "7",
    company: "Netflix",
    title: "Cloud Infrastructure Engineer",
    type: "Full-time",
    workMode: "Remote",
    location: "Los Gatos, CA",
    salary: "$160k - $210k",
    postedAgo: "2 days ago",
    experience: "Senior Level",
    salaryRangeKey: "$160k+",
    logoBg: "bg-red-50 text-red-600 border-red-100",
    logoColor: "text-red-600",
    logo: <Briefcase className="w-5 h-5" />,
  },
  {
    id: "8",
    company: "Apple",
    title: "iOS Systems Architect",
    type: "Full-time",
    workMode: "Hybrid",
    location: "Cupertino, CA",
    salary: "$175k - $225k",
    postedAgo: "3 days ago",
    experience: "Senior Level",
    salaryRangeKey: "$160k+",
    logoBg: "bg-slate-100 text-slate-800 border-slate-200",
    logoColor: "text-slate-800",
    logo: <Briefcase className="w-5 h-5" />,
  },
];

const filterOptions = {
  jobTypes: ["Full-time", "Part-time", "Remote", "Contract", "Internship"],
  experienceLevels: ["Entry Level", "Mid Level", "Senior Level", "Director / VP"],
  workModes: ["On-site", "Hybrid", "Remote"],
  salaryRanges: ["$50k - $80k", "$80k - $120k", "$120k - $160k", "$160k+"],
};

export default function FeaturedJobs() {
  const [allJobs, setAllJobs] = useState<Job[]>(initialJobs);
  const [hasLoadedMore, setHasLoadedMore] = useState(false);
  const [selectedTypes, setSelectedTypes] = useState<string[]>([]);
  const [selectedExp, setSelectedExp] = useState<string[]>([]);
  const [selectedModes, setSelectedModes] = useState<string[]>([]);
  const [selectedSalaries, setSelectedSalaries] = useState<string[]>([]);
  const [appliedJobs, setAppliedJobs] = useState<Record<string, boolean>>({});

  const toggleFilter = (
    list: string[],
    setList: React.Dispatch<React.SetStateAction<string[]>>,
    val: string
  ) => {
    if (list.includes(val)) {
      setList(list.filter((item) => item !== val));
    } else {
      setList([...list, val]);
    }
  };

  const handleClearAll = () => {
    setSelectedTypes([]);
    setSelectedExp([]);
    setSelectedModes([]);
    setSelectedSalaries([]);
  };

  const handleApply = (id: string) => {
    setAppliedJobs((prev) => ({ ...prev, [id]: true }));
  };

  const handleLoadMore = () => {
    if (!hasLoadedMore) {
      setAllJobs([...initialJobs, ...extraJobs]);
      setHasLoadedMore(true);
    }
  };

  // Filter jobs based on selections
  const filteredJobs = allJobs.filter((job) => {
    if (selectedTypes.length > 0 && !selectedTypes.includes(job.type)) {
      return false;
    }
    if (selectedExp.length > 0 && !selectedExp.includes(job.experience)) {
      return false;
    }
    if (selectedModes.length > 0 && !selectedModes.includes(job.workMode)) {
      return false;
    }
    if (
      selectedSalaries.length > 0 &&
      !selectedSalaries.includes(job.salaryRangeKey)
    ) {
      return false;
    }
    return true;
  });

  return (
    <section id="jobs" className="py-16 bg-[#fcfdff]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="mb-10">
          <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight">
            Featured Jobs
          </h2>
          <p className="mt-1.5 text-sm text-slate-500 font-normal">
            Handpicked opportunities that match top-tier expectations
          </p>
        </div>

        {/* Content Layout: Filters Sidebar + Job Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 items-start">
          {/* Filters Sidebar */}
          <div className="bg-white rounded-2xl p-6 border border-slate-200/80 shadow-sm space-y-6">
            <div className="flex items-center justify-between pb-4 border-b border-slate-100">
              <span className="font-bold text-sm text-slate-900">Filters</span>
              <button
                onClick={handleClearAll}
                className="text-xs font-semibold text-blue-600 hover:text-blue-700 transition-colors"
              >
                Clear All
              </button>
            </div>

            {/* Job Type Filter */}
            <div>
              <h4 className="text-[11px] font-bold uppercase tracking-wider text-slate-400 mb-3">
                JOB TYPE
              </h4>
              <div className="space-y-2.5">
                {filterOptions.jobTypes.map((type) => {
                  const isChecked = selectedTypes.includes(type);
                  return (
                    <label
                      key={type}
                      className="flex items-center gap-2.5 text-xs text-slate-600 hover:text-slate-900 cursor-pointer select-none"
                    >
                      <input
                        type="checkbox"
                        checked={isChecked}
                        onChange={() =>
                          toggleFilter(selectedTypes, setSelectedTypes, type)
                        }
                        className="w-4 h-4 rounded border-slate-300 text-blue-600 focus:ring-blue-500 accent-blue-600"
                      />
                      <span>{type}</span>
                    </label>
                  );
                })}
              </div>
            </div>

            {/* Experience Level */}
            <div>
              <h4 className="text-[11px] font-bold uppercase tracking-wider text-slate-400 mb-3">
                EXPERIENCE LEVEL
              </h4>
              <div className="space-y-2.5">
                {filterOptions.experienceLevels.map((exp) => {
                  const isChecked = selectedExp.includes(exp);
                  return (
                    <label
                      key={exp}
                      className="flex items-center gap-2.5 text-xs text-slate-600 hover:text-slate-900 cursor-pointer select-none"
                    >
                      <input
                        type="checkbox"
                        checked={isChecked}
                        onChange={() =>
                          toggleFilter(selectedExp, setSelectedExp, exp)
                        }
                        className="w-4 h-4 rounded border-slate-300 text-blue-600 focus:ring-blue-500 accent-blue-600"
                      />
                      <span>{exp}</span>
                    </label>
                  );
                })}
              </div>
            </div>

            {/* Work Mode */}
            <div>
              <h4 className="text-[11px] font-bold uppercase tracking-wider text-slate-400 mb-3">
                WORK MODE
              </h4>
              <div className="space-y-2.5">
                {filterOptions.workModes.map((mode) => {
                  const isChecked = selectedModes.includes(mode);
                  return (
                    <label
                      key={mode}
                      className="flex items-center gap-2.5 text-xs text-slate-600 hover:text-slate-900 cursor-pointer select-none"
                    >
                      <input
                        type="checkbox"
                        checked={isChecked}
                        onChange={() =>
                          toggleFilter(selectedModes, setSelectedModes, mode)
                        }
                        className="w-4 h-4 rounded border-slate-300 text-blue-600 focus:ring-blue-500 accent-blue-600"
                      />
                      <span>{mode}</span>
                    </label>
                  );
                })}
              </div>
            </div>

            {/* Salary Range */}
            <div>
              <h4 className="text-[11px] font-bold uppercase tracking-wider text-slate-400 mb-3">
                SALARY RANGE
              </h4>
              <div className="space-y-2.5">
                {filterOptions.salaryRanges.map((sal) => {
                  const isChecked = selectedSalaries.includes(sal);
                  return (
                    <label
                      key={sal}
                      className="flex items-center gap-2.5 text-xs text-slate-600 hover:text-slate-900 cursor-pointer select-none"
                    >
                      <input
                        type="checkbox"
                        checked={isChecked}
                        onChange={() =>
                          toggleFilter(selectedSalaries, setSelectedSalaries, sal)
                        }
                        className="w-4 h-4 rounded border-slate-300 text-blue-600 focus:ring-blue-500 accent-blue-600"
                      />
                      <span>{sal}</span>
                    </label>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Job Cards Grid */}
          <div className="lg:col-span-3 space-y-6">
            {filteredJobs.length === 0 ? (
              <div className="bg-white rounded-2xl p-12 text-center border border-slate-200/80">
                <p className="text-slate-500 font-medium">
                  No jobs found matching your selected filters.
                </p>
                <button
                  onClick={handleClearAll}
                  className="mt-3 px-4 py-2 bg-blue-50 text-blue-600 rounded-lg text-xs font-semibold hover:bg-blue-100 transition-colors"
                >
                  Reset all filters
                </button>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {filteredJobs.map((job) => (
                  <div
                    key={job.id}
                    className="bg-white rounded-2xl p-5 border border-slate-200/80 hover:border-blue-400 hover:shadow-lg hover:shadow-blue-500/5 transition-all duration-200 flex flex-col justify-between"
                  >
                    <div>
                      {/* Company & Title Header */}
                      <div className="flex items-start gap-3.5 mb-3">
                        <div
                          className={`w-10 h-10 rounded-full border flex items-center justify-center shrink-0 ${job.logoBg}`}
                        >
                          {job.logo}
                        </div>
                        <div>
                          <p className="text-xs text-slate-400 font-medium">
                            {job.company}
                          </p>
                          <h3 className="text-[15px] font-bold text-slate-900 tracking-tight leading-snug">
                            {job.title}
                          </h3>
                        </div>
                      </div>

                      {/* Badges / Details */}
                      <div className="flex flex-wrap items-center gap-2 mt-3">
                        <span className="px-2.5 py-0.5 rounded-full text-[11px] font-semibold bg-blue-50 text-blue-600">
                          {job.type}
                        </span>
                        <span className="text-xs text-slate-400 font-medium flex items-center gap-1">
                          <MapPin className="w-3 h-3 text-slate-400 inline" />
                          {job.location}
                        </span>
                      </div>
                    </div>

                    {/* Footer Row */}
                    <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between">
                      <div>
                        <div className="text-sm font-bold text-slate-900">
                          {job.salary}
                        </div>
                        <div className="text-[11px] text-slate-400 mt-0.5">
                          {job.postedAgo}
                        </div>
                      </div>

                      <button
                        onClick={() => handleApply(job.id)}
                        className={`px-4 py-2 text-xs font-semibold rounded-lg transition-all shadow-sm ${
                          appliedJobs[job.id]
                            ? "bg-emerald-600 text-white flex items-center gap-1"
                            : "bg-blue-600 hover:bg-blue-700 text-white active:scale-95 shadow-blue-500/20"
                        }`}
                      >
                        {appliedJobs[job.id] ? (
                          <>
                            <Check className="w-3.5 h-3.5" /> Applied
                          </>
                        ) : (
                          "Apply Now"
                        )}
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            )}

            {/* Load More Jobs button */}
            <div className="pt-2 flex justify-start">
              <button
                onClick={handleLoadMore}
                disabled={hasLoadedMore}
                className={`px-5 py-2.5 text-xs font-semibold rounded-lg border border-slate-200 transition-all ${
                  hasLoadedMore
                    ? "bg-slate-50 text-slate-400 cursor-default"
                    : "bg-white text-slate-700 hover:bg-slate-50 hover:border-slate-300 shadow-sm"
                }`}
              >
                {hasLoadedMore ? "All Jobs Loaded" : "Load More Jobs"}
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
