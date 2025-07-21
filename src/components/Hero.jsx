import React from 'react';
import { FaPlayCircle } from 'react-icons/fa';
import girlImg from '../assets/images/girlImage.png';
import airplane from '../assets/images/airplane.png';

function Hero() {
  return (
    <div className="relative flex flex-col lg:flex-row items-center justify-between px-4 py-8 md:px-8 md:py-12 lg:px-16 lg:py-20 overflow-hidden">
      
      <div className="absolute bg-[#FFF1DA] w-[38.6%] h-full top-0 right-0 z-0 rounded-l-full" />

      <div className="w-full lg:w-1/2 mb-10 lg:mb-0 lg:pr-10 relative z-10">
        <strong className="text-lg md:text-xl font-bold block mb-4 text-[#DF6951]">
          BEST DESTINATIONS AROUND THE WORLD
        </strong>

        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
          Travel, enjoy and live a new and full life
        </h1>

        <p className="text-gray-600 mb-8 leading-relaxed">
          Dull! Wicket longer admire do borrow vanity itself do in it.<br />
          Preferred to sportsmen it engrossed listening. Fort gone<br />
          Jell they west hard for the.
        </p>

        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6">
          <button className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 px-6 rounded-lg transition duration-200 shadow-lg">
            Find out more
          </button>

          <button className="flex items-center gap-2 text-[#DF6951] font-semibold py-3 px-6 rounded-lg hover:bg-[#DF6951] hover:text-white transition duration-200">
            <FaPlayCircle className="text-[#DF6951] text-xl" />
            Play Demo
          </button>
        </div>
      </div>

      <div className="w-full lg:w-1/2 flex justify-center lg:justify-end relative z-10">
        <img
          src={girlImg}
          alt="Traveling girl"
          className="max-w-full h-auto object-contain"
        />

        <img
          src={airplane}
          alt="Airplane"
          className="absolute w-12 md:w-16 lg:w-20 top-[15%] right-[68%] z-20"
          style={{ transform: 'rotate(-5deg)' }}
        />

        <img
          src={airplane}
          alt="Airplane"
          className="absolute w-14 md:w-20 lg:w-24 top-[23%] left-[84%] z-20"
          style={{ transform: 'rotate(-5deg)' }}
        />
      </div>
    </div>
  );
}

export default Hero;