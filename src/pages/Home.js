import { FaBed, FaEnvelope, FaMapMarkerAlt, FaPhoneAlt, FaShieldAlt, FaUtensils, FaWifi } from "react-icons/fa";
import { Link } from "react-router-dom";


function Home() {
  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="relative bg-cover bg-center h-[80vh]" style={{ backgroundImage: `url(/images/logo/home1.webp)` }}>
        <div className="absolute inset-0 bg-black/50 flex flex-col items-center justify-center text-center text-white px-4">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">Welcome to ShriJi Girls Hostel Indore</h1>
          <p className="text-lg md:text-2xl mb-6">Comfortable, Affordable, and Modern Living Spaces</p>
          <Link to="/booking" className="bg-gradient-to-r from-yellow-500 to-orange-600 text-white px-6 py-3 rounded-full font-semibold hover:from-yellow-600 hover:to-orange-700 transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl">
            Book Your Stay
          </Link>
        </div>
      </section>

      {/* Highlights Section */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-6 px-4">
          <div className="bg-white shadow-lg rounded-2xl p-6 flex flex-col items-center">
            <FaBed className="text-4xl text-yellow-500 mb-3" />
            <h3 className="font-bold text-lg">Fully Furnished Rooms</h3>
            <p className="text-gray-600 text-sm text-center">Spacious and cozy rooms designed for comfort.</p>
          </div>
          <div className="bg-white shadow-lg rounded-2xl p-6 flex flex-col items-center">
            <FaWifi className="text-4xl text-blue-500 mb-3" />
            <h3 className="font-bold text-lg">Free High-Speed WiFi</h3>
            <p className="text-gray-600 text-sm text-center">Stay connected 24/7 with reliable internet.</p>
          </div>
          <div className="bg-white shadow-lg rounded-2xl p-6 flex flex-col items-center">
            <FaUtensils className="text-4xl text-green-500 mb-3" />
            <h3 className="font-bold text-lg">Delicious Food</h3>
            <p className="text-gray-600 text-sm text-center">Nutritious and tasty meals served daily.</p>
          </div>
          <div className="bg-white shadow-lg rounded-2xl p-6 flex flex-col items-center">
            <FaShieldAlt className="text-4xl text-red-500 mb-3" />
            <h3 className="font-bold text-lg">Safe & Secure</h3>
            <p className="text-gray-600 text-sm text-center">24x7 security to ensure your safety.</p>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Why Choose ShriJi Girls Hostel?</h2>
          <p className="text-gray-600 mb-12">We provide the best facilities for students and working professionals.</p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-gradient-to-br from-pink-500 to-purple-600 p-8 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 hover:scale-105 text-white">
              <h3 className="text-xl font-semibold mb-3">Prime Location</h3>
              <p className="text-pink-100">Located near top universities & business hubs.</p>
            </div>
            <div className="bg-gradient-to-br from-yellow-500 to-orange-600 p-8 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 hover:scale-105 text-white">
              <h3 className="text-xl font-semibold mb-3">Affordable Pricing</h3>
              <p className="text-yellow-100">Quality living at pocket-friendly prices.</p>
            </div>
            <div className="bg-gradient-to-br from-blue-500 to-indigo-600 p-8 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 hover:scale-105 text-white">
              <h3 className="text-xl font-semibold mb-3">Community Living</h3>
              <p className="text-blue-100">Meet like-minded people and grow together.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-12 bg-gray-100">
  <div className="max-w-6xl mx-auto px-4">
    <h2 className="text-2xl font-bold text-center mb-6">A Glimpse of Our Hostel</h2>
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
      <img
        className="w-full h-48 md:h-60 lg:h-64 rounded-lg shadow-md object-cover"
        src="/images/rooms/P2room1.webp"
        alt="Room 1"
      />
      <img
        className="w-full h-48 md:h-60 lg:h-64 rounded-lg shadow-md object-cover"
        src="/images/rooms/P3room1.webp"
        alt="Room 2"
      />
      <img
        className="w-full h-48 md:h-60 lg:h-64 rounded-lg shadow-md object-cover"
        src="/images/gallery/gallery3.webp"
        alt="Gallery 1"
      />
      <img
        className="w-full h-48 md:h-60 lg:h-64 rounded-lg shadow-md object-cover"
        src="/images/gallery/gallery2.webp"
        alt="Gallery 2"
      />
    </div>
  </div>
</section>

      {/* CTA Section */}
<section className="py-16 bg-gradient-to-r from-yellow-500 to-orange-600 text-center">
  <h2 className="text-3xl font-bold mb-4 text-black">Ready to Move In?</h2>
  <p className="text-lg mb-6 text-yellow-100">
    Book your hostel room today and start your journey with comfort.
  </p>

  {/* Book Now Button */}
  <Link
    to="/booking"
    className="bg-black text-white px-8 py-3 rounded-full font-semibold hover:bg-gray-800 transition"
  >
    Book Now
  </Link>

  {/* Contact Info */}
  <div className="mt-12 flex flex-col md:flex-row justify-center gap-10 text-white text-lg font-medium">
    <div className="flex items-center gap-2">
      <FaPhoneAlt className="text-xl text-yellow-200" />
      <span>+91 7942682950</span>
    </div>
    <div className="flex items-center gap-2">
      <FaEnvelope className="text-xl text-yellow-200" />
      <span>shrijigirlhostel@gmail.com</span>
    </div>
    <div className="flex items-center gap-2">
      <FaMapMarkerAlt className="text-xl text-yellow-200" />
      <span>Ashok Nagar, BhawarKuan Main Road, Indore</span>
    </div>
  </div>
</section>

    </div>
  );
}

export default Home;
