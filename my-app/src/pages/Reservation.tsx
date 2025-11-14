
import React from "react";
import Header from '../shared/header/header';
import ReservationForm from "../Components/Reservation/ReservationForm";
import ContactSection from "../Components/Reservation/ContactSection";
import SubscribeSection from "../Components/Reservation/SubscribeSection";
import Footer from "../Components/Reservation/Footer";

const App: React.FC = () => {
  return (
    <>
      <Header />
      <ReservationForm />
      <ContactSection />
      <SubscribeSection />
      <Footer />
    </>
  );
};

export default App;
