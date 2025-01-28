import React from "react";

const Numbers = () => {
  return (
    <div className=" p-sma_pad md:py-20 bg-gray-100">
      <div className="  mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">
          QuickBooker Experience
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Stat 1: Money-Back Guarantee */}
          <div className="bg-white p-6 rounded-lg shadow-lg text-center border-b-4 border-blueCompany">
            <p className="text-3xl font-bold">100%</p>
            <p className="mt-2 ">commitment to satisfaction</p>
          </div>

          {/* Stat 2: Happy Customers */}
          <div className="bg-white p-6 rounded-lg shadow-lg text-center border-b-4 border-blueCompany">
            <p className="text-3xl font-bold">Built for</p>
            <p className="mt-2 text-gray-600">small businesses like yours</p>
          </div>

          {/* Stat 3: Capterra Best Value */}
          <div className="bg-white p-6 rounded-lg shadow-lg text-center border-b-4 border-blueCompany">
            <p className="text-3xl font-bold">24/7</p>
            <p className="mt-2 text-gray-600">easy booking system</p>
          </div>

          {/* Stat 4: Rating on WordPress */}
          <div className="bg-white p-6 rounded-lg shadow-lg text-center border-b-4 border-blueCompany">
            <p className="text-3xl font-bold">Grow</p>
            <p className="mt-2 text-gray-600">with scalable solutions</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Numbers;
