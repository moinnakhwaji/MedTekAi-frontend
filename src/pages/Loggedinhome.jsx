import React, { useContext } from 'react';
import { Usercontext } from '../context/Usercontext';
import Sidebar from '../components/Sidebar';

const Loggedinhome = () => {
  const { open, setiSopen } = useContext(Usercontext);

  return (
    <div className="flex min-h-screen bg-[#0a0a0a] text-white transition-all">
      {/* Sidebar */}
      <div
        className={`fixed top-0 left-0 h-full transition-all duration-300 ${
          open ? "w-64" : "w-0"
        } overflow-hidden`}
      >
        {open && <Sidebar />}
      </div>

      {/* Main Content */}
      <div className={`flex-1 p-6 transition-all duration-300 ${open ? "ml-64" : "ml-0"}`}>
        {/* Sidebar Toggle Button */}
        <button
          onClick={() => setiSopen(!open)}
          className="p-3 bg-[#141414] rounded-lg flex items-center gap-2 shadow-lg hover:bg-gray-800 transition-all duration-300"
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

        {/* Content Section */}
        <div className="mt-6 p-6 bg-[#141414] rounded-lg shadow-lg text-center">
          <h2 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-green-600">
            Welcome to Your AI Medical Dashboard
          </h2>
          <p className="mt-2 text-gray-400">
            Explore various AI-powered medical services designed to assist you.
          </p>

          {/* How to Use Section */}
          <div className="mt-6 text-left">
            <h3 className="text-xl font-semibold text-green-400">How to Use the Website:</h3>
            <ul className="mt-3 space-y-3 text-gray-300">
              <li>
                <span className="font-bold text-green-400">🔍 AI Detection:</span> Upload medical images or symptoms to get AI-driven analysis and insights.
              </li>
              <li>
                <span className="font-bold text-green-400">💡 AI Medical Insights:</span> Get expert-level explanations and recommendations based on AI analysis.
              </li>
              <li>
                <span className="font-bold text-green-400">🩺 Find a Doctor:</span> Search for specialized doctors and book online consultations instantly.
              </li>
              <li>
                <span className="font-bold text-green-400">🤖 Medical Assistant:</span> Chat with our AI assistant for medical advice, health tips, and answers to your queries.
              </li>
              <li>
                <span className="font-bold text-green-400">📂 Medical Records:</span> Securely store and access your medical history, prescriptions, and reports.
              </li>
            </ul>
          </div>

          {/* Support Section */}
          <div className="mt-6">
            <h3 className="text-lg font-semibold text-green-400">Need Help?</h3>
            <p className="mt-2 text-gray-400">
              Contact our support team or check the FAQ section for assistance.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Loggedinhome;
