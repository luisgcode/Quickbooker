import React from "react";
import Hero from "./Hero/Hero";

import BrowseVenueType from "./BrowseVenueType/BrowseVenueType";
import HowItWorks from "./howItWorks/HowItWorks";
import Populars from "./Populars/Populars";
import Upcomings from "./Upcomings/Upcomings";

const Homepage = () => {
  return (
    <div>
      <Hero />
      <BrowseVenueType />
      <HowItWorks />
      <Populars />
      <Upcomings />
    </div>
  );
};

export default Homepage;
