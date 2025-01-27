import React, { useEffect, useRef } from "react";
import { promotionVideo } from "../../../components/media";

const Hero = () => {
  const videoRef = useRef(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.muted = true;
      videoRef.current.play().catch((error) => {
        console.error("error", error);
      });
    }
  }, []);

  return (
    <header>
      <div className="flex gap-10 flex-col p-sma_pad md:py-[10px] md:px-[50px]">
        <div className="flex flex-col gap-6">
          <h1>Effortless Event Management for Businesses.</h1>
          <p>
            Streamline your bookings and grow your business with our powerful,
            easy-to-use platform designed for you.
          </p>
          <button
            className="started-btn bg-blueCompany text-white py-3 px-4 rounded-full w-max"
            href="#"
          >
            Get Started
          </button>
        </div>
        <div className="w-full">
          <video ref={videoRef} loop muted>
            <source src={promotionVideo} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      </div>
    </header>
  );
};

export default Hero;
