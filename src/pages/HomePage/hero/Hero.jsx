import React from "react";
import { heroIllustration } from "../../../components/media";

const Hero = () => {
  return (
    <header>
      <div className=" flex-col p-sma_pad md:py-[10px] md:px-[50px]    ">
        <div className="  ">
          <h1 className=" ">Effortless Event Management for Businesses.</h1>
          <p className=" ">
            Streamline your bookings and grow your business with our powerful,
            easy-to-use platform designed for you.
          </p>
        </div>
        <div className="   ">
          <img
            src={heroIllustration}
            alt="Main web illustration"
            className=" "
          />
        </div>
      </div>
    </header>
  );
};

export default Hero;
