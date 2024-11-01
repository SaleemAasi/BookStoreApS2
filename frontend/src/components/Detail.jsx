import React, { useRef, useEffect, useState } from 'react';
import '../style/Detail.css';
import DetailImage from '../images/detail image.jpg';

function Detail() {
  const headingRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.5 }
    );

    if (headingRef.current) {
      observer.observe(headingRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div className="detail-wrapper">
      <h2
        ref={headingRef}
        className={`detail-heading ${isVisible ? 'slide-in' : ''}`}
      >
        Welcome to Tassawuf Quran Academy!
      </h2>
      <div className="detail-container">
        <div className="detail-image">
          <img src={DetailImage} alt="Quran Academy" />
        </div>
        <div className="animated-box">
          <h3 className="intro-heading">About Us</h3>
         <p>
         This institute Tassawuf Quran Academy which was established in 2019 offers Islamic courses and studies of Quran to students throughout the world. Here we offer teachings in different languages like Urdu, English, Hindi, and Arabic to ensure quality education for everyone.
Here we provide students with most experienced and polite teachers who guide students on their spiritual journey. They help students to enhance their understanding level. We are making it sure that everyone get the quality education.
To see how we can assist you achieve your spiritual and educational goals start with a trial class and experience our experienced and teaching methods.
         </p>
        </div>
      </div>
    </div>
  );
}

export default Detail;
