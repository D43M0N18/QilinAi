import React, { useRef, useEffect, useState } from "react";
import line1 from "../assets/Line 2.png"; // ✅ Update to correct path
import line2 from "../assets/Line 3.png"; // ✅ Update to correct path
import ProductImage from "../assets/product.png";

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
      className="min-h-[300vh] w-full relative py-16 px-4 overflow-hidden bg-[#02071A]"
      // style={{
      //   background:
      //     "radial-gradient(ellipse at center, #1a2332 0%, #0b1220 70%, #050a15 100%)",
      // }}
    >
      <img
              src={ProductImage}
              alt="background glow"
              className="absolute top-75/100 left-55/100 w-[140vw] max-w-none -translate-x-1/2 -translate-y-[60%] opacity-100 object-cover pointer-events-none select-none"
            />
            <div className="absolute inset-0 bg-[#02071A]/10" />
      {/* Title */}
      <div className="text-center mb-12">
        <h1 className="text-[300px] font-light -tracking-[0.60rem] lowercase text-white mb-4 -mt-20">
          Product
        </h1>
      </div>

      {/* Subtext */}
      <div className="text-center mb-20 -mt-20">
        <h2 className="max-w-4xl mx-auto text-center text-white text-xl md:text-2xl lg:text-3xl font-medium leading-relaxed">
          we're reimagining how brands create and scale video advertising. Our
          mission is simple: to empower companies with AI-driven creativity that
          builds the future of their marketing.
        </h2>
      </div>

      {/* ✅ Background Lines */}
      <div className="absolute inset-0 w-full h-full pointer-events-none z-0 mt-167">
        <img
          src={line1}
          alt="decorative line 1"
          className="absolute top-0 left-4813/10000 -translate-x-1/2 w-[300px] h-[400px] opacity-70"
        />
        <img
          src={line2}
          alt="decorative line 2"
          className="absolute top-[380px] left-429/1000 -translate-x-1/2 w-[300px] h-[900px] opacity-70"
        />
      </div>

      {/* ✅ Steps Section */}
      <div
        className="relative w-full max-w-[1200px] mx-auto h-[900px] z-10"
        ref={containerRef}
      >
        <div className="absolute top-0 left-0 w-full h-full">
          {STEPS.map((step, index) => {
            const positions = [
              { top: 50, left: "60%", isLeft: false, circleLeft: "-14px" },
              { top: 380, left: "-3%", isLeft: true, circleLeft: "calc(100% - 14px)" },
              { top: 810, left: "53.6%", isLeft: false, circleLeft: "-14px" },
              { top: 1170, left: "6%", isLeft: true, circleLeft: "calc(100% - 14px)" },
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

                <div className="px-6 py-5 rounded-lg relative z-10">
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
