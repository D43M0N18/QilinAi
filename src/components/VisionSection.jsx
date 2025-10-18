import React from "react";
import visionImage from "../assets/vision.png"; // update path
import vision from "../assets/vision01.png";

const VisionSection = () => {
  return (
    <section className="relative min-h-[130vh] flex items-center justify-center overflow-hidden bg-[#ffffff] -mt-8">
      {/* Background Glow Image */}
      <img
              src={vision}
              alt="background glow"
              className="absolute  top-685/1000 z-20 left-492/1000 w-[102%] max-w-none -translate-x-1/2 -translate-y-[60%] opacity-100 object-cover pointer-events-none select-none"
            />
      
      <div className="absolute inset-0 flex items-center justify-center ">
        <img
          src={visionImage}
          alt="background glow"
          className="absolute top-940/1000 left-1/2 w-[100%] max-w-none -translate-x-1/2 -translate-y-[60%] opacity-100 object-cover pointer-events-none select-none"
        />
      </div>

      {/* Vision Text */}
      <div className="relative z-10 text-center px-6">
        <h2 className=" lg:text-[310px] font-light -tracking-[0.4rem] lowercase text-white mt-50">
          vision
        </h2>
        {/* <p className="text-white text-3xl">Lorem ipsum dolor sit amet consectetur adipisicing elit. At, laborum dolore assumenda fugit voluptates harum eum eaque ipsa deserunt. Quaerat asperiores qui ducimus? Officiis, cumque est officia commodi iste incidunt? Lorem ipsum, dolor sit amet consectetur adipisicing elit. Optio non at iusto vitae corporis veniam et necessitatibus, harum, tenetur sequi earum numquam. Tempora, omnis officiis. Corporis possimus vitae, architecto nulla beatae accusamus vel! Vero totam, dolore aliquid nam quia velit dicta, itaque voluptates maiores rem provident voluptatibus voluptas. Consequatur, corrupti.</p> */}
        
      </div>
    </section>
  );
};

export default VisionSection;
