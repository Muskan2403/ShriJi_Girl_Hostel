import { useState, useEffect } from "react";
import { db } from "../firebase";
import { ref, onValue, push, update } from "firebase/database";
import { Link } from "react-router-dom";
export default function Rooms({ isAdmin }) {
  const [roomsData, setRoomsData] = useState([]);
  const [filter, setFilter] = useState("All");
  const [selectedRoom, setSelectedRoom] = useState(null);
  const [currentImage, setCurrentImage] = useState(0);
  const [fileMap, setFileMap] = useState({});
  const [uploadingMap, setUploadingMap] = useState({});

  useEffect(() => {
    const roomsRef = ref(db, "rooms");
    onValue(roomsRef, (snapshot) => {
      const data = snapshot.val();
      if (data) {
        const formattedRooms = Object.entries(data).map(([id, room]) => {
          // Normalize images
          const imagesArray = [];
          if (room.images) {
            Object.values(room.images).forEach((img) => {
              if (!img) return;
              if (typeof img === "string") imagesArray.push({ url: img });
              else if (img.url) imagesArray.push({ url: img.url });
            });
          }

          return {
            id,
            name: room.name,
            type: room.type,
            price: room.price,
            images: imagesArray,
          };
        });
        setRoomsData(formattedRooms);
      }
    });
  }, []);

  const handleUpload = async (roomId) => {
    const file = fileMap[roomId];
    if (!file) return alert("Select a file first");
    setUploadingMap((prev) => ({ ...prev, [roomId]: true }));

    try {
      const formData = new FormData();
      formData.append("file", file);
      formData.append("upload_preset", process.env.REACT_APP_CLOUDINARY_UPLOAD_PRESET);

      const res = await fetch(
        `https://api.cloudinary.com/v1_1/${process.env.REACT_APP_CLOUDINARY_CLOUD_NAME}/image/upload`,
        { method: "POST", body: formData }
      );
      const data = await res.json();

      const roomImagesRef = ref(db, `rooms/${roomId}/images`);
      const newImgRef = push(roomImagesRef);
      await update(newImgRef, { url: data.secure_url });

      setRoomsData((prev) =>
        prev.map((room) =>
          room.id === roomId
            ? { ...room, images: [...room.images, { key: newImgRef.key, url: data.secure_url }] }
            : room
        )
      );
      setFileMap((prev) => ({ ...prev, [roomId]: null }));
    } catch (err) {
      console.error(err);
      alert("Upload failed");
    } finally {
      setUploadingMap((prev) => ({ ...prev, [roomId]: false }));
    }
  };

  const openRoom = (room) => {
    setSelectedRoom(room);
    setCurrentImage(0);
  };

  const nextImage = () => {
    if (!selectedRoom) return;
    setCurrentImage((prev) => (prev + 1) % selectedRoom.images.length);
  };

  const prevImage = () => {
    if (!selectedRoom) return;
    setCurrentImage((prev) => (prev === 0 ? selectedRoom.images.length - 1 : prev - 1));
  };

  const filteredRooms = filter === "All"
    ? roomsData
    : roomsData.filter((room) => room.type === filter);

  return (
    <div className="min-h-screen bg-gradient-to-r from-pink-50 to-pink-100">
      <div className="max-w-7xl mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold text-pink-600 mb-8 text-center">Our Rooms</h1>

        <div className="flex justify-center mb-8 space-x-4">
          {["All", "Normal", "Premium"].map((type) => (
            <button
              key={type}
              onClick={() => setFilter(type)}
              className={`px-4 py-2 rounded-md font-semibold ${filter === type ? "bg-pink-600 text-white" : "bg-gray-200 text-gray-700"}`}
            >
              {type}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredRooms.map((room) => (
            <div key={room.id} className="bg-white shadow-md rounded-lg overflow-hidden hover:shadow-xl transition duration-300">
              <img
                src={room.images[0]?.url || "/images/rooms/placeholder.webp"}
                alt={room.name}
                className="w-full h-48 object-cover cursor-pointer"
                onClick={() => openRoom(room)}
              />
              <div className="p-6">
                <h2 className="text-2xl font-bold text-pink-600 mb-2">{room.name}</h2>
                <p className="text-gray-700 mb-3">Type: {room.type}</p>
                <p className="text-gray-700 mb-4">Price: ₹{room.price}/month</p>

                <Link
                to="/booking"
                className="block w-full text-center bg-pink-600 text-white px-4 py-2 rounded-md hover:bg-pink-500 transition">
                Book Now
                </Link>

                {isAdmin && (
                  <div className="mt-2 flex flex-col space-y-2">
                    <input
                      type="file"
                      onChange={(e) => setFileMap(prev => ({ ...prev, [room.id]: e.target.files[0] }))}
                      className="w-full"
                    />
                    <button
                      onClick={() => handleUpload(room.id)}
                      disabled={!fileMap[room.id] || uploadingMap[room.id]}
                      className="px-4 py-2 bg-pink-600 text-white rounded hover:bg-pink-500 w-full"
                    >
                      {uploadingMap[room.id] ? "Uploading..." : "Upload Image"}
                    </button>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>

        {selectedRoom && selectedRoom.images.length > 0 && (
          <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50 p-4">
            <div className="bg-white rounded-lg max-w-4xl w-full p-4 relative">
              <button onClick={() => setSelectedRoom(null)} className="absolute top-2 right-2 text-gray-700 font-bold text-2xl">&times;</button>
              <h2 className="text-2xl font-bold text-pink-600 mb-4">{selectedRoom.name}</h2>

              <div className="relative flex justify-center items-center">
                <div className="absolute top-2 right-2 bg-black/50 text-white text-sm px-3 py-1 rounded-full z-10">
                  {currentImage + 1}/{selectedRoom.images.length}
                </div>
                <img
                  src={selectedRoom.images[currentImage]?.url || "/images/rooms/placeholder.webp"}
                  alt={`${selectedRoom.name}-${currentImage}`}
                  className="w-full max-h-[80vh] object-contain rounded-lg"
                />
                {selectedRoom.images.length > 1 && (
                  <>
                    <button onClick={prevImage} className="absolute left-2 text-white bg-black/50 px-2 py-1 rounded-full top-1/2 -translate-y-1/2 hover:bg-black/70">&#10094;</button>
                    <button onClick={nextImage} className="absolute right-2 text-white bg-black/50 px-2 py-1 rounded-full top-1/2 -translate-y-1/2 hover:bg-black/70">&#10095;</button>
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



