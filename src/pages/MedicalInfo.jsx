import React, { useState } from "react";
// import doctor from "../assets/doctor-removebg.png"
import doctor from "../assets/robot.png";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../AuthContext";
import axios from "axios";


const MedicalInfo = () => {
  const { accessToken, user } = useAuth();
  const loggedInUser = JSON.parse(localStorage.getItem("userProfile"));
    const navigate = useNavigate();

  const [formData, setFormData] = useState({
    patient: loggedInUser?.id,  // ✅ Add the patient ID
    allergies: "",
    current_medications : "",
    familyHistory: "",
    smoke: "",
    alcohol: "",
    height: "",
    weight: "",
    bloodGroup: "",
    history_of_disease : "",
    medical_history:"",
    existing_medical_conditions: "",
    pastSurgeries: "",
    geneticDisorders: "",
  });

  const [error, setError] = useState("");
    const [linkerrors, setlinkErrors] = useState({});
    const [btnloading, btnsetLoading] = useState(false);

  
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    btnsetLoading(true);
        setError("");
    console.log("FORM DATA",formData); // Replace with API call
    console.log("Access Token:", accessToken);
        console.log("pATIENT ID:", loggedInUser?.id); // Check if user.id exists

        try {
          // 🔹 Step 1: Create the Profile First (Without Skills)
          const profilePayload = {
            patient : loggedInUser?.id,
            allergies: formData.allergies,
            current_medications: formData.current_medications,
            familyHistory: formData.familyHistory,
            smoke: formData.smoke,
            alcohol: formData.alcohol,
            height: formData.height,
            weight: formData.weight,
            bloodGroup: formData.bloodGroup,
            history_of_disease: formData.history_of_disease,
            medical_history: formData.medical_history,
            existing_medical_conditions: formData.existing_medical_conditions,
            pastSurgeries: formData.pastSurgeries,
            geneticDisorders: formData.geneticDisorders,
          };


          console.log("🔹 Creating Profile with Payload:", profilePayload);

          
          const profileResponse = await axios.post(
            "/api/medical-info/",
            profilePayload,
            { headers: { Authorization: `Bearer ${accessToken}` } }
            
        );

        const createdProfile = profileResponse.data;
            console.log("✅ Profile Created Successfully:", createdProfile);

        // Store profile in localStorage
        localStorage.setItem("userProfile", JSON.stringify(createdProfile));

        navigate(-1);

      } catch (err) {
        console.log("🔹 Error response:", err.response); // Log the error response for debugging
        console.log("er", err.message)
        setError("Profile creation failed");
    }

    btnsetLoading(false);
          
  }

  return (
    <div className="min-h-screen pt-8 px-4 flex flex-col lg:flex-row items-center justify-center bg-[#0a0a0a] text-white p-6">
      {/* Form Section */}
      <div className="w-full lg:w-1/2 p-6 bg-[#141414] shadow-lg rounded-lg flex flex-col h-screen">
        <h2 className="text-2xl font-bold mb-4 text-center">Medical Information</h2>
        <form onSubmit={handleSubmit} className="space-y-4 flex-grow overflow-auto">
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
            <label className="block text-gray-400 mb-1">
            existing_medical_conditions</label>
            <input
              type="text"
              name="existing_medical_conditions"
              value={formData.
                existing_medical_conditions}
              onChange={handleChange}
              className="w-full p-3 bg-[#0a0a0a] text-white border border-gray-700 rounded-lg"
            />
          </div>
          <div>
            <label className="block text-gray-400 mb-1">current_medications</label>
            <input
              type="text"
              name="current_medications"
              value={formData.current_medications}
              onChange={handleChange}
              className="w-full p-3 bg-[#0a0a0a] text-white border border-gray-700 rounded-lg"
            />
          </div>
          <div>
            <label className="block text-gray-400 mb-1">history_of_disease</label>
            <input
              type="text"
              name="history_of_disease"
              value={formData.history_of_disease}
              onChange={handleChange}
              className="w-full p-3 bg-[#0a0a0a] text-white border border-gray-700 rounded-lg"
            />
          </div>
          <div>
            <label className="block text-gray-400 mb-1">medical_history</label>
            <input
              type="text"
              name="medical_history"
              value={formData.medical_history}
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
      <div className="w-full lg:w-1/2  justify-center items-center h-screen hidden md:flex">
        <img
          src={doctor}
          alt="Medical Illustration"
          className="rounded-lg shadow-lg object-contain h-full w-full "
        />
      </div>
    </div>
  );
};

export default MedicalInfo;
