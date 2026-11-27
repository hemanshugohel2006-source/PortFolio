import { motion } from "framer-motion";
import "../components/Education.css";

const Education = () => {
  const timeline = [
    {
      year: "BCA",
      desc: "I completed my BCA at K.K. Savjani College, where I continuously improved my knowledge in programming, web development, networking, and cyber security. This journey helped me build practical skills, creativity, and confidence to grow in the IT industry.",
      side: "left",
    },
    {
      year: "VRsecurity – CSFP (3 Months)",
      desc: "Completed a 3-month Cyber Security Fundamentals Program (CSFP) at VRsecurity, covering Ethical Hacking, Networking, Digital Forensics, and SOC operations Learned by practical work, which made my cybersecurity basics stronger..",
      side: "right",
      },
    {
      year: "MCA (Pursuing)",
      desc: "Currently pursuing MCA to expand my knowledge in advanced computing, cyber security, and software development. This phase is helping me become industry-ready with strong technical and problem-solving skills.",
      side: "left",
    },
  ];

  return (
    <div className="education-container">
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="education-heading"
      >
        EDUCATION
      </motion.h1>

      <div className="timeline">
        {/* Center glowing line */}
        <div className="timeline-line"></div>

        {timeline.map((item, index) => (
          <motion.div
            key={item.year}
            initial={{ opacity: 0, x: item.side === "left" ? -50 : 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.15 }}
            className={`timeline-item ${
              item.side === "left" ? "left" : "right"
            }`}
          >
            {/* Center dot */}
            <div className="timeline-dot"></div>

            {/* Card */}
            <div className="timeline-card">
              <h3 className="timeline-title">{item.year}</h3>
              <p className="timeline-desc">{item.desc}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Education;