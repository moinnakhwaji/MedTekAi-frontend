import React, { useContext, useEffect, useState } from "react";
import photoUrl from "../assets/doctor-removebg.png";
import axios from "axios";
import Sidebar from "../components/Sidebar";
import { Usercontext } from "../context/Usercontext";

const ViewsDoctor = () => {
  const [doctors, setDoctors] = useState([]);
 const { open, setiSopen } = useContext(Usercontext);
  useEffect(() => {
  
    const fetchDoc  =  async ()=>{
      try {
        const response = await  axios.get("/api/doctors") // Replace with your actual API endpoint
        if(response){
          setDoctors(response.data);
        }
        console.log(response)
  
        
      } catch (error) {
        console.error("Error fetching doctors:", error);
        console.log(error.message)
        
      }
    }
    fetchDoc();
   
     
      
      
  }, []);

  return (
    <div className="flex flex-wrap gap-4 justify-center">
      {/* Sidebar */}
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
      {doctors.map((doctor) => (
        <div
          key={doctor.id}
          className="flex items-center bg-[#1f1e24] text-gray-50 p-4 rounded-2xl shadow-lg w-full max-w-md"
        >
          <img
            src={photoUrl}
            alt="Doctor"
            className="w-24 h-24 rounded-full object-cover border-2 border-[#6556cd]"
          />
          <div className="ml-4">
            <h2 className="text-xl font-semibold">{doctor.name}</h2>
            <p className="text-sm text-gray-400">{doctor.specialization}</p>
            <p className="text-sm text-gray-400">{doctor.experience} years of experience</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ViewsDoctor;
