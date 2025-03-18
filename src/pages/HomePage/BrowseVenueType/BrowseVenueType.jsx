import React from "react";
import { eventBall, eventMusic, eventConference, eventGardens, eventBar, eventWedding } from "../../../components/media";

const venues = [
  { type: "Ball Rooms", properties: 45, image: eventBall },
  { type: "Music Studios", properties: 21, image: eventMusic },
  { type: "Conferences", properties: 12, image: eventConference },
  { type: "Wedding Venues", properties: 43, image: eventWedding },
  { type: "Bars", properties: 11, image: eventBar },
  { type: "Gardens", properties: 76, image: eventGardens },
];

const BrowseVenueType = () => {
  return (
    <div className="p-sma_pad md:p-mid_pad">
      <h2 className=" mb-4">Browse by Venue Type</h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6 ">
        {venues.map((venue, index) => (
          <div key={index} className="cursor-pointer hover:-translate-y-2 transition" >
            <img
               src={venue.image}
              alt={venue.type}
              className="w-full h-40 object-cover rounded-lg shadow-md"
            />
            <p className=" mt-2 font-semibold text-blueCompany">{venue.type}</p>
            <p className="text-gray-600">{venue.properties} availables now</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BrowseVenueType;
