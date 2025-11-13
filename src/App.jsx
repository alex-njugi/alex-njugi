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

// ✅ Scroll to top or hash on route change
function ScrollToTop() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (hash) {
      // Scroll to anchor if hash exists
      const target = document.querySelector(hash);
      if (target) {
        setTimeout(() => {
          target.scrollIntoView({ behavior: "smooth" });
        }, 100);
      }
    } else {
      // Scroll to top on route change
      window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
    }
  }, [pathname, hash]);

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
        <ScrollToTop /> {/* ✅ scrolls to top or hash on route change */}
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
