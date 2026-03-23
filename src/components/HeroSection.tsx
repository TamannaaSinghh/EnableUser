"use client";

import { Check } from "lucide-react";
import LogoMarquee from "./LogoMarquee";

const HeroSection = () => {
  return (
    <section className="w-full bg-[#1f0033] text-white pt-10 pb-10">
      <div className="max-w-[1200px] mx-auto px-6">

        {/* Heading */}
        <h1 className="text-center text-5xl md:text-6xl font-semibold leading-tight mb-16">
          Protect your business with <br />
          flexible accessibility solutions
        </h1>

        {/* Cards */}
        <div className="grid md:grid-cols-3 gap-8">

          {/* Card 1 */}
          <div className="border border-purple-800 rounded-xl p-6 bg-transparent transition-transform duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-purple-900/40">
            <span className="text-xs border border-purple-400 px-3 py-1 rounded-full">
              Basic Protection
            </span>

            <h2 className="text-3xl font-semibold mt-4">Automated</h2>

            <p className="text-sm text-gray-300 mt-2">
              Basic monitoring & automated fixes
            </p>

            <p className="text-sm text-gray-300 mt-4">
              Our basic plan for automation-only monitoring, fixes, and online support
            </p>

            <h4 className="mt-6 font-semibold">Features include:</h4>

            <ul className="mt-3 space-y-3 text-sm text-gray-300">
              <li className="flex gap-2">
                <Check size={16} /> Automated tools addressing ~50% accessibility issues
              </li>
              <li className="flex gap-2">
                <Check size={16} /> Continuous monitoring
              </li>
              <li className="flex gap-2">
                <Check size={16} /> Accessibility Help Desk
              </li>
              <li className="flex gap-2">
                <Check size={16} /> Self-paced, online learning platform
              </li>
            </ul>

            <p className="text-xs text-gray-400 mt-4 italic">
              *Does not include expert testing for remaining issues
            </p>

            <button className="mt-6 border border-purple-400 px-4 py-2 rounded-md text-sm hover:bg-purple-900 transition">
              Start Free Trial
            </button>
          </div>

          {/* Card 2 */}
          <div className="bg-[#3b1d5c] rounded-xl p-6 transition-transform duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-purple-900/40">
            <span className="text-xs border border-purple-300 px-3 py-1 rounded-full">
              Self-Serviced Protection
            </span>

            <h2 className="text-3xl font-semibold mt-4">Self-Managed</h2>

            <p className="text-sm text-gray-200 mt-2">
              We guide you to fix at source
            </p>

            <p className="text-sm text-gray-200 mt-4">
              Empower your developers to understand and build for accessibility at the source
            </p>

            <h4 className="mt-6 font-semibold">Features include:</h4>

            <ul className="mt-3 space-y-3 text-sm text-gray-200">
              <li className="flex gap-2">
                <Check size={16} /> Developer tools
              </li>
              <li className="flex gap-2">
                <Check size={16} /> Certified expert guidance
              </li>
              <li className="flex gap-2">
                <Check size={16} /> Custom training
              </li>
              <li className="flex gap-2">
                <Check size={16} /> Accessibility scanner
              </li>
              <li className="flex gap-2">
                <Check size={16} /> Expert Audit and reporting
              </li>
            </ul>

            <button className="mt-6 border border-purple-300 px-4 py-2 rounded-md text-sm hover:bg-purple-800 transition">
              Schedule Demo
            </button>
          </div>

          {/* Card 3 */}
          <div className="bg-gray-100 text-black rounded-xl p-6 transition-transform duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-gray-400/40">
            <span className="text-xs bg-green-600 text-white px-3 py-1 rounded-full">
              Maximum Protection
            </span>

            <h2 className="text-3xl font-semibold mt-4">Managed</h2>

            <p className="text-sm text-gray-600 mt-2">
              We manage accessibility for you
            </p>

            <p className="text-sm text-gray-600 mt-4">
              Let our team of experts get you compliant by handling everything for you
            </p>

            <h4 className="mt-6 font-semibold">Features include:</h4>

            <ul className="mt-3 space-y-3 text-sm text-gray-600">
              <li className="flex gap-2">
                <Check size={16} /> Automated tools
              </li>
              <li className="flex gap-2">
                <Check size={16} /> Continuous monitoring
              </li>
              <li className="flex gap-2">
                <Check size={16} /> Custom-written fixes for your site
              </li>
              <li className="flex gap-2">
                <Check size={16} /> AudioEye Assurance*
              </li>
              <li className="flex gap-2">
                <Check size={16} /> Expert Audit and reporting
              </li>
            </ul>

            <button className="mt-6 bg-purple-600 text-white px-4 py-2 rounded-md text-sm hover:bg-purple-700 transition">
              Schedule Demo
            </button>
          </div>

        </div>
      </div>

      {/* Logo Marquee */}
      <div className="mt-10 mb-10">
      <LogoMarquee />
      </div>
    </section>
  );
};

export default HeroSection;