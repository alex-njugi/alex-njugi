import React from "react";

const projects = [
  {
    title: "Portfolio Website.",
    description: "My personal portfolio built with React and Flask, featuring animations and a contact form.",
    image: "/images/portfolio.png",
    github: "https://github.com/alex-njugi/alex-njugi",
    live: "#"
  },
  {
    title: "Power of Compassion Foundation.",
    description: "A community-focused platform built to support charitable initiatives and donations.",
    image: "/images/power.png",
    github: "https://github.com/alex-njugi/the-power-of-compassion",
    live: "https://the-power-of-compassion.vercel.app/"
  },
  {
    title: "Talex Suppliers LTD.",
    description: "A modern business site for Talex Suppliers, focused on car accessories and product presentation.",
    image: "/images/talex.png",
    github: "https://github.com/alex-njugi/talex-suppliers-ltd",
    live: "https://talex-suppliers-ltd.vercel.app/"
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
