import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Timeline from './components/Timeline';
import ProblemStatement from './components/ProblemStatement';
import Prizes from './components/Prizes';
import WhyJoin from './components/WhyJoin';
import Faculty from './components/Faculty';
import Testimonials from './components/Testimonials';
import FAQ from './components/FAQ';
import Footer from './components/Footer';

function App() {
  return (
    <div className="bg-gray-900 text-white">
      <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900">
        <Header />
        <Hero />
        
        <Timeline />
        <Prizes />
        <ProblemStatement />
        
        <WhyJoin />
        <Faculty />
        <Testimonials />
        <FAQ />
        <Footer />
      </div>
    </div>
  );
}

export default App;