import Image from "next/image";

const logos = [
  { src: "/websitelogos/fyers.svg", alt: "Fyers" },
  { src: "/websitelogos/dalmus-capital.svg", alt: "Dalmus Capital" },
  { src: "/websitelogos/indiabulls-securities.svg", alt: "Indiabulls Securities" },
  { src: "/websitelogos/greenportfolio.svg", alt: "Green Portfolio" },
  { src: "/websitelogos/mega-klc.svg", alt: "Mega KLC" },
  { src: "/websitelogos/marketwolf-logo.svg", alt: "Market Wolf" },
  { src: "/websitelogos/Accuracap-logo.png", alt: "Accuracap" },
  { src: "/websitelogos/beacon_esg.png", alt: "Beacon ESG" },
  { src: "/websitelogos/equanimity.webp", alt: "Equanimity" },
  { src: "/websitelogos/alpha_alternatives.webp", alt: "Alpha Alternatives" },
  { src: "/websitelogos/guardian-capital.png", alt: "Guardian Capital" },
  { src: "/websitelogos/kairon-capital.png", alt: "Kairon Capital" },
];

const LogoMarquee = ({ bgColor = "#160026" }: { bgColor?: string }) => {
  return (
    <div className="w-full border-t border-purple-900/40 py-8" style={{ backgroundColor: bgColor }}>
      <div className="max-w-[1200px] mx-auto px-6 flex items-center gap-8">

        {/* Left text */}
        <p className="text-white text-sm font-semibold leading-snug min-w-[180px]">
          Trusted by leading brands <br /> and happy customers
        </p>

        {/* Divider */}
        <div className="h-12 w-px bg-purple-700/50 shrink-0" />

        {/* Scrolling logos */}
        <div className="overflow-hidden flex-1">
          <div className="flex gap-12 animate-marquee w-max">
            {[...logos, ...logos].map((logo, i) => (
              <div key={i} className="flex items-center justify-center h-10 shrink-0">
                <Image
                  src={logo.src}
                  alt={logo.alt}
                  width={100}
                  height={40}
                  className="h-8 w-auto object-contain brightness-0 invert opacity-80 hover:opacity-100 transition-opacity duration-300"
                />
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
};

export default LogoMarquee;
