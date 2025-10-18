import React, { useState } from "react";
import Logo from "../assets/logo.png";
import { Link } from "react-router-dom";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: "smooth" });
    setIsMenuOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50  ">
      <nav className="container mx-auto px-4 sm:px-6 py-3 flex items-center justify-between">
        {/* --- Logo --- */}
        <div
          onClick={() => scrollToSection("hero")}
          className="flex items-center gap-2 cursor-pointer"
        >
          <img
            src={Logo}
            alt="Logo"
            className="w-9 h-9 sm:w-11 sm:h-11 md:w-12 md:h-12 rounded-full object-contain"
          />
          <div className="tracking-wide text-white text-xl sm:text-2xl md:text-3xl">
            Qilin<span className="text-gray-300">AI</span>
          </div>
        </div>

        {/* --- Desktop Nav (only from lg breakpoint upward) --- */}
        <div className="hidden lg:flex items-center justify-center gap-0 text-lg xl:text-2xl px-5 py-2 rounded-xl border border-white/25 backdrop-blur-md shadow-[0_4px_8px_rgba(255,255,255,0.08)] bg-[rgba(0,0,20,0.25)]">
          {[
            { id: "vision", label: "Vision" },
            { id: "about", label: "About us" },
            { id: "product", label: "Product" },
            { id: "contact", label: "Contact" },
          ].map((item) => (
            <button
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              className="group relative text-white transition-all mx-5"
            >
              {item.label}
              {/* --- Bottom Glow Hover --- */}
              <span className="absolute inset-0 rounded-md opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <span className="absolute top-[60%] left-1/2 -translate-x-1/2 w-[30%] h-[40%] bg-gradient-to-t from-white/70 to-transparent blur-[8px]" />
              </span>
            </button>
          ))}
        </div>

        {/* --- Waitlist Button --- */}
        <Link to="/waitlist" className="hidden sm:block">
          <button className="bg-transparent text-white border border-white/20 px-5 sm:px-6 md:px-5 py-1.5 rounded-[12px] text-sm sm:text-lg hover:bg-white/20 backdrop-blur-md shadow-[0_0_20px_rgba(255,255,255,0.1)] hover:shadow-[0_0_25px_rgba(255,255,255,0.2)] transition-all">
            Join Waitlist
          </button>
        </Link>

        {/* --- Mobile Menu Toggle (visible up to lg breakpoint) --- */}
        <button
          className="lg:hidden flex flex-col gap-1.5 focus:outline-none"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          <span
            className={`block w-6 h-0.5 bg-white transition-transform duration-300 ${
              isMenuOpen ? "rotate-45 translate-y-1.5" : ""
            }`}
          />
          <span
            className={`block w-6 h-0.5 bg-white transition-opacity duration-300 ${
              isMenuOpen ? "opacity-0" : ""
            }`}
          />
          <span
            className={`block w-6 h-0.5 bg-white transition-transform duration-300 ${
              isMenuOpen ? "-rotate-45 -translate-y-1.5" : ""
            }`}
          />
        </button>
      </nav>

      {/* --- Mobile / Tablet Dropdown --- */}
      {isMenuOpen && (
        <div className="lg:hidden bg-[#040818]/95 backdrop-blur-lg border-t border-white/10">
          <ul className="flex flex-col items-center gap-6 py-6 text-base sm:text-lg md:text-xl font-medium text-white">
            {[
              { id: "vision", label: "Vision" },
              { id: "about", label: "About us" },
              { id: "product", label: "Product" },
              { id: "contact", label: "Contact" },
            ].map((item) => (
              <li key={item.id}>
                <button
                  onClick={() => scrollToSection(item.id)}
                  className="hover:text-white/70 transition-colors duration-300"
                >
                  {item.label}
                </button>
              </li>
            ))}
            <li>
              <Link to="/waitlist">
                <button className="px-6 py-2 rounded-xl border border-white/10 bg-white/5 backdrop-blur-md text-white hover:bg-white/10 transition-all shadow-inner">
                  Join Waitlist
                </button>
              </Link>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
};

export default Header;
