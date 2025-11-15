
import React from "react";
import Header from '../shared/header/header';
import BackgroundHero from "../Components/Reservation/reservation";
import ReservationForm from "../Components/Reservation/ReservationForm";
import ContactInfo from "../Components/contact/contactinformation";
import Subcribe from "../shared/subscribe/subcribe";
import Footer from "../shared/footer/footer";

const App: React.FC = () => {
  return (
    <>
      <Header />
      <BackgroundHero />
      <ReservationForm />
      <ContactInfo />
      <Subcribe />
      <Footer />
    </>
  );
};

export default App;
