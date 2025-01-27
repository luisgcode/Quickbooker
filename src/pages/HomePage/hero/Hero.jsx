const Hero = () => {
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
          <video controls loop muted autoPlay>
            {/* Cambiar la referencia al video */}
            <source src="/videos/promotion.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      </div>
    </header>
  );
};

export default Hero;
