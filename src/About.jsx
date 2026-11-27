import { motion } from "framer-motion";
import "../components/About.css";

const About = () => {
  const skills = [
    "HTML",
    "CSS",
    "JavaScript",
    "React.js",
    "Python",
    "SQL",
    "Networking",
    "Ethical Hacking",
    "Network Security",
    "Vulnerability Assessment",
    "SOC Operations",
  ];

  return (
    <div className="aboutme-container">

      {/* Heading */}
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="aboutme-heading"
      >
        About Me
      </motion.h2>

      {/* Terminal-style card */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="aboutme-terminal"
      >

        {/* Terminal header */}
        <div className="terminal-header">
          <div className="terminal-dots">
            <span className="dot red"></span>
            <span className="dot yellow"></span>
            <span className="dot green"></span>
          </div>

          <span className="terminal-title">
            about_me.txt
          </span>
        </div>

        {/* Terminal body */}
        <div className="terminal-body">

          {/* Line 1 */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="terminal-line"
          >
            <span className="terminal-prompt">&gt;</span>

            <span className="terminal-text">
              {" "}I am a{" "}
              <span className="highlight">BCA graduate</span>
              {" "}and currently pursuing my{" "}
              <span className="highlight">
                Master of Computer Applications (MCA)
              </span>
              . I am interested in{" "}
              <span className="highlight">Cybersecurity</span>
              {" "}and{" "}
              <span className="highlight">Web Development</span>
              , with a focus on learning modern technologies and practical
              skills.
            </span>
          </motion.div>

          {/* Line 2 */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.6 }}
            className="terminal-line"
          >
            <span className="terminal-prompt">&gt;</span>

            <span className="terminal-text">
              {" "}I have knowledge of{" "}
              <span className="highlight">HTML</span>,{" "}
              <span className="highlight">CSS</span>,{" "}
              <span className="highlight">JavaScript</span>,{" "}
              <span className="highlight">React.js</span>,{" "}
              <span className="highlight">Python</span>,{" "}
              <span className="highlight">SQL</span>,{" "}
              <span className="highlight">Networking</span>
              , and various cybersecurity tools. I am particularly interested
              in{" "}
              <span className="highlight">Ethical Hacking</span>,{" "}
              <span className="highlight">Network Security</span>,{" "}
              <span className="highlight">
                Vulnerability Assessment
              </span>
              , and{" "}
              <span className="highlight">SOC Operations</span>.
            </span>
          </motion.div>

          {/* Line 3 */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.8 }}
            className="terminal-line"
          >
            <span className="terminal-prompt">&gt;</span>

            <span className="terminal-text">
              {" "}I enjoy building projects, exploring new technologies, and
              improving my technical skills through hands-on practice. My goal
              is to grow as a skilled{" "}
              <span className="highlight">IT professional</span>
              {" "}and apply my knowledge to real-world challenges.
            </span>
          </motion.div>

          {/* Blinking cursor */}
          <span className="terminal-cursor">_</span>

        </div>
      </motion.div>

    </div>
  );
};

export default About;