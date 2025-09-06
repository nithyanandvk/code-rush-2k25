import React, { useState } from 'react';
import { ChevronDown, ChevronUp, HelpCircle } from 'lucide-react';

const FAQ = () => {
  const [openFAQ, setOpenFAQ] = useState<number | null>(null);

  const faqs = [
    {
      question: 'Who can participate?',
      answer: 'Any student team of 2–4 members from any department can participate in CODE RUSH 2K25. Perfect for beginners and experienced coders alike!'
    },
    {
      question: 'What is the registration fee?',
      answer: '₹300 per team. This covers event organization costs and refreshments during the hackathon.'
    },
    {
      question: 'Will we get certificates?',
      answer: 'Yes! All participants will receive e-certificates. Winners and top teams will also receive physical certificates along with trophies.'
    },
    {
      question: 'What about food arrangements?',
      answer: 'Lunch is not provided. You can eat at hostels, canteen, or nearby hotels. However, refreshments (snacks and beverages) will be provided during the event.'
    },
    {
      question: 'What should we bring?',
      answer: 'Bring your laptop, chargers, ID card, and most importantly, your enthusiasm and creative mindset! We recommend bringing backup chargers and any specific development tools you prefer.'
    },
    {
      question: 'Is there any restriction on technology stack?',
      answer: 'No specific restrictions on technology stack. You can use any programming language, framework, or tools that help you solve the problem statements effectively.'
    },
    {
      question: 'I am new to tech, can I still participate?',
      answer: 'Absolutely! CODE RUSH 2K25 is beginner-friendly and perfect for newcomers to explore the open world of technology. You\'ll get hands-on experience with trending AI agents, open-source tools, and modern development practices. Our mentors will guide you through the journey!'
    }
  ];

  const toggleFAQ = (index: number) => {
    setOpenFAQ(openFAQ === index ? null : index);
  };

  return (
    <section id="faq" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <HelpCircle className="h-12 w-12 text-blue-400 mx-auto mb-4" />
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-xl text-gray-300">
            Got questions? We've got answers!
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div 
              key={index}
              className="bg-white/10 backdrop-blur-md rounded-xl border border-white/20 overflow-hidden hover:bg-white/15 transition-all duration-300"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full p-4 sm:p-6 text-left flex items-center justify-between hover:bg-white/5 transition-colors"
              >
                <h3 className="text-base sm:text-lg font-semibold text-white pr-4">{faq.question}</h3>
                {openFAQ === index ? (
                  <ChevronUp className="h-5 w-5 text-blue-400 flex-shrink-0 transform transition-transform duration-300" />
                ) : (
                  <ChevronDown className="h-5 w-5 text-blue-400 flex-shrink-0 transform transition-transform duration-300" />
                )}
              </button>
              
              {openFAQ === index && (
                <div className="px-4 sm:px-6 pb-4 sm:pb-6 animate-fadeIn">
                  <p className="text-sm sm:text-base text-gray-300 leading-relaxed">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Contact for more questions */}
        <div className="text-center mt-12">
          <div className="bg-gradient-to-r from-blue-600/20 to-purple-600/20 backdrop-blur-md rounded-xl p-6 border border-white/20">
            <h3 className="text-xl font-bold text-white mb-2">Still have questions?</h3>
            <p className="text-gray-300 mb-4">Feel free to reach out to our organizing team</p>
            <a
              href="https://chat.whatsapp.com/FTVimJJKOpBGH0V7KTuAiH"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-green-600 hover:bg-green-700 px-6 py-3 rounded-lg text-white font-semibold transition-colors"
            >
              Ask in WhatsApp Community
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;