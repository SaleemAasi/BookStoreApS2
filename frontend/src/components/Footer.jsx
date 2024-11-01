import React from 'react';
import '../style/Footer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {  faInstagram, faFacebook } from '@fortawesome/free-brands-svg-icons';
import { Link, useLocation } from 'react-router-dom';

const Footer = () => {
  const location = useLocation(); // Hook to get the current path
  
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section about">
          <h1 className="logo-text"><span>Tassawuf</span> Academy</h1>
          <p>
            We are dedicated to providing quality education about Quran and Tajweed.
          </p>
          <div className="contact">
            <span><i className="fas fa-phone"></i> &nbsp; +923319196666</span>
            <span><i className="fas fa-envelope"></i> &nbsp; Tasawuf.Quran.com</span>
          </div>
          <div className="socials">
          
            <a href="https://instagram.com/tasawufquran_academy" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faInstagram} />
            </a>
            <a href="https://facebook.com/Tasawuf Quran Academy-TAQ" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faFacebook} />
            </a>
          </div>
        </div>

        <div className="footer-section links">
          <h2>Quick Links</h2>
          <br />
          <ul className="navbar-nav mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className={`nav-link ${location.pathname === '/' ? 'active' : ''}`} to="/">Home</Link>
            </li>
            <li className="nav-item">
              <Link className={`nav-link ${location.pathname === '/about' ? 'active' : ''}`} to="/about">About Us</Link>
            </li>
            <li className="nav-item">
              <Link className={`nav-link ${location.pathname === '/blog' ? 'active' : ''}`} to="/Check">Blog</Link>
            </li>
            <li className="nav-item">
              <Link className={`nav-link ${location.pathname === '/fee' ? 'active' : ''}`} to="/Fee">Fee</Link>
            </li>
            <li className="nav-item">
              <Link className={`nav-link ${location.pathname === '/courses' ? 'active' : ''}`} to="/Check">Courses</Link>
            </li>
            <li className="nav-item">
              <Link className={`nav-link ${location.pathname === '/contact' ? 'active' : ''}`} to="/ContactUs">Contact Us</Link>
            </li>
          </ul>
        </div>

        <div className="footer-section contact-form">
          <h2>Contact Us</h2>
          <br />
          <form action="http://localhost:5000/api/contact" method="post">
  <input type="email" name="email" className="text-input contact-input" placeholder="Your email address..." required />
  <textarea rows="4" name="message" className="text-input contact-input" placeholder="Your message..." required></textarea>
  <button type="submit" className="btn btn-primary">Send</button>
</form>
        </div>
      </div>

      <div className="footer-bottom">
        &copy; {new Date().getFullYear()} Tassawuf Academy. All rights reserved.
      </div>
    </footer>
  );
}

export default Footer;
