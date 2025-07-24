import React from "react";

const projects = [
  {
    title: "Portfolio Website.",
    description: "My personal portfolio built with React and Flask, featuring animations and a contact form.",
    image: "/images/portfolio.png",
    github: "https://github.com/alex-njugi",
    live: "#"
  },
  {
    title: "Power of Compassion Foundation.",
    description: "A community-focused platform built to support charitable initiatives and donations.",
    image: "/images/power.png",
    github: "https://github.com/alex-njugi/the-power-of-compassion",
    live: "https://github.com/alex-njugi"
  },
  {
    title: "Talex Suppliers LTD.",
    description: "A modern business site for Talex Suppliers, focused on car accessories and product presentation.",
    image: "/images/talex.png",
    github: "https://github.com/alex-njugi",
    live: "https://talex-suppliers-ltd.vercel.app/"
  },
  {
    title: "REJA BEATS Music Player.",
    description: "A sleek and immersive music player platform, designed to showcase and stream music seamlessly.",
    image: "/images/reja.png",
    github: "https://github.com/alex-njugi",
    live: "https://reja-beats-music-player.vercel.app/"
  },
  {
    title: "Electro Mart.",
    description: "A modern e-commerce site for Electro Mart, focused on electronics sales, delivery, and product management.",
    image: "/images/electro.png",
    github: "https://github.com/alex-njugi",
    live: "https://electronics-shop-frontend.onrender.com/"
  },
  {
    title: "Firelands Most Wanted.",
    description: "A modern web platform for Fireland's Most Wanted, focused on tracking fugitives and enabling public crime reporting.",
    image: "/images/firelands.png",
    github: "https://github.com/alex-njugi",
    live: "https://end-of-phase1-project.vercel.app/"
  },
];

export default function Projects() {
  return (
    <section id="projects" className="projects-section">
      <div className="projects-container">
        <h2>Projects</h2>
        <div className="projects-grid">
          {projects.map((project, index) => (
            <div key={index} className="project-card" data-aos="fade-up">
              <img src={project.image} alt={project.title} className="project-image" />
              <div className="project-info">
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <div className="project-links">
                  <a href={project.live} target="_blank" rel="noreferrer">Live</a>
                  <a href={project.github} target="_blank" rel="noreferrer">GitHub</a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
