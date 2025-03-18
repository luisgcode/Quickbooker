import React, { useState } from "react";
import { FaMapMarkerAlt } from "react-icons/fa";
import { fifa, cricket, clean } from "../../../components/media"; // Asegúrate de que estos sean importados correctamente

const events = [
  {
    id: 1,
    title: "Fanshawe College - FIFA Tournament!",
    date: "WED, APR 2, 2025, 6:00 PM EDT",
    location: "304 Talbot St 2nd floor, London, ON",
    description:
      "Join us for an epic FIFA 25 Game Night! Compete with fellow players, showcase your skills, and enjoy an evening of intense matches. Snacks and drinks will be provided. Come for the competition, stay for the fun!",
    image: fifa,
  },
  {
    id: 2,
    title: "City of London - FIFA Tournament!",
    date: "FRI, APR 5, 2025, 7:00 PM EDT",
    location: "200 King St, London, ON",
    description:
      "Experience the ultimate FIFA 25 showdown! Challenge top players, win prizes, and enjoy a night filled with gaming excitement. Refreshments will be available!",
    image: clean,
  },
];

const EventCard = ({ event }) => {
  return (
    <div className="bg-white shadow-md rounded-lg p-6 flex flex-col md:flex-row gap-4 mb-6">
      {/* Imagen del evento */}
      <img
        src={event.image}
        alt={event.title}
        className="w-full md:w-48 h-32 object-cover rounded-lg"
      />

      {/* Detalles del evento */}
      <div className="flex flex-col flex-grow">
        <p className="text-blue-600 text-sm font-semibold">{event.date}</p>
        <h3 className="text-xl font-bold">{event.title}</h3>
        <p className="text-gray-600 flex items-center gap-2 mt-1">
          <FaMapMarkerAlt className="text-gray-500" />
          {event.location}
        </p>
        <p className="text-gray-700 mt-2 text-sm">{event.description}</p>

        {/* Botón de asistencia */}
        <div className="flex justify-end mt-4">
          <button className="border border-blue-500 text-blue-600 px-4 py-1 rounded-lg hover:bg-blue-500 hover:text-white transition">
            Attend
          </button>
        </div>
      </div>
    </div>
  );
};

const Upcomings = () => {
  const [selectedTab, setSelectedTab] = useState("upcoming");

  return (
    <div className="p-sma_pad md:p-mid_pad">
      <h3 className="">Public Events</h3>
      
      {/* Tabs */}
      <div className="flex gap-6 border-b mb-6">
        <button
          className={`pb-2 ${
            selectedTab === "upcoming"
              ? "text-blue-600 border-b-2 border-blue-600 font-semibold"
              : "text-gray-600"
          }`}
          onClick={() => setSelectedTab("upcoming")}
        >
          Upcoming
        </button>
        <button
          className={`pb-2 ${
            selectedTab === "past"
              ? "text-blue-600 border-b-2 border-blue-600 font-semibold"
              : "text-gray-600"
          }`}
          onClick={() => setSelectedTab("past")}
        >
          Past
        </button>
      </div>

      {/* Lista de eventos con espacio entre ellos */}
      <div className="flex flex-col gap-2">
        {selectedTab === "upcoming" && events.length > 0 ? (
          events.map((event) => <EventCard key={event.id} event={event} />)
        ) : (
          <p className="text-gray-500">No events available.</p>
        )}
      </div>
    </div>
  );
};

export default Upcomings;
