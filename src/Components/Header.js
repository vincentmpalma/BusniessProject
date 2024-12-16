import React from "react";
import "../Styles/Style.css";
import { Helmet } from "react-helmet";

export default function Header() {
  return (
    <header className="header">
      <Helmet>
        <title>SmartSense</title>
      </Helmet>
      <div className="header-content">
        {/* Logo Image */}
        <a href="/" className="logo-container">
          <img
            src="/SmartSenseHeaderLogoWHITE.png"
            alt="SmartSense Logo"
            className="logo-image"
          />
        </a>

        {/* Navigation Menu */}
        <nav className="navbar">
          <a href="/" className="nav-link">
            Home
          </a>
          <a href="/budgeting" className="nav-link">
            Budgeting
          </a>
          <a href="/templates" className="nav-link">
            Templates
          </a>
          <a href="/videos" className="nav-link">
            Videos
          </a>
          <a href="/faq" className="nav-link">
            Contact/Forms
          </a>
        </nav>
      </div>
    </header>
  );
}
