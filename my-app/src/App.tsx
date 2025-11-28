import { Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import AboutUs from "./pages/aboutUs";
import Menu from "./pages/menu";
import Contact from "./pages/contact";
import Reservation from "./pages/Reservation";
import Shop from "./pages/shop";
import Faq from "./pages/faq";
import Pricing from "./pages/pricing";
import Blog from "./pages/blog";
import OurHistory from "./pages/OurHistory";
import Gallery from "./pages/gallery";
import HomeDashboard from "./Components/Dashboard/HomeDashboard";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about-us" element={<AboutUs />} />
      <Route path="/menu" element={<Menu />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/reservation" element={<Reservation />} />
      <Route path="/shop" element={<Shop />} />
      <Route path="/faq" element={<Faq />} />
      <Route path="/pricing" element={<Pricing />} />
      <Route path="/blog" element={<Blog />} />
      <Route path="/ourHistory" element={<OurHistory />} />
      <Route path="/gallery" element={<Gallery />} />
      <Route path="/dashboard/*" element={<HomeDashboard />} />
      
    </Routes>
  );
}

export default App;
