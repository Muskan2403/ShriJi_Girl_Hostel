import { onAuthStateChanged, signOut } from "firebase/auth";
import { User } from "lucide-react";
import { useEffect, useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { FiLogOut, FiUpload, FiUser } from "react-icons/fi";
import { Link } from "react-router-dom";
import { auth } from "../firebase";


export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false); // mobile menu
  const [admin, setAdmin] = useState(null);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setAdmin(user);
    });
    return () => unsubscribe();
  }, []);

  const handleLogout = () => {
    signOut(auth);
    setDropdownOpen(false);
  };

  return (
    <nav className="bg-slate-700 shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
          <img
              src="/images/logo/sj logo.webp"
              alt="Logo"
              className="h-12 w-12 rounded-full object-cover border-2 border-white shadow-md"
            />
           <span className="text-2xl font-bold text-white">
              ShriJi Girls Hostel Indore
            </span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8 text-lg font-medium">
            <Link to="/" className="text-white hover:text-yellow-400 transition-colors">Home</Link>
            <Link to="/about" className="text-white hover:text-yellow-400 transition-colors">About</Link>
            <Link to="/rooms" className="text-white hover:text-yellow-400 transition-colors">Rooms</Link>
            <Link to="/amenities" className="text-white hover:text-yellow-400 transition-colors">Amenities</Link>
            <Link to="/gallery" className="text-white hover:text-yellow-400 transition-colors">Gallery</Link>
            <Link to="/booking" className="text-white hover:text-yellow-400 transition-colors">Book Now</Link>
            <Link to="/contact" className="text-white hover:text-yellow-400 transition-colors">Contact</Link>

            {/* Admin Buttons */}
            {!admin && (
              <Link
                to="/admin/login"
                className="bg-white text-black w-10 h-10 rounded-full ml-4 flex items-center justify-center shadow"
              >
                {/* Admin Login */}
                <User className="w-5 h-5" />
              </Link>
            )}

            {admin && (
              <div className="relative inline-block ml-4">
                <button
                  onClick={() => setDropdownOpen(!dropdownOpen)}
                  className="p-2 rounded-full bg-white shadow hover:bg-pink-100"
                >
                  <FiUser size={24} />
                </button>

                {dropdownOpen && (
                  <div className="absolute right-0 mt-2 w-40 bg-white border rounded shadow-lg flex flex-col">
                    <Link
                      to="/admin/upload"
                      className="flex items-center gap-2 px-4 py-2 hover:bg-pink-50"
                      onClick={() => setDropdownOpen(false)}
                    >
                      <FiUpload /> Upload
                    </Link>
                    <button
                      onClick={handleLogout}
                      className="flex items-center gap-2 px-4 py-2 hover:bg-pink-50 w-full text-left"
                    >
                      <FiLogOut /> Logout
                    </button>
                  </div>
                )}
              </div>
            )}
            </div>

          {/* Mobile Toggle */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-2xl text-white focus:outline-none hover:text-yellow-400 transition-colors"
            >
              {isOpen ? <FaTimes /> : <FaBars />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-slate-800 px-4 py-6 space-y-4 text-lg font-medium">
          <Link to="/" className="block text-white hover:text-yellow-400" onClick={() => setIsOpen(false)}>Home</Link>
          <Link to="/about" className="block text-white hover:text-yellow-400" onClick={() => setIsOpen(false)}>About</Link>
          <Link to="/rooms" className="block text-white hover:text-yellow-400" onClick={() => setIsOpen(false)}>Rooms</Link>
          <Link to="/amenities" className="block text-white hover:text-yellow-400" onClick={() => setIsOpen(false)}>Amenities</Link>
          <Link to="/gallery" className="block text-white hover:text-yellow-400" onClick={() => setIsOpen(false)}>Gallery</Link>
          <Link to="/booking" className="block text-white hover:text-yellow-400" onClick={() => setIsOpen(false)}>Book Now</Link>
          <Link to="/contact" className="block text-white hover:text-yellow-400" onClick={() => setIsOpen(false)}>Contact</Link>

          {/* Mobile Admin */}
          {!admin && (
            <Link
              to="/admin/login"
              className="block bg-pink-600 text-white px-4 py-2 rounded"
              onClick={() => setIsOpen(false)}
            >
              Admin Login
            </Link>
          )}

          {admin && (
            <div className="relative">
              <button
                onClick={() => setDropdownOpen(!dropdownOpen)}
                className="p-2 rounded-full bg-white shadow hover:bg-pink-100"
              >
                <FiUser size={24} />
              </button>

              {dropdownOpen && (
                <div className="absolute right-0 mt-2 w-40 bg-white border rounded shadow-lg flex flex-col">
                  <Link
                    to="/admin/upload"
                    className="flex items-center gap-2 px-4 py-2 hover:bg-pink-50"
                    onClick={() => { setDropdownOpen(false); setIsOpen(false); }}
                  >
                    <FiUpload /> Upload
                  </Link>
                  <button
                    onClick={() => { handleLogout(); setIsOpen(false); }}
                    className="flex items-center gap-2 px-4 py-2 hover:bg-pink-50 w-full text-left"
                  >
                    <FiLogOut /> Logout
                  </button>
                </div>
              )}
            </div>
          )}
          </div>
      )}
    </nav>
  );
}
