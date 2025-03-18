import React from "react";
import { FaHeart } from "react-icons/fa";
import { bellamere, behance, cambridge, soundtrap } from "../../../components/media";

const popularVenues = [
  {
    id: 1,
    title: "Bellamere Weddings",
    location: "123 Dundas Street, Ontario, London​",
    rating: 8.8,
    reviews: "65 reviews",
    reviewText: "Excellent",
    price: 149,
    image: bellamere
  },
  {
    id: 2,
    title: "Behance Restaurant",
    location: "456 Richmond Street, Ontario, London​",
    rating: 9.3,
    reviews: "123 reviews",
    reviewText: "Wonderful",
    price: 78,
    image: behance
  },
  {
    id: 3,
    title: "Cambridge Conference",
    location: "789 Oxford Street East, Ontario, London​",
    rating: 8.8,
    reviews: "18 reviews",
    reviewText: "Excellent",
    price: 162,
    image: cambridge
  },
  {
    id: 4,
    title: "Sountrap Studio",
    location: "101 Wellington Road, Ontario, London​",
    rating: 9.3,
    reviews: "339 reviews",
    reviewText: "Superb",
    price: 210,
    image: soundtrap
  },
];

const Populars = () => {
  return (
    <div className="p-sma_pad md:p-mid_pad">
      <div className="flex justify-between items-center mb-4">
        <h3>Venues guests love</h3>
        <a href="#" className="text-blue-600 hover:underline">
          See all venues
        </a>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
        {popularVenues.map((venue) => (
          <div
            key={venue.id}
            className="bg-white rounded-lg shadow-md overflow-hidden relative"
          >
            {/* Favorite (Heart) Button */}
            <button className="absolute top-4 right-4 bg-white p-2 rounded-full shadow-md">
              <FaHeart className="text-gray-500 hover:text-red-500 transition" />
            </button>

            {/* Venue Image */}
            <img
              src={venue.image}
              alt={venue.title}
              className="w-full h-56 object-cover"
            />

            {/* Venue Details */}
            <div className="p-4">
              <h4 className="text-lg font-semibold">{venue.title}</h4>
              <p className="text-gray-500 text-sm">{venue.location}</p>

              {/* Rating */}
              <div className="flex items-center mt-2">
                <span className="bg-blue-600 text-white px-2 py-1 text-sm font-semibold rounded-md">
                  {venue.rating}
                </span>
                <p className="ml-2 text-sm text-gray-700">
                  <span className="font-semibold">{venue.reviewText}</span> · {venue.reviews}
                </p>
              </div>

              {/* Price */}
              <p className="mt-3 text-gray-700 text-sm">
                Starting from <span className="font-bold">CAD {venue.price}</span>
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Populars;
