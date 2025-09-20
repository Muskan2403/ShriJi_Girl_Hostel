import { useState } from "react";

// Rooms data now only uses image paths from public folder
const roomsData = [
  {
    id: 1,
    name: "1 Seater",
    type: "Normal",
    price: 8500,
    images: [
      "/images/rooms/1room5.webp",
      "/images/rooms/1room1.webp",
      "/images/rooms/1room6.webp",
      "/images/rooms/1room2.webp",
      "/images/rooms/1room3.webp",
      "/images/rooms/1room7.webp",
      "/images/rooms/1room4.webp",
      "/images/rooms/1room8.webp",
    ],
  },
  {
    id: 2,
    name: "2 Seater",
    type: "Normal",
    price: 8000,
    images: [
      "/images/rooms/2room1.webp",
      "/images/rooms/2room4.webp",
      "/images/rooms/2room5.webp",
      "/images/rooms/N_Room1.webp",
      "/images/rooms/N_Room2.webp",
      "/images/rooms/N_Room3.webp",
      "/images/rooms/N_Room4.webp",
      "/images/rooms/N_Room5.webp",

    ],
  },
  {
    id: 3,
    name: "3 Seater",
    type: "Normal",
    price: 7500,
    images: [
      "/images/rooms/3room1.webp",
      "/images/rooms/3room2.webp",
      "/images/rooms/3room3.webp",
      "/images/rooms/3room4.webp",
      "/images/rooms/N3seater1.webp",
      "/images/rooms/N3seater2.webp",
      "/images/rooms/N3seater3.webp",
    ],
  },
  {
    id: 4,
    name: "4 Seater",
    type: "Normal",
    price: 7000,
    images: [
      "/images/rooms/4room1.webp",
      "/images/rooms/4room2.webp",
      "/images/rooms/4room4.webp",
      "/images/rooms/4room5.webp",
      "/images/rooms/4room3.webp",
      "/images/rooms/4room6.webp",
    ],
  },
  {
    id: 5,
    name: "2 Seater",
    type: "Premium",
    price: 14000,
    images: [
      "/images/rooms/P2room1.webp",
      "/images/rooms/P2room2.webp",
      "/images/rooms/P2room3.webp",
      "/images/rooms/P2room4.webp",
      "/images/rooms/P2room5.webp",
      "/images/rooms/P2room6.webp",
    ],
  },
  {
    id: 6,
    name: "3 Seater",
    type: "Premium",
    price: 8500,
    images: [
      "/images/rooms/P3seater1.webp",
      "/images/rooms/P3room1.webp",
      "/images/rooms/P3seater5.webp",
      "/images/rooms/P3room2.webp",
      "/images/rooms/P3seater2.webp",
      "/images/rooms/P3room3.webp",
      "/images/rooms/P3seater6.webp",
      "/images/rooms/P3room4.webp",
      "/images/rooms/P3seater3.webp",
      "/images/rooms/P3room5.webp",
      "/images/rooms/P3seater7.webp",
      "/images/rooms/P3seater4.webp",
      "/images/rooms/P3seater8.webp",
    ],
  },
];

export default function Rooms() {
  const [filter, setFilter] = useState("All");
  const [selectedRoom, setSelectedRoom] = useState(null);
  const [currentImage, setCurrentImage] = useState(0);

  const filteredRooms =
    filter === "All"
      ? roomsData
      : roomsData.filter((room) => room.type === filter);

  const nextImage = () => {
    if (!selectedRoom) return;
    setCurrentImage((prev) => (prev + 1) % selectedRoom.images.length);
  };

  const prevImage = () => {
    if (!selectedRoom) return;
    setCurrentImage(
      (prev) => (prev === 0 ? selectedRoom.images.length - 1 : prev - 1)
    );
  };

  const openRoom = (room) => {
    setSelectedRoom(room);
    setCurrentImage(0);
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-pink-50 to-pink-100">
      <div className="max-w-7xl mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold text-pink-600 mb-8 text-center">
          Our Rooms
        </h1>

        {/* Filters */}
        <div className="flex justify-center mb-8 space-x-4">
          {["All", "Normal", "Premium"].map((type) => (
            <button
              key={type}
              onClick={() => setFilter(type)}
              className={`px-4 py-2 rounded-md font-semibold ${
                filter === type
                  ? "bg-pink-600 text-white"
                  : "bg-gray-200 text-gray-700"
              }`}
            >
              {type}
            </button>
          ))}
        </div>

        {/* Rooms Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredRooms.map((room) => (
            <div
              key={room.id}
              className="bg-white shadow-md rounded-lg overflow-hidden cursor-pointer hover:shadow-xl transition duration-300"
            >
              <img
                src={room.images[0]}
                alt={room.name}
                className="w-full h-48 object-cover"
                loading="lazy"
                onClick={() => openRoom(room)}
              />
              <div className="p-6">
                <h2 className="text-2xl font-bold text-pink-600 mb-2">
                  {room.name}
                </h2>
                <p className="text-gray-700 mb-3">Type: {room.type}</p>
                <p className="text-gray-700 mb-4">Price: ₹{room.price}/month</p>
                <a
                  href="/booking"
                  className="block w-full text-center bg-pink-600 text-white px-4 py-2 rounded-md hover:bg-pink-500 transition"
                >
                  Book Now
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Room Slideshow Modal */}
        {selectedRoom && (
          <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50 p-4">
            <div className="bg-white rounded-lg max-w-4xl w-full p-4 relative overflow-auto">
              {/* Close Button */}
              <button
                onClick={() => setSelectedRoom(null)}
                className="absolute top-2 right-2 text-gray-700 font-bold text-2xl"
              >
                &times;
              </button>

              <h2 className="text-2xl font-bold text-pink-600 mb-4">
                {selectedRoom.name}
              </h2>

              <div className="relative flex justify-center items-center">
                {/* Image Counter */}
                <div className="absolute top-2 right-2 bg-black/50 text-white text-sm px-3 py-1 rounded-full z-10">
                  {currentImage + 1}/{selectedRoom.images.length}
                </div>

                {/* Room Image */}
                <img
                  src={selectedRoom.images[currentImage]}
                  alt={`${selectedRoom.name}-${currentImage}`}
                  className="w-full max-h-[80vh] object-contain rounded-lg"
                  loading="lazy"
                />

                {/* Navigation Arrows */}
                {selectedRoom.images.length > 1 && (
                  <>
                    <button
                      onClick={prevImage}
                      className="absolute left-2 text-white bg-black/50 px-2 py-1 rounded-full top-1/2 -translate-y-1/2 hover:bg-black/70"
                    >
                      &#10094;
                    </button>
                    <button
                      onClick={nextImage}
                      className="absolute right-2 text-white bg-black/50 px-2 py-1 rounded-full top-1/2 -translate-y-1/2 hover:bg-black/70"
                    >
                      &#10095;
                    </button>
                  </>
                )}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
