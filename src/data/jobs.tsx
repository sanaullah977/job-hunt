import React from "react";
import { Job, FilterOptions } from "@/types/job";

export const filterOptions: FilterOptions = {
  jobTypes: ["Full-time", "Part-time", "Remote", "Contract", "Internship"],
  experienceLevels: ["Entry Level", "Mid Level", "Senior Level", "Director / VP"],
  workModes: ["On-site", "Hybrid", "Remote"],
  salaryRanges: ["$50k - $80k", "$80k - $120k", "$120k - $160k", "$160k+"],
};

export const initialJobs: Job[] = [
  {
    id: "1",
    company: "Google",
    title: "Senior Frontend Developer",
    type: "Full-time",
    workMode: "Remote",
    location: "Remote, US",
    salary: "$140k - $180k",
    salaryMin: 140,
    salaryMax: 180,
    postedAgo: "2 hours ago",
    postedTimestamp: 2,
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
    salary: "$130k - $170k",
    salaryMin: 130,
    salaryMax: 170,
    postedAgo: "1 day ago",
    postedTimestamp: 24,
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
    salaryMin: 150,
    salaryMax: 190,
    postedAgo: "3 days ago",
    postedTimestamp: 72,
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
    salary: "$90k - $120k",
    salaryMin: 90,
    salaryMax: 120,
    postedAgo: "4 days ago",
    postedTimestamp: 96,
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
    salary: "$160k - $200k",
    salaryMin: 160,
    salaryMax: 200,
    postedAgo: "1 week ago",
    postedTimestamp: 168,
    experience: "Senior Level",
    salaryRangeKey: "$160k+",
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
    salaryMin: 145,
    salaryMax: 185,
    postedAgo: "1 week ago",
    postedTimestamp: 170,
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
  {
    id: "7",
    company: "Netflix",
    title: "Cloud Infrastructure Engineer",
    type: "Full-time",
    workMode: "Remote",
    location: "Los Gatos, CA",
    salary: "$160k - $210k",
    salaryMin: 160,
    salaryMax: 210,
    postedAgo: "2 days ago",
    postedTimestamp: 48,
    experience: "Senior Level",
    salaryRangeKey: "$160k+",
    logoBg: "bg-red-50 text-red-600 border-red-100",
    logoColor: "text-red-600",
    logo: (
      <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12.48 10.92v3.28h7.84c-.24 1.84-.853 3.187-1.787 4.133-1.147 1.147-2.933 2.4-6.053 2.4-4.827 0-8.6-3.893-8.6-8.72s3.773-8.72 8.6-8.72c2.6 0 4.507 1.027 5.907 2.347l2.307-2.307C18.747 1.44 16.133 0 12.48 0 5.867 0 .307 5.387.307 12s5.56 12 12.173 12c3.573 0 6.267-1.173 8.373-3.36 2.16-2.16 2.84-5.213 2.84-7.667 0-.76-.053-1.467-.173-2.053H12.48z" />
      </svg>
    ),
  },
  {
    id: "8",
    company: "Apple",
    title: "iOS Systems Architect",
    type: "Full-time",
    workMode: "Hybrid",
    location: "Cupertino, CA",
    salary: "$175k - $225k",
    salaryMin: 175,
    salaryMax: 225,
    postedAgo: "3 days ago",
    postedTimestamp: 74,
    experience: "Senior Level",
    salaryRangeKey: "$160k+",
    logoBg: "bg-slate-100 text-slate-800 border-slate-200",
    logoColor: "text-slate-800",
    logo: (
      <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
        <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M15.97 6.13c.66-.82 1.11-1.96.99-3.1-.96.04-2.12.64-2.8 1.44-.61.7-.1.14-1.87 2.26.98-.04 2.07-.63 2.69-1.42z" />
      </svg>
    ),
  },
  {
    id: "9",
    company: "Airbnb",
    title: "Lead UX Researcher",
    type: "Full-time",
    workMode: "Hybrid",
    location: "San Francisco, CA",
    salary: "$150k - $195k",
    salaryMin: 150,
    salaryMax: 195,
    postedAgo: "5 days ago",
    postedTimestamp: 120,
    experience: "Senior Level",
    salaryRangeKey: "$120k - $160k",
    logoBg: "bg-rose-50 text-rose-600 border-rose-100",
    logoColor: "text-rose-600",
    logo: (
      <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
        <path d="M16.96 4.06c-2.4 0-4.4 1.57-5.06 3.73-.66-2.16-2.66-3.73-5.06-3.73C3.07 4.06 0 7.13 0 10.92c0 5.37 6.44 10.37 11.45 12.87.28.14.62.14.9 0 5.01-2.5 11.45-7.5 11.45-12.87 0-3.79-3.07-6.86-6.84-6.86z" />
      </svg>
    ),
  },
  {
    id: "10",
    company: "Adobe",
    title: "Full Stack Engineer",
    type: "Full-time",
    workMode: "Remote",
    location: "San Jose, CA",
    salary: "$135k - $175k",
    salaryMin: 135,
    salaryMax: 175,
    postedAgo: "1 week ago",
    postedTimestamp: 168,
    experience: "Mid Level",
    salaryRangeKey: "$120k - $160k",
    logoBg: "bg-red-50 text-red-600 border-red-100",
    logoColor: "text-red-600",
    logo: (
      <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
        <path d="M13.976 9.15c-2.172-.806-3.356-1.426-3.356-2.409 0-.831.683-1.305 1.901-1.305 2.227 0 4.515.858 6.09 1.631l.89-5.494C18.252.97 15.688.5 12.482.5 7.153.5 3.322 3.376 3.322 7.742z" />
      </svg>
    ),
  },
  {
    id: "11",
    company: "Slack",
    title: "Frontend Platform Engineer",
    type: "Full-time",
    workMode: "Remote",
    location: "Remote, US",
    salary: "$140k - $180k",
    salaryMin: 140,
    salaryMax: 180,
    postedAgo: "1 week ago",
    postedTimestamp: 169,
    experience: "Senior Level",
    salaryRangeKey: "$120k - $160k",
    logoBg: "bg-emerald-50 text-emerald-600 border-emerald-100",
    logoColor: "text-emerald-600",
    logo: (
      <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
        <path d="M15.34 2.87l-1.6 1.49c-.19-.53-.51-.97-.99-1.24-.76-.43-1.64-.32-2.28.16-.46.34-.73.84-.79 1.4-.04.4.05.8.27 1.15l-3.36 1.04c-.39.12-.53.62-.27.92l5.12 5.92z" />
      </svg>
    ),
  },
  {
    id: "12",
    company: "GitHub",
    title: "Site Reliability Specialist",
    type: "Contract",
    workMode: "Remote",
    location: "Remote",
    salary: "$110k - $150k",
    salaryMin: 110,
    salaryMax: 150,
    postedAgo: "2 weeks ago",
    postedTimestamp: 336,
    experience: "Mid Level",
    salaryRangeKey: "$80k - $120k",
    logoBg: "bg-slate-100 text-slate-900 border-slate-200",
    logoColor: "text-slate-900",
    logo: (
      <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
      </svg>
    ),
  },
];
