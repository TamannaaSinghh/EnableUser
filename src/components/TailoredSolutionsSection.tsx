"use client";


import { Check } from "lucide-react";
import Link from "next/link";

const Row = ({
  goal,
  points,
}: {
  goal: string;
  points: React.ReactNode[];
}) => {
  return (
    <div className="grid md:grid-cols-2 gap-8 py-8 border-b border-[#2a3b55]">

      {/* LEFT */}
      <div>
        <h3 className="text-xl font-semibold text-white leading-snug">
          {goal}
        </h3>
      </div>

      {/* RIGHT */}
      <div className="space-y-4">
        {points.map((point, i) => (
          <div key={i} className="flex gap-3 items-start text-gray-300 text-sm">
            <Check size={16} className="mt-1 text-blue-300" />
            <p>{point}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

const TailoredSolutionsSection = () => {
  return (
    <>
      {/* ===== SOLUTIONS SECTION ===== */}
      <section className="bg-[#031f3f] text-white py-20">
        <div className="max-w-[1200px] mx-auto px-6">

          {/* HEADER */}
          <h2 className="text-4xl md:text-5xl font-semibold leading-tight max-w-3xl">
            Solutions tailored for your accessibility goals
          </h2>

          <p className="text-gray-300 mt-6 max-w-2xl">
            Whether you're just starting your accessibility journey, dealing with a legal claim,
            or looking for tools to help your teams work smarter and faster - we can help.
          </p>

          {/* TABLE HEADER */}
          <div className="grid md:grid-cols-2 gap-8 mt-12 pb-4 border-b border-[#2a3b55] text-sm text-blue-300 uppercase tracking-wide">
            <span>Your Goal</span>
            <span>How We Can Help</span>
          </div>

          {/* ROWS */}
          <Row
            goal="I want to improve my website's accessibility"
            points={[
              <>
                Detect issues in real time with{" "}
                <span className="underline text-white cursor-pointer">
                  24/7 accessibility monitoring
                </span>.
              </>,
              <>
                <span className="underline text-white cursor-pointer">
                  Automatically fix
                </span>{" "}
                ~50% of issues detected within minutes of installation.
              </>,
              <>
                Get{" "}
                <span className="underline text-white cursor-pointer">
                  custom fixes
                </span>{" "}
                for issues that cannot be fixed by automation alone.
              </>,
            ]}
          />

          <Row
            goal="I want to protect my business from legal action"
            points={[
              <>
                Enjoy peace of mind with{" "}
                <span className="underline text-white cursor-pointer">
                  industry-leading legal protection
                </span>.
              </>,
              <>
                Let our experts validate accessibility claims and write custom legal responses.
              </>,
            ]}
          />

          <Row
            goal="I want to give my team the tools to solve accessibility"
            points={[
              <>
                Save time and money by{" "}
                <span className="underline text-white cursor-pointer">
                  testing for accessibility issues
                </span>{" "}
                earlier in the software development life cycle.
              </>,
              <>
                Integrate EnableUser's{" "}
                <span className="underline text-white cursor-pointer">
                  Accessibility Testing SDK
                </span>{" "}
                into your web development tools.
              </>,
            ]}
          />

        </div>
      </section>

      {/* ===== CTA SECTION ===== */}
      <section className="bg-[#031f3f] pt-10 pb-15 text-center">
        <div className="max-w-[900px] mx-auto px-6">

          <h2 className="text-4xl md:text-6xl font-semibold leading-tight text-white mb-8">
            Let's build an accessible <br />
            digital future,{" "}
            <span className="text-green-300">together</span>
          </h2>

          <Link href="/contact" className="mt-10 bg-gray-200 text-black px-6 py-3 rounded-md font-medium hover:bg-gray-300 transition">
            Schedule Demo
          </Link>

        </div>
      </section>
    </>
  );
};

export default TailoredSolutionsSection;