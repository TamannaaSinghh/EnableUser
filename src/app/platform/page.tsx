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
  desc: string;
}) => (
  <div className="bg-white p-6 rounded-xl border border-gray-200">
    <h3 className="font-semibold text-lg text-gray-900">{title}</h3>
    <p className="text-gray-600 text-sm mt-3 leading-relaxed">{desc}</p>
  </div>
);

const PlatformPage = () => {
  return (
    <main>

      {/* HERO */}
      <section className="bg-[#1f0033] text-white py-24">
        <div className="max-w-[1100px] mx-auto px-6 text-center">
          <h1 className="text-5xl md:text-6xl font-semibold leading-tight">
            End-to-End Digital Accessibility.
            <br />
            <span className="text-purple-300">Unified.</span>
          </h1>

          <p className="mt-6 text-gray-300 max-w-2xl mx-auto">
            The complete digital accessibility solution. Web. Mobile. Software.
            IoT. Documents. From testing and fixing to reporting, our platform
            provides everything you need to create globally compliant experiences.
          </p>
        </div>
      </section>

      {/* 3 CORE PILLARS */}
      <section className="bg-[#1f0033] pb-20">
        <div className="max-w-[1200px] mx-auto px-6 grid md:grid-cols-3 gap-8 text-white">

          <Card
            title="Audit & Test"
            desc="Identify accessibility issues through automated scans, headless agents, and expert evaluation."
          />

          <Card
            title="Build & Fix"
            desc='Swiftly remediate barriers with AI-powered assistance and "shift-left" CI/CD integration.'
          />

          <Card
            title="Governance"
            desc="Monitor compliance, report on progress, and advance your accessibility maturity."
          />

        </div>
      </section>

      {/* PLATFORM INTRO */}
      <Section
        title="The EnableUser Platform"
        subtitle="The market’s most advanced platform and deepest bench of subject matter expertise come together in a single solution."
      >
        <div className="grid md:grid-cols-2 gap-8">

          <Card
            title="Headless Audit Engine"
            desc="REST and GraphQL endpoints to run audits programmatically. Send HTML, get JSON reports in < 200ms. Spin up headless browsers that navigate your app to detect real issues."
          />

          <Card
            title="Visual AI Analysis"
            desc="Our AI analyzes rendered UI to detect contrast violations, focus visibility, and layout shifts that code-only scanners miss."
          />

        </div>
      </Section>

      {/* BUILD & FIX */}
      <Section
        title="Build & Fix: Shift Left"
        subtitle="Fixing accessibility late is expensive. We help you stop shipping accessibility debt."
      >
        <div className="grid md:grid-cols-3 gap-8">

          <Card
            title="EnableCI"
            desc="Prevent new issues by integrating accessibility checks directly into your CI/CD pipeline (GitHub, GitLab, Jenkins)."
          />

          <Card
            title="Designer Tools"
            desc="Figma plugin with intelligent hierarchy suggestions and vision simulation for accessibility design validation."
          />

          <Card
            title="Developer IDE Tools"
            desc="VS Code & JetBrains extensions with real-time scanning and AI-powered code suggestions."
          />

        </div>
      </Section>

      {/* AI REMEDIATION */}
      <Section
        title="AI Accessibility Agents"
        subtitle="Scale your accessibility efforts with automation and intelligence."
      >
        <div className="grid md:grid-cols-2 gap-8">

          <Card
            title="Automated Remediation"
            desc="AI-powered technology that resolves common WCAG violations automatically on page load."
          />

          <Card
            title="Find Risk Earlier"
            desc="Turn noise into actionable insights. Remove duplicate issues and prioritize effectively."
          />

          <Card
            title="Fix Faster"
            desc="Instant code suggestions directly inside pull requests."
          />

          <Card
            title="Core™ Rule Engine"
            desc="AI-driven detection for 40+ WCAG criteria with advanced validation."
          />

          <Card
            title="Responsible AI"
            desc="Human-in-the-loop oversight with SOC II Type II & ISO 27001 validation."
          />

        </div>
      </Section>

      {/* MOBILE & DOC */}
      <Section title="Mobile & Document Coverage">
        <div className="grid md:grid-cols-2 gap-8">

          <Card
            title="Mobile App Testing"
            desc="Test accessibility across real and virtual devices with TalkBack and VoiceOver support."
          />

          <Card
            title="EnableDocs"
            desc="Create WCAG and PDF/UA compliant documents directly in Microsoft Word with automated tagging and remediation."
          />

        </div>
      </Section>

      {/* GOVERNANCE */}
      <Section
        title="Governance & Compliance"
        subtitle="Make strategic decisions that scale your impact."
      >
        <div className="grid md:grid-cols-3 gap-8">

          <Card
            title="Reporting & Analytics"
            desc="Gain full visibility into accessibility efforts and benchmark maturity."
          />

          <Card
            title="VPATs & ACRs"
            desc="Generate VPAT 2.5 reports to meet buyer and compliance requirements."
          />

          <Card
            title="Global Standards"
            desc="ADA (USA), EAA (EU), SEBI & IS 17802 (India) compliance support."
          />

        </div>
      </Section>

      {/* CTA */}
      <section className="bg-[#1f0033] text-white py-20 text-center">
        <h2 className="text-3xl font-semibold">
          See the platform in action
        </h2>

        <p className="text-gray-300 mt-4 mb-8">
          Experience how our AI-powered infrastructure accelerates accessibility.
        </p>

        <Link href="/contact" className=" bg-purple-600 px-6 py-3 rounded-md hover:bg-purple-700 transition">
          Request a Demo
        </Link>
      </section>

    </main>
  );
};

export default PlatformPage;