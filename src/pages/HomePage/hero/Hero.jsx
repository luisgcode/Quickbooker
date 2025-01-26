import React from "react";
import { heroIllustration } from "../../../components/media";

const Hero = () => {
  return (
    <header>
      <div className="p-sma_pad  md:p-mid_pad text-center">
        <div>
          <h1 className=" ">Effortless Event Management for Businesses.</h1>
          <p className=" ">
            Streamline your bookings and grow your business with our powerful,
            easy-to-use platform designed for you.
          </p>
        </div>
        <div>
          <img src={heroIllustration} alt="Main web illustration" />
        </div>
      </div>
    </header>
  );
};

export default Hero;
