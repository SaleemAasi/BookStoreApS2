import React, { useState } from 'react';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import '../style/DidYouKnow.css'; // Ensure you have this CSS file for animations

const Accordion = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleToggle = (index) => {
    setActiveIndex(index === activeIndex ? -1 : index);
  };

  const items = [
    {
      id: 'panelsStayOpen-headingOne',
      title: 'Quranic Studies Overview',
      content: 'Welcome to the Tassawuf Quran Academy\'s Quranic Studies Overview. Our academy provides comprehensive studies on the Quran, including Tafsir (interpretation), Tajweed (pronunciation rules), and the understanding of various Quranic concepts. Our experienced instructors guide you through the depths of the Quran to enhance your spiritual and academic knowledge.'
    },
    {
      id: 'panelsStayOpen-headingTwo',
      title: 'Tafsir Classes',
      content: 'Our Tafsir Classes delve into the interpretation of the Quran. We offer detailed classes that explore the meanings, context, and application of Quranic verses. These sessions are designed to deepen your understanding of the Quran and how it applies to daily life, guided by qualified scholars with extensive knowledge.'
    },
    {
      id: 'panelsStayOpen-headingThree',
      title: 'Tajweed and Recitation',
      content: 'Master Tajweed and Quranic Recitation with our expert guidance. Our Tajweed classes focus on the precise pronunciation and articulation of Quranic words, ensuring that each recitation adheres to the rules of Tajweed. Whether you\'re a beginner or looking to refine your skills, our academy provides personalized instruction to help you achieve mastery.'
    },
    {
      id: 'panelsStayOpen-headingFour',
      title: 'Islamic History Classes',
      content: 'Explore the rich history of Islam with our Islamic History Classes. We cover significant events, influential figures, and pivotal moments in Islamic history, providing a comprehensive understanding of the historical context that shapes our faith today.'
    },
    {
      id: 'panelsStayOpen-headingFive',
      title: 'Arabic Language Courses',
      content: 'Enhance your understanding of the Quran and Hadith through our Arabic Language Courses. Our classes focus on modern and classical Arabic, helping you gain proficiency in reading, writing, and speaking the language of the Quran.'
    }
  ];

  return (
    <div className="accordion-container">
      <h2 className="accordion-heading">Explore Our Quranic Programs</h2>
      <div className="accordion" id="accordionPanelsStayOpenExample">
        <TransitionGroup>
          {items.map((item, index) => (
            <CSSTransition
              key={item.id}
              timeout={300}
              classNames="accordion-transition"
            >
              <div className="accordion-item">
                <h2 className="accordion-header" id={item.id}>
                  <button
                    className={`accordion-button ${activeIndex === index ? '' : 'collapsed'}`}
                    type="button"
                    onClick={() => handleToggle(index)}
                    aria-expanded={activeIndex === index}
                    aria-controls={item.id}
                  >
                    {item.title}
                  </button>
                </h2>
                <div
                  id={item.id}
                  className={`accordion-collapse collapse ${activeIndex === index ? 'show' : ''}`}
                  aria-labelledby={item.id}
                >
                  <div className="accordion-body">
                    <strong>{item.content}</strong>
                  </div>
                </div>
              </div>
            </CSSTransition>
          ))}
        </TransitionGroup>
      </div>
    </div>
  );
};

export default Accordion;
