import React from "react";
import "./Integrations.css";
import logo512 from "../assets/images/logo512.png"; // Import the logo

const Integrations = () => {
  return (
    <div className="integrations-page">

      <header className="header">
        {/* Navbar */}
        <nav className="navbar">
          <div className="nav-left">
            <img src={logo512} alt="Caveira Logo" className="logo" />
            <span className="brand">Your App</span>
          </div>
          <div className="nav-links">
          <a href="/">Home</a> {/* Home link */}
            <a href="/solutions">Solutions and Services</a> {/* Solutions link */}
            <a href="/integrations">Integrations</a> {/* Solutions link */}
            <a href="/pricing">Pricing</a> {/* Pricing link */}
          </div>
          <div className="nav-right">
            <span className="sales">Sales: +11 (11) 111-1111</span>
            <button className="login">Log In</button>
            <button className="signup">Sign Up</button>
          </div>
        </nav>
      </header>

      <header className="integrations-hero">
        <h1>Integrations</h1>
        <p>Connect your favorite tools and streamline your workflow.</p>
      </header>

      <section className="integrations-section">
        <div className="integration-card">
          <h2>CRM Integration</h2>
          <p>Sync your customer data seamlessly with our CRM integrations.</p>
        </div>
        <div className="integration-card">
          <h2>Marketing Tools</h2>
          <p>Integrate with top marketing platforms to boost your campaigns.</p>
        </div>
        <div className="integration-card">
          <h2>Analytics Platforms</h2>
          <p>Connect with analytics tools to gain actionable insights.</p>
        </div>
      </section>

      <footer className="integrations-footer">
        <p>
          Ready to integrate your tools?{" "}
          <button className="cta-button">Get Started</button>
        </p>
      </footer>
    </div>
  );
};

export default Integrations;