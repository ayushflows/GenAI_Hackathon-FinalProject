import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import logoImg from "../assets/logix_logo.png";
import DashboardSections from '../components/DashboardSections';
import PersonalChatBot from '../components/personalChatbot/PersonalChatBot';
import KundliOverview from '../components/KundliOverview';
import KundliBirthChart from '../components/KundliBirthChart';
import KundliHoroscopes from '../components/KundliHoroscopes';
import KundliPujas from '../components/KundliPujas';
import KundliGems from '../components/KundliGems';
import KundliPredictions from '../components/KundliPredictions';
import KundliInsights from '../components/KundliInsights';

function Dashboard() {
  const navigate = useNavigate();
  const location = useLocation();
  const [activeButton, setActiveButton] = useState('overview');
//   const [analyzedData, setAnalyzedData] = useState(location.state?.analyzedData || null);


  const handleScroll = () => {
    const sections = document.querySelectorAll('section');
    const scrollContainer = document.getElementById('analytics-overview');
    const scrollPosition = scrollContainer.scrollTop;
    let currentSection = 'dashboard';

    sections.forEach((section) => {
      const sectionTop = section.offsetTop;
      if (scrollPosition >= sectionTop - 70 ) {
        currentSection = section.getAttribute('id');
      }
    });

    setActiveButton(currentSection);
  };

  const handleButtonClick = (sectionId) => {
    const section = document.getElementById(sectionId);
    const scrollContainer = document.getElementById('analytics-overview');
    scrollContainer.scrollTo({
      top: section.offsetTop - 60,
      behavior: 'smooth',
    });
  };

  useEffect(() => {
    const scrollContainer = document.getElementById('analytics-overview');
    scrollContainer.addEventListener('scroll', handleScroll);
    return () => {
      scrollContainer.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className='w-[100vw] h-screen overflow-hidden dashboard-bg flex justify-center items-center relative'>
      <div className='w-full h-full bg-[#2E3139] rounded-none lg:flex overflow-hidden inter-regular'>
        <div className='lg:w-[230px] lg:h-full w-full h-[60px] bg-[#22252D] flex lg:flex-col'>
          <div className='w-full h-full lg:h-[10%] text-black px-4 sm:px-8 lg:pl-6 flex justify-between items-center'>
            <div className='flex lg:mt-6 justify-start items-center cursor-pointer' onClick={()=>navigate("/")}>
              <img src={logoImg} alt='LogiX Logo' className='inline-block h-[30px] lg:h-10 mr-2 filter invert contrast-200' />
              <span className='dashboard-sketch-text text-[18px] lg:text-[1.7rem]'>LogiX</span>
            </div>
            <div className='flex lg:hidden gap-4 inter-regular'>
              <button className='text-gray-300 hover:text-white sm:text-lg' onClick={()=>navigate("/")}>Home </button>
              <button className='text-gray-300 hover:text-white sm:text-lg' onClick={()=>navigate("/userinput")}>Back</button>
            </div>
          </div>
          <DashboardSections setActiveButton={setActiveButton} activeButton={activeButton} onButtonClick={handleButtonClick}/>
        </div>
        <div id='analytics-overview' className='lg:w-[calc(100%-230px)] lg:h-full w-full h-[calc(100vh-60px)] bg-[#2E3139] overflow-y-auto custom-scrollbar'>
          <h1 className='text-2xl font-normal figtree-regular w-full py-3 text-center text-[#e6e6e6] mb-2'> SoulBuddy - AI-Powered Spiritual Guide</h1>
        <>
            <section id="overview">
                <KundliOverview />
            </section>
            {/* <section id="birth_chart">
                <KundliBirthChart />
            </section> */}
            <section id="horoscope">
                <KundliHoroscopes />
            </section>
            <section id="pujas">
                <KundliPujas />
            </section>
            <section id="gems">
                <KundliGems />
            </section>
            <section id="predictions">
                <KundliPredictions />
            </section>
            <section id="insights">
                <KundliInsights />
            </section>
        </>
        </div>
      </div>
      <PersonalChatBot />
    </div>
  );
}

export default Dashboard;
