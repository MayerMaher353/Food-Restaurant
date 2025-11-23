import React from 'react'
import Header from '../shared/header/header';
import Hero from '../Components/shop/shopHero'
import Product from '../Components/shop/swiper/shop'


import Footer from "../shared/footer/footer"
function shop() {
  return (
    <>
    <Header />
    <Hero/>
    <Product/>
    
    <Footer/>
    </>
  )
}

export default shop