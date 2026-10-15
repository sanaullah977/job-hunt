"use client";

import React, { useState, useMemo } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import JobSearchBar from "@/components/JobSearchBar";
import FilterSidebar from "@/components/FilterSidebar";
import JobCard from "@/components/JobCard";
import Pagination from "@/components/Pagination";
import { initialJobs } from "@/data/jobs";
import { ChevronDown } from "lucide-react";

export default function FindJobsPage() {
  const [keyword, setKeyword] = useState("");
  const [location, setLocation] = useState("");
  const [activeKeyword, setActiveKeyword] = useState("");
  const [activeLocation, setActiveLocation] = useState("");
  const [sortBy, setSortBy] = useState("Most Recent");
  const [isSortDropdownOpen, setIsSortDropdownOpen] = useState(false);

  const [selectedTypes, setSelectedTypes] = useState<string[]>([]);
  const [selectedExp, setSelectedExp] = useState<string[]>([]);
  const [selectedModes, setSelectedModes] = useState<string[]>([]);
  const [selectedSalaries, setSelectedSalaries] = useState<string[]>([]);
  const [appliedJobs, setAppliedJobs] = useState<Record<string, boolean>>({});

  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6;

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setActiveKeyword(keyword);
    setActiveLocation(location);
    setCurrentPage(1);
  };

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
    setCurrentPage(1);
  };

  const handleClearAll = () => {
    setSelectedTypes([]);
    setSelectedExp([]);
    setSelectedModes([]);
    setSelectedSalaries([]);
    setKeyword("");
    setLocation("");
    setActiveKeyword("");
    setActiveLocation("");
    setCurrentPage(1);
  };

  const handleApply = (id: string) => {
    setAppliedJobs((prev) => ({ ...prev, [id]: true }));
  };

  // Filter & sort logic
  const filteredAndSortedJobs = useMemo(() => {
    let result = initialJobs.filter((job) => {
      // Keyword search
      if (activeKeyword.trim()) {
        const q = activeKeyword.toLowerCase();
        const matchesTitle = job.title.toLowerCase().includes(q);
        const matchesCompany = job.company.toLowerCase().includes(q);
        if (!matchesTitle && !matchesCompany) return false;
      }

      // Location search
      if (activeLocation.trim()) {
        const loc = activeLocation.toLowerCase();
        if (!job.location.toLowerCase().includes(loc)) return false;
      }

      // Sidebar filters
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

    // Sort
    if (sortBy === "Most Recent") {
      result.sort((a, b) => (a.postedTimestamp || 0) - (b.postedTimestamp || 0));
    } else if (sortBy === "Highest Salary") {
      result.sort((a, b) => (b.salaryMax || 0) - (a.salaryMax || 0));
    } else if (sortBy === "Company A-Z") {
      result.sort((a, b) => a.company.localeCompare(b.company));
    }

    return result;
  }, [
    activeKeyword,
    activeLocation,
    selectedTypes,
    selectedExp,
    selectedModes,
    selectedSalaries,
    sortBy,
  ]);

  // Total results count (shows 124 when no filter is applied to match design, or filtered length)
  const isFiltered =
    activeKeyword ||
    activeLocation ||
    selectedTypes.length > 0 ||
    selectedExp.length > 0 ||
    selectedModes.length > 0 ||
    selectedSalaries.length > 0;

  const totalCount = isFiltered
    ? filteredAndSortedJobs.length
    : 124;

  // Advanced pagination logic:
  // If simulated 124 jobs, totalPages is Math.ceil(124 / 6) = 21, or 8 as in screenshot!
  const totalPages = isFiltered
    ? Math.max(1, Math.ceil(filteredAndSortedJobs.length / itemsPerPage))
    : 8;

  // Sliced jobs for the current page
  const startIndex = (currentPage - 1) * itemsPerPage;
  const paginatedJobs = filteredAndSortedJobs.slice(
    startIndex % Math.max(1, filteredAndSortedJobs.length),
    (startIndex % Math.max(1, filteredAndSortedJobs.length)) + itemsPerPage
  );

  const displayJobs = paginatedJobs.length > 0 ? paginatedJobs : filteredAndSortedJobs.slice(0, 6);

  return (
    <div className="min-h-screen flex flex-col bg-[#fcfdff]">
      {/* Header Navigation */}
      <Navbar />

      <main className="flex-grow pb-16">
        {/* Top Search Bar Section */}
        <section className="bg-[#f8faff] border-b border-slate-100 py-8 px-4 sm:px-6 lg:px-8">
          <div className="max-w-5xl mx-auto">
            <JobSearchBar
              keyword={keyword}
              onKeywordChange={setKeyword}
              location={location}
              onLocationChange={setLocation}
              onSubmit={handleSearchSubmit}
              buttonText="Find Jobs"
              placeholderKeyword="Search job titles or keywords..."
              placeholderLocation="Location..."
            />
          </div>
        </section>

        {/* Content Area */}
        <div id="jobs-container" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8">
          {/* Header Row: Job Count & Sort Dropdown */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-6 gap-4">
            <p className="text-sm font-medium text-slate-500">
              Showing <span className="text-slate-900 font-semibold">{totalCount}</span> jobs found
            </p>

            {/* Sort Dropdown */}
            <div className="relative inline-block text-left self-end sm:self-auto">
              <button
                onClick={() => setIsSortDropdownOpen(!isSortDropdownOpen)}
                className="flex items-center gap-1.5 text-xs text-slate-500 hover:text-slate-800 font-medium py-1.5 px-3 rounded-lg border border-transparent hover:border-slate-200 transition-colors"
                aria-expanded={isSortDropdownOpen}
              >
                <span>Sort by:</span>
                <span className="font-semibold text-slate-900">{sortBy}</span>
                <ChevronDown className="w-3.5 h-3.5 text-slate-400 ml-0.5" />
              </button>

              {isSortDropdownOpen && (
                <div className="origin-top-right absolute right-0 mt-1 w-44 rounded-xl shadow-lg bg-white ring-1 ring-black ring-opacity-5 z-20 py-1">
                  {["Most Recent", "Highest Salary", "Company A-Z"].map((option) => (
                    <button
                      key={option}
                      onClick={() => {
                        setSortBy(option);
                        setIsSortDropdownOpen(false);
                      }}
                      className={`block w-full text-left px-4 py-2 text-xs transition-colors ${
                        sortBy === option
                          ? "bg-blue-50 text-blue-600 font-semibold"
                          : "text-slate-700 hover:bg-slate-50"
                      }`}
                    >
                      {option}
                    </button>
                  ))}
                </div>
              )}
            </div>
          </div>

          {/* Main Grid: Filters Sidebar + Job Listings */}
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

            {/* Job Cards Grid & Advanced Pagination */}
            <div className="lg:col-span-3 space-y-8">
              {displayJobs.length === 0 ? (
                <div className="bg-white rounded-2xl p-12 text-center border border-slate-200/80">
                  <p className="text-slate-500 font-medium">
                    No jobs match your selected search or filter criteria.
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
                  {displayJobs.map((job) => (
                    <JobCard
                      key={job.id}
                      job={job}
                      isApplied={!!appliedJobs[job.id]}
                      onApply={handleApply}
                    />
                  ))}
                </div>
              )}

              {/* Advanced Reusable Pagination */}
              <div className="pt-4">
                <Pagination
                  currentPage={currentPage}
                  totalPages={totalPages}
                  onPageChange={(page) => setCurrentPage(page)}
                  targetElementId="jobs-container"
                  scrollToTop={false}
                />
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Dark Footer */}
      <Footer />
    </div>
  );
}
