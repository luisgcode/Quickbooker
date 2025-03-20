import React from "react";
import Hero from "./hero/Hero";

import BrowseVenueType from "./browseVenueType/BrowseVenueType";
import HowItWorks from "./howItWorks/HowItWorks";
import Populars from "./populars/Populars";
import Upcomings from "./upcomings/Upcomings";

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
