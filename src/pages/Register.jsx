import { useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";

const Register = () => {
  const [formData, setFormData] = useState({
    role: "user",
    username: "",
    password: "",
    confirmPassword: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.password !== formData.confirmPassword) {
      alert("Passwords do not match!");
      return;
    }
    console.log(formData);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#0a0a0a] text-white">
      <div className="w-full max-w-md bg-[#141414] p-8 rounded-lg shadow-lg">
        <h2 className="text-2xl font-semibold text-center mb-6">Register</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <select
            name="role"
            value={formData.role}
            onChange={handleChange}
            className="w-full p-3 bg-[#0a0a0a] text-white rounded-lg focus:outline-none"
          >
            <option value="user">User</option>
            <option value="doctor">Doctor</option>
          </select>
          <input
            type="text"
            name="username"
            placeholder="Username"
            value={formData.username}
            onChange={handleChange}
            className="w-full p-3 bg-[#0a0a0a] text-white rounded-lg focus:outline-none"
            required
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            value={formData.password}
            onChange={handleChange}
            className="w-full p-3 bg-[#0a0a0a] text-white rounded-lg focus:outline-none"
            required
          />
          <input
            type="password"
            name="confirmPassword"
            placeholder="Confirm Password"
            value={formData.confirmPassword}
            onChange={handleChange}
            className="w-full p-3 bg-[#0a0a0a] text-white rounded-lg focus:outline-none"
            required
          />
          <button
            type="submit"
            className="w-full p-3 bg-white text-black font-semibold rounded-lg hover:bg-gray-300 transition"
          >
            Register
          </button>
        </form>
        <p className="mt-4 text-center text-sm">
          Already have an account? 
          <Link to="/login" className="text-green-400 hover:underline"> Login</Link>
        </p>
      </div>
    </div>
  );
};

export default Register;
