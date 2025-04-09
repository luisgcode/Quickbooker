import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";

const UserView = () => {
  const [t] = useTranslation("global");

  const [data, setData] = useState([]);
  const [selectedVenue, setSelectedVenue] = useState(null);
  const [showForm, setShowForm] = useState(false);
  const [bookingDetails, setBookingDetails] = useState({
    name: "",
    email: "",
    phone: "",
    eventDate: "",
    eventTime: "",
    capacity: "",
    setup: "",
    additionalServices: [],
    specialRequests: "",
    totalPrice: 0,
  });
  const [bookingConfirmed, setBookingConfirmed] = useState(false);

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

  const handleBookVenue = (venue) => {
    setSelectedVenue(venue);
    setShowForm(true);
    setBookingConfirmed(false);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setBookingDetails({ ...bookingDetails, [name]: value });
  };

  const handleCheckboxChange = (e) => {
    const { name, checked } = e.target;
    let updatedServices = [...bookingDetails.additionalServices];
    if (checked) {
      updatedServices.push(name);
    } else {
      updatedServices = updatedServices.filter((service) => service !== name);
    }
    setBookingDetails({
      ...bookingDetails,
      additionalServices: updatedServices,
    });
  };

  const calculateTotalPrice = () => {
    let total = 0;
    // Capacity pricing
    if (bookingDetails.capacity === "50") total += 500;
    if (bookingDetails.capacity === "100") total += 1000;
    if (bookingDetails.capacity === "200") total += 2000;

    // Setup pricing
    if (bookingDetails.setup === "theater") total += 200;
    if (bookingDetails.setup === "u-shape") total += 300;
    if (bookingDetails.setup === "boardroom") total += 400;
    if (bookingDetails.setup === "classroom") total += 350;

    // Additional services pricing
    if (bookingDetails.additionalServices.includes("catering")) total += 500;
    if (bookingDetails.additionalServices.includes("audio-visual"))
      total += 300;
    if (bookingDetails.additionalServices.includes("decorations")) total += 400;

    return total;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setBookingConfirmed(true);
    setBookingDetails({ ...bookingDetails, totalPrice: calculateTotalPrice() });
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-gray-900 mb-6">
        {t("userview.title")}
      </h1>

      <div className="space-y-6">
        {data.map((venue, index) => (
          <div
            key={index}
            className="flex items-center border-b pb-4 hover:shadow-lg transition-shadow duration-300 rounded-lg p-4"
          >
            {/* Venue Image */}
            <img
              src={venue.image}
              alt={venue.name}
              className="w-40 h-28 object-cover rounded-md mr-6 shadow-sm"
            />

            {/* Venue Details */}
            <div className="flex-1">
              <h5 className="font-bold mb-3">{venue.name}</h5>
              <div className="flex items-center text-gray-600 mb-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 mr-2"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                    clipRule="evenodd"
                  />
                </svg>
                <p>
                  {venue.address.street}, {venue.address.city},{" "}
                  {venue.address.province}
                </p>
              </div>

              <div className="flex items-center text-gray-700 text-sm mb-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 mr-2"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                </svg>
                <p>{venue.contact.phone}</p>
                <span className="mx-2">|</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 mr-2"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                  <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                </svg>
                <p>{venue.contact.email}</p>
              </div>

              {/* Max Capacity */}
              <div className="flex items-center text-gray-700 text-sm mb-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 mr-2"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3zM6 8a2 2 0 11-4 0 2 2 0 014 0zM16 18v-3a5.972 5.972 0 00-.75-2.906A3.005 3.005 0 0119 15v3h-3zM4.75 12.094A5.973 5.973 0 004 15v3H1v-3a3 3 0 013.75-2.906z" />
                </svg>
                <p>
                  {t("userview.maxCapacity")}: {venue.max_capacity} people
                </p>
              </div>

              {/* Amenities */}
              <div className="flex items-center text-sm text-gray-600">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 mr-2"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v2H7a1 1 0 100 2h2v2a1 1 0 102 0v-2h2a1 1 0 100-2h-2V7z"
                    clipRule="evenodd"
                  />
                </svg>
                <p>{venue.amenities.slice(0, 3).join(", ")}...</p>
              </div>
            </div>

            {/* Booking Button */}
            <button
              onClick={() => handleBookVenue(venue)}
              className="ml-auto py-2 px-4 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-md transition flex items-center"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 mr-2"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path d="M9 2a1 1 0 000 2h2a1 1 0 100-2H9z" />
                <path
                  fillRule="evenodd"
                  d="M4 5a2 2 0 012-2 3 3 0 003 3h2a3 3 0 003-3 2 2 0 012 2v11a2 2 0 01-2 2H6a2 2 0 01-2-2V5zm3 4a1 1 0 000 2h.01a1 1 0 100-2H7zm3 0a1 1 0 000 2h3a1 1 0 100-2h-3zm-3 4a1 1 0 100 2h.01a1 1 0 100-2H7zm3 0a1 1 0 100 2h3a1 1 0 100-2h-3z"
                  clipRule="evenodd"
                />
              </svg>
              {t("userview.bookButton")}
            </button>
          </div>
        ))}
      </div>

      {/* Booking Form Modal */}
      {showForm && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-lg p-6 w-full max-w-4xl mx-4 relative">
            {/* Close Button */}
            <button
              onClick={() => setShowForm(false)}
              className="absolute top-4 right-4 text-gray-600 hover:text-gray-900"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>

            <h2 className="text-xl font-bold mb-4">
              {t("userview.form.bookTitle", { venue: selectedVenue.name })}
            </h2>
            {bookingConfirmed ? (
              <div className="text-center">
                <p className="text-green-600 font-semibold">
                  {t("userview.form.thankYou")}
                </p>
                <button
                  onClick={() => setShowForm(false)}
                  className="mt-4 py-2 px-4 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-md"
                >
                  {t("userview.form.close")}
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* Left Column */}
                  <div className="space-y-4">
                    <input
                      type="text"
                      name="name"
                      placeholder={t("userview.form.fullName")}
                      value={bookingDetails.name}
                      onChange={handleInputChange}
                      className="w-full p-2 border rounded-md"
                      required
                    />
                    <input
                      type="email"
                      name="email"
                      placeholder={t("userview.form.email")}
                      value={bookingDetails.email}
                      onChange={handleInputChange}
                      className="w-full p-2 border rounded-md"
                      required
                    />
                    <input
                      type="tel"
                      name="phone"
                      placeholder={t("userview.form.phone")}
                      value={bookingDetails.phone}
                      onChange={handleInputChange}
                      className="w-full p-2 border rounded-md"
                      required
                    />
                    <input
                      type="date"
                      name="eventDate"
                      aria-label={t("userview.form.eventDate")}
                      value={bookingDetails.eventDate}
                      onChange={handleInputChange}
                      className="w-full p-2 border rounded-md"
                      required
                    />
                    <input
                      type="time"
                      name="eventTime"
                      value={bookingDetails.eventTime}
                      onChange={handleInputChange}
                      className="w-full p-2 border rounded-md"
                      required
                      aria-label={t("userview.form.eventTime")}
                    />
                  </div>

                  {/* Right Column */}
                  <div className="space-y-4">
                    <select
                      name="capacity"
                      value={bookingDetails.capacity}
                      onChange={handleInputChange}
                      className="w-full p-2 border rounded-md"
                      required
                    >
                      <option value="">
                        {t("userview.form.selectCapacity")}
                      </option>

                      <option value="50">50 people ($500)</option>
                      <option value="100">100 people ($1000)</option>
                      <option value="200">200 people ($2000)</option>
                    </select>
                    <select
                      name="setup"
                      value={bookingDetails.setup}
                      onChange={handleInputChange}
                      className="w-full p-2 border rounded-md"
                      required
                    >
                      <option value="">{t("userview.form.selectSetup")}</option>

                      <option value="theater">Theater Style ($200)</option>
                      <option value="u-shape">U-Shape Style ($300)</option>
                      <option value="boardroom">Boardroom Style ($400)</option>
                      <option value="classroom">Classroom Style ($350)</option>
                    </select>
                    <div className="space-y-2">
                      <p className="font-medium">
                        {t("userview.form.additionalServices")}
                      </p>

                      <label className="flex items-center">
                        <input
                          type="checkbox"
                          name="catering"
                          onChange={handleCheckboxChange}
                          className="mr-2"
                        />
                        {t("userview.form.catering")} ($500)
                      </label>
                      <label className="flex items-center">
                        <input
                          type="checkbox"
                          name="audio-visual"
                          onChange={handleCheckboxChange}
                          className="mr-2"
                        />
                        {t("userview.form.av")} ($300)
                      </label>
                      <label className="flex items-center">
                        <input
                          type="checkbox"
                          name="decorations"
                          onChange={handleCheckboxChange}
                          className="mr-2"
                        />
                        {t("userview.form.decorations")} ($400)
                      </label>
                    </div>
                    <textarea
                      name="specialRequests"
                      placeholder="Special Requests"
                      value={bookingDetails.specialRequests}
                      onChange={handleInputChange}
                      className="w-full p-2 border rounded-md"
                      rows="3"
                    />
                  </div>
                </div>

                {/* Total and Submit Button */}
                <div className="mt-6">
                  <p className="text-lg font-semibold">
                    Total: ${calculateTotalPrice()}
                  </p>
                  <button
                    type="submit"
                    className="w-full py-2 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-md mt-4"
                  >
                    Proceed
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default UserView;
