import SharedHeader from "../shared/header/header";
import HeroSection from "../Components/gallery/hero/hero";
import GallerySection from "../Components/gallery/gallery";
import Footer from "../shared/footer/footer";
function GalleryPage() {
  return (
    <>
      <SharedHeader/>
      <HeroSection />
      <GallerySection />
      <Footer/>
    </>
  );
}
export default GalleryPage;
