import React, { useState } from "react";

const CreateUserProfile = () => {
  const [formData, setFormData] = useState({
    firstname: "",
    lastname: "",
    age: "",
    gender: "",
    number: "",
    email: "",
    dob: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="min-h-screen flex flex-col lg:flex-row items-center justify-center bg-[#0a0a0a] text-white p-6">
      {/* Form Section */}
      <div className="w-full lg:w-1/2 max-w-lg p-6 bg-[#141414] shadow-lg rounded-lg">
        <h2 className="text-2xl font-bold mb-4">Create Profile</h2>
        <form className="space-y-4">
          <div className="flex gap-4">
            <div className="w-1/2">
              <label className="block text-gray-400 mb-1">First Name</label>
              <input
                type="text"
                name="firstname"
                value={formData.firstname}
                onChange={handleChange}
                className="w-full p-3 bg-[#0a0a0a] text-white border border-gray-700 rounded-lg"
              />
            </div>

            <div className="w-1/2">
              <label className="block text-gray-400 mb-1">Last Name</label>
              <input
                type="text"
                name="lastname"
                value={formData.lastname}
                onChange={handleChange}
                className="w-full p-3 bg-[#0a0a0a] text-white border border-gray-700 rounded-lg"
              />
            </div>
          </div>

          <div className="flex gap-4">
            <div className="w-1/2">
              <label className="block text-gray-400 mb-1">Age</label>
              <input
                type="number"
                name="age"
                value={formData.age}
                onChange={handleChange}
                className="w-full p-3 bg-[#0a0a0a] text-white border border-gray-700 rounded-lg"
              />
            </div>

            <div className="w-1/2">
              <label className="block text-gray-400 mb-1">Gender</label>
              <select
                name="gender"
                value={formData.gender}
                onChange={handleChange}
                className="w-full p-3 bg-[#0a0a0a] text-white border border-gray-700 rounded-lg"
              >
                <option value="">Select</option>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
                <option value="Other">Other</option>
              </select>
            </div>
          </div>

          <div>
            <label className="block text-gray-400 mb-1">Phone Number</label>
            <input
              type="tel"
              name="number"
              value={formData.number}
              onChange={handleChange}
              className="w-full p-3 bg-[#0a0a0a] text-white border border-gray-700 rounded-lg"
            />
          </div>

          <div>
            <label className="block text-gray-400 mb-1">Email Address</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full p-3 bg-[#0a0a0a] text-white border border-gray-700 rounded-lg"
            />
          </div>

          <div>
            <label className="block text-gray-400 mb-1">Date of Birth</label>
            <input
              type="date"
              name="dob"
              value={formData.dob}
              onChange={handleChange}
              className="w-full p-3 bg-[#0a0a0a] text-white border border-gray-700 rounded-lg"
            />
          </div>

          <button className="w-full p-3 bg-[#050505] hover:bg-[#1b1a1b] rounded-lg text-white font-semibold">
            Submit
          </button>
        </form>
      </div>

      {/* Image Section */}
      <div className="w-full lg:w-2/5 hidden lg:flex justify-center items-center p-6">
        <img
          src="https://i.pinimg.com/474x/a6/d9/50/a6d950418a2880274ae8a9cd12bd0de6.jpg"
          alt="Profile Illustration"
          className="rounded-lg shadow-lg max-w-full h-auto sm:hidden md:block "
        />
      </div>
    </div>
  );
};

export default CreateUserProfile;
