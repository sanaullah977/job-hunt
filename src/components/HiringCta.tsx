import React from "react";
import Link from "next/link";

export default function HiringCta() {
  return (
    <section className="py-16 sm:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div className="max-w-2xl">
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight">
              Are you hiring?
            </h2>
            <p className="mt-2 text-sm sm:text-base text-slate-500 font-normal leading-relaxed">
              Post your jobs to connect with our active community of vetted creators and developers. Harness the full power of direct sourcing.
            </p>
          </div>

          <div className="shrink-0">
            <Link
              href="/post-job"
              className="inline-flex items-center justify-center px-6 py-3.5 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-semibold text-sm transition-all shadow-md shadow-blue-500/20 active:scale-95"
            >
              Post Job Now
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
