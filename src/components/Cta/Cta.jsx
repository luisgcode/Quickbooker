import React from "react";

const CTA = () => {
  return (
    <div className="bg-blue-600 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl font-bold text-white mb-4">
          Ready to Book Your Event?
        </h2>
        <p className="text-gray-200 mb-8">
          Join thousands of happy customers and find the perfect venue today.
        </p>
        <button className="bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition duration-300">
          Get Started
        </button>
      </div>
    </div>
  );
};

export default CTA;
