import React, { useState } from "react";


const Createdocprofile = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    experience: "",
    specialization: "",
    certification: null,
    license: null,
    email: "",
    phone: "",
    clinicAddress: "",
    verified: false, // Hidden field, only for admin
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFileChange = (e) => {
    const { name, files } = e.target;
    setFormData({ ...formData, [name]: files[0] });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData); // Replace with API call
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#0a0a0a] text-white p-6">
      <div className="w-full max-w-lg bg-[#141414] p-6 rounded-lg shadow-lg">
        <h2 className="text-2xl font-bold text-center mb-4">Doctor Profile</h2>
        <form className="space-y-4" onSubmit={handleSubmit}>
          {/* Name Fields */}
          <div className="flex gap-4">
            <div className="w-1/2">
              <label className="block text-gray-400">First Name</label>
              <input
                type="text"
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
                className="w-full p-3 bg-[#0a0a0a] border border-gray-700 rounded-lg"
              />
            </div>
            <div className="w-1/2">
              <label className="block text-gray-400">Last Name</label>
              <input
                type="text"
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
                className="w-full p-3 bg-[#0a0a0a] border border-gray-700 rounded-lg"
              />
            </div>
          </div>

          {/* Experience & Specialization */}
          <div className="flex gap-4">
            <div className="w-1/2">
              <label className="block text-gray-400">Experience (Years)</label>
              <input
                type="number"
                name="experience"
                value={formData.experience}
                onChange={handleChange}
                className="w-full p-3 bg-[#0a0a0a] border border-gray-700 rounded-lg"
              />
            </div>
            <div className="w-1/2">
              <label className="block text-gray-400">Specialization</label>
              <input
                type="text"
                name="specialization"
                value={formData.specialization}
                onChange={handleChange}
                className="w-full p-3 bg-[#0a0a0a] border border-gray-700 rounded-lg"
              />
            </div>
          </div>

          {/* Email & Phone */}
          <div>
            <label className="block text-gray-400">Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full p-3 bg-[#0a0a0a] border border-gray-700 rounded-lg"
            />
          </div>
          <div>
            <label className="block text-gray-400">Phone Number</label>
            <input
              type="text"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              className="w-full p-3 bg-[#0a0a0a] border border-gray-700 rounded-lg"
            />
          </div>

          {/* Clinic Address */}
          <div>
            <label className="block text-gray-400">Clinic Address</label>
            <textarea
              name="clinicAddress"
              value={formData.clinicAddress}
              onChange={handleChange}
              className="w-full p-3 bg-[#0a0a0a] border border-gray-700 rounded-lg"
              rows="3"
            ></textarea>
          </div>

          {/* Certification & License Upload */}
          <div>
            <label className="block text-gray-400">Certification (Pdf)</label>
            <input
              type="file"
              name="certification"
              onChange={handleFileChange}
              className="w-full p-2 bg-[#0a0a0a] border border-gray-700 rounded-lg text-gray-400"
              accept="image/*"
            />
          </div>
          <div>
            <label className="block text-gray-400">License (Pdf)</label>
            <input
              type="file"
              name="license"
              onChange={handleFileChange}
              className="w-full p-2 bg-[#0a0a0a] border border-gray-700 rounded-lg text-gray-400"
              accept="image/*"
            />
          </div>

          {/* Hidden Verified Field (Admin Only) */}
          {/* <input type="hidden" name="verified" value={formData.verified} /> */}

          {/* Submit Button */}
         
          <button
            type="submit"
            className="w-full p-3 bg-[#050505] hover:bg-[#1b1a1b] rounded-lg text-white font-semibold"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default Createdocprofile;
