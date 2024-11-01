import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import '../style/NavbarStyle.css'; // Adjust the path as necessary
import logo from '../images/log_nav_1-removebg-preview.png'; // Adjust the path as necessary

function Navbar() {
  const location = useLocation();

  // Define the paths and corresponding labels
  const paths = ['/', '/about', '/Check', '/Fee', '/ContactUs'];
  const labels = ['Home', 'About Us', 'Courses', 'Fee', 'Contact Us']; // Changed 'Blog' to 'Courses'

  return (
    <nav className="navbar navbar-expand-lg custom-navbar fixed-top"> {/* Added fixed-top class */}
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">
          <img src={logo} alt="Logo" className="navbar-logo" />
        </Link>
        <button 
          className="navbar-toggler" 
          type="button" 
          data-bs-toggle="collapse" 
          data-bs-target="#navbarSupportedContent" 
          aria-controls="navbarSupportedContent" 
          aria-expanded="false" 
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse justify-content-between" id="navbarSupportedContent">
          <ul className="navbar-nav mb-2 mb-lg-0">
            {paths.map((path, index) => (
              <li className="nav-item" key={index}>
                <Link className={`nav-link ${location.pathname === path ? 'active' : ''}`} to={path}>
                  {labels[index]}
                </Link>
              </li>
            ))}
          </ul>
          <div className="d-flex align-items-center" style={{ marginLeft: 'auto', marginRight: '20px' }}>
            <Link to="/register">
              <button className="btn btn-warning animated-button">Register now</button>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
