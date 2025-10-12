import React from "react";
import AboutImage from "../assets/about.png";
import GautamColor from "../assets/GautamSingh.jpeg"; 
import GautamBW from "../assets/GautamSingh.jpeg"; 
import RhythmColor from "../assets/RhythmMundra.jpeg";
import RhythmBW from "../assets/RhythmMundra.jpeg";
import DevanshuColor from "../assets/DevanshuRana.jpeg";
import DevanshuBW from "../assets/DevanshuRana.jpeg";

const AboutSection = () => {
  const teamMembers = [
    {
      id: 1,
      name: "Devanshu Rana",
      role: "Co-Founder",
      
      colorImg: DevanshuColor,
      bwImg: DevanshuBW,
    },
    {
      id: 2,
      name: "Rhythm Mundra",
      role: "Co-Founder",
      
      colorImg: RhythmColor,
      bwImg: RhythmBW,
    },
    {
      id: 3,
      name: "Gautam Singh",
      role: "Co-Founder",
      colorImg: GautamColor,
      bwImg: GautamBW,
    },
  ];

  return (
    <section
      id="about"
      className="relative min-h-[110vh] py-20 px-6 bg-[#02071A] text-white overflow-hidden"
    >
      <img
        src={AboutImage}
        alt="background glow"
        className="absolute top-7/10 left-1/2 w-[80%] max-w-none -translate-x-1/2 -translate-y-[60%] opacity-20 object-cover pointer-events-none select-none"
      />
      <div className="absolute inset-0 bg-[#02071A]/80" />

      <div className="container mx-auto max-w-6xl relative z-10">
        {/* Heading */}
        <div className="text-center mb-16">
          <h2 className="text-6xl md:text-8xl font-bold lowercase mb-4 text-white">
            about us
          </h2>
          <p className="text-white text-lg opacity-70">See, let's get to know</p>
          <div className="w-24 h-1 bg-white mx-auto mt-4 rounded-full" />
        </div>

        {/* Team Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 justify-center items-center">
          {teamMembers.map((member) => (
            <div
              key={member.id}
              className="group relative rounded-3xl overflow-hidden w-[350px] h-[450px] bg-transparent border border-[#929599] transition-all duration-700 ease-in-out mx-auto cursor-pointer"
            >
              {/* Image Container */}
              <div className="absolute w-full h-full transition-all duration-700 group-hover:h-[60%] group-hover:w-[60%]  group-hover:mx-17 group-hover:mt-4 group-hover:rounded-2xl group-hover:overflow-hidden">
                {/* Black & White image (initial) */}
                <img
                  src={member.bwImg}
                  alt={member.name}
                  className="absolute inset-0 w-full h-full object-cover grayscale opacity-100 transition-all duration-500 group-hover:opacity-0"
                />

                {/* Colored image (on hover) */}
                <img
                  src={member.colorImg}
                  alt={member.name}
                  className="absolute inset-0 w-full h-full object-cover opacity-0 transition-all duration-500 group-hover:opacity-100"
                />
              </div>

              {/* Content (hidden initially, visible on hover) */}
              <div className="absolute bottom-0 left-0 right-0 flex flex-col justify-center items-center text-center p-6 opacity-0 translate-y-10 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-700 h-[40%]">
                <div className="bg-transparent w-full">
                  <h4 className="text-2xl font-bold mb-2 text-white">{member.name}</h4>
                  <p className="text-base font-medium opacity-90 mb-3 text-white">
                    {member.role}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
