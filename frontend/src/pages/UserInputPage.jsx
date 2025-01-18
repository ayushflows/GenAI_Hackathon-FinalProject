import React from 'react'
import Header from '../components/Header'
import bgImg from '../assets/bgimg.png'
import UserInputForm from '../components/UserInputForm'

function UserInputPage() {
  return (
    <div className="bg-[linear-gradient(to_bottom,#0A2839_0%,#0A0D0F_40vh,#0A0A0A_80vh,#060606_100%)] min-h-screen relative overflow-x-hidden">
      <Header />
      <UserInputForm />
    </div>
  )
}

export default UserInputPage