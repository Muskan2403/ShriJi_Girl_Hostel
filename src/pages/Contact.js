import { useState } from "react";
import { FaEnvelope, FaMapMarkerAlt, FaPhoneAlt } from "react-icons/fa";
import { toast } from "react-toastify";
import contact from "../assets/contact/contact1.jpg";

const contactData = [
  {
    id: 1,
    name: "Call Us",
    info: "+91 7942682950",
    icon: <FaPhoneAlt className="text-4xl text-yellow-500 mb-3" />,
  },
  {
    id: 2,
    name: "Email",
    info: "shrijigirlhostel@gmail.com",
    icon: <FaEnvelope className="text-4xl text-blue-500 mb-3" />,
  },
  {
    id: 3,
    name: "Location",
    info: "Ashok Nagar, BhawarKuan Main Road, Bhawar Kuan, Indore-452001",
    icon: <FaMapMarkerAlt className="text-4xl text-red-500 mb-3" />,
  },
];

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const scriptURL = process.env.REACT_APP_SCRIPT_URL;

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    console.log("Contact form submission started");
    toast.info("Sending message...");
    setIsSubmitting(true);

    try {
      // Use FormData for better compatibility with Google Apps Script
      const formDataToSend = new FormData();
      formDataToSend.append('name', formData.name);
      formDataToSend.append('email', formData.email);
      formDataToSend.append('subject', formData.subject);
      formDataToSend.append('message', formData.message);

      console.log("Sending data to:", scriptURL);
      console.log("Data being sent:", {
        name: formData.name,
        email: formData.email,
        subject: formData.subject,
        message: formData.message
      });
      
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
          if (jsonResult.result === 'success' && jsonResult.type === 'contact') {
            toast.success("Message sent successfully!");
            setFormData({ name: "", email: "", subject: "", message: "" });
          } else {
            toast.error("Error: " + (jsonResult.message || "Unknown error"));
          }
        } catch (parseError) {
          console.log("Could not parse response as JSON:", result);
          // If it's not JSON, assume success if status is ok
          toast.success("Message sent successfully!");
          setFormData({ name: "", email: "", subject: "", message: "" });
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
          formDataToSend.append('subject', formData.subject);
          formDataToSend.append('message', formData.message);

          await fetch(scriptURL, {
            method: "POST",
            body: formDataToSend,
            mode: 'no-cors',
          });
          
          toast.success("Message sent successfully!");
          setFormData({ name: "", email: "", subject: "", message: "" });
        } catch (noCorsError) {
          console.error("No-cors error:", noCorsError);
          toast.error("Failed to send message. Please try again.");
        }
      } else {
        toast.error("Failed to send message: " + error.message);
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 text-gray-800">
      {/* Hero Section */}
      <div className="relative h-[40vh] flex items-center justify-center">
        <img
          src={contact}
          alt="Contact"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/40"></div>
        <h1 className="relative text-4xl md:text-6xl font-bold text-white text-center px-4">
          Contact Us
        </h1>
      </div>

      {/* Contact Cards Section */}
      <section className="py-12">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 px-4">
          {contactData.map((item) => (
            <div
              key={item.id}
              className="bg-white shadow-lg rounded-2xl p-6 flex flex-col items-center text-center hover:scale-105 transform transition duration-300"
            >
              {item.icon}
              <h3 className="font-bold text-lg">{item.name}</h3>
              <p className="text-gray-600 text-sm">{item.info}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Form & Map Side by Side */}
      <section className="py-12 bg-white">
        <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Contact Form */}
          <div>
            <h2 className="text-3xl font-bold text-pink-600 mb-8 text-center lg:text-left">
              Send Us a Message
            </h2>
            <form className="grid grid-cols-1 gap-6" onSubmit={handleSubmit}>
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                value={formData.name}
                onChange={handleChange}
                disabled={isSubmitting}
                className="border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-pink-600 transition disabled:opacity-50"
                required
              />
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                value={formData.email}
                onChange={handleChange}
                disabled={isSubmitting}
                className="border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-pink-600 transition disabled:opacity-50"
                required
              />
              <input
                type="text"
                name="subject"
                placeholder="Subject"
                value={formData.subject}
                onChange={handleChange}
                disabled={isSubmitting}
                className="border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-pink-600 transition disabled:opacity-50"
              />
              <textarea
                name="message"
                placeholder="Your Message"
                rows="5"
                value={formData.message}
                onChange={handleChange}
                disabled={isSubmitting}
                className="border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-pink-600 transition disabled:opacity-50"
                required
              ></textarea>
              <button
                type="submit"
                disabled={isSubmitting}
                className="bg-pink-600 text-white font-semibold rounded-lg px-6 py-3 hover:bg-pink-500 transition disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? "Sending..." : "Send Message"}
              </button>
            </form>
          </div>

          {/* Map */}
          <div>
            <h2 className="text-3xl font-bold text-pink-600 mb-6 text-center lg:text-left">
              Our Location
            </h2>
            <div className="w-full h-96 rounded-2xl overflow-hidden shadow-lg">
              <iframe
                title="ShriJi Girls Hostel Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3683.872506794114!2d75.86296767507498!3d22.69556577940909!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3962fd4a59bb9ae7%3A0xb31ff590905fa486!2sShri%20Ji%20Girls%20Hostel%20Indore!5e0!3m2!1sen!2sin!4v1693833989872!5m2!1sen!2sin"
                className="w-full h-full border-0"
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
