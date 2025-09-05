import React, { useState, useEffect } from 'react';
import { FaBars, FaTimes, FaChevronDown, FaPhone, FaEnvelope } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import './Header.css';
import logo from '../assets/logo.png';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const handleDropdownToggle = (menu) => setActiveDropdown(activeDropdown === menu ? null : menu);

  const navigationItems = [
    { title: 'Home', to: '/' },
    { title: 'About Us', to: '/about' },
    { title: 'Blogs', to: '/blog' },
    {
      title: 'Services',
      to: '/#services',
      dropdown: [
        { title: 'Trademark Services', to: '/trademark' },
        { title: 'Patent Services', to: '/patent' },
        { title: 'Copyright Services', to: '/copyright' },
        { title: 'Design Services', to: '/design' },
        { title: 'Legal Contract Services', to: '/legalContract' },
        { title: 'Company Incorporation', to: '/corporate' },
        { title: 'Consultation Services', to: '/consultation' },
      ],
    },
    { title: 'Contact', to: '/contact' },
  ];

  return (
    <>
      {/* Top Bar */}
      <div className="top-bar">
        <div className="container">
          <div className="top-bar-content">
            <div className="contact-info">
              <a href="tel:+917379902583" className="contact-item">
                <FaPhone className="icon" /> +91 7379902583
              </a>
              <a href="mailto:info@aceattornlegalsolutions.com" className="contact-item">
                <FaEnvelope className="icon" /> info@aceattornlegalsolutions.com
              </a>
            </div>
            <div className="top-bar-right">
              <span>Experience. Excellence. Results.</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <header className={`header ${isScrolled ? 'scrolled' : ''}`}>
        <div className="container">
          <div className="header-content">
            {/* Logo */}
            <div className="logo">
              <Link to="/" className="logo-link">
                <img src={logo} alt="Ace Attorn Logo" className="logo-img" />
                <div className="logo-text">
                  <h1>Ace Attorn Legal Solutions</h1>
                  <span className="tagline">Innovative Legal Solutions for Modern Businesses</span>
                </div>
              </Link>
            </div>

            {/* Desktop Navigation */}
            <nav className="desktop-nav">
              <ul className="nav-list">
                {navigationItems.map((item, index) => (
                  <li
                    key={index}
                    className={`nav-item ${item.dropdown ? 'has-dropdown' : ''}`}
                    onMouseEnter={() => item.dropdown && setActiveDropdown(item.title)}
                    onMouseLeave={() => item.dropdown && setActiveDropdown(null)}
                  >
                    <Link to={item.to} className="nav-link">
                      {item.title}
                      {item.dropdown && <FaChevronDown className="dropdown-icon" />}
                    </Link>

                    {item.dropdown && (
                      <div className={`dropdown-menu ${activeDropdown === item.title ? 'active' : ''}`}>
                        <ul>
                          {item.dropdown.map((subItem, subIndex) => (
                            <li key={subIndex}>
                              <Link to={subItem.to} className="dropdown-link">
                                {subItem.title}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </li>
                ))}
              </ul>
            </nav>

            {/* Mobile Menu Toggle */}
            <button className="mobile-menu-toggle" onClick={toggleMenu}>
              {isMenuOpen ? <FaTimes /> : <FaBars />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <div className={`mobile-nav ${isMenuOpen ? 'active' : ''}`}>
          <ul className="mobile-nav-list">
            {navigationItems.map((item, index) => (
              <li key={index} className="mobile-nav-item">
                <div className="mobile-nav-link-wrapper">
                  <Link to={item.to} className="mobile-nav-link"  onClick={()=>setIsMenuOpen(false)} >  
                    {item.title}
                    
                  </Link>
                  {item.dropdown && (
                    <button
                      className="mobile-dropdown-toggle"
                      onClick={() => handleDropdownToggle(item.title)}
                    >
                      <FaChevronDown
                        className={`dropdown-icon ${activeDropdown === item.title ? 'rotated' : ''}`}
                      />
                    </button>
                  )}
                </div>

                {item.dropdown && (
                  <div className={`mobile-dropdown ${activeDropdown === item.title ? 'active' : ''}`}>
                    <ul>
                      {item.dropdown.map((subItem, subIndex) => (
                        <li key={subIndex}>
                          <Link to={subItem.to} className="mobile-dropdown-link" onClick={()=>setIsMenuOpen(false)}>
                            {subItem.title}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </li>
            ))}
          </ul>
        </div>
      </header>
    </>
  );
};

export default Header;
