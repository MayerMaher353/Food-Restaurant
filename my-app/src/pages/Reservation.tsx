
import React from "react";
import Header from "../components/Reservation/Header";
import ReservationForm from "../components/Reservation/ReservationForm";
import ContactSection from "../components/Reservation/ContactSection";
import SubscribeSection from "../components/Reservation/SubscribeSection";
import Footer from "../components/Reservation/Footer";

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
