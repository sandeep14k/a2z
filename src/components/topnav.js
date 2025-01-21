import React, { useState, useEffect } from "react";
import "../css/Navbar.css";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";

const Navbar = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [prevScrollY, setPrevScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY > 0) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }
      setPrevScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [prevScrollY]);

  return (
    <div className={`navbar ${isVisible ? "visible" : "hidden"}`}>
      <div className="navbar-content">
        <p>Best choice for Wall Painting & Events.</p>
        <div className="social-icons">
          <FaFacebook className="icon" />
          <FaInstagram className="icon" />
          <FaTwitter className="icon" />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
