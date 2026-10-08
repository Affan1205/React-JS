import React from "react";
import { useState } from "react";

const HomeDefaultContent = () => {
  // Simple state tracking for practice
  const [activeTab, setActiveTab] = useState("Overview");

  const navigationItems = ["Overview", "Analytics", "Settings", "Support"];

  const stats = [
    {
      label: "Total Revenue",
      value: "\$48,259.00",
      change: "+12% from last month",
    },
    { label: "Active Users", value: "10,482", change: "+8% from last week" },
    { label: "Conversion Rate", value: "4.8%", change: "+0.4% overnight" },
  ];

  return (
    <div className="min-h-screen bg-neutral-50 text-neutral-900 font-sans antialiased">
      {/* 2. Main Page Layout */}
      <main className="max-w-7xl mx-auto px-6 py-10 space-y-10">
        {/* Welcome Section */}
        <div className="flex flex-col gap-1 md:flex-row md:items-center md:justify-between border-b border-neutral-200 pb-6">
          <div>
            <h1 className="text-2xl font-semibold tracking-tight">
              Workspace Overview
            </h1>
            <p className="text-sm text-neutral-500">
              Manage your system variables, metrics, and documentation here.
            </p>
          </div>
          <div className="text-xs text-neutral-400 self-end md:self-auto mt-2 md:mt-0">
            Last updated: Just now
          </div>
        </div>

        {/* 3. Stat Cards Section */}
        <section className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {stats.map((stat, i) => (
            <div
              key={i}
              className="bg-white p-6 rounded-xl border border-neutral-200/60 shadow-[0_2px_8px_-3px_rgba(0,0,0,0.05)] transition-hover hover:shadow-md duration-300"
            >
              <p className="text-xs font-medium uppercase tracking-wider text-neutral-400">
                {stat.label}
              </p>
              <p className="text-3xl font-light tracking-tight mt-2 text-neutral-900">
                {stat.value}
              </p>
              <p className="text-xs text-emerald-600 mt-2 font-medium flex items-center gap-1">
                <span>↑</span> {stat.change}
              </p>
            </div>
          ))}
        </section>

        {/* 4. Secondary Content Area */}
        <section className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Table/List (Takes 2 columns on wide displays) */}
          <div className="lg:col-span-2 bg-white rounded-xl border border-neutral-200/60 overflow-hidden shadow-[0_2px_8px_-3px_rgba(0,0,0,0.05)]">
            <div className="px-6 py-4 border-b border-neutral-100 flex items-center justify-between">
              <h3 className="font-medium text-sm">Recent Activity</h3>
              <span className="text-xs text-neutral-400 underline cursor-pointer hover:text-neutral-600">
                View all
              </span>
            </div>
            <div className="divide-y divide-neutral-100">
              {[1, 2, 3].map((item) => (
                <div
                  key={item}
                  className="p-4 px-6 flex items-center justify-between hover:bg-neutral-50/50 transition-colors"
                >
                  <div className="flex items-center gap-4">
                    <div className="w-8 h-8 rounded-full bg-neutral-100 flex items-center justify-center text-xs font-medium">
                      0{item}
                    </div>
                    <div>
                      <h4 className="text-sm font-medium">
                        alpha_release_v2.api
                      </h4>
                      <p className="text-xs text-neutral-400">
                        Deployment successful • Production
                      </p>
                    </div>
                  </div>
                  <div className="text-right">
                    <span className="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-neutral-100 text-neutral-800 border border-neutral-200/40">
                      Active
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Quick Informational / Actionable Alert Box (Takes 1 column) */}
          <div className="bg-white p-6 rounded-xl border border-neutral-200/60 flex flex-col justify-between shadow-[0_2px_8px_-3px_rgba(0,0,0,0.05)]">
            <div className="space-y-3">
              <h3 className="font-medium text-sm">Component Tips</h3>
              <p className="text-xs leading-relaxed text-neutral-500">
                You're currently styling with a utility-first structure. When
                practicing a clean white UI palette, maximize the use of:
              </p>
              <ul className="text-xs text-neutral-600 space-y-1.5 list-disc list-inside">
                <li>
                  <code className="bg-neutral-100 px-1 rounded">
                    bg-neutral-50
                  </code>{" "}
                  for canvas wrappers
                </li>
                <li>
                  Subtle borders via{" "}
                  <code className="bg-neutral-100 px-1 rounded">
                    border-neutral-200
                  </code>
                </li>
                <li>
                  Softer typography opacity with{" "}
                  <code className="bg-neutral-100 px-1 rounded">
                    text-neutral-500
                  </code>
                </li>
              </ul>
            </div>

            <div className="pt-6">
              <a
                href="https://tailwindcss.com"
                target="_blank"
                rel="noreferrer"
                className="w-full inline-flex justify-center items-center px-4 py-2 border border-neutral-200 text-xs font-medium rounded-md text-neutral-700 bg-white hover:bg-neutral-50 transition-colors shadow-2xs"
              >
                Read Tailwind Documentation
              </a>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default HomeDefaultContent;
