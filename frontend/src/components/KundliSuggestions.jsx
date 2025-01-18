import React from 'react';
import { FaStar } from "react-icons/fa";

// Sample suggestions data
const suggestionsData = {
  Meditation: [
    "Practice mindfulness meditation to reduce stress and enhance focus.",
    "Chanting 'Om Namah Shivaya' daily helps align energies."
  ],
  Workout: [
    "Yoga sessions focusing on breathing techniques for mental clarity.",
    "Cardio exercises like running or cycling to boost vitality."
  ],
  "Sleep Content Recommendations": [
    "Listening to calming 'Shanti Mantras' at night promotes deep relaxation.",
    "Reading spiritual texts before bed enhances mental clarity."
  ]
};

function KundliSuggestions() {
  // Animated SVGs for each section
  const animatedSvgs = {
    Meditation: (
      <svg className="w-10 h-10 md:w-12 md:h-12 animate-pulse" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M12 20v-4m0-4V4m8 16h-2a6 6 0 01-6-6H4a6 6 0 016 6H4" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    Workout: (
      <svg className="w-10 h-10 md:w-12 md:h-12 animate-bounce" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M20 12H4m16 0l-6-6m6 6l-6 6" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    "Sleep Content Recommendations": (
      <svg className="w-10 h-10 md:w-12 md:h-12 animate-pulse text-blue-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" fill="currentColor">
        {/* Bed */}
        <rect x="8" y="32" width="48" height="16" rx="4" ry="4" className="fill-blue-400" />
        <rect x="8" y="44" width="48" height="4" className="fill-blue-700" />
        {/* Sleeping Man */}
        <circle cx="20" cy="28" r="4" className="fill-blue-300 animate-slow-bounce" />
        <path d="M24 28h12c2 0 2 2 2 2v4H22v-4c0-2 0-2 2-2z" className="fill-blue-500" />
      </svg>
    )
  };

  return (
    <div id="suggestions" className="mx-2 lg:mx-6 xl:mx-12 mb-[40px] md:mb-[90px] inter-regular">
      <div className="flex items-center gap-2">
        <h2 className="text-3xl text-[#ebebeb] relative pb-1 mb-8 font-bold">
          Suggestions for You
          <span className="absolute bottom-[-4px] left-0 w-full h-[4px] bg-orange-500 rounded-full glow-bar"></span>
        </h2>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {Object.keys(suggestionsData).map((section, idx) => (
          <div
            key={idx}
            className="p-6 bg-[#1e1f26] rounded-lg shadow-lg text-white border border-gray-700 transition-transform transform hover:scale-105"
          >
            <div className="flex items-center gap-4 mb-4">
              {animatedSvgs[section]}
              <h3 className="text-lg md:text-xl font-semibold text-left underline decoration-orange-500">{section}</h3>
            </div>
            <ul className="space-y-2">
              {suggestionsData[section].map((item, index) => (
                <li key={index} className="flex items-start gap-2">
                  <FaStar className="text-orange-500 mt-1" />
                  <span className="text-white">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}

export default KundliSuggestions;
