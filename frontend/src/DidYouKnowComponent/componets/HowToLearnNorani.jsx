import React from 'react';

import '../style/HowToLearnQaida.css'; // Make sure the correct style is imported
import { useLocation } from 'react-router-dom';
function HowToLearnNorani() {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const topic = queryParams.get('topic');

  // Define content for each topic
  const contentData = {
    HowToLearnQaida: {
      title: "How to learn Norani Qaida",
      breadcrumb: "How to learn Norani Qaida",
      content: [
        "Norani Qaida has been a staple for Arabic and Quranic reading for centuries...",
        "Norani Qaida has 16 lessons. Each lesson communicates some basic principles...",
        "There are two ways to learn Norani Qaida. You can either read it with spelling...",
        "Our online Quran teachers teach by both methods. They gauge the inclination...",
        "May Allah help you in the noblest and purest of pursuits! Ameen!"
      ],
      about: "Tasawwuf Quran Academy is an Online Quran School operating from Pakistan. It was established in 2011 with the sole aim of spreading the message of the Holy Quran. The world today has changed considerably from the world two or three decades ago. Tasawwuf Quran Academy wants to use the internet to help those brothers and sisters who are facing difficulties in getting education in a Mosque or a Madrasa."
    },
    HowToLearnQuranOnline: {
      title: "How to learn Quran online",
      breadcrumb: "How to learn Quran online",
      content: [
        "Learning Quran online has become a convenient and effective way to study the holy text...",
        "Online Quran classes provide flexibility, allowing students to choose the time that suits...",
        "Our online Quran academy offers a variety of courses, including Tajweed, Hifz, and Tafseer...",
        "In addition to live classes, we provide recorded sessions and supplementary materials...",
        "Join us today and start your journey towards mastering the Quran from the comfort of your home."
      ],
      about: "Tasawwuf Quran Academy is an Online Quran School operating from Pakistan. It was established in 2011 with the sole aim of spreading the message of the Holy Quran. The world today has changed considerably from the world two or three decades ago. Tasawwuf Quran Academy wants to use the internet to help those brothers and sisters who are facing difficulties in getting education in a Mosque or a Madrasa."
    },
    WhyMemorizeQuran: {
      title: "Why memorize (Hifz) the Holy Quran?",
      breadcrumb: "Why memorize (Hifz) the Holy Quran?",
      content: [
        "Memorizing the Quran is considered one of the highest forms of worship in Islam...",
        "Hifz, or Quran memorization, is not just about rote learning...",
        "The process of memorizing the Quran enhances cognitive abilities...",
        "Our online Quran academy provides structured Hifz programs...",
        "By memorizing the Quran, you join the ranks of the Huffaz..."
      ],
      about: "Tasawwuf Quran Academy is an Online Quran School operating from Pakistan. It was established in 2011 with the sole aim of spreading the message of the Holy Quran. The world today has changed considerably from the world two or three decades ago. Tasawwuf Quran Academy wants to use the internet to help those brothers and sisters who are facing difficulties in getting education in a Mosque or a Madrasa."
    },
    HowToMemorizeQuran: {
      title: "How to memorize the Holy Quran",
      breadcrumb: "How to memorize the Holy Quran",
      content: [
        "Memorizing the Holy Quran, or Hifz, is a deeply rewarding spiritual journey...",
        "To begin, it is important to establish a consistent routine...",
        "Start with small sections, gradually increasing as you become more comfortable...",
        "Our online Quran academy offers specialized Hifz programs...",
        "Join us and embark on the path to becoming a Hafiz of the Quran..."
      ],
      about: "Tasawwuf Quran Academy is an Online Quran School operating from Pakistan. It was established in 2011 with the sole aim of spreading the message of the Holy Quran. The world today has changed considerably from the world two or three decades ago. Tasawwuf Quran Academy wants to use the internet to help those brothers and sisters who are facing difficulties in getting education in a Mosque or a Madrasa."
    },
    BridgingTraditionalAndOnlineLearning: {
      title: "How Will We Bridge The Difference Between The Traditional and Online Learning?",
      breadcrumb: "How Will We Bridge The Difference Between The Traditional and Online Learning?",
      content: [
        "Bridging the gap between traditional and online learning involves understanding...",
        "Traditional learning offers face-to-face interaction, immediate feedback...",
        "Online learning, on the other hand, provides flexibility, accessibility...",
        "Our online Quran academy combines the best of both worlds by offering live interactive classes...",
        "Join us to experience a balanced approach that respects the traditions..."
      ],
      about: "Tasawwuf Quran Academy is an Online Quran School operating from Pakistan. It was established in 2011 with the sole aim of spreading the message of the Holy Quran. The world today has changed considerably from the world two or three decades ago. Tasawwuf Quran Academy wants to use the internet to help those brothers and sisters who are facing difficulties in getting education in a Mosque or a Madrasa."
    },
    WhatIsTajweed: {
      title: "What is Tajweed?",
      breadcrumb: "What is Tajweed?",
      content: [
        "Tajweed refers to the set of rules governing the correct pronunciation...",
        "It ensures that each letter is pronounced correctly...",
        "Learning Tajweed is essential for preserving the original meaning...",
        "Our online Quran academy offers comprehensive Tajweed courses...",
        "Join us to enhance your Quranic recitation and connect more deeply..."
      ],
      about: "Tasawwuf Quran Academy is an Online Quran School operating from Pakistan. It was established in 2011 with the sole aim of spreading the message of the Holy Quran. The world today has changed considerably from the world two or three decades ago. Tasawwuf Quran Academy wants to use the internet to help those brothers and sisters who are facing difficulties in getting education in a Mosque or a Madrasa."
    },
    TeachingTajweedToKids: {
      title: "How to teach Tajweed to Kids?",
      breadcrumb: "How to teach Tajweed to Kids?",
      content: [
        "Teaching Tajweed to kids requires a patient and engaging approach...",
        "Start with simple rules and gradually introduce more complex concepts...",
        "Use interactive tools and resources, such as games and visual aids...",
        "Our online Quran academy offers specialized Tajweed courses for kids...",
        "Enroll your child today and help them develop a strong foundation..."
      ],
      about: "Tasawwuf Quran Academy is an Online Quran School operating from Pakistan. It was established in 2011 with the sole aim of spreading the message of the Holy Quran. The world today has changed considerably from the world two or three decades ago. Tasawwuf Quran Academy wants to use the internet to help those brothers and sisters who are facing difficulties in getting education in a Mosque or a Madrasa."
    },
    WhatIsTafseer: {
      title: "What is Tafseer?",
      breadcrumb: "What is Tafseer?",
      content: [
        "Tafseer is the exegesis or commentary on the Quran, providing context...",
        "It involves exploring the historical, linguistic, and theological aspects...",
        "Learning Tafseer helps to gain a more profound understanding...",
        "Our online Quran academy offers Tafseer courses that delve into the meanings...",
        "Join us to enhance your knowledge and connect more deeply..."
      ],
      about: "Tasawwuf Quran Academy is an Online Quran School operating from Pakistan. It was established in 2011 with the sole aim of spreading the message of the Holy Quran. The world today has changed considerably from the world two or three decades ago. Tasawwuf Quran Academy wants to use the internet to help those brothers and sisters who are facing difficulties in getting education in a Mosque or a Madrasa."
    },
    WhenToLearnTafseer: {
      title: "When Should I Start Learning Tafseer?",
      breadcrumb: "When Should I Start Learning Tafseer?",
      content: [
        "The best time to start learning Tafseer is after you have developed a strong foundation...",
        "Having a basic knowledge of Arabic and Quranic recitation can enhance your comprehension...",
        "Our online Quran academy offers beginner to advanced Tafseer courses...",
        "Join us to begin your journey into the deeper meanings...",
        "Join us to begin your journey into the deeper meanings and teachings of the Quran."
      ],
      about: "Tasawwuf Quran Academy is an Online Quran School operating from Pakistan. It was established in 2011 with the sole aim of spreading the message of the Holy Quran. The world today has changed considerably from the world two or three decades ago. Tasawwuf Quran Academy wants to use the internet to help those brothers and sisters who are facing difficulties in getting education in a Mosque or a Madrasa."
    }
  };
  // Retrieve content based on the topic from query parameter
  const selectedContent = contentData[topic] || contentData.HowToLearnQaida; // Default to HowToLearnQaida if topic not found

  return (
    <>
      <div className="registration-container">
        <div className="registration-header">
          <h1>{selectedContent.title}</h1>
        </div>
        <hr className="design-line" />
        <div className="registration-content">
          <p>{selectedContent.breadcrumb}</p>
        </div>
      </div>
      <div className="flex-container">
        <div className="flex-item">
          <h2>{selectedContent.title}</h2>
          {selectedContent.content.map((paragraph, index) => (
            <p key={index}>{paragraph}</p>
          ))}
        </div>
        <div className="flex-item">
          <h3>About</h3>
          <p>{selectedContent.about}</p>
        </div>
      </div>
    </>
  );
}

export default HowToLearnNorani;
