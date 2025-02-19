import { useEffect, useState } from "react";

const AdminView = () => {
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
    fetch("/data/venues.json")
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
    <main className="p-5">
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-2xl font-bold">Welcome to the Admin View</h1>
        <button
          className="bg-green-500 text-white px-4 py-2 rounded"
          onClick={toggleModal}
        >
          Add Venue
        </button>
      </div>

      {venues.length === 0 ? (
        <p>No venues found.</p>
      ) : (
        <div className="grid gap-4">
          {venues.map((venue, index) => (
            <div key={index} className="border p-4 rounded-lg shadow">
              {editingIndex === index ? (
                <>
                  <input
                    className="w-full p-2 mb-2 border rounded"
                    type="text"
                    value={editedVenue.name}
                    onChange={(e) => handleChange(e, "name")}
                  />
                  <div className="mb-2">
                    <strong>Address:</strong>
                    <input
                      className="w-full p-1 border rounded mt-1"
                      type="text"
                      value={editedVenue.address.street}
                      onChange={(e) => handleAddressChange(e, "street")}
                      placeholder="Street"
                    />
                    <input
                      className="w-full p-1 border rounded mt-1"
                      type="text"
                      value={editedVenue.address.city}
                      onChange={(e) => handleAddressChange(e, "city")}
                      placeholder="City"
                    />
                    <input
                      className="w-full p-1 border rounded mt-1"
                      type="text"
                      value={editedVenue.address.postal_code}
                      onChange={(e) => handleAddressChange(e, "postal_code")}
                      placeholder="Postal Code"
                    />
                    <input
                      className="w-full p-1 border rounded mt-1"
                      type="text"
                      value={editedVenue.address.province}
                      onChange={(e) => handleAddressChange(e, "province")}
                      placeholder="Province"
                    />
                    <input
                      className="w-full p-1 border rounded mt-1"
                      type="text"
                      value={editedVenue.address.country}
                      onChange={(e) => handleAddressChange(e, "country")}
                      placeholder="Country"
                    />
                    <div className="mb-2">
                      <strong>Contact:</strong>
                      <input
                        className="w-full p-1 border rounded mt-1"
                        type="email"
                        value={editedVenue.contact.email}
                        onChange={(e) => handleContactChange(e, "email")}
                        placeholder="Email"
                      />
                      <input
                        className="w-full p-1 border rounded mt-1"
                        type="text"
                        value={editedVenue.contact.phone}
                        onChange={(e) => handleContactChange(e, "phone")}
                        placeholder="Phone"
                      />
                    </div>

                    <div className="mb-2">
                      <strong>Amenities:</strong>
                      {editedVenue.amenities.map((amenity, i) => (
                        <div key={i} className="flex items-center mt-1">
                          <input
                            className="w-full p-1 border rounded"
                            type="text"
                            value={amenity}
                            onChange={(e) =>
                              handleAmenityChange(i, e.target.value)
                            }
                            placeholder="Amenity"
                          />
                          <button
                            className="bg-red-500 text-white px-2 ml-2 rounded"
                            onClick={() => handleRemoveAmenity(i)}
                          >
                            -
                          </button>
                        </div>
                      ))}
                      <button
                        className="bg-blue-500 text-white px-3 py-1 rounded mt-2"
                        onClick={handleAddAmenity}
                      >
                        + Add Amenity
                      </button>
                    </div>
                  </div>
                  <button
                    className="bg-green-500 text-white px-3 py-1 rounded mr-2"
                    onClick={handleSave}
                  >
                    Update
                  </button>
                  <button
                    className="bg-gray-500 text-white px-3 py-1 rounded"
                    onClick={handleCancel}
                  >
                    Cancel
                  </button>
                </>
              ) : (
                <>
                  <h2 className="text-xl font-semibold">{venue.name}</h2>
                  <p>
                    <strong>Address:</strong> {venue.address.street},{" "}
                    {venue.address.city}, {venue.address.postal_code},{" "}
                    {venue.address.province}, {venue.address.country}
                  </p>
                  <p>
                    <strong>Email:</strong> {venue.contact.email}
                  </p>
                  <p>
                    <strong>Phone:</strong> {venue.contact.phone}
                  </p>
                  {venue.amenities && venue.amenities.length > 0 && (
                    <p>
                      <strong>Amenities:</strong> {venue.amenities.join(", ")}
                    </p>
                  )}
                  <div className="mt-3">
                    <button
                      className="bg-blue-500 text-white px-3 py-1 rounded mr-2"
                      onClick={() => handleEdit(index)}
                    >
                      Edit
                    </button>
                    <button
                      className="bg-red-500 text-white px-3 py-1 rounded"
                      onClick={() => handleDelete(index)}
                    >
                      Delete
                    </button>
                  </div>
                </>
              )}
            </div>
          ))}
        </div>
      )}

      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white p-5 rounded-lg shadow-lg w-96">
            <h2 className="text-xl font-semibold mb-2">Add New Venue</h2>
            <input
              className="w-full p-2 mb-2 border rounded"
              type="text"
              placeholder="Venue Name"
              value={newVenue.name}
              onChange={(e) => handleNewVenueChange(e, "name")}
            />

            <div className="mb-2">
              <strong>Address:</strong>
              <input
                className="w-full p-1 border rounded mt-1"
                type="text"
                placeholder="Street"
                value={newVenue.address.street}
                onChange={(e) => handleNewVenueChange(e, "street", true)}
              />
              <input
                className="w-full p-1 border rounded mt-1"
                type="text"
                placeholder="City"
                value={newVenue.address.city}
                onChange={(e) => handleNewVenueChange(e, "city", true)}
              />
              <input
                className="w-full p-1 border rounded mt-1"
                type="text"
                placeholder="Postal Code"
                value={newVenue.address.postal_code}
                onChange={(e) => handleNewVenueChange(e, "postal_code", true)}
              />
              <input
                className="w-full p-1 border rounded mt-1"
                type="text"
                placeholder="Province"
                value={newVenue.address.province}
                onChange={(e) => handleNewVenueChange(e, "province", true)}
              />
              <input
                className="w-full p-1 border rounded mt-1"
                type="text"
                placeholder="Country"
                value={newVenue.address.country}
                onChange={(e) => handleNewVenueChange(e, "country", true)}
              />
            </div>

            <div className="mb-2">
              <strong>Contact:</strong>
              <input
                className="w-full p-1 border rounded mt-1"
                type="email"
                placeholder="Email"
                value={newVenue.contact.email}
                onChange={(e) => handleNewContactChange(e, "email")}
              />
              <input
                className="w-full p-1 border rounded mt-1"
                type="text"
                placeholder="Phone"
                value={newVenue.contact.phone}
                onChange={(e) => handleNewContactChange(e, "phone")}
              />
            </div>

            <div className="mb-2">
              <strong>Amenities:</strong>
              {newVenue.amenities.map((amenity, i) => (
                <div key={i} className="flex items-center mt-1">
                  <input
                    className="w-full p-1 border rounded"
                    type="text"
                    value={amenity}
                    onChange={(e) => handleNewAmenityChange(i, e.target.value)}
                    placeholder="Amenity"
                  />
                  <button
                    className="bg-red-500 text-white px-2 ml-2 rounded"
                    onClick={() => handleRemoveNewAmenity(i)}
                  >
                    -
                  </button>
                </div>
              ))}
              <button
                className="bg-blue-500 text-white px-3 py-1 rounded mt-2"
                onClick={handleAddNewAmenity}
              >
                + Add Amenity
              </button>
            </div>

            <button
              className="bg-green-500 text-white px-3 py-1 rounded mr-2"
              onClick={handleAddVenue}
            >
              Add
            </button>
            <button
              className="bg-gray-500 text-white px-3 py-1 rounded"
              onClick={toggleModal}
            >
              Cancel
            </button>
          </div>
        </div>
      )}
    </main>
  );
};

export default AdminView;
