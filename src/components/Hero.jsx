import React from "react";
import { Typewriter } from "react-simple-typewriter";
import Lottie from "lottie-react";
import devAnimation from "../assets/dev.json"; // make sure this file exists!

export default function Hero() {
  return (
    <section id="hero" className="hero-section" data-aos="fade-up">
      <div className="hero-content">
        <div className="hero-text" data-aos="fade-right">
          <h1 className="hero-title">
            Hi, I'm Alex .
            <br />{" "}
            <span className="highlight">
              <Typewriter
                words={["A Software Engineer.", "A Full-Stack Developer .", "A Web Developer ."]}
                loop={true}
                cursor
                cursorStyle="|"
                typeSpeed={100}
                deleteSpeed={80}
                delaySpeed={2000}
              />
            </span>
          </h1>
          <p className="hero-subtitle">Crafting beautiful, responsive experiences on the web.</p>
          <a href="#contact" className="cta-button" data-aos="zoom-in">
            Let's Connect
          </a>
        </div>

        <div className="hero-animation" data-aos="fade-left">
          <Lottie animationData={devAnimation} loop={true} />
        </div>
      </div>

      <div className="scroll-down">
        <a href="#technologies">↓</a>
      </div>
    </section>
  );
}
