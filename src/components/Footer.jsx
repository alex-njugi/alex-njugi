import React from "react";
import { 
  FaLinkedin, 
  FaGithub, 
  FaEnvelope, 
  FaSquareWhatsapp 
} from "react-icons/fa6";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-links">
        <a 
          href="https://wa.me/254792814605" 
          target="_blank" 
          rel="noreferrer"
        >
          <FaSquareWhatsapp size={22} />
        </a>

        <a 
          href="https://www.linkedin.com/in/alex-njugi-04521b367/" 
          target="_blank" 
          rel="noreferrer"
        >
          <FaLinkedin size={22} />
        </a>

        <a 
          href="https://github.com/alex-njugi" 
          target="_blank" 
          rel="noreferrer"
        >
          <FaGithub size={22} />
        </a>

        <a 
          href="mailto:alexnjugi11@gmail.com" 
          target="_blank" 
          rel="noreferrer"
        >
          <FaEnvelope size={22} />
        </a>
      </div>

      <p className="footer-text">
        © {new Date().getFullYear()} Alex Njugi Karanja. All rights reserved.
      </p>
    </footer>
  );
}
