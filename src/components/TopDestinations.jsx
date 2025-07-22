import { BsCursorFill } from "react-icons/bs";
import Rome from '../assets/images/Rome.png';
import London from '../assets/images/London.png';
import Europe from '../assets/images/thirdCard.png';

function TopDestinations() {
  return (
    <div className="max-w-6xl mx-auto px-4 py-16">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold text-gray-800">Top Destinations</h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="group bg-white rounded-t-xl overflow-hidden shadow-lg">
          <div className="w-full h-112 flex items-center justify-center overflow-hidden">
            <img
              src={Rome}
              alt="Rome, Italy"
              className="w-full h-full object-contain transition-transform duration-500 group-hover:scale-105 rounded-t-xl"
            />
          </div>
          <div className="p-6">
            <div className="flex justify-between items-start">
              <div>
                <h3 className="text-xl font-semibold">Rome, Italy</h3>
                <p className="text-gray-600 flex items-center gap-2 mt-1">
                  <BsCursorFill className="text-black" size={14} />
                  <span>10 Days Trip</span>
                </p>
              </div>
              <span className="text-xl font-bold">$5.42k</span>
            </div>
          </div>
        </div>

        <div className="group bg-white rounded-t-xl overflow-hidden shadow-lg">
          <div className="w-full h-112 flex items-center justify-center overflow-hidden">
            <img
              src={London}
              alt="London, UK"
              className="w-full h-full object-contain transition-transform duration-500 group-hover:scale-105 rounded-t-xl"
            />
          </div>
          <div className="p-6">
            <div className="flex justify-between items-start">
              <div>
                <h3 className="text-xl font-semibold">London, UK</h3>
                <p className="text-gray-600 flex items-center gap-2 mt-1">
                  <BsCursorFill className="text-black" size={14} />
                  <span>12 Days Trip</span>
                </p>
              </div>
              <span className="text-xl font-bold">$4.2k</span>
            </div>
          </div>
        </div>

        <div className="group bg-white rounded-t-xl overflow-hidden shadow-lg">
          <div className="w-full h-112 flex items-center justify-center overflow-hidden">
            <img
              src={Europe}
              alt="Full Europe"
              className="w-full h-full object-contain transition-transform duration-500 group-hover:scale-105 rounded-t-xl"
            />
          </div>
          <div className="p-6">
            <div className="flex justify-between items-start">
              <div>
                <h3 className="text-xl font-semibold">Full Europe</h3>
                <p className="text-gray-600 flex items-center gap-2 mt-1">
                  <BsCursorFill className="text-black" size={14} />
                  <span>30 Days Trip</span>
                </p>
              </div>
              <span className="text-xl font-bold">$15k</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default TopDestinations;