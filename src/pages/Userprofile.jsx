import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Usercontext } from "../context/Usercontext";
import Sidebar from "../components/Sidebar";
import axios from "axios";
import { useAuth } from "../AuthContext";
import { FaUser, FaEnvelope, FaPhone, FaVenusMars, FaUserMd } from "react-icons/fa";
import { MdOutlineBloodtype, MdHeight, MdOutlineHistory } from "react-icons/md";
import { GiWeight, GiHealthCapsule, GiMedicines } from "react-icons/gi";

const UserProfile = () => {
  const loggedInUser = JSON.parse(localStorage.getItem("userProfile"));
  const { open, setiSopen } = useContext(Usercontext);
  const { accessToken } = useAuth();
  const [medicalInfo, setMedicalInfo] = useState(null);

  useEffect(() => {
    const fetchMedicalInfo = async () => {
      try {
        const response = await axios.get("/api/medical-info/", {
          headers: { Authorization: `Bearer ${accessToken}` },
        });

        const filtered = response.data.find(
          (profile) => profile.patient === loggedInUser?.id
        );
        setMedicalInfo(filtered || {});
      } catch (error) {
        console.error("Error fetching medical info:", error);
      }
    };

    if (loggedInUser?.id) fetchMedicalInfo();
  }, [accessToken, loggedInUser?.id]);

  return (
    <>
      {/* Sidebar */}
      <div className={`fixed top-0 left-0 h-full transition-all duration-300 ${open ? "w-64" : "w-0"} overflow-hidden`}>
        {open && <Sidebar />}
      </div>

      {/* Main content */}
      <div className={`bg-[#0a0a0a] text-[#fafafa] min-h-screen flex justify-center items-center p-4 transition-all duration-300 ${open ? "ml-64" : "ml-0"}`}>
        <div className="bg-[#141414] w-full max-w-3xl rounded-xl shadow-lg p-8 flex flex-col items-center text-center">
          {/* Profile Picture */}

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
          <div className="mb-4 w-28 h-28 rounded-full bg-gray-800 flex items-center justify-center shadow-lg">
            <FaUser className="text-5xl text-green-500" />
          </div>

          <h2 className="text-2xl font-semibold text-green-500 mb-4">User Information</h2>
          <div className="space-y-3 w-full text-left">
            <p className="text-lg text-gray-300 flex items-center gap-2"><FaEnvelope /> <span className="font-semibold">Email:</span> {loggedInUser?.email || "example@mail.com"}</p>
            <p className="text-lg text-gray-300 flex items-center gap-2"><FaPhone /> <span className="font-semibold">Phone:</span> {loggedInUser?.contact_number || "9967633748"}</p>
            <p className="text-lg text-gray-300 flex items-center gap-2"><FaUserMd /> <span className="font-semibold">First Name:</span> {loggedInUser?.firstname}</p>
            <p className="text-lg text-gray-300 flex items-center gap-2"><FaUserMd /> <span className="font-semibold">Last Name:</span> {loggedInUser?.lastname}</p>
            <p className="text-lg text-gray-300 flex items-center gap-2"><FaVenusMars /> <span className="font-semibold">Gender:</span> {loggedInUser?.gender}</p>
          </div>

          {/* Medical Information */}
          <h2 className="text-2xl font-semibold text-green-500 mt-6 mb-4">Medical Information</h2>
          {medicalInfo ? (
            <div className="space-y-3 w-full text-left text-gray-300">
              <p className="flex items-center gap-2"><MdOutlineBloodtype /> <span className="text-green-500">Blood Group:</span> {medicalInfo.blood_group || "Not Available"}</p>
              <p className="flex items-center gap-2"><MdHeight /> <span className="text-green-500">Height:</span> {medicalInfo.height || "Not Available"} cm</p>
              <p className="flex items-center gap-2"><GiWeight /> <span className="text-green-500">Weight:</span> {medicalInfo.weight || "Not Available"} kg</p>
              <p className="flex items-center gap-2"><GiMedicines /> <span className="text-green-500">Current Medications:</span> {medicalInfo.current_medications || "None"}</p>
              <p className="flex items-center gap-2"><GiHealthCapsule /> <span className="text-green-500">Medical Conditions:</span> {medicalInfo.existing_medical_conditions || "None"}</p>
              <p className="flex items-center gap-2"><MdOutlineHistory /> <span className="text-green-500">History of Disease:</span> {medicalInfo.history_of_disease || "None"}</p>
            </div>
          ) : (
            <p className="text-gray-400">No medical records found.</p>
          )}
        </div>
      </div>
    </>
  );
};

export default UserProfile;
