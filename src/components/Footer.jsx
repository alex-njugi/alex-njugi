import React from "react";
import { FaInstagram, FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-links">
        <a href="https://www.instagram.com/njugi_ak/" target="_blank" rel="noreferrer">
          <FaInstagram />
        </a>
        <a href="https://www.linkedin.com/in/alex-njugi-04521b367/" target="_blank" rel="noreferrer">
          <FaLinkedin />
        </a>
        <a href="https://github.com/alex-njugi" target="_blank" rel="noreferrer">
          <FaGithub />
        </a>
        <a href="mailto:alexnjugi11@gmail.com" target="_blank" rel="noreferrer">
          <FaEnvelope />
        </a>
      </div>
      <p className="footer-text">
        © {new Date().getFullYear()} Alex Njugi Karanja. All rights reserved.
      </p>
    </footer>
  );
}
