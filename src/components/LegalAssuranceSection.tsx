"use client";

import { ShieldCheck } from "lucide-react";
import Link from "next/link";

const LegalAssuranceSection = () => {
  return (
    <section className="bg-[#f5f6fa]">

      {/* ===== COST CALCULATOR SECTION ===== */}
      <div className="py-10 text-center">
        <div className="max-w-[800px] mx-auto px-6">

          <h2 className="text-4xl md:text-5xl font-semibold text-gray-900">
            Accessibility Cost Calculator
          </h2>

          <p className="text-gray-600 mt-6">
            Learn what it could cost to handle accessibility yourself — and how much time
            and effort EnableUser can save you.
          </p>

          <Link
            href="/pricing#cost-calculator"
            className="mt-8 inline-block bg-purple-600 text-white px-6 py-3 rounded-md font-medium hover:bg-purple-700 transition"
          >
            Estimate Your Cost
          </Link>

        </div>
      </div>

      {/* ===== LEGAL ASSURANCE SECTION ===== */}
      <div className="py-10">
        <div className="max-w-[1200px] mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">

          {/* LEFT SIDE */}
          <div className="space-y-4">

            {/* Top Card */}
            <div className="border border-purple-400 rounded-xl p-6 bg-white">

              {/* Header */}
              <div className="flex justify-between items-center mb-6">
                <h3 className="text-xl font-semibold text-gray-900 flex items-center gap-2">
                  Legal assurance
                  <span className="text-purple-600">✔</span>
                </h3>

                <span className="text-xs bg-purple-100 text-purple-700 px-3 py-1 rounded-full">
                  Maximum Protection
                </span>
              </div>

              {/* Highlight Box */}
              <div className="bg-purple-100 text-purple-700 px-4 py-3 rounded-md flex items-center gap-2 font-medium">
                <ShieldCheck size={18} />
                Managed services + Legal assurance
              </div>

            </div>

            {/* Bottom Cards */}
            <div className="grid grid-cols-2 gap-4">

              {/* Icon Card */}
              <div className="bg-purple-900 rounded-xl h-40 flex items-center justify-center">
                <span className="text-white text-5xl">♿</span>
              </div>

              {/* Stats Card */}
              <div className="bg-purple-800 rounded-xl p-6 text-white flex flex-col justify-center">
                <h3 className="text-3xl font-semibold">300–400%</h3>
                <p className="text-sm mt-2 text-purple-200">
                  more protection from valid legal claims compared to other solutions
                </p>
              </div>

            </div>

          </div>

          {/* RIGHT SIDE */}
          <div>

            {/* Tag */}
            <p className="text-xs tracking-[3px] uppercase text-gray-500 mb-4">
              EnableUser Assurance
            </p>

            {/* Heading */}
            <h2 className="text-4xl md:text-5xl font-semibold text-gray-900 leading-tight">
              Guaranteed compliance, without all the fine print
            </h2>

            {/* Description */}
            <p className="text-gray-600 mt-6 max-w-xl">
              Other vendors make big promises about their legal guarantees, but most
              are just empty pledges. At EnableUser, we offer the industry's only real guarantee
              for each page we certify.
            </p>

            {/* Button */}
            <button className="mt-6 border border-purple-500 text-purple-600 px-6 py-3 rounded-md font-medium hover:bg-purple-50 transition">
              Learn About EnableUser Assurance
            </button>

          </div>

        </div>
      </div>

    </section>
  );
};

export default LegalAssuranceSection;