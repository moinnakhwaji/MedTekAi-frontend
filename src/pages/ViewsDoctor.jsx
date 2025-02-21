import React, { useEffect, useState } from "react";
import photoUrl from "../assets/doctor-removebg.png";
import axios from "axios";

const ViewsDoctor = () => {
  const [doctors, setDoctors] = useState([]);

  useEffect(() => {
    axios.get("/api/doctors") // Replace with your actual API endpoint
      .then((response) => setDoctors(response.data))
      .catch((error) => console.error("Error fetching doctors:", error));
  }, []);

  return (
    <div className="flex flex-wrap gap-4 justify-center">
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
