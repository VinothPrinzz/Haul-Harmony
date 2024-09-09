import React, { useState, useEffect } from 'react';

const AddLoads = ({ formData, setFormData, isEditing }) => {
  useEffect(() => {
    if (isEditing) {
      setFormData(formData);
    }
  }, [isEditing, formData, setFormData]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Check if any field is empty
    for (const key in formData) {
      if (formData[key] === '') {
        alert('All fields must be filled out');
        return;
      }
    }
    console.log('Form submitted:', formData);
    // Here you would typically send the data to your backend
  };

  const handleReset = () => {
    setFormData({
      truckType: '',
      productType: '',
      loadWeight: '',
      priceQuote: '',
      distance: '',
      pickUpAddress: '',
      destinationAddress: ''
    });
  };

  return (
    <div className="p-6 bg-gray-100">
      <h1 className="text-2xl font-bold mb-6">Add Loads</h1>
      <form onSubmit={handleSubmit} className="bg-white p-6 rounded-lg shadow-md">
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block mb-2">Truck type:</label>
            <input
              type="text"
              name="truckType"
              value={formData.truckType}
              onChange={handleChange}
              className="w-full p-2 border rounded"
            />
          </div>
          <div>
            <label className="block mb-2">Product Type:</label>
            <input
              type="text"
              name="productType"
              value={formData.productType}
              onChange={handleChange}
              className="w-full p-2 border rounded"
              placeholder="eg: steel, food..."
            />
          </div>
          <div>
            <label className="block mb-2">Load Weight:</label>
            <input
              type="text"
              name="loadWeight"
              value={formData.loadWeight}
              onChange={handleChange}
              className="w-full p-2 border rounded"
            />
          </div>
          <div>
            <label className="block mb-2">Price Quote:</label>
            <input
              type="text"
              name="priceQuote"
              value={formData.priceQuote}
              onChange={handleChange}
              className="w-full p-2 border rounded"
            />
          </div>
          <div>
            <label className="block mb-2">Distance:</label>
            <input
              type="text"
              name="distance"
              value={formData.distance}
              onChange={handleChange}
              className="w-full p-2 border rounded"
            />
          </div>
        </div>
        <div className="mt-4">
          <label className="block mb-2">Pick Up Address:</label>
          <textarea
            name="pickUpAddress"
            value={formData.pickUpAddress}
            onChange={handleChange}
            className="w-full p-2 border rounded"
            rows="3"
          ></textarea>
        </div>
        <div className="mt-4">
          <label className="block mb-2">Destination Address:</label>
          <textarea
            name="destinationAddress"
            value={formData.destinationAddress}
            onChange={handleChange}
            className="w-full p-2 border rounded"
            rows="3"
          ></textarea>
        </div>
        <div className="mt-6 flex justify-end">
          <button type="button" onClick={handleReset} className="px-4 py-2 bg-gray-300 rounded mr-2">Reset</button>
          <button type="submit" className="px-4 py-2 bg-green-500 text-white rounded">Submit</button>
        </div>
      </form>
    </div>
  );
};

export default AddLoads;
