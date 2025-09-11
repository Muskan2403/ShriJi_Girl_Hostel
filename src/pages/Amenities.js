import {
  FaBath,
  FaBed,
  FaBook,
  FaBoxes,
  FaBroom,
  FaCouch,
  FaHotTub,
  FaSnowflake,
  FaTable,
  FaWheelchair,
  FaWifi,
  FaWindowMaximize
} from "react-icons/fa";

const amenitiesData = [
  {
    id: 1,
    name: "Wheel Chair",
    description: "Entrance and exit designed for accessibility",
    icon: <FaWheelchair className="text-yellow-500" size={40} />,
  },
  {
    id: 2,
    name: "WiFi",
    description: "High-speed internet throughout the hostel",
    icon: <FaWifi className="text-green-500" size={40} />,
  },
  {
    id: 3,
    name: "Side Table",
    description: "Convenient side table next to your bed",
    icon: <FaTable className="text-orange-500" size={40} />,
  },
  {
    id: 4,
    name: "Bed",
    description: "Comfortable and spacious beds for rest",
    icon: <FaBed className="text-pink-500" size={40} />,
  },
  {
    id: 5,
    name: "Curtains",
    description: "Privacy with well-fitted curtains",
    icon: <FaWindowMaximize className="text-purple-500" size={40} />,
  },
  {
    id: 6,
    name: "Windows",
    description: "Natural light and ventilation in every room",
    icon: <FaWindowMaximize className="text-indigo-500" size={40} />,
  },
  {
    id: 7,
    name: "Attached Washrooms",
    description: "Private and clean washrooms for each room",
    icon: <FaBath className="text-teal-500" size={40} />,
  },
  {
    id: 8,
    name: "Mattress",
    description: "High-quality mattresses for a comfortable sleep",
    icon: <FaCouch className="text-yellow-500" size={40} />,
  },
  {
    id: 9,
    name: "Storage Shelf",
    description: "Ample storage space for your belongings",
    icon: <FaBoxes className="text-rose-500" size={40} />,
  },
  {
    id: 10,
    name: "Study Table",
    description: "Well-lit study tables in rooms",
    icon: <FaBook className="text-cyan-500" size={40} />,
  },
  {
    id: 11,
    name: "Geyser",
    description: "Hot water available with geysers",
    icon: <FaHotTub className="text-red-500" size={40} />,
  },
  {
    id: 12,
    name: "Pillows",
    description: "Soft and clean pillows for comfort",
    // No FaPillow → using Bed icon again
    icon: <FaBed className="text-gray-600" size={40} />,
  },
  {
    id: 13,
    name: "Refrigerator",
    description: "Personal mini-fridge in each room",
    icon: <FaSnowflake className="text-sky-500" size={40} />,
  },
  {
    id: 14,
    name: "Room Cleaning Service",
    description: "Regular cleaning to keep your room tidy",
    icon: <FaBroom className="text-green-700" size={40} />,
  },
];

export default function Amenities() {
  return (
    <div className="min-h-screen bg-gradient-to-r from-pink-50 to-pink-100 ">
    <div className="max-w-7xl mx-auto px-4 py-16">
      <h1 className="text-4xl font-bold text-pink-600 mb-12 text-center">
        Our Amenities
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {amenitiesData.map((item) => (
          <div
            key={item.id}
            className="bg-white shadow-md rounded-lg p-6 hover:scale-105 transform transition duration-300 text-center"
          >
            <div className="flex justify-center mb-4">{item.icon}</div>
            <h2 className="text-2xl font-semibold text-black-600 mb-2">
              {item.name}
            </h2>
            <p className="text-gray-700">{item.description}</p>
          </div>
        ))}
      </div>
    </div>
    </div>
  );
}
