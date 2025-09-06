import React from 'react';
import { MessageSquare, Phone, MapPin, Code, Hash } from 'lucide-react';

const Footer = () => {
  const contactNumbers = [
    { name: 'V K Nithyanand', number: '+91 9347259078' },
    { name: 'Vellampalli Venkata Rithesh', number: '+91 9291592275' },
    { name: 'Vudumala Lakshmi Priya', number: '+91 9517774567' }
  ];

  return (
    <footer className="bg-gray-900/95 backdrop-blur-md border-t border-white/10 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Logo and Description */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-3 mb-4">
              {/* College Logo */}
              <img 
                src="/public/mbu logo.png" 
                alt="MBU Logo" 
                className="h-20 w-30  object-contain shadow-md"
              />
              <span className="text-2xl font-bold text-white">CODE RUSH 2K25</span>
            </div>
            <p className="text-gray-300 mb-4 leading-relaxed">
              An exciting hackathon organized by the Department of CSE, Mohan Babu University. 
              Join us for an incredible coding experience with talented peers and industry mentors.
            </p>
            <div className="flex items-center text-gray-300 mb-2">
              <MapPin className="h-4 w-4 mr-2 text-blue-400" />
              <span>Department of CSE, Mohan Babu University</span>
            </div>
            <div className="flex items-center text-gray-300">
              <Code className="h-4 w-4 mr-2 text-purple-400" />
              <span>Team Size: 2-4 Members | Fee: ₹300 per team</span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <button 
                  onClick={() => document.getElementById('timeline')?.scrollIntoView({ behavior: 'smooth' })}
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  Timeline
                </button>
              </li>
              <li>
                <button 
                  onClick={() => document.getElementById('prizes')?.scrollIntoView({ behavior: 'smooth' })}
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  Prizes
                </button>
              </li>
              <li>
                <button 
                  onClick={() => document.getElementById('faq')?.scrollIntoView({ behavior: 'smooth' })}
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  FAQ
                </button>
              </li>
              <li>
                <a
                  href="https://forms.gle/KD4LH7VTSoBboAq58"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  Register Now
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Contact</h3>
            <div className="space-y-3">
              <a
                href="https://chat.whatsapp.com/FTVimJJKOpBGH0V7KTuAiH"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center text-gray-300 hover:text-green-400 transition-all duration-300 transform hover:scale-105"
              >
                <MessageSquare className="h-4 w-4 mr-2" />
                WhatsApp Community
              </a>
              {contactNumbers.map((contact, index) => (
                <div key={index} className="flex items-center text-gray-300 hover:text-blue-400 transition-colors duration-300">
                  <Phone className="h-4 w-4 mr-2 text-blue-400" />
                  <div>
                    <p className="text-sm font-medium">{contact.name}</p>
                    <p className="text-sm">{contact.number}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 pt-8">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
            <p className="text-gray-400 text-sm mb-4 md:mb-0">
              © 2025 CODE RUSH 2K25. Organized by Department of CSE, Mohan Babu University.
            </p>
            <div className="flex space-x-4">
              <a
                href="#"
                className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 px-6 py-2 rounded-lg text-white text-sm font-semibold transition-all duration-300 transform hover:scale-105"
              >
                Register Now
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
