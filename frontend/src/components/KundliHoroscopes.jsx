import React from 'react'

// Sample horoscope data
const horoscopeData = {
  daily: {
    paragraph: "Today is a day filled with opportunities and challenges. You may find yourself in situations that require quick thinking and adaptability. Stay positive and trust your instincts to navigate through the day successfully.",
    inFavour: [
      "Good health: You will feel energetic and vibrant throughout the day.",
      "Positive energy: Your positive attitude will attract good vibes.",
      "Support from friends: Friends will be there to help you in times of need."
    ],
    notInFavour: [
      "Financial instability: Be cautious with your spending today.",
      "Workplace stress: You might face some challenges at work.",
      "Miscommunication: Clear communication is essential to avoid misunderstandings."
    ]
  },
  monthly: {
    paragraph: "This month brings a mix of highs and lows. While you will experience growth in your personal and professional life, be prepared for some unexpected hurdles. Stay focused and maintain a balanced approach to achieve your goals.",
    inFavour: [
      "Career advancement: Opportunities for growth in your career will arise.",
      "New learning opportunities: This is a great time to acquire new skills.",
      "Strong family bonds: Your relationship with family members will strengthen."
    ],
    notInFavour: [
      "Health issues: Take care of your health and avoid stress.",
      "Financial constraints: Budgeting will be crucial to manage expenses.",
      "Relationship conflicts: Be patient and understanding to avoid conflicts."
    ]
  }
};

function KundliHoroscopes() {
  return (
    <div id="horoscope" className="mx-2 lg:mx-6 xl:mx-12 mb-[40px] md:mb-[90px] inter-regular">
      <div className="flex items-center gap-2">
        <h2 className="text-2xl text-[#ebebeb] relative pb-1 mb-8">
          Your Horoscopes
          <span className="absolute bottom-[-4px] left-0 w-full h-[4px] bg-orange-500 rounded-full glow-bar"></span>
        </h2>
      </div>

      <div className="mt-4 p-6 bg-gradient-to-r from-gray-800 to-gray-700 rounded-lg shadow-lg text-white border border-gray-600">
        <h3 className="text-xl font-semibold mb-4 text-left underline decoration-orange-500">Daily Horoscope</h3>
        <p className="mb-4">{horoscopeData.daily.paragraph}</p>
        <h4 className="text-lg font-semibold mb-2 text-orange-500">Favorable Aspects</h4>
        <ul className="list-disc list-inside mb-4">
          {horoscopeData.daily.inFavour.map((item, index) => (
            <li key={index}>
              <span className="text-white font-semibold">{item.split(":")[0]}:</span>
              <span className="text-gray-200"> {item.split(":")[1]}</span>
            </li>
          ))}
        </ul>
        <h4 className="text-lg font-semibold mb-2 text-orange-500">Unfavorable Aspects</h4>
        <ul className="list-disc list-inside">
          {horoscopeData.daily.notInFavour.map((item, index) => (
            <li key={index}>
              <span className="text-white font-semibold">{item.split(":")[0]}:</span>
              <span className="text-gray-200"> {item.split(":")[1]}</span>
            </li>
          ))}
        </ul>
      </div>

      <div className="mt-6 p-6 bg-gradient-to-r from-gray-800 to-gray-700 rounded-lg shadow-lg text-white border border-gray-600">
        <h3 className="text-xl font-semibold mb-4 text-left underline decoration-orange-500">Monthly Horoscope</h3>
        <p className="mb-4">{horoscopeData.monthly.paragraph}</p>
        <h4 className="text-lg font-semibold mb-2 text-orange-500">Favorable Aspects</h4>
        <ul className="list-disc list-inside mb-4">
          {horoscopeData.monthly.inFavour.map((item, index) => (
            <li key={index}>
              <span className="text-white font-semibold">{item.split(":")[0]}:</span>
              <span className="text-gray-200"> {item.split(":")[1]}</span>
            </li>
          ))}
        </ul>
        <h4 className="text-lg font-semibold mb-2 text-orange-500">Unfavorable Aspects</h4>
        <ul className="list-disc list-inside">
          {horoscopeData.monthly.notInFavour.map((item, index) => (
            <li key={index}>
              <span className="text-white font-semibold">{item.split(":")[0]}:</span>
              <span className="text-gray-200"> {item.split(":")[1]}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default KundliHoroscopes