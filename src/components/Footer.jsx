import React from "react";
import {
  FaPhone,
  FaEnvelope,
  FaMapMarkerAlt,
  FaClock,
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaInstagram,
  FaArrowUp,
} from "react-icons/fa";
import "./Footer.css";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const currentYear = new Date().getFullYear();

  const practiceAreas = [
    { title: "Trademark Services", href: "/trademark" },
    { title: "Patent Services", href: "/patent" },
    { title: "Copyright Services", href: "/copyright" },
    { title: "Design Services", href: "/design" },
    { title: "Legal Contract Services", href: "/legalContract" },
    { title: "Company in Corporation", href: "/corporate" },
    { title: "Consultation Services", href: "/consultation" },

  ];

  const quickLinks = [
    { title: "About Us", href: "/about" },
    // { title: "Our Team", href: "#team" },
    // { title: "Services", href: "/services" },
    // { title: "Case Studies", href: "#cases" },
    { title: "Blogs", href: "/blog" },
    { title: "Contact", href: "/contact" },
  ];

  return (
    <footer className="footer">
      {/* Main Footer */}
      <div className="footer-main">
        <div className="container">
          <div className="footer-content">
            {/* Company Info */}
            <div className="footer-section">
              <div className="footer-logo">
                <h3>Ace Attorn Legal Solutions</h3>
                <p className="footer-tagline">
                  Innovative Legal Solutions for Modern Businesses
                </p>
              </div>
              <p className="footer-description">
                Welcome to AceAttorn Legal Solutions, your trusted partner in
                navigating the intricate realms of Intellectual Property Rights
                (IPR) and Contractual Management.
              </p>
              <div className="social-links">
                <a href="#" className="social-link" aria-label="Facebook">
                  <FaFacebookF />
                </a>
                <a href="#" className="social-link" aria-label="Twitter">
                  <FaTwitter />
                </a>
                <a href="https://www.linkedin.com/company/aceattorn-legal-solutions/posts/?feedView=all" className="social-link" aria-label="LinkedIn">
                  <FaLinkedinIn />
                </a>
                <a href="https://www.instagram.com/aceattornlegalsolutions/" className="social-link" aria-label="Instagram">
                  <FaInstagram />
                </a>
              </div>
            </div>

            {/* Practice Areas */}
            <div className="footer-section">
              <h4 className="footer-heading">Services</h4>
              <ul className="footer-links">
                {practiceAreas.map((area, index) => (
                  <li key={index}>
                    <a href={area.href} className="footer-link">
                      {area.title}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Quick Links */}
            <div className="footer-section">
              <h4 className="footer-heading">Quick Links</h4>
              <ul className="footer-links">
                {quickLinks.map((link, index) => (
                  <li key={index}>
                    <a href={link.href} className="footer-link">
                      {link.title}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Info */}
            <div className="footer-section">
              <h4 className="footer-heading">Contact Information</h4>
              <div className="contact-details">
                <div className="contact-detail">
                  <FaMapMarkerAlt className="contact-icon" />
                  <div>
                    <a href="https://www.google.com/maps/place/AceAttorn+Legal+Solutions/@25.3578563,82.9783862,17z/data=!3m1!4b1!4m6!3m5!1s0x6ba254da2cf86e55:0xd747fcbb3034aba1!8m2!3d25.3578563!4d82.9783862!16s%2Fg%2F11xmd190my?entry=ttu&g_ep=EgoyMDI1MDczMC4wIKXMDSoASAFQAw%3D%3D"><p>L 99, V.D.A Colony Shivpur</p>
                    <p>Varanasi, Uttar Pradesh 221003</p> </a>
                    
                  </div>
                </div>

                <div className="contact-detail">
                  <FaPhone className="contact-icon" />
                  <div>
                    <p>+91 7379902583</p>
                  </div>
                </div>

                <div className="contact-detail">
                  <FaEnvelope className="contact-icon" />
                  <div>
                    <p>info@aceattornlegalsolutions.com</p>
                    <p>nikita@aceattornlegalsolutions.com</p>
                  </div>
                </div>

                <div className="contact-detail">
                  <FaClock className="contact-icon" />
                  <div>
                    <p>Mon - Fri: 9:00 AM - 6:00 PM</p>
                    <p>Saturday & Sunday: Closed</p>
                  </div>
                </div>
              </div>

              {/* Emergency Contact */}
              {/* <div className="emergency-contact">
                <h5>24/7 Emergency Legal Assistance</h5>
                <a href="tel:+917379902583" className="emergency-number">
                  +91 7379902583
                </a>
              </div> */}
            </div>
          </div>
        </div>
      </div>

      {/* Newsletter Section */}
      <div className="newsletter-section">
        <div className="container">
          <div className="newsletter-content">
            <div className="newsletter-text">
              <h4>Stay Updated with Legal Insights</h4>
              <p>
                Subscribe to our newsletter for the latest legal news and
                updates
              </p>
            </div>
            <div className="newsletter-form">
              {/* <input 
                type="email" 
                placeholder="Enter your email address" 
                className="newsletter-input"
              /> */}
              <button
                className="newsletter-btn"
                onClick={() =>
                  window.open(
                    "https://www.linkedin.com/newsletters/7243899318095486977/",
                    "_blank"
                  )
                }
              >
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="footer-bottom">
        <div className="container">
          <div className="footer-bottom-content">
            <div className="copyright">
              <p>
                &copy; {currentYear} AceAttorn Legal Associates. All rights
                reserved.
              </p>
              <div className="legal-links">
                <a href="#privacy" className="legal-link">
                  Privacy Policy
                </a>
                <a href="#terms" className="legal-link">
                  Terms of Service
                </a>
                <a href="#disclaimer" className="legal-link">
                  Legal Disclaimer
                </a>
              </div>
            </div>

            <div className="certifications">
              {/* <span>Licensed by the Bar Council of Maharashtra</span> */}
            </div>
          </div>
        </div>
      </div>

      {/* Scroll to Top Button */}
      <button
        className="scroll-to-top"
        onClick={scrollToTop}
        aria-label="Scroll to top"
      >
        <FaArrowUp />
      </button>
    </footer>
  );
};

export default Footer;
