import React from 'react'
import Header from '../shared/header/header';
import WorkingHours from '../shared/WorkingHours/WorkingHours';
import Testimonials from '../shared/Testemonials/Testemonials';
import Footer from "../shared/footer/footer"
import Subcribe from '../shared/subscribe/subcribe';
import PricingHero from '../Components/pricing/pricingHero';
import PricingSection from '../Components/pricing/pricingSection';
function pricing() {
  return (
    <>
    <Header />
    <PricingHero />
    <PricingSection />
    <WorkingHours />
    <Testimonials />
    <Subcribe />
    <Footer/>
    </>
  )
}

export default pricing;