"use client";

import React, { useState } from "react";
import FilterSidebar from "@/components/FilterSidebar";
import JobCard from "@/components/JobCard";
import { initialJobs } from "@/data/jobs";
import { Job } from "@/types/job";

export default function FeaturedJobs() {
  const [allJobs, setAllJobs] = useState<Job[]>(initialJobs.slice(0, 6));
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
      setAllJobs(initialJobs);
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

        {/* Content Layout: Reusable Filter Sidebar + Reusable Job Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 items-start">
          {/* Reusable Filters Sidebar */}
          <FilterSidebar
            selectedTypes={selectedTypes}
            onToggleType={(val) =>
              toggleFilter(selectedTypes, setSelectedTypes, val)
            }
            selectedExp={selectedExp}
            onToggleExp={(val) =>
              toggleFilter(selectedExp, setSelectedExp, val)
            }
            selectedModes={selectedModes}
            onToggleMode={(val) =>
              toggleFilter(selectedModes, setSelectedModes, val)
            }
            selectedSalaries={selectedSalaries}
            onToggleSalary={(val) =>
              toggleFilter(selectedSalaries, setSelectedSalaries, val)
            }
            onClearAll={handleClearAll}
          />

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
                  <JobCard
                    key={job.id}
                    job={job}
                    isApplied={!!appliedJobs[job.id]}
                    onApply={handleApply}
                  />
                ))}
              </div>
            )}

            {/* Load More Jobs button */}
            {/* <div className="pt-2 flex justify-start">
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
            </div> */}
          </div>
        </div>
      </div>
    </section>
  );
}
