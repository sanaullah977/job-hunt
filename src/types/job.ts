import React from "react";

export interface Job {
  id: string;
  company: string;
  title: string;
  type: string;
  workMode: string;
  location: string;
  salary: string;
  salaryMin?: number;
  salaryMax?: number;
  postedAgo: string;
  postedTimestamp?: number;
  experience: string;
  salaryRangeKey: string;
  logoBg?: string;
  logoColor?: string;
  logo?: React.ReactNode;
}

export interface FilterOptions {
  jobTypes: string[];
  experienceLevels: string[];
  workModes: string[];
  salaryRanges: string[];
}
