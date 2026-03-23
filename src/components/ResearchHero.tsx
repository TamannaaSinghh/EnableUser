"use client";

import Image from "next/image";
import LogoMarquee from "./LogoMarquee";

import Link from "next/link";

const ResearchHero = () => {
  return (
    <section className="w-full bg-[#f5f6fa] pt-20 pb-5">
      <div className="max-w-[1200px] mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">

        {/* LEFT CONTENT */}
        <div>

          {/* Tag */}
          <p className="text-xs tracking-[3px] uppercase text-gray-500 mb-4">
            Independent Research Report
          </p>

          {/* Heading */}
          <h1 className="text-5xl md:text-6xl font-semibold text-gray-900 leading-tight">
            Third-party study finds EnableUser detects up to 253% more WCAG issues
          </h1>

          {/* Description */}
          <p className="text-gray-600 mt-6 max-w-xl">
            Independent research compared EnableUser's automated accessibility
            testing to competing solutions
          </p>

          {/* Buttons */}
          <div className="flex gap-4 mt-8">
            <button className="bg-purple-600 text-white px-6 py-3 rounded-md font-medium hover:bg-purple-700 transition">
              Get Report →
            </button>

            <Link href="/contact" className="border border-purple-500 text-purple-600 px-6 py-3 rounded-md font-medium hover:bg-purple-50 transition">
              Schedule Demo
            </Link>
          </div>
        </div>

        {/* RIGHT VISUAL */}
        <div className="bg-[#e9e5e0] p-4 rounded-2xl grid grid-cols-2 gap-4">

          {/* Main Image Card */}
          <div className="col-span-1 rounded-xl overflow-hidden bg-white">
            <Image
              src="/report.png" // 👉 put your image in public folder
              alt="report"
              width={400}
              height={500}
              className="w-full h-full object-cover"
            />
          </div>

          {/* Right Side Stats */}
          <div className="flex flex-col gap-4">

            {/* Stat Card */}
            <div className="bg-green-900 text-white rounded-xl p-6 flex flex-col justify-center">
              <h3 className="text-3xl font-semibold">89-253%</h3>
              <p className="text-sm mt-2 text-green-200">
                more WCAG issues than other leading accessibility tools
              </p>
            </div>

            {/* Graph Card */}
            <div className="bg-green-900 rounded-xl p-6 flex items-end justify-between h-full">

              {/* Fake Bars */}
              <div className="flex items-end gap-3 w-full">
                <div className="bg-yellow-400 w-4 h-24 rounded-sm"></div>
                <div className="bg-green-400 w-4 h-16 rounded-sm"></div>
                <div className="bg-green-500 w-4 h-10 rounded-sm"></div>
                <div className="bg-green-600 w-4 h-6 rounded-sm"></div>
              </div>

            </div>

          </div>

        </div>
        

      </div>
      <div className="my-10">
        <LogoMarquee bgColor="#022327" />
      </div>
    </section>
  );
};

export default ResearchHero;