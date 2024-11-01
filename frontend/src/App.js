import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Navbar from './components/Navbar';
import Header from './components/Header';
import Detail from './components/Detail';
import QuranInfo from './components/QuranInfo';
import ClassesDetails from './components/ClassesDetails';
import HowToTake from './components/HowToTake';
import DidYouKnow from './components/DidYouKnow';
import Footer from './components/Footer';
import Registration from './registrationSection/Registration';
import About from './About/About.jsx'; // Ensure correct import path for About component
import HowToLearnSection from './DidYouKnowComponent/componets/HowToLearnNorani.jsx'; // Ensure correct import path
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import CheckO from './CheckOutServices/CheckO.jsx';
import Fee from './Fee/Fee.jsx';
import ContactUs from './contact/ContactUs.jsx';

function App() {
  return (
    <Router>
      <Navbar />
      <div style={{ paddingTop: '80px' }}> {/* Adjust padding-top based on your navbar height */}
        <Routes>
          <Route path="/" element={
            <>
              <Header />
              <Detail />
              <QuranInfo />
              <ClassesDetails />
              <HowToTake />
              <DidYouKnow />
            </>
          } />
          <Route path="/Fee" element={<Fee />} />
          <Route path="/about" element={<About />} />
          <Route path="/ContactUs" element={<ContactUs />} />
          <Route path="/Check" element={<CheckO />} />
          <Route path="/register" element={<Registration />} />
          <Route path="/HowToLearnNorani" element={<HowToLearnSection />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
