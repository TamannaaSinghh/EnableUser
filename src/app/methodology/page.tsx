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

const MethodologyPage = () => {
  return (
    <main>

      {/* HERO */}
      <section className="bg-[#1f0033] text-white py-24">
        <div className="max-w-[1000px] mx-auto px-6 text-center">
          <h1 className="text-5xl md:text-6xl font-semibold leading-tight">
            The Enable User Methodology.
            <br />
            <span className="text-purple-300">
              Science, Not Guesswork.
            </span>
          </h1>

          <p className="mt-6 text-gray-300 max-w-2xl mx-auto">
            Traditional accessibility focuses on fixing errors.
            <br />
            We focus on fixing the process that creates them.
          </p>
        </div>
      </section>

      {/* STEPS */}
      <section className="bg-[#1f0033] pb-20">
        <div className="max-w-[900px] mx-auto px-6 flex flex-wrap justify-center gap-6 text-white">
          {["1. Audit", "2. Remediate", "3. Validate", "4. Monitor"].map(
            (step) => (
              <div
                key={step}
                className="border border-purple-400 px-6 py-3 rounded-full text-sm"
              >
                {step}
              </div>
            )
          )}
        </div>
      </section>

      {/* HYBRID AUDIT */}
      <Section
        title="Hybrid Audit Model"
        subtitle="Automation finds the breadth. Humans find the depth."
      >
        <div className="grid md:grid-cols-2 gap-8">

          <Card
            title="Layer 1: Automated Scanning"
            desc={
              <>
                Our headless audit engine scans thousands of pages.
                <br /><br />
                <b>Detects:</b> ~40% of issues like contrast, missing alt text, empty links.
              </>
            }
          />

          <Card
            title="Layer 2: Manual Expert Testing"
            desc={
              <>
                IAAP-certified experts test using assistive tech.
                <br /><br />
                <b>Detects:</b> ~60% including keyboard traps, focus issues, and sequence errors.
              </>
            }
          />

        </div>

        <div className="mt-10 text-sm text-gray-600">
          <b>Tech Stack:</b> NVDA, JAWS, VoiceOver, TalkBack, Dragon NaturallySpeaking.
          <br />
          <b>Validation:</b> Every issue is verified to eliminate false positives.
        </div>
      </Section>

      {/* SHIFT LEFT */}
      <Section
        title="Shift Left Engineering"
        subtitle="Fix issues early — not after release."
      >
        <div className="grid md:grid-cols-3 gap-8">

          <Card
            title="Design"
            desc="Annotating Figma designs with WCAG specifications before development."
          />

          <Card
            title="Develop"
            desc="IDE linters and pre-commit hooks ensure accessibility during coding."
          />

          <Card
            title="Deploy"
            desc="CI/CD quality gates prevent accessibility regressions before release."
          />

        </div>

        <div className="mt-10 bg-white p-6 rounded-xl border border-gray-200">
          <p className="text-gray-700">
            Developers are guided to write accessible code before they commit it.
            Accessibility becomes a constraint of the build — not an afterthought.
          </p>
        </div>
      </Section>

      {/* COMPLIANCE */}
      <Section
        title="Rigorous Standards Compliance"
        subtitle="Meeting global accessibility requirements with precision."
      >
        <div className="grid md:grid-cols-3 gap-8">

          <Card
            title="WCAG 2.1 / 2.2"
            desc="The global standard. We test for Level A, AA, and AAA where required."
          />

          <Card
            title="ADA Title III"
            desc="Ensuring websites are accessible to avoid legal risks in the US."
          />

          <Card
            title="European Accessibility Act (EAA)"
            desc="Compliance for products and services operating in the EU market."
          />

        </div>
      </Section>

      {/* CTA */}
      <section className="bg-[#1f0033] text-white py-20 text-center">
        <h2 className="text-3xl font-semibold">
          Adopt a methodology that scales
        </h2>

        <p className="text-gray-300 mt-4 mb-8">
          Stop playing “whack-a-mole” with accessibility bugs.
          Build a system that prevents them.
        </p>

        <Link href="/contact" className="mt-6 bg-purple-600 px-6 py-3 rounded-md hover:bg-purple-700 transition">
          Consult with our architects
        </Link>
      </section>

    </main>
  );
};

export default MethodologyPage;