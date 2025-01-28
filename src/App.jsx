import React from "react";
import "./App.css";
import Hero from "./pages/HomePage/hero/Hero";
import Features from "./pages/HomePage/features/Features";
import Navbar from "./components/navbar/Navbar";
import Numbers from "./pages/HomePage/Numbers/Numbers";
import FeaturedVenues from "./components/FeaturedVenues/FeaturedVenues";
import HowItWorks from "./pages/HomePage/HowItWorks/HowItWorks";
import Testimonials from "./pages/HomePage/testimonials/Testimonials";
import Cta from "./components/Cta/Cta";

import Footer from "./components/footer/Footer";

function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Numbers />
      <FeaturedVenues />
      <HowItWorks />
      <Testimonials />
      <Cta />
    </div>
  );
}

export default App;
