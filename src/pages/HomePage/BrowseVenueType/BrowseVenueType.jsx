import React, { useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const BrowseVenueType = () => {
  const venues = [
    {
      id: 1,
      name: "Weddings & Events Center",
      image: "testing",
    },
    {
      id: 2,
      name: "Music Studio",
      image: "/api/placeholder/300/200",
    },
    {
      id: 3,
      name: "Conference Rooms",
      image: "/api/placeholder/300/200",
    },
    {
      id: 4,
      name: "Outdoor Gardens",
      image: "/api/placeholder/300/200",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const itemsPerPage = 4;
  const maxIndex = venues.length - itemsPerPage;

  return (
    <div className="relative">
      <div className="py-10 px-4 sm:px-6 lg:px-8">
        <h2 className="font-bold mb-8 text-center">Browse by Venue Type</h2>
        <div className="relative flex items-center">
          {/* Categories */}
          <div className="flex justify-center items-center overflow-hidden w-full">
            {venues.map((venue) => (
              <div key={venue.id} className="card mx-1 border w-1/4">
                <div className="venue-image-wrapper">
                  <img
                    src={venue.image}
                    alt={venue.name}
                    className="w-full h-48 object-cover"
                  />
                </div>
                <div className="venue-name-wrapper">
                  <h5 className="text-center mt-2">{venue.name}</h5>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BrowseVenueType;
