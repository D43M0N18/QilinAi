import React, { useRef, useEffect, useState } from "react";

const STEPS = [
  {
    title: "process",
    description:
      "At QilinAI, we turn your brand's data into powerful AI-generated video ads. Our streamlined process blends data analysis, creative strategy, and intelligent visuals to craft ads that truly connect with your audience.",
  },
  {
    title: "analysis",
    description:
      "We begin by analyzing your brand's past ads, marketing campaigns, and audience engagement. Our AI identifies what works best from tone and visuals to messaging style, building a data-driven foundation for future campaigns.",
  },
  {
    title: "concept",
    description:
      "Using these insights, our platform develops unique, on-brand marketing concepts. Each concept includes tailored storylines and creative directions optimized for engagement, conversions, and audience appeal.",
  },
  {
    title: "visuals",
    description:
      "Once the concept is finalized, our AI brings it to life through stunning, high-quality video ads. Every visual, voiceover, and animation is crafted to match your brand's identity fast, smart, and ready to launch.",
  },
];

// ✅ New path - perfectly connects to circle edges (tuned manually)
const svgPath =
  "M420,90 C460,150 520,150 530,210 S520,280 330,340 S320,400 510,470 S540,520 330,600 S310,670 410,760";

const ProductSection = () => {
  const [activeStep, setActiveStep] = useState(0);
  const containerRef = useRef(null);

  useEffect(() => {
    function handleScroll() {
      const container = containerRef.current;
      if (!container) return;
      const rect = container.getBoundingClientRect();
      const winHeight = window.innerHeight;

      const prog = Math.min(Math.max((winHeight - rect.top) / rect.height, 0), 1);
      let stepNum = Math.floor(prog * STEPS.length);
      setActiveStep(stepNum);
    }
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section
      id="product"
      className="min-h-[140vh] w-full relative py-16 px-4"
      style={{
        background:
          "radial-gradient(ellipse at center, #1a2332 0%, #0b1220 70%, #050a15 100%)",
      }}
    >
      <div className="text-center mb-12">
        <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold text-white mb-8 tracking-tight">
          Product
        </h1>
      </div>

      <div className="text-center mb-20">
        <h2 className="max-w-4xl mx-auto text-center text-white text-xl md:text-2xl lg:text-3xl font-medium leading-relaxed">
          we're reimagining how brands create and scale video advertising. Our
          mission is simple: to empower companies with AI-driven creativity that
          builds the future of their marketing.
        </h2>
      </div>

      <div
        className="relative w-full max-w-[1200px] mx-auto h-[900px]"
        ref={containerRef}
      >
        {/* ✅ SVG Line connecting boxes perfectly */}
        <svg
          className="absolute left-0 top-0 w-full h-full pointer-events-none z-0"
          viewBox="0 0 800 900"
          preserveAspectRatio="xMidYMid meet"
        >
          <defs>
            <filter id="lineGlow">
              <feGaussianBlur stdDeviation="2" result="coloredBlur" />
              <feMerge>
                <feMergeNode in="coloredBlur" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>
          </defs>

          <path
            d={svgPath}
            stroke="#ffffff"
            strokeWidth={3}
            fill="none"
            filter="url(#lineGlow)"
            strokeLinecap="round"
            strokeLinejoin="round"
            style={{
              strokeDasharray: 1400,
              strokeDashoffset:
                1400 - 1400 * (activeStep / Math.max(STEPS.length - 1, 1)),
              transition: "stroke-dashoffset 1s ease-out",
              opacity: 0.95,
            }}
          />
        </svg>

        {/* ✅ Boxes positioned exactly on curve edges */}
        <div className="absolute top-0 left-0 w-full h-full z-10">
          {STEPS.map((step, index) => {
            const positions = [
              { top: 135, left: "61.3%", isLeft: false, circleLeft: "-14px" },
              { top: 285, left: "6%", isLeft: true, circleLeft: "calc(100% - 14px)" },
              { top: 430, left: "66%", isLeft: false, circleLeft: "-14px" },
              { top: 570, left: "5%", isLeft: true, circleLeft: "calc(100% - 14px)" },
            ];

            const position = positions[index];

            return (
              <div
                key={step.title}
                className={`absolute transition-all duration-1000 ease-out ${
                  activeStep >= index
                    ? "opacity-100 scale-100 translate-y-0"
                    : "opacity-20 scale-90 translate-y-8"
                }`}
                style={{
                  top: `${position.top}px`,
                  left: position.left,
                  width: "32%",
                  maxWidth: "380px",
                  zIndex: 15,
                }}
              >
                <div
                  className={`absolute w-6 h-6 rounded-full bg-white shadow-lg border-2 border-white z-20 transition-all duration-700 ${
                    activeStep >= index
                      ? "scale-100 opacity-100"
                      : "scale-75 opacity-30"
                  }`}
                  style={{
                    top: "50%",
                    left: position.circleLeft,
                    transform: "translateY(-50%)",
                  }}
                />

                <div className="bg-gray-800/90 backdrop-blur-sm px-6 py-5 rounded-lg border border-gray-600/40 shadow-2xl relative z-10">
                  <h3 className="text-lg font-semibold text-white mb-3 lowercase tracking-wide">
                    {step.title}
                  </h3>
                  <p className="text-sm text-gray-300 leading-relaxed font-light">
                    {step.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ProductSection;
