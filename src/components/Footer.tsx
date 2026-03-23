"use client";

import Image from "next/image";
import Link from "next/link";
import { Linkedin, Instagram, Facebook, Youtube, Twitter } from "lucide-react";

const columns = [
  {
    heading: "Product",
    links: [
      "EnableUser Plans",
      "Digital Accessibility Platform",
      "Developer Tools",
      "EnableUser Assurance",
      "Expert Audits",
      "Accessibility Training",
      "App & Content Accessibility",
      "Trusted Certification",
    ],
  },
  {
    heading: "Company",
    links: [
      "About Us",
      "Careers",
      "Press Center",
      "Accessibility Statement",
      "Investor Relations ↗",
      "Alliance Team",
    ],
  },
  {
    heading: "Resources",
    links: [
      "Blog",
      "Case Studies",
      "What Is Digital Accessibility?",
      "Accessible Web Design Guide",
      "Web Accessibility Checklist",
      "Competitor Comparisons",
    ],
  },
  {
    heading: "Partners",
    links: [
      "Partner Programs",
      "Agency Reseller Partners",
      "Platform Partners",
      "Apply to Become a Partner",
    ],
  },
  {
    heading: "Compliance",
    links: [
      "WCAG 2.2 Compliance",
      "WCAG A, AA, and AAA",
      "ADA Compliance",
      "ADA Compliance Checklist",
      "Section 508 Compliance",
      "AODA Compliance",
      "CA State & Unruh Compliance",
    ],
  },
];

const helpLinks = [
  "Help Center ↗",
  "Login ↗",
  "Schedule Demo",
  "Request Legal Support",
  "Technical Documentation ↗",
  "Request Partner Support ↗",
];

const Footer = () => {
  return (
    <footer className="bg-[#0a0a0a] text-white pt-16 pb-10">
      <div className="max-w-[1200px] mx-auto px-8">

        {/* Top CTA */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6 border-b border-gray-800 pb-12 mb-14">
          <h2 className="text-3xl font-semibold leading-snug">
            Have a question?{" "}
            <Link href="/contact" className="underline cursor-pointer hover:text-purple-400 transition-colors duration-200">
              Contact us.
            </Link>
          </h2>
          <div className="flex gap-4">
            <button className="border border-white px-6 py-2.5 rounded-md text-sm font-medium hover:bg-white hover:text-black transition duration-200">
              Start Free Trial
            </button>
            <Link href="/contact" className="bg-purple-600 text-white px-6 py-2.5 rounded-md text-sm font-medium hover:bg-purple-700 transition duration-200">
              Schedule Demo
            </Link>
          </div>
        </div>

     
        {/* Main Footer Body — 3-col grid, Help card in slot 6 */}
        <div className="grid grid-cols-3 gap-x-10 gap-y-12">

          {columns.map((col) => (
            <div key={col.heading}>
              <h3 className="text-white font-semibold uppercase tracking-wide text-xs mb-5">
                {col.heading}
              </h3>
              <ul className="space-y-3 text-sm">
                {col.links.map((link) => (
                  <li
                    key={link}
                    className="text-gray-400 hover:text-white hover:translate-x-1 cursor-pointer transition duration-200"
                  >
                    {link}
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Help Card — 3rd column, 2nd row */}
          <div className="bg-gradient-to-b from-[#1e1e2e] to-[#14141f] border border-purple-900/40 rounded-2xl p-7 h-fit">
            <h3 className="text-white font-semibold uppercase tracking-wide text-xs mb-6">
              Help
            </h3>
            <ul className="space-y-4 text-sm">
              {helpLinks.map((item) => (
                <li
                  key={item}
                  className="text-gray-400 hover:text-white cursor-pointer transition-colors duration-200 flex items-center gap-2 group"
                >
                  <span className="w-1 h-1 rounded-full bg-purple-500 opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
                  {item}
                </li>
              ))}
            </ul>
           
          </div>

        </div>
           {/* Logo */}
      <Link href="/">
                <Image
                  src="/enableuser_logo.png"
                  alt="EnableUser Logo"
                  width={220}
                  height={56}
                  className="h-18 w-auto object-contain mb-0"
                  style={{ filter: "brightness(0) invert(1)" }}
                />
      </Link>

        {/* Bottom Bar */}
        <div className="mt-16 border-t border-gray-800 pt-8">
            
          <div className="flex gap-5 text-gray-400 mb-6">
            {[Linkedin, Instagram, Twitter, Facebook, Youtube].map((Icon, i) => (
              <Icon
                key={i}
                size={18}
                className="hover:text-white cursor-pointer transition-colors duration-200 hover:-translate-y-0.5"
              />
            ))}
          </div>

          <p className="text-xs text-gray-500 max-w-3xl leading-relaxed">
            Copyright ©2025 EnableUser, Inc. All rights reserved. ENABLEUSER is a registered trademark of EnableUser, Inc.
          </p>

          <div className="flex flex-wrap gap-6 text-xs text-gray-500 mt-5">
            {["Terms of Service", "Privacy Policy", "Privacy Settings", "Security Commitment", "Trust Center"].map((item) => (
              <span
                key={item}
                className="hover:text-white cursor-pointer transition-colors duration-200"
              >
                {item}
              </span>
            ))}
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
