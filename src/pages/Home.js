import { useEffect, useState } from "react";
import { FaBed, FaEnvelope, FaMapMarkerAlt, FaPhoneAlt, FaShieldAlt, FaUtensils, FaWifi } from "react-icons/fa";
import { Link } from "react-router-dom";


function Home() {
  const [showModal, setShowModal] = useState(false);
  const [showOffer, setShowOffer] = useState(false);

  useEffect(() => {
    setShowOffer(true);
  }, []);

  return (
    <div className="w-full">
      {/* 🎉 Offer Popup Modal */}
      {showOffer && (
    <div className="fixed inset-0 bg-black/40 flex justify-center items-center z-50">
    <div className="relative bg-white rounded-xl shadow-2xl max-w-md w-[90%] p-3">
      
      {/* Close Button */}
      <button
        onClick={() => setShowOffer(false)}
        className="absolute -top-2 -right-2 bg-black text-white rounded-full w-7 h-7 flex items-center justify-center font-bold hover:bg-red-600"
      >
        ✕
      </button>

      {/* Offer Image */}
      <a href="/rooms">
        <img
          src="/images/logo/Navratri.jpg"
          alt="Navratri Special Offer"
          className="w-full rounded-lg"
        />
      </a>
    </div>
  </div>
)}

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
          <div 
            onClick={() => window.location.href = "/rooms"}
          className="bg-white shadow-lg rounded-2xl p-6 flex flex-col items-center">
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
            <div 
            onClick={() => setShowModal(true)}
            className="bg-gradient-to-br from-pink-500 to-purple-600 p-8 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 hover:scale-105 text-white">
              <h3 className="text-xl font-semibold mb-3">Prime Location</h3>
              <p className="text-pink-100">Located near top universities & business hubs.</p>
            </div>
            <div 
            onClick={() => window.location.href = "/rooms"}
            className="bg-gradient-to-br from-yellow-500 to-orange-600 p-8 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 hover:scale-105 text-white">
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

      {/* Modal for Prime Location */}
{showModal && (
  <div className="fixed inset-0 bg-black/50 flex justify-center items-center z-50">
    <div className="bg-white max-w-3xl w-full p-6 rounded-xl shadow-lg overflow-y-auto max-h-[80vh] relative">
      
      {/* Close Cross */}
      <button
        onClick={() => setShowModal(false)}
        className="absolute top-3 right-3 text-gray-600 hover:text-black text-2xl font-bold"
      >
        ✕
      </button>

      {/* Coaching Centers */}
      <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
        📍 Nearby Coaching Centers & Institutes
      </h2>
      <ul className="space-y-3 text-gray-700 text-left">
        <li className="flex items-center gap-3">
          <img src="/images/logo/PW.webp" alt="PW Logo" className="w-6 h-6 object-contain" />
          PW Govt Exam Wallah Indore – Tirupati Heights, Vishnupuri
        </li>
        <li className="flex items-center gap-3">
          <img src="/images/logo/BT.webp" alt="Balaji Logo" className="w-6 h-6 object-contain" />
          Balaji Tutorials – 221, Veda Business Park, Bhawarkua
        </li>
        <li className="flex items-center gap-3">
          <img src="/images/logo/UC.webp" alt="Utkarsh Logo" className="w-6 h-6 object-contain" />
          Utkarsh Classes Indore – Harshdeep Arcade, Near Gurjar Hospital
        </li>
        <li className="flex items-center gap-3">
          <img src="/images/logo/PWV.webp" alt="PW Vidyapeeth Logo" className="w-6 h-6 object-contain" />
          Physics Wallah Vidyapeeth Indore – Block-7, Bhawarkua Main Road
        </li>
        <li className="flex items-center gap-3">
          <img src="/images/logo/TA.webp" alt="Tagore Logo" className="w-6 h-6 object-contain" />
          Tagore Academy – Sundaram Complex
        </li>
        {/* Continue the same for others */}
      </ul>

      {/* Beauty & Skill Institutes */}
      <h2 className="text-2xl font-bold mt-6 mb-4 flex items-center gap-2">
        📍 Beauty & Skill Institutes
      </h2>
      <ul className="space-y-3 text-gray-700 text-left">
        <li className="flex items-center gap-3">
          <img src="/images/logo/VLCC.webp" alt="VLCC Logo" className="w-6 h-6 object-contain" />
          VLCC School of Beauty – Snehnagar
        </li>
        <li className="flex items-center gap-3">
          <img src="/images/logo/Orane.webp" alt="Orane Logo" className="w-6 h-6 object-contain" />
          Orane International School of Beauty – Veda Business Park
        </li>
      </ul>

      {/* Colleges */}
      <h2 className="text-2xl font-bold mt-6 mb-4 flex items-center gap-2">
        📍 Colleges & Universities
      </h2>
      <ul className="space-y-3 text-gray-700 text-left">
        <li className="flex items-center gap-3">
          <img src="/images/logo/Atal.webp" alt="ABV College Logo" className="w-6 h-6 object-contain" />
          Shri Atal Bihari Vajpayee Govt Arts & Commerce College – Bhawarkua
        </li>
        <li className="flex items-center gap-3">
          <img src="/images/logo/DAVV.webp" alt="DAVV Logo" className="w-6 h-6 object-contain" />
          Devi Ahilya Vishwavidyalaya (DAVV University) – Indore
        </li>
      </ul>
    </div>
  </div>
)}


      {/* Gallery Section */}
      <section className="py-12 bg-gray-100">
  <div className="max-w-6xl mx-auto px-4">
    <h2 className="text-2xl font-bold text-center mb-6">A Glimpse of Our Hostel</h2>
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
      <img
        className="w-full h-48 md:h-60 lg:h-64 rounded-lg shadow-md object-cover"
        src="/images/logo/Office2.webp"
        alt="Office 1"
      />
      <img
        className="w-full h-48 md:h-60 lg:h-64 rounded-lg shadow-md object-cover"
        src="/images/logo/Office3.webp"
        alt="Office 2"
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
    <div className="flex gap-3 items-center">
    <FaPhoneAlt className="text-2xl text-yellow-200" />
    <div className="flex flex-col leading-tight">
      <span>+91 8109794360</span>
      <span>+91 7049747730</span>
    </div>
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
