import React from "react";
import Header from "./components/Header";
import Topbar from "./components/Topbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Services from "./components/Services";
import Destinations from "./components/Destinations";
import Stats from "./components/Stats";
import Partners from "./components/Partners";
import Testimonials from "./components/Testimonials";
import Events from "./components/Events";
import FAQ from "./components/FAQ";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <Topbar />
      <Header />
      <main>
        <Hero />
        <About />
        <Services />
        <Destinations />
        <Stats />
        <Partners />
        <Testimonials />
        <Events />
        <FAQ />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
