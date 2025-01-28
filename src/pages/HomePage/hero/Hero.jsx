import React, { useEffect, useRef } from "react";
import promotionVideo from "../../../assets/videos/promotion.mp4";

const Hero = () => {
  const videoRef = useRef(null);

  useEffect(() => {
    // Función para intentar reproducir el video
    const playVideo = async () => {
      try {
        if (videoRef.current) {
          await videoRef.current.play();
        }
      } catch (err) {
        console.log("Reproducción automática no permitida", err);
      }
    };

    playVideo();
  }, []);

  return (
    <header>
      <div className="flex gap-10 flex-col p-sma_pad md:py-[50px] md:px-[50px] md:flex-row items-center">
        <div className="flex flex-col gap-2">
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
          <video
            ref={videoRef}
            playsInline
            loop
            muted
            autoPlay
            preload="auto"
            className="w-full h-auto object-cover"
          >
            <source src={promotionVideo} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      </div>
    </header>
  );
};
export default Hero;
