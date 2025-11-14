import Header from "../shared/header/header";
import Background from "../Components/OurHistory/Background";
import Timeline from "../Components/OurHistory/Timeline";
import Reservation from "../shared/reserved/reserved";
import Blog from "../Components/OurHistory/Blog";
import Subscribe from "../shared/subscribe/subcribe";
import Footer from "../shared/footer/footer";
const ourHistory = () => {
  return (
    <>
      <Header />
      <Background />
      <Timeline />
      <Reservation />
      <Blog />
      <Subscribe />
      <Footer />
    </>
  );
};

export default ourHistory;
