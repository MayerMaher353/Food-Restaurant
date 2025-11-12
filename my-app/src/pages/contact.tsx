import Contacthero from "../Components/contact/contacthero";
import ContactInfo from "../Components/contact/contactinformation";
import Form from "../Components/contact/form";
import Subcribe from "../shared/subscribe/subcribe";
import Footer from "../shared/footer/footer";

function Contact() {
  return (
    <>
      <Contacthero />
      <ContactInfo />
      <Form />
      <Subcribe />
      <Footer />
    </>
  );
}

export default Contact;
