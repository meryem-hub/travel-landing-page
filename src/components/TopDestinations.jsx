import { BsCursorFill } from "react-icons/bs";
import Rome from '../assets/images/Rome.png';
import London from '../assets/images/London.png';
import Europe from '../assets/images/thirdCard.png';
import zigzag from '../assets/images/zigzag.png';

function TopDestinations() {
  const cards = [
    {
      img: Rome,
      alt: "Rome, Italy",
      title: "Rome, Italy",
      days: "10 Days Trip",
      price: "$5.42k",
    },
    {
      img: London,
      alt: "London, UK",
      title: "London, UK",
      days: "12 Days Trip",
      price: "$4.2k",
    },
    {
      img: Europe,
      alt: "Full Europe",
      title: "Full Europe",
      days: "30 Days Trip",
      price: "$15k",
      hasZigzag: true,
    },
  ];

  return (
    <div className="max-w-6xl mx-auto px-4 py-16">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold text-gray-800">Top Destinations</h2>
      </div>

      <div className="flex flex-wrap justify-center gap-8">
        {cards.map((dest, index) => (
          <div
            key={index}
            className="relative w-[255px] transform transition duration-300 hover:scale-105 group"
          >
            {/* Image */}
            <div className="flex items-center justify-center h-[80%]">
              <img
                src={dest.img}
                alt={dest.alt}
                className="rounded-t-[24px] w-[255px] h-[90%] object-cover"
              />
            </div>

            {/* Description with hover shadow */}
            <div className="p-4 bg-white rounded-b-[24px] shadow-md transition duration-300 group-hover:shadow-2xl">
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="text-lg font-semibold">{dest.title}</h3>
                  <p className="text-gray-600 flex items-center gap-2 mt-1 text-sm">
                    <BsCursorFill className="text-black" size={14} />
                    <span>{dest.days}</span>
                  </p>
                </div>
                <span className="text-lg font-bold">{dest.price}</span>
              </div>
            </div>

            {/* Zigzag Decoration — only for Europe */}
            {dest.hasZigzag && (
              <img
                src={zigzag}
                alt="Zigzag Decoration"
                className="absolute top-1/2 right-[-85px] -translate-y-1/2 w-32 h-32 -z-10 opacity-75"
              />
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default TopDestinations;
