import "./Certificates.css";
import { motion } from "framer-motion";
import { FaAward, FaExternalLinkAlt } from "react-icons/fa";

function CertificateCard({ certificate, index }) {
  return (
    <motion.div
      className="certificate-card"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.2 }}
      viewport={{ once: true }}
      whileHover={{ y: -8 }}
    >
      <img
        src={certificate.image}
        alt={certificate.title}
        className="certificate-image"
      />

      <div className="certificate-content">
        <h3>
          <FaAward />
          {certificate.title}
        </h3>

        <p>{certificate.issuer}</p>

        <span>{certificate.year}</span>

        <a
          href={certificate.image}
          target="_blank"
          rel="noopener noreferrer"
          className="view-btn"
        >
          View Certificate
          <FaExternalLinkAlt />
        </a>
      </div>
    </motion.div>
  );
}

export default CertificateCard;