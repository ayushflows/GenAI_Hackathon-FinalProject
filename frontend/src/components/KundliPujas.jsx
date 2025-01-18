import React from 'react';

// Sample pujas data
const pujasData = [
  {
    heading: "Lakshmi Puja",
    for: "For your career",
    significance: "Lakshmi Puja is performed to invoke the blessings of Goddess Lakshmi, the deity of wealth and prosperity. This puja helps in attracting financial stability and success in your professional life.",
    whyBest: "This puja is best for you as it helps in removing obstacles in your career path and brings prosperity."
  },
  {
    heading: "Hanuman Puja",
    for: "For your health",
    significance: "Hanuman Puja is dedicated to Lord Hanuman, known for his strength and vitality. Performing this puja helps in overcoming health issues and gaining physical and mental strength.",
    whyBest: "This puja is best for you as it enhances your health and provides protection from ailments."
  },
  {
    heading: "Saraswati Puja",
    for: "For your education",
    significance: "Saraswati Puja is performed to seek the blessings of Goddess Saraswati, the deity of knowledge and wisdom. This puja aids in improving concentration and academic performance.",
    whyBest: "This puja is best for you as it helps in achieving academic success and intellectual growth."
  },
  {
    heading: "Ganesh Puja",
    for: "For removing obstacles",
    significance: "Ganesh Puja is dedicated to Lord Ganesha, the remover of obstacles. Performing this puja helps in overcoming challenges and ensuring success in all endeavors.",
    whyBest: "This puja is best for you as it removes obstacles and paves the way for success in your personal and professional life."
  }
];

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
];

function KundliPujas() {
  return (
    <div id="horoscope" className="mx-2 lg:mx-6 xl:mx-12 mb-[40px] md:mb-[90px] inter-regular">
      <div className="flex items-center gap-2">
        <h2 className="text-2xl text-[#ebebeb] relative pb-1 mb-8">
          Pujas for you
          <span className="absolute bottom-[-4px] left-0 w-full h-[4px] bg-orange-500 rounded-full glow-bar"></span>
        </h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {pujasData.map((puja, index) => {
          const metric = cardsBg[index % cardsBg.length]; // Cyclic assignment of colors
          return (
            <div
              key={index}
              className={`bg-gradient-to-bl ${metric.gradient} ${metric.border} rounded-xl flex flex-col items-start p-4 border-2 shadow-md`}
            >
              <h3 className="text-xl text-[#ebebeb] mb-2">{puja.heading}</h3>
              <p className="text-[#ebebeb] mb-1"><strong>For:</strong> {puja.for}</p>
              <p className="text-[#ebebeb] mb-1"><strong>Significance:</strong> {puja.significance}</p>
              <p className="text-[#ebebeb]"><strong>Why Best:</strong> {puja.whyBest}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default KundliPujas;
