import React from "react";
import Hero from "./Hero/Hero";

import BrowseVenueType from "./BrowseVenueType/BrowseVenueType";
import HowItWorks from "./HowItWorks/HowItWorks";

const Homepage = () => {
  return (
    <div>
      <Hero />
      <HowItWorks />     
       <BrowseVenueType />
    </div>
  );
};

export default Homepage;
