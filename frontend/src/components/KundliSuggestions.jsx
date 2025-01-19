import React from 'react';
import { FaStar } from "react-icons/fa";
import sleepIcon from "../assets/sleeping.png";
import meditationIcon from "../assets/meditation.png";
import workoutIcon from "../assets/yoga.png";


function KundliSuggestions({analyzedData}) {
  const suggestionsData = {
    Meditation: analyzedData["Personalized Recommendations"]["Meditation Suggestions"],
    Workout: analyzedData["Personalized Recommendations"]["Workout Suggestions"],
    "Sleep Content Recommendations": analyzedData["Personalized Recommendations"]["Sleep Content Recommendations"]
  };
  
  const icons = {
    Meditation: (
      <img
        src={meditationIcon}
        alt="Meditation Icon"
        className="w-10 h-10 md:w-12 md:h-12 object-contain animate-pulse"
      />
    ),
    Workout: (
      <img
        src={workoutIcon}
        alt="Meditation Icon"
        className="w-10 h-10 md:w-12 md:h-12 object-contain animate-pulse"
      />
    ),
    "Sleep Content Recommendations": (
      <img
        src={sleepIcon}
        alt="Sleep Icon"
        className="w-10 h-10 md:w-12 md:h-12 object-contain animate-slow-bounce"
      />
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
              {icons[section]}
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
