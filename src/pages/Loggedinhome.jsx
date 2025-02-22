import React, { useContext } from 'react';
import { Usercontext } from '../context/Usercontext';
import Sidebar from '../components/Sidebar';
import { motion } from 'framer-motion';

const Loggedinhome = () => {
  const { open, setiSopen } = useContext(Usercontext);

  return (
<div className="flex min-h-screen bg-black text-green-400">
      {/* Sidebar */}
      <Sidebar />

      {/* Main Content */}
      <div className="flex-1 p-6">
        {/* Title Section */}
        <motion.h1 
          initial={{ opacity: 0, y: -20 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ duration: 0.5 }}
          className="text-4xl font-bold text-center text-green-500"
        >
          AI Healthcare System Documentation
        </motion.h1>

        {/* <motion.img 
          src={DocumentationImage} 
          alt="AI Healthcare Overview"
          className="w-full mt-6 rounded-lg shadow-lg" 
          initial={{ opacity: 0 }} 
          animate={{ opacity: 1 }} 
          transition={{ duration: 1 }}
        /> */}

        {/* Introduction */}
        <section className="mt-10">
          <h2 className="text-3xl font-semibold">Introduction</h2>
          <p className="mt-2 text-gray-400">
            The AI Healthcare System is an advanced AI-powered medical assistant that allows patients and doctors to interact seamlessly. Built with state-of-the-art machine learning models, it provides accurate diagnoses, medical insights, and virtual assistance for various diseases.
          </p>
        </section>

        {/* Features */}
        <section className="mt-10">
          <h2 className="text-3xl font-semibold">Core Features</h2>
          <ul className="mt-3 space-y-4 text-gray-300">
            <li className="font-bold text-green-400">📌 AI-Powered Diagnosis:</li>
            <p>Upload medical scans (MRI, X-rays) for automated analysis, detecting tumors, fractures, and anomalies with 90%+ accuracy.</p>

            <li className="font-bold text-green-400">📌 AI Medical Insights:</li>
            <p>Get detailed information about medicines, including dosage, side effects, and benefits.</p>

            <li className="font-bold text-green-400">📌 Disease Assessment:</li>
            <p>Take AI-based tests for conditions like diabetes, Alzheimer's, and Parkinson's.</p>

            <li className="font-bold text-green-400">📌 Virtual Medical Assistant:</li>
            <p>Chat with AI for medical guidance and recommendations.</p>
          </ul>
        </section>

        {/* Technology Stack */}
        <section className="mt-10">
          <h2 className="text-3xl font-semibold">Technology Stack</h2>
          <p className="mt-2 text-gray-400">This project leverages cutting-edge technologies:</p>
          <ul className="mt-3 space-y-3">
            <li><span className="text-green-400 font-bold">🖥 Frontend:</span> React, Tailwind CSS, Framer Motion</li>
            <li><span className="text-green-400 font-bold">⚙️ Backend:</span> Node.js, Express.js</li>
            <li><span className="text-green-400 font-bold">🧠 AI Models:</span> TensorFlow, PyTorch, OpenCV</li>
            <li><span className="text-green-400 font-bold">💾 Database:</span> MongoDB</li>
          </ul>
        </section>

        {/* Getting Started */}
        <section className="mt-10">
          <h2 className="text-3xl font-semibold">Getting Started</h2>
          <p className="mt-2 text-gray-400">Follow these steps to set up and run the project:</p>
          <ol className="mt-3 space-y-3 list-decimal list-inside">
            <li>Clone the repository: <code className="bg-gray-800 p-1 rounded">git clone https://github.com/your-repo/ai-healthcare.git</code></li>
            <li>Install dependencies: <code className="bg-gray-800 p-1 rounded">npm install</code></li>
            <li>Run the development server: <code className="bg-gray-800 p-1 rounded">npm start</code></li>
          </ol>
        </section>

        {/* Conclusion */}
        <section className="mt-10">
          <h2 className="text-3xl font-semibold">Conclusion</h2>
          <p className="mt-2 text-gray-400">
            This AI Healthcare System revolutionizes medical diagnosis and assistance using cutting-edge AI. It enhances accessibility to medical insights and provides accurate recommendations for better healthcare outcomes.
          </p>
        </section>
      </div>
    </div>
  );
};

export default Loggedinhome;
