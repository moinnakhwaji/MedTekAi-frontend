import React, { useContext } from "react";
import chatboat from "../assets/Chatbot.gif";
import { Usercontext } from "../context/Usercontext";
import Sidebar from "../components/Sidebar";

const Chatboat = () => {
  const { open, setiSopen } = useContext(Usercontext);

  return (
    <div className="flex h-screen bg-[#1f1e24] text-[#fafafa] overflow-hidden">
      {/* Sidebar (Left) */}
      <div
        className={`fixed top-0 left-0 h-full transition-all duration-300 ${
          open ? "w-64" : "w-0"
        } overflow-hidden z-50`}
      >
        {open && <Sidebar />}
      </div>

      {/* Sidebar Toggle Button (Moves when Sidebar Opens) */}
      <button
        onClick={() => setiSopen(!open)}
        className={`fixed top-6 transition-all duration-300 z-50 ${
          open ? "left-[280px]" : "left-6"
        } p-3 bg-[#141414] rounded-full shadow-lg`}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="lucide lucide-panel-left text-[#fafafa]"
        >
          <rect width="18" height="18" x="3" y="3" rx="2"></rect>
          <path d="M9 3v18"></path>
        </svg>
      </button>

      {/* Middle Content (Moves when Sidebar Opens) */}
      <div
        className={`flex flex-col items-center justify-center transition-all duration-300 w-full ${
          open ? "ml-64" : "ml-0"
        }`}
      >
        <h1 className="text-3xl font-semibold mb-4">Welcome to ScrapIt Chatbot</h1>
        <p className="text-gray-400 mb-6 text-center">
          Chat with our AI-powered assistant to get help and guidance.
        </p>
        <div className="w-[400px] h-[500px] bg-[#141414] rounded-lg shadow-lg flex items-center justify-center">
          <p className="text-lg text-gray-300">Chat Interface Here</p>
        </div>
      </div>

      {/* Right Section (Image) */}
      <div className="w-[400px] flex items-center justify-center">
        <img src={chatboat} alt="Chatbot" className="w-full h-auto object-contain" />
      </div>
    </div>
  );
};

export default Chatboat;
