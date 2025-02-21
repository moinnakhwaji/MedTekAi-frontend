import React from "react";
import photoUrl from "../assets/doctor-removebg.png"

const DoctorCard = ({ doctor }) => {
  return (
    <div className="flex items-center bg-[#1f1e24] text-gray-50 p-4 rounded-2xl shadow-lg w-full max-w-md">
      <img
        src={photoUrl}
        alt={""}
        className="w-24 h-24 rounded-full object-cover border-2 border-[#6556cd]"
      />
      <div className="ml-4">
        <h2 className="text-xl font-semibold">{"doctor.name"}</h2>
        <p className="text-sm text-gray-400">{"doctor.specialization"}</p>
        <p className="text-sm text-gray-400">{"doctor.experience"} years of experience</p>
      </div>
    </div>
  );
};

export { DoctorCard };
