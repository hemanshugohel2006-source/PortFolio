import { motion } from "framer-motion";
import "./Home.css";
import logo from "./logo.png.jpg";
import resume from "../components/hemanshu-resume.pdf";

const Home = () => {
  return (
    <div className="home-container">
      <div className="home-content">
        {/* Photo with glowing ring */}
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          className="home-photo-wrapper"
        >
          <div className="home-photo-ring"></div>
          <img
            src={logo}
            alt="Hemanshu Gohel"
            className="home-photo"
          />
        </motion.div>

        {/* Greeting */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="home-greeting"
        >
          &gt; whoami_
        </motion.p>

        {/* Name */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="home-title"
        >
          Hi, I'm <span className="home-accent">Hemanshu</span> 👋
        </motion.h1>

        {/* Main role */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="home-role"
        >
          Cyber Security Learner
        </motion.h2>

        {/* Tagline */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="home-tagline"
        >
          MCA Student | BCA Graduate | Web Developer
        </motion.p>

        {/* Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="home-buttons"
        >
          <a
            href={resume}
            target="_blank"
            rel="noreferrer"
            className="home-btn home-btn-primary"
          >
            👁️ View Resume
          </a>

          <button
            onClick={() =>
              document
                .getElementById("certifications")
                ?.scrollIntoView({ behavior: "smooth" })
            }
            className="home-btn home-btn-secondary"
          >
            🏆 Certifications
          </button>
        </motion.div>
      </div>
    </div>
  );
};

export default Home;