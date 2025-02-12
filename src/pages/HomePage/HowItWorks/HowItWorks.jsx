import React from "react";
import { FaSearch } from "react-icons/fa";
import { FaCalendarAlt } from "react-icons/fa";
import { FaCheckCircle } from "react-icons/fa";

const HowItWorks = () => {
  const steps = [
    {
      id: 1,
      title: "Browse Venues",
      description: "Explore a variety of venues tailored to your needs.",
      icon: <FaSearch />,
    },
    {
      id: 2,
      title: "Check Availability",
      description: "View real-time availability, configuration and pricing.",
      icon: <FaCalendarAlt />,
    },
    {
      id: 3,
      title: "Book & Confirm",
      description: "Reserve your venue instantly and receive confirmation.",
      icon: <FaCheckCircle />,
    },
  ];

  return (
    <div>
      <div className="p-sma_pad md:p-mid_pad">
        <h2 className="">How It Works</h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
          {steps.map((step) => (
            <div
              key={step.id}
              className=" flex-col flex items-center justify-center"
            >
              <div className="text-4xl">{step.icon}</div>
              <h4 className="">{step.title}</h4>
              <p className=" ">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HowItWorks;
