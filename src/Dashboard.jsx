import { useState, useEffect } from "react";
import Sidebar from "./Sidebar";
import Home from "./Home";
import About from "./About";
import Education from "./Education";
import Skills from "./Skills";
import Projects from "./Projects";
import Certifications from "./Certifications";
import Contact from "./Contact";
import "./Dashboard.css";

const Dashboard = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  // Scroll spy - je section view ma hoy e active thay
  useEffect(() => {
    const sections = [
      "home",
      "about",
      "education",
      "skills",
      "projects",
      "certifications",
      "contact",
    ];

    const handleScroll = () => {
      const scrollPos = window.scrollY + window.innerHeight / 2;
      let currentSection = sections[0];

      sections.forEach((id) => {
        const section = document.getElementById(id);
        if (section && section.offsetTop <= scrollPos) {
          currentSection = id;
        }
      });

      setActiveSection(currentSection);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="dashboard-container">
      <Sidebar
        isOpen={sidebarOpen}
        setIsOpen={setSidebarOpen}
        activeSection={activeSection}
      />

      <div className="dashboard-main">
        {/* Mobile Topbar */}
        <div className="dashboard-topbar">
          <button
            onClick={() => setSidebarOpen(true)}
            className="dashboard-menu-btn"
            aria-label="Open Menu"
          >
            ☰
          </button>
          <h1 className="dashboard-logo">Hemanshu</h1>
          <div className="dashboard-topbar-spacer"></div>
        </div>

        {/* All sections in one scroll */}
        <div className="dashboard-content">
          <section id="home" className="section">
            <Home />
          </section>

          <section id="about" className="section">
            <About />
          </section>

          <section id="education" className="section">
            <Education />
          </section>

          <section id="skills" className="section">
            <Skills />
          </section>

          <section id="projects" className="section">
            <Projects />
          </section>

          <section id="certifications" className="section">
            <Certifications />
          </section>

          <section id="contact" className="section">
            <Contact />
          </section>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;