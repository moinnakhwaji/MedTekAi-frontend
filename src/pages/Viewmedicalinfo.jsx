import React, { useContext } from 'react'
import { Usercontext } from '../context/Usercontext';
import Sidebar from '../components/Sidebar';

const Viewmedicalinfo = () => {
     const { open, setiSopen } = useContext(Usercontext);
     
  return (
    <div>
         <div
        className={`fixed top-0 left-0 h-full transition-all duration-300 ${
          open ? "w-64" : "w-0"
        } overflow-hidden`}
      >
        {open && <Sidebar />}
      </div>

      {/* Main Content with Sidebar Offset */}
      <div
        className={`min-h-screen flex flex-col items-center justify-center p-6 transition-all duration-300 bg-[#0a0a0a] text-[#fafafa] ${
          open ? "ml-64" : "ml-0"
        }`}
      >
        {/* Sidebar Toggle Button */}
        <button
          onClick={() => setiSopen(!open)}
          className={`fixed top-6 left-6 p-3 bg-[#141414] rounded-lg flex items-center gap-2 shadow-lg hover:bg-gray-800 transition-all duration-300 ${
            open ? "ml-64" : "ml-0"
          }`}
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
        </div>
    </div>
  )
}

export default Viewmedicalinfo