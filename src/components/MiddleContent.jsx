import React, { useState } from 'react'
import { GoogleGenerativeAI } from '@google/generative-ai'

const apiKey = 'AIzaSyCwb6kA2c5qphuFecmyTMU72M-uDaNPgLU' // Replace with your actual Gemini API key

const genAI = new GoogleGenerativeAI(apiKey)
const model = genAI.getGenerativeModel({ model: 'gemini-pro' }) // Use 'gemini-pro' for detailed responses

const MiddleContent = () => {
  const [medicine, setMedicine] = useState('')
  const [info, setInfo] = useState(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)

  const fetchMedicineInfo = async () => {
    if (!medicine.trim()) return
    setLoading(true)
    setError(null)

    try {
      const prompt = `
      Provide a detailed yet simple explanation about the medicine "${medicine}".
      Include:
      - What it is
      - Its uses
      - Pros and cons
      - Side effects
      - Dosage recommendations
      - When and how to take it
      - Any important warnings.
      Keep it user-friendly and easy to understand.
    `

      const response = await model.generateContent(prompt)
      const text = response.response.text().replace(/\*/g, ''); // Remove all * characters

      // Convert text between **word** to bold <strong>word</strong>
      const formattedText = text.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>');
      
      setInfo(formattedText);
      
     
    } catch (err) {
      setError('Could not fetch medicine details. Please try again.')
      setInfo(null)
    }

    setLoading(false)
  }

  return (
    <div className="flex-1 p-6">
      <h2 className="text-2xl font-semibold text-green-500">Medicine Information</h2>

      <div className="mt-4 flex gap-3">
        <input
          type="text"
          placeholder="Enter medicine name..."
          value={medicine}
          onChange={(e) => setMedicine(e.target.value)}
          className="w-full p-3 bg-[#141414] text-white border border-green-600 rounded-md focus:outline-none focus:border-green-500"
        />
        <button
          onClick={fetchMedicineInfo}
          className="px-5 py-2 bg-green-600 hover:bg-green-500 text-white rounded-md transition"
        >
          Search
        </button>
      </div>

      {loading && <p className="mt-4 text-yellow-400">Loading...</p>}
      {error && <p className="mt-4 text-red-500">{error}</p>}

      {info && (
  <div className="mt-6 p-4 bg-[#141414] border border-green-600 rounded-md max-h-[400px] overflow-y-auto whitespace-pre-wrap">
    <h3 className="text-xl font-semibold text-green-500">{medicine}</h3>
    <p>{info}</p>
  </div>
)}

    </div>
  )
}

export default MiddleContent
