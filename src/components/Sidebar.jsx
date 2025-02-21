import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { Usercontext } from '../context/Usercontext';
import { menuItems } from './Data';

const Sidebar = () => {
  const loggedInUser = JSON.parse(localStorage.getItem("userProfile"));
  const { open } = useContext(Usercontext);

  if (!open) return null;

  return (
    <div className="w-64 min-h-screen bg-zinc-900 m-2 ml-6   text-white p-5 flex flex-col space-y-6">
      <div className="text-center">
        <h1 className="text-2xl font-bold">🤖 Health Hub</h1>
        <h3 className="text-gray-400">AI Medical Services</h3>
      </div>

      <div className="space-y-4">
        {menuItems.map((item, index) => (
          <div key={index} className="flex items-center space-x-3 hover:bg-gray-800 px-3 py-2 rounded-lg cursor-pointer transition">
            {item.icon}
            <Link to={item.link}>
              <span className="text-white font-medium">{item.name}</span>
            </Link>
          </div>
        ))}
      </div>

      {/* Logout Button */}
      <button className="bg-green-600  hover:bg-green-700 px-3 py-2 rounded-lg font-bold w-[90%] transition">
        Logout
      </button>
    </div>
  );
};

export default Sidebar;
