import { motion } from "framer-motion";
import "./Skills.css";

const Skills = () => {
  const skills = [
    {
      name: "HTML",
      desc: "Structured and modern web page creation.",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
    },
    {
      name: "CSS",
      desc: "Responsive layouts and creative animations.",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
    },
    {
      name: "JavaScript",
      desc: "Dynamic and interactive website functionality.",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
    },
    {
      name: "React",
      desc: "Reusable and modern frontend applications.",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
    },
    {
      name: "Python",
      desc: "Basic programming and logic building.",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
    },
    {
      name: "PHP",
      desc: "Backend development and server-side basics.",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg",
    },
    {
      name: "Cyber Security",
      desc: "Cybersecurity learner focused on ethical hacking and digital protection.",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-original.svg",
      customIcon: true,
    },
    {
      name: "Networking",
      desc: "Completed",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/networkx/networkx-original.svg",
      customIcon: true,
    },
  ];

  return (
    <div className="skills-container">
      {/* Heading */}
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="skills-heading"
      >
        MY SKILLS
      </motion.h1>

      {/* Grid */}
      <div className="skills-grid">
        {skills.map((skill, i) => (
          <motion.div
            key={skill.name}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.08 }}
            className="skill-card"
          >
            <div className="skill-icon-wrapper">
              <img
                src={skill.icon}
                alt={skill.name}
                className="skill-icon"
                loading="lazy"
              />
            </div>
            <h3 className="skill-name">{skill.name}</h3>
            <p className="skill-desc">{skill.desc}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Skills;