import React from "react";

const features = [
  {
    title: "Marketplace",
    description: "Booking APIs for marketplaces.",
    link: "Learn More",
  },
  {
    title: "Digital Publishers",
    description: "API integrations for publishers.",
    link: "Learn More",
  },
  {
    title: "Enterprise API",
    description: "White-label solutions.",
    link: "Learn More",
  },
];

const Features = () => {
  return (
    <section className="py-12 bg-gray-100">
      this is features
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
        {features.map((feature, index) => (
          <div key={index} className="bg-white p-6 rounded-lg shadow">
            <h3 className="text-xl font-semibold">{feature.title}</h3>
            <p className="mt-4">{feature.description}</p>
            <a href="#" className="text-blue-500 mt-4 inline-block">
              {feature.link}
            </a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Features;
