import React, { useState, useEffect } from 'react';
import { Menu, X, Hash } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
    setIsMenuOpen(false);
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled ? 'bg-gray-900/95 backdrop-blur-md shadow-lg' : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center space-x-3">
            <Hash className="h-8 w-8 text-blue-400" />
            <span className="text-xl font-bold text-white">CODE RUSH 2K25</span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            {['timeline', 'problem-statement', 'prizes', 'why-join', 'faculty', 'testimonials', 'faq'].map((item) => (
              <button
                key={item}
                onClick={() => scrollToSection(item)}
                className="text-gray-300 hover:text-white transition-colors capitalize"
              >
                {item.replace('-', ' ')}
              </button>
            ))}
            <a
              href="https://chat.whatsapp.com/FTVimJJKOpBGH0V7KTuAiH"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-green-600 hover:bg-green-700 px-4 py-2 rounded-lg text-white transition-all duration-300 transform hover:scale-105"
            >
              WhatsApp
            </a>
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden text-white hover:text-blue-400 transition-colors duration-300"
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden bg-gray-900/95 backdrop-blur-md rounded-lg mt-2 p-4 animate-fadeIn">
            <nav className="flex flex-col space-y-3">
              {['timeline', 'problem-statement', 'prizes', 'why-join', 'faculty', 'testimonials', 'faq'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item)}
                  className="text-gray-300 hover:text-white transition-colors capitalize text-left py-2 px-3 rounded hover:bg-white/10"
                >
                  {item.replace('-', ' ')}
                </button>
              ))}
              <a
                href="https://chat.whatsapp.com/FTVimJJKOpBGH0V7KTuAiH"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-green-600 hover:bg-green-700 px-4 py-3 rounded-lg text-white transition-all duration-300 text-center transform hover:scale-105"
              >
                WhatsApp Community
              </a>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;