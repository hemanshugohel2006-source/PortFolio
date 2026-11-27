import {
  FaHome,
  FaUser,
  FaGraduationCap,
  FaCode,
  FaFolderOpen,
  FaEnvelope,
  FaTimes,
  FaCertificate, 
} from "react-icons/fa";
import "../components/Sidebbar.css";

const Sidebar = ({ isOpen, setIsOpen, activeSection }) => {
  const links = [
    { id: "home", label: "Home", icon: <FaHome /> },
    { id: "about", label: "About", icon: <FaUser /> },
    { id: "education", label: "Education", icon: <FaGraduationCap /> },
    { id: "skills", label: "Skills", icon: <FaCode /> },
    { id: "projects", label: "Projects", icon: <FaFolderOpen /> },
    { id: "certifications", label: "Certifications", icon: <FaCertificate /> }, 
    { id: "contact", label: "Contact", icon: <FaEnvelope /> },
  ];

  const handleScroll = (id) => {
    const section = document.getElementById(id);
    if (section) {
      const offset = 20;
      const top = section.offsetTop - offset;
      window.scrollTo({
        top: top,
        behavior: "smooth",
      });
      setIsOpen(false);
    }
  };

  return (
    <>
      <div
        className={`sidebar-overlay ${isOpen ? "active" : ""}`}
        onClick={() => setIsOpen(false)}
      ></div>

      <aside className={`sidebar ${isOpen ? "open" : ""}`}>
        <div className="sidebar-header">
          <h1 className="sidebar-logo">Hemanshu</h1>
          <button
            onClick={() => setIsOpen(false)}
            className="sidebar-close"
            aria-label="Close Menu"
          >
            <FaTimes />
          </button>
        </div>

        <nav className="sidebar-nav">
          <ul>
            {links.map((link) => (
              <li key={link.id}>
                <button
                  onClick={() => handleScroll(link.id)}
                  className={`sidebar-link ${
                    activeSection === link.id ? "active" : ""
                  }`}
                >
                  <span className="sidebar-icon">{link.icon}</span>
                  <span>{link.label}</span>
                </button>
              </li>
            ))}
          </ul>
        </nav>

        <div className="sidebar-footer">
          <p>© hemanshu</p>
        </div>
      </aside>
    </>
  );
};

export default Sidebar;