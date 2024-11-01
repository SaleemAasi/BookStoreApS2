import React from 'react';
import './Fee.css';
import { Link } from 'react-router-dom';
import quranImage from '../images/fee imagee.webp'; // Ensure the correct path to your image

function Fee() {
  return (
    <>
      <div className="about-registration-container">
        <div className="about-registration-header">
          <h1>Hadya/Fee</h1>
        </div>
        <hr className="about-design-line" />
        {/* <div className="about-registration-content">
          <p>
            <Link to="/" className="home-link">
              Home
            </Link>{' '}
            / Hadya/Fee
          </p>
        </div> */}
      </div>

      <h2 className="centered-heading">Online Quran Classes</h2>
      <div className="content-container">
        <p className="left-content">
        Tassawuf quran Academy offers a variety of online Quran classes and learning options to meet the needs of its students. We have also designed special weekend courses for those who are working. Have a look at the study options and select the one you like the most!
          <br /><br />
          At our Online Quran Institute, you will find an affordable Fee structure for the courses. If you cannot afford the courses, don’t worry! We also provide financial assistance to the deserving students.
          <br /><br />
          We are verified by PayPal. However, you can also pay through Direct Bank Deposit, and various payment gateways.
        </p>
        <img src={quranImage} alt="Quran" className="right-image" />
      </div>

      <h3 className="important-info-heading">Important Information:</h3>
      <ul className="important-info-list">
        <li>Proper time for every individual Student.</li>
        <li>Up to 20 minutes for every Class (Up to 45 minutes for The Holy Quran Memorize).</li>
        <li>On the end of every month Test will be conducted.</li>
        <li>Parents meeting with admin.</li>
        <li>Classes will be conducted on Student’s desired timing and days.</li>
        <li>Facility available for group Classes.</li>
        <li>Video of every lesson after the Class (We are sending link of videos to our Students and this is another extra effort that is making us different from other Online Quran Institutes).</li>
        <li>3 Days Free Trial Classes.</li>
        <li>Availability of Teacher Whenever Student has any question about lesson or any other Islamic Studies.</li>
        <li>We are offering special discount for more than four students from the same family/household.</li>
        <li>Online Quran Academy is providing highly excellent academic facilities at very low and cheap Hadya/Fee.</li>
        <li>Multi Payment Options.</li>
        <li>Tassawuf quran academy is providing Free Quran Classes for those who can’t afford to pay for our premium classes. With our Free Quran Classes you can access our all futures that are available for premium members so, feel free to register yourself for Free Quran Classes.</li>
      </ul>
      <p className='ml-2'>If you have any further queries, please do not hesitate to <Link to="/contact">contact with us</Link>.</p>
      
      <div className="cards-container">
        <div className="card">
          <div className="card-header">
            <h3>2 Days Classes</h3>
            <span>in a week</span>
          </div>
          <div className="card-price">
            <span className="currency">£</span>
            <span className="amount">20</span>
            <span className="period">Monthly</span>
          </div>
          <ul className="card-features">
            <li>3 Days free trial</li>
            <li>Up to 20 Minutes</li>
            <li>8 Classes Per Month</li>
            <li>Monthly Test</li>
            <li>Admin Meeting</li>
          </ul>
          <div className="card-footer">
            <Link to="/register" className="register-button">Register Now</Link>
          </div>
        </div>
        <div className="card">
          <div className="card-header">
            <h3>3 Days Classes</h3>
            <span>in a week</span>
          </div>
          <div className="card-price">
            <span className="currency">£</span>
            <span className="amount">28</span>
            <span className="period">Monthly</span>
          </div>
          <ul className="card-features">
            <li>3 Days free trial</li>
            <li>Up to 30 Minutes</li>
            <li>12 Classes Per Month</li>
            <li>Monthly Test</li>
            <li>Admin Meeting</li>
          </ul>
          <div className="card-footer">
            <Link to="/register" className="register-button">Register Now</Link>
          </div>
        </div>
        <div className="card">
          <div className="card-header">
            <h3>4 Days Classes</h3>
            <span>in a week</span>
          </div>
          <div className="card-price">
            <span className="currency">£</span>
            <span className="amount">36</span>
            <span className="period">Monthly</span>
          </div>
          <ul className="card-features">
            <li>3 Days free trial</li>
            <li>Up to 40 Minutes</li>
            <li>16 Classes Per Month</li>
            <li>Monthly Test</li>
            <li>Admin Meeting</li>
          </ul>
          <div className="card-footer">
            <Link to="/register" className="register-button">Register Now</Link>
          </div>
        </div>
        <div className="card">
          <div className="card-header">
            <h3>5 Days Classes</h3>
            <span>in a week</span>
          </div>
          <div className="card-price">
            <span className="currency">£</span>
            <span className="amount">46</span>
            <span className="period">Monthly</span>
          </div>
          <ul className="card-features">
            <li>3 Days free trial</li>
            <li>Up to 50 Minutes</li>
            <li>20 Classes Per Month</li>
            <li>Monthly Test</li>
            <li>Admin Meeting</li>
          </ul>
          <div className="card-footer">
            <Link to="/register" className="register-button">Register Now</Link>
          </div>
        </div>
        <div className="card">
          <div className="card-header">
            <h3>6 Days Classes</h3>
            <span>in a week</span>
          </div>
          <div className="card-price">
            <span className="currency">£</span>
            <span className="amount">50</span>
            <span className="period">Monthly</span>
          </div>
          <ul className="card-features">
            <li>3 Days free trial</li>
            <li>Up to 60 Minutes</li>
            <li>24 Classes Per Month</li>
            <li>Monthly Test</li>
            <li>Admin Meeting</li>
          </ul>
          <div className="card-footer">
            <Link to="/register" className="register-button">Register Now</Link>
          </div>
        </div>
      </div>
      <h2 className='mt-4 mb-4 text-center'>Pound Sterling Pricing Table</h2>
      <div className="cards-container">
        <div className="card">
          <div className="card-header">
            <h3>2 Days Classes</h3>
            <span>in a week</span>
          </div>
          <div className="card-price">
            <span className="currency">$</span>
            <span className="amount">35</span>
            <span className="period">Monthly</span>
          </div>
          <ul className="card-features">
            <li>3 Days free trial</li>
            <li>Up to 20 Minutes</li>
            <li>8 Classes Per Month</li>
            <li>Monthly Test</li>
            <li>Admin Meeting</li>
          </ul>
          <div className="card-footer">
            <Link to="/register" className="register-button">Register Now</Link>
          </div>
        </div>
        
        <div className="card">
          <div className="card-header">
            <h3>3 Days Classes</h3>
            <span>in a week</span>
          </div>
          <div className="card-price">
            <span className="currency">$</span>
            <span className="amount">50</span>
            <span className="period">Monthly</span>
          </div>
          <ul className="card-features">
            <li>3 Days free trial</li>
            <li>Up to 30 Minutes</li>
            <li>12 Classes Per Month</li>
            <li>Monthly Test</li>
            <li>Admin Meeting</li>
          </ul>
          <div className="card-footer">
            <Link to="/register" className="register-button">Register Now</Link>
          </div>
        </div>
        <div className="card">
          <div className="card-header">
            <h3>4 Days Classes</h3>
            <span>in a week</span>
          </div>
          <div className="card-price">
            <span className="currency">$</span>
            <span className="amount">65</span>
            <span className="period">Monthly</span>
          </div>
          <ul className="card-features">
            <li>3 Days free trial</li>
            <li>Up to 40 Minutes</li>
            <li>16 Classes Per Month</li>
            <li>Monthly Test</li>
            <li>Admin Meeting</li>
          </ul>
          <div className="card-footer">
            <Link to="/register" className="register-button">Register Now</Link>
          </div>
        </div>
        <div className="card">
          <div className="card-header">
            <h3>5 Days Classes</h3>
            <span>in a week</span>
          </div>
          <div className="card-price">
            <span className="currency">$</span>
            <span className="amount">80</span>
            <span className="period">Monthly</span>
          </div>
          <ul className="card-features">
            <li>3 Days free trial</li>
            <li>Up to 50 Minutes</li>
            <li>20 Classes Per Month</li>
            <li>Monthly Test</li>
            <li>Admin Meeting</li>
          </ul>
          <div className="card-footer">
            <Link to="/register" className="register-button">Register Now</Link>
          </div>
        </div>
        <div className="card">
          <div className="card-header">
            <h3>6 Days Classes</h3>
            <span>in a week</span>
          </div>
          <div className="card-price">
            <span className="currency">$</span>
            <span className="amount">95</span>
            <span className="period">Monthly</span>
          </div>
          <ul className="card-features">
            <li>3 Days free trial</li>
            <li>Up to 60 Minutes</li>
            <li>24 Classes Per Month</li>
            <li>Monthly Test</li>
            <li>Admin Meeting</li>
          </ul>
          <div className="card-footer">
            <Link to="/register" className="register-button">Register Now</Link>
          </div>
        </div>
      </div>
      <h2 className='mt-4  text-center'>Pricing Tables Of Your Desired Plans For Arabic and Tafseer Courses</h2>
      <h4 className='mb-2 text-center'>United States Currency Pricing Table</h4>

      <div className="cards-container">
        <div className="card">
          <div className="card-header-l">
            <h3>2 Days Classes</h3>
            <span >in a week</span>
          </div>
          <div className="card-price">
            <span className="currency">$</span>
            <span className="amount">20</span>
            <span className="period">Monthly</span>
          </div>
          <ul className="card-features">
            <li>3 Days free trial</li>
            <li>Up to 20 Minutes</li>
            <li>8 Classes Per Month</li>
            <li>Monthly Test</li>
            <li>Admin Meeting</li>
          </ul>
          <div className="card-footer">
            <Link to="/register" className="register-button">Register Now</Link>
          </div>
        </div>
        <div className="card">
          <div className="card-header-l">
            <h3>3 Days Classes</h3>
            <span>in a week</span>
          </div>
          <div className="card-price">
            <span className="currency">$</span>
            <span className="amount">50</span>
            <span className="period">Monthly</span>
          </div>
          <ul className="card-features">
            <li>3 Days free trial</li>
            <li>Up to 30 Minutes</li>
            <li>12 Classes Per Month</li>
            <li>Monthly Test</li>
            <li>Admin Meeting</li>
          </ul>
          <div className="card-footer">
            <Link to="/register" className="register-button">Register Now</Link>
          </div>
        </div>
        <div className="card">
          <div className="card-header-l">
            <h3>4 Days Classes</h3>
            <span>in a week</span>
          </div>
          <div className="card-price">
            <span className="currency">$</span>
            <span className="amount">65</span>
            <span className="period">Monthly</span>
          </div>
          <ul className="card-features">
            <li>3 Days free trial</li>
            <li>Up to 40 Minutes</li>
            <li>16 Classes Per Month</li>
            <li>Monthly Test</li>
            <li>Admin Meeting</li>
          </ul>
          <div className="card-footer">
            <Link to="/register" className="register-button">Register Now</Link>
          </div>
        </div>
        
       
      </div>
      <div className="free-classes-container p-5">
      <h2>Free Online Quran Classes</h2>
      <div className="content-wrapper">
        <p>
        Tassawuf quran academy is providing Free Quran Classes for those who cannot afford to pay for our premium classes.
          <br /><br />
          With our Free Online Quran Classes, you can access all features that are available for premium members. Feel free to register yourself for Online Quran Classes.
        </p>
        <Link to="/register">
          <button className="register-button">Register</button>
        </Link>
      </div>
    </div>
    </>
  );
}

export default Fee;