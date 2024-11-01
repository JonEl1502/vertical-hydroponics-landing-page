import React from 'react';
import Header from './components/Header.js';
import HeroSection from './components/HeroSection.js';
import Features from './components/Features.js';
import HowItWorks from './components/HowItWorks.js';
import Footer from './components/Footer.js';
import './styles/App.css';

function App() {
  return (
      <div className="App">
        <Header />
        <HeroSection />
        <Features />
        <HowItWorks />
        <Footer />
      </div>
  );
}

export default App;
