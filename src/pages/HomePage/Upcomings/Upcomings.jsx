import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { FaMapMarkerAlt } from "react-icons/fa";
import { fifa, cricket, clean, kpop } from "../../../components/media";

const events = [
  {
    id: 1,
    title: "Fanshawe College - FIFA 25 Tournament",
    date: "WED, APR 2, 2025, 6:00 PM EDT",
    location: "304 Talbot St, 2nd floor, London, ON",
    description:
      "Calling all FIFA fans! Join us at Fanshawe College for an exciting FIFA 25 tournament. Compete for amazing prizes, meet fellow gamers, and experience the latest in FIFA esports action. Snacks and drinks will be provided!",
    image: fifa,
  },
  {
    id: 2,
    title: "City of London - Clean-Up Day",
    date: "SAT, APR 5, 2025, 10:00 AM EDT",
    location: "Victoria Park, 509 Clarence St, London, ON",
    description:
      "Join the City of London for a day of giving back! Help clean up our parks, streets, and public spaces. All volunteers will receive free refreshments, and the first 100 participants get a free eco-friendly tote bag. Let's make London shine together!",
    image: clean,
  },
  {
    id: 3,
    title: "Behance Lounge - KPOP Night Party",
    date: "SAT, APR 20, 2025, 8:00 PM EDT",
    location: "Behance Lounge, 432 Richmond St, London, ON",
    description:
      "Step into the world of K-pop! Dance to the hottest tracks, enjoy Korean street food, and meet fellow K-pop fans. Special guest DJs and K-pop dance performances will keep the night going!",
    image: kpop,
  },
];

const EventCard = ({ event }) => {
  const { t } = useTranslation("global");
  const [isAttending, setIsAttending] = useState(false);
  const [isRegistered, setIsRegistered] = useState(false);
  const [registrationId, setRegistrationId] = useState(null);
  const [formData, setFormData] = useState({ name: "", email: "" });

  const generateId = () => Math.floor(1000 + Math.random() * 9000);

  const handleSubmit = (e) => {
    e.preventDefault();
    setRegistrationId(generateId());
    setIsRegistered(true);
    setTimeout(() => setIsAttending(false), 3000);
  };

  return (
    <div className="bg-white dark:bg-[#212121] shadow-md rounded-lg p-6 flex flex-col md:flex-row gap-4 mb-6 transition-colors">
      <img
        src={event.image}
        alt={event.title}
        className="w-full md:w-48 h-32 object-cover rounded-lg"
      />
      <div className="flex flex-col flex-grow">
        <p className="text-blue-600 text-sm font-semibold">{event.date}</p>
        <h3 className="text-xl font-bold dark:text-[#e8e8e8]">{event.title}</h3>
        <p className="text-gray-600 dark:text-[#b0b0b0] flex items-center gap-2 mt-1">
          <FaMapMarkerAlt className="text-gray-500" />
          {event.location}
        </p>
        <p className="text-gray-700 dark:text-[#b0b0b0] mt-2 text-sm">
          {event.description}
        </p>

        {isAttending ? (
          isRegistered ? (
            <p className="text-green-600 font-semibold mt-4">
              {t("events.success.message")}
              <br />
              {t("events.success.idText")}{" "}
              <span className="font-bold">{registrationId}</span>
            </p>
          ) : (
            <form onSubmit={handleSubmit} className="mt-4 flex flex-col gap-2">
              <input
                type="text"
                placeholder={t("events.form.namePlaceholder")}
                value={formData.name}
                onChange={(e) =>
                  setFormData({ ...formData, name: e.target.value })
                }
                required
                className="border border-gray-300 dark:border-[#555] p-2 rounded-lg text-gray-700 dark:text-[#b0b0b0] bg-white dark:bg-[#1c1c1c]"
              />
              <input
                type="email"
                placeholder={t("events.form.emailPlaceholder")}
                value={formData.email}
                onChange={(e) =>
                  setFormData({ ...formData, email: e.target.value })
                }
                required
                className="border border-gray-300 dark:border-[#555] p-2 rounded-lg text-gray-700 dark:text-[#b0b0b0] bg-white dark:bg-[#1c1c1c]"
              />
              <button
                type="submit"
                className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition"
              >
                {t("events.form.submitBtn")}
              </button>
            </form>
          )
        ) : (
          <div className="flex justify-end mt-4">
            <button
              onClick={() => setIsAttending(true)}
              className="border border-blue-500 text-blue-600 px-4 py-1 rounded-lg hover:bg-blue-500 hover:text-white transition"
            >
              {t("events.attendBtn")}
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

const Upcomings = () => {
  const { t } = useTranslation("global");
  const [selectedTab, setSelectedTab] = useState("upcoming");

  return (
    <div className="p-sma_pad md:p-mid_pad">
      <h3 className="dark:text-[#e8e8e8]">{t("events.title")}</h3>
      <div className="flex gap-6 border-b border-gray-200 dark:border-gray-700 mb-6">
        <button
          className={`pb-2 transition ${
            selectedTab === "upcoming"
              ? "text-blue-600 border-b-2 border-blue-600 font-semibold"
              : "text-gray-600 dark:text-[#b0b0b0]"
          }`}
          onClick={() => setSelectedTab("upcoming")}
        >
          {t("events.tabs.upcoming")}
        </button>
        <button
          className={`pb-2 transition ${
            selectedTab === "past"
              ? "text-blue-600 border-b-2 border-blue-600 font-semibold"
              : "text-gray-600 dark:text-[#b0b0b0]"
          }`}
          onClick={() => setSelectedTab("past")}
        >
          {t("events.tabs.past")}
        </button>
      </div>

      <div className="flex flex-col gap-2">
        {selectedTab === "upcoming" && events.length > 0 ? (
          events.map((event) => <EventCard key={event.id} event={event} />)
        ) : (
          <p className="text-gray-500 dark:text-[#b0b0b0]">
            {t("events.noEvents")}
          </p>
        )}
      </div>
    </div>
  );
};

export default Upcomings;
