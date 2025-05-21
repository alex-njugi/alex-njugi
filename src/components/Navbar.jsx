import React, { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";

export default function Navbar() {
  const location = useLocation();
  const navigate = useNavigate();
  const [activeSection, setActiveSection] = useState("hero");
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);
  const closeMenu = () => setMenuOpen(false);

  const handleSectionClick = (e, id) => {
    e.preventDefault();
    closeMenu();

    if (location.pathname !== "/") {
      navigate(`/#${id}`);
    } else {
      const section = document.getElementById(id);
      if (section) {
        section.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  useEffect(() => {
    if (location.pathname !== "/") return;

    const sectionIds = ["hero", "technologies", "projects", "about", "contact"];
    const sections = sectionIds.map(id => document.getElementById(id));

    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.6 }
    );

    sections.forEach(section => section && observer.observe(section));
    return () => sections.forEach(section => section && observer.unobserve(section));
  }, [location.pathname]);

  const navItems = [
    { id: "hero", label: "Home", type: "section" },
    { id: "technologies", label: "Technologies", type: "section" },
    { id: "projects", label: "Projects", type: "section" },
    { id: "about", label: "About", type: "section" },
    { id: "cv", label: "CV", type: "route" },
    { id: "contact", label: "Contact", type: "section" },
   
  ];

  return (
    <nav className="navbar">
      <div className="nav-logo">
        <a href="#hero" onClick={(e) => handleSectionClick(e, "hero")}>Alex</a>
      </div>

      <button className="hamburger" onClick={toggleMenu}>☰</button>

      <ul className={`nav-links ${menuOpen ? "open" : ""}`}>
        {navItems.map(item => (
          <li key={item.id}>
            {item.type === "route" ? (
              <Link
                to={`/${item.id}`}
                onClick={closeMenu}
                className={location.pathname === `/${item.id}` ? "active" : ""}
              >
                {item.label}
              </Link>
            ) : (
              <a
                href={`#${item.id}`}
                onClick={(e) => handleSectionClick(e, item.id)}
                className={
                  location.pathname === "/" && activeSection === item.id ? "active" : ""
                }
              >
                {item.label}
              </a>
            )}
          </li>
        ))}
      </ul>
    </nav>
  );
}
