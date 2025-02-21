import React, { useContext } from 'react'
import Sidebar from '../components/Sidebar'
import MiddleContent from '../components/MiddleContent'
import { Usercontext } from '../context/Usercontext';

const Medicineinfo = () => {
  const { user, open, setiSopen } = useContext(Usercontext);

  return (
    <div className="flex bg-[#1f1e24] min-h-screen text-white">
      {/* Sidebar */}
      <div className={`transition-all duration-300 ${open ? "w-64" : "w-0"} overflow-hidden`}>
        {open && <Sidebar />}
      </div>

      {/* Main Content */}
      <div className="flex-1 p-4">
        {/* Sidebar Toggle Button */}
        <button
          onClick={() => setiSopen(!open)}
          className="mb-4 p-2 bg-gray-800 text-white rounded-lg flex items-center gap-2"
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
            className="lucide lucide-panel-left"
          >
            <rect width="18" height="18" x="3" y="3" rx="2"></rect>
            <path d="M9 3v18"></path>
          </svg>
          {/* {open ? "Close Sidebar" : "Open Sidebar"} */}
        </button>

        {/* Medicine Content */}
        <MiddleContent />
      </div>
    </div>
  )
}

export default Medicineinfo
