import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaGithub, FaExternalLinkAlt, FaFolder } from "react-icons/fa";
import "./Projects.css";

const Projects = () => {
  const [filter, setFilter] = useState("All");

  const categories = ["All", "Cyber Security", "Web Dev"];

  const projects = [
    {
      title: "Simple Gobuster",
      category: "Cyber Security",
      featured: true,
      tech: ["Python", "Tkinter", "Threading", "Requests"],
      desc: "A powerful GUI-based web directory scanner inspired by Gobuster. Features multi-threaded scanning, custom wordlist support, real-time logs, and CSV export. Built from scratch using Python with Tkinter GUI.",
      github: "https://github.com/hemanshugohel2006-source/h_buster0",
      live: null,
    },
    // {
    //   title: "Portfolio Website",
    //   category: "Web Dev",
    //   tech: ["React", "CSS", "Framer Motion"],
    //   desc: "Cyber-security themed personal portfolio with smooth animations and responsive design.",
    //   github: "#",
    //   live: "#",
    // },
  ];

  const filteredProjects =
    filter === "All"
      ? projects
      : projects.filter((p) => p.category === filter);

  return (
    <div className="projects-container">
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="projects-heading"
      >
        MY PROJECTS
      </motion.h1>

      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.2 }}
        className="projects-subtitle"
      >
        $ ls ~/projects/
      </motion.p>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.3 }}
        className="filter-tabs"
      >
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setFilter(cat)}
            className={`filter-btn ${filter === cat ? "active" : ""}`}
          >
            {cat}
          </button>
        ))}
      </motion.div>

      <motion.div layout className="projects-grid">
        <AnimatePresence mode="popLayout">
          {filteredProjects.map((project, i) => (
            <motion.div
              key={project.title}
              layout
              initial={{ opacity: 0, scale: 0.9, y: 30 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: -20 }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
              className={`project-card ${project.featured ? "featured" : ""}`}
            >
              <div className="project-header">
                <div className="project-icon">
                  <FaFolder />
                </div>

                <div className="project-tags">
                  {project.featured && (
                    <span className="featured-badge">⭐ Featured</span>
                  )}
                  <span className="project-category">{project.category}</span>
                </div>
              </div>

              <h3 className="project-title">{project.title}</h3>
              <p className="project-desc">{project.desc}</p>

              <div className="project-techs">
                {project.tech.map((t) => (
                  <span key={t} className="tech-tag">
                    {t}
                  </span>
                ))}
              </div>

              <div className="project-links">
                {project.github && project.github !== "#" && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noreferrer"
                    className="project-link"
                    aria-label="GitHub"
                  >
                    <FaGithub />
                    <span>Code</span>
                  </a>
                )}
                {project.live && (
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noreferrer"
                    className="project-link live"
                    aria-label="Live Demo"
                  >
                    <FaExternalLinkAlt />
                    <span>Live Demo</span>
                  </a>
                )}
              </div>

              <div className="project-glow"></div>
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>

      {filteredProjects.length === 0 && (
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="no-projects"
        >
          No projects found in this category.
        </motion.p>
      )}

      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.5 }}
        className="projects-footer"
      >
        ⚡ More projects coming soon...
      </motion.p>
    </div>
  );
};

export default Projects;