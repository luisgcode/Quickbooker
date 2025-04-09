import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";

const AdminView = () => {
  const [t] = useTranslation("global");

  const [venues, setVenues] = useState([]);
  const [editingIndex, setEditingIndex] = useState(null);
  const [editedVenue, setEditedVenue] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [newVenue, setNewVenue] = useState({
    name: "",
    address: {
      street: "",
      city: "",
      postal_code: "",
      province: "",
      country: "",
    },
    contact: {
      email: "",
      phone: "",
    },
    amenities: [],
  });

  useEffect(() => {
    fetch("/data/adminvenues.json")
      .then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        return response.json();
      })
      .then((data) => {
        console.log("Fetched data:", data);
        setVenues(data);
      })
      .catch((error) => console.error("Error fetching venues:", error));
  }, []);

  // Handle Delete
  const handleDelete = (index) => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this venue?"
    );
    if (confirmDelete) {
      setVenues(venues.filter((_, i) => i !== index));
    }
  };

  // Handle Edit
  const handleEdit = (index) => {
    setEditingIndex(index);
    setEditedVenue({ ...venues[index] });
  };

  // Handle Cancel
  const handleCancel = () => {
    if (window.confirm("Are you sure you want to cancel editing?")) {
      setEditingIndex(null);
      setEditedVenue(null);
    }
  };

  // Handle Input Change
  const handleChange = (e, field) => {
    setEditedVenue({
      ...editedVenue,
      [field]: e.target.value,
    });
  };

  // Handle Address Change
  const handleAddressChange = (e, field) => {
    setEditedVenue({
      ...editedVenue,
      address: {
        ...editedVenue.address,
        [field]: e.target.value,
      },
    });
  };

  // Handle Save
  const handleSave = () => {
    if (!editedVenue.name.trim()) {
      alert("Venue name is required!");
      return;
    }
    if (
      !editedVenue.address.street.trim() ||
      !editedVenue.address.city.trim() ||
      !editedVenue.address.postal_code.trim() ||
      !editedVenue.address.province.trim() ||
      !editedVenue.address.country.trim()
    ) {
      alert("Address fields cannot be empty!");
      return;
    }

    if (
      !editedVenue.contact.email.trim() ||
      !editedVenue.contact.phone.trim()
    ) {
      alert("Contact fields cannot be empty!");
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(editedVenue.contact.email)) {
      alert("Invalid email format!");
      return;
    }

    const phoneRegex =
      /^[+]?[(]?[0-9]{3}[)]?[-\s.]?[0-9]{3}[-\s.]?[0-9]{4,6}$/im;
    if (!phoneRegex.test(editedVenue.contact.phone)) {
      alert("Invalid phone number format!");
      return;
    }

    if (window.confirm("Do you want to save changes?")) {
      const updatedVenues = [...venues];
      updatedVenues[editingIndex] = editedVenue;
      setVenues(updatedVenues);
      setEditingIndex(null);
      setEditedVenue(null);
    }
  };

  // Handle Open/Close Modal
  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
    setNewVenue({
      name: "",
      address: {
        street: "",
        city: "",
        postal_code: "",
        province: "",
        country: "",
      },
      contact: { email: "", phone: "" },
      amenities: [],
    });
  };

  // Handle Adding New Venue
  const handleAddVenue = () => {
    if (!newVenue.name.trim()) {
      alert("Venue name is required!");
      return;
    }
    if (
      !newVenue.address.street.trim() ||
      !newVenue.address.city.trim() ||
      !newVenue.address.postal_code.trim() ||
      !newVenue.address.province.trim() ||
      !newVenue.address.country.trim()
    ) {
      alert("Address fields cannot be empty!");
      return;
    }

    if (!newVenue.contact.email.trim() || !newVenue.contact.phone.trim()) {
      alert("Contact fields cannot be empty!");
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(newVenue.contact.email)) {
      alert("Invalid email format!");
      return;
    }

    const phoneRegex =
      /^[+]?[(]?[0-9]{3}[)]?[-\s.]?[0-9]{3}[-\s.]?[0-9]{4,6}$/im;
    if (!phoneRegex.test(newVenue.contact.phone)) {
      alert("Invalid phone number format!");
      return;
    }

    setVenues([...venues, newVenue]);
    toggleModal();
  };

  // Handle Amenity Change
  const handleAmenityChange = (index, value) => {
    const updatedAmenities = [...editedVenue.amenities];
    updatedAmenities[index] = value;
    setEditedVenue({
      ...editedVenue,
      amenities: updatedAmenities,
    });
  };

  // Handle Adding amenity
  const handleAddAmenity = () => {
    setEditedVenue({
      ...editedVenue,
      amenities: [...editedVenue.amenities, ""],
    });
  };

  // handle removing amenity
  const handleRemoveAmenity = (index) => {
    setEditedVenue({
      ...editedVenue,
      amenities: editedVenue.amenities.filter((_, i) => i !== index),
    });
  };

  // handle contact change
  const handleContactChange = (e, field) => {
    setEditedVenue({
      ...editedVenue,
      contact: {
        ...editedVenue.contact,
        [field]: e.target.value,
      },
    });
  };

  // Handle new Amenity Change
  const handleNewAmenityChange = (index, value) => {
    const updatedAmenities = [...newVenue.amenities];
    updatedAmenities[index] = value;
    setNewVenue({
      ...newVenue,
      amenities: updatedAmenities,
    });
  };

  // Handle New Venue Input Change
  const handleNewVenueChange = (e, field, isAddress = false) => {
    if (isAddress) {
      setNewVenue({
        ...newVenue,
        address: {
          ...newVenue.address,
          [field]: e.target.value,
        },
      });
    } else {
      setNewVenue({ ...newVenue, [field]: e.target.value });
    }
  };

  // handle addung new amenity
  const handleAddNewAmenity = () => {
    setNewVenue({
      ...newVenue,
      amenities: [...newVenue.amenities, ""],
    });
  };

  // handle new contact info change
  const handleNewContactChange = (e, field) => {
    setNewVenue({
      ...newVenue,
      contact: {
        ...newVenue.contact,
        [field]: e.target.value,
      },
    });
  };

  // handle removing a new amenity
  const handleRemoveNewAmenity = (index) => {
    setNewVenue({
      ...newVenue,
      amenities: newVenue.amenities.filter((_, i) => i !== index),
    });
  };

  return (
    <main className="container mx-auto px-4 py-8">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold text-gray-900 dark:text-[#e8e8e8]">
          {t("adminView.welcome")}
        </h1>
        <button
          className="ml-auto py-2 px-4 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-md transition flex items-center"
          onClick={toggleModal}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5 mr-2"
            viewBox="0 0 20 20"
            fill="black"
          >
            <path
              fillRule="evenodd"
              d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z"
              clipRule="evenodd"
            />
          </svg>
          {t("adminView.addVenue")}
        </button>
      </div>

      {venues.length === 0 ? (
        <p>{t("adminView.noVenues")}</p>
      ) : (
        <div className="space-y-6">
          {venues.map((venue, index) => (
            <div
              key={index}
              className="flex items-center border-b pb-4 hover:shadow-lg transition-shadow duration-300 rounded-lg p-4"
            >
              {editingIndex === index ? (
                <div className="w-full">
                  <input
                    className="w-full p-2 mb-2 border rounded"
                    type="text"
                    value={editedVenue.name}
                    onChange={(e) => handleChange(e, "name")}
                  />
                  <div className="space-y-4">
                    <div>
                      <strong>Address:</strong>
                      <div className="grid grid-cols-2 gap-2 mt-2">
                        <input
                          className="w-full p-1 border rounded"
                          type="text"
                          value={editedVenue.address.street}
                          onChange={(e) => handleAddressChange(e, "street")}
                          placeholder={t("adminView.form.street")}
                        />
                        <input
                          className="w-full p-1 border rounded"
                          type="text"
                          value={editedVenue.address.city}
                          onChange={(e) => handleAddressChange(e, "city")}
                          placeholder="City"
                        />
                        <input
                          className="w-full p-1 border rounded"
                          type="text"
                          value={editedVenue.address.postal_code}
                          onChange={(e) =>
                            handleAddressChange(e, "postal_code")
                          }
                          placeholder="Postal Code"
                        />
                        <input
                          className="w-full p-1 border rounded"
                          type="text"
                          value={editedVenue.address.province}
                          onChange={(e) => handleAddressChange(e, "province")}
                          placeholder="Province"
                        />
                      </div>
                      <input
                        className="w-full p-1 border rounded mt-2"
                        type="text"
                        value={editedVenue.address.country}
                        onChange={(e) => handleAddressChange(e, "country")}
                        placeholder="Country"
                      />
                    </div>

                    <div>
                      <strong>Contact:</strong>
                      <div className="grid grid-cols-2 gap-2 mt-2">
                        <input
                          className="w-full p-1 border rounded"
                          type="email"
                          value={editedVenue.contact.email}
                          onChange={(e) => handleContactChange(e, "email")}
                          placeholder="Email"
                        />
                        <input
                          className="w-full p-1 border rounded"
                          type="text"
                          value={editedVenue.contact.phone}
                          onChange={(e) => handleContactChange(e, "phone")}
                          placeholder="Phone"
                        />
                      </div>
                    </div>

                    <div>
                      <strong>Amenities:</strong>
                      {editedVenue.amenities.map((amenity, i) => (
                        <div
                          key={i}
                          className="flex items-center mt-2 space-x-2"
                        >
                          <input
                            className="flex-1 p-1 border rounded"
                            type="text"
                            value={amenity}
                            onChange={(e) =>
                              handleAmenityChange(i, e.target.value)
                            }
                            placeholder={t("adminView.form.amenity")}
                          />
                          <button
                            className="ml-auto py-2 px-4 bg-red-500 hover:bg-red-600 text-white font-medium rounded-md transition"
                            onClick={() => handleRemoveAmenity(i)}
                          >
                            -
                          </button>
                        </div>
                      ))}
                      <button
                        className="mt-2 py-2 px-4 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-md transition"
                        onClick={handleAddAmenity}
                      >
                        {t("adminView.addAmenity")}
                      </button>
                    </div>
                  </div>

                  <div className="mt-4 flex space-x-2">
                    <button
                      className="py-2 px-4 bg-green-500 hover:bg-green-600 text-white font-medium rounded-md transition"
                      onClick={handleSave}
                    >
                      {t("adminView.update")}
                    </button>
                    <button
                      className="py-2 px-4 bg-gray-500 hover:bg-gray-600 text-white font-medium rounded-md transition"
                      onClick={handleCancel}
                    >
                      {t("adminView.cancel")}
                    </button>
                  </div>
                </div>
              ) : (
                <div className="flex flex-1 flex-col lg:flex-row">
                  <div className="flex justify-center items-center">
                    <img
                      src={
                        venue.image
                          ? venue.image
                          : "/src/assets/images/venues/placeholder-image.png"
                      }
                      alt={venue.name}
                      className="w-60 h-40 object-cover rounded-md mr-6 shadow-sm"
                    />
                  </div>
                  <div>
                    <h2 className="font-bold mt-4 lg:mt-0 mb-3 dark:text-[#e8e8e8]">
                      {venue.name}
                    </h2>
                    <div className="flex items-center text-gray-600 dark:text-[#b0b0b0] mb-2">
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
                    <div className="flex items-center text-gray-700 text-sm dark:text-[#b0b0b0] mb-2">
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
                      <span className="mx-2">|</span>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5 mr-2"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                      </svg>
                      <p>{venue.contact.phone}</p>
                    </div>
                    {venue.amenities && venue.amenities.length > 0 && (
                      <div className="flex items-center text-sm text-gray-600 dark:text-[#b0b0b0]">
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
                    )}
                    <div className="mt-3 flex space-x-2">
                      <button
                        className="py-2 px-4 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-md transition"
                        onClick={() => handleEdit(index)}
                      >
                        {t("adminView.edit")}
                      </button>
                      <button
                        className="py-2 px-4 bg-red-500 hover:bg-red-600 text-white font-medium rounded-md transition"
                        onClick={() => handleDelete(index)}
                      >
                        {t("adminView.delete")}
                      </button>
                    </div>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      )}

      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4">
          <div className="bg-white dark:bg-[#212121] rounded-lg p-6 w-full max-w-4xl mx-4 relative">
            <button
              onClick={toggleModal}
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

            <h2 className="text-xl font-bold mb-4 dark:text-[#e8e8e8]">
              {t("adminView.modal.title")}
            </h2>

            <form>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <input
                    className="w-full p-2 border rounded"
                    type="text"
                    placeholder="Venue Name"
                    value={newVenue.name}
                    onChange={(e) => handleNewVenueChange(e, "name")}
                  />
                  <div>
                    <strong className="dark:text-[#e8e8e8]">
                      {t("adminView.address")}:
                    </strong>
                    <div className="grid grid-cols-2 gap-2 mt-2">
                      <input
                        className="w-full p-1 border rounded"
                        type="text"
                        placeholder="Street"
                        value={newVenue.address.street}
                        onChange={(e) =>
                          handleNewVenueChange(e, "street", true)
                        }
                      />
                      <input
                        className="w-full p-1 border rounded"
                        type="text"
                        placeholder="City"
                        value={newVenue.address.city}
                        onChange={(e) => handleNewVenueChange(e, "city", true)}
                      />
                      <input
                        className="w-full p-1 border rounded"
                        type="text"
                        placeholder="Postal Code"
                        value={newVenue.address.postal_code}
                        onChange={(e) =>
                          handleNewVenueChange(e, "postal_code", true)
                        }
                      />
                      <input
                        className="w-full p-1 border rounded"
                        type="text"
                        placeholder="Province"
                        value={newVenue.address.province}
                        onChange={(e) =>
                          handleNewVenueChange(e, "province", true)
                        }
                      />
                    </div>
                    <input
                      className="w-full p-1 border rounded mt-2"
                      type="text"
                      placeholder="Country"
                      value={newVenue.address.country}
                      onChange={(e) => handleNewVenueChange(e, "country", true)}
                    />
                  </div>
                </div>
                <div className="space-y-4">
                  <div>
                    <strong>{t("adminView.contact")}:</strong>

                    <div className="grid grid-cols-2 gap-2 mt-2">
                      <input
                        className="w-full p-1 border rounded"
                        type="email"
                        placeholder="Email"
                        value={newVenue.contact.email}
                        onChange={(e) => handleNewContactChange(e, "email")}
                      />
                      <input
                        className="w-full p-1 border rounded"
                        type="text"
                        placeholder="Phone"
                        value={newVenue.contact.phone}
                        onChange={(e) => handleNewContactChange(e, "phone")}
                      />
                    </div>
                  </div>
                  <div>
                    <strong>{t("adminView.amenities")}:</strong>
                    {newVenue.amenities.map((amenity, i) => (
                      <div key={i} className="flex items-center mt-2 space-x-2">
                        <input
                          className="flex-1 p-1 border rounded"
                          type="text"
                          value={amenity}
                          onChange={(e) =>
                            handleNewAmenityChange(i, e.target.value)
                          }
                          placeholder="Amenity"
                        />
                        <button
                          type="button"
                          className="ml-auto py-2 px-4 bg-red-500 hover:bg-red-600 text-white font-medium rounded-md transition"
                          onClick={() => handleRemoveNewAmenity(i)}
                        >
                          -
                        </button>
                      </div>
                    ))}
                    <button
                      type="button"
                      className="mt-2 py-2 px-4 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-md transition"
                      onClick={handleAddNewAmenity}
                    >
                      + Add Amenity
                    </button>
                  </div>
                </div>
              </div>
              <div className="mt-6 flex space-x-2">
                <button
                  type="button"
                  className="py-2 px-4 bg-green-500 hover:bg-green-600 text-white font-medium rounded-md transition"
                  onClick={handleAddVenue}
                >
                  {t("adminView.modal.add")}
                </button>
                <button
                  type="button"
                  className="py-2 px-4 bg-gray-500 hover:bg-gray-600 text-white font-medium rounded-md transition"
                  onClick={toggleModal}
                >
                  {t("adminView.modal.cancel")}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </main>
  );
};

export default AdminView;
