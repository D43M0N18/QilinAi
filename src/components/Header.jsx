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
    <header className="fixed bottom-88/100 left-0 right-0 z-50 bg-transparent border-white/5">
      <nav className="container mx-auto px-6 py-4 flex items-center justify-between">
        {/* --- Logo --- */}
        <div
          onClick={() => scrollToSection("hero")}
          className="flex items-center gap-2 cursor-pointer"
        >
          <img
            src={Logo}
            alt="Logo"
            className="w-12 h-12 rounded-full object-contain"
          />
          <div className="tracking-wide text-white text-3xl">
            Qilin<span className="text-gray-300">AI</span>
          </div>
        </div>

        {/* --- Center Nav --- */}
        <div className="hidden md:flex items-center justify-center gap-0 text-2xl px-6 py-2 rounded-xl border border-white/25 backdrop-blur-md shadow-[0_4px_8px_rgba(255,255,255,0.08)] bg-[rgba(0,0,20,0.25)] relative ml-2">
          {[
            { id: "vision", label: "Vision" },
            { id: "about", label: "About us" },
            { id: "product", label: "Product" },
            { id: "contact", label: "Contact" },
          ].map((item) => (
            <button
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              className="group relative text-white transition-all ml-8 mr-7"
            >
              {item.label}

              {/* --- Bottom Glow Hover Effect --- */}
              <span className="absolute inset-0 rounded-md opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <span className="absolute top-60/100 left-1/2 -translate-x-1/2 w-[30%] h-[47%] bg-gradient-to-t from-white/80 to-transparent blur-[8px]" />
              </span>
            </button>
          ))}
        </div>

        {/* --- Waitlist Button --- */}
        <Link to="/waitlist">
          <button className=" bg-transparent text-white border border-white/20 px-8 py-1 md:px-5  rounded-[12px] text-lg hover:bg-white/20 backdrop-blur-md shadow-[0_0_20px_rgba(255,255,255,0.1)] hover:shadow-[0_0_25px_rgba(255,255,255,0.2)] transition-all">
            Join Waitlist
          </button>
        </Link>

        {/* --- Mobile Menu Toggle --- */}
        <button
          className="md:hidden flex flex-col gap-1.5 focus:outline-none"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <span
            className={`block w-6 h-0.5 bg-white transition-transform ${
              isMenuOpen ? "rotate-45 translate-y-1.5" : ""
            }`}
          />
          <span
            className={`block w-6 h-0.5 bg-white ${
              isMenuOpen ? "opacity-0" : ""
            }`}
          />
          <span
            className={`block w-6 h-0.5 bg-white transition-transform ${
              isMenuOpen ? "-rotate-45 -translate-y-1.5" : ""
            }`}
          />
        </button>
      </nav>

      {/* --- Mobile Dropdown --- */}
      {isMenuOpen && (
        <div className="md:hidden bg-[#040818]/95 backdrop-blur-lg border-t border-white/10">
          <ul className="flex flex-col items-center gap-6 py-6 text-sm font-medium text-white">
            {["vision", "about", "product", "contact"].map((id) => (
              <li key={id}>
                <button
                  onClick={() => scrollToSection(id)}
                  className="hover:text-white/70 transition-colors"
                >
                  {id.charAt(0).toUpperCase() + id.slice(1)}
                </button>
              </li>
            ))}
            <li>
              <button
                onClick={() => scrollToSection("contact")}
                className="px-6 py-2 rounded-xl border border-white/10 bg-white/5 backdrop-blur-md text-white hover:bg-white/10 transition-all shadow-inner"
              >
                Join Waitlist
              </button>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
};

export default Header;
