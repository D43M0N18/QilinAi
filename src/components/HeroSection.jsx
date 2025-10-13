import React from "react";
import BgImage from "../assets/bg.png";
import { Link } from 'react-router-dom';


const HeroSection = () => {
  return (
    <section
      id="hero"
      className="relative min-h-[115vh] flex items-center justify-center overflow-hidden bg-[#ffff]"
    >
      {/* Background Image */}
      <div className="absolute inset-0">  
        <img
          src={BgImage}
          alt="background glow"
          className="absolute w-full h-full bottom-0 object-cover opacity-100 pointer-events-none select-none"
        />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-6xl mx-auto -mt-50">
        {/* Heading (Single Straight Line) */}
        <h1 className="whitespace-nowrap md:text-7xl lg:text-[70px] text-white mb-2 leading-tight ">
          Automate with Intelligence
        </h1>

        {/* Paragraph (Next Line) */}
        <p className="whitespace-nowrap text-gray-300 text-lg md:text-2xl max-w-3xl  leading-relaxed mr-64">
          Generate video ads with smart automation and grow your brand in
          minutes, not days.
        </p>

        {/* Button */}
        <Link to="/waitlist">
          <button className="mt-6 bg-transparent text-white border border-white/20 md:px-5 md:py-2 rounded-full text-3xl hover:bg-transparent hover:text-[#688EAD] backdrop-blur-md shadow-[0_0_20px_rgba(255,255,255,0.1)]  transition-all">
            Join the Waitlist
          </button>
        </Link>
      </div>
    </section>
  );
};

export default HeroSection;
