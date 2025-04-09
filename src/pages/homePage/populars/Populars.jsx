import React from "react";
import { useTranslation } from "react-i18next";
import { FaHeart } from "react-icons/fa";
import {
  bellamere,
  behance,
  cambridge,
  soundtrap,
} from "../../../components/media";
import { Link } from "react-router-dom";

const popularVenues = [
  {
    id: 1,
    title: "Bellamere Weddings",
    location: "123 Dundas Street, Ontario, London​",
    rating: 8.8,
    reviews: "65 reviews",
    reviewText: "excellent",
    price: 149,
    image: bellamere,
  },
  {
    id: 2,
    title: "Behance Restaurant",
    location: "456 Richmond Street, Ontario, London​",
    rating: 9.3,
    reviews: "123 reviews",
    reviewText: "wonderful",
    price: 78,
    image: behance,
  },
  {
    id: 3,
    title: "Cambridge Conference",
    location: "789 Oxford Street East, Ontario, London​",
    rating: 8.8,
    reviews: "18 reviews",
    reviewText: "excellent",
    price: 162,
    image: cambridge,
  },
  {
    id: 4,
    title: "Sountrap Studio",
    location: "101 Wellington Road, Ontario, London​",
    rating: 9.3,
    reviews: "339 reviews",
    reviewText: "superb",
    price: 210,
    image: soundtrap,
  },
];

const Populars = () => {
  const [t] = useTranslation("global");

  return (
    <div className="p-sma_pad md:p-mid_pad">
      <div className="flex justify-between items-center mb-4">
        <h3 className="dark:text-[#e8e8e8]">{t("populars.title")}</h3>
        <Link
          className="text-blue-600 hover:underline dark:text-[#b0b0b0]"
          to="/userview"
        >
          {t("populars.seeAll")}
        </Link>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
        {popularVenues.map((venue) => (
          <div
            key={venue.id}
            className="bg-white dark:bg-[#212121] rounded-lg shadow-md overflow-hidden relative transition-colors"
          >
            <button className="absolute top-4 right-4 bg-white dark:bg-[#333] p-2 rounded-full shadow-md">
              <FaHeart className="text-gray-500 hover:text-red-500 transition" />
            </button>

            <img
              src={venue.image}
              alt={venue.title}
              className="w-full h-56 object-cover"
            />

            <div className="p-4">
              <h4 className="text-lg font-semibold dark:text-[#e8e8e8]">
                {venue.title}
              </h4>
              <p className="text-gray-500 text-sm dark:text-[#b0b0b0]">
                {venue.location}
              </p>

              <div className="flex items-center mt-2">
                <span className="bg-blue-600 text-white px-2 py-1 text-sm font-semibold rounded-md">
                  {venue.rating}
                </span>
                <p className="ml-2 text-sm text-gray-700 dark:text-[#b0b0b0]">
                  <span className="font-semibold dark:text-[#e8e8e8]">
                    {t(`populars.reviewText.${venue.reviewText}`)}
                  </span>{" "}
                  · {venue.reviews}
                </p>
              </div>

              <p className="mt-3 text-gray-700 text-sm dark:text-[#b0b0b0]">
                {t("populars.startingFrom")}{" "}
                <span className="font-bold dark:text-[#e8e8e8]">
                  {t("populars.currency")} {venue.price}
                </span>
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Populars;
