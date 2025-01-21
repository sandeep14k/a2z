import React, { useState, useEffect } from 'react';
import '../css/Navbar.css'; // Import custom CSS for styling

const NavbarBottom = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  // Handle scroll event
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <nav className={`navbarBottom ${isScrolled ? 'scrolled' : ''}`}>
      <div className="logo">
        <img src="/logo.png" alt="Logo" /> {/* Replace with your logo */}
      </div>
      <ul className="nav-links">
        <li><a href="#home">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#services">Service</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
    </nav>
  );
};

export default NavbarBottom;
