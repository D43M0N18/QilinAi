// ✅ Responsive version of your AboutSection
import React from "react";
import AboutImage from "../assets/about.png";
import GautamColor from "../assets/GautamSingh.jpeg";
import GautamBW from "../assets/GautamSingh.jpeg";
import RhythmColor from "../assets/RhythmMundra.jpeg";
import RhythmBW from "../assets/RhythmMundra.jpeg";
import DevanshuColor from "../assets/DevanshuRana.jpeg";
import DevanshuBW from "../assets/DevanshuRana.jpeg";
import About from "../assets/aboutus.png";

const AboutSection = () => {
  const teamMembers = [
    { id: 1, name: "Devanshu Rana", role: "Co-Founder", colorImg: DevanshuColor, bwImg: DevanshuBW },
    { id: 2, name: "Rhythm Mundra", role: "Co-Founder", colorImg: RhythmColor, bwImg: RhythmBW },
    { id: 3, name: "Gautam Singh", role: "Co-Founder", colorImg: GautamColor, bwImg: GautamBW },
  ];

  return (
    <section
      id="about"
      className="relative min-h-[180vh] py-20 px-4 sm:px-6 bg-[#02071A] text-white overflow-hidden"
    >
      {/* Background Glow Images */}
      <img
        src={AboutImage}
        alt="background glow"
        className="absolute top-1/2 left-1/2 w-[150%] sm:w-[100%] -translate-x-1/2 -translate-y-1/2 opacity-80 object-cover pointer-events-none select-none"
      />
      {/* <img
        src={About}
        alt="background glow"
        className="absolute top-[30%] left-1/2 w-[180%] sm:w-[100%] -translate-x-1/2 -translate-y-[50%] opacity-100 object-cover pointer-events-none select-none"
      /> */}
      <div className="absolute inset-0 bg-[#02071A]/50" />

      <div className="container mx-auto max-w-6xl relative z-10">
        {/* Heading */}
        <div className="text-center mb-16">
          <h2 className="whitespace-nowrap font-light lowercase text-white mb-4 leading-none
              text-[60px] sm:text-[100px] md:text-[160px] lg:text-[200px] xl:text-[260px] 2xl:text-[300px] -tracking-[0.4rem] -mx-17">
            about us
          </h2>
          <p className="text-white text-base sm:text-lg opacity-70">See, let's get to know</p>
          <div className="w-16 sm:w-24 h-1 bg-white mx-auto mt-4 rounded-full" />
        </div>

        {/* Team Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 sm:gap-10 justify-center items-center">
          {teamMembers.map((member) => (
            <div
              key={member.id}
              className="group relative rounded-3xl overflow-hidden w-[90%] sm:w-[350px] h-[380px] sm:h-[450px] bg-transparent border border-[#929599] transition-all duration-700 ease-in-out mx-auto cursor-pointer"
            >
              {/* Image Container */}
              <div className="absolute w-full h-full transition-all duration-700 group-hover:h-[60%] group-hover:w-[60%] group-hover:mx-17 group-hover:mt-4 group-hover:rounded-2xl group-hover:overflow-hidden">
                <img src={member.bwImg} alt={member.name} className="w-full h-full object-cover grayscale transition-all duration-500" />
                <div className="absolute inset-0 bg-[#557E9F] mix-blend-multiply opacity-70 transition-all duration-500 group-hover:opacity-0"></div>
                <img src={member.colorImg} alt={member.name} className="absolute inset-0 w-full h-full object-cover opacity-0 transition-all duration-500 group-hover:opacity-100" />
              </div>

              {/* Content */}
              <div className="absolute bottom-0 left-0 right-0 flex flex-col justify-center items-center text-center p-6 opacity-0 translate-y-10 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-700 h-[40%]">
                <h4 className="text-xl sm:text-2xl font-bold mb-2 text-white">{member.name}</h4>
                <p className="text-sm sm:text-base font-medium opacity-90 mb-3 text-white">{member.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
