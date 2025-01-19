import React from "react";

// Sample pujas data

const cardsBg = [
  {
    id: 1,
    gradient: 'from-[#ff34341f] via-[#22252d] to-[#22252d]',
    border: 'border-[#ff34341f]',
  },
  {
    id: 2,
    gradient: 'from-[#45ff341f] via-[#22252d] to-[#22252d]',
    border: 'border-[#45ff341f]',
  },
  {
    id: 3,
    gradient: 'from-[#3452ff1f] via-[#22252d] to-[#22252d]',
    border: 'border-[#3452ff1f]',
  },
  {
    id: 4,
    gradient: 'from-[#f534ff1f] via-[#22252d] to-[#22252d]',
    border: 'border-[#f534ff1f]',
  },
  {
    id: 5,
    gradient: 'from-[#a9b8471f] via-[#22252d] to-[#22252d]',
    border: 'border-[#a9b8471f]',
  },
];

function KundliPujas({analyzedData}) {

  const pujasData = analyzedData["Pooja for Problems"].map((pooja) => ({
    heading: pooja.Heading,
    for: pooja.For,
    significance: pooja.Significance,
    whyBest: pooja["Why Best"]
  }));

  
  return (
    <div id="horoscope" className="mx-2 lg:mx-6 xl:mx-12 mb-[40px] md:mb-[90px] inter-regular">
      <div className="flex items-center gap-2">
        <h2 className="text-3xl text-[#ebebeb] relative pb-1 mb-8 font-semibold">
          Pujas for you
          <span className="absolute bottom-[-4px] left-0 w-full h-[4px] bg-orange-500 rounded-full glow-bar"></span>
        </h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {pujasData.map((puja, index) => {
          const metric = cardsBg[index % cardsBg.length]; // Cyclic assignment of colors
          return (
            <div
              key={index}
              className={`bg-gradient-to-bl ${metric.gradient} ${metric.border} rounded-xl flex flex-col items-start p-6 border-2 shadow-md transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:bg-opacity-80`}
            >
              <h3 className="text-2xl text-[#e3eaeb] font-bold mb-3">{puja.heading}</h3>
              <p className="text-gray-300 mb-3">{puja.for}</p>
              <p className="text-[#ebebeb] mb-4"><strong>Significance:</strong> {puja.significance}</p>
              <p className="text-[#ebebeb]"><strong>Why Best:</strong> {puja.whyBest}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default KundliPujas;
