"use client";

const ScannerSection = () => {
  return (
    <section className="bg-[#062f2f] py-20 text-white">
      <div className="max-w-[1200px] mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">

        {/* LEFT */}
        <div>
          <p className="text-xs tracking-[3px] uppercase text-teal-300 mb-4">
            Free Accessibility Scanner
          </p>

          <h2 className="text-4xl md:text-5xl font-semibold leading-tight">
            Check your website’s accessibility for free
          </h2>

          <p className="text-gray-300 mt-6 max-w-md">
            Our team of accessibility experts will help you understand what
            the results mean for your website’s compliance.
          </p>
        </div>

        {/* RIGHT INPUT BOX */}
        <div className="bg-[#1e4444] p-6 rounded-xl">

          <p className="text-sm text-gray-200 mb-4">
            Enter URL to find accessibility issues on your site
          </p>

          <div className="flex bg-[#0f2f2f] rounded-md overflow-hidden">
            <input
              type="text"
              placeholder="www.website.com"
              className="flex-1 px-4 py-3 bg-transparent text-white placeholder-gray-400 outline-none"
            />

            <button className="bg-white text-black px-6 font-medium hover:bg-gray-200 transition">
              Start Scan
            </button>
          </div>

        </div>

      </div>
    </section>
  );
};

export default ScannerSection;