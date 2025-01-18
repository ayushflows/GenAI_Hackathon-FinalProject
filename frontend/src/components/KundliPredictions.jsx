import React from 'react';
import { FaBriefcase, FaHome, FaHeartbeat, FaUsers, FaDollarSign } from 'react-icons/fa'; // Import icons

// Enhanced predictions data
const predictionsData = [
  {
    heading: "Career",
    icon: <FaBriefcase className="text-white" />,
    description: "This year promises significant growth in your professional life. Be ready to seize opportunities and embrace challenges.",
    parameters: {
      focusAreas: [
        "Networking and building strong professional connections",
        "Upskilling to stay relevant in your field",
        "Taking calculated risks for better opportunities",
      ],
      advice: "Stay proactive and maintain a growth mindset."
    }
  },
  {
    heading: "Family",
    icon: <FaHome className="text-white" />,
    description: "A year filled with peace and joy in family matters. Strengthening relationships will bring immense satisfaction.",
    parameters: {
      focusAreas: [
        "Spending quality time with loved ones",
        "Organizing family activities or trips",
        "Ensuring open and honest communication",
      ],
      advice: "Appreciate and nurture familial bonds."
    }
  },
  {
    heading: "Health",
    icon: <FaHeartbeat className="text-white" />,
    description: "Maintain a balanced lifestyle for overall well-being. Pay attention to your physical and mental health.",
    parameters: {
      focusAreas: [
        "Following a balanced diet and hydration routine",
        "Incorporating regular physical activities like yoga or gym",
        "Managing stress through mindfulness and hobbies",
      ],
      advice: "Stay consistent with healthy habits."
    }
  },
  {
    heading: "Relationships",
    icon: <FaUsers className="text-white" />,
    description: "A positive year for relationships as bonds grow deeper. Focus on understanding and supporting each other.",
    parameters: {
      focusAreas: [
        "Actively listening and communicating effectively",
        "Showing appreciation and empathy",
        "Resolving conflicts constructively",
      ],
      advice: "Be present and express your feelings genuinely."
    }
  },
  {
    heading: "Finance",
    icon: <FaDollarSign className="text-white" />,
    description: "Financial stability is achievable with proper planning and discipline. Be mindful of your expenditures.",
    parameters: {
      focusAreas: [
        "Creating and following a budget",
        "Exploring investment options for long-term gains",
        "Avoiding impulsive purchases",
      ],
      advice: "Focus on saving and making informed financial decisions."
    }
  }
];

function KundliPredictions() {
  return (
    <div id="predictions" className="mx-2 lg:mx-6 xl:mx-12 mb-[40px] md:mb-[90px] inter-regular">
      <div className="flex items-center gap-2">
        <h2 className="text-3xl text-[#ebebeb] relative pb-1 mb-8 font-semibold">
          Predictions for you
          <span className="absolute bottom-[-4px] left-0 w-full h-[4px] bg-orange-500 rounded-full glow-bar"></span>
        </h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {predictionsData.map((prediction, index) => (
          <div
            key={index}
            className="bg-[#22252D] rounded-xl flex flex-col items-start p-6 border-2 border-transparent shadow-md transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:bg-opacity-80"
          >
            <div className="flex items-center mb-4">
              <div className="bg-orange-500 p-2 rounded-full">{prediction.icon}</div>
              <h3 className="text-2xl text-[#ebebeb] font-semibold ml-3">{prediction.heading}</h3>
            </div>
            <p className="text-[#d3d3d3] mb-3">{prediction.description}</p>
            <div className="mb-4">
              <p className="text-[#ebebeb]"><strong>Focus Areas:</strong></p>
              <ul className="list-disc ml-6 text-[#d3d3d3]">
                {prediction.parameters.focusAreas.map((area, idx) => (
                  <li key={idx}>{area}</li>
                ))}
              </ul>
              <p className="text-[#ebebeb] mt-2"><strong>Advice:</strong> {prediction.parameters.advice}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default KundliPredictions;
