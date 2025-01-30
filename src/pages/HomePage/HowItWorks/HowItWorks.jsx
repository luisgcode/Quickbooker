import React from "react";

const HowItWorks = () => {
  const steps = [
    {
      id: 1,
      title: "Browse Venues",
      description: "Explore a variety of venues tailored to your needs.",
      icon: "🔍",
    },
    {
      id: 2,
      title: "Check Availability",
      description: "View real-time availability and pricing.",
      icon: "📅",
    },
    {
      id: 3,
      title: "Book & Confirm",
      description: "Reserve your venue instantly and receive confirmation.",
      icon: "✅",
    },
  ];

  return (
    <div className="bg-gray-100 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center  mb-8">How It Works</h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
          {steps.map((step) => (
            <div
              key={step.id}
              className="bg-white p-6 rounded-lg shadow-lg text-center"
            >
              <div className="text-4xl mb-4">{step.icon}</div>
              <h3 className="text-xl font-semibold ">{step.title}</h3>
              <p className="text-gray-600 mt-2">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HowItWorks;
