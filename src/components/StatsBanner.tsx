import React from "react";

export default function StatsBanner() {
  const stats = [
    {
      value: "10K+",
      label: "Active Jobs",
    },
    {
      value: "500+",
      label: "Top Companies",
    },
    {
      value: "25K+",
      label: "Successful Hires",
    },
    {
      value: "95%",
      label: "Satisfaction Rate",
    },
  ];

  return (
    <section className="bg-blue-600 text-white py-12 sm:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
          {stats.map((stat) => (
            <div key={stat.label} className="flex flex-col items-center">
              <span className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-white">
                {stat.value}
              </span>
              <span className="text-xs sm:text-sm text-blue-100 font-medium mt-2">
                {stat.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
