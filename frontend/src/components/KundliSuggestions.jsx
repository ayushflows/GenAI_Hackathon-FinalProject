import React from 'react'
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
  return (
    <div id="suggestions" className="mx-2 lg:mx-6 xl:mx-12 mb-[40px] md:mb-[90px] inter-regular">
      <div className="flex items-center gap-2">
        <h2 className="text-2xl text-[#ebebeb] relative pb-1 mb-8">
          Suggestions for you
          <span className="absolute bottom-[-4px] left-0 w-full h-[4px] bg-orange-500 rounded-full glow-bar"></span>
        </h2>
      </div>
      <div className="mt-4 p-6 bg-[#22252D] rounded-lg shadow-lg text-white border border-gray-800">
        <h3 className="text-xl font-semibold mb-4 text-left underline decoration-orange-500">Meditation</h3>
        <ul className="list-disc list-inside mb-4">
          {suggestionsData.Meditation.map((item, index) => (
            <li key={index} className="mb-2 flex items-start ">
            <FaStar className="text-orange-500 mr-2 mt-1" />
              <span className="text-white">{item}</span>
            </li>
          ))}
        </ul>
      </div>
      <div className="mt-6 p-6 bg-[#22252D] rounded-lg shadow-lg text-white border border-gray-800">
        <h3 className="text-xl font-semibold mb-4 text-left underline decoration-orange-500">Workout</h3>
        <ul className="list-disc list-inside mb-4">
          {suggestionsData.Workout.map((item, index) => (
            <li key={index} className="mb-2 flex items-start ">
            <FaStar className="text-orange-500 mr-2 mt-1" />
              <span className="text-white">{item}</span>
            </li>
          ))}
        </ul>
      </div>
      <div className="mt-6 p-6 bg-[#22252D] rounded-lg shadow-lg text-white border border-gray-800">
        <h3 className="text-xl font-semibold mb-4 text-left underline decoration-orange-500">Sleep Content Recommendations</h3>
        <ul className="list-disc list-inside mb-4">
          {suggestionsData["Sleep Content Recommendations"].map((item, index) => (
            <li key={index} className="mb-2 flex items-start ">
            <FaStar className="text-orange-500 mr-2 mt-1" />
              <span className="text-white">{item}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default KundliSuggestions