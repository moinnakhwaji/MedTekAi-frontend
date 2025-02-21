import React from "react";
import Navbar from "../components/Navbar";

const Contact = () => {
  return (
    <>
    <Navbar/>
 
    <div className="bg-[#0a0a0a] text-white min-h-screen flex flex-col items-center justify-center px-6">
      {/* Page Header */}
      <h2 className="text-4xl font-bold mb-6 text-center">Get in Touch</h2>
      <p className="text-gray-300 text-center max-w-2xl mb-10">
        We'd love to hear from you! Whether you have a question, suggestion, or just want to say hello, feel free to reach out.
      </p>

      {/* Contact Form */}
      <div className="w-full max-w-3xl bg-[#141414] p-8 rounded-lg shadow-lg">
        <form className="space-y-6">
          {/* Name */}
          <div>
            <label className="block text-gray-300 mb-1 text-sm">Full Name</label>
            <input
              type="text"
              placeholder="Enter your name"
              className="w-full p-3 bg-[#0a0a0a] text-white rounded-lg border border-gray-700 focus:outline-none focus:border-gray-500"
            />
          </div>
          
          {/* Email */}
          <div>
            <label className="block text-gray-300 mb-1 text-sm">Email Address</label>
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full p-3 bg-[#0a0a0a] text-white rounded-lg border border-gray-700 focus:outline-none focus:border-gray-500"
            />
          </div>

          {/* Message */}
          <div>
            <label className="block text-gray-300 mb-1 text-sm">Message</label>
            <textarea
              rows="4"
              placeholder="Type your message..."
              className="w-full p-3 bg-[#0a0a0a] text-white rounded-lg border border-gray-700 focus:outline-none focus:border-gray-500"
            ></textarea>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full py-3 bg-white text-black font-semibold rounded-lg hover:bg-gray-300 transition-all duration-500"
          >
            Send Message
          </button>
        </form>
      </div>

      {/* Social Links */}
      <div className="mt-10 text-center">
        <h3 className="text-xl font-semibold mb-4">Follow Us</h3>
        <div className="flex space-x-6 justify-center">
          <a href="#" className="text-gray-300 hover:text-white transition duration-300">
            <i className="fab fa-github text-2xl"></i>
          </a>
          <a href="#" className="text-gray-300 hover:text-white transition duration-300">
            <i className="fab fa-linkedin text-2xl"></i>
          </a>
          <a href="#" className="text-gray-300 hover:text-white transition duration-300">
            <i className="fab fa-twitter text-2xl"></i>
          </a>
        </div>
      </div>
    </div>
    </>
  );
};

export default Contact;
