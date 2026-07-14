import "./Footer.css";
import { FaGithub, FaLinkedin, FaArrowUp } from "react-icons/fa";

function Footer() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer className="footer">

      <div className="footer-content">

        <h2>Sathiya Narayanan N</h2>

        <p>
          AR/VR Developer • Unity Developer • Frontend Enthusiast
        </p>

        <div className="footer-socials">

          <a
            href="https://github.com/Sathiya0406"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub />
          </a>

          <a
            href="https://www.linkedin.com/in/sathiya-narayanan-nandagopal"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin />
          </a>

        </div>

        <button
          className="scroll-top"
          onClick={scrollToTop}
        >
          <FaArrowUp />
        </button>

        <p className="copyright">
          © {new Date().getFullYear()} Sathiya Narayanan N. All Rights Reserved.
        </p>

      </div>

    </footer>
  );
}

export default Footer;