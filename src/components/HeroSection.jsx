import React from "react";
import BgImage from "../assets/bg.png";
import { Link } from "react-router-dom";

const HeroSection = () => {
  return (
    <section
      id="hero"
      className="relative min-h-screen md:min-h-[115vh] flex items-center justify-center overflow-hidden bg-[#ffff]"
    >
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={BgImage}
          alt="background glow"
          className="absolute w-full h-full object-cover opacity-100 pointer-events-none select-none"
        />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 sm:px-6 max-w-[95%] sm:max-w-6xl mx-auto mt-[-40px] md:mt-[-140px]">
        {/* Heading */}
        <h1
          className="text-white mb-3 leading-tight
          text-[1.7rem] xs:text-[2rem] sm:text-5xl md:text-6xl lg:text-[70px]
          whitespace-normal md:whitespace-nowrap break-words"
        >
          Automate with Intelligence
        </h1>

        {/* Paragraph (Single Straight Line) */}
        <div className="overflow-x-auto">
          <p
            className="whitespace-nowrap text-gray-300 text-base sm:text-lg md:text-xl lg:text-2xl 
            leading-relaxed text-center inline-block"
          >
            Generate video ads with smart automation and grow your brand in minutes, not days.
          </p>
        </div>

        {/* Button */}
        <Link to="/waitlist">
          <button
            className="mt-6 bg-transparent text-white border border-white/20 
            px-4 sm:px-5 py-2 rounded-full 
            text-base xs:text-lg sm:text-2xl md:text-3xl 
            hover:text-[#688EAD] backdrop-blur-md 
            shadow-[0_0_20px_rgba(255,255,255,0.1)] 
            transition-all duration-300"
          >
            Join the Waitlist
          </button>
        </Link>
      </div>
    </section>
  );
};

export default HeroSection;
