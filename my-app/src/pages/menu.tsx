import React from 'react';
import Header from '../shared/header/header';
import Footer from '../shared/footer/footer';
import WorkingHours from '../shared/WorkingHours/WorkingHours';
import ReservationBanner from '../shared/reserved/reserved';
import MenuHero from '../Components/menu/menuHero';
import Menu1 from '../Components/menu/menu1';
import Menu2 from '../Components/menu/menu2';
import Menu3 from '../Components/menu/menu3';
const menu = () => {
  return (
    <>
        <Header />
        <MenuHero />
        <Menu1 />
        <Menu2 />
        <ReservationBanner />
        <Menu3 />
        <WorkingHours />
        <Footer />
    </>


  );
};

export default menu;