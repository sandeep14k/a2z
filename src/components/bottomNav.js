import React, { useState, useEffect } from "react";
import "../css/Navbar.css"; // Import custom CSS for styling
import { FaBars } from "react-icons/fa"; // Hamburger icon

const NavbarBottom = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  // Handle scroll event
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const toggleDrawer = () => {
    setIsDrawerOpen(!isDrawerOpen);
  };

  return (
    <>
      <nav className={`navbarBottom ${isScrolled ? "scrolled" : ""}`}>
        <div className="logo">
          <img src="/logo.png" alt="Logo" />
        </div>
        <ul className="nav-links">
          <li><a href="#home">Home</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#services">Service</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
        <div className="hamburger-icon" onClick={toggleDrawer}>
          <FaBars />
        </div>
      </nav>
      {isDrawerOpen && (
        <div className="side-drawer">
          <ul>
            <li><a href="#home" onClick={toggleDrawer}>Home</a></li>
            <li><a href="#about" onClick={toggleDrawer}>About</a></li>
            <li><a href="#services" onClick={toggleDrawer}>Service</a></li>
            <li><a href="#contact" onClick={toggleDrawer}>Contact</a></li>
          </ul>
        </div>
      )}
    </>
  );
};

export default NavbarBottom;
