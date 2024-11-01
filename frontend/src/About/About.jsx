import React from 'react';
import { Link } from 'react-router-dom';
import './About.css';
import aboutImg from '../images/about page image.webp'; // Ensure correct image path
import courseImg1 from '../images/about page image.webp';  // Example course image
import courseImg2 from '../images/about page image.webp'; // Example course image
import courseImg3 from '../images/about page image.webp'; // Example course image
import courseImg4 from '../images/about page image.webp'; // Example course image
import courseImg5 from '../images/about page image.webp';  // Example course image
import courseImg6 from '../images/about page image.webp';// Example course image
import courseImg7 from '../images/about page image.webp';   // Example course image
import courseImg8 from '../images/about page image.webp';  // Example course image

function About() {
  const courses = [
    { title: 'Basic Tajweed Course', description: 'Learn the fundamentals of Tajweed.', image: courseImg1, link: '/courses/basic-tajweed' },
    { title: 'Advanced Tajweed Course', description: 'Master Tajweed rules and pronunciation.', image: courseImg2, link: '/courses/advanced-tajweed' },
    { title: 'Quran Memorization Course', description: 'Memorize the Holy Quran effectively.', image: courseImg3, link: '/courses/quran-memorization' },
    { title: 'Basic Islamic Studies', description: 'Understand the core principles of Islam.', image: courseImg4, link: '/courses/islamic-studies' },
    { title: 'Quranic Arabic Course', description: 'Learn the language of the Quran.', image: courseImg5, link: '/courses/quranic-arabic' },
    { title: 'Hifz Course', description: 'A structured program to memorize the entire Quran.', image: courseImg6, link: '/courses/hifz' },
    { title: 'Fiqh and Hadith Course', description: 'Explore the teachings of Fiqh and Hadith.', image: courseImg7, link: '/courses/fiqh-hadith' },
    { title: 'Seerah of Prophet Muhammad (PBUH)', description: 'Learn about the life of Prophet Muhammad (PBUH).', image: courseImg8, link: '/courses/seerah' },
  ];

  return (
    <div className="about-page-container">
      <div className="about-registration-container bag-About">
        <div className="about-registration-header">
          <h1>About Us</h1>
        </div>
        <hr className="about-design-line" />
        {/* <div className="about-registration-content">
          <p>
            <Link to="/" className="home-link">Home</Link> / About Us
          </p>
        </div> */}
      </div>

      <div className="about-content">
        <div className="about-text">
          <h2>About Quran-Edu!</h2>
          <p>
            Tasawwuf Quran Academy is an online platform based in Pakistan, dedicated to teaching the Quran. Founded in 2018, its mission is to spread the teachings of the Quran in the modern digital age. Unlike decades ago, when access to Islamic education was often limited to mosques or madrasas, Tasawwuf Quran Academy leverages the internet to provide high-quality Quranic education to students worldwide. Whether for adults or children, our academy offers a convenient way to learn the Quran from the comfort of home while maintaining the integrity and tradition of Islamic studies. Our graduates become proficient in reciting the Quran with proper Tajweed.
          </p>
          <Link to="/Check">
            <button className="about-course-button">Check Out Course</button>
          </Link>
        </div>
        <div className="about-image">
          <img src={aboutImg} alt="Online Quran School" />
        </div>
      </div>

      <div className="about-additional-info">
  <h2 className="about-section-title">Quran For Everybody</h2>
  <p>
    At Tasawwuf Quran Academy, we believe the Quran’s message is universal and timeless, accessible to people of all ages and backgrounds. Our aim is to provide a learning environment where anyone, regardless of their location, can connect with the teachings of the Quran. Through our flexible online courses, students can learn at their own pace, ensuring that no one is left behind in their journey of understanding and reciting the Quran.
  </p>

  <h2 className="about-section-title">Syllabus</h2>
  <p>
    Our curriculum is designed to make learning the Quran both effective and engaging. We start with the basics, using the Noorani Qaida for beginners, which introduces students to the Arabic alphabet, pronunciation, and basic reading skills. As students progress, they move on to advanced Quran reading, memorization, and Tajweed rules, ensuring they develop both fluency and precision in reciting the Quran.
  </p>

  <h2 className="about-section-title">Faculty</h2>
  <p>
    Our faculty comprises highly experienced teachers who are not only experts in Quranic studies but are also trained in teaching methodologies suited to online learning. They are dedicated to helping students of all levels, whether they are beginners or advanced learners. With a deep understanding of Tajweed, Tafsir, and Hifz, our teachers ensure each student receives personalized attention and guidance throughout their studies.
  </p>
</div>

      {/* New Courses Section */}
      <div className="about-courses-section">
        <h2 className="about-section-title">Our Courses</h2>
        <div className="courses-container">
          {courses.map((course, index) => (
            <div className="course-card" key={index}>
              <img src={course.image} alt={course.title} className="course-image" />
              <h5>{course.title}</h5>
              <p>{course.description} <span>  <Link to="/Check" className="read-more-link">Read More</Link></span></p>
              <Link to="/register">
              <button className="register-button">Register</button>
            </Link>
             
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default About;
