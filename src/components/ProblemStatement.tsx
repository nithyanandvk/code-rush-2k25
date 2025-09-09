// import React from 'react';
// import { Lock, FileText, Calendar } from 'lucide-react';

// const ProblemStatement = () => {
//   return (
//     <section id="problem-statement" className="py-20 px-4 sm:px-6 lg:px-8">
//       <div className="max-w-6xl mx-auto">
//         <div className="text-center mb-16">
//           <FileText className="h-12 w-12 text-orange-400 mx-auto mb-4" />
//           <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
//             Problem Statement
//           </h2>
//           <p className="text-xl text-gray-300">
//             Exciting challenges await you
//           </p>
//         </div>

//         <div className="max-w-4xl mx-auto">
//           <div className="bg-white/10 backdrop-blur-md rounded-xl p-8 border border-white/20 text-center">
//             <div className="flex items-center justify-center mb-6">
//               <Lock className="h-16 w-16 text-yellow-400 animate-pulse" />
//             </div>
            
//             <h3 className="text-2xl font-bold text-white mb-4">
//               🔒 Coming Soon
//             </h3>
            
//             <p className="text-lg text-gray-300 mb-6">
//               Problem statements will be revealed on <span className="text-yellow-400 font-semibold">9th September at 6:00 PM</span>
//             </p>

//             {/* Placeholder content - replace this section with your 5 lines */}
//             <div className="bg-gray-800/50 rounded-lg p-6 border border-gray-600/30">
//               <div className="space-y-3">
//                 <div className="h-4 bg-gray-600/50 rounded animate-pulse"></div>
//                 <div className="h-4 bg-gray-600/50 rounded animate-pulse"></div>
//                 <div className="h-4 bg-gray-600/50 rounded animate-pulse"></div>
//                 <div className="h-4 bg-gray-600/50 rounded animate-pulse"></div>
//                 <div className="h-4 bg-gray-600/50 rounded animate-pulse w-3/4 mx-auto"></div>
//               </div>
//             </div>

//             <div className="mt-6 flex items-center justify-center gap-2 text-sm text-gray-400">
//               <Calendar className="h-4 w-4" />
//               <span>Stay tuned for the official announcement</span>
//             </div>
//           </div>

//           {/* Additional Info */}
//           <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
//             <div className="bg-gradient-to-r from-blue-600/20 to-purple-600/20 backdrop-blur-md rounded-xl p-6 border border-white/20">
//               <h4 className="text-lg font-semibold text-white mb-2">📋 What to Expect</h4>
//               <p className="text-gray-300 text-sm">
//                 Real-world problem statements designed to challenge your coding skills and creativity
//               </p>
//             </div>
//             <div className="bg-gradient-to-r from-green-600/20 to-emerald-600/20 backdrop-blur-md rounded-xl p-6 border border-white/20">
//               <h4 className="text-lg font-semibold text-white mb-2">💡 Preparation Tips</h4>
//               <p className="text-gray-300 text-sm">
//                 Brush up on your favorite programming languages and frameworks before the event
//               </p>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default ProblemStatement;

import React from 'react';
import { FileText, Calendar, Globe, Brain, BarChart } from 'lucide-react';

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
          <div className="bg-white/10 backdrop-blur-md rounded-xl p-8 border border-white/20">
            
            {/* Problem Statement Text */}
            <p className="text-lg text-gray-200 mb-4">
              Transportation between <span className="font-semibold text-yellow-300">MBU ↔ various destinations</span> 
              (Tirupati, bus/railway stations, malls, movie halls, etc.) is often unorganized and unpredictable.
            </p>
            <ul className="text-gray-300 space-y-3 mb-6 text-left">
              <li>🚦 <span className="font-semibold text-white">During holidays and festivals:</span> Hundreds of students leave at once, causing auto shortages and unfair pricing.</li>
              <li>📉 <span className="font-semibold text-white">On short breaks:</span> Few students travel, leaving drivers idle and students stranded.</li>
              <li>🌙 <span className="font-semibold text-white">At night:</span> Students returning from Tirupati or other places struggle as no autos are available.</li>
              <li>💰 <span className="font-semibold text-white">Lack of fare transparency:</span> Creates confusion and frustration.</li>
            </ul>

            <h3 className="text-2xl font-bold text-white mb-4">⚡ The Challenge</h3>
            <p className="text-gray-200 mb-8">
              Build a smart, real-time system to balance demand and supply of autos, 
              ensure fair pricing, and enhance the experience for both students and drivers.
            </p>

            {/* Domains & Hints */}
            <h3 className="text-2xl font-bold text-white mb-6">🛠 Sample Domains & Hints (can use any domain other than these also and hybrid approach is also encouragable)</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
              
              <div className="bg-gradient-to-r from-blue-600/20 to-purple-600/20 rounded-xl p-6 border border-white/20">
                <Globe className="h-10 w-10 mx-auto text-blue-400 mb-3" />
                <h4 className="text-lg font-semibold text-white mb-2">Web / App Development</h4>
                <p className="text-gray-300 text-sm">💡 Booking | Tracking | Sharing</p>
              </div>
              
              <div className="bg-gradient-to-r from-green-600/20 to-emerald-600/20 rounded-xl p-6 border border-white/20">
                <Brain className="h-10 w-10 mx-auto text-green-400 mb-3" />
                <h4 className="text-lg font-semibold text-white mb-2">AI / ML</h4>
                <p className="text-gray-300 text-sm">💡 Predict | Notify | Optimize</p>
              </div>
              
              <div className="bg-gradient-to-r from-yellow-600/20 to-orange-600/20 rounded-xl p-6 border border-white/20">
                <BarChart className="h-10 w-10 mx-auto text-yellow-400 mb-3" />
                <h4 className="text-lg font-semibold text-white mb-2">Data Analytics</h4>
                <p className="text-gray-300 text-sm">💡 Analyze | Visualize | Plan | Most visited Places</p>
              </div>

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
