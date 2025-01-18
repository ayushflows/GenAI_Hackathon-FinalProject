import React from 'react';
import { FaBriefcase, FaHome, FaHeartbeat, FaUsers, FaDollarSign } from 'react-icons/fa'; // Import icons

// Sample predictions data
const predictionsData = [
  {
    heading: "Career",
    icon: <FaBriefcase className="text-white" />,
    description: "Your career is set to take off this year with numerous opportunities for growth and advancement. Stay focused and be open to new challenges.",
    parameters: {
      opportunities: "High",
      challenges: "Moderate",
      advice: "Network and build strong professional relationships."
    }
  },
  {
    heading: "Family",
    icon: <FaHome className="text-white" />,
    description: "Family life will be harmonious and filled with joy. Spend quality time with your loved ones and strengthen your bonds.",
    parameters: {
      harmony: "High",
      conflicts: "Low",
      advice: "Communicate openly and show appreciation."
    }
  },
  {
    heading: "Health",
    icon: <FaHeartbeat className="text-white" />,
    description: "Your health will be stable, but it's important to maintain a balanced diet and regular exercise routine to stay fit.",
    parameters: {
      fitness: "Good",
      stress: "Manageable",
      advice: "Practice mindfulness and stay active."
    }
  },
  {
    heading: "Relationships",
    icon: <FaUsers className="text-white" />,
    description: "Relationships will flourish as you invest time and effort into understanding and supporting your partner and friends.",
    parameters: {
      love: "Strong",
      friendships: "Supportive",
      advice: "Be empathetic and listen actively."
    }
  },
  {
    heading: "Finance",
    icon: <FaDollarSign className="text-white" />,
    description: "Financial stability is on the horizon. Focus on saving and making wise investments to secure your future.",
    parameters: {
      stability: "High",
      expenses: "Controlled",
      advice: "Budget wisely and avoid unnecessary expenditures."
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
              <p className="text-[#ebebeb]"><strong>Opportunities:</strong> {prediction.parameters.opportunities}</p>
              <p className="text-[#ebebeb]"><strong>Challenges:</strong> {prediction.parameters.challenges}</p>
              <p className="text-[#ebebeb]"><strong>Advice:</strong> {prediction.parameters.advice}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default KundliPredictions;
