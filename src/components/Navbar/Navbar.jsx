import "./Navbar.css";
import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  return (
    <nav className="navbar">
      <div className="container">

        <div className="logo">
          <h2>Sathiya Narayanan N</h2>
        </div>

        <ul className={menuOpen ? "nav-links active" : "nav-links"}>

          <li><a href="#about" onClick={closeMenu}>About</a></li>

          <li><a href="#skills" onClick={closeMenu}>Skills</a></li>

          <li><a href="#projects" onClick={closeMenu}>Projects</a></li>

          <li><a href="#experience" onClick={closeMenu}>Experience</a></li>

          <li><a href="#contact" onClick={closeMenu}>Contact</a></li>

          <li>
            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="resume-mobile"
              onClick={closeMenu}
            >
              Resume
            </a>
          </li>

        </ul>

        <a
          href="/resume.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="resume-btn"
        >
          Resume
        </a>

        <div
          className="menu-icon"
          onClick={() => setMenuOpen((prev) => !prev)}
        >
          {menuOpen ? <FaTimes /> : <FaBars />}
        </div>

      </div>
    </nav>
  );
}

export default Navbar;