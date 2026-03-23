"use client";

import { useState } from "react";

const MANUAL_AUDITS = 17000;
const DEVELOPER_TOOLS = 18000;

function formatCurrency(n: number) {
  return "$" + Math.round(n).toLocaleString("en-US");
}

export default function AccessibilityCalculator() {
  const [pages, setPages] = useState(229);
  const [issuesPerPage, setIssuesPerPage] = useState(50);
  const [minsPerIssue, setMinsPerIssue] = useState(15);
  const [hourlyRate, setHourlyRate] = useState(82);

  const developerCosts = pages * issuesPerPage * (minsPerIssue / 60) * hourlyRate;
  const annualCost = developerCosts + MANUAL_AUDITS + DEVELOPER_TOOLS;

  return (
    <section id="cost-calculator" className="w-full bg-white py-20 px-6">
      <div className="max-w-[1200px] mx-auto">

        {/* Header */}
        <div className="text-center mb-12">
          <p className="text-xs tracking-[3px] uppercase text-gray-500 mb-4">
            Accessibility Cost Calculator
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
            What does accessibility <em>really cost</em>
            <br />when you do it yourself?
          </h2>
          <p className="text-gray-500 mt-5 max-w-xl mx-auto text-base leading-relaxed">
            Quickly see what it costs to make your website fully accessible and compliant on
            your own — and how much time and money you could save with EnableUser.
          </p>
        </div>

        {/* Calculator Card */}
        <div className="flex flex-col md:flex-row rounded-2xl border border-gray-200 overflow-hidden shadow-sm">

          {/* LEFT — Inputs */}
          <div className="flex-1 bg-white p-10">
            <p className="text-gray-700 font-medium text-base mb-8 max-w-md">
              Enter a few details to see what managing accessibility on your own could look like.
            </p>

            <div className="space-y-8">

              {/* Pages */}
              <div className="flex items-start justify-between gap-6">
                <div className="flex-1">
                  <p className="font-semibold text-gray-900 text-sm">How many web pages do you have?</p>
                  <p className="text-gray-400 text-xs mt-1">The average site we scan has about 229 pages.</p>
                </div>
                <div className="flex items-center gap-2 shrink-0">
                  <input
                    type="number"
                    min={1}
                    value={pages}
                    onChange={(e) => setPages(Number(e.target.value))}
                    className="w-28 border border-gray-300 rounded-md px-3 py-2 text-sm text-gray-900 focus:outline-none focus:border-purple-500 text-right"
                  />
                  <span className="text-gray-400 text-sm">pages</span>
                </div>
              </div>

              <div className="h-px bg-gray-100" />

              {/* Issues per page */}
              <div className="flex items-start justify-between gap-6">
                <div className="flex-1">
                  <p className="font-semibold text-gray-900 text-sm">How many accessibility issues per page?</p>
                  <p className="text-gray-400 text-xs mt-1">
                    Most sites average{" "}
                    <span className="text-purple-600 underline cursor-pointer">50 unique issues per page</span>.
                  </p>
                </div>
                <div className="flex items-center gap-2 shrink-0">
                  <input
                    type="number"
                    min={1}
                    value={issuesPerPage}
                    onChange={(e) => setIssuesPerPage(Number(e.target.value))}
                    className="w-28 border border-gray-300 rounded-md px-3 py-2 text-sm text-gray-900 focus:outline-none focus:border-purple-500 text-right"
                  />
                  <span className="text-gray-400 text-sm">issues</span>
                </div>
              </div>

              <div className="h-px bg-gray-100" />

              {/* Mins per issue */}
              <div className="flex items-start justify-between gap-6">
                <div className="flex-1">
                  <p className="font-semibold text-gray-900 text-sm">How long does it take to fix each issue?</p>
                  <p className="text-gray-400 text-xs mt-1">Most issues take about 15 minutes to fix.</p>
                </div>
                <div className="flex items-center gap-2 shrink-0">
                  <input
                    type="number"
                    min={1}
                    value={minsPerIssue}
                    onChange={(e) => setMinsPerIssue(Number(e.target.value))}
                    className="w-28 border border-gray-300 rounded-md px-3 py-2 text-sm text-gray-900 focus:outline-none focus:border-purple-500 text-right"
                  />
                  <span className="text-gray-400 text-sm">mins</span>
                </div>
              </div>

              <div className="h-px bg-gray-100" />

              {/* Hourly rate */}
              <div className="flex items-start justify-between gap-6">
                <div className="flex-1">
                  <p className="font-semibold text-gray-900 text-sm">What&apos;s your average developer cost?</p>
                  <p className="text-gray-400 text-xs mt-1">The U.S. average is $82 per hour.</p>
                </div>
                <div className="flex items-center gap-2 shrink-0">
                  <input
                    type="number"
                    min={1}
                    value={hourlyRate}
                    onChange={(e) => setHourlyRate(Number(e.target.value))}
                    className="w-28 border border-gray-300 rounded-md px-3 py-2 text-sm text-gray-900 focus:outline-none focus:border-purple-500 text-right"
                  />
                  <span className="text-gray-400 text-sm">hourly</span>
                </div>
              </div>

            </div>
          </div>

          {/* RIGHT — Results */}
          <div className="md:w-[420px] shrink-0 bg-[#1a0020] text-white p-10 flex flex-col justify-between">

            <div>
              <h3 className="text-2xl font-bold text-[#c084fc] mb-2">Your Potential Cost</h3>
              <p className="text-sm text-gray-400 mb-8 leading-relaxed">
                Based on your inputs, here&apos;s what handling accessibility yourself could look like each year:
              </p>

              <p className="text-sm font-semibold text-white uppercase tracking-wide">Annual Cost</p>
              <p className="text-6xl font-bold text-[#f472b6] mt-2 leading-none">
                {formatCurrency(annualCost)}
              </p>
            </div>

            <div className="mt-10">
              <p className="text-sm font-semibold text-[#c084fc] mb-5">How did we get this number?</p>

              <div className="space-y-4 text-sm">
                <div className="flex justify-between items-center border-b border-white/10 pb-4">
                  <span className="text-white font-medium flex items-center gap-1">
                    Developer Costs
                    <span className="text-gray-400 text-xs border border-gray-500 rounded-full w-4 h-4 flex items-center justify-center leading-none cursor-pointer">ⓘ</span>
                  </span>
                  <span className="text-[#f472b6] font-semibold">{formatCurrency(developerCosts)}</span>
                </div>
                <div className="flex justify-between items-center border-b border-white/10 pb-4">
                  <span className="text-white font-medium flex items-center gap-1">
                    Manual Audits (2x/year)
                    <span className="text-gray-400 text-xs border border-gray-500 rounded-full w-4 h-4 flex items-center justify-center leading-none cursor-pointer">ⓘ</span>
                  </span>
                  <span className="text-[#f472b6] font-semibold">{formatCurrency(MANUAL_AUDITS)}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-white font-medium flex items-center gap-1">
                    Developer Tools
                    <span className="text-gray-400 text-xs border border-gray-500 rounded-full w-4 h-4 flex items-center justify-center leading-none cursor-pointer">ⓘ</span>
                  </span>
                  <span className="text-[#f472b6] font-semibold">{formatCurrency(DEVELOPER_TOOLS)}</span>
                </div>
              </div>
            </div>

          </div>

        </div>

        {/* Footer note */}
        <p className="text-xs text-gray-500 mt-6 max-w-3xl">
          <span className="font-semibold">Note:</span> Actual costs will vary based on how your site is built (i.e., page templates and reusable components can reduce work), but this gives you a starting point.
        </p>

      </div>
    </section>
  );
}
