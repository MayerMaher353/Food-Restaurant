import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Header from "./shared/header/header";

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
function App() {
  return (
    <Router>
      <Header />
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
      </Routes>
    </Router>
  );
}

export default App;
