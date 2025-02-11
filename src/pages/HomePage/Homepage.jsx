import React from "react";
import Hero from "./Hero/Hero";

import BrowseVenueType from "./BrowseVenueType/BrowseVenueType";
import HowItWorks from "./HowItWorks/HowItWorks";
import Testimonials from "./Testimonials/Testimonials";
import Cta from "../../components/Cta/Cta";

const Homepage = () => {
  return (
    <div>
      <Hero />
      <BrowseVenueType />
      <HowItWorks />
      <Testimonials />
      <Cta />
    </div>
  );
};

export default Homepage;
