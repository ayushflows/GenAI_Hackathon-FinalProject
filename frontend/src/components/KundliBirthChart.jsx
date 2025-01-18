import React from 'react';

const chartData = [
    { houseNumber: 1, planets: ["Sun"] },
    { houseNumber: 2, planets: ["Ra"] },
    { houseNumber: 3, planets: [] },
    { houseNumber: 4, planets: ["Me", "Ju"] },
    { houseNumber: 5, planets: [] },
    { houseNumber: 6, planets: ["Sa"] },
    { houseNumber: 7, planets: [] },
    { houseNumber: 8, planets: ["Ke"] },
    { houseNumber: 9, planets: [] },
    { houseNumber: 10, planets: [] },
    { houseNumber: 11, planets: [] },
    { houseNumber: 12, planets: [] }
];

function KundliBirthChart() {
  return (
    <div id="birth_chart" className="mx-2 lg:mx-6 xl:mx-12 mb-[40px] md:mb-[90px] inter-regular">
      <div className="flex items-center gap-2">
        <h2 className="text-2xl text-[#ebebeb] relative pb-1 mb-8">
          Birth Charts
          <span className="absolute bottom-[-4px] left-0 w-full h-[4px] bg-orange-500 rounded-full glow-bar"></span>
        </h2>
      </div>
      <LagnaChart chartData={chartData} />
    </div>
  );
}

export default KundliBirthChart;

const LagnaChart = ({ chartData }) => {
  return (
    <svg width="300" height="300" viewBox="0 0 300 300" className="block mx-auto">
      {/* Outer Rectangle */}
      <rect x="0" y="0" width="300" height="300" fill="none" stroke="orange" strokeWidth="2" />

      {/* Diagonal Lines */}
      <line x1="0" y1="0" x2="300" y2="300" stroke="orange" strokeWidth="2" />
      <line x1="300" y1="0" x2="0" y2="300" stroke="orange" strokeWidth="2" />

      {/* Inner Diamond Grid */}
      <line x1="150" y1="0" x2="0" y2="150" stroke="orange" strokeWidth="2" />
      <line x1="150" y1="0" x2="300" y2="150" stroke="orange" strokeWidth="2" />
      <line x1="150" y1="300" x2="0" y2="150" stroke="orange" strokeWidth="2" />
      <line x1="150" y1="300" x2="300" y2="150" stroke="orange" strokeWidth="2" />

      {/* House Numbers and Planet Data */}
      {chartData.map((house, index) => {
        const housePositions = [
          { x: 250, y: 85 }, // House 1
          { x: 225, y: 70 }, // House 2
          { x: 150, y: 30 }, // House 2
          { x: 270, y: 150 }, // House 3
          { x: 240, y: 225 }, // House 4
          { x: 150, y: 270 }, // House 5
          { x: 60, y: 225 }, // House 6
          { x: 30, y: 150 }, // House 7
          { x: 60, y: 75 }, // House 8
          { x: 150, y: 150 }, // Center
          { x: 100, y: 200 }, // House 11
          { x: 100, y: 100 }, // House 12
        ];

        const { x, y } = housePositions[index] || { x: 0, y: 0 };

        return (
          <g key={index}>
            {/* House Number */}
            <text
              x={x}
              y={y - 10}
              textAnchor="middle"
              fontSize="12"
              fill="white"
            >
              {house.houseNumber}
            </text>

            {/* Planet Data */}
            <text
              x={x}
              y={y + 10}
              textAnchor="middle"
              fontSize="10"
              fill="white"
            >
              {house.planets.join(', ')}
            </text>
          </g>
        );
      })}
    </svg>
  );
};
