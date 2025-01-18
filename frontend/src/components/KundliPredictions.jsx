import React from 'react'

// Sample predictions data
const predictionsData = [
  {
    heading: "Career",
    icon: "https://via.placeholder.com/32?text=C",
    description: "Your career is set to take off this year with numerous opportunities for growth and advancement. Stay focused and be open to new challenges.",
    parameters: {
      opportunities: "High",
      challenges: "Moderate",
      advice: "Network and build strong professional relationships."
    }
  },
  {
    heading: "Family",
    icon: "https://via.placeholder.com/32?text=F",
    description: "Family life will be harmonious and filled with joy. Spend quality time with your loved ones and strengthen your bonds.",
    parameters: {
      harmony: "High",
      conflicts: "Low",
      advice: "Communicate openly and show appreciation."
    }
  },
  {
    heading: "Health",
    icon: "https://via.placeholder.com/32?text=H",
    description: "Your health will be stable, but it's important to maintain a balanced diet and regular exercise routine to stay fit.",
    parameters: {
      fitness: "Good",
      stress: "Manageable",
      advice: "Practice mindfulness and stay active."
    }
  },
  {
    heading: "Relationships",
    icon: "https://via.placeholder.com/32?text=R",
    description: "Relationships will flourish as you invest time and effort into understanding and supporting your partner and friends.",
    parameters: {
      love: "Strong",
      friendships: "Supportive",
      advice: "Be empathetic and listen actively."
    }
  },
  {
    heading: "Finance",
    icon: "https://via.placeholder.com/32?text=$",
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
        <h2 className="text-2xl text-[#ebebeb] relative pb-1 mb-8">
          Predictions for you
          <span className="absolute bottom-[-4px] left-0 w-full h-[4px] bg-orange-500 rounded-full glow-bar"></span>
        </h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {predictionsData.map((prediction, index) => (
          <div
            key={index}
            className="bg-gradient-to-bl from-gray-800 to-gray-700 rounded-xl flex flex-col items-start p-4 border-2 border-gray-600 shadow-md"
          >
            <div className="flex items-center mb-2">
              <img src={prediction.icon} alt={`${prediction.heading} icon`} className="w-8 h-8 mr-2" />
              <h3 className="text-xl text-[#ebebeb]">{prediction.heading}</h3>
            </div>
            <p className="text-[#ebebeb] mb-1"><strong>Description:</strong> {prediction.description}</p>
            <p className="text-[#ebebeb] mb-1"><strong>Opportunities:</strong> {prediction.parameters.opportunities}</p>
            <p className="text-[#ebebeb] mb-1"><strong>Challenges:</strong> {prediction.parameters.challenges}</p>
            <p className="text-[#ebebeb]"><strong>Advice:</strong> {prediction.parameters.advice}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default KundliPredictions