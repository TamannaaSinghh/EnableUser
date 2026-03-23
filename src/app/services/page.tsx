"use client";

import Link from "next/link";



const Section = ({
  title,
  subtitle,
  children,
}: {
  title: string;
  subtitle?: string;
  children: React.ReactNode;
}) => (
  <section className="py-20 bg-[#f5f6fa]">
    <div className="max-w-[1200px] mx-auto px-6">
      <h2 className="text-4xl font-semibold text-gray-900">{title}</h2>
      {subtitle && (
        <p className="text-gray-600 mt-4 max-w-2xl">{subtitle}</p>
      )}
      <div className="mt-10">{children}</div>
    </div>
  </section>
);

const Card = ({
  title,
  desc,
}: {
  title: string;
  desc: React.ReactNode;
}) => (
  <div className="bg-white p-6 rounded-xl border border-gray-200">
    <h3 className="font-semibold text-lg text-gray-900">{title}</h3>
    <p className="text-gray-600 text-sm mt-3 leading-relaxed">{desc}</p>
  </div>
);

const ServicesPage = () => {
  return (
    <main>

      {/* HERO */}
      <section className="bg-[#1f0033] text-white py-24">
        <div className="max-w-[1100px] mx-auto px-6 text-center">
          <h1 className="text-5xl md:text-6xl font-semibold leading-tight">
            Enterprise Services.
            <br />
            <span className="text-purple-300">
              Built to Scale, Govern & Comply.
            </span>
          </h1>

          <p className="mt-6 text-gray-300 max-w-2xl mx-auto">
            From Fortune 500 enterprises to regulated teams, we deliver
            strategic accessibility services aligned with WCAG, ADA,
            Section 508, and global standards.
          </p>
        </div>
      </section>

      {/* QUICK TAGS */}
      <section className="bg-[#1f0033] pb-20">
        <div className="max-w-[900px] mx-auto px-6 flex flex-wrap justify-center gap-4">
          {["Audits", "Consulting", "Remediation", "Training"].map((item) => (
            <span
              key={item}
              className="border border-purple-400 px-4 py-2 rounded-full text-sm text-white"
            >
              {item}
            </span>
          ))}
        </div>
      </section>

      {/* AUDITS */}
      <Section title="Audits & Assessments">
        <div className="grid md:grid-cols-2 gap-8">

          <Card
            title="Web Accessibility Audits"
            desc={
              <>
                A comprehensive review using automated + manual testing.
                <br />
                <br />
                <b>We test for:</b> Keyboard accessibility, Screen Readers
                (JAWS, NVDA, VoiceOver), Color contrast, ARIA.
                <br />
                <br />
                <b>Deliverables:</b> Audit Report, Code-level fixes, VPAT support.
              </>
            }
          />

          <Card
            title="Mobile App Audits"
            desc={
              <>
                Coverage for iOS, Android & Hybrid apps.
                <br />
                <br />
                <b>Key Checks:</b> VoiceOver/TalkBack, dynamic scaling,
                touch targets, orientation handling.
              </>
            }
          />

          <Card
            title="Design Reviews"
            desc="Annotating Figma designs with WCAG guidance before development. Covers contrast, reading order, and component states."
          />

          <Card
            title="User Testing"
            desc="Testing by real users with disabilities using assistive technologies to validate usability beyond compliance."
          />

        </div>
      </Section>

      {/* CONSULTING */}
      <Section
        title="Consulting & Strategy"
        subtitle="Strategic guidance to mature your accessibility program."
      >
        <div className="grid md:grid-cols-2 gap-8">

          <Card
            title="Strategy & Roadmapping"
            desc="Define maturity roadmap, governance models, and policy frameworks for sustainable accessibility."
          />

          <Card
            title="VPAT / ACR Services"
            desc="We create VPATs for Section 508, WCAG, and EN 301 549 compliance—critical for enterprise and government sales."
          />

        </div>
      </Section>

      {/* REMEDIATION */}
      <Section title="Document & Media Remediation">
        <div className="grid md:grid-cols-2 gap-8">

          <Card
            title="PDF & Office Remediation"
            desc="Ensure accessibility for PDF, Word, Excel, and PowerPoint through proper tagging, structure, and alt text."
          />

          <Card
            title="Media Accessibility"
            desc="Professional captioning and transcription services for video and audio content."
          />

        </div>
      </Section>

      {/* TRAINING */}
      <Section title="Training & Enablement">
        <div className="grid md:grid-cols-2 gap-8">

          <Card
            title="For Developers"
            desc="Learn semantic HTML, ARIA, keyboard navigation, and accessibility testing practices."
          />

          <Card
            title="For Designers"
            desc="Master color contrast, focus states, component specs, and accessibility-first design workflows."
          />

        </div>
      </Section>

      {/* CTA */}
      <section className="bg-[#1f0033] text-white py-20 text-center">
        <h2 className="text-3xl font-semibold">
          Ready to engage?
        </h2>

        <p className="text-gray-300 mt-4 mb-8">
          Whether you need a quick audit or a long-term strategic partner,
          we are ready to help.
        </p>

        <Link href="/contact" className="mt-6 bg-purple-600 px-6 py-3 rounded-md hover:bg-purple-700 transition">
          Request a Quote
        </Link>
      </section>

    </main>
  );
};

export default ServicesPage;