"use client";

import React, { useState } from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Categories from "@/components/Categories";
import FeaturedJobs from "@/components/FeaturedJobs";
import StatsBanner from "@/components/StatsBanner";
import HiringCta from "@/components/HiringCta";
import Footer from "@/components/Footer";

export default function HomePage() {
  const [searchQuery, setSearchQuery] = useState<{
    keyword: string;
    location: string;
  }>({
    keyword: "",
    location: "",
  });

  const handleSearch = (keyword: string, location: string) => {
    setSearchQuery({ keyword, location });
    const jobsElement = document.getElementById("jobs");
    if (jobsElement) {
      jobsElement.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleTagClick = (tag: string) => {
    setSearchQuery((prev) => ({ ...prev, keyword: tag }));
    const jobsElement = document.getElementById("jobs");
    if (jobsElement) {
      jobsElement.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleSelectCategory = (category: string) => {
    setSearchQuery((prev) => ({ ...prev, keyword: category }));
    const jobsElement = document.getElementById("jobs");
    if (jobsElement) {
      jobsElement.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#fcfdff]">
      {/* Navigation Header */}
      <Navbar />

      {/* Main Content Sections */}
      <main className="flex-grow">
        {/* Hero Section with Search and Hiring Companies */}
        <Hero onSearch={handleSearch} onTagClick={handleTagClick} />

        {/* Explore by Category */}
        <Categories onSelectCategory={handleSelectCategory} />

        {/* Featured Jobs with Filter Sidebar */}
        <FeaturedJobs />

        {/* Blue Stats Highlights Banner */}
        <StatsBanner />

        {/* Are You Hiring Call to Action */}
        <HiringCta />
      </main>

      {/* Dark Slate Footer */}
      <Footer />
    </div>
  );
}
