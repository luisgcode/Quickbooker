import React from "react";
import { FaSearch, FaCalendarAlt, FaCheckCircle } from "react-icons/fa";

const HowItWorks = () => {
  const steps = [
    {
      id: 1,
      title: "Browse Venues",
      description: "Explore a variety of venues tailored to your needs.",
      icon: <FaSearch className="text-primary" />,
    },
    {
      id: 2,
      title: "Check Availability",
      description: "View real-time availability, configuration, and pricing.",
      icon: <FaCalendarAlt className="text-primary" />,
    },
    {
      id: 3,
      title: "Book & Confirm",
      description: "Reserve your venue instantly and receive confirmation.",
      icon: <FaCheckCircle className="text-primary" />,
    },
  ];

  return (
    <div className="p-sma_pad md:p-mid_pad ">
   <h3 className=" mb-4"> 3 simple steps</h3>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
        {steps.map((step) => (
          <div
       
            className=" flex flex-col items-center bg-white border border-gray-200 rounded-lg hover:border-blue-500 transition-colors cursor-pointer py-6 px-2 text-center"
          >
        
            <div className="text-2xl my-2 text-blueCompany  ">{step.icon}</div>
            <h4 className="text-lg font-semibold mb-4">{step.title}</h4>
            <p className="text-gray-600">{step.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HowItWorks;
