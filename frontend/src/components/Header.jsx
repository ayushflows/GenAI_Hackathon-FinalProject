import React, { useState } from 'react';
import logo2 from "../assets/logix_logo.png";
import { useNavigate } from 'react-router-dom';

const Header = () => {
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);

  const handleScroll = (sectionId) => {
    navigate("/");
    setTimeout(() => {
      const section = document.getElementById(sectionId);
      if (section) {
        section.scrollIntoView({ behavior: "smooth" });
      }
    }, 100);
  };
  return (
    <header className="bg-gradient-to-b from-transparent to-transparent text-white px-6 py-4 relative z-20 ">
      <div className="max-w-[90%] mx-auto py-3 px-6 flex items-center justify-between glassy-navbar rounded-xl">
        
        <div className="flex items-center space-x-2 cursor-pointer" onClick={()=>navigate("/")}>
          <img src={logo2} alt="LogiX Logo" className="h-8 w-8 md:h-10 md:w-10 object-contain filter invert contrast-100" />
          <div className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#8E9EAB] to-[#EEF2F3] outfit-big">LogiX
          </div>
        </div>

        <nav className="hidden md:flex items-center space-x-8 outfit-header">
          <a 
            href="/" 
            className="text-white hover:text-gray-300 cursor-pointer" 
            style={{ fontSize: '1.125rem' }}
          >
            Home
          </a>
          <a 
            onClick={() => handleScroll("services")}
            className="text-white hover:text-gray-300 cursor-pointer" 
            style={{ fontSize: '1.125rem' }}
          >
            Contact
          </a>
          <a 
            onClick={() => handleScroll("about")}
            className="text-white hover:text-gray-300 cursor-pointer" 
            style={{ fontSize: '1.125rem' }}
          >
            Github
          </a>
          
            <button   
            // onClick={() => navigate('/contact')} 
            onClick={() => window.open('https://calendly.com/soubhav101101/intro-call', '_blank')} 
              className="bg-gray-200 text-black font-semibold flex items-center justify-center hover:bg-gray-300 outfit-medium"
              style={{
                width: '130px', 
                height: '40px', 
                fontSize: '1.125rem',
                borderRadius: '8px' 
              }}
            >
              Get Started
            </button>
        </nav>

        <button
          className="md:hidden text-white focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
        >
          <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
          </svg>
        </button>
      </div>

      {isOpen && (
        <div className="fixed h-[60vh] inset-0 bg-[#000000] flex flex-col items-center pt-10 z-20 md:hidden">
          <button
            className="absolute top-4 right-4 text-white"
            onClick={() => setIsOpen(false)}
          >
            <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>

          <div className="flex items-center mt-6 space-x-2 cursor-pointer" onClick={()=> navigate("/")}>
            <img src={logo2} alt="LogiX Logo" className="h-8 w-8 object-contain" />
            <div className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#8E9EAB] to-[#EEF2F3] outfit-big">LogiX
            </div>
          </div>

          <nav className="flex flex-col items-center space-y-4 mt-8 text-lg outfit-header">
            <a href="/" className="text-white hover:text-gray-300" onClick={() => setIsOpen(false)}>
              Home
            </a>
            <a onClick={() => {setIsOpen(false); handleScroll("services"); }} className="text-white hover:text-gray-300">
              Contact
            </a>
            <a onClick={() => { setIsOpen(false); handleScroll("about");}} className="text-white hover:text-gray-300">
              Github
            </a>
            <a 
            onClick={() => navigate('/demo')} 
            className="text-white hover:text-gray-300 cursor-pointer" >
            Get Started
          </a>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
