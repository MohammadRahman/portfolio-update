import { useState } from "react";
import './nav-bar.styles.scss';

const Navbar = () => {
   const [activeSection, setActiveSection] = useState("about");

   const handleSectionClick = (section: string) => {
     setActiveSection(section);
    //  e.stopPropagation();
     const element = document.getElementById(section);
     element?.scrollIntoView({ behavior: "smooth" });
   };
const handleSectionHover = (section:string) => {
  setActiveSection(section);
  // e.stopPropagation();
};
  return (
    <nav className="navigation">
      <div className="navigation__options">
        <div
          className={`navigation__option ${
            activeSection === "about" ? "active" : ""
          }`}
          onClick={() => handleSectionClick("about")}
          onMouseEnter={() => handleSectionHover("about")}
        >
          <div className="navigation__line" />
          <span>About</span>
        </div>
        <div
          className={`navigation__option ${
            activeSection === "experience" ? "active" : ""
          }`}
          onClick={() => handleSectionClick("experience")}
          onMouseEnter={() => handleSectionHover("experience")}
        >
          <div className="navigation__line" />
          <span>Experience</span>
        </div>
        <div
          className={`navigation__option ${
            activeSection === "projects" ? "active" : ""
          }`}
          onClick={() => handleSectionClick("projects")}
          onMouseEnter={() => handleSectionHover("projects")}
        >
          <div className="navigation__line" />
          <span>Projects</span>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
