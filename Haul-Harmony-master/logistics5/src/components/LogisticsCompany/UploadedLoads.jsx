import React, { useState } from 'react';

const LoadCard = ({ onEdit }) => (
  <div className="bg-gray-200 p-4 rounded-lg mb-4">
    <h3 className="font-bold">Pickup to Destination</h3>
    <p>Truck Type: Truck Type 1</p>
    <p>Total load: 9 ton</p>
    <p>Price quote: 2000/ton</p>
    <button onClick={onEdit} className="mt-2 px-4 py-2 bg-gray-700 text-white rounded hover:bg-gray-600">Edit</button>
  </div>
);

const FilterBar = ({ onFilterChange }) => {
  const truckTypes = ['Truck type 1', 'Truck type 2', 'Truck type 3', 'Truck type 4', 'Truck type 5', 'Truck type 6', 'Truck type 7', 'Truck type 8', 'Truck type 9'];

  return (
    <div className="bg-gray-100 p-4 rounded-lg">
      <h3 className="font-bold mb-2">Filter by:</h3>
      {truckTypes.map((type, index) => (
        <div key={index} className="mb-2">
          <label className="flex items-center">
            <input
              type="checkbox"
              className="mr-2"
              onChange={(e) => onFilterChange(type, e.target.checked)}
            />
            {type}
          </label>
        </div>
      ))}
    </div>
  );
};

const UploadedLoads = ({ onEditLoad }) => {
  const [filters, setFilters] = useState([]);

  const handleFilterChange = (truckType, isChecked) => {
    if (isChecked) {
      setFilters([...filters, truckType]);
    } else {
      setFilters(filters.filter(type => type !== truckType));
    }
  };

  return (
    <div className="p-6 flex">
      <div className="flex-grow mr-6">
        <h1 className="text-2xl font-bold mb-6">Pending Loads</h1>
        <div className="space-y-4">
          {[...Array(8)].map((_, index) => (
            <LoadCard key={index} onEdit={onEditLoad} />
          ))}
        </div>
      </div>
      <div className="w-64">
        <FilterBar onFilterChange={handleFilterChange} />
      </div>
    </div>
  );
};

export default UploadedLoads;
