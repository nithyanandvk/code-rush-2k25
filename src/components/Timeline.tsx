import React from 'react';
import { Calendar, Clock, CheckCircle, GitBranch } from 'lucide-react';

const Timeline = () => {
  const timelineEvents = [
    {
      date: '6th September',
      title: 'Registrations Open',
      description: 'Team registration begins',
      icon: GitBranch,
      status: 'upcoming'
    },
    {
      date: '9th September',
      time: '6:00 PM',
      title: 'Problem Statement Release',
      description: 'Get ready to tackle exciting challenges',
      icon: CheckCircle,
      status: 'upcoming'
    },
    {
      date: '11th September',
      time: '8:00 AM - 6:00 PM',
      title: 'Hackathon Day',
      description: 'Code, build, and present your solutions',
      icon: Clock,
      status: 'main'
    },
    {
      date: '12th September',
      title: 'Results & Prize Distribution',
      description: 'Winners announced and prizes awarded',
      icon: Calendar,
      status: 'upcoming'
    }
  ];

  return (
    <section id="timeline" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <Calendar className="h-12 w-12 text-blue-400 mx-auto mb-4" />
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Event Timeline
          </h2>
          <p className="text-xl text-gray-300">
            Mark your calendars for these important dates
          </p>
        </div>

        <div className="relative">
          {/* Timeline line - hidden on mobile */}
          <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-blue-500 to-purple-500 rounded-full"></div>

          <div className="space-y-8 md:space-y-12">
            {timelineEvents.map((event, index) => (
              <div key={index} className={`flex flex-col md:flex-row items-center ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
                {/* Content */}
                <div className={`w-full md:w-5/12 ${index % 2 === 0 ? 'md:text-right md:pr-8' : 'md:text-left md:pl-8'}`}>
                  <div className={`bg-white/10 backdrop-blur-md rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 transform hover:scale-105 ${
                    event.status === 'main' ? 'bg-gradient-to-r from-blue-600/20 to-purple-600/20 border-blue-400/30' : ''
                  }`}>
                    <div className="flex items-center justify-center md:justify-start mb-3">
                      <event.icon className={`h-6 w-6 mr-2 ${
                        event.status === 'main' ? 'text-yellow-400' : 'text-blue-400'
                      }`} />
                      <span className="text-sm font-semibold text-blue-400">{event.date}</span>
                      {event.time && (
                        <span className="text-sm text-gray-400 ml-2">• {event.time}</span>
                      )}
                    </div>
                    <h3 className={`text-xl font-bold mb-2 ${
                      event.status === 'main' ? 'text-yellow-300' : 'text-white'
                    }`}>
                      {event.title}
                    </h3>
                    <p className="text-gray-300">{event.description}</p>
                  </div>
                </div>

                {/* Timeline dot */}
                <div className="hidden md:flex w-2/12 justify-center">
                  <div className={`w-4 h-4 rounded-full border-4 ${
                    event.status === 'main' 
                      ? 'bg-yellow-400 border-yellow-300' 
                      : 'bg-blue-500 border-blue-400'
                  } shadow-lg`}></div>
                </div>

                {/* Spacer for alternating layout */}
                <div className="hidden md:block w-5/12"></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Timeline;