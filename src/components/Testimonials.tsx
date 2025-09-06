import React from 'react';
import { Quote, Linkedin, User, MessageCircle } from 'lucide-react';

const Testimonials = () => {
  const testimonials = [
    {
      name: 'V K Nithyanand',
      linkedin: 'https://www.linkedin.com/in/nithyanandvk',
      quote: 'Hackathons helped me explore new technologies, collaborate with diverse minds, and showcase unique experiences  on my resume.',
      role: 'CSE Student'
    },
    {
      name: 'Allam Gowri Shankar',
      linkedin: 'https://www.linkedin.com/in/allamgowrishankar/',
      quote: 'Participating in hackathons allowed me to collaborate with passionate people, explore innovative ideas, and build skills beyond the classroom.',
      role: 'AIML Student'
    },
    {
      name: 'Gajula Tulasi',
      linkedin: 'https://www.linkedin.com/in/gajula-tulasi/',
      quote: 'Hackathons inspired me to push boundaries, embrace new technologies, and prove that collaboration and creativity can achieve remarkable results.',
      role: 'CSE Student'
    },
        {
      name: 'Boya Teja',
      linkedin: 'https://www.linkedin.com/in/boya-teja/',
      quote: 'Participating in hackathons enhanced my problem-solving abilities, adaptability, and collaboration skills in fast-paced environments.',
      role: 'CSE Student'
    },
            {
      name: 'Paidi Teja Ram',
      linkedin: 'https://www.linkedin.com/in/tejarampaidi/',
      quote: 'Hackathons felt like an adventure where I discovered new tech, worked with friends, and found exciting ways to solve problems.',
      role: 'CSE Student'
    },
  ];

  return (
    <section id="testimonials" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <MessageCircle className="h-12 w-12 text-green-400 mx-auto mb-4" />
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Student Testimonials
          </h2>
          <p className="text-xl text-gray-300">
            Hear from our past participants
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index}
              className="bg-white/10 backdrop-blur-md rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 group"
            >
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 flex items-center justify-center mr-3 group-hover:scale-110 transition-transform duration-300">
                  <User className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-white">{testimonial.name}</h3>
                  <p className="text-sm text-gray-400">{testimonial.role}</p>
                </div>
              </div>

              <div className="relative mb-4">
                <Quote className="h-8 w-8 text-blue-400 opacity-50 absolute -top-2 -left-2 group-hover:opacity-70 transition-opacity duration-300" />
                <p className="text-gray-300 italic pl-6 leading-relaxed">
                  "{testimonial.quote}"
                </p>
              </div>

              <a
                href={testimonial.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-blue-400 hover:text-blue-300 transition-all duration-300 text-sm transform hover:scale-105"
              >
                <Linkedin className="h-4 w-4" />
                Connect on LinkedIn
              </a>
            </div>
          ))}
        </div>



      </div>
    </section>
  );
};

export default Testimonials;