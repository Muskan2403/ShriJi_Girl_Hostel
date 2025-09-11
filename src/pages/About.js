export default function About() {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-800">

      {/* Hero Section */}
      <div className="relative h-[60vh] flex items-center justify-center">
        <img
          src="/images/about/about1.webp"
          alt="About Hostel"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/40"></div>
        <h1 className="relative text-4xl md:text-6xl font-bold text-white text-center px-4">
          About ShriJi Hostel
        </h1>
      </div>

      {/* Mission Section */}
      <div className="max-w-6xl mx-auto px-6 py-16">
        <div className="md:flex md:items-center md:gap-12">
          <div className="md:w-1/2">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 ">Our Mission</h2>
            <p className="text-gray-600 leading-relaxed mb-6">
              At ShriJi Hostel, we aim to provide a safe, friendly, and
              affordable living environment for students and young
              professionals. Comfort, security, and community are at the heart
              of everything we do.
            </p>
            <p className="text-gray-600 leading-relaxed">
              From cozy rooms to vibrant common areas, we focus on making your
              stay a memorable experience.
            </p>
          </div>
          <div className="md:w-1/2 mt-8 md:mt-0">
            <img
              src="/images/about/about5.webp"
              alt="Mission"
              className="rounded-2xl shadow-lg w-full hover:scale-105 transition duration-300"
            />
          </div>
        </div>
      </div>

      {/* Info Cards Section */}
      <div className="bg-gray-50 py-16">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-3 gap-8">

          {/* Card 1 */}
          <div className="relative group rounded-2xl overflow-hidden shadow-lg cursor-pointer">
            <img
              src="/images/about/about2.webp"
              alt="Safe & Secure"
              className="w-full h-64 object-cover rounded-2xl group-hover:scale-105 transition-transform duration-300"
            />
            <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center text-center px-4">
              <p className="text-white font-semibold">
                24/7 security, CCTV monitoring, and controlled entry ensure complete safety.
              </p>
            </div>
            <div className="absolute bottom-6 left-6">
              <h3 className="text-xl font-bold text-white">Safe & Secure</h3>
            </div>
          </div>

          {/* Card 2 */}
          <div className="relative group rounded-2xl overflow-hidden shadow-lg cursor-pointer">
            <img
              src="/images/about/about4.webp"
              alt="Affordable Pricing"
              className="w-full h-64 object-cover rounded-2xl group-hover:scale-105 transition-transform duration-300"
            />
            <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center text-center px-4">
              <p className="text-white font-semibold">
                Quality accommodations at budget-friendly rates for students.
              </p>
            </div>
            <div className="absolute bottom-6 left-6">
              <h3 className="text-xl font-bold text-white">Affordable Pricing</h3>
            </div>
          </div>

          {/* Card 3 */}
          <div className="relative group rounded-2xl overflow-hidden shadow-lg cursor-pointer">
            <img
              src="/images/about/about3.webp"
              alt="Community Living"
              className="w-full h-64 object-cover rounded-2xl group-hover:scale-105 transition-transform duration-300"
            />
            <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center text-center px-4">
              <p className="text-white font-semibold">
                Meet like-minded people and enjoy common spaces for socializing.
              </p>
            </div>
            <div className="absolute bottom-6 left-6">
              <h3 className="text-xl font-bold text-white">Community Living</h3>
            </div>
          </div>

        </div>
      </div>

      {/* Stats Section */}
      <div className="bg-gradient-to-r from-yellow-500 to-indigo-600 text-white py-16">
        <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          <div>
            <h3 className="text-4xl font-bold mb-2">10+</h3>
            <p className="text-lg">Rooms</p>
          </div>
          <div>
            <h3 className="text-4xl font-bold mb-2">50+</h3>
            <p className="text-lg">Happy Residents</p>
          </div>
          <div>
            <h3 className="text-4xl font-bold mb-2">24/7</h3>
            <p className="text-lg">Security</p>
          </div>
        </div>
      </div>

      {/* Testimonials Section */}
      <div className="max-w-6xl mx-auto px-6 py-16">
        <h2 className="text-3xl font-bold text-center mb-12">
          What Our Residents Say
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition duration-300">
            <p className="text-gray-600 mb-4">
              "My sister have been staying at Shriji Girls Hostel for quite some time and her experience has been wonderful. The food quality is top-notch, hygiene is maintained, and the staff is always ready to help. The atmosphere is positive and the hostel feels very safe."
            </p>
            <h4 className="font-bold">- Jayant Bhatija</h4>
          </div>
          <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition duration-300">
            <p className="text-gray-600 mb-4">
              "Living here since 4 years and my experience only got better with my Shriji family and the facilities and ambience got much better with time.
You can choose this without giving any single thought and best part of this is it's owners very supportive and caring."
            </p>
            <h4 className="font-bold">- Agrima Upadhyay</h4>
          </div>
          <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition duration-300">
            <p className="text-gray-600 mb-4">
              "One of the best girls’ hostels in Indore – known for its delicious food, strong security, and homely vibes. It also excels in facilities and healthcare support. My friend and I are staying here, and our experience has been excellent."
            </p>
            <h4 className="font-bold">- Gunjan Tiwari</h4>
          </div>
        </div>
      </div>
    </div>
  );
}
