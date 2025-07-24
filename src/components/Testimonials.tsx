import axon from '../assets/images/axonlogo.png';
import star from '../assets/images/starLogo.png';
import expedia from '../assets/images/expediaLogo.png';
import qantas from '../assets/images/qantasLogo.png';
import alitalia from '../assets/images/alitaliaLogo.png';
import man from '../assets/images/man.png';
import { SlArrowUp, SlArrowDown } from 'react-icons/sl';

const Testimonials = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center md:items-start justify-between gap-10">
          <div className="text-left max-w-md">
            <h4 className="text-sm font-semibold text-gray-500 mb-2 uppercase tracking-widest">
              Testimonials
            </h4>
            <h2 className="text-4xl font-extrabold text-[#1D1E4C] leading-snug">
              What People Say <br /> About Us.
            </h2>
            <div className="mt-6 flex space-x-2">
              <span className="w-2 h-2 bg-[#1D1E4C] rounded-full inline-block"></span>
              <span className="w-2 h-2 bg-gray-300 rounded-full inline-block"></span>
              <span className="w-2 h-2 bg-gray-300 rounded-full inline-block"></span>
            </div>
          </div>

          <div className="relative max-w-xl w-full">
            <div className="absolute top-1/2 -right-24 transform -translate-y-1/2 flex flex-col gap-3 z-30">
              <button className="p-2 text-gray-300">
                <SlArrowUp size={20} />
              </button>
              <button className="p-2">
                <SlArrowDown size={20} />
              </button>
            </div>

            <div className="bg-white rounded-xl shadow-xl p-8 mb-4 relative z-20">
              <div className="absolute -top-10 -left-10 w-20 h-20 rounded-full overflow-hidden shadow-md z-10">
                <img src={man} alt="user" className="w-full h-full object-cover" />
              </div>
              <p className="text-gray-600 text-md mt-8">
                "On the Windows talking painted pasture yet its express parties use. Sure last upon he same as knew next. 
                Of believed or diverted no."
              </p>
              <div className="mt-6">
                <p className="font-semibold text-[#1D1E4C]">Mike Taylor</p>
                <p className="text-sm text-gray-500">Lahore, Pakistan</p>
              </div>
            </div>

            <div 
              className="bg-white rounded-xl p-4 border border-gray-300 shadow-sm absolute top-12 left-10 w-full z-10"
              style={{ height: '210px' }}
            >
              <p className="text-gray-600 text-md mt-8">
                "On the Windows talking painted pasture yet its express parties use. Sure last upon he same as knew next. 
                Of believed or diverted no. "
              </p>
              <div className="pt-16 mb-4">
                <p className="font-semibold text-[#1D1E4C]">Chris Thomas</p>
                <p className="text-sm text-gray-500">CEO of Red Button</p>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-16 flex justify-center items-center flex-wrap gap-8">
          <img src={axon} alt="axon" style={{ height: '110px' }} className="h-14 object-contain transition-transform duration-300 hover:scale-105" />
          <img src={star} alt="star" className="h-14 object-contain transition-transform duration-300 hover:scale-105" />
          <img src={expedia} alt="expedia" style={{ height: '110px' }} className="object-contain transition-transform duration-300 hover:scale-105" />
          <img src={qantas} alt="qantas" className="h-5 object-contain transition-transform duration-300 hover:scale-105" />
          <img src={alitalia} alt="alitalia" className="h-5 object-contain transition-transform duration-300 hover:scale-105" />
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
