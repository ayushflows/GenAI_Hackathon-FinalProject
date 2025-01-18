import React, { useEffect, useRef, useState } from 'react';
import { Cover } from "./ui/cover";
import bggridImg from "../assets/bgimg.svg";
import { motion } from "framer-motion";
import { useNavigate } from 'react-router-dom';
import { DashBoardImgScroll } from './dashboardimg-scroll';

function HeroSection() {
  const [animateText, setAnimateText] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    setTimeout(() => {
      setAnimateText(true);
    }, 300);
  }, []);

  const handleGetStarted = () => {
    console.log("clicked")
    navigate('/userinput');
  };

  return (
    <section id="home" className="min-h-screen flex flex-col items-center justify-start text-center sm:px-6 lg:px-8 relative overflow-hidden">
      <div
        style={{
          position: "absolute",
          top: "-40vh",
          left: 0,
          width: "100%",
          height: "100%",
          backgroundImage: `url(${bggridImg})`,
          backgroundSize: "120%",
          backgroundPosition: "center",
          zIndex: 0,
        }}
      />
      <motion.h1
        className="z-10 outfit-main font-bold leading-tight text-[2.3rem] md:text-[4rem] mt-16 px-2 sm:px-0 2xl:mt-32 text-transparent bg-clip-text bg-gradient-to-r from-[#8E9EAB] to-[#EEF2F3]"
        initial={{ scale: window.innerWidth < 640 ? 1.1 : 1.7 , y: '20vh' }} 
        animate={{ scale: animateText ? 1 : window.innerWidth < 640 ? 1.1 : 1.7, y: animateText ? 0 : '20vh' }}
        transition={{ scale: { duration: 1.5, ease: 'easeInOut' }, y: { duration: 1.5, ease: 'easeInOut' }}}
      >
        Your <Cover> AI-Powered </Cover>
        <br />
        <span className="inline-block mt-6 sm:mt-4 text-[2.5rem] md:text-[4rem]"> Spiritual Guide </span>
      </motion.h1>

      <motion.p
        className="z-10 text-gray-300 text-[18px] sm:text-xl max-w-[65vw] mt-6 sm:mt-4 px-2 sm:px-0 outfit-small"
        initial={{ opacity: 0, y: '15vh' }}
        animate={{ opacity: animateText ? 1 : 0, y: animateText ? 0 : '15vh' }}
        transition={{ opacity: { duration: 0.7, delay: 0.9 }, y: { duration: 0.7, delay: 0.9 } }}
      >

      Transform your spiritual path with AI-driven astrology and numerology insights, personalized rituals, and chatbot guidance. Focus on{" "} 
      <span className="font-semibold text-white">Your Spiritual Growth.</span>
      </motion.p>
      <div className='w-full flex justify-center items-center mt-12 relative inter-regular'>
      <motion.button
  className="bg-[#1D3C50] text-[#F5F5F5] font-semibold w-[130px] md:w-[160px] h-[50px] flex justify-center items-center text-[15px] md:text-lg transition-all duration-200 ease-in-out transform shadow-md hover:shadow-lg hover:bg-[#F6A01D] hover:text-[#2D2D2D] hover:scale-105"
  initial={{ opacity: 0}}
  animate={{
    opacity: animateText ? 1 : 0,
  }}
  transition={{
    duration: 0.4,
    ease: 'easeInOut',
    delay: 1.2,
  }}
  onClick={handleGetStarted}
>
  Get Started <span className="ml-2">&rarr;</span>
</motion.button>
</div>
      <motion.div
      className='w-full'
        initial={{ opacity: 0}}
  animate={{
    opacity: animateText ? 1 : 0,
  }}
  transition={{
    duration: 0.4,
    ease: 'easeInOut',
    delay: 1.2,
  }}>
      <DashBoardImgScroll />
</motion.div>
    </section>
  );
}

export default HeroSection;
