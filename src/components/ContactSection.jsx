import React from "react";
import { Mail, Phone, Twitter, Linkedin, Instagram, Facebook } from "lucide-react";
import GroupBg from '../assets/about.png';
import ContactShape from '../assets/contact.png';
import Contact from '../assets/contactus.png';

const ContactSection = () => {
  return (
    <section
      id="contact"
      className="relative min-h-screen py-20 px-6 bg-[#02071A] overflow-hidden text-white"
    >
      <img
              src={Contact}
              alt="background glow"
              className="absolute top-315/1000 z-20 left-503/1000 w-[102%] max-w-none -translate-x-1/2 -translate-y-[60%] opacity-100 object-cover pointer-events-none select-none"
            />
      
      {/* Decorative Background Images */}
      <img src={ContactShape} className="absolute left-0 top-10 w-[45%] opacity-30 pointer-events-none" />
      <img src={GroupBg} className="absolute right-[-10%] top-[20%] w-[60vw] opacity-30 blur-md pointer-events-none" />

      <div className="absolute inset-0 z-0 bg-gradient-to-br from-[#02071add] via-[#02071acc] to-[#02071add] backdrop-blur-[1px]" />

      <div className="relative z-10 container mx-auto max-w-6xl">
        
        {/* HEADER - Keep same as asked */}
        <div className="text-center mb-16">
          <h2 className="text-[320px] font-light -tracking-[0.8rem] lowercase text-white mb-4">
            contact
          </h2>
        </div>

        {/* --- MODIFIED CONTENT TO MATCH 2ND IMAGE LAYOUT --- */}
        <div className="grid md:grid-cols-2  items-center mb-12 -ml-20">
          
          {/* LEFT SIDE TEXT + CONTACT INFO */}
          <div className="space-y-6 -mt-95">
            <p className="text-2xl md:text-[30px] font-light leading-snug mb-13 ">
              We’d love to connect with you! Whether you’re a brand ready to revolutionize your advertising or
              an investor curious about the future of AI-driven marketing
            </p>

            <div className="flex items-center gap-4">
              <Mail className="w-6 h-6" />
              <span className="text-xl">hello@qilin.co.in</span>
            </div>

          </div>

          {/* RIGHT SIDE FORM */}
          <form className="space-y-10 ml-20 -mt-25">
            <input
              type="text"
              placeholder="Name"
              className="w-full h-12 px-6 bg-white/3 border border-[#929599] rounded-[20px] text-white text-3xl placeholder-white/10 focus:outline-none focus:border-white/30 focus:bg-[#202938] transition-all duration-300 shadow-[inset_1px_1px_2px_rgba(255,255,255,0.4),inset_2px_2px_4px_rgba(0,0,0,0.9)]"
            />
            <input
              type="email"
              placeholder="Email"
              className="w-full h-12 px-6 bg-white/3 border border-[#929599] rounded-[20px] text-white text-3xl placeholder-white/10 focus:outline-none focus:border-white/30 focus:bg-[#202938] transition-all duration-300 shadow-[inset_1px_1px_2px_rgba(255,255,255,0.4),inset_2px_2px_4px_rgba(0,0,0,0.9)]"
            />
            <input
              type="text"
              placeholder="Contact no."
              className="w-full h-12 px-6 bg-white/3 border border-[#929599] rounded-[20px] text-white text-3xl placeholder-white/10 focus:outline-none focus:border-white/30 focus:bg-[#202938] transition-all duration-300 shadow-[inset_1px_1px_2px_rgba(255,255,255,0.4),inset_2px_2px_4px_rgba(0,0,0,0.9)]"
            />
            <textarea
              placeholder="Message"
              rows="5"
              className="w-full px-6 bg-white/3 border border-[#929599] rounded-[20px] text-white text-3xl placeholder-white/10 focus:outline-none focus:border-white/30 focus:bg-[#202938] transition-all duration-300 shadow-[inset_1px_1px_2px_rgba(255,255,255,0.4),inset_2px_2px_4px_rgba(0,0,0,0.9)]"
            />
            <button
              type="submit"
              className="w-[200px] h-10 text-2xl border border-white/20 hover:bg-white/20 text-white rounded-full transition-all ml-85"
            >
              Submit
            </button>
          </form>
        </div>

        {/* Social Icons */}
        <div className="flex justify-center gap-6 pt-12 border-t border-white/20">
          <a href="https://x.com/qilinai0310?s=21" target="_blank" className="w-12 h-12 rounded-full bg-white/10 border border-primary/30 hover:border-primary hover:bg-primary/20 transition-all flex items-center justify-center">
            <Twitter className="w-5 h-5 text-white" />
          </a>
          <a href="https://www.linkedin.com/in/qilinai/?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app" target="_blank" className="w-12 h-12 rounded-full bg-white/10 border border-primary/30 hover:border-primary hover:bg-primary/20 transition-all flex items-center justify-center">
            <Linkedin className="w-5 h-5 text-white" />
          </a>
          <a href="https://www.instagram.com/ai.qilin/?igsh=MTJ5ZHlibmhndGo4NA%3D%3D&utm_source=qr#" target="_blank" className="w-12 h-12 rounded-full bg-white/10 border border-primary/30 hover:border-primary hover:bg-primary/20 transition-all flex items-center justify-center">
            <Instagram className="w-5 h-5 text-white" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
