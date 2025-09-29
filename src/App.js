import { onAuthStateChanged } from "firebase/auth";
import { useEffect, useState } from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import { ToastContainer } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";
import AdminLogin from "./components/AdminLogin";
import Navbar from "./components/Navbar";
import UploadImage from "./components/UploadImage";
import { auth } from "./firebase"; // your firebase config
import About from "./pages/About";
import Amenities from "./pages/Amenities";
import Booking from "./pages/Booking";
import Contact from "./pages/Contact";
import Gallery from "./pages/Gallery";
import Home from "./pages/Home";
import Rooms from "./pages/Rooms";

function App() {
  const [admin, setAdmin] = useState(null);

    useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setAdmin(user);
    });
    return () => unsubscribe();
  }, []);

  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/admin/login" element={<AdminLogin />} />
        <Route path="/about" element={<About />} />
        <Route path="/rooms" element={<Rooms isAdmin={!!admin} />} />
        <Route path="/amenities" element={<Amenities />} />
        <Route path="/gallery" element={<Gallery isAdmin={admin} />} />
        <Route path="/admin/upload" element={<UploadImage />} />
        <Route path="/booking" element={<Booking />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>

      <ToastContainer 
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        pauseOnHover
        draggable
        pauseOnFocusLoss
      />
    </Router>
    
  );
  
}

export default App;
