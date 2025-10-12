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
          headers: {
            "Content-Type": "application/json",
          },
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
      <div className="absolute w-[225vh]">
        <img
          src={BgTop}
          alt="Top background"
          className="w-full h-full object-cover opacity-100 select-none pointer-events-none"
          style={{ objectPosition: "center bottom" }}
        />
      </div>

      {/* Main Container */}
      <div className="relative z-10 w-full mt-15 h-[85vh] max-w-6xl mx-auto p-6 lg:p-12 flex justify-center">
        <div className="backdrop-blur-xl bg-white/5 border border-white/10 shadow-2xl flex flex-col lg:flex-row w-full overflow-hidden relative">

          {/* ✅ FIXED TOP LEFT LOGO */}
          <div className="absolute top-6 left-6 flex items-center gap-2 cursor-pointer z-20">
            <img src={Logo} alt="Logo" className="w-11 h-11 rounded-full object-contain" />
            <div className=" tracking-wide text-white text-3xl">
              Qilin<span className="text-gray-300">AI</span>
            </div>
          </div>

          {/* Left Section */}
          <div className="flex-[1.3] bg-[#0A1E3980] p-10 lg:p-16 lg:pr-8">
            <h1 className="text-white leading-tight mb-30 mt-20">
              <span className="block text-6xl ">Hello,</span>
              <span className="block text-7xl font-bold">welcome!</span>
            </h1>

            <p className="text-white/90 text-lg leading-relaxed">
              Join the waitlist to be among the first to experience QilinAI.
              <br />
              We'll notify you as soon as we launch.
            </p>
          </div>

          {/* Divider */}
          <div className="w-px bg-gradient-to-b from-transparent via-white/20 to-transparent"></div>

          {/* Right Section - Form */}
          <div className="flex-1 bg-[#02071AB5] lg:p-16 lg:pl-8 flex items-center">
            <form onSubmit={handleSubmit} className="space-y-5 w-85 ml-8 max-w-sm">
              <input
                type="text"
                name="name"
                placeholder="Name*"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full h-12 px-6 bg-white/3 border border-[#929599] rounded-[20px] text-white text-2xl placeholder-white/10 focus:outline-none focus:border-white/30 focus:bg-[#202938] transition-all duration-300 shadow-[inset_1px_1px_2px_rgba(255,255,255,0.4),inset_2px_2px_4px_rgba(0,0,0,0.9)]"
              />

              <input
                type="text"
                name="company"
                placeholder="Company name"
                value={formData.company}
                onChange={handleChange}
                className="w-full h-12 px-6 bg-white/3 border border-[#929599] rounded-[20px] text-white text-2xl placeholder-white/10 focus:outline-none focus:border-white/30 focus:bg-[#202938] transition-all duration-300 hadow-inner shadow-[inset_1px_1px_2px_rgba(255,255,255,0.4),inset_2px_2px_4px_rgba(0,0,0,0.5)]"
              />

              <input
                type="email"
                name="email"
                placeholder="Email*"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full h-12 px-6 bg-white/3 border border-[#929599] rounded-[20px] text-white text-2xl placeholder-white/20 focus:outline-none focus:border-white/30 focus:bg-[#202938] transition-all duration-300 hadow-inner shadow-[inset_1px_1px_2px_rgba(255,255,255,0.4),inset_2px_2px_4px_rgba(0,0,0,0.9)]"
              />

              <button
                type="submit"
                disabled={loading}
                className="w-[170px] h-10  border bg-white/10 border-[#929599] hover:bg-[#4A5566] disabled:opacity-50 disabled:cursor-not-allowed rounded-full text-white font-medium transition-all duration-300 hover:shadow-lg mt-8 ml-21 shadow-[inset_1px_1px_2px_rgba(255,255,255,0.4),inset_2px_2px_4px_rgba(0,0,0,0.9)]"
              >
                {loading ? "Submitting..." : success ? "Submitted!" : "Submit"}
              </button>

              {success && (
                <div className="text-center text-green-400 text-sm mt-4">
                  Thank you! We'll notify you when we launch.
                </div>
              )}
            </form>
          </div>
        </div>
      </div>

      {/* Overlay */}
      {/* <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse at center, rgba(0,0,0,0) 0%, rgba(0,0,20,0.4) 75%, rgba(0,0,20,0.8) 100%)",
        }}
      /> */}
    </div>
  );
}
