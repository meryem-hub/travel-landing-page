import React, { useState } from 'react';
import { FiMenu, FiX } from 'react-icons/fi';
import logo from '../assets/images/logo.png';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="w-full px-6 md:px-16 py-6 flex justify-between items-center shadow-sm relative z-50 bg-white">
      <img src={logo} alt="Jadoo Logo" className="w-28" />

      <nav className="hidden md:flex gap-12 text-gray-800 font-medium">
        <a href="#" className="hover:text-orange-500 transition-colors">Destinations</a>
        <a href="#" className="hover:text-orange-500 transition-colors">Hotels</a>
        <a href="#" className="hover:text-orange-500 transition-colors">Flights</a>
        <a href="#" className="hover:text-orange-500 transition-colors">Bookings</a>
      </nav>

      <div className="hidden md:flex items-center gap-6">
        <button className="text-gray-800 hover:text-orange-500 transition-colors">Login</button>
        <button className="px-4 py-2 border border-black rounded-md hover:bg-black hover:text-white transition-colors">
          Sign up
        </button>
        <select className="bg-transparent focus:outline-none cursor-pointer">
          <option>EN</option>
          <option>FR</option>
          <option>ES</option>
        </select>
      </div>

      <div className="md:hidden">
        <button onClick={() => setMenuOpen(!menuOpen)} className="text-2xl">
          {menuOpen ? <FiX /> : <FiMenu />}
        </button>
      </div>

      {menuOpen && (
        <div className="absolute top-full left-0 w-full bg-white shadow-md flex flex-col items-start p-6 gap-4 md:hidden font-medium text-gray-800 z-40">
          <a href="#" className="w-full hover:text-orange-500">Destinations</a>
          <a href="#" className="w-full hover:text-orange-500">Hotels</a>
          <a href="#" className="w-full hover:text-orange-500">Flights</a>
          <a href="#" className="w-full hover:text-orange-500">Bookings</a>
          <hr className="w-full my-2" />
          <button className="w-full text-left hover:text-orange-500">Login</button>
          <button className="w-full text-left px-4 py-2 border border-black rounded-md hover:bg-black hover:text-white transition-colors">
            Sign up
          </button>
          <select className="w-full bg-transparent mt-2 focus:outline-none cursor-pointer">
            <option>EN</option>
            <option>FR</option>
            <option>ES</option>
          </select>
        </div>
      )}
    </header>
  );
};

export default Header;
