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
    title: "Talex Suppliers LTD.",
    description: "A modern business site for Talex Suppliers, focused on car accessories and product presentation.",
    image: "/images/talex.png",
    github: "https://github.com/alex-njugi",
    live: "https://talex-app.vercel.app/"
  },
  {
    title: "Leakars Court.",
    description: "An apartment-focused platform built to showcase residential units and property details.",
    image: "/images/leakars.png",
    github: "https://github.com/alex-njugi",
    live: "https://leakarscourt.co.ke/"
  },
  {
    title: "Lucy Muiruri.",
    description: "An artist-focused platform built to showcase gospel music, videos, events, and bookings.",
    image: "/images/lucy.png",
    github: "https://github.com/alex-njugi",
    live: "https://lucymuiruri.co.ke/"
  },
  {
    title: "REJA Beats Music Player.",
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
    live: "https://electro-mart-wine.vercel.app/"
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
        <div className="more-link-container">
          <a href="https://github.com/alex-njugi?tab=repositories" className="more-link">View More</a>
        </div>
      </div>
    </section>
  );
}
