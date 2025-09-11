import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-router-dom";

// Import your logo
import logo from "../assets/logo/sj logo.jpg";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-slate-700 shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          
          {/* Logo + Text */}
          <Link to="/" className="flex items-center space-x-2">
          <img src={logo} alt="Logo" className="h-12 w-12 rounded-full object-cover border-2 border-white shadow-md" />
            <span className="text-2xl font-bold text-white">
              ShriJi Girls Hostel Indore
            </span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8 text-lg font-medium">
            <Link to="/" className="text-white hover:text-yellow-400 transition-colors duration-300">Home</Link>
            <Link to="/about" className="text-white hover:text-yellow-400 transition-colors duration-300">About</Link>
            <Link to="/rooms" className="text-white hover:text-yellow-400 transition-colors duration-300">Rooms</Link>
            <Link to="/amenities" className="text-white hover:text-yellow-400 transition-colors duration-300">Amenities</Link>
            <Link to="/gallery" className="text-white hover:text-yellow-400 transition-colors duration-300">Gallery</Link>
            <Link to="/booking" className="text-white hover:text-yellow-400 transition-colors duration-300">Book Now</Link>
            <Link to="/contact" className="text-white hover:text-yellow-400 transition-colors duration-300">Contact</Link>
          </div>

          {/* Mobile Toggle Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-2xl text-white focus:outline-none hover:text-yellow-400 transition-colors duration-300"
            >
              {isOpen ? <FaTimes /> : <FaBars />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-slate-800 px-4 py-6 space-y-4 text-lg font-medium">
          <Link to="/" className="block text-white hover:text-yellow-400 transition-colors duration-300" onClick={() => setIsOpen(false)}>Home</Link>
          <Link to="/about" className="block text-white hover:text-yellow-400 transition-colors duration-300" onClick={() => setIsOpen(false)}>About</Link>
          <Link to="/rooms" className="block text-white hover:text-yellow-400 transition-colors duration-300" onClick={() => setIsOpen(false)}>Rooms</Link>
          <Link to="/amenities" className="block text-white hover:text-yellow-400 transition-colors duration-300" onClick={() => setIsOpen(false)}>Amenities</Link>
          <Link to="/gallery" className="block text-white hover:text-yellow-400 transition-colors duration-300" onClick={() => setIsOpen(false)}>Gallery</Link>
          <Link to="/booking" className="block text-white hover:text-yellow-400 transition-colors duration-300" onClick={() => setIsOpen(false)}>Book Now</Link>
          <Link to="/contact" className="block text-white hover:text-yellow-400 transition-colors duration-300" onClick={() => setIsOpen(false)}>Contact</Link>
        </div>
      )}
    </nav>
  );
}
