import React from 'react';
import { FaBriefcase, FaHome, FaHeartbeat, FaUsers, FaDollarSign } from 'react-icons/fa'; // Import icons


function KundliPredictions({analyzedData}) {

  const predictionsData = Object.keys(analyzedData.Prediction).map((key) => {
    const section = analyzedData.Prediction[key];
    return {
      heading: section.Heading,
      icon:
        key === "Career"
          ? <FaBriefcase className="text-white" />
          : key === "Family"
          ? <FaHome className="text-white" />
          : key === "Health"
          ? <FaHeartbeat className="text-white" />
          : key === "Relationships"
          ? <FaUsers className="text-white" />
          : key === "Finance"
          ? <FaDollarSign className="text-white" />
          : null,
      description: section.Description,
      parameters: {
        focusAreas: section.Parameters["Focus Areas"],
        advice: section.Parameters.Advice,
      },
    };
  });

  
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
