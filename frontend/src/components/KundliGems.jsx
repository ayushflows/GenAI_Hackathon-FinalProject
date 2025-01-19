import React from "react";
import { WobbleCard } from "./ui/wobble-card";

// Sample gemstones data

function KundliGems({analyzedData}) {
  const gemsData = analyzedData["Gemstone Suggestions"].map((gem) => ({
    name: gem.Name,
    purpose: gem.Purpose,
    description: gem.Description,
    benefit: gem.Benefit,
  }));
  
  return (
    <div id="gems" className="mx-2 lg:mx-6 xl:mx-12 mb-[40px] md:mb-[90px] inter-regular">
      <div className="flex items-center gap-2">
        <h2 className="text-2xl text-[#ebebeb] relative pb-1 mb-8">
          Gems for you
          <span className="absolute bottom-[-4px] left-0 w-full h-[4px] bg-orange-500 rounded-full glow-bar"></span>
        </h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {gemsData.map((gem, index) => (
          <WobbleCard
            key={index}
            className="bg-[#22252D] rounded-xl flex flex-col items-start p-6 border-2 border-[#1a5e7d23] border-opacity-45 shadow-md"
          >
            <div className="flex items-center mb-4">
              <h3 className="text-xl text-[#f7a800] font-semibold">{gem.name}</h3>
            </div>
            <div className="mb-3">
              <p className="text-[#d3d3d3] mb-1"><strong>Purpose:</strong> {gem.purpose}</p>
            </div>
            <div className="mb-3">
              <p className="text-[#d3d3d3] mb-1"><strong>Description:</strong> {gem.description}</p>
            </div>
            <div>
              <p className="text-[#d3d3d3]"><strong>Benefit:</strong> {gem.benefit}</p>
            </div>
          </WobbleCard>
        ))}
      </div>
    </div>
  );
}

export default KundliGems;
