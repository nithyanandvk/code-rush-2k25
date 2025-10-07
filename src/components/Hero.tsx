import React from 'react';
import { Calendar, MapPin, Clock, ExternalLink, MessageSquare, Code2, Terminal, Cpu } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 pt-16 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(59,130,246,0.3),transparent_50%)]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(139,92,246,0.3),transparent_50%)]"></div>
        <div className="absolute inset-0 bg-[conic-gradient(from_0deg_at_50%_50%,rgba(139,92,246,0.2)_0deg,transparent_60deg,rgba(59,130,246,0.2)_120deg,transparent_180deg)]"></div>
      </div>

      {/* Floating Code Icons */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <Code2 className="absolute top-20 left-10 h-8 w-8 text-blue-400/30 animate-float" />
        <Terminal className="absolute top-40 right-20 h-6 w-6 text-purple-400/30 animate-float-delayed" />
        <Cpu className="absolute bottom-40 left-20 h-10 w-10 text-pink-400/30 animate-float-slow" />
        <Code2 className="absolute bottom-20 right-10 h-7 w-7 text-blue-400/30 animate-bounce-slow" />
        <Terminal className="absolute top-1/2 left-5 h-5 w-5 text-green-400/20 animate-pulse-slow" />
        <Cpu className="absolute top-1/3 right-5 h-6 w-6 text-yellow-400/20 animate-float" />
      </div>

      <div className="relative max-w-6xl mx-auto text-center">

        {/* Logos Section */}
        <div className="flex flex-wrap justify-center items-center gap-4 mb-6">
          <img
            src="/mbu logo.png"
            alt="MBU Logo"
            className="h-20 w-auto object-contain"
          />
          <img
            src="/faceprep.jpg"
            alt="Faceprep Logo"
            className="h-16 w-auto object-contain"
          />
          <img
            src="/GB.png"
            alt="GB Logo"
            className="h-16 w-auto object-contain"
          />
        </div>

        {/* Main Title */}
        <h1 className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 mb-6 leading-tight">
          CODE RUSH
          <span className="block text-3xl sm:text-4xl md:text-5xl lg:text-6xl mt-2 text-gray-300">2K25</span>
        </h1>

        {/* Subtitle */}
        <p className="text-lg sm:text-xl md:text-2xl text-gray-300 mb-4">
          Hackathon by Department of CSE
        </p>
        <p className="text-base sm:text-lg md:text-xl text-blue-400 font-semibold mb-8">
          Mohan Babu University, Tirupati
        </p>

        {/* Team Size & Registration Fee */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
          <div className="bg-gradient-to-r from-green-600/20 to-emerald-600/20 backdrop-blur-md rounded-lg px-6 py-3 border border-green-400/30">
            <p className="text-green-300 font-semibold">Team Size: 2-4 Members</p>
          </div>
          <div className="bg-gradient-to-r from-yellow-600/20 to-orange-600/20 backdrop-blur-md rounded-lg px-6 py-3 border border-yellow-400/30">
            <p className="text-yellow-300 font-semibold">Registration: ₹300 per team</p>
          </div>
        </div>

        {/* Event Details */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 mb-12 max-w-4xl mx-auto">
          <div className="bg-white/10 backdrop-blur-md rounded-xl p-6 border border-white/20">
            <Calendar className="h-8 w-8 text-blue-400 mx-auto mb-3" />
            <h3 className="text-lg font-semibold text-white mb-2">Date</h3>
            <p className="text-gray-300">11th and 12th September 2025</p>
          </div>
          <div className="bg-white/10 backdrop-blur-md rounded-xl p-6 border border-white/20 sm:col-span-2 md:col-span-1">
            <Clock className="h-8 w-8 text-purple-400 mx-auto mb-3" />
            <h3 className="text-lg font-semibold text-white mb-2">Time</h3>
            <p className="text-gray-300">8 AM – 6 PM</p>
          </div>
          <div className="bg-white/10 backdrop-blur-md rounded-xl p-6 border border-white/20">
            <MapPin className="h-8 w-8 text-pink-400 mx-auto mb-3" />
            <h3 className="text-lg font-semibold text-white mb-2">Venue</h3>
            <p className="text-gray-300">RL Lab, MBU</p>
          </div>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center px-4">
          <a
            href="/"
            className="w-full sm:w-auto bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 px-6 sm:px-8 py-4 rounded-xl text-base sm:text-lg font-semibold text-white transition-all duration-300 transform hover:scale-105 shadow-lg flex items-center justify-center gap-2"
          >
            Registrations closed
            <ExternalLink className="h-5 w-5" />
          </a>
          <a
            href="https://chat.whatsapp.com/FTVimJJKOpBGH0V7KTuAiH"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto bg-green-600 hover:bg-green-700 px-6 sm:px-8 py-4 rounded-xl text-base sm:text-lg font-semibold text-white transition-all duration-300 transform hover:scale-105 shadow-lg flex items-center justify-center gap-2"
          >
            <MessageSquare className="h-5 w-5" />
            Join WhatsApp Community
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
