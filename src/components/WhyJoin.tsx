import React from 'react';
import { Target, Users, Crown, Clock, Lightbulb, Heart, Zap } from 'lucide-react';

const WhyJoin = () => {
  const benefits = [
    {
      title: 'Beginner Friendly',
      description: 'Perfect for students new to hackathons with mentorship and guidance',
      icon: Heart,
      color: 'text-red-400'
    },
    {
      title: 'Exposure & Preparation',
      description: 'Get ready for national-level hackathons',
      icon: Target,
      color: 'text-blue-400'
    },
    {
      title: 'Collaboration & Teamwork',
      description: 'Work with talented peers and build lasting connections',
      icon: Users,
      color: 'text-green-400'
    },
    {
      title: 'Leadership & Presentation Skills',
      description: 'Develop essential soft skills for your career',
      icon: Crown,
      color: 'text-purple-400'
    },
    {
      title: 'Time Management',
      description: 'Master problem-solving under pressure',
      icon: Clock,
      color: 'text-yellow-400'
    },
    {
      title: 'Real-World Experience',
      description: 'Gain valuable hackathon experience',
      icon: Zap,
      color: 'text-yellow-400'
    }
  ];

  return (
    <section id="why-join" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <Lightbulb className="h-12 w-12 text-yellow-400 mx-auto mb-4" />
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Why Join CODE RUSH 2K25?
          </h2>
          <p className="text-xl text-gray-300">
            Transform your skills and accelerate your growth
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {benefits.map((benefit, index) => (
            <div 
              key={index}
              className="bg-white/10 backdrop-blur-md rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 transform hover:scale-105 group"
            >
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0">
                  <benefit.icon className={`h-8 w-8 ${benefit.color} group-hover:scale-110 transition-transform duration-300`} />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-3">{benefit.title}</h3>
                  <p className="text-gray-300 leading-relaxed">{benefit.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-12">
          <div className="bg-gradient-to-r from-blue-600/20 to-purple-600/20 backdrop-blur-md rounded-xl p-8 border border-white/20">
            <h3 className="text-2xl font-bold text-white mb-4">
              Ready to take on the challenge?
            </h3>
            <p className="text-gray-300 mb-6">
              Join hundreds of passionate developers in this exciting coding marathon
            </p>
            <a
              href="https://forms.gle/KD4LH7VTSoBboAq58"
              className="inline-block bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 px-8 py-3 rounded-lg text-white font-semibold transition-all duration-300 transform hover:scale-105"
            >
              Register Your Team Now
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyJoin;