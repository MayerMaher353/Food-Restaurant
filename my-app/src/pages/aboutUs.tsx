import React from 'react'
import Header from '../shared/header/header';
import Hero from '../Components/about us/hero'
import AboutUs from '../Components/about us/aboutUs'
import Teams from '../Components/about us/team/team'
import Skill from '../Components/about us/skills/skills'
import WorkingHours from '../shared/WorkingHours/WorkingHours'
import Testominial from '../shared/Testemonials/Testemonials'
import Reserved from '../shared/reserved/reserved'
import Footer from "../shared/footer/footer"
function aboutUs() {
  return (
    <>
    <Header />
    <Hero/>
    <AboutUs/>
    <Teams/>
    <Skill/>
    <WorkingHours/>
    <Testominial/>

    <Reserved/>

    <Footer/>

    
    
    </>
  )
}

export default aboutUs