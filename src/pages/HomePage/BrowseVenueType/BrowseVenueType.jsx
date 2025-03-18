import React from "react";
import { eventBall, eventMusic, eventConference, eventwharehouse, eventBar, eventWedding } from "../../../components/media";

const venues = [
  { name: "Montreal", properties: 1118, image: eventBall },
  { name: "Quebec City", properties: 403, image: eventMusic },
  { name: "Niagara Falls", properties: 253, image: eventConference },
  { name: "Toronto", properties: 2027, image: eventWedding },
  { name: "Vancouver", properties: 627, image: eventBar },
  { name: "Calgary", properties: 482, image: eventwharehouse },
];

const BrowseVenueType = () => {
  return (
    <div className="p-sma_pad md:p-mid_pad">
      <h2 className="text-2xl font-semibold mb-4">Browse by Venue Type</h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
        {venues.map((city, index) => (
          <div key={index} className="text-center">
            <img
               src={city.image}
              alt={city.name}
              className="w-full h-40 object-cover rounded-lg shadow-md"
            />
            <h3 className="text-lg font-bold mt-2">{city.name}</h3>
            <p className="text-gray-600">{city.properties} properties</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BrowseVenueType;
