import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Album from "@/components/Album";
import Music from "@/components/Music";
import Gallery from "@/components/Gallery";
import Booking from "@/components/Booking";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <Hero />
      <About />
      <Album />
      <Music />
      <Gallery />
      <Booking />
      <Footer />
    </div>
  );
};

export default Index;
