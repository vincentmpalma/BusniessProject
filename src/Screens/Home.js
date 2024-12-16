import React from "react";
import "../Styles/HomeStyle.css";
import Header from "../Components/Header";
import Footer from "../Components/Footer";

export default function Home() {
  return (
    <div className="homepage">
      <Header />
      {/* Main Section */}
      <main className="main-section">
        <div className="home-container">
          {/* Logo Section */}
          <div className="home-logo">
            <img
              src="/SmartSense.png"
              alt="SmartSense Logo"
              className="logo-image"
            />
          </div>

          {/* Intro Section */}
          <div className="home-content">
            <h2>Welcome to SmartSense</h2>
            <p>
              Are you new to budgeting? SmartSense is here to help! We provide
              easy-to-follow information, practical resources, and engaging
              videos to help you take control of your finances.
            </p>
            <div className="home-links">
              <a href="/budgeting" className="home-link">
                Start Here
              </a>
              <a href="/templates" className="home-link">
                Resources
              </a>
              <a href="/faq" className="home-link">
                Contact Us
              </a>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
