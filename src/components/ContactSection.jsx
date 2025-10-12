import React from "react";
import { Mail, Phone, Twitter, Linkedin, Instagram, Facebook } from "lucide-react";
// Import your uploaded images
import GroupBg from '../assets/about.png';
import ContactShape from '../assets/contact.png';

const ContactSection = () => {
  return (
    <section
      id="contact"
      className="relative min-h-screen py-20 px-6 bg-[#02071A] overflow-hidden text-white"
    >
      {/* Decorative Background Images */}
      <img
        src={ContactShape}
        alt=""
        aria-hidden="true"
        className="pointer-events-none select-none absolute z-0 opacity-40"
        style={{
          left: "-5%",
          top: "10%",
          width: "50%",
          minWidth: 280,
          maxWidth: 450,
          height: "auto",
        }}
      />
      <img
        src={GroupBg}
        alt=""
        aria-hidden="true"
        className="pointer-events-none select-none absolute z-0"
        style={{
          right: "-15%",
          top: "15%",
          width: "65vw",
          height: "auto",
          opacity: 0.35,
          filter: "blur(8px)"
        }}
      />
      
      <img
        src={ContactShape}
        alt=""
        aria-hidden="true"
        className="pointer-events-none select-none absolute z-0"
        style={{
          right: "5%",
          bottom: "10%",
          width: "30%",
          maxWidth: 300,
          height: "auto",
          opacity: 0.25,
          transform: "rotate(180deg)",
        }}
      />

      <div className="absolute inset-0 z-0 bg-gradient-to-br from-[#02071add] via-[#02071acc] to-[#02071add] backdrop-blur-[1px]" />

      <div className="relative z-10 container mx-auto max-w-4xl">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-6xl md:text-8xl font-bold lowercase mb-8 drop-shadow-lg">
            contact
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto drop-shadow-sm">
            Want to get in touch? Just fill the form below, we'd love to hear from you and get back to you within a few hours.
          </p>
        </div>

        {/* Main grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {/* Contact Info */}
          <div className="space-y-6">
            {/* Email */}
            <div className="flex items-center gap-4 backdrop-blur-sm bg-white/5 p-4 rounded-lg border border-white/10">
              <div className="w-12 h-12 rounded-full bg-primary/30 flex items-center justify-center backdrop-blur-sm">
                <Mail className="w-5 h-5 text-primary" />
              </div>
              <div>
                <div className="text-sm text-muted-foreground">Email</div>
                <div className="font-medium">info@qilinai.com</div>
              </div>
            </div>
            {/* Phone */}
            <div className="flex items-center gap-4 backdrop-blur-sm bg-white/5 p-4 rounded-lg border border-white/10">
              <div className="w-12 h-12 rounded-full bg-primary/30 flex items-center justify-center backdrop-blur-sm">
                <Phone className="w-5 h-5 text-primary" />
              </div>
              <div>
                <div className="text-sm text-muted-foreground">Phone</div>
                <div className="font-medium">+1 (555) 123-4567</div>
              </div>
            </div>
          </div>
          
          {/* Contact Form */}
          <form className="space-y-4 backdrop-blur-sm bg-white/5 p-6 rounded-lg border border-white/10">
            <input
              type="text"
              placeholder="Your Name"
              className="w-full p-3 rounded-md bg-white/10 border border-primary/30 focus:border-primary focus:bg-white/15 outline-none transition-all backdrop-blur-sm"
            />
            <input
              type="email"
              placeholder="Your Email"
              className="w-full p-3 rounded-md bg-white/10 border border-primary/30 focus:border-primary focus:bg-white/15 outline-none transition-all backdrop-blur-sm"
            />
            <textarea
              placeholder="Your Message"
              rows="4"
              className="w-full p-3 rounded-md bg-white/10 border border-primary/30 focus:border-primary focus:bg-white/15 outline-none resize-none transition-all backdrop-blur-sm"
            />
            <button
              type="submit"
              className="w-full bg-primary hover:bg-primary/90 text-white py-3 rounded-md transition-all shadow-lg hover:shadow-xl backdrop-blur-sm"
            >
              Send Message
            </button>
          </form>
        </div>

        {/* Social Icons with actual Qilin AI links */}
        <div className="flex justify-center gap-6 pt-12 border-t border-white/20">
          {/* Twitter/X */}
          <a
            href="https://twitter.com/qilinai"
            target="_blank"
            rel="noopener noreferrer"
            className="w-12 h-12 rounded-full bg-white/10 border border-primary/30 hover:border-primary hover:bg-primary/20 transition-all flex items-center justify-center backdrop-blur-sm group"
            aria-label="Follow Qilin AI on Twitter"
          >
            <Twitter className="w-5 h-5 text-white group-hover:text-primary transition-colors" />
          </a>

          {/* LinkedIn */}
          <a
            href="https://linkedin.com/company/qilin-ai"
            target="_blank"
            rel="noopener noreferrer"
            className="w-12 h-12 rounded-full bg-white/10 border border-primary/30 hover:border-primary hover:bg-primary/20 transition-all flex items-center justify-center backdrop-blur-sm group"
            aria-label="Follow Qilin AI on LinkedIn"
          >
            <Linkedin className="w-5 h-5 text-white group-hover:text-primary transition-colors" />
          </a>

          {/* Instagram */}
          <a
            href="https://www.instagram.com/qilin.ai.solutions"
            target="_blank"
            rel="noopener noreferrer"
            className="w-12 h-12 rounded-full bg-white/10 border border-primary/30 hover:border-primary hover:bg-primary/20 transition-all flex items-center justify-center backdrop-blur-sm group"
            aria-label="Follow Qilin AI on Instagram"
          >
            <Instagram className="w-5 h-5 text-white group-hover:text-primary transition-colors" />
          </a>

          {/* Facebook */}
          
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
