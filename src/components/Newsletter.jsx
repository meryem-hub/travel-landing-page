import React from 'react';
import { IoIosSend } from 'react-icons/io';

const Newsletter = () => {
  return (
    <section className="relative py-20 px-4 md:px-0">
      <div className="relative max-w-4xl mx-auto bg-[#F9F7FE] rounded-tl-[100px] rounded-br-[0px] rounded-tr-[0px] rounded-bl-[0px] p-8 md:p-16 text-center shadow-lg overflow-hidden z-10">
        <div className="absolute top-0 right-0 bg-[#5E3BE1] text-white p-2 rounded-full shadow-md z-20">
          <IoIosSend size={24} />
        </div>

        <h2 className="text-base md:text-lg font-medium text-gray-500 mb-8 relative z-10 leading-relaxed">
          Subscribe to get information, latest news and other <br className="hidden md:block" /> interesting offers about Jadoo.
        </h2>

        <div className="flex flex-col md:flex-row items-center justify-center gap-4 relative z-10">
          <div className="relative w-full md:w-auto flex-grow">
            <span className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 text-xl">
              <IoIosSend />
            </span>
            <input
              type="email"
              placeholder="Your email"
              className="w-full pl-12 pr-4 py-3 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#8E7FE8]"
            />
          </div>
          <button className="bg-[#FF725E] text-white px-8 py-3 rounded-xl shadow-md hover:bg-[#E06554] transition duration-300 w-full md:w-auto">
            Subscribe
          </button>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;
