import { useState } from "react";
import { toast } from "react-toastify";


export default function Booking() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    roomType: "Normal",
    seater: "1 Seater",
    date: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const scriptURL = process.env.REACT_APP_SCRIPT_URL;

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    console.log("Form submission started");
    toast.info("Submitting booking...");
    setIsSubmitting(true);
    
    try {
      // Method 1: Try with FormData (recommended for Google Apps Script)
      const formDataToSend = new FormData();
      formDataToSend.append('name', formData.name);
      formDataToSend.append('email', formData.email);
      formDataToSend.append('phone', formData.phone);
      formDataToSend.append('roomType', formData.roomType);
      formDataToSend.append('seater', formData.seater);
      formDataToSend.append('date', formData.date);

      console.log("Sending data to:", scriptURL);
      console.log("Data being sent:", {
        name: formData.name,
        email: formData.email,
        phone: formData.phone,
        roomType: formData.roomType,
        seater: formData.seater,
        date: formData.date
      });
      
      // Try without no-cors first to see the actual response
      const response = await fetch(scriptURL, {
        method: "POST",
        body: formDataToSend,
      });

      console.log("Response status:", response.status);
      console.log("Response ok:", response.ok);
      
      if (response.ok) {
        const result = await response.text();
        console.log("Response text:", result);
        
        try {
          const jsonResult = JSON.parse(result);
          if (jsonResult.result === 'success') {
            toast.success("Booking submitted successfully!");
            setFormData({
              name: "",
              email: "",
              phone: "",
              roomType: "Normal",
              seater: "1 Seater",
              date: "",
            });
          } else {
            toast.error("Error: " + (jsonResult.message || "Unknown error"));
          }
        } catch (parseError) {
          console.log("Could not parse response as JSON:", result);
          // If it's not JSON, assume success if status is ok
          toast.success("Booking submitted successfully!");
          setFormData({
            name: "",
            email: "",
            phone: "",
            roomType: "Normal",
            seater: "1 Seater",
            date: "",
          });
        }
      } else {
        toast.error("Server error: " + response.status);
      }
      
    } catch (error) {
      console.error("Submission error:", error);
      
      // If it's a CORS error, try with no-cors mode
      if (error.message.includes('CORS') || error.message.includes('cross-origin')) {
        console.log("CORS error detected, trying with no-cors mode...");
        
        try {
          const formDataToSend = new FormData();
          formDataToSend.append('name', formData.name);
          formDataToSend.append('email', formData.email);
          formDataToSend.append('phone', formData.phone);
          formDataToSend.append('roomType', formData.roomType);
          formDataToSend.append('seater', formData.seater);
          formDataToSend.append('date', formData.date);

          await fetch(scriptURL, {
            method: "POST",
            body: formDataToSend,
            mode: 'no-cors',
          });
          
          toast.success("Booking submitted successfully!");
          setFormData({
            name: "",
            email: "",
            phone: "",
            roomType: "Normal",
            seater: "1 Seater",
            date: "",
          });
        } catch (noCorsError) {
          console.error("No-cors error:", noCorsError);
          toast.error("Failed to submit booking. Please try again.");
        }
      } else {
        toast.error("Failed to submit booking: " + error.message);
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-pink-50 to-pink-100 flex items-center py-16">
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-stretch px-4">

        {/* Left Image */}
        <div className="lg:col-span-5 rounded-2xl overflow-hidden shadow-lg h-full">
          <img
            src="/images/booking/book1.webp"
            alt="Book Your Room"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Right Form */}
        <div className="lg:col-span-7 bg-white rounded-3xl shadow-2xl p-12 h-full flex flex-col justify-center">
          <h1 className="text-4xl font-bold text-pink-600 mb-8 text-center">Book Your Room</h1>
          <form className="space-y-6 flex-1 flex flex-col justify-center" onSubmit={handleSubmit}>
            <div>
              <label className="block font-semibold mb-2">Name
                <span className="text-red-500"> *</span>
              </label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                disabled={isSubmitting}
                className="w-full border border-gray-300 px-4 py-3 rounded-xl focus:outline-none focus:ring-2 focus:ring-pink-500 transition disabled:opacity-50"
              />
            </div>

            <div>
              <label className="block font-semibold mb-2">Email</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                disabled={isSubmitting}
                className="w-full border border-gray-300 px-4 py-3 rounded-xl focus:outline-none focus:ring-2 focus:ring-pink-500 transition disabled:opacity-50"
              />
            </div>

            <div>
              <label className="block font-semibold mb-2">Phone
                <span className="text-red-500"> *</span>

              </label>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                required
                disabled={isSubmitting}
                className="w-full border border-gray-300 px-4 py-3 rounded-xl focus:outline-none focus:ring-2 focus:ring-pink-500 transition disabled:opacity-50"
              />
            </div>

            <div>
              <label className="block font-semibold mb-2">Room Type</label>
              <select
                name="roomType"
                value={formData.roomType}
                onChange={handleChange}
                disabled={isSubmitting}
                className="w-full border border-gray-300 px-4 py-3 rounded-xl focus:outline-none focus:ring-2 focus:ring-pink-500 transition disabled:opacity-50"
              >
                <option>Normal</option>
                <option>Premium</option>
              </select>
            </div>

            <div>
              <label className="block font-semibold mb-2">Seater</label>
              <select
                name="seater"
                value={formData.seater}
                onChange={handleChange}
                disabled={isSubmitting}
                className="w-full border border-gray-300 px-4 py-3 rounded-xl focus:outline-none focus:ring-2 focus:ring-pink-500 transition disabled:opacity-50"
              >
                <option>1 Seater</option>
                <option>2 Seater</option>
                <option>3 Seater</option>
              </select>
            </div>

            <div>
              <label className="block font-semibold mb-2">Date
                <span className="text-red-500"> *</span>

              </label>
              <input
                type="date"
                name="date"
                value={formData.date}
                onChange={handleChange}
                required
                disabled={isSubmitting}
                className="w-full border border-gray-300 px-4 py-3 rounded-xl focus:outline-none focus:ring-2 focus:ring-pink-500 transition disabled:opacity-50"
              />
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-pink-600 text-white py-3 rounded-xl font-semibold hover:bg-pink-500 transition mt-4 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isSubmitting ? "Submitting..." : "Submit Booking"}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
