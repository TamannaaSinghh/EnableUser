"use client";

import {
  FileText,
  Monitor,
  Smartphone,
  FileCheck,
  FilePlus,
  PlayCircle,
  
} from "lucide-react";
import Link from "next/link";

const ServiceCard = ({
  icon,
  title,
  description,
}: {
  icon: React.ReactNode;
  title: string;
  description: React.ReactNode;
}) => {
  return (
    <div className="flex flex-col gap-4">
      <div className="text-gray-800">{icon}</div>

      <h3 className="text-lg font-semibold text-gray-900">{title}</h3>

      <p className="text-gray-600 text-sm leading-relaxed">
        {description}
      </p>
    </div>
  );
};

const AdditionalServices = () => {
  return (
    <section className="w-full bg-[#f5f6fa] pt-6 pb-20">
      <div className="max-w-[1200px] mx-auto px-6">

        {/* Top Label */}
        <p className="text-xs tracking-[3px] text-gray-500 uppercase">
          Additional Services
        </p>

        {/* Heading */}
        <h2 className="text-4xl md:text-5xl font-semibold text-gray-900 mt-4 max-w-3xl leading-tight">
          Empower your teams with additional tools and support
        </h2>

        {/* Description */}
        <p className="text-gray-600 mt-4 max-w-2xl mb-8">
          Help your teams detect and fix accessibility violations on their own with
          powerful developer tools and custom support from our team of certified experts.
        </p>

        {/* CTA */}
        <Link href="/contact" className="mt-6 bg-purple-600 text-white px-6 py-3 rounded-md font-medium hover:bg-purple-700 transition">
          Schedule Demo
        </Link>

        {/* GRID */}
        <div className="grid md:grid-cols-3 gap-12 mt-16">

          <ServiceCard
            icon={<FileText size={28} />}
            title="Document Remediation"
            description="Optimize PDFs and digital documents for accessibility with our Document Remediation Services."
          />

          <ServiceCard
            icon={<Monitor size={28} />}
            title="Consulting and Training"
            description="Get expert training on the latest accessibility requirements and best practices."
          />

          <ServiceCard
            icon={<Smartphone size={28} />}
            title="Mobile Audit"
            description="Uncover accessibility violations on your iOS or Android app with a Mobile Audit."
          />

          <ServiceCard
            icon={<FileCheck size={28} />}
            title="Custom Legal Response"
            description="Get analyses, guidance, and support from our legal experts to navigate and respond to legal claims"
          />

          <ServiceCard
            icon={<FilePlus size={28} />}
            title="VPAT"
            description="A Voluntary Product Accessibility Template (VPAT) is a document that explains how software products conform to IT accessibility standards"
          />

          <ServiceCard
            icon={<PlayCircle size={28} />}
            title="Closed Captioning"
            description={
              <>
                Closed captioning and transcription services provided by{" "}
                <span className="text-purple-600 underline cursor-pointer">
                  3Play Media
                </span>
                , done in the U.S. by professional transcribers
              </>
            }
          />

        </div>
      </div>
    </section>
  );
};

export default AdditionalServices;