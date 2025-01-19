import React from 'react';
import { FaCheckCircle, FaTimesCircle } from 'react-icons/fa'; // Import icons

function KundliInsights({analyzedData}) {

  const insightsData = {
    dos: analyzedData["Do's and Don'ts"]["Do's"],
    donts: analyzedData["Do's and Don'ts"]["Don'ts"]
  };

  
  return (
    <div id="insights" className="mx-2 lg:mx-6 xl:mx-12 mb-[40px] md:mb-[90px] inter-regular">
      <div className="flex items-center gap-2">
        <h2 className="text-2xl text-[#ebebeb] relative pb-1 mb-8">
          Insights for you
          <span className="absolute bottom-[-4px] left-0 w-full h-[4px] bg-orange-500 rounded-full glow-bar"></span>
        </h2>
      </div>
      {/* Grid layout for side-by-side Do's and Don'ts */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Do's Section */}
        <div className="p-6 bg-gradient-to-r from-gray-800 to-gray-700 rounded-lg shadow-lg text-white border border-gray-600">
          <h3 className="text-xl font-semibold mb-4 text-left underline decoration-green-500">Do's</h3>
          <ul className="space-y-2">
            {insightsData.dos.map((item, index) => (
              <li key={index} className="flex items-start gap-2">
                <FaCheckCircle className="text-green-500 mt-1" />
                <span className="text-white">{item}</span>
              </li>
            ))}
          </ul>
        </div>
        {/* Don'ts Section */}
        <div className="p-6 bg-gradient-to-r from-gray-800 to-gray-700 rounded-lg shadow-lg text-white border border-gray-600">
          <h3 className="text-xl font-semibold mb-4 text-left underline decoration-red-500">Don'ts</h3>
          <ul className="space-y-2">
            {insightsData.donts.map((item, index) => (
              <li key={index} className="flex items-start gap-2">
                <FaTimesCircle className="text-red-500 mt-1" />
                <span className="text-white">{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default KundliInsights;
