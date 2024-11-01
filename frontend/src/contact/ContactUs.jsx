import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './ContactUs.css';
import facebookIcon from '../images/facebook.png';
import twitterIcon from '../images/twitter.png';
import instagramIcon from '../images/instagram.png';

function ContactUs() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    content: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    fetch('http://localhost:5000/contact', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        alert('Message sent successfully');
      })
      .catch((error) => {
        console.error('Error:', error);
        alert('Failed to send message');
      });
  };

  return (
    <div className="contact-page-container">
      <div className="contact-header">
        <h1>Contact Us</h1>
      </div>
      <hr className="contact-design-line" />
      <div className="contact-breadcrumb">
        <p>
          <Link to="/" className="home-link">
            Home
          </Link>{' '}
          / Contact Us
        </p>
      </div>
      <div className="contact-content">
        <div className="contact-form-container">
          <h2>Get in Touch</h2>
          <form className="contact-form" onSubmit={handleSubmit}>
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              value={formData.email}
              onChange={handleChange}
              required
            />
            <textarea
              name="content"
              placeholder="Your Message"
              rows="6"
              value={formData.content}
              onChange={handleChange}
              required
            ></textarea>
            <button type="submit">Send Message</button>
          </form>
        </div>
        <div className="contact-info-container">
          <h2>Connect With Us</h2>
          <p>Feel free to reach out to us through any of the following platforms:</p>
          <div className="social-icons">
            <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
              <img src={facebookIcon} alt="Facebook" />
            </a>
            <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">
              <img src={twitterIcon} alt="Twitter" />
            </a>
            <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
              <img src={instagramIcon} alt="Instagram" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactUs;
