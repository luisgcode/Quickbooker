import React from "react";

const testimonials = [
  {
    name: "Daphne Butterfield",
    role: "CTO, Amazing Network",
    quote:
      "OnSched has made customer scheduling seamless for our company. We’ve seen great success and would highly recommend this company.",
  },
];

const Testimonials = () => {
  return (
    <section className="py-12">
      this is testimonials
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-2xl font-bold">You’re in good company</h2>
        <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-gray-100 p-6 rounded-lg shadow">
              <p className="italic">"{testimonial.quote}"</p>
              <h4 className="mt-4 font-semibold">{testimonial.name}</h4>
              <p className="text-sm text-gray-500">{testimonial.role}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
