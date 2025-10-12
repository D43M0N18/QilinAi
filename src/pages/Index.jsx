import React from "react";
import Header from "../components/Header";
import HeroSection from "../components/HeroSection";
import VisionSection from "../components/VisionSection";
import AboutSection from "../components/AboutSection";
import ProductSection from "../components/ProductSection";
import ContactSection from "../components/ContactSection";

const Index = () => {
  return (
    <div className="bg-background text-foreground">
      <Header />
      <main>
        <HeroSection />
        <VisionSection />
        <AboutSection />
        <ProductSection />
        <ContactSection />
      </main>
    </div>
  );
};

export default Index;
