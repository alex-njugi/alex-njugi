import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { FaReact, FaJs, FaHtml5, FaCss3Alt, FaGitAlt, FaGithub, FaNodeJs, FaPython } from "react-icons/fa";
import { SiFlask } from "react-icons/si";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";

const techList = [
  { name: "React", icon: <FaReact /> },
  { name: "JavaScript", icon: <FaJs /> },
  { name: "HTML5", icon: <FaHtml5 /> },
  { name: "CSS3", icon: <FaCss3Alt /> },
  { name: "Git", icon: <FaGitAlt /> },
  { name: "GitHub", icon: <FaGithub /> },
  { name: "Node.js", icon: <FaNodeJs /> },
  { name: "Python", icon: <FaPython /> },
  { name: "Flask", icon: <SiFlask /> },
];

export default function Technologies() {
  return (
    <section id="technologies" className="technologies-section">
      <h2>Technologies</h2>
      <p className="tech-desc">Transforming ideas into reality using the magic of these tools.</p>
      <div className="tech-slider">
        <Swiper
          modules={[Navigation]}
          navigation
          spaceBetween={30}
          slidesPerView={3}
          breakpoints={{
            0: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 }
          }}
        >
          {techList.map((tech, index) => (
            <SwiperSlide key={index}>
              <div className="tech-card">
                <div className="tech-icon">{tech.icon}</div>
                <div className="tech-name">{tech.name}</div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
