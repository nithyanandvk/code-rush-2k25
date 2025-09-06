import React from 'react';
import { Trophy, Medal, Award, Gift, DollarSign } from 'lucide-react';

const Prizes = () => {
  const prizes = [
    {
      position: '1st Prize',
      amount: '₹7,000',
      items: ['Trophy', 'Certificates'],
      icon: Trophy,
      gradient: 'from-yellow-400 to-orange-500',
      bgGradient: 'from-yellow-500/20 to-orange-500/20'
    },
    {
      position: '2nd Prize',
      amount: '₹4,000',
      items: ['Trophy', 'Certificates'],
      icon: Medal,
      gradient: 'from-gray-300 to-gray-500',
      bgGradient: 'from-gray-400/20 to-gray-600/20'
    },
    {
      position: '3rd Prize',
      amount: '₹2,000',
      items: ['Trophy', 'Certificates'],
      icon: Award,
      gradient: 'from-amber-600 to-amber-800',
      bgGradient: 'from-amber-600/20 to-amber-800/20'
    }
  ];

  const otherPrizes = [
    {
      title: 'Top 4–12 Teams',
      description: 'Appreciation Certificates',
      icon: Gift
    },
    {
      title: 'All Participants',
      description: 'E-certificates',
      icon: Award
    }
  ];

  return (
    <section id="prizes" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <DollarSign className="h-12 w-12 text-yellow-400 mx-auto mb-4" />
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Prizes & Rewards
          </h2>
          <p className="text-xl text-gray-300">
            Exciting prizes await the winners
          </p>
        </div>

        {/* Main Prizes */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-12">
          {prizes.map((prize, index) => (
            <div key={index} className={`relative bg-gradient-to-br ${prize.bgGradient} backdrop-blur-md rounded-xl p-8 border border-white/20 transform hover:scale-105 transition-all duration-300`}>
              <div className="text-center">
                <div className={`w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-r ${prize.gradient} flex items-center justify-center`}>
                  <prize.icon className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-2">{prize.position}</h3>
                <p className="text-2xl sm:text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400 mb-4">
                  {prize.amount}
                </p>
                <div className="space-y-2">
                  {prize.items.map((item, idx) => (
                    <p key={idx} className="text-gray-300">+ {item}</p>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Other Prizes */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {otherPrizes.map((prize, index) => (
            <div key={index} className="bg-white/10 backdrop-blur-md rounded-xl p-6 border border-white/20 text-center">
              <div className="w-12 h-12 mx-auto mb-3 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 flex items-center justify-center">
                <prize.icon className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">{prize.title}</h3>
              <p className="text-gray-300">{prize.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Prizes;