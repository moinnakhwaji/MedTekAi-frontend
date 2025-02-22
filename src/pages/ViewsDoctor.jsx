import React, { useContext, useEffect, useState } from "react";
import axios from "axios";
import Sidebar from "../components/Sidebar";
import { Usercontext } from "../context/Usercontext";
import photoUrl from "../assets/doctor-removebg.png";


const ViewsDoctor = () => {
  const [doctors, setDoctors] = useState([]);
  const { open, setiSopen } = useContext(Usercontext);

  useEffect(() => {
    const fetchDoc = async () => {
      try {
        const response = await axios.get("/api/doctors"); // Replace with your actual API endpoint
        if (response) {
          setDoctors(response.data);
        }
      } catch (error) {
        console.error("Error fetching doctors:", error);
      }
    };
    fetchDoc();
  }, []);

  return (
    <div className="flex flex-wrap gap-6 justify-center p-6 bg-[#0a0a0a] min-h-screen">
      
      {/* Sidebar */}
      <div
        className={`fixed top-0 left-0 h-full transition-all duration-300 ${open ? "w-64" : "w-0"} overflow-hidden`}
      >
        {open && <Sidebar />}
      </div>

      {/* Sidebar Toggle Button */}
      <button
        onClick={() => setiSopen(!open)}
        className={`fixed top-6 z-10 transition-all duration-300 p-3 rounded-lg flex items-center gap-2 shadow-lg hover:bg-gray-800 ${
          open ? "left-[250px]" : "left-6"
        }`}
        style={{
          marginLeft: open ? '20px' : '10px', // Adjust left margin depending on sidebar state
          marginRight: '10px', // Right margin to avoid collision
        }}
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

     

      {/* Doctor Cards */}
      <div
        className={`grid ${open ? "lg:ml-64" : "ml-0"} grid-cols-1 ml-2 sm:grid-cols-2 md:grid-cols-3 gap-6 w-full max-w-6xl`}
      >
        {doctors.map((doctor) => (
          <div
            key={doctor.id}
            className=" h-[40%] text-gray-50 bg-[#2cb5a0] overflow-hidden p-6 rounded-2xl shadow-xl w-full max-w-sm transition-transform duration-300 hover:scale-105 hover:shadow-2xl flex flex-col"
          >
            <div className="flex items-center gap-4">
              <img
                src={photoUrl}
                alt="Doctor"
                className="w-16 h-16 sm:w-36 sm:h-36 rounded-full object-cover border-2 border-[#6556cd]"
              />
              <div>
                <h2 className="text-lg sm:text-2xl font-semibold text-white">
                  {doctor.firstname} {doctor.lastname}
                </h2>
                <p className="text-xs sm:text-sm text-white">
                  Available Days: {doctor.available_days}
                </p>
                <p className="text-xs sm:text-sm text-white">
                  Contact: {doctor.contact_number}
                </p>
                <p className="text-xs sm:text-sm text-white">
                  Email: {doctor.email}
                </p>
              </div>
            </div>
          </div>
        ))}
        
     
      </div>
    </div>
  );
};

export default ViewsDoctor;
