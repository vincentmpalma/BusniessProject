import React from "react";
import "../Styles/FAQ.css"; // New dedicated CSS file for FAQ
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import { Link } from "react-router-dom";

function FAQ() {
  return (
    <div className="faq-page">
      <Header />
      <div className="faq-container">
        <div className="faq-header">
          <h2>Forms</h2>
        </div>
        <div className="iframe-grid">
          <iframe
            title="FAQ Form 1"
            src="https://docs.google.com/forms/d/e/1FAIpQLSeUq9ghkvA2GakkNQYRl2i_gt-fJxNbNG37PlJsTtJ-ZhJ77g/viewform?embedded=true"
            frameBorder="0"
          >
            Loading…
          </iframe>
          <iframe
            title="FAQ Form 2"
            src="https://docs.google.com/forms/d/e/1FAIpQLSeTv0_RlpUnqzc9w9E-bk15bvc_Tc2VVquOHmDvEfsNSzsNFg/viewform?embedded=true"
            frameBorder="0"
          >
            Loading…
          </iframe>
          <iframe
            title="FAQ Form 3"
            src="https://docs.google.com/forms/d/e/1FAIpQLSd-_KbQqd_Zufb2_7Itlsldidf2AQFFutBKV_4vodRhS1CGdw/viewform?embedded=true"
            frameBorder="0"
          >
            Loading…
          </iframe>
        </div>

        <div className="bottom-button-container">
          <Link to="/" className="bottom-button">
            Go to Home
          </Link>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default FAQ;
