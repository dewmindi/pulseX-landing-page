import ReactLenis from "lenis/react";
import AboutUs from "./sections/AboutUs";
import ContactUs from "./sections/ContactUs";
import Hero from "./sections/Hero";
import ParallalxImage from "./ParallalxImage";
import Gallery from "./sections/Gallery";
import Footer from "./sections/Footer";

export default function Home() {
  return (
    <ReactLenis root>
    <div>
      <Hero/>
      <AboutUs/>
      <ContactUs/>
      <Gallery/>
      <Footer/>
    </div>
    </ReactLenis>  
  );
}
