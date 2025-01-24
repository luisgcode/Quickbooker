import React from "react";
import "./App.css";
import Hero from "./pages/HomePage/hero/Hero";
import Features from "./pages/HomePage/features/Features";
import Testimonials from "./pages/HomePage/testimonials/Testimonials";
import Navbar from "./components/navbar/Navbar";

import Footer from "./components/footer/Footer";

function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Features />
      <Testimonials />
      <Footer />
    </div>
  );
}

export default App;
