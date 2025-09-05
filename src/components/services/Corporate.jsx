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
      icon: <FaFileAlt />,
      title: "Business Structure Advisory",
      description: "Guidance on choosing the right entity",
      features: ["Private Limited", "LLP", "OPC", "Partnership"]
    },
    {
      id: 2,
      icon: <FaGavel />,
      title: "Name Approval & Registration",
      description:"Secure name reservation and complete MCA incorporation filings.",
      features: ["Name","Reservation","Verification","Filing"]
    },
    {
      id: 3,
      icon: <FaCertificate />,
      title: "Drafting Legal Documents",
      description: "Prepare and file MOA, AOA, LLP Agreement, and other incorporation documents.",
      features: ["MOA","AOA","Agreements","Documents"]
    },
    {
      id: 4,
      icon: <FaEye />,
      title: "Regulatory Registrations",
      description: "Assistance with PAN, TAN, GST, and mandatory compliances.",
      features: ["PAN","TAN","GST","Compliance"]
    },
    {
      id: 5,
      icon: <FaHandshake />,
      title: "Post-Incorporation Support",
      description: "Guidance on opening bank accounts and fulfilling initial compliance requirements.",
      features: ["Banking","Guidance","Steup","Compliance"]
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
            <h1>Company Incorporation</h1>
            {/* <p className="hero-subtitle">
              Protect Your Brand Identity with Professional Trademark Services
            </p> */}
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