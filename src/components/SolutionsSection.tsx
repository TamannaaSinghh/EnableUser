"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import Image from "next/image";

const AccordionItem = ({
  title,
  content,
  isOpen,
  onClick,
}: {
  title: string;
  content: string;
  isOpen: boolean;
  onClick: () => void;
}) => {
  return (
    <div className="border-b border-gray-200 py-5">
      <button
        onClick={onClick}
        className="w-full flex justify-between items-center text-left"
      >
        <span className="font-medium text-gray-900 text-base">{title}</span>
        <ChevronDown
          size={20}
          className={`text-gray-500 shrink-0 transition-transform duration-300 ${isOpen ? "rotate-180" : "rotate-0"}`}
        />
      </button>

      {isOpen && (
        <p className="text-gray-600 mt-4 text-base leading-relaxed">
          {content}
        </p>
      )}
    </div>
  );
};

const SolutionsSection = () => {
  const [openIndex, setOpenIndex] = useState(0);

  const items = [
    {
      title: "Industry-leading testing & WCAG coverage",
      content:
        "Our automated platform can reliably test 32 of the Web Content Accessibility Guidelines (WCAG) criteria — almost double the number of tests most automated tools can perform.",
    },
    {
      title: "Powerful automation for faster results",
      content:
        "Automate accessibility testing and remediation workflows to achieve faster and more reliable compliance results.",
    },
    {
      title: "Custom fixes from real experts",
      content:
        "Our accessibility experts provide tailored remediation solutions for complex issues.",
    },
    {
      title: "Legal protection you can count on",
      content:
        "Reduce legal risks with compliance strategies aligned to global standards.",
    },
    {
      title: "Flexible tools for your developers",
      content:
        "Empower your developers with tools that integrate seamlessly into their workflow.",
    },
  ];

  return (
    <section className="bg-[#f5f6fa] py-20">
      <div className="max-w-[1200px] mx-auto px-6 grid md:grid-cols-2 gap-12">

        {/* LEFT SIDE */}
        <div>
          {/* Tag */}
          <p className="text-xs tracking-[3px] uppercase text-gray-500 mb-4">
            Our Solutions
          </p>

          {/* Heading */}
          <h2 className="text-4xl md:text-5xl font-semibold text-gray-900 leading-tight">
            Everything you need to solve accessibility
          </h2>

          {/* Description */}
          <p className="text-gray-600 mt-6 max-w-xl">
            Every accessibility journey is unique. That’s why we give you all
            the tools and support to streamline compliance for your organization.
          </p>

          {/* Accordion */}
          <div className="mt-10">
            {items.map((item, index) => (
              <AccordionItem
                key={index}
                title={item.title}
                content={item.content}
                isOpen={openIndex === index}
                onClick={() =>
                  setOpenIndex(openIndex === index ? -1 : index)
                }
              />
            ))}
          </div>
        </div>

        {/* RIGHT SIDE — 2x2 grid */}
        <div className="grid grid-cols-2 grid-rows-2 gap-4">

          {/* Top-left: 1.png */}
          <div className="rounded-2xl overflow-hidden min-h-[160px] relative">
            <Image src="/1.png" alt="Visual 1" fill className="object-cover" />
          </div>

          {/* Top-right: 2.png */}
          <div className="rounded-2xl overflow-hidden min-h-[160px] relative">
            <Image src="/2.png" alt="Visual 2" fill className="object-cover" />
          </div>

          {/* Bottom-left: excel.png */}
          <div className="rounded-2xl overflow-hidden min-h-[160px] relative">
            <Image src="/excel.png" alt="Excel Report" fill className="object-cover" />
          </div>

          {/* Bottom-right: report.png */}
          <div className="rounded-2xl overflow-hidden min-h-[160px] relative">
            <Image src="/report.png" alt="Report" fill className="object-cover" />
          </div>

        </div>

      </div>
    </section>
  );
};

export default SolutionsSection;