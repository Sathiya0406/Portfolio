import "./Hero.css";
import profile from "../../assets/profile.png";
import resume from "../../assets/Resume.pdf";

import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";

import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaArrowDown,
  FaDownload,
  FaPaperPlane,
} from "react-icons/fa";

function Hero() {
  return (
    <section id="home" className="hero">

      {/* Background Blur */}
      <div className="blur blur-one"></div>
      <div className="blur blur-two"></div>

      <div className="hero-container">

        {/* LEFT SIDE */}
        <motion.div
          className="hero-left"
          initial={{ opacity: 0, x: -80 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <p className="hero-greeting">👋 Hello, I'm</p>

          <h1>Sathiya Narayanan N</h1>

          <TypeAnimation
            sequence={[
              "Software Developer",
              2000,
              "AR/VR Developer",
              2000,
              "Creative Problem Solver",
              2000,
            ]}
            speed={45}
            repeat={Infinity}
            wrapper="span"
            className="typing"
          />

          <p className="hero-description">
            Passionate Software Developer with a strong interest in
            AR/VR technologies. I enjoy building modern, interactive
            applications and creating innovative solutions that solve
            real-world problems.
          </p>

          {/* Buttons */}
          <div className="hero-buttons">

            <a
              href={resume}
              download
              className="primary-btn"
            >
              <FaDownload />
              Download Resume
            </a>

            <a
              href="#contact"
              className="secondary-btn"
            >
              <FaPaperPlane />
              Contact Me
            </a>

          </div>

          {/* Social Icons */}
          <div className="social-icons">

            <a
              href="https://github.com/Sathiya0406"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
            >
              <FaGithub />
            </a>

            <a
              href="https://www.linkedin.com/in/sathiya-narayanan-nandagopal/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
            >
              <FaLinkedin />
            </a>

            <a
              href="mailto:sathiyanarayanansanjay@gmail.com"
              aria-label="Email"
            >
              <FaEnvelope />
            </a>

          </div>

        </motion.div>

        {/* RIGHT SIDE */}
        <motion.div
          className="hero-right"
          initial={{ opacity: 0, x: 80 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="profile-card">
            <img
              src={profile}
              alt="Sathiya Narayanan"
            />
          </div>
        </motion.div>

      </div>

      {/* Scroll Down */}
      <motion.a
        href="#about"
        className="scroll-down"
        animate={{ y: [0, 12, 0] }}
        transition={{
          repeat: Infinity,
          duration: 1.5,
        }}
      >
        <FaArrowDown />
      </motion.a>

    </section>
  );
}

export default Hero;