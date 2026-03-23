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

const AcademyPage = () => {
  return (
    <main>

      {/* HERO */}
      <section className="bg-[#1f0033] text-white py-24">
        <div className="max-w-[1000px] mx-auto px-6 text-center">
          <h1 className="text-5xl md:text-6xl font-semibold leading-tight">
            Enable Academy.
            <br />
            <span className="text-purple-300">
              Build In-House Expertise.
            </span>
          </h1>

          <p className="mt-6 text-gray-300 max-w-2xl mx-auto">
            Accessibility is not a job for a single specialist.
            <br />
            It is a distributed responsibility.
          </p>
        </div>
      </section>

      {/* CORE FEATURES */}
      <section className="bg-[#1f0033] pb-20">
        <div className="max-w-[1000px] mx-auto px-6 grid md:grid-cols-3 gap-6 text-white text-center">

          {[
            {
              title: "Curated Paths",
              desc: "Learning tracks tailored for Developers, Designers, and QA teams.",
            },
            {
              title: "On-Demand",
              desc: "Self-paced modules designed to fit within your team's workflow.",
            },
            {
              title: "Certification",
              desc: "Internal certifications to validate skills and competency.",
            },
          ].map((item) => (
            <div
              key={item.title}
              className="border border-purple-400 rounded-xl p-6"
            >
              <h3 className="font-semibold">{item.title}</h3>
              <p className="text-sm text-gray-300 mt-2">{item.desc}</p>
            </div>
          ))}

        </div>
      </section>

      {/* LEARNING TRACKS */}
      <Section title="Specialized Learning Tracks">
        <div className="grid md:grid-cols-2 gap-8">

          <Card
            title="For Developers"
            desc={
              <>
                Stop patching bugs. Learn to build accessible systems.
                <br /><br />
                <b>Key Topics:</b> Semantic HTML5, ARIA, Keyboard handling,
                Responsive layouts, Accessibility unit testing.
              </>
            }
          />

          <Card
            title="For Designers"
            desc={
              <>
                Prevent accessibility defects before development.
                <br /><br />
                <b>Key Topics:</b> Color contrast, Focus states, Touch targets,
                Reading order, Component specs.
              </>
            }
          />

          <Card
            title="For QA & Testers"
            desc={
              <>
                Go beyond automated scanners.
                <br /><br />
                <b>Key Topics:</b> WCAG testing, Screen readers (NVDA/VoiceOver),
                Keyboard testing, Defect reporting.
              </>
            }
          />

          <Card
            title="For Advisors & Content"
            desc={
              <>
                Make content accessible to everyone.
                <br /><br />
                <b>Key Topics:</b> Accessible social media, Captions,
                Clear language, PDF tagging.
              </>
            }
          />

        </div>
      </Section>

      {/* COURSES */}
      <Section title="Popular Courses">
        <div className="grid md:grid-cols-3 gap-8">

          <Card
            title="WCAG 2.2 Deep Dive"
            desc="Comprehensive breakdown of latest success criteria like Focus Not Obscured, Dragging Movements, and Target Size."
          />

          <Card
            title="Global Accessibility Laws"
            desc="Understand ADA Title III, Section 508, EAA, and AODA compliance requirements."
          />

          <Card
            title="Mobile Accessibility Fundamentals"
            desc="Design and build accessible mobile apps for iOS and Android using VoiceOver and TalkBack."
          />

        </div>
      </Section>

      {/* CTA */}
      <section className="bg-[#1f0033] text-white py-20 text-center">
        <h2 className="text-3xl font-semibold">
          Start your team's journey
        </h2>

        <p className="text-gray-300 mt-4 mb-8">
          Equip your workforce with the skills to build a more inclusive digital future.
        </p>

        <Link href="/contact" className="mt-6 bg-purple-600 px-6 py-3 rounded-md hover:bg-purple-700 transition">
          Schedule a demo walkthrough
        </Link>
      </section>

    </main>
  );
};

export default AcademyPage;