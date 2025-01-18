import React from "react";
import { WobbleCard } from "./ui/wobble-card";

// Sample gemstones data
const gemsData = [
  {
    name: "Citrine",
    purpose: "For your career",
    description: "Citrine is known as the stone of success and prosperity. It is believed to enhance creativity and motivation, making it an excellent choice for those looking to advance in their careers.",
    benefit: "Wearing Citrine can help you attract wealth and success, boost your confidence, and improve your decision-making skills.",
    icon: "https://example.com/icons/citrine.png"
  },
  {
    name: "Moonstone",
    purpose: "For your emotional balance",
    description: "Moonstone is a calming stone that helps to balance emotions and reduce stress. It is often used to enhance intuition and promote inner growth.",
    benefit: "Wearing Moonstone can help you achieve emotional stability, reduce anxiety, and enhance your intuition.",
    icon: "https://example.com/icons/moonstone.png"
  },
  {
    name: "Rose Quartz",
    purpose: "For your relationships",
    description: "Rose Quartz is known as the stone of love. It promotes unconditional love, harmony, and emotional healing, making it ideal for improving relationships.",
    benefit: "Wearing Rose Quartz can help you attract love, improve existing relationships, and promote self-love and emotional healing.",
    icon: "https://example.com/icons/rose_quartz.png"
  },
  {
    name: "Amethyst",
    purpose: "For your spiritual growth",
    description: "Amethyst is a powerful stone that promotes spiritual growth and protection. It is known for its ability to calm the mind and enhance meditation.",
    benefit: "Wearing Amethyst can help you achieve spiritual clarity, protect against negative energies, and enhance your meditation practice.",
    icon: "https://example.com/icons/amethyst.png"
  },
  {
    name: "Tiger's Eye",
    purpose: "For your confidence",
    description: "Tiger's Eye is a stone of courage and confidence. It helps to boost self-esteem and provides protection against negative energies.",
    benefit: "Wearing Tiger's Eye can help you build confidence, overcome fears, and stay grounded in challenging situations.",
    icon: "https://example.com/icons/tigers_eye.png"
  }
];

function KundliGems() {
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
