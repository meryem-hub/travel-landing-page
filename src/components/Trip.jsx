import { BsWallet, BsTaxiFront, BsBoundingBoxCircles, BsBuildings } from "react-icons/bs";
import { BiSolidLeaf } from "react-icons/bi";
import { FaRegMap } from "react-icons/fa";
import { BsSendFill } from "react-icons/bs";

import greeceGirl from '../assets/images/greeceGirl.jpeg';
import smRome from '../assets/images/sm-Rome.png';

function Trip() {
  return (
    <div className="max-w-6xl mx-auto px-4 py-16">
      <div className="text-center md:text-left mb-12">
        <p className="text-gray-600 font-semibold mb-2">Easy and Fast</p>
        <h2 className="text-5xl font-bold text-gray-800 leading-tight mt-0">
          Book your next trip <br /> in 3 easy steps
        </h2>
      </div>

      <div className="flex flex-col md:flex-row items-center md:items-start justify-between gap-12">
        <div className="md:w-1/2 space-y-8">
          <div className="flex items-center gap-6">
            <div className="bg-orange-100 p-4 rounded-xl flex-shrink-0">
              <BsBoundingBoxCircles className="text-orange-500" size={30} />
            </div>
            <div>
              <h4 className="text-xl font-semibold mb-1">Choose Destination</h4>
              <p className="text-gray-600">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Urna, tortor tempus.
              </p>
            </div>
          </div>

          <div className="flex items-center gap-6">
            <div className="bg-yellow-100 p-4 rounded-xl flex-shrink-0">
              <BsWallet className="text-yellow-500" size={30} />
            </div>
            <div>
              <h4 className="text-xl font-semibold mb-1">Make Payment</h4>
              <p className="text-gray-600">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Urna, tortor tempus.
              </p>
            </div>
          </div>

          <div className="flex items-center gap-6">
            <div className="bg-blue-100 p-4 rounded-xl flex-shrink-0">
              <BsTaxiFront className="text-blue-500" size={30} />
            </div>
            <div>
              <h4 className="text-xl font-semibold mb-1">Reach Airport</h4>
              <p className="text-gray-600">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Urna, tortor tempus.
              </p>
            </div>
          </div>
        </div>

        <div className="md:w-1/2 flex justify-center md:justify-end relative">
          <div className="bg-white rounded-3xl shadow-lg w-full max-w-sm overflow-hidden">
            <img
              src={greeceGirl}
              alt="Trip To Greece"
              className=" h-64 object-cover rounded-2xl p-3 "
            />
            <div className="p-8 pt-4">
              <h1 className="text-2xl font-semibold text-gray-800 mt-0 mb-2">Trip To Greece</h1>
              <div className="flex items-center text-gray-600 text-sm">
                <span className="mr-4">14-29 June | by Robbin</span>
              </div>

              <div className="flex items-center gap-4 mt-4">
                <div className="bg-gray-200 rounded-full p-2">
                  <BiSolidLeaf size={18} className="text-gray-700" />
                </div>
                <div className="bg-gray-200 rounded-full p-2">
                  <FaRegMap size={18} className="text-gray-700" />
                </div>
                <div className="bg-gray-200 rounded-full p-2">
                  <BsSendFill size={18} className="text-gray-700" />
                </div>
              
              </div>
                <div className="flex items-center ml-auto gap-2 pt-5">
                  <BsBuildings size={18} className="text-gray-700" />
                  <span className="text-sm text-gray-600">24 people going</span>
                </div>
            </div>
          </div>

          <div className="absolute bottom-4 md:bottom-12 -left-4 md:left-auto md:-right-4 bg-white rounded-xl shadow-md p-2 flex items-center w-60 transform translate-y-8 md:translate-y-0">
            <img
              src={smRome}
              alt="Small Rome"
              className="w-12 h-12 rounded-full object-cover mr-4"
            />
            <div>
              <p className="text-gray-500 text-sm text-left">Ongoing</p>
              <h4 className="text-md font-semibold text-gray-800 mb-1">Trip To rome</h4>
              <p className="text-xs text-gray-500 mt-1">40% Completed</p>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div className="bg-purple-600 h-2 rounded-full" style={{ width: '40%' }}></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Trip;
