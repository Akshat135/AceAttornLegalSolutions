import React from "react";
import {
  FaSearch,
  FaFileAlt,
  FaGavel,
  FaEye,
  FaCheckCircle,
  FaQuoteLeft,
  FaShieldAlt,
  FaCertificate,
  FaHandshake,
  FaUsers,
} from "react-icons/fa";
import "./Trademark.css";

const Trademark = () => {
  const services = [
    {
      id: 1,
      icon: <FaSearch />,
      title: "Patent Search and Analysis",
      description: "Perform thorough patent searches and provide detailed analyses.",
      features: ["Comprehensive database search", "Conflict analysis", "Application filing", "Documentation support"]
    },
    {
      id: 2,
      icon: <FaFileAlt />,
      title: "Patent Drafting and Filing",
      description: "Draft and file patent applications to protect your inventions.",
      features: ["Registration assistance", "Renewal reminders", "Documentation management", "Legal compliance"]
    },
    {
      id: 3,
      icon: <FaGavel />,
      title: "Patent Litigation",
      description: "Represent you in patent disputes and infringement cases.",
      features: ["Opposition proceedings", "Infringement litigation", "Legal representation", "Settlement negotiation"]
    },
    {
      id: 4,
      icon: <FaEye />,
      title: "Patent Prosecution",
      description: "Handle communications with patent offices to secure your patents.",
      features: ["24/7 monitoring", "Infringement alerts", "Market surveillance", "Enforcement action"]
    },
  ];


  return (
    <div className="trademark-page">
      {/* Hero Section */}
      <section className="trademark-hero">
        <div className="container">
          <div className="hero-content">
            {/* <div className="trademark-icon-hero">
              <FaShieldAlt />
            </div> */}
            <h1>Patent Services</h1>
            <p className="hero-subtitle">
              {/* Protect Your Brand Identity with Professional Trademark Services */}
            </p>
            <p className="hero-description">
              {/* Secure your intellectual property rights with our comprehensive trademark services. 
              From initial searches to registration and ongoing protection, we ensure your brand 
              remains protected in today's competitive marketplace. */}
            </p>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="trademark-services section">
        <div className="container">
          <div className="section-header">
            <h2>Intellectual Property Rights (IPR) Services</h2>
            <p>Comprehensive trademark solutions tailored to your business needs</p>
          </div>
          <div className="services-grid">
            {services.map((service) => (
              <div key={service.id} className="service-card">
                <div className="service-icon">{service.icon}</div>
                <h3>{service.title}</h3>
                <p>{service.description}</p>
                <div className="service-features">
                  {service.features.map((feature, index) => (
                    <div key={index} className="feature-item">
                      <FaCheckCircle className="feature-check" />
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
};

export default Trademark;