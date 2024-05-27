// src/components/Sidebar.jsx
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  FaHome, FaTasks, FaUser, FaUserShield, FaCog, FaBell, FaSignOutAlt,
  FaSearch, FaAngleDown, FaAngleUp, FaAngleLeft, FaAngleRight
} from 'react-icons/fa';
import useLocalStorage from '../hooks/useLocalStorage';

const Sidebar = () => {
  const [isExpanded, setIsExpanded] = useLocalStorage('isExpanded', false);
  const [isUserMenuOpen, setIsUserMenuOpen] = useState(false);

  return (
    <motion.div
      className="bg-white text-gray-900 h-screen shadow-lg flex flex-col"
      initial={{ width: isExpanded ? '16rem' : '4rem' }}
      animate={{ width: isExpanded ? '16rem' : '4rem' }}
      transition={{ duration: 0.3 }}
    >
      <div className="flex items-center justify-between p-4">
        <img src="/path/to/logo.png" alt="StudioSync" className={`transition-all ${isExpanded ? 'block' : 'hidden'}`} />
        <button onClick={() => setIsExpanded(!isExpanded)} className="text-xl">
          {isExpanded ? <FaAngleLeft /> : <FaAngleRight />}
        </button>
      </div>
      <div className="px-4 py-2">
        <div className="relative">
          <FaSearch className="absolute left-2 top-2" />
          <input
            type="text"
            placeholder="Search"
            className={`pl-8 pr-4 py-2 rounded-lg w-full ${isExpanded ? 'block' : 'hidden'}`}
          />
        </div>
      </div>
      <nav className="mt-4 flex-grow">
        <ul className="space-y-2">
          <li className="flex items-center p-4 hover:bg-gray-200">
            <FaHome className="mr-3" />
            {isExpanded && <Link to="/">Home</Link>}
          </li>
          <li className="flex items-center p-4 hover:bg-gray-200">
            <FaTasks className="mr-3" />
            {isExpanded && <Link to="/dashboard">Dashboard</Link>}
          </li>
          <li className="flex items-center p-4 hover:bg-gray-200">
            <FaUser className="mr-3" />
            {isExpanded && (
              <div className="flex justify-between w-full" onClick={() => setIsUserMenuOpen(!isUserMenuOpen)}>
                <span>User</span>
                {isUserMenuOpen ? <FaAngleUp /> : <FaAngleDown />}
              </div>
            )}
          </li>
          {isUserMenuOpen && isExpanded && (
            <ul className="pl-8 space-y-2">
              <li className="flex items-center p-4 hover:bg-gray-200">
                <FaUserShield className="mr-3" />
                <Link to="/profile">Profile</Link>
              </li>
              <li className="flex items-center p-4 hover:bg-gray-200">
                <FaEnvelope className="mr-3" />
                <Link to="/email">Email Address</Link>
              </li>
              <li className="flex items-center p-4 hover:bg-gray-200">
                <FaBuilding className="mr-3" />
                <Link to="/organization">Organization</Link>
              </li>
              <li className="flex items-center p-4 hover:bg-gray-200">
                <FaShieldAlt className="mr-3" />
                <Link to="/security">Security</Link>
              </li>
            </ul>
          )}
          <li className="flex items-center p-4 hover:bg-gray-200">
            <FaCog className="mr-3" />
            {isExpanded && <Link to="/settings">Settings</Link>}
          </li>
          <li className="flex items-center p-4 hover:bg-gray-200">
            <FaBell className="mr-3" />
            {isExpanded && <Link to="/notifications">Notifications</Link>}
          </li>
        </ul>
      </nav>
      <div className="p-4">
        <div className="flex items-center">
          <img src="https://via.placeholder.com/40" alt="Profile" className="rounded-full mr-3" />
          {isExpanded && (
            <div>
              <p className="font-bold">Culaccino</p>
              <p className="text-sm">Editor</p>
            </div>
          )}
          <button className="ml-auto text-xl">
            <FaSignOutAlt />
          </button>
        </div>
      </div>
    </motion.div>
  );
};

export default Sidebar;
