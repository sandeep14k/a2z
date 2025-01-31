import React from "react";
import "../css/AboutCompany.css"; // Import the CSS file

const AboutCompany = () => {
  return (
    <section className="about-section">
      {/* Left Section */}
      <div className="about-left">
        <p className="about-text">ABOUT COMPANY</p>
        <h2 className="about-heading">Welcome to A2Z Marketing</h2>
        <div className="about-description">
          A2Z Marketing is an Exclusive Event Management Service Provider
          Organizing Corporate Events, Marketing Programs, Special Corporate
          Hospitality Events, Commercial Events & Private Events
        </div>
        <ul className="about-list">
          {[
            "Event Management Service Provider.",
            "Organizing Corporate Events.",
            "Marketing Programs.",
            "Special Corporate Hospitality Events.",
            "Branding and Wall Painting.",
          ].map((item, index) => (
            <li key={index} className="about-list-item">
              <span className="checkmark">✓</span>
              {item}
            </li>
          ))}
        </ul>

        {/* Read More Button */}
        <button className="read-more-btn">
          <span>Read More</span>
        </button>
      </div>

      {/* Right Section */}
      <div className="about-right">
        <div className="about-image-container">
          <img src="about.jpg" alt="Company" className="about-image" />
        </div>
      </div>
    </section>
  );
};

export default AboutCompany;
