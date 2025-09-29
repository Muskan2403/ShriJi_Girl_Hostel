import { push, ref } from "firebase/database";
import { useState } from "react";
import { db } from "../firebase";

export default function UploadImage() {
  const [file, setFile] = useState(null);
  const [preview, setPreview] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleFileChange = (e) => {
    const selected = e.target.files[0];
    setFile(selected);
    setPreview(URL.createObjectURL(selected));
  };

  const handleUpload = async () => {
    if (!file) return alert("Select an image first");
    setLoading(true);

    const formData = new FormData();
    formData.append("file", file);
    formData.append("upload_preset", process.env.REACT_APP_CLOUDINARY_UPLOAD_PRESET);

    try {
      const res = await fetch(
        `https://api.cloudinary.com/v1_1/${process.env.REACT_APP_CLOUDINARY_CLOUD_NAME}/image/upload`,
        { method: "POST", body: formData }
      );
      const data = await res.json();

      // Save URL to Realtime Database
      const imagesRef = ref(db, "galleryImages");
      push(imagesRef, { url: data.secure_url, title: "Uploaded Image" });

      alert("Image uploaded and saved!");
      setFile(null);
      setPreview(null);
    } catch (err) {
      console.error(err);
      alert("Upload failed");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-pink-50 to-pink-100 p-4">
      <div className="bg-white rounded-xl shadow-lg p-8 w-full max-w-md">
        <h2 className="text-2xl font-bold text-pink-600 mb-6 text-center">Upload Image</h2>

        <div className="flex flex-col items-center space-y-4">
          {preview ? (
            <img
              src={preview}
              alt="Preview"
              className="w-64 h-64 object-cover rounded-lg border border-gray-300 shadow"
            />
          ) : (
            <div className="w-64 h-64 flex items-center justify-center bg-gray-100 rounded-lg border border-dashed border-gray-300">
              <p className="text-gray-400">Image Preview</p>
            </div>
          )}

          <input
            type="file"
            accept="image/*"
            capture="environment"
            onChange={handleFileChange}
            className="w-full text-gray-700"
          />

          <button
            onClick={handleUpload}
            disabled={loading}
            className="w-full bg-pink-600 text-white py-2 rounded-lg font-semibold hover:bg-pink-700 transition-colors disabled:bg-pink-300"
          >
            {loading ? "Uploading..." : "Upload"}
          </button>
        </div>
      </div>
    </div>
  );
}