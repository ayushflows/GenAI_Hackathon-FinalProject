import React from 'react';
import { FaBriefcase, FaHeart, FaUserGraduate, FaUsers, FaHandshake } from "react-icons/fa"; // Import icons
import womanImg from "../assets/woman.png";

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

function KundliOverview({analyzedData}) {

  const userData = {
    name: analyzedData.name ?? "Ankur Kumar",
    sex: analyzedData.gender ?? "Male",
    placeOfBirth: analyzedData.location ?? "Lucknow, Uttar Pradesh",
    birthTime: analyzedData.time ?? "10:30 AM",
    birthDate: analyzedData.dob ?? "2003-12-08",
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

  console.log(analyzedData);
  
  const aspects = [
    { title: "Career", content: userData.career, icon: <FaBriefcase className="text-white" /> },
    { title: "Relationships", content: userData.relationships, icon: <FaHeart className="text-white" /> },
    { title: "Personal Growth", content: userData.personalGrowth, icon: <FaUserGraduate className="text-white" /> },
    { title: "Family", content: userData.family, icon: <FaUsers className="text-white" /> },
    { title: "Social Connections", content: userData.socialConnections, icon: <FaHandshake className="text-white" /> },
  ];

  return (
    <div id="overview" className="mx-2 lg:mx-6 xl:mx-12 mb-[40px] md:mb-[90px] inter-regular">
      <div className="flex items-center gap-2">
        <h2 className="text-2xl text-[#ebebeb] relative pb-1 mb-8">
          Kundli Overview
          <span className="absolute bottom-[-4px] left-0 w-full h-[4px] bg-orange-500 rounded-full glow-bar"></span>
        </h2>
      </div>
      <div className='flex flex-col md:flex-row justify-between items-center'>
      <div className='w-full h-[90px] md:h-auto md:w-[18%]'>
      <img
          src={userData.sex === ("male") ? "https://avatars.githubusercontent.com/u/124663413?s=400&u=f9a2f3c9b2365a847dbd087202a63842c70ed346&v=4" : womanImg}
          alt="Gender Icon"
          className="md:left-[-50px] h-full md:h-auto object-contain rounded-full overflow-hidden"
        />
      </div>
      <div className="mt-4 p-6 bg-gradient-to-r from-gray-800 to-gray-700 rounded-lg shadow-lg text-white border border-gray-600 md:w-[80%]">
        <h3 className="text-xl font-semibold mb-4 text-left underline decoration-orange-500">User Details</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 md:gap-6">
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
      </div>

      <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6">
        {aspects.map((aspect, index) => (
          <div
            key={index}
            className={`bg-gradient-to-bl ${cardsBg[index].gradient} ${cardsBg[index].border} backdrop-blur-sm bg-opacity-30  p-6 rounded-lg shadow-md border flex items-start gap-4 transition-all duration-300 hover:bg-opacity-50 hover:scale-105 hover:shadow-2xl`}
          >
            <div className="text-3xl">{aspect.icon}</div>
            <div>
              <h3 className="text-xl font-bold mb-2 text-white transition-all duration-300 hover:text-opacity-80">{aspect.title}</h3>
              <p className="text-md leading-relaxed text-justify text-white">{aspect.content}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default KundliOverview;
