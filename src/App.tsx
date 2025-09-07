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
    // Main wrapper with animated gradient background from CSS
    <div className="text-white min-h-screen relative overflow-hidden">
      {/* Optional subtle overlay for readability */}
      <div className="absolute inset-0 bg-black/30 z-0"></div>

      <div className="relative z-10">
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
