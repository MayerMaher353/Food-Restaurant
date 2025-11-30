import Header from "../shared/header/header";
import Hero from "../Components/home/hero/hero";
import About from "../Components/home/about/about";
import Menu from "../Components/home/menu/menu";
import Gallery from "../Components/home/gallery/gellary";
import WorkingHours from "../shared/WorkingHours/WorkingHours";
import Testimonials from "../shared/Testemonials/Testemonials";
import AppDownloadSection from "../Components/home/APP/App";
import Blog from "../shared/Blog/BlogCard";
import Footer from "../shared/footer/footer";
import Subcribe from "../shared/subscribe/subcribe";
const home = () => {
  return (
    <>
      <Header />
      <Hero />
      <About />
      <Menu />
      <Gallery />
      <WorkingHours />
      <Testimonials />
      <AppDownloadSection />
      < Blog />
      <Subcribe />
      <Footer />
    </>
  );
};

export default home;
