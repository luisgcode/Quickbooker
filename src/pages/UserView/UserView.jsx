import React, { useEffect, useState } from "react";

const UserView = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("/data/venues.json") 
      .then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        return response.json();
      })
      .then((json) => setData(json))
      .catch((error) => console.error("Error loading data:", error));
  }, []);

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-gray-900 mb-6">
        Find Your Perfect Venue
      </h1>

      <div className="space-y-6">
        {data.map((venue, index) => (
          <div key={index} className="flex items-center border-b pb-4">
            {/* Venue Image */}
            <img
              src={venue.image}
              alt={venue.name}
              className="w-40 h-28 object-cover rounded-md mr-6"
            />

            {/* Venue Details */}
            <div className="flex-1">
              <h2 className="text-xl font-semibold text-gray-800">{venue.name}</h2>
              <p className="text-gray-600">{venue.address.street}, {venue.address.city}, {venue.address.province}</p>
              <p className="text-gray-700 text-sm">Phone: {venue.contact.phone} | Email: {venue.contact.email}</p>

              {/* Max Capacity */}
              <p className="text-gray-700 text-sm font-medium">Max Capacity: {venue.max_capacity} people</p>

              {/* Amenities*/}
              <div className="text-sm text-gray-600 mt-2">
                {venue.amenities.slice(0, 3).join(", ")}...
              </div>
            </div>

            {/* Booking Button */}
            <button className="ml-auto py-2 px-4 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-md transition">
              Book Venue
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default UserView;
