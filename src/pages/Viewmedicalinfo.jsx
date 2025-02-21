import React, { useContext, useEffect, useState } from "react";
import { Usercontext } from "../context/Usercontext";
import Sidebar from "../components/Sidebar";
import axios from "axios";
import { useAuth } from "../AuthContext";

const Viewmedicalinfo = () => {
  const { open, setiSopen } = useContext(Usercontext);
  const { accessToken } = useAuth();
  const [filteredProfiles, setFilteredProfiles] = useState([]);
  const loguser = JSON.parse(localStorage.getItem("user"));

  useEffect(() => {
    const getData = async () => {
      try {
        const response = await axios.get("/api/medical-info/", {
          headers: { Authorization: `Bearer ${accessToken}` },
        });

        const filtered = response.data.filter(
          (profile) => profile.patient === loguser?.id
        );
        setFilteredProfiles(filtered);
      } catch (error) {
        console.error("Error fetching medical info:", error);
      }
    };

    getData();
  }, [accessToken, loguser?.id]);

  return (
    <div className="bg-[#0a0a0a] text-[#fafafa] min-h-screen flex">
      {/* Sidebar */}
      <div
        className={`fixed top-0 left-0 h-full transition-all duration-300 ${
          open ? "w-64" : "w-0"
        } overflow-hidden z-50`}
      >
        {open && <Sidebar />}
      </div>

      {/* Sidebar Toggle Button (Fixed) */}
      <button
        onClick={() => setiSopen(!open)}
        className="fixed top-6 left-6 p-3 bg-[#141414] rounded-full shadow-lg hover:bg-green-600 hover:shadow-green-600 transition-all duration-300 z-50"
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

      {/* Main Content */}
      <div
        className={`flex flex-col items-center justify-center p-6 w-full transition-all duration-300 ${
          open ? "ml-64" : "ml-0"
        }`}
      >
        <h1 className="text-3xl font-bold text-green-500 text-center mb-8 tracking-wide">
          Medical Information
        </h1>

        {filteredProfiles.length > 0 ? (
          filteredProfiles.map((profile, index) => (
            <div
              key={index}
              className="p-6 bg-[#141414]/60 text-white rounded-xl shadow-xl mb-6 border border-green-500 transition-all duration-300 hover:border-green-600 hover:shadow-green-600 hover:scale-[1.02] backdrop-blur-lg"
            >
              <h2 className="text-xl font-semibold text-green-500 mb-3">
                Patient ID: {profile.patient}
              </h2>
              <div className="grid grid-cols-2 gap-4 text-gray-300">
                <p><span className="text-green-500">Alcohol:</span> {profile.alcohol || "Not Available"}</p>
                <p><span className="text-green-500">Smoking:</span> {profile.smoke || "Not Available"}</p>
                <p><span className="text-green-500">Blood Group:</span> {profile.blood_group || "Not Available"}</p>
                <p><span className="text-green-500">Height:</span> {profile.height || "Not Available"} cm</p>
                <p><span className="text-green-500">Weight:</span> {profile.weight || "Not Available"} kg</p>
                <p><span className="text-green-500">Allergies:</span> {profile.allergies || "None"}</p>
                <p><span className="text-green-500">Current Medications:</span> {profile.current_medications || "None"}</p>
                <p><span className="text-green-500">Medical Conditions:</span> {profile.existing_medical_conditions || "None"}</p>
                <p><span className="text-green-500">Genetic Disorders:</span> {profile.genetic_disorders || "None"}</p>
                <p><span className="text-green-500">History of Disease:</span> {profile.history_of_disease || "None"}</p>
                <p><span className="text-green-500">Past Surgeries:</span> {profile.past_surgeries || "None"}</p>
                <p className="col-span-2"><span className="text-green-500">Medical History:</span> {profile.medical_history || "None"}</p>
              </div>
            </div>
          ))
        ) : (
          <p className="text-center text-gray-400">No medical records found.</p>
        )}
      </div>
    </div>
  );
};

export default Viewmedicalinfo;
