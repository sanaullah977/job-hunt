"use client";

import React from "react";
import { Check, MapPin } from "lucide-react";
import { Job } from "@/types/job";

export interface JobCardProps {
  job: Job;
  isApplied?: boolean;
  onApply?: (id: string) => void;
  className?: string;
}

export default function JobCard({
  job,
  isApplied = false,
  onApply,
  className = "",
}: JobCardProps) {
  return (
    <div
      className={`bg-white rounded-2xl p-5 border border-slate-200/80 hover:border-blue-400 hover:shadow-lg hover:shadow-blue-500/5 transition-all duration-200 flex flex-col justify-between ${className}`}
    >
      <div>
        {/* Company & Title Header */}
        <div className="flex items-start gap-3.5 mb-3">
          <div
            className={`w-10 h-10 rounded-full border flex items-center justify-center shrink-0 ${
              job.logoBg || "bg-blue-50 text-blue-600 border-blue-100"
            }`}
          >
            {job.logo}
          </div>
          <div>
            <p className="text-xs text-slate-400 font-medium">{job.company}</p>
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
          <div className="text-sm font-bold text-slate-900">{job.salary}</div>
          <div className="text-[11px] text-slate-400 mt-0.5">
            {job.postedAgo}
          </div>
        </div>

        <button
          onClick={() => onApply?.(job.id)}
          className={`px-4 py-2 text-xs font-semibold rounded-lg transition-all shadow-sm ${
            isApplied
              ? "bg-emerald-600 text-white flex items-center gap-1 cursor-default"
              : "bg-blue-600 hover:bg-blue-700 text-white active:scale-95 shadow-blue-500/20"
          }`}
        >
          {isApplied ? (
            <>
              <Check className="w-3.5 h-3.5" /> Applied
            </>
          ) : (
            "Apply Now"
          )}
        </button>
      </div>
    </div>
  );
}
