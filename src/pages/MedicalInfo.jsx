import React, { useState } from "react";
import doctor from "../assets/doctor-removebg.png";

const MedicalInfo = () => {
  const [formData, setFormData] = useState({
    allergies: "",
    familyHistory: "",
    smoke: "",
    alcohol: "",
    height: "",
    weight: "",
    bloodGroup: "",
    existingConditions: "",
    pastSurgeries: "",
    geneticDisorders: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="min-h-screen pt-8 px-4 flex flex-col lg:flex-row items-center justify-center bg-[#0a0a0a] text-white p-6">
      {/* Form Section */}
      <div className="w-full lg:w-1/2 p-6 bg-[#141414] shadow-lg rounded-lg flex flex-col h-screen">
        <h2 className="text-2xl font-bold mb-4 text-center">Medical Information</h2>
        <form className="space-y-4 flex-grow overflow-auto">
          <div>
            <label className="block text-gray-400 mb-1">Allergies</label>
            <input
              type="text"
              name="allergies"
              value={formData.allergies}
              onChange={handleChange}
              className="w-full p-3 bg-[#0a0a0a] text-white border border-gray-700 rounded-lg"
            />
          </div>

          <div>
            <label className="block text-gray-400 mb-1">Family Medical History</label>
            <input
              type="text"
              name="familyHistory"
              value={formData.familyHistory}
              onChange={handleChange}
              className="w-full p-3 bg-[#0a0a0a] text-white border border-gray-700 rounded-lg"
            />
          </div>

          {/* Smoke & Alcohol */}
          <div className="flex gap-4">
            <div className="w-1/2">
              <label className="block text-gray-400 mb-1">Do you smoke?</label>
              <div className="flex gap-4">
                <label className="flex items-center">
                  <input
                    type="radio"
                    name="smoke"
                    value="Yes"
                    checked={formData.smoke === "Yes"}
                    onChange={handleChange}
                    className="mr-2"
                  />
                  Yes
                </label>
                <label className="flex items-center">
                  <input
                    type="radio"
                    name="smoke"
                    value="No"
                    checked={formData.smoke === "No"}
                    onChange={handleChange}
                    className="mr-2"
                  />
                  No
                </label>
              </div>
            </div>

            <div className="w-1/2">
              <label className="block text-gray-400 mb-1">Do you consume alcohol?</label>
              <div className="flex gap-4">
                <label className="flex items-center">
                  <input
                    type="radio"
                    name="alcohol"
                    value="Yes"
                    checked={formData.alcohol === "Yes"}
                    onChange={handleChange}
                    className="mr-2"
                  />
                  Yes
                </label>
                <label className="flex items-center">
                  <input
                    type="radio"
                    name="alcohol"
                    value="No"
                    checked={formData.alcohol === "No"}
                    onChange={handleChange}
                    className="mr-2"
                  />
                  No
                </label>
              </div>
            </div>
          </div>

          {/* Height & Weight */}
          <div className="flex gap-4">
            <div className="w-1/2">
              <label className="block text-gray-400 mb-1">Height (cm)</label>
              <input
                type="number"
                name="height"
                value={formData.height}
                onChange={handleChange}
                className="w-full p-3 bg-[#0a0a0a] text-white border border-gray-700 rounded-lg"
              />
            </div>

            <div className="w-1/2">
              <label className="block text-gray-400 mb-1">Weight (kg)</label>
              <input
                type="number"
                name="weight"
                value={formData.weight}
                onChange={handleChange}
                className="w-full p-3 bg-[#0a0a0a] text-white border border-gray-700 rounded-lg"
              />
            </div>
          </div>

          {/* Blood Group */}
          <div>
            <label className="block text-gray-400 mb-1">Blood Group</label>
            <select
              name="bloodGroup"
              value={formData.bloodGroup}
              onChange={handleChange}
              className="w-full p-3 bg-[#0a0a0a] text-white border border-gray-700 rounded-lg"
            >
              <option value="">Select</option>
              <option value="A+">A+</option>
              <option value="A-">A-</option>
              <option value="B+">B+</option>
              <option value="B-">B-</option>
              <option value="O+">O+</option>
              <option value="O-">O-</option>
              <option value="AB+">AB+</option>
              <option value="AB-">AB-</option>
            </select>
          </div>

          {/* Existing Medical Conditions */}
          <div>
            <label className="block text-gray-400 mb-1">Existing Medical Conditions</label>
            <textarea
              name="existingConditions"
              value={formData.existingConditions}
              onChange={handleChange}
              className="w-full p-3 bg-[#0a0a0a] text-white border border-gray-700 rounded-lg"
              rows="3"
            ></textarea>
          </div>

          {/* Past Surgeries & Hospitalizations */}
          <div>
            <label className="block text-gray-400 mb-1">Past Surgeries & Hospitalizations</label>
            <textarea
              name="pastSurgeries"
              value={formData.pastSurgeries}
              onChange={handleChange}
              className="w-full p-3 bg-[#0a0a0a] text-white border border-gray-700 rounded-lg"
              rows="3"
            ></textarea>
          </div>

          {/* Genetic Disorders */}
          <div>
            <label className="block text-gray-400 mb-1">Genetic Disorders (Diabetes, Heart Disease, Cancer, etc.)</label>
            <textarea
              name="geneticDisorders"
              value={formData.geneticDisorders}
              onChange={handleChange}
              className="w-full p-3 bg-[#0a0a0a] text-white border border-gray-700 rounded-lg"
              rows="3"
            ></textarea>
          </div>

          <button className="w-full p-3 bg-[#050505] hover:bg-[#1b1a1b] rounded-lg text-white font-semibold">
            Submit
          </button>
        </form>
      </div>

      {/* Image Section */}
      <div className="w-full lg:w-1/2 flex justify-center items-center h-screen">
        <img
          src={doctor}
          alt="Medical Illustration"
          className="rounded-lg shadow-lg object-contain h-full w-full"
        />
      </div>
    </div>
  );
};

export default MedicalInfo;
