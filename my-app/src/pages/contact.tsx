import Contacthero from "../Components/contact/contacthero";
import Header from '../shared/header/header';
import ContactInfo from "../Components/contact/contactinformation";
import Form from "../Components/contact/form";
import Subcribe from "../shared/subscribe/subcribe";
import Footer from "../shared/footer/footer";

function Contact() {
  return (
    <>
      <Header />
      <Contacthero />
      <ContactInfo />
      <Form />
      <Subcribe />
      <Footer />
    </>
  );
}

export default Contact;
