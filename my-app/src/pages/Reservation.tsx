
import React from "react";
import Header from '../shared/header/header';
import BackgroundHero from "../Components/Reservation/reservation";
import ReservationForm from "../Components/Reservation/ReservationForm";
import ContactSection from "../Components/Reservation/ContactSection";
import Subcribe from "../shared/subscribe/subcribe";
import Footer from "../shared/footer/footer";

const App: React.FC = () => {
  return (
    <>
      <Header />
      <BackgroundHero />
      <ReservationForm />
      <ContactSection />
      <Subcribe />
      <Footer />
    </>
  );
};

export default App;
