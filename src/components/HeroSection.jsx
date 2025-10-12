import React from "react";
import BgImage from "../assets/bg.png";
import { Link } from 'react-router-dom';


const HeroSection = () => {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#ffff]"
    >
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={BgImage}
          alt="background glow"
          className="absolute w-full h-full bottom-2/100 object-cover opacity-100 pointer-events-none select-none"
        />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-6xl mx-auto">
        {/* Heading (Single Straight Line) */}
        <h1 className="whitespace-nowrap text-5xl md:text-7xl lg:text-7xl font-bold text-white mb-6 leading-tight">
          Automate with Intelligence
        </h1>

        {/* Paragraph (Next Line) */}
        <p className="whitespace-nowrap text-gray-300 text-lg md:text-2xl max-w-3xl  leading-relaxed">
          Generate video ads with smart automation and grow your brand in
          minutes, not days.
        </p>

        {/* Button */}
        <Link to="/waitlist">
          <button className="mt-10 bg-white/10 text-white border border-white/20 px-8 py-3 md:px-10 md:py-4 rounded-full font-medium text-lg hover:bg-white/20 backdrop-blur-md shadow-[0_0_20px_rgba(255,255,255,0.1)] hover:shadow-[0_0_25px_rgba(255,255,255,0.2)] transition-all">
            Join the Waitlist
          </button>
        </Link>
      </div>
    </section>
  );
};

export default HeroSection;
