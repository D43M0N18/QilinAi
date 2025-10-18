import React from "react";
import { Mail, Twitter, Linkedin, Instagram } from "lucide-react";
import GroupBg from "../assets/about.png";
import ContactShape from "../assets/contact.png";
import ContactIcon from "../assets/contactH.png";
const ContactSection = () => {
  return (
    <section
      id="contact"
      className="relative min-h-screen py-20 px-6 bg-[#02071A] overflow-hidden text-white"
    >
      {/* Background Images */}
      <img
        src={ContactShape}
        className="absolute z-20 left-67/100 top-160 w-[45%] max-w-[500px] opacity-70 pointer-events-none"
        alt="contact shape"
      />
      {/* <img
        src={GroupBg}
        className="absolute right-[-10%] top-[20%] w-[60vw] max-w-[700px] opacity-30 blur-md pointer-events-none"
        alt="background group"
      /> */}

      {/* Overlay */}
      <div className="absolute inset-0 z-0 bg-gradient-to-br from-[#02071add] via-[#02071acc] to-[#02071add] backdrop-blur-[1px]" />

      <div className="relative z-10 container mx-auto max-w-6xl">
        {/* Title */}
        <div className="text-center mb-12 sm:mb-16">
          {/* <h2
            className="text-white lowercase font-light leading-none 
            text-[60px] sm:text-[100px] md:text-[140px] lg:text-[200px] xl:text-[260px] 2xl:text-[320px]
            -tracking-[0.05em]"
          >
            contact
          </h2> */}
          <img className="scale-133" src={ContactIcon} alt="" />
        </div>

        {/* Main Grid */}
        <div className="grid lg:grid-cols-2 items-start lg:items-center mb-12 gap-12 lg:gap-0">
          {/* LEFT SIDE - Text & Info */}
          <div className="space-y-6 text-center lg:text-left px-2 sm:px-4">
            <p
              className="text-base sm:text-lg md:text-xl lg:text-[28px] font-light 
              leading-relaxed max-w-[600px] mx-auto lg:mx-0 lg:-mt-70"
            >
              We’d love to connect with you! Whether you’re a brand ready to
              revolutionize your advertising or an investor curious about the
              future of AI-driven marketing.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3 mt-6">
              <Mail className="w-6 h-6 shrink-0" />
              <span className="text-lg sm:text-xl md:text-2xl">
                hello@qilin.co.in
              </span>
            </div>
          </div>

          {/* RIGHT SIDE - Form */}
          <form
            className="space-y-8 md:space-y-10 w-full lg:w-[90%] mx-auto mt-10 lg:mt-0 px-2 sm:px-4 lg:ml-20"
          >
            <input
              type="text"
              placeholder="Name"
              className="w-full h-12 px-6 bg-white/5 border border-[#929599] rounded-[20px] 
              text-white text-base sm:text-lg md:text-2xl placeholder-white/30 
              focus:outline-none focus:border-white/40 focus:bg-[#202938] transition-all duration-300 
              shadow-[inset_1px_1px_2px_rgba(255,255,255,0.4),inset_2px_2px_4px_rgba(0,0,0,0.9)]"
            />
            <input
              type="email"
              placeholder="Email"
              className="w-full h-12 px-6 bg-white/5 border border-[#929599] rounded-[20px] 
              text-white text-base sm:text-lg md:text-2xl placeholder-white/30 
              focus:outline-none focus:border-white/40 focus:bg-[#202938] transition-all duration-300 
              shadow-[inset_1px_1px_2px_rgba(255,255,255,0.4),inset_2px_2px_4px_rgba(0,0,0,0.9)]"
            />
            <input
              type="text"
              placeholder="Contact no."
              className="w-full h-12 px-6 bg-white/5 border border-[#929599] rounded-[20px] 
              text-white text-base sm:text-lg md:text-2xl placeholder-white/30 
              focus:outline-none focus:border-white/40 focus:bg-[#202938] transition-all duration-300 
              shadow-[inset_1px_1px_2px_rgba(255,255,255,0.4),inset_2px_2px_4px_rgba(0,0,0,0.9)]"
            />
            <textarea
              placeholder="Message"
              rows="5"
              className="w-full px-6 py-4 bg-white/5 border border-[#929599] rounded-[20px] 
              text-white text-base sm:text-lg md:text-2xl placeholder-white/30 
              focus:outline-none focus:border-white/40 focus:bg-[#202938] transition-all duration-300 
              shadow-[inset_1px_1px_2px_rgba(255,255,255,0.4),inset_2px_2px_4px_rgba(0,0,0,0.9)] resize-none"
            />
            <div className="flex justify-center lg:justify-end">
              <button
                type="submit"
                className="w-[160px] sm:w-[180px] md:w-[200px] h-10 text-base sm:text-xl md:text-2xl 
                border border-white/20 hover:bg-white/20 text-white rounded-full transition-all"
              >
                Submit
              </button>
            </div>
          </form>
        </div>

        {/* Social Icons */}
        <div className="flex justify-center gap-6 pt-12 border-t border-white/20 flex-wrap">
          <a
            href="https://x.com/qilinai0310?s=21"
            target="_blank"
            rel="noopener noreferrer"
            className="w-12 h-12 rounded-full bg-white/10 border border-white/20 
            hover:border-white hover:bg-white/20 transition-all flex items-center justify-center"
          >
            <Twitter className="w-5 h-5 text-white" />
          </a>
          <a
            href="https://www.linkedin.com/in/qilinai/?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app"
            target="_blank"
            rel="noopener noreferrer"
            className="w-12 h-12 rounded-full bg-white/10 border border-white/20 
            hover:border-white hover:bg-white/20 transition-all flex items-center justify-center"
          >
            <Linkedin className="w-5 h-5 text-white" />
          </a>
          <a
            href="https://www.instagram.com/ai.qilin/?igsh=MTJ5ZHlibmhndGo4NA%3D%3D&utm_source=qr#"
            target="_blank"
            rel="noopener noreferrer"
            className="w-12 h-12 rounded-full bg-white/10 border border-white/20 
            hover:border-white hover:bg-white/20 transition-all flex items-center justify-center"
          >
            <Instagram className="w-5 h-5 text-white" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
