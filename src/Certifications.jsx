import { motion } from "framer-motion";
import { FaEye, FaDownload } from "react-icons/fa";
import certificate1 from "./Certificate1.jpg";
import certificate1_pdf from "./Hackviser-CORE-Certificate-hemanshu.pdf";
import certificate2 from "./Certificate2.jpg";
import certificate2_pdf from "./Vrsecurity-Certificate-hemanshu.pdf";
import certificate3 from "../components/certificate3.jpg";
import certificate3_pdf from "../components/certificate3-hemanshu.pdf";
import "./Certifications.css";

const Certifications = () => {
  const certificates = [
    // ⭐ 1st Certificate — Hackviser
    {
      title: "Hackviser CORE – Certified Cybersecurity Foundations",
      issuer: "Hackviser",
      date: "July 18, 2026",
      desc: "Successfully earned the Hackviser CORE – Certified Cybersecurity Foundations certification. This program strengthened my understanding of networking, Linux, cybersecurity fundamentals, threat detection, security best practices, vulnerability assessment, and hands-on security labs, providing a strong foundation for a career in cybersecurity.",
      image: certificate1,
      viewLink: certificate1,
      downloadLink: certificate1_pdf,
      downloadName: "Hackviser-CORE-Certificate-hemanshu.pdf",
    },
    // ⭐ 2nd Certificate — VRsecurity
    {
      title: "CSFP – Cyber Security Fundamentals Program",
      issuer: "VRsecurity | E-Learning",
      date: "September 17, 2026",
      desc: "Successfully completed the Cyber Security, Ethical Hacking, Networking, Digital Forensics & Security Operations Center (SOC) Program at VRsecurity. The 3-month program provided practical exposure to cybersecurity concepts, ethical hacking techniques, networking, digital forensics, and SOC operations with hands-on exercises.",
      image: certificate2,
      viewLink: certificate2,
      downloadLink: certificate2_pdf,
      downloadName: "Vrsecurity-Certificate-hemanshu.pdf",
    },
    // ⭐ 3rd Certificate — NJSMTI Seminar
    {
      title: "Fundamentals of Modern IT: From Confusion to Clarity",
      issuer: "NJSMTI & Savjani College | Avadh Web",
      date: "September 12, 2026",
      desc: "Successfully participated in the seminar on 'Fundamentals of Modern IT: From Confusion to Clarity' jointly organized by Narandas Jethalal Sonecha Management & Technical Institute and Shri. K.M. & Smt. K.K. Savjani BBA/BCA & Commerce College, Veraval in association with Avadh Web. Gained insights into modern IT fundamentals and evolving opportunities in the IT industry.",
      image: certificate3,
      viewLink: certificate3,
      downloadLink: certificate3_pdf,
      downloadName: "certificate3-hemanshu.pdf",
    },
  ];

  return (
    <div className="cert-container">
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="cert-heading"
      >
        CERTIFICATIONS
      </motion.h1>

      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.2 }}
        className="cert-subtitle"
      >
        $ ls ~/certifications/
      </motion.p>

      <div className="cert-list">
        {certificates.map((cert, i) => (
          <motion.div
            key={cert.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: i * 0.15 }}
            className="cert-card"
          >
            {/* LEFT - Image */}
            <div className="cert-image-wrapper">
              <img
                src={cert.image}
                alt={cert.title}
                className="cert-image"
              />
            </div>

            {/* RIGHT - Content */}
            <div className="cert-content">
              <h3 className="cert-title">{cert.title}</h3>

              <div className="cert-meta">
                <span className="cert-issuer">{cert.issuer}</span>
                <span className="cert-date">Issued : {cert.date}</span>
              </div>

              <p className="cert-desc">{cert.desc}</p>

              <div className="cert-actions">
                <a
                  href={cert.viewLink}
                  target="_blank"
                  rel="noreferrer"
                  className="cert-btn cert-btn-view"
                >
                  <FaEye />
                  <span>View</span>
                </a>

                <a
                  href={cert.downloadLink}
                  download={cert.downloadName}
                  className="cert-btn cert-btn-download"
                >
                  <FaDownload />
                  <span>Download</span>
                </a>
              </div>
            </div>

            <div className="cert-glow"></div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Certifications;