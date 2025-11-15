import React from "react";
import SharedHeader from "../shared/header/header";
import GalleryHero from "../Components/gallery_section/hero/hero";
import GallerySection from "../Components/gallery_section/gallery";
import Footer from "../shared/footer/footer";
function gallery(){
    return(
        <>
          <SharedHeader/>
          <GalleryHero />
          <GallerySection />
          <Footer/>
        </>
    )
}
export default gallery;