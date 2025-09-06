import React from 'react';
import { Lock, FileText, Calendar } from 'lucide-react';

const ProblemStatement = () => {
  return (
    <section id="problem-statement" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <FileText className="h-12 w-12 text-orange-400 mx-auto mb-4" />
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Problem Statement
          </h2>
          <p className="text-xl text-gray-300">
            Exciting challenges await you
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="bg-white/10 backdrop-blur-md rounded-xl p-8 border border-white/20 text-center">
            <div className="flex items-center justify-center mb-6">
              <Lock className="h-16 w-16 text-yellow-400 animate-pulse" />
            </div>
            
            <h3 className="text-2xl font-bold text-white mb-4">
              🔒 Coming Soon
            </h3>
            
            <p className="text-lg text-gray-300 mb-6">
              Problem statements will be revealed on <span className="text-yellow-400 font-semibold">9th September at 6:00 PM</span>
            </p>

            {/* Placeholder content - replace this section with your 5 lines */}
            <div className="bg-gray-800/50 rounded-lg p-6 border border-gray-600/30">
              <div className="space-y-3">
                <div className="h-4 bg-gray-600/50 rounded animate-pulse"></div>
                <div className="h-4 bg-gray-600/50 rounded animate-pulse"></div>
                <div className="h-4 bg-gray-600/50 rounded animate-pulse"></div>
                <div className="h-4 bg-gray-600/50 rounded animate-pulse"></div>
                <div className="h-4 bg-gray-600/50 rounded animate-pulse w-3/4 mx-auto"></div>
              </div>
            </div>

            <div className="mt-6 flex items-center justify-center gap-2 text-sm text-gray-400">
              <Calendar className="h-4 w-4" />
              <span>Stay tuned for the official announcement</span>
            </div>
          </div>

          {/* Additional Info */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
            <div className="bg-gradient-to-r from-blue-600/20 to-purple-600/20 backdrop-blur-md rounded-xl p-6 border border-white/20">
              <h4 className="text-lg font-semibold text-white mb-2">📋 What to Expect</h4>
              <p className="text-gray-300 text-sm">
                Real-world problem statements designed to challenge your coding skills and creativity
              </p>
            </div>
            <div className="bg-gradient-to-r from-green-600/20 to-emerald-600/20 backdrop-blur-md rounded-xl p-6 border border-white/20">
              <h4 className="text-lg font-semibold text-white mb-2">💡 Preparation Tips</h4>
              <p className="text-gray-300 text-sm">
                Brush up on your favorite programming languages and frameworks before the event
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProblemStatement;