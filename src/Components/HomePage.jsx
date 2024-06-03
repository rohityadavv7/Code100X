import React from 'react'
import HeroSection from './HeroSection'
import Footer from './Core/Footer'
import About from './Core/About'
import ReviewSection from './Core/ReviewSection'
import Questions from './Core/Questions'
import Subscribe from './Core/Subscribe'
import Team from './Core/Team'

function HomePage() {
  return (
    <div>
        <HeroSection/>
        <About/>
        <ReviewSection/>
        <Team/>
        <Subscribe/>
        <Questions/>
        <Footer/>
    </div>
  )
}

export default HomePage