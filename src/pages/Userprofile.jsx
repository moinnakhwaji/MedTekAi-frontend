import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Usercontext } from "../context/Usercontext";
import Sidebar from "../components/Sidebar";

const UserProfile = () => {
  const loggedInUser = JSON.parse(localStorage.getItem("userProfile"));
  const { open, setiSopen } = useContext(Usercontext);
  console.log(loggedInUser);

  return (
    <>
      {/* Sidebar */}
      <div className={`fixed top-0 left-0 h-full transition-all duration-300 ${open ? "w-64" : "w-0"} overflow-hidden`}>
        {open && <Sidebar />}
      </div>

      {/* Button that moves when sidebar opens */}
      <button
        onClick={() => setiSopen(!open)}
        className={`absolute top-4 p-2 bg-gray-800 text-white rounded-lg flex items-center gap-2 z-50 
          transition-all duration-300 ${open ? "left-72" : "left-4"}`}
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
          className="lucide lucide-panel-left"
        >
          <rect width="18" height="18" x="3" y="3" rx="2"></rect>
          <path d="M9 3v18"></path>
        </svg>
      </button>

      {/* Main content that shifts when sidebar opens */}
      <div
        className={`bg-[#0a0a0a] text-[#fafafa] min-h-screen flex justify-center items-center p-4 transition-all duration-300 ${open ? "ml-64" : "ml-0"}`}
      >
        <div className="bg-[#141414] w-full max-w-3xl rounded-xl shadow-lg p-8">
          <h2 className="text-2xl font-semibold text-green-500 mb-4">User Information</h2>
          <div className="space-y-3">
            <p className="text-lg text-gray-300">
              <span className="font-semibold">Email: </span>
              {loggedInUser?.email || "example@mail.com"}
            </p>
            <p className="text-lg text-gray-300">
              <span className="font-semibold">Phone: </span>
              {loggedInUser?.contact_number || "9967633748"}
            </p>
            <p className="text-lg text-gray-300">
              <span className="font-semibold">First Name: </span>
              {loggedInUser?.firstname}
            </p>
            <p className="text-lg text-gray-300">
              <span className="font-semibold">Last Name: </span>
              {loggedInUser?.lastname}
            </p>
            <p className="text-lg text-gray-300">
              <span className="font-semibold">Age: </span>
              {loggedInUser?.age}
            </p>
            <p className="text-lg text-gray-300">
              <span className="font-semibold">Gender: </span>
              {loggedInUser?.gender}
            </p>
          </div>

          {/* Medical Info Button */}
          <div className="mt-6 flex justify-center">
            <Link
              to="/medicalinfo"
              className="bg-green-600 hover:bg-green-700 text-white px-6 py-2 rounded-lg transition-all duration-300"
            >
              view Medical Information
            </Link>
          </div>

          {/* Social Icons */}
          <div className="mt-6 flex space-x-4 text-green-500 text-2xl">
            <i className="fab fa-facebook cursor-pointer"></i>
            <i className="fab fa-twitter cursor-pointer"></i>
            <i className="fab fa-instagram cursor-pointer"></i>
          </div>
        </div>
      </div>
    </>
  );
};

export default UserProfile;
