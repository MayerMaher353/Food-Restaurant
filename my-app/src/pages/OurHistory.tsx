import Header from "../shared/header/header";
import OurHistoryHero from "../Components/OurHistory/Background";
import Timeline from "../Components/OurHistory/Timeline";
import Reservation from "../shared/reserved/reserved";
import Blog from "../shared/Blog/BlogCard";
import Subscribe from "../shared/subscribe/subcribe";
import Footer from "../shared/footer/footer";
const ourHistory = () => {
  return (
    <>
      <Header />
      <OurHistoryHero />
      <Timeline />
      <Reservation />
      <Blog />
      <Subscribe />
      <Footer />
    </>
  );
};

export default ourHistory;
