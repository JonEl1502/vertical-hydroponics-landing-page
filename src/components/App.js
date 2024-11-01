import React from 'react';
import Header from '../components/Header';
import HeroSection from '../components/HeroSection';
import Features from '../components/Features';
import HowItWorks from '../components/HowItWorks';
import Footer from '../components/Footer';
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
