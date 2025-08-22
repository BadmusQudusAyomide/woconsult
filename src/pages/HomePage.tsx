import React from "react";
import Header from "../components/Header";
import Hero from "../components/Hero";
import Welcome from "../components/Welcome";
import GalleryCarousel from "../components/GalleryCarousel";
import DestinationsCarousel from "../components/DestinationsCarousel";
import Services from "../components/Services";
import Destinations from "../components/Destinations";
import Stats from "../components/Stats";
import Testimonials from "../components/Testimonials";
import Events from "../components/Events";
import FAQ from "../components/FAQ";
import Contact from "../components/Contact";
import Footer from "../components/Footer";

const HomePage: React.FC = () => {
  return (
    <div className="App">
      <Header />
      <main>
        <Hero />
        <Welcome />
        <GalleryCarousel />
        <DestinationsCarousel />
        <Services />
        <Destinations />
        <Stats />
        <Testimonials />
        <Events />
        <FAQ />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default HomePage;
