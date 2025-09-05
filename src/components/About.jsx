import React from "react";
import founder from '../assets/founder.jpg';
import {
  FaUsers,
  FaCertificate,
  FaHandshake,
  FaGavel,
  FaCheckCircle,
  FaQuoteLeft,
} from "react-icons/fa";
import "./About.css";

const About = () => {
  const teamMembers = [
    {
      id: 1,
      name: "Advocate Nikita Somvanshi",
      position: "Trademark Attorney & Founder",
      education: "LL.B.",
      experience: "5+ Years",
      specialization: "Trademark Law, IPR, Contracts, Corporate Compliance",
      image:founder,
      bio: `With over 5 years of experience, Nikita Somvanshi has established herself as a trusted advisor for startups and MSMEs. She specializes in trademark law, intellectual property registration, contracts, and corporate compliance. As the founder of Aceattorn Legal Solutions, she is passionate about simplifying legal complexities and helping entrepreneurs protect their brands while building future-ready businesses.`,
    },
    {
      id: 2,
      name: "Advocate Amit Saklikar",
      position: "Partner",
      education: "LL.M., Government Law College",
      experience: "15+ Years",
      specialization: "Real Estate Law, Property Disputes",
      image:
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&w=300&h=300&fit=crop&crop=face",
      bio: `Amit brings modern legal practices and innovative solutions to complex real estate matters. His expertise in property law has helped hundreds of clients navigate successful transactions.`,
    },
    {
      id: 3,
      name: "Advocate Pallavi Saklikar",
      position: "Partner",
      education: "LL.B., Pune University",
      experience: "12+ Years",
      specialization: "Family Law, Women's Rights",
      image:
        "https://images.unsplash.com/photo-1494790108755-2616b612b890?ixlib=rb-4.0.3&w=300&h=300&fit=crop&crop=face",
      bio: `Pallavi is passionate about family law and women's rights. Her empathetic approach combined with strong legal acumen has made her a trusted advocate for sensitive family matters.`,
    },
    {
      id: 4,
      name: "Advocate Durgaprasad Sabnis",
      position: "Senior Associate",
      education: "LL.B., Mumbai University",
      experience: "10+ Years",
      specialization: "Criminal Law, Employment Law",
      image:
        "https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&w=300&h=300&fit=crop&crop=face",
      bio: `Durgaprasad specializes in criminal defense and employment law. His meticulous preparation and courtroom skills have earned him recognition among peers and clients alike.`,
    },
  ];

  const values = [
    {
      icon: <FaHandshake />,
      title: "Integrity",
      description:
        "Our practice is built on a foundation of honesty, transparency, and unwavering ethical standards.",
    },
    {
      icon: <FaGavel />,
      title: "Excellence",
      description:
        "We strive for excellence in every aspect of our legal services, ensuring the highest standards of professionalism and expertise.",
    },
    {
      icon: <FaUsers />,
      title: "Client-Centric",
      description:
        "Our clients' needs and interests are at the center of everything we do.",
    },
    {
      icon: <FaCertificate />,
      title: "Innovation",
      description:
        "We embrace modern solutions and creative approaches to solve complex legal challenges.",
    },
  ];

  // const achievements = [
  //   { number: "1000+", label: "Cases Successfully Resolved" },
  //   { number: "500+", label: "Satisfied Clients" },
  //   { number: "25+", label: "Years of Combined Experience" },
  //   { number: "98%", label: "Success Rate" },
  // ];

  const milestones = [
    {
      year: "1",
      title: "Initial Consultation",
      description:
        "We begin with a thorough discussion of your legal needs and objectives.",
    },
    {
      year: "2",
      title: "Strategy Development",
      description:
        "Our team develops a customized strategy tailored to your specific situation.",
    },
    {
      year: "3",
      title: "Implementation",
      description:
        "We execute the strategy while keeping you informed at every step.",
    },
    {
      year: "4",
      title: "Ongoing Support",
      description:
        "We provide continuous support and updates throughout our engagement.",
    },
    
  ];

  return (
    <div className="about-page">
      {/* Hero Section */}
      <section className="about-hero">
        <div className="container">
          <div className="hero-content">
            <h1>About AceAttorn</h1>
            <p className="hero-subtitle">
              Innovative Legal Solutions for Modern Businesses
            </p>
            {/* <p className="hero-description">
              For over 25 years, SAK Legal & Associates has been a trusted name
              in legal services, providing comprehensive solutions to
              individuals and businesses across Maharashtra. Our commitment to
              excellence, integrity, and client satisfaction has made us one of
              the region's most respected law firms.
            </p> */}
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="our-story section">
        <div className="container">
          <div className="story-content">
            <div className="story-text">
              <h2>Our Story</h2>
              <p>
                Welcome to AceAttorn Legal Solutions, your trusted partner in
                navigating the intricate realms of Intellectual Property Rights
                (IPR) and Contractual Management. </p>
                <p>Our dedicated team of legal
                experts is committed to safeguarding your innovations and
                ensuring your contractual agreements are robust and legally
                sound. With a blend of expertise and personalized service, we
                strive to protect your assets and empower your business
                endeavors.</p>
                <p>Explore our comprehensive range of services tailored
                to meet your needs, and let us be your ally in securing your
                intellectual and commercial interests.
              </p>
            </div>
            <div className="story-image">
              <img
                src="https://images.unsplash.com/photo-1589829545856-d10d557cf95f?ixlib=rb-4.0.3&w=600&h=400&fit=crop"
                alt="Our law office"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="our-values section">
        <div className="container">
          <div className="section-header">
            <h2>Our Core Values</h2>
            <p>
              The principles that guide our practice.
            </p>
          </div>
          <div className="values-grid">
            {values.map((value, index) => (
              <div key={index} className="value-card">
                <div className="value-icon">{value.icon}</div>
                <h3>{value.title}</h3>
                <p>{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Team */}
      <section className="our-team section">
        <div className="container">
          <div className="section-header">
            <h2>Meet Our Team</h2>
            <p>
              Experienced legal professionals dedicated to serving your needs
            </p>
          </div>
          <div className="team-grid">
            {teamMembers.map((member) => (
              <div key={member.id} className="team-card">
                <div className="member-image">
                  <img src={member.image} alt={member.name} />
                </div>
                <div className="member-info">
                  <h3>{member.name}</h3>
                  <p className="position">{member.position}</p>
                  <div className="member-details">
                    <p>
                      <strong>Education:</strong> {member.education}
                    </p>
                    <p>
                      <strong>Experience:</strong> {member.experience}
                    </p>
                    <p>
                      <strong>Specialization:</strong> {member.specialization}
                    </p>
                  </div>
                  <p className="member-bio">{member.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Achievements */}
      {/* <section className="achievements section">
        <div className="container">
          <div className="section-header">
            <h2>Our Achievements</h2>
            <p>Numbers that reflect our commitment to excellence</p>
          </div>
          <div className="achievements-grid">
            {achievements.map((achievement, index) => (
              <div key={index} className="achievement-card">
                <div className="achievement-number">{achievement.number}</div>
                <div className="achievement-label">{achievement.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section> */}

      {/* Timeline */}
      <section className="timeline section">
        <div className="container">
          <div className="section-header">
            <h2>Our Process</h2>
            <p>How we work with our clients</p>
          </div>
          <div className="timeline-container">
            {milestones.map((milestone, index) => (
              <div key={index} className="timeline-item">
                <div className="timeline-marker">
                  <span className="year">{milestone.year}</span>
                </div>
                <div className="timeline-content">
                  <h3>{milestone.title}</h3>
                  <p>{milestone.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="why-choose section">
        <div className="container">
          <div className="choose-content">
            <div className="choose-text">
              <h2>Why Choose AceAttorn?</h2>
              <div className="choose-points">
                <div className="choose-point">
                  <FaCheckCircle className="check-icon" />
                  <div>
                    <h4>Expert Team</h4>
                    <p>
                      Our team of experienced professionals brings diverse expertise to handle your complex legal matters.
                    </p>
                  </div>
                </div>
                <div className="choose-point">
                  <FaCheckCircle className="check-icon" />
                  <div>
                    <h4>Timely Delivery</h4>
                    <p>
                      We understand the importance of time in legal matters and ensure prompt service delivery.
                    </p>
                  </div>
                </div>
                <div className="choose-point">
                  <FaCheckCircle className="check-icon" />
                  <div>
                    <h4>Trusted Partner</h4>
                    <p>
                      Build a long-term relationship with a legal partner who understands your business needs.
                    </p>
                  </div>
                </div>
                {/* <div className="choose-point">
                  <FaCheckCircle className="check-icon" />
                  <div>
                    <h4>Comprehensive Services</h4>
                    <p>Full spectrum of legal services under one roof</p>
                  </div>
                </div> */}
              </div>
            </div>
            <div className="choose-testimonial">
              <div className="testimonial-card">
                <FaQuoteLeft className="quote-icon" />
                <p>
                  "SAK Legal & Associates has been our trusted legal partner for
                  over 10 years. Their expertise, professionalism, and
                  dedication to our success have been invaluable to our business
                  growth."
                </p>
                <div className="testimonial-author">
                  <strong>Rajesh Kumar</strong>
                  <span>CEO, Kumar Industries</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="about-cta section">
        <div className="container">
          <div className="cta-content">
            <h2>Ready to Work with Us?</h2>
            <p>
              Experience the difference that dedicated legal representation can
              make. Contact us today for a consultation.
            </p>
            <div className="cta-buttons">
              <a href="/contact" className="btn btn-primary">
                Get In Touch
              </a>
              {/* <a href="/consultation" className="btn btn-secondary">
                Free Consultation
              </a> */}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
