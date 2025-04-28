import React from "react";
import "./Pricing.css";
import logo512 from "../assets/images/logo512.png"; // Import the logo

const Pricing = () => {
  return (
    <div className="pricing-page">

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



      <header className="pricing-hero">
        <h1>Pricing</h1>
        <p>Choose the plan that fits your needs and budget.</p>
      </header>

      <section className="pricing-section">
        <div className="pricing-card">
          <h2>Basic Plan</h2>
          <p>$10/month</p>
          <p>Perfect for individuals and small teams.</p>
          <button className="cta-button">Choose Plan</button>
        </div>
        <div className="pricing-card">
          <h2>Pro Plan</h2>
          <p>$30/month</p>
          <p>Ideal for growing businesses and startups.</p>
          <button className="cta-button">Choose Plan</button>
        </div>
        <div className="pricing-card">
          <h2>Enterprise Plan</h2>
          <p>Contact Us</p>
          <p>Custom solutions for large organizations.</p>
          <button className="cta-button">Contact Sales</button>
        </div>
      </section>

      <footer className="pricing-footer">
        <p>
          Ready to get started?{" "}
          <button className="cta-button">Sign Up Now</button>
        </p>
      </footer>
    </div>
  );
};

export default Pricing;
