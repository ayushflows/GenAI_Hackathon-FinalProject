import React from 'react'

// Sample horoscope data
function KundliHoroscopes({analyzedData}) {

  const horoscopeData = {
    daily: {
      paragraph: analyzedData["Horoscope"]["Daily Horoscope"].Prediction,
      inFavour: analyzedData["Horoscope"]["Daily Horoscope"]["Favorable Aspects"],
      notInFavour: analyzedData["Horoscope"]["Daily Horoscope"]["Unfavorable Aspects"]
    },
    monthly: {
      paragraph: analyzedData["Horoscope"]["Monthly Horoscope"].Prediction,
      inFavour: analyzedData["Horoscope"]["Monthly Horoscope"]["Positive Trends"],
      notInFavour: analyzedData["Horoscope"]["Monthly Horoscope"].Challenges
    }
  };

  
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