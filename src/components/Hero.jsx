import React from "react";
import SplineScene from "./SplineScene";

const Hero = () => {
  return (
<div className="w-full h-screen flex flex-col items-center justify-center">
  {/* Container for all elements */}
  <div className="relative flex flex-col items-center text-center w-full max-w-4xl">
    
    {/* Heading - Positioned closer to the robot's head */}
          {/* Heading - Ensure it stays visible */}
          {/* <h1 className="text-4xl font-extrabold text-white leading-tight z-10">
          ⚕️ Transforming Healthcare with AI-Powered Innovation
        </h1> */}

    {/* Spline Element - Adjust margin to bring heading closer */}
    <div className="w-full h-[400px] mt-[-30px]">
      <SplineScene />
    </div>

    {/* Text Content - Block elements to stay below the Spline */}
    <p className="block text-xl text-gray-300 max-w-2xl mx-auto mt-6">
      Experience the future of medical solutions—where artificial intelligence meets precision,
      efficiency, and accessibility to redefine patient care.
    </p>
    <p className="block  text-lg text-gray-400 max-w-3xl mx-auto mt-6">
      🏥 Trusted by leading healthcare professionals <br />
      🔬 Cutting-edge AI diagnostics for faster results <br />
      🔒 Secure, reliable, and patient-focused technology
    </p>
  </div>
</div>


  );
};

export default Hero;
