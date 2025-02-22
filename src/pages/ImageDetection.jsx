import React, { useState, useContext } from "react";
import axios from "axios";
import { Usercontext } from "../context/Usercontext";
import Sidebar from "../components/Sidebar";
import { GoogleGenerativeAI } from "@google/generative-ai";

const genAI = new GoogleGenerativeAI("AIzaSyAXXleKQS6ljOgXLSIoVxV1RuMjrPNmjDo");

const ImageDetection = () => {
  const [selectedType, setSelectedType] = useState("X-Ray");
  const [image, setImage] = useState(null);
  const [preview, setPreview] = useState(null);
  const [processedImage, setProcessedImage] = useState(null);
  const [tumorType, setTumorType] = useState(null);
  const [tumorInfo, setTumorInfo] = useState(null);
  const { open, setiSopen } = useContext(Usercontext);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setImage(file);
      setPreview(URL.createObjectURL(file));
    }
  };

  const handleUpload = async () => {
    if (!image) return alert("Please select an image");

    const formData = new FormData();
    formData.append("image", image);
    formData.append("image_type", selectedType);
    formData.append("patient_id", "1");

    try {
      const response = await axios.post(
        "http://127.0.0.1:8000/api/medical-images/detect_image/",
        formData,
        { headers: { "Content-Type": "multipart/form-data" } }
      );

      console.log("HANDLE UPLOAD RESPONSE:", response.data);
      setProcessedImage(response.data.processed_image);
      setTumorType(response.data.tumor_type);

      if (response.data.tumor_type) {
        fetchTumorDetails(response.data.tumor_type);
      }
    } catch (error) {
      console.error("Error uploading image", error);
    }
  };

  const fetchTumorDetails = async (tumorType) => {
    try {
      const model = genAI.getGenerativeModel({ model: "gemini-pro" });
      const prompt = `Give me a brief explanation about the medical condition: ${tumorType}. Include causes, symptoms, and treatment.`;

      const result = await model.generateContent(prompt);
      const response = await result.response;
      let text = response.text();

      // Format the response to remove **bold** markdown formatting
      text = text.replace(/\*\*(.*?)\*\*/g, "<b>$1</b>");

      setTumorInfo(text);
    } catch (error) {
      console.error("Error fetching tumor details", error);
    }
  };

  return (
    <>
      <div className={`fixed top-0 left-0 h-full transition-all duration-300 ${open ? "w-64" : "w-0"} overflow-hidden`}>
        {open && <Sidebar />}
      </div>

      <div className={`min-h-screen flex flex-col items-center justify-center p-6 transition-all duration-300 bg-[#0a0a0a] text-[#fafafa] ${open ? "ml-64" : "ml-0"}`}>
        <button
          onClick={() => setiSopen(!open)}
          className={`fixed top-6 left-6 p-3 bg-[#141414] rounded-lg flex items-center gap-2 shadow-lg hover:bg-gray-800 transition-all duration-300 ${open ? "ml-64" : "ml-0"}`}
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
          <h2 className="text-3xl font-bold text-center text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-green-600">
            Image Detection
          </h2>

          <div className="mb-6">
            <label className="block text-gray-300 mb-3 text-lg">Select Image Type</label>
            <select value={selectedType} onChange={(e) => setSelectedType(e.target.value)} className="w-full p-3 bg-[#0a0a0a] text-[#fafafa] border border-gray-700 rounded-lg">
              <option value="X-Ray">X-ray</option>
              <option value="MRI">MRI</option>
            </select>
          </div>

          <div className="mb-6">
            <label className="block text-gray-300 mb-3 text-lg">Upload {selectedType}</label>
            <div className="border border-gray-700 rounded-lg p-6 bg-[#0a0a0a] flex flex-col items-center justify-center">
              {preview ? <img src={preview} alt="Preview" className="w-full h-auto max-h-[500px] object-contain rounded-md" /> : <span className="text-gray-500">No Image Selected</span>}
              <input type="file" accept="image/*" onChange={handleImageChange} className="mt-3 w-full text-sm text-gray-400 cursor-pointer" />
            </div>
          </div>

          <button onClick={handleUpload} className="w-full p-3 bg-green-500 text-white rounded-lg">Detect Image</button>

          {processedImage && (
            <div className="mt-6">
              <h3 className="text-lg font-bold text-gray-300">Processed Image</h3>
              <img src={processedImage} alt="Processed" className="w-full h-auto max-h-[500px] object-contain rounded-md mt-3" />
              <a
                href={processedImage}
                download
                className="mt-4 inline-block w-full p-3 bg-blue-500 text-white rounded-lg text-center hover:bg-blue-600 transition"
              >
                Download Image
              </a>
            </div>
          )}

          {tumorType && (
            <div className="mt-6">
              <h3 className="text-lg font-bold text-gray-300">Detected Tumor Type:</h3>
              <p className="text-gray-400 text-lg">{tumorType}</p>
            </div>
          )}

          {tumorInfo && (
            <div className="mt-6 p-4 bg-gray-900 border border-gray-700 rounded-lg">
              <h3 className="text-lg font-bold text-green-400">Tumor Information</h3>
              <p className="text-gray-300 mt-2" dangerouslySetInnerHTML={{ __html: tumorInfo }}></p>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default ImageDetection;
