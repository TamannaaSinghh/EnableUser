"use client";

import { CheckCircle2, Minus } from "lucide-react";

const Tick = () => (
  <CheckCircle2 size={22} className="text-gray-400 stroke-[1.5]" />
);

const Dash = () => (
  <Minus size={18} className="text-gray-300 stroke-[1.5]" />
);

const FeatureRow = ({
  title,
  automated,
  self,
  managed,
  note,
}: {
  title: string;
  automated?: boolean;
  self?: boolean;
  managed?: boolean;
  note?: string;
}) => {
  return (
    <div className="grid grid-cols-4 items-center py-5 border-b border-gray-200 text-lg">
      <span className="text-indigo-600 font-medium pr-4">{title}</span>

      <div className="flex justify-center">
        {automated ? <Tick /> : <Dash />}
      </div>

      <div className="flex flex-col items-center justify-center text-center gap-1">
        {note ? (
          <span className="text-base text-indigo-500 max-w-[200px] leading-snug">{note}</span>
        ) : self ? (
          <Tick />
        ) : (
          <Dash />
        )}
      </div>

      <div className="flex justify-center">
        {managed ? <Tick /> : <Dash />}
      </div>
    </div>
  );
};

const SectionHeading = ({ title }: { title: string }) => (
  <h3 className="mt-12 mb-1 text-2xl font-bold text-gray-900 tracking-tight">
    {title}
  </h3>
);

const FeaturesSection = () => {
  return (
    <section className="w-full bg-[#f5f6fa] pt-24 pb-6">
      <div className="max-w-[1200px] mx-auto px-8">

        {/* Heading */}
        <h2 className="text-5xl font-bold text-gray-900 leading-tight">
          Our Features
        </h2>

        <p className="text-gray-500 mt-5 max-w-2xl text-lg leading-relaxed">
          Our plans are flexible, allowing your company to choose what solutions
          you need to best solve your accessibility needs. Our plans are general
          recommendations to get your team started effectively.
        </p>

        {/* Plan Header */}
        <div className="mt-14 px-8 pt-8 pb-0">
          <div className="grid grid-cols-4 items-end text-center pb-5">
            <div />

            <div className="flex flex-col items-center gap-3">
              <p className="text-lg font-semibold text-gray-800">Automated</p>
              <button className="text-base border border-purple-500 text-purple-600 px-5 py-2 rounded-md hover:bg-purple-50 transition">
                Start Free Trial
              </button>
            </div>

            <div className="flex flex-col items-center gap-3">
              <p className="text-lg font-semibold text-gray-800">Self Managed</p>
              <button className="text-base bg-purple-600 text-white px-5 py-2 rounded-md hover:bg-purple-700 transition">
                Schedule Demo
              </button>
            </div>

            <div className="flex flex-col items-center gap-3">
              <p className="text-lg font-semibold text-gray-800">Managed</p>
              <button className="text-base bg-purple-600 text-white px-5 py-2 rounded-md hover:bg-purple-700 transition">
                Schedule Demo
              </button>
            </div>
          </div>

          {/* Purple bottom border */}
          <div className="h-[3px] bg-purple-600" />
        </div>

        {/* TABLE */}
        <div className="mt-2 px-8">

          {/* Platform & Automation */}
          <SectionHeading title="Platform & Automation" />
          <FeatureRow title="Automated Monitoring"    automated                managed />
          <FeatureRow title="Automated Fixes"         automated                managed />
          <FeatureRow title="Accessibility Help Desk" automated                managed />
          <FeatureRow title="AudioEye Learning"       automated self            managed />

          {/* Developer Tools */}
          <SectionHeading title="Developer Tools" />
          <FeatureRow title="Developer Support & Guidance"  self />
          <FeatureRow title="Developer Tools"               self />

          {/* Expert Support */}
          <SectionHeading title="Expert Support" />
          <FeatureRow title="Expert Audit & Reporting"        self            managed />
          <FeatureRow title="Custom Fixes"                                    managed />
          <FeatureRow title="Document Remediation"                            managed />
          <FeatureRow
            title="Legal Support"
            note="Included after purchasing Expert Audits & Custom Fixes"
            managed
          />
          <FeatureRow title="AudioEye Assurance Guarantee*"                   managed />

          {/* Footer Note */}
          <p className="text-base text-gray-400 py-8 leading-relaxed">
            *Requires purchase of a Managed package that includes Assurance.
            AudioEye's offerings are designed to help you comply with website
            standards published by the Web Content Accessibility Guidelines (WCAG).
            Subject to the terms of an applicable Order, AudioEye provides you with
            limited, guaranteed financial protection against WCAG-related demand
            letters and/or lawsuits.
          </p>
        </div>

      </div>
    </section>
  );
};

export default FeaturesSection;
