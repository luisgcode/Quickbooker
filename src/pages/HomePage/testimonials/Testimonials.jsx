import React from "react";

const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      name: "John Doe",
      review: "Amazing platform! Found the perfect venue for my event.",
      image: "https://via.placeholder.com/100",
    },
    {
      id: 2,
      name: "Jane Smith",
      review: "Easy to use and great customer support.",
      image: "https://via.placeholder.com/100",
    },
    {
      id: 3,
      name: "Mike Johnson",
      review: "Highly recommend for small business events.",
      image: "https://via.placeholder.com/100",
    },
  ];

  return (
    <div className="bg-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">
          What Our Customers Say
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="bg-gray-50 p-6 rounded-lg shadow-lg text-center"
            >
              <img
                src={testimonial.image}
                alt={testimonial.name}
                className="w-20 h-20 rounded-full mx-auto mb-4"
              />
              <h3 className="text-xl font-semibold text-gray-800">
                {testimonial.name}
              </h3>
              <p className="text-gray-600 mt-2">{testimonial.review}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
