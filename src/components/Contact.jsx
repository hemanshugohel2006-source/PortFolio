import { useState } from "react";
import { motion } from "framer-motion";
import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaWhatsapp,
} from "react-icons/fa";
import "./Contact.css";

const Contact = () => {
  // ⚠️ TARO WHATSAPP NUMBER (country code sathe, + vagar, spaces vagar)
  const WHATSAPP_NUMBER = "918734036542";

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const socials = [
    {
      icon: <FaEnvelope />,
      label: "Email",
      value: "hemanshugohel2006@gmail.com",
      href: "mailto:hemanshugohel2006@gmail.com",
      color: "#ef4444",
    },
    {
      icon: <FaWhatsapp />,
      label: "WhatsApp",
      value: "+91 87340 36542",
      href: `https://wa.me/${WHATSAPP_NUMBER}`,
      color: "#25d366",
    },
    {
      icon: <FaGithub />,
      label: "GitHub",
      value: "github.com/hemanshugohel2006",
      href: "https://github.com/hemanshugohel2006-source",
      color: "#ffffff",
    },
    {
      icon: <FaLinkedin />,
      label: "LinkedIn",
      value: "linkedin.com/in/hemanshu-gohel",
      href: "https://www.linkedin.com/in/hemanshu-gohel",
      color: "#0ea5e9",
    },
  ];

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validation
    if (!formData.name || !formData.email || !formData.message) {
      alert("Please fill all fields!");
      return;
    }

    // WhatsApp message banavo
    const whatsappMessage =
      `*New Contact from Portfolio* 🚀%0A%0A` +
      `*Name:* ${formData.name}%0A` +
      `*Email:* ${formData.email}%0A%0A` +
      `*Message:*%0A${formData.message}`;

    // WhatsApp URL
    const whatsappURL = `https://wa.me/${WHATSAPP_NUMBER}?text=${whatsappMessage}`;

    // New tab ma open karo
    window.open(whatsappURL, "_blank");

    // Form reset
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <div className="contact-container">
      {/* Heading */}
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="contact-heading"
      >
        GET IN TOUCH
      </motion.h1>

      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.2 }}
        className="contact-subtitle"
      >
        Have a project in mind? Let's connect on WhatsApp.
      </motion.p>

      <div className="contact-grid">
        {/* LEFT - Terminal Style Info */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="contact-info"
        >
          <div className="terminal-header">
            <div className="terminal-dots">
              <span className="dot red"></span>
              <span className="dot yellow"></span>
              <span className="dot green"></span>
            </div>
            <span className="terminal-title">contact_info.sh</span>
          </div>

          <div className="terminal-body">
            <p className="terminal-line">
              <span className="terminal-prompt">$</span> cat contact_info.txt
            </p>

            <div className="info-list">
              {socials.map((social, i) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noreferrer"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 + i * 0.1 }}
                  className="info-item"
                >
                  <span
                    className="info-icon"
                    style={{ color: social.color }}
                  >
                    {social.icon}
                  </span>
                  <div className="info-text">
                    <span className="info-label">{social.label}</span>
                    <span className="info-value">{social.value}</span>
                  </div>
                </motion.a>
              ))}
            </div>

            <p className="terminal-line terminal-last">
              <span className="terminal-prompt">$</span>
              <span className="terminal-cursor">_</span>
            </p>
          </div>
        </motion.div>

        {/* RIGHT - Contact Form */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="contact-form-wrapper"
        >
          <div className="form-header">
            <h3>Send a Message</h3>
            <p>Fill the form and it will open WhatsApp for you</p>
          </div>

          <form onSubmit={handleSubmit} className="contact-form">
            <div className="input-group">
              <label htmlFor="name">Your Name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Enter your name"
                required
              />
            </div>

            <div className="input-group">
              <label htmlFor="email">Email Address</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="your@email.com"
                required
              />
            </div>

            <div className="input-group">
              <label htmlFor="message">Message</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Tell me about your project..."
                rows="5"
                required
              ></textarea>
            </div>

            <button type="submit" className="submit-btn submit-whatsapp">
              <FaWhatsapp />
              <span>Send via WhatsApp</span>
            </button>
          </form>
        </motion.div>
      </div>

      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.6 }}
        className="contact-footer-note"
      >
        ⚡ Available for freelance & collaboration
      </motion.p>
    </div>
  );
};

export default Contact;