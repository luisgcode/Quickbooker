import React, { useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import VenueTypeMusic from "../../../assets/images/VenuesType/event-music.jpg";

const BrowseVenueType = () => {
  const venues = [
    {
      id: 1,
      name: "Weddings & Events Center",
      image: "/api/placeholder/300/200",
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
    {
      id: 5,
      name: "Private Dining",
      image: "/api/placeholder/300/200",
    },
    {
      id: 6,
      name: "Bars",
      image: "/api/placeholder/300/200",
    },
    {
      id: 7,
      name: "Lounges",
      image: "/api/placeholder/300/200",
    },
    {
      id: 8,
      name: "Ballrooms",
      image: "/api/placeholder/300/200",
    },
    {
      id: 9,
      name: "Warehouse Spaces",
      image: "/api/placeholder/300/200",
    },
    {
      id: 10,
      name: "International-themed event spaces",
      image: "/api/placeholder/300/200",
    },
    {
      id: 11,
      name: "International-themed event spaces",
      image: "/api/placeholder/300/200",
    },
    {
      id: 12,
      name: "International-themed event spaces",
      image: "/api/placeholder/300/200",
    },
    {
      id: 13,
      name: "International-themed event spaces",
      image: "/api/placeholder/300/200",
    },
    {
      id: 14,
      name: "International-themed event spaces",
      image: "/api/placeholder/300/200",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const itemsPerPage = 4;
  const maxIndex = venues.length - itemsPerPage;

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex >= maxIndex ? maxIndex : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex <= 0 ? 0 : prevIndex - 1));
  };

  return (
    <div className="relative">
      <div className="py-10 px-4 sm:px-6 lg:px-8">
        <h2 className="font-bold mb-8 text-center">Browse by Venue Type</h2>
        <div className="relative flex items-center">
          {/* Left button */}
          <button
            onClick={prevSlide}
            className="absolute -left-5 z-10 bg-gray-300 p-2 rounded-full hover:bg-gray-400"
          >
            <FaChevronLeft size={24} />
          </button>

          {/* Categories */}
          <div className="flex justify-center items-center">
            <div className="card">
              <img src={VenueTypeMusic} alt="Venue image" />
            </div>
          </div>

          {/* Right button */}
          <button
            onClick={nextSlide}
            className="absolute -right-5 z-10 bg-gray-300 p-2 rounded-full hover:bg-gray-400"
          >
            <FaChevronRight size={24} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default BrowseVenueType;
