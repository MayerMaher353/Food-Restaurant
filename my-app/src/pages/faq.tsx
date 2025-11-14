import React from "react";
import Header from '../shared/header/header';
import FaqHero from "../Components/faq/faqhero";
import Faqtext from "../Components/faq/faqtext";
import Clicker from "../Components/faq/clicker";
import Form from "../Components/faq/form";
import Reserved from "../shared/reserved/reserved";
import Subcribe from "../shared/subscribe/subcribe";
import Footer from "../shared/footer/footer";

function faq() {
  return (
    <>
      <Header />
      <FaqHero />
      <Faqtext />
      <Clicker />
      <Form />
      <Reserved />
      <Subcribe />
      <Footer />
    </>
  );
}

export default faq;
