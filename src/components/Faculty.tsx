import React from 'react';
import { Linkedin, User, GraduationCap } from 'lucide-react';

const Faculty = () => {
  const facultyMembers = [
    {
      name: 'Dr. G. Sunitha',
      role: 'Professor & Head, CSE',
      linkedin: 'https://www.linkedin.com/in/dr-sunitha-g-11a710119/',
      image:'https://res.cloudinary.com/dzsgjnpzh/image/upload/v1757190359/WhatsApp_Image_2025-09-06_at_19.56.28_fc507421_byvwhd.jpg'
    },
    {
      name: 'Siva Kumar Depuru',
      role: 'Assistant Professor, CSE',
      linkedin: 'https://www.linkedin.com/in/siva-kumar-d-01717723b/',
      image: 'https://res.cloudinary.com/dzsgjnpzh/image/upload/v1757190709/siva_kumarsir_wsr0cz.jpg'
    },
    {
      name: 'Basi Reddy',
      role: 'Assistant Professor',
      linkedin: '#',
      image: null
    }
  ];

  return (
    <section id="faculty" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <GraduationCap className="h-12 w-12 text-purple-400 mx-auto mb-4" />
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Meet Our Hackathon Heads
          </h2>
          <p className="text-xl text-gray-300">
            Experienced faculty guiding your hackathon journey
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {facultyMembers.map((member, index) => (
            <div 
              key={index}
              className="bg-white/10 backdrop-blur-md rounded-xl p-6 border border-white/20 text-center hover:bg-white/20 transition-all duration-300 transform hover:scale-105 group"
            >
              {/* Profile Image */}
              <div className="w-24 h-24 mx-auto mb-4 rounded-full overflow-hidden bg-gradient-to-r from-blue-500 to-purple-500 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                {member.image ? (
                  <img 
                    src={member.image} 
                    alt={member.name} 
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <User className="h-12 w-12 text-white" />
                )}
              </div>

              <h3 className="text-xl font-bold text-white mb-2">{member.name}</h3>
              <p className="text-blue-400 font-semibold mb-4">{member.role}</p>

              <a
                href={member.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded-lg text-white transition-all duration-300 transform hover:scale-105"
              >
                <Linkedin className="h-4 w-4" />
                LinkedIn
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Faculty;
