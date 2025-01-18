import React from 'react'

// Sample insights data
const insightsData = {
  dos: [
    "Maintain a balanced diet and exercise regularly.",
    "Practice mindfulness and meditation to reduce stress.",
    "Spend quality time with family and friends.",
    "Set realistic goals and work towards achieving them.",
    "Stay positive and keep a growth mindset."
  ],
  donts: [
    "Avoid negative thinking and self-doubt.",
    "Don't overwork yourself; take breaks when needed.",
    "Avoid unhealthy eating habits and sedentary lifestyle.",
    "Don't neglect your mental health; seek help if needed.",
    "Avoid procrastination and stay focused on your tasks."
  ]
};

function KundliInsights() {
  return (
    <div id="insights" className="mx-2 lg:mx-6 xl:mx-12 mb-[40px] md:mb-[90px] inter-regular">
      <div className="flex items-center gap-2">
        <h2 className="text-2xl text-[#ebebeb] relative pb-1 mb-8">
          Insights for you
          <span className="absolute bottom-[-4px] left-0 w-full h-[4px] bg-orange-500 rounded-full glow-bar"></span>
        </h2>
      </div>
      <div className="mt-4 p-6 bg-gradient-to-r from-gray-800 to-gray-700 rounded-lg shadow-lg text-white border border-gray-600">
        <h3 className="text-xl font-semibold mb-4 text-left underline decoration-orange-500">Do's</h3>
        <ul className="list-disc list-inside mb-4">
          {insightsData.dos.map((item, index) => (
            <li key={index} className="mb-2">
              <span className="text-white">{item}</span>
            </li>
          ))}
        </ul>
      </div>
      <div className="mt-6 p-6 bg-gradient-to-r from-gray-800 to-gray-700 rounded-lg shadow-lg text-white border border-gray-600">
        <h3 className="text-xl font-semibold mb-4 text-left underline decoration-orange-500">Don'ts</h3>
        <ul className="list-disc list-inside mb-4">
          {insightsData.donts.map((item, index) => (
            <li key={index} className="mb-2">
              <span className="text-white">{item}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default KundliInsights