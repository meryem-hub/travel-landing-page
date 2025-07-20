import logo from '../assets/images/logo.png';

const Header = () => {
  return (
    <header className="flex justify-between items-center px-8 py-6 font-medium  ">
        <img src={logo} alt="Jadoo Logo" className="h-8 pl-16 ml-16 gap-12" />
      <div className="flex items-center ">
        
        <nav className="hidden md:flex gap-16 ml-14 ">
          <a href="#" className="text-gray-800 hover:text-orange-500 transition-colors">Destinations</a>
          <a href="#" className="text-gray-800 hover:text-orange-500 transition-colors">Hotels</a>
          <a href="#" className="text-gray-800 hover:text-orange-500 transition-colors">Flights</a>
          <a href="#" className="text-gray-800 hover:text-orange-500 transition-colors">Bookings</a>
        </nav>
      </div>

      <div className="flex items-center gap-8 mr-16">
        <button className="text-gray-800 hover:text-orange-500 transition-colors">Login</button>
        <button className="px-6 py-2 border border-black rounded-md hover:bg-black hover:text-white transition-colors">
          Sign up
        </button>
        <select className="border-0 bg-transparent text-gray-800 focus:ring-0 cursor-pointer">
          <option>EN</option>
          <option>FR</option>
          <option>ES</option>
        </select>
      </div>
    </header>
  );
};

export default Header;