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
          <h4 className={styles.bsh}>Brand Solution</h4>
          <p className={styles.bdp}>
            Brand Solution is an Exclusive Event Management Service Provider
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
              <div>
                <MdAccessTimeFilled size={30} />
              </div>
              <div>
                <h4>Mon - Sat: 09:00 - 18:00</h4>
              </div>
            </div>
            <div className={styles.subdiv}>
              <div>
                <FiPhoneCall size={30} />
              </div>
              <div className={styles.subsubdiv}>
                <p>+(91)- 9999688445</p>
                <p>+(91)-(11)-44725827</p>
              </div>
            </div>
            <div className={styles.subdiv}>
              <div>
                <SiMinutemailer size={30} />
              </div>
              <div className={styles.subsubdiv}>
                <p>dinesh@brandsolution.in</p>
                <p>info@brandsolution.in</p>
              </div>
            </div>
            <div className={styles.subdiv}>
              <div>
                <FaGlobeAmericas size={30} />
              </div>
              <div>
                <p>
                  Office No:-213,214, 2nd floor, HarshaComlex, Gazipur, Delhi,
                  110096
                </p>
              </div>
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