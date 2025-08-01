import { useState } from 'react';
import './App.css';
import logo from './assets/images/logo.png';
import heroGif from './assets/images/hero.gif';
import teamMember1 from './assets/images/team1.jpg';
import teamMember2 from './assets/images/team2.jpg';
import teamMember3 from './assets/images/team3.jpg';

function App() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const teamMembers = [
    {
      id: 1,
      name: "Sarah Johnson",
      position: "CEO & Founder",
      bio: "With over 15 years of experience in tech leadership, Sarah founded our company with a vision to revolutionize digital experiences.",
      image: teamMember1,
    },
    {
      id: 2,
      name: "Michael Chen",
      position: "Lead Developer",
      bio: "Michael specializes in front-end architecture and has led development teams at three successful startups prior to joining us.",
      image: teamMember2,
    },
    {
      id: 3,
      name: "Emma Rodriguez",
      position: "Design Director",
      bio: "Emma's award-winning designs have been featured in multiple industry publications and she leads our creative vision.",
      image: teamMember3,
    },
  ];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <div className="website-container">
      {/* Navigation Header */}
      <header className="header">
        <div className="container">
          <div className="header-content">
            <div className="logo">
              <img src={logo} alt="Company Logo" className="logo-img" />
            </div>
            <nav className="navigation">
              <ul>
                <li><a href="#">About</a></li>
                <li><a href="#">Features</a></li>
                <li><a href="#">Pricing</a></li>
                <li><button className="nav-button">GET STARTED</button></li>
              </ul>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="hero-section">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-md-6 hero-content">
              <h1>Transform Your</h1>
              <h2>Digital Presence</h2>
              <p className="hero-text">
                Our platform helps businesses of all sizes create stunning digital experiences that engage customers and drive growth.
              </p>
              <button className="btn btn-primary">GET STARTED</button>
            </div>
            <div className="col-md-6 hero-image">
              <img src={heroGif} alt="Hero Animation" className="img-fluid hero-img" />
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="team-section">
        <div className="container">
          <div className="section-header text-center">
            <h3>Meet Our Team</h3>
            <p className="section-description">
              We're a passionate group of designers, developers, and strategists dedicated to delivering exceptional results.
            </p>
          </div>
        </div>
      </section>

      {/* Team Members */}
      <section className="team-members-section">
        <div className="container">
          <div className="row">
            {teamMembers.map((member) => (
              <div className="col-md-4 mb-4" key={member.id}>
                <div className="team-card h-100 p-4 text-center">
                  <div className="team-member-image mb-4">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="img-fluid rounded-circle team-member-img"
                    />
                  </div>
                  <div className="team-member-info">
                    <h4>{member.name}</h4>
                    <p className="job-title">{member.position}</p>
                    <p className="member-bio">{member.bio}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Clients Section */}
      <section className="clients-section">
        <div className="container">
          <h3 className="text-center">Trusted By Industry Leaders</h3>
          <div className="client-logos row">
            {['Arise Health', 'Ephiolent®', '2020INC', 'TREPMAX', 'Pipeflixx.co', 'TOOGETHER'].map((client) => (
              <div className="col-4 col-md-2" key={client}>
                <div className="client-logo">
                  <strong>{client}</strong>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="contact-section">
        <div className="container">
          <div className="section-header text-center">
            <h3>Get in touch</h3>
            <p className="section-description">Let us know how we can help transform your business</p>
          </div>
          <form onSubmit={handleSubmit} className="contact-form">
            <div className="form-group">
              <label className="form-label">Name</label>
              <input
                type="text"
                name="name"
                placeholder="Your full name"
                value={formData.name}
                onChange={handleChange}
                className="form-control"
              />
            </div>
            <div className="form-group">
              <label className="form-label">Email</label>
              <input
                type="email"
                name="email"
                placeholder="me@company.com"
                value={formData.email}
                onChange={handleChange}
                className="form-control"
              />
            </div>
            <div className="form-group">
              <label className="form-label">Message</label>
              <textarea
                name="message"
                placeholder="Tell us about your project..."
                value={formData.message}
                onChange={handleChange}
                className="form-control"
                rows="4"
              ></textarea>
            </div>
            <button type="submit" className="btn btn-dark w-100 send-message-btn">
              SEND MESSAGE
            </button>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="container">
          <div className="footer-content">
            <div className="footer-logo">
              <img src={logo} alt="Company Logo" className="footer-logo-img" />
            </div>
            <div className="footer-links row">
              <div className="col-md-4">
                <h5>COMPANY</h5>
                <ul>
                  <li><a href="#">How it works</a></li>
                  <li><a href="#">Pricing</a></li>
                  <li><a href="#">Demo</a></li>
                </ul>
              </div>
              <div className="col-md-4">
                <h5>RESOURCES</h5>
                <ul>
                  <li><a href="#">Case Studies</a></li>
                  <li><a href="#">Web Design Guide</a></li>
                  <li><a href="#">Digital Strategy</a></li>
                  <li><a href="#">See all resources</a></li>
                </ul>
              </div>
              <div className="col-md-4">
                <h5>ABOUT</h5>
                <ul>
                  <li><a href="#">Terms & Conditions</a></li>
                  <li><a href="#">Privacy Policy</a></li>
                </ul>
              </div>
            </div>
          </div>
          <div className="copyright">Copyright © 2025 Digital Solutions Inc.</div>
        </div>
      </footer>
    </div>
  );
}

export default App;