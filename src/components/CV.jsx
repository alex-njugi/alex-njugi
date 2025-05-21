import React from "react";

export default function CV() {
  return (
    <section className="cv-section">
      <div className="cv-hero" data-aos="fade-up">
        <h2>Curriculum Vitae</h2>
        <p className="cv-intro">
          Get to know my background, skills, and experience. You can download or view my CV using the buttons below.
        </p>
        <div className="cv-buttons">
          <a href="/docs/Alex-Njugi-CV.pdf" download className="cv-button">
            📥 Download CV
          </a>
          <a href="/docs/Alex-Njugi-CV.pdf" target="_blank" rel="noopener noreferrer" className="cv-button secondary">
            👁️ View CV
          </a>
        </div>
      </div>

      <div className="cv-preview" data-aos="fade-up" data-aos-delay="200">
        <h3>Overview</h3>
        <ul className="cv-timeline">
          <li>
            <strong>Education</strong>
            <p>BSc Applied Computer Technology, USIU-A (Ongoing)</p>
            <p>Moringa School — Full-Stack Software Development</p>
          </li>
          <li>
            <strong>Experience</strong>
            <p>Freelance Developer — Portfolio projects, client work (React, Flask, Node)</p>
          </li>
          <li>
            <strong>Technologies</strong>
            <p>React, JavaScript, HTML5, CSS3, Node.js, Python, Flask, Git, GitHub, VS Code</p>
          </li>
          <li>
            <strong>Certifications & Training</strong>
            <p>Soft Skills Training (AMI), Git/GitHub certification, Project Deployment</p>
          </li>
        </ul>
      </div>
    </section>
  );
}
