import React from 'react';
import { FaLinkedin, FaInstagram, FaTwitter } from 'react-icons/fa';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <ul className="iconList">
        <li className="iconItem">
          <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
            <FaLinkedin className="icon" />
          </a>
        </li>
        <li className="iconItem">
          <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
            <FaInstagram className="icon" />
          </a>
        </li>
        <li className="iconItem">
          <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">
            <FaTwitter className="icon" />
          </a>
        </li>
      </ul>
      <p >© All rights reserved.</p>
    </footer>
  );
};

export default Footer;