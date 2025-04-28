import React from "react";
import "./Solutions.css";
import logo512 from "../assets/images/logo512.png";

const Solutions = () => {
  return (
    <div className="solutions-page">
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

      <header className="solutions-hero">
        <h1>Our Solutions</h1>
        <p>Explore the tools and services that drive your success.</p>
      </header>

      <section className="solutions-section">
        <div className="solution-card">
          <h2>Marketing Solutions</h2>
          <p>Boost your reach with personalized marketing campaigns tailored to your audience.</p>
        </div>
        <div className="solution-card">
          <h2>Sales Solutions</h2>
          <p>Empower your sales team with intelligent automation and real-time insights.</p>
        </div>
        <div className="solution-card">
          <h2>Customer Support</h2>
          <p>Delight your customers with faster, more efficient support channels.</p>
        </div>
      </section>

      <footer className="solutions-footer">
        <p>
          Ready to transform your business?{" "}
          <button className="cta-button">Get Started</button>
        </p>
      </footer>
    </div>
  );
};

export default Solutions;
