import React from "react";
import Hero from "./Hero/Hero";
import Numbers from "./Numbers/Numbers";
import FeaturedVenues from "./FeaturedVenues/FeaturedVenues";
import HowItWorks from "./HowItWorks/HowItWorks";
import Testimonials from "./Testimonials/Testimonials";
import Cta from "../../components/Cta/Cta";

const Homepage = () => {
  return (
    <div>
      <Hero />
      <Numbers />
      <FeaturedVenues />
      <HowItWorks />
      <Testimonials />
      <Cta />
    </div>
  );
};

export default Homepage;
