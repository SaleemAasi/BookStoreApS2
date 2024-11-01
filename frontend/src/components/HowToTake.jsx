import React from 'react';
import '../style/Howto.css'; // Import your CSS file for styling
import '@fortawesome/fontawesome-free/css/all.css'; // Import FontAwesome CSS
import { Link } from 'react-router-dom';

function HowTo() {
  return (
    <div className="how-to-container">
      <div className="flip-box">
        <div className="flip-box-inner">
          <div className="flip-box-front">
            <div className="icon-circle">
              <i className="fas fa-clock fa-3x"></i>
            </div>
            <h2>Flexible Timing</h2>
            <p>Learn at your own pace.</p>
          </div>
          <div className="flip-box-back">
            <h2>Flexible Timing</h2>
            <p>Adjust your learning schedule as needed. Our classes fit around your availability.</p>
            <Link to="/register">
              <button className="register-button">Register now</button>
            </Link>
          </div>
        </div>
      </div>

      <div className="flip-box">
        <div className="flip-box-inner">
          <div className="flip-box-front">
            <div className="icon-circle">
              <i className="fas fa-users fa-3x"></i>
            </div>
            <h2>Interactive Learning</h2>
            <p>Engage with our community.</p>
          </div>
          <div className="flip-box-back">
            <h2>Interactive Learning</h2>
            <p>Join a community where you can interact with both teachers and peers for a more enriching experience.</p>
            <Link to="/register">
              <button className="register-button">Register now</button>
            </Link>
          </div>
        </div>
      </div>

      <div className="flip-box">
        <div className="flip-box-inner">
          <div className="flip-box-front">
            <div className="icon-circle">
              <i className="fas fa-mobile-alt fa-3x"></i>
            </div>
            <h2>Any Device</h2>
            <p>Accessible from anywhere.</p>
          </div>
          <div className="flip-box-back">
            <h2>Any Device</h2>
            <p>Access classes from any device—phone, tablet, or computer—anywhere you are.</p>
            <Link to="/register">
              <button className="register-button">Register now</button>
            </Link>
          </div>
        </div>
      </div>

      <div className="flip-box">
        <div className="flip-box-inner">
          <div className="flip-box-front">
            <div className="icon-circle">
              <i className="fas fa-graduation-cap fa-3x"></i>
            </div>
            <h2>Personal Attention</h2>
            <p>One-on-one sessions.</p>
          </div>
          <div className="flip-box-back">
            <h2>Personal Attention</h2>
            <p>Receive individual attention from our expert teachers, ensuring personalized learning.</p>
            <Link to="/register">
              <button className="register-button">Register now</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HowTo;
