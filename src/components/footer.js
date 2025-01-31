import React from "react";
import styles from "../css/Footer.module.css";
import {
  FaFacebookF,
  FaTwitter,
  FaPinterest,
  FaYoutube,
  FaGlobe,
  FaGlobeAmericas,
} from "react-icons/fa";
import { MdAccessTimeFilled } from "react-icons/md";
import { FiPhoneCall } from "react-icons/fi";
import { SiMinutemailer } from "react-icons/si";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerContainer}>
        <div className={styles.brandSolution}>
          <h4 className={styles.bsh}>A2Z Marketing</h4>
          <p className={styles.bdp}>
            A2Z Marketing is an Exclusive Event Management Service Provider
            Organizing Corporate Events, Marketing Programs, Special Corporate
            Hospitality Events, Commercial Events & Private Events.
          </p>
          <div className={styles.iconContainer}>
            <FaFacebookF className={styles.icon} />
            <FaTwitter className={styles.icon} />
            <FaPinterest className={styles.icon} />
            <FaYoutube className={styles.icon} />
            <FaGlobe className={styles.icon} />
          </div>
        </div>
        <div className={styles.usefulLinks}>
          <h4 className={styles.H4}>Useful Links</h4>
          <div className={styles.maindiv}>
            <ul className={styles.listContainer}>
              <li className={styles.list}>
                <a href="#"> Home</a>
              </li>
              <li className={styles.list}>
                <a href="#"> About Us</a>
              </li>
              <li className={styles.list}>
                <a href="#"> Services</a>
              </li>
              <li className={styles.list}>
                <a href="#"> Clients</a>
              </li>
              <li className={styles.list}>
                <a href="#"> Contact Us</a>
              </li>
            </ul>
          </div>
        </div>
        <div className={styles.contactUs}>
          <h4 className={styles.H4}>Contact Us</h4>
          <div className={styles.maindiv}>
            <div className={styles.subdiv}>
              <MdAccessTimeFilled size={30} />
              <h4>Mon - Sat: 09:00 - 18:00</h4>
            </div>
            <div className={styles.subdiv}>
              <FiPhoneCall size={30} />
              <p>+(91)- 9654328013</p>
            </div>
            <div className={styles.subdiv}>
              <SiMinutemailer size={30} />
              <p>pankaj@a2zmarketing.co.in</p>
            </div>
            <div className={styles.subdiv}>
              <FaGlobeAmericas size={30} />
              <p>Office:- FF163, DEVIKA CHAMBER, RDC, GHAZIABAD</p>
            </div>
            {/* Google Maps Embed */}
            <div className={styles.mapContainer}>
              <iframe
                title="A2Z Marketing Location"
                src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3500.5656225704647!2d77.4408333!3d28.6727222!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMjjCsDQwJzIxLjgiTiA3N8KwMjYnMjcuMCJF!5e0!3m2!1sen!2sin!4v1738340635093!5m2!1sen!2sin"
                width="100%"
                height="200"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </div>
        <div className={styles.footerSection}>
          <h4>Subscribe</h4>
          <input type="email" placeholder="Enter your email" />
          <button>Subscribe</button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
