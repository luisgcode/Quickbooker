import React from "react";

const Hero = () => {
  return (
    <header className="bg-blue-600 text-white p-8">
      <div className="max-w-7xl mx-auto text-center">
        <h1 className="text-4xl font-bold">
          Scalable, Powerful, Online Booking API, Built for Modern Enterprises
        </h1>
        <p className="mt-4">
          OnSched is the top booking framework used by Marketplaces,
          Enterprises, and Digital Publishers.
        </p>
        <div className="mt-6">
          <button className="bg-green-500 text-white px-6 py-2 rounded hover:bg-green-600">
            Chat with Sales Team
          </button>
        </div>
      </div>
    </header>
  );
};

export default Hero;
