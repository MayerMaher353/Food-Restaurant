import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
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
import { CartProvider } from "./context/cartContext";
import CartPopup from "./Components/cartComponent/cartPopOut";
import CartPage from "./pages/cartPage";
import Checkout from "./pages/checkout";
import HomeDashboard from "./Components/Dashboard/HomeDashboard";
import SignUp from "./pages/signUp";
import SignIn from "./pages/signIn";
function App() {
  return (
    <CartProvider>
        <CartPopup />
     
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
          <Route path="/cart" element={<CartPage />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route   path="/DashboardAdmin" element={<HomeDashboard/>} />
           <Route   path="/signUp" element={<SignUp/>} />
           <Route   path="/signIn" element={<SignIn/>} />
        </Routes>
   
    </CartProvider>
  );
}

export default App;
