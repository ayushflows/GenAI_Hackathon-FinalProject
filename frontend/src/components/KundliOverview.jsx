import React from 'react';
import { FaBriefcase, FaHeart, FaUserGraduate, FaUsers, FaHandshake } from "react-icons/fa"; // Import icons

// Sample user data
const userData = {
  name: "John Doe",
  sex: "Male",
  placeOfBirth: "New York, USA",
  birthTime: "10:30 AM",
  birthDate: "1990-01-01",
  tithi: "Purnima",
  hinduWeekDay: "Monday",
  paksha: "Shukla",
  nakshatra: "Ashwini",
  rasi: "Mesh (Aries)",
  career: "John has shown significant achievements in the field of technology, consistently excelling and demonstrating leadership qualities in various roles.",
  relationships: "John values his relationships and maintains strong bonds with family and friends, known for his empathy and understanding.",
  personalGrowth: "John is committed to continuous learning and personal development, regularly setting goals to enhance his skills and mindset.",
  family: "Family is an integral part of John's life, and he dedicates time to nurture and support his loved ones.",
  socialConnections: "John is highly sociable, actively engaging with his community and participating in events that promote unity and collaboration."
};

function KundliOverview() {
  const aspects = [
    { title: "Career", content: userData.career, icon: <FaBriefcase className="text-orange-500" /> },
    { title: "Relationships", content: userData.relationships, icon: <FaHeart className="text-orange-500" /> },
    { title: "Personal Growth", content: userData.personalGrowth, icon: <FaUserGraduate className="text-orange-500" /> },
    { title: "Family", content: userData.family, icon: <FaUsers className="text-orange-500" /> },
    { title: "Social Connections", content: userData.socialConnections, icon: <FaHandshake className="text-orange-500" /> },
  ];

  return (
    <div id="overview" className="mx-2 lg:mx-6 xl:mx-12 mb-[40px] md:mb-[90px] inter-regular">
      <div className="flex items-center gap-2">
        <h2 className="text-2xl text-[#ebebeb] relative pb-1 mb-8">
          Kundli Overview
          <span className="absolute bottom-[-4px] left-0 w-full h-[4px] bg-orange-500 rounded-full glow-bar"></span>
        </h2>
      </div>

      <div className="mt-4 p-6 bg-gradient-to-r from-gray-800 to-gray-700 rounded-lg shadow-lg text-white border border-gray-600">
        <h3 className="text-xl font-semibold mb-4 text-left underline decoration-orange-500">User Details</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <p className="mb-2"><strong>Name:</strong> <span className="ml-2">{userData.name}</span></p>
            <p className="mb-2"><strong>Sex:</strong> <span className="ml-2">{userData.sex}</span></p>
            <p className="mb-2"><strong>Place of Birth:</strong> <span className="ml-2">{userData.placeOfBirth}</span></p>
            <p className="mb-2"><strong>Birth Time:</strong> <span className="ml-2">{userData.birthTime}</span></p>
            <p className="mb-2"><strong>Birth Date:</strong> <span className="ml-2">{userData.birthDate}</span></p>
          </div>
          <div>
            <p className="mb-2"><strong>Rasi:</strong> <span className="ml-2">{userData.rasi}</span></p>
            <p className="mb-2"><strong>Tithi:</strong> <span className="ml-2">{userData.tithi}</span></p>
            <p className="mb-2"><strong>Hindu Week Day:</strong> <span className="ml-2">{userData.hinduWeekDay}</span></p>
            <p className="mb-2"><strong>Paksha:</strong> <span className="ml-2">{userData.paksha}</span></p>
            <p className="mb-2"><strong>Nakshatra:</strong> <span className="ml-2">{userData.nakshatra}</span></p>
          </div>
        </div>
      </div>

      <div className="mt-6 space-y-8">
        {aspects.map((aspect, index) => (
          <div
            key={index}
            className="p-6 bg-gradient-to-br from-[#1f2937] to-[#111827] rounded-lg shadow-md border border-gray-600 flex items-start gap-4"
          >
            <div className="text-4xl">{aspect.icon}</div>
            <div>
              <h3 className="text-xl font-bold mb-2 text-orange-500">{aspect.title}</h3>
              <p className="text-md leading-relaxed text-justify text-white">{aspect.content}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default KundliOverview;
