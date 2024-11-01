import React from 'react';
import '../style/Header.css';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="carousel">
      <ol className="carousel-indicators">
        <li data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active"></li>
        <li data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1"></li>
        <li data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2"></li>
      </ol>
      <div className="carousel-inner">
        {/* First Slide */}
        <div className="carousel-item active slider1">
          <div className="carousel-caption d-none d-md-block">
            <h1 className="MainHeading">Tasawwuf Quran Academy</h1>
            {/* Added Quran verse */}
            <h3>“Recite in the name of your Lord who created.” (Quran 96:1)</h3>
            <h5>“Illuminating Hearts and Minds: Embark on a Transformative Journey with the Quran.”</h5>
            <Link to="/register">
              <button className="mt-4 cta-button">Enroll Today</button>
            </Link>
          </div>
        </div>

        {/* Second Slide */}
        <div className="carousel-item slider2">
          <div className="carousel-caption d-none d-md-block">
            <h1 className="MainHeading">Empower Your Soul</h1>
            {/* Added Quran verse */}
            <h3>“Indeed, it is We who sent down the Quran and indeed, We will be its guardian.” (Quran 15:9)</h3>
            <h5>“Explore the depths of knowledge with our experienced teachers.”</h5>
            <Link to="/register">
              <button className="mt-4 cta-button">Enroll Today</button>
            </Link>
          </div>
        </div>

        {/* Third Slide */}
        <div className="carousel-item slider3">
          <div className="carousel-caption d-none d-md-block">
            <h1 className="MainHeading">Path to Enlightenment</h1>
            {/* Added Hadith */}
            <h3>“The best of you are those who learn the Quran and teach it.” (Hadith)</h3>
            <h5>“Join us in spreading the light of the Quran across the globe.”</h5>
            <Link to="/register">
              <button className="mt-4 cta-button">Enroll Today</button>
            </Link>
          </div>
        </div>
      </div>

      <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-bs-slide="prev">
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </a>
      <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-bs-slide="next">
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </a>
    </div>
  );
}

export default Header;
