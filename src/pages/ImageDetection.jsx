import React, { useContext, useState } from "react";
import { Usercontext } from "../context/Usercontext";
import Sidebar from "../components/Sidebar";

const ImageDetection = () => {
  const [selectedType, setSelectedType] = useState("xray");
  const [image, setImage] = useState(null);
  const { open, setiSopen } = useContext(Usercontext);

  const handleImageChange = (e) => {
    const { files } = e.target;
    if (files.length > 0) {
      setImage(URL.createObjectURL(files[0]));
    }
  };

  return (
    <>
      {/* Sidebar */}
      <div
        className={`fixed top-0 left-0 h-full transition-all duration-300 ${
          open ? "w-64" : "w-0"
        } overflow-hidden`}
      >
        {open && <Sidebar />}
      </div>

      {/* Main Content with Sidebar Offset */}
      <div
        className={`min-h-screen flex flex-col items-center justify-center p-6 transition-all duration-300 bg-[#0a0a0a] text-[#fafafa] ${
          open ? "ml-64" : "ml-0"
        }`}
      >
        {/* Sidebar Toggle Button */}
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

        <div className="w-full max-w-2xl p-8 bg-[#141414] shadow-lg rounded-lg">
          <h2 className="text-3xl font-bold mb-6 text-center text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-green-600">
            Image Detection
          </h2>

          {/* Image Type Selection */}
          <div className="mb-6">
            <label className="block text-gray-300 mb-3 text-lg">
              Select Image Type
            </label>
            <select
              value={selectedType}
              onChange={(e) => setSelectedType(e.target.value)}
              className="w-full p-3 bg-[#0a0a0a] text-[#fafafa] border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
            >
              <option value="xray">X-ray</option>
              <option value="mri">MRI</option>
            </select>
          </div>

          {/* Image Upload */}
          <div className="mb-6">
            <label className="block text-gray-300 mb-3 text-lg">
              Upload {selectedType.toUpperCase()}
            </label>
            <div className="border border-gray-700 rounded-lg p-6 bg-[#0a0a0a] flex flex-col items-center justify-center">
              {image ? (
                <img
                  src={image}
                  alt="Preview"
                  className="w-full h-60 object-cover rounded-md"
                />
              ) : (
                <div className="text-gray-500 flex flex-col items-center">
                  <span>No Image Selected</span>
                </div>
              )}
              <input
                type="file"
                accept="image/*"
                onChange={handleImageChange}
                className="mt-3 w-full text-sm text-gray-400 cursor-pointer file:hidden"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ImageDetection;
