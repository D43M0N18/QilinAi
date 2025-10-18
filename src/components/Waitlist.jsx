import React, { useState } from "react";
import BgTop from "../assets/waitlist.png";
import Logo from "../assets/logo.png";
import { Link } from "react-router-dom";

export default function Waitlist() {
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    email: "",
  });

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setSuccess(false);

    try {
      await fetch(
        "https://script.google.com/macros/s/AKfycbxfi4AP1YztI2g1uvUwHyCo7cW3lN6ia3Rvb7ww3_rU4yD8xdbUnj9Scz4BARCGrL-1/exec",
        {
          method: "POST",
          mode: "no-cors",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(formData),
        }
      );

      setLoading(false);
      setSuccess(true);
      setFormData({ name: "", company: "", email: "" });
    } catch (error) {
      console.error("Error submitting form:", error);
      setLoading(false);
    }
  };

  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden bg-white">
      {/* Background */}
      <div className="absolute inset-0">
        <img
          src={BgTop}
          alt="Top background"
          className="w-full h-full object-cover opacity-100 select-none pointer-events-none"
          style={{ objectPosition: "center bottom" }}
        />
      </div>

      {/* Main Container */}
      <div className="relative z-10 w-full max-w-6xl mx-auto px-4 sm:px-6 md:px-10 lg:px-12 py-10 sm:py-12 md:py-16 flex justify-center items-center">
        <div className="backdrop-blur-xl bg-white/5 border border-white/10 shadow-2xl flex flex-col lg:flex-row w-full overflow-hidden relative ">

          {/* ✅ Logo - fixed top-left on large screens, centered on small */}
          <div className="absolute top-4 left-4 sm:top-6 sm:left-6 flex items-center gap-2 z-20">
            <img
              src={Logo}
              alt="Logo"
              className="w-9 h-9 sm:w-11 sm:h-11 rounded-full object-contain"
            />
            <div className="tracking-wide text-white text-2xl sm:text-3xl font-medium">
              Qilin<span className="text-gray-300">AI</span>
            </div>
          </div>

          {/* Left Section */}
          <div className="flex-[1.3] bg-[#0A1E3980] p-6 sm:p-8 md:p-10 lg:p-14 xl:p-16 flex flex-col justify-center items-start text-left">
            <h1 className="text-white leading-tight mb-6 sm:mb-10 md:mb-12 mt-16 sm:mt-20">
              <span className="block text-4xl sm:text-5xl md:text-6xl">Hello,</span>
              <span className="block text-5xl sm:text-6xl md:text-7xl font-bold">
                welcome!
              </span>
            </h1>

            <p className="text-white/90 text-base sm:text-lg md:text-xl leading-relaxed max-w-md">
              Join the waitlist to be among the first to experience QilinAI.
              <br />
              We’ll notify you as soon as we launch.
            </p>
          </div>

          {/* Divider */}
          <div className="hidden lg:block w-px bg-gradient-to-b from-transparent via-white/20 to-transparent"></div>

          {/* Right Section - Form */}
          <div className="flex-1 bg-[#02071AB5] p-6 sm:p-8 md:p-10 lg:p-14 flex items-center justify-center">
            <form
              onSubmit={handleSubmit}
              className="space-y-5 w-full max-w-sm sm:max-w-md md:max-w-sm"
            >
              <input
                type="text"
                name="name"
                placeholder="Name*"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full h-11 sm:h-12 px-5 sm:px-6 bg-white/5 border border-[#929599] rounded-[20px] text-white text-lg sm:text-xl placeholder-white/30 focus:outline-none focus:border-white/30 focus:bg-[#202938] transition-all duration-300 shadow-[inset_1px_1px_2px_rgba(255,255,255,0.4),inset_2px_2px_4px_rgba(0,0,0,0.9)]"
              />

              <input
                type="text"
                name="company"
                placeholder="Company name"
                value={formData.company}
                onChange={handleChange}
                className="w-full h-11 sm:h-12 px-5 sm:px-6 bg-white/5 border border-[#929599] rounded-[20px] text-white text-lg sm:text-xl placeholder-white/30 focus:outline-none focus:border-white/30 focus:bg-[#202938] transition-all duration-300 shadow-[inset_1px_1px_2px_rgba(255,255,255,0.4),inset_2px_2px_4px_rgba(0,0,0,0.5)]"
              />

              <input
                type="email"
                name="email"
                placeholder="Email*"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full h-11 sm:h-12 px-5 sm:px-6 bg-white/5 border border-[#929599] rounded-[20px] text-white text-lg sm:text-xl placeholder-white/30 focus:outline-none focus:border-white/30 focus:bg-[#202938] transition-all duration-300 shadow-[inset_1px_1px_2px_rgba(255,255,255,0.4),inset_2px_2px_4px_rgba(0,0,0,0.9)]"
              />

              <button
                type="submit"
                disabled={loading}
                className="w-[150px] sm:w-[170px] h-10 border bg-white/10 border-[#929599] hover:bg-[#4A5566] disabled:opacity-50 disabled:cursor-not-allowed rounded-full text-white font-medium transition-all duration-300 hover:shadow-lg mt-6 sm:mt-8 shadow-[inset_1px_1px_2px_rgba(255,255,255,0.4),inset_2px_2px_4px_rgba(0,0,0,0.9)] mx-auto block text-center"
              >
                {loading ? "Submitting..." : success ? "Submitted!" : "Submit"}
              </button>

              {success && (
                <div className="text-center text-green-400 text-sm sm:text-base mt-4">
                  Thank you! We'll notify you when we launch.
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
