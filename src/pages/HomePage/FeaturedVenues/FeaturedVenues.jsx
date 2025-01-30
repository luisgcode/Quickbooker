import React from "react";

const FeaturedVenues = () => {
  const venues = [
    {
      id: 1,
      name: "Lakeside Restaurant",
      image: "https://via.placeholder.com/300",
      location: "New York, NY",
      capacity: "50-100 guests",
    },
    {
      id: 2,
      name: "Sunset Park",
      image: "https://via.placeholder.com/300",
      location: "Los Angeles, CA",
      capacity: "200+ guests",
    },
    {
      id: 3,
      name: "Grand Event Hall",
      image: "https://via.placeholder.com/300",
      location: "Chicago, IL",
      capacity: "150-200 guests",
    },
  ];

  return (
    <div className="bg-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">
          Featured Venues
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {venues.map((venue) => (
            <div
              key={venue.id}
              className="bg-gray-50 rounded-lg shadow-lg overflow-hidden"
            >
              <img
                src={venue.image}
                alt={venue.name}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-800">
                  {venue.name}
                </h3>
                <p className="text-gray-600 mt-2">{venue.location}</p>
                <p className="text-gray-600 mt-2">Capacity: {venue.capacity}</p>
                <button className="mt-4 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition duration-300">
                  View Details
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FeaturedVenues;
