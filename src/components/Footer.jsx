import React from 'react';
import { FaFacebookF, FaInstagram, FaTwitter } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-white py-16 px-4 md:px-0 relative overflow-hidden">
      <div className="absolute bottom-0 right-0 w-64 h-24 bg-[#a25aad] rounded-full mix-blend-multiply filter blur-3xl opacity-70 z-0"></div>

      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-6 gap-8 text-center md:text-left relative z-10">
        <div className="col-span-1 md:col-span-2">
          <h3 className="text-3xl font-bold text-[#1D1E4C] mb-4">Jadoo.</h3>
          <p className="text-gray-600 text-sm">
            Book your trip in minute, get full <br /> control for much longer.
          </p>
        </div>

        <div>
          <h4 className="font-bold text-lg text-black mb-4">Company</h4>
          <ul className="text-gray-600 space-y-3">
            <li><a href="#" className="hover:text-[#8E7FE8] transition-colors duration-200">About</a></li>
            <li><a href="#" className="hover:text-[#8E7FE8] transition-colors duration-200">Careers</a></li>
            <li><a href="#" className="hover:text-[#8E7FE8] transition-colors duration-200">Mobile</a></li>
          </ul>
        </div>

        <div>
          <h4 className="font-bold text-lg text-black mb-4">Contact</h4>
          <ul className="text-gray-600 space-y-3">
            <li><a href="#" className="hover:text-[#8E7FE8] transition-colors duration-200">Help/FAQ</a></li>
            <li><a href="#" className="hover:text-[#8E7FE8] transition-colors duration-200">Press</a></li>
            <li><a href="#" className="hover:text-[#8E7FE8] transition-colors duration-200">Affiliates</a></li>
          </ul>
        </div>

        <div>
          <h4 className="font-bold text-lg text-black mb-4">More</h4>
          <ul className="text-gray-600 space-y-3">
            <li><a href="#" className="hover:text-[#8E7FE8] transition-colors duration-200">Airlinefees</a></li>
            <li><a href="#" className="hover:text-[#8E7FE8] transition-colors duration-200">Airline</a></li>
            <li><a href="#" className="hover:text-[#8E7FE8] transition-colors duration-200">Low fare tips</a></li>
          </ul>
        </div>

        <div className="flex flex-col items-center md:items-start">
          <h4 className="font-bold text-lg text-black mb-4 hidden md:block">Social</h4>
          <div className="flex space-x-4 mb-6">
            <a href="#" className="w-10 h-10 flex items-center justify-center rounded-full bg-white shadow-md text-black hover:text-[#8E7FE8] transition-colors duration-200">
              <FaFacebookF size={20} />
            </a>
            <a href="#" className="w-10 h-10 flex items-center justify-center rounded-full bg-gradient-to-tr from-purple-500 via-orange-400 to-white shadow-md text-white transition duration-200">
              <FaInstagram size={20} />
            </a>
            <a href="#" className="w-10 h-10 flex items-center justify-center rounded-full bg-white shadow-md text-black hover:text-[#8E7FE8] transition-colors duration-200">
              <FaTwitter size={20} />
            </a>
          </div>

          <div className="flex flex-col items-center md:items-start">
            <p className="text-gray-600 mb-3">Discover our app</p>
            <div className="flex gap-4">
              <a href="#">
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/78/Google_Play_Store_badge_EN.svg/1280px-Google_Play_Store_badge_EN.svg.png" alt="Google Play" className="h-10" />
              </a>
              <a href="#">
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/3c/Download_on_the_App_Store_Badge.svg/1280px-Download_on_the_App_Store_Badge.svg.png" alt="App Store" className="h-10" />
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-10 text-center text-gray-500 text-sm relative z-10">
        All rights reserved @jadoo.co
      </div>
    </footer>
  );
};

export default Footer;
