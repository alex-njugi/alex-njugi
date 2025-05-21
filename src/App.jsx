import React, { useEffect } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import Home from "./components/Home";
import CV from "./components/CV";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import MusicPlayer from "./components/MusicPlayer"; // ✅ Music player
import AOS from "aos";
import "aos/dist/aos.css";
import Lottie from "lottie-react";
import techBg from "./assets/tech-bg.json";

// ✅ Scroll to hash on route change
function ScrollToHash() {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const target = document.querySelector(location.hash);
      if (target) {
        setTimeout(() => {
          target.scrollIntoView({ behavior: "smooth" });
        }, 100);
      }
    }
  }, [location]);

  return null;
}

function App() {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <div className="animated-bg-wrapper">
      {/* Full-screen animated background */}
      <Lottie animationData={techBg} loop className="lottie-background" />

      <div className="page-content">
        <ScrollToHash />
        <Navbar />
        <MusicPlayer /> {/* ✅ floating music controller */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cv" element={<CV />} />
        </Routes>
        <Footer />
      </div>
    </div>
  );
}

export default App;
