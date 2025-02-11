import React, { useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const BrowseVenueType = () => {
  const venues = [
    {
      id: 1,
      name: "Weddings & Events Center",
      image: "https://via.placeholder.com/300",
    },
    {
      id: 2,
      name: "Music Studio",
      image: "https://via.placeholder.com/300",
    },
    {
      id: 3,
      name: "Conference Rooms",
      image: "https://via.placeholder.com/300",
    },
    {
      id: 4,
      name: "Outdoor Gardens",
      image: "https://via.placeholder.com/300",
    },
    {
      id: 5,
      name: "Private Dining",
      image: "https://via.placeholder.com/300",
    },
    {
      id: 6,
      name: "Bars",
      image: "https://via.placeholder.com/300",
    },
    {
      id: 7,
      name: "Lounges",
      image: "https://via.placeholder.com/300",
    },
    {
      id: 8,
      name: "Ballrooms",
      image: "https://via.placeholder.com/300",
    },
    {
      id: 9,
      name: "Warehouse Spaces",
      image: "https://via.placeholder.com/300",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const itemsPerPage = 4;
  const maxIndex = venues.length - itemsPerPage;

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex >= maxIndex ? 0 : prevIndex + 1));
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex <= 0 ? maxIndex : prevIndex - 1));
  };

  return (
    <div className="bg-white py-12 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold mb-8 text-center">
          Browse by Venue Type
        </h2>
        <div className="relative flex items-center">
          <button
            onClick={prevSlide}
            className="absolute left-0 z-10 bg-gray-300 p-2 rounded-full hover:bg-gray-400"
          >
            <FaChevronLeft size={24} />
          </button>

          <div className="overflow-hidden w-full">
            <div
              className="flex gap-8 transition-transform duration-300"
              style={{
                transform: `translateX(-${
                  currentIndex * (100 / itemsPerPage)
                }%)`,
              }}
            >
              {venues.map((venue) => (
                <div
                  key={venue.id}
                  className="bg-gray-50 rounded-lg shadow-lg overflow-hidden flex-none w-1/4"
                >
                  <img
                    src={venue.image}
                    alt={venue.name}
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-6">
                    <h3 className="text-xl font-semibold">{venue.name}</h3>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <button
            onClick={nextSlide}
            className="absolute right-0 z-10 bg-gray-300 p-2 rounded-full hover:bg-gray-400"
          >
            <FaChevronRight size={24} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default BrowseVenueType;
