import "./Contact.css";
import { toast } from "react-toastify";
import { Oval } from "react-loader-spinner";
import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { motion } from "framer-motion";
import {
  FaEnvelope,
  FaPhone,
  FaLinkedin,
  FaGithub,
  FaMapMarkerAlt,
} from "react-icons/fa";

function Contact() {
  const form = useRef();

  const [sending, setSending] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    setSending(true);

    emailjs
      .sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        form.current,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      )
      .then(() => {
        toast.success("Message sent successfully! I'll get back to you soon. 🚀");

        form.current.reset();

        setSending(false);
      })
      .catch((error) => {
        console.error(error);

        toast.error("Oops! Something went wrong. Please try again.");

        setSending(false);
      });
  };

  return (
    <section id="contact" className="contact">
      <motion.div
        className="contact-title"
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <p>Let's Connect</p>
        <h2>Get In Touch</h2>
      </motion.div>

      <div className="contact-container">
        <motion.div
          className="contact-info"
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h3>Let's build something amazing together.</h3>

          <p>
            I'm always open to discussing AR/VR development, Unity projects,
            frontend development, internships, collaborations, and exciting
            opportunities.
          </p>

          <div className="contact-item">
            <FaEnvelope />
            <span>sathiyanarayanansanjay@gmail.com</span>
          </div>

          <div className="contact-item">
            <FaPhone />
            <span>+91 97106 78850</span>
          </div>

          <div className="contact-item">
            <FaMapMarkerAlt />
            <span>Chennai, Tamil Nadu, India</span>
          </div>

          <div className="social-icons">
            <a
              href="https://github.com/Sathiya0406"
              target="_blank"
              rel="noreferrer"
            >
              <FaGithub />
            </a>

            <a
              href="https://linkedin.com/in/sathiya-narayanan-nandagopal/"
              target="_blank"
              rel="noreferrer"
            >
              <FaLinkedin />
            </a>
          </div>
        </motion.div>

        <motion.form
          ref={form}
          onSubmit={sendEmail}
          className="contact-form"
          initial={{ opacity: 0, x: 60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <input
            type="text"
            name="from_name"
            placeholder="Your Name"
            required
          />

          <input
            type="email"
            name="from_email"
            placeholder="Email Address"
            required
          />

          <input
            type="text"
            name="subject"
            placeholder="Subject"
            required
          />

          <textarea
            rows="6"
            name="message"
            placeholder="Your Message"
            required
          ></textarea>

          <button type="submit" disabled={sending}>
            {sending ? (
              <>
                <Oval
                  height={18}
                  width={18}
                  color="#0F172A"
                  secondaryColor="#0F172A"
                  strokeWidth={5}
                  visible={true}
                />
                <span style={{ marginLeft: "10px" }}>Sending...</span>
              </>
            ) : (
              "Send Message"
            )}
          </button>
        </motion.form>
      </div>
    </section>
  );
}

export default Contact;