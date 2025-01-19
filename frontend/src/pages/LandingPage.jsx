import React from 'react'
import Header from '../components/Header'
import HeroSection from '../components/HeroSection'
import Footer from '../components/footer'
import PersonalChatBot from '../components/personalChatbot/PersonalChatBot'

function LandingPage() {
  return (
    <>
      <div className="bg-[linear-gradient(to_bottom,#0A2839_0%,#0A0D0F_40vh,#0A0A0A_80vh,#060606_100%)]">
      <Header />
      <HeroSection />
      </div>
      
      {/* <PersonalChatBot /> */}
      <Footer />
    </>
  )
}

export default LandingPage