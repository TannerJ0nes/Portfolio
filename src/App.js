//Written By Tanner Jones
//Date Jan 18th 2024

import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; 
import Header from './Header';
import AboutMe from './AboutMe';
import Expertise from './Expertise';
import AboutPage from './AboutPage';
import Works from './Works';
import ContactMe from './ContactMe'; 

function App() {
  return (
    <Router>
      <div className="app">
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/works" element={<Works />} />
          <Route path="/contact" element={<ContactMe />} /> {/* Use element prop instead of component */}
        </Routes>
      </div>
    </Router>
  );
}

function HomePage() {
  return (
    <>
      <AboutMe />
      <Expertise />
    </>
  );
}

export default App;
