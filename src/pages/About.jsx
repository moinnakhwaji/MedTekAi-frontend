import React from "react";
import Navbar from "../components/Navbar"

import moin1 from "../assets/moin1.jpg";
import moin2 from "../assets/moin2.jpg";
import faiz2 from "../assets/faiz2.jpg";
import faiz1 from "../assets/faiz1.jpg";

const About = () => {
  return (
    <>
   <Navbar/>
    <div className="bg-[#0a0a0a] text-white">
      {/* Hero Section */}
      <section className="py-24 relative">
        <div className="w-full max-w-7xl px-4 md:px-5 lg:px-5 mx-auto">
          <div className="grid lg:grid-cols-2 grid-cols-1 gap-12">
            {/* Left Side - Images */}
            <div className="grid sm:grid-cols-2 grid-cols-1 gap-6">
              <div className="pt-24 flex justify-start sm:justify-end">
                <img
                  className="w-64 h-94 rounded-xl object-cover"
                  src={moin2}
                  alt="Moin"
                />
              </div>
              <img
                className="w-64 h-64 rounded-xl object-cover"
                src={faiz2}
                alt="Faiz"
              />
            </div>
            {/* Right Side - Content */}
            <div className="flex flex-col gap-10">
              <div className="flex flex-col gap-8">
                <div className="flex flex-col gap-3">
                  <h2 className="text-4xl font-bold">Empowering Each Other to Succeed</h2>
                  <p className="text-gray-300 text-base">
                    The two people behind this project, Mohd Faiz Khan and Moin
                    Nakhwaji, bring over 2 years of experience each in
                    development. They have successfully created 30+ projects
                    together. Their team, "The DOMinator," thrives on
                    collaboration and innovation, ensuring the success of every
                    venture they undertake.
                  </p>
                </div>
                <div className="flex sm:gap-10 gap-5">
                  <div className="flex flex-col">
                    <h3 className="text-4xl font-bold">2</h3>
                    <h6 className="text-gray-300">Years of Experience (each)</h6>
                  </div>
                  <div className="flex flex-col">
                    <h4 className="text-4xl font-bold">30+</h4>
                    <h6 className="text-gray-300">Successful Projects</h6>
                  </div>
                  <div className="flex flex-col">
                    <h4 className="text-4xl font-bold">1</h4>
                    <h6 className="text-gray-300">Dedicated Team ("The DOMinator")</h6>
                  </div>
                </div>
              </div>
              <button className="px-4 py-2 bg-white text-black font-medium rounded-lg hover:bg-gray-300 transition-all duration-700">
                Read More
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Faiz & Moin Section */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto space-y-12">
          {/* Faiz Section */}
          <div className="flex flex-col md:flex-row items-center md:space-x-8">
            <div className="w-full md:w-2/3 mt-4 md:mt-0 bg-[#141414] text-white p-6 rounded-xl shadow-lg hover:scale-105 hover:shadow-2xl transition-all">
              <h3 className="text-3xl font-semibold">Mohd Faiz Khan</h3>
              <h1 className="text-2xl font-bold mt-2">Python Developer & AI/ML Engineer</h1>
              <p className="mt-4 text-gray-300">
                I am Mohd Faiz Khan, with 2 years of experience as a Full Stack Developer, mainly using Django and ReactJS. Over the past year, I've ventured into AI/ML and developed numerous models integrating them into real-world applications.
              </p>
              <div className="mt-6 flex space-x-4">
                <a href="https://github.com/MohdFaizKhan" target="_blank" className="text-gray-300 hover:text-white transition duration-300">
                  <i className="fab fa-github text-2xl"></i>
                </a>
                <a href="https://www.linkedin.com/in/mohd-faiz-khan" target="_blank" className="text-gray-300 hover:text-white transition duration-300">
                  <i className="fab fa-linkedin text-2xl"></i>
                </a>
              </div>
            </div>
            <div className="w-full md:w-1/3">
              <img className="w-full h-70 object-cover rounded-xl hover:scale-105 transition-transform" src={faiz1} alt="Mohd Faiz Khan" />
            </div>
          </div>

          {/* Moin Section */}
          <div className="flex flex-col md:flex-row items-center md:space-x-8">
            <div className="w-full md:w-1/3">
              <img className="w-full h-100 object-cover rounded-xl hover:scale-105 transition-transform" src={moin1} alt="Moin Nakhwaji" />
            </div>
            <div className="w-full md:w-2/3 mt-4 md:mt-0 bg-[#141414] text-white p-6 rounded-xl shadow-lg hover:scale-105 hover:shadow-2xl transition-all">
              <h3 className="text-3xl font-semibold">Moin Nakhwaji</h3>
              <h1 className="text-2xl font-bold mt-2">Full Stack Developer (MERN Stack)</h1>
              <p className="mt-4 text-gray-300">
                I am Moin Nakhwaji, a Full Stack Developer with 2 years of experience, primarily working with the MERN Stack. I have developed a strong proficiency in TailwindCSS and enjoy building scalable, efficient applications.
              </p>
              <div className="mt-6 flex space-x-4">
                <a href="https://github.com/MoinNakhwaji" target="_blank" className="text-gray-300 hover:text-white transition duration-300">
                  <i className="fab fa-github text-2xl"></i>
                </a>
                <a href="https://www.linkedin.com/in/moin-nakhwaji" target="_blank" className="text-gray-300 hover:text-white transition duration-300">
                  <i className="fab fa-linkedin text-2xl"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
    </>
  );
};

export default About;
