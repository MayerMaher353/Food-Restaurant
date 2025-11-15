import React from "react";
// import SharedHeader from "../shared/header/header";
import Subcribe from "../shared/subscribe/subcribe";
import HeroBlog from "../Components/Blog/hero/hero";
import BlogCard from "../Components/Blog/card";
import Footer from "../shared/footer/footer";
function blog() {
  return (
    <>
      {/* <SharedHeader/> */}
      <HeroBlog />
      <BlogCard />
      <Subcribe />
      <Footer/>
    </>
  );
}
export default blog;
