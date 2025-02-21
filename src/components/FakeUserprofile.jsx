import { FaStar, FaPhone, FaMapMarkerAlt, FaGlobe } from "react-icons/fa";

const UserProfiles = () => {
  return (
    <div className="min-h-screen flex justify-center items-center bg-[#1f1e24] p-6">
    <div className="w-full max-w-lg bg-[#25232b] rounded-2xl shadow-lg p-6 text-gray-200">
      <h2 className="text-2xl font-semibold text-gray-100">Jeremy Rose</h2>
      <p className="text-sm text-gray-400">Product Designer</p>
      
      <div className="flex items-center mt-2 text-[#6556cd]">
        <span className="text-lg font-semibold">8.6</span>
        <svg className="ml-1 w-4 h-4 fill-current text-[#6556cd]" viewBox="0 0 24 24"><path d="M12 2l3.09 6.26 6.91.99-5 4.87 1.18 6.88L12 17.77l-6.18 3.23L7 14.12 2 9.25l6.91-.99z"/></svg>
      </div>
      
      <div className="flex gap-3 mt-4">
        <button className="bg-[#6556cd] hover:bg-[#4a3daa] text-white px-4 py-2 rounded-lg">Contacts</button>
        <button className="bg-gray-700 hover:bg-gray-600 text-white px-4 py-2 rounded-lg">Report User</button>
      </div>
      
      <div className="border-t border-gray-600 mt-4 pt-4">
        <h3 className="text-lg font-semibold text-gray-100">Contact Information</h3>
        <p className="text-sm text-gray-400">Phone: +1 123 456 7890</p>
        <p className="text-sm text-gray-400">Email: hello@jeremyrose.com</p>
        <p className="text-sm text-gray-400">Website: www.jeremyrose.com</p>
      </div>
    </div>
  </div>
  );
};

export default UserProfiles;
