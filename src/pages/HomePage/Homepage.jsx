import React from "react";
import Hero from "./Hero/Hero";

import BrowseVenueType from "./BrowseVenueType/BrowseVenueType";
import HowItWorks from "./HowItWorks/HowItWorks";
import Populars from "./Populars/Populars"

const Homepage = () => {
  return (
    <div>
      <Hero />
      <HowItWorks />     
       <BrowseVenueType />
       <Populars />
    </div>
  );
};

export default Homepage;
