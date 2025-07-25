import plane from '../assets/images/plane.png';
import setting from '../assets/images/setting.png';
import dish from '../assets/images/dish.png';
import mic from '../assets/images/mic.png';

function Category() {
  return (
    <div className="max-w-6xl mx-auto px-4 py-16">
      <div className="text-center mb-12">
        <p className="text-black-600 font-light mb-2">CATEGORY</p>
        <h2 className="text-4xl font-bold text-gray-800">We Offer Best Services</h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        <div className="group bg-white p-6 rounded-xl transition-all duration-300 transform hover:-translate-y-2 hover:shadow-xl">
          <div className="w-20 h-20 rounded-full flex items-center justify-center mb-4">
            <img
              src={dish}
              alt="Dish"
              className="w-10 h-10 transition-transform duration-300 group-hover:scale-110"
            />
          </div>
          <h3 className="text-xl font-semibold mb-2">Local Events</h3>
          <p className="text-gray-600">Barton vanity itself do in it. Preferd to men it engrossed listening.</p>
        </div>

        <div className="group bg-white p-6 rounded-xl transition-all duration-300 transform hover:-translate-y-2 hover:shadow-xl">
          <div className="w-20 h-20 rounded-full flex items-center justify-center mb-4">
            <img
              src={plane}
              alt="Plane"
              className="w-10 h-10 transition-transform duration-300 group-hover:scale-110"
            />
          </div>
          <h3 className="text-xl font-semibold mb-2">Best Flights</h3>
          <p className="text-gray-600">Engrossed listening. Park gate sell they west hard for the.</p>
        </div>

        <div className="group bg-white p-6 rounded-xl transition-all duration-300 transform hover:-translate-y-2 hover:shadow-xl">
          <div className="w-20 h-20 rounded-full flex items-center justify-center mb-4">
            <img
              src={mic}
              alt="Microphone"
              className="w-10 h-10 transition-transform duration-300 group-hover:scale-110"
            />
          </div>
          <h3 className="text-xl font-semibold mb-2">Calculated Weather</h3>
          <p className="text-gray-600">Built Wicket longer admire do barton vanity itself do in it.</p>
        </div>

        <div className="group bg-white p-6 rounded-xl transition-all duration-300 transform hover:-translate-y-2 hover:shadow-xl">
          <div className="w-20 h-20 rounded-full flex items-center justify-center mb-4">
            <img
              src={setting}
              alt="Settings"
              className="w-10 h-10 transition-transform duration-300 group-hover:scale-110"
            />
          </div>
          <h3 className="text-xl font-semibold mb-2">Customization</h3>
          <p className="text-gray-600">We deliver outsourced aviation services for military customers.</p>
        </div>
      </div>
    </div>
  );
}

export default Category;
