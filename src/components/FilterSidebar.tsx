"use client";

import React from "react";
import { filterOptions } from "@/data/jobs";

export interface FilterSidebarProps {
  selectedTypes: string[];
  onToggleType: (val: string) => void;
  selectedExp: string[];
  onToggleExp: (val: string) => void;
  selectedModes: string[];
  onToggleMode: (val: string) => void;
  selectedSalaries: string[];
  onToggleSalary: (val: string) => void;
  onClearAll: () => void;
  className?: string;
}

export default function FilterSidebar({
  selectedTypes,
  onToggleType,
  selectedExp,
  onToggleExp,
  selectedModes,
  onToggleMode,
  selectedSalaries,
  onToggleSalary,
  onClearAll,
  className = "",
}: FilterSidebarProps) {
  return (
    <aside
      className={`bg-white rounded-2xl p-6 border border-slate-200/80 shadow-sm space-y-6 ${className}`}
    >
      {/* Header with Title and Clear All */}
      <div className="flex items-center justify-between pb-4 border-b border-slate-100">
        <span className="font-bold text-sm text-slate-900">Filters</span>
        <button
          onClick={onClearAll}
          type="button"
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
                  onChange={() => onToggleType(type)}
                  className="w-4 h-4 rounded border-slate-300 text-blue-600 focus:ring-blue-500 accent-blue-600"
                />
                <span>{type}</span>
              </label>
            );
          })}
        </div>
      </div>

      {/* Experience Level Filter */}
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
                  onChange={() => onToggleExp(exp)}
                  className="w-4 h-4 rounded border-slate-300 text-blue-600 focus:ring-blue-500 accent-blue-600"
                />
                <span>{exp}</span>
              </label>
            );
          })}
        </div>
      </div>

      {/* Work Mode Filter */}
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
                  onChange={() => onToggleMode(mode)}
                  className="w-4 h-4 rounded border-slate-300 text-blue-600 focus:ring-blue-500 accent-blue-600"
                />
                <span>{mode}</span>
              </label>
            );
          })}
        </div>
      </div>

      {/* Salary Range Filter */}
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
                  onChange={() => onToggleSalary(sal)}
                  className="w-4 h-4 rounded border-slate-300 text-blue-600 focus:ring-blue-500 accent-blue-600"
                />
                <span>{sal}</span>
              </label>
            );
          })}
        </div>
      </div>
    </aside>
  );
}
