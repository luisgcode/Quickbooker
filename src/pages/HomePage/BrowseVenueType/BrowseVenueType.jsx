import React from "react";
import { useTranslation } from "react-i18next";
import {
  eventBall,
  eventMusic,
  eventConference,
  eventGardens,
  eventBar,
  eventWedding,
} from "../../../components/media";

const BrowseVenueType = () => {
  const [t] = useTranslation("global");

  const venues = [
    { key: "ball", properties: 45, image: eventBall },
    { key: "music", properties: 21, image: eventMusic },
    { key: "conference", properties: 12, image: eventConference },
    { key: "wedding", properties: 43, image: eventWedding },
    { key: "bars", properties: 11, image: eventBar },
    { key: "gardens", properties: 76, image: eventGardens },
  ];

  return (
    <div className="p-sma_pad md:p-mid_pad">
      <h3 className="mb-4">{t("browseVenue.title")}</h3>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
        {venues.map((venue, index) => (
          <div
            key={index}
            className="cursor-pointer hover:-translate-y-2 transition"
          >
            <img
              src={venue.image}
              alt={t(`browseVenue.types.${venue.key}`)}
              className="w-full h-40 object-cover rounded-lg shadow-md"
            />
            <p className="mt-2 font-semibold text-blueCompany">
              {t(`browseVenue.types.${venue.key}`)}
            </p>
            <p className="text-gray-600">
              {t("browseVenue.available", { count: venue.properties })}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BrowseVenueType;
