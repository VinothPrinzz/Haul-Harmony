import React, { useState } from 'react';

const TruckList = ({ onTruckSelect }) => {
  const [selectedType, setSelectedType] = useState(null);
  const [searchLocation, setSearchLocation] = useState('');

  const truckTypes = ['type 1', 'type 2', 'type 3', 'type 4', 'type 5'];
  const trucks = [
    { id: 1, type: 'type 1', name: 'Truck 1', location: 'Location 1', salary: '1000 RS' },
    { id: 2, type: 'type 2', name: 'Truck 2', location: 'Location 2', salary: '1200 RS' },
    { id: 3, type: 'type 3', name: 'Truck 3', location: 'Location 3', salary: '1200 RS' },
    { id: 4, type: 'type 4', name: 'Truck 4', location: 'Location 4', salary: '1200 RS' },
    { id: 5, type: 'type 5', name: 'Truck 5', location: 'Location 5', salary: '1200 RS' },
    // Add more trucks...
  ];

  const filteredTrucks = trucks.filter(truck => 
    (!selectedType || truck.type === selectedType) &&
    (!searchLocation || truck.location.toLowerCase().includes(searchLocation.toLowerCase()))
  );

  return (
    <div className="space-y-4">
      <div className="flex space-x-2 overflow-x-auto py-2">
        {truckTypes.map(type => (
          <button
            key={type}
            onClick={() => setSelectedType(type)}
            className={`px-4 py-2 rounded-full ${
              selectedType === type ? 'bg-blue-500 text-white' : 'bg-gray-200'
            }`}
          
          >
            {type}
          </button>
        ))}
      </div>
      <div className="relative">
        <input 
          type="text" 
          placeholder="Search location" 
          value={searchLocation}
          onChange={(e) => setSearchLocation(e.target.value)}
          className="w-full p-2 border rounded-md"
        />
        <svg className="w-6 h-6 absolute right-3 top-2 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
        </svg>
      </div>
      <h2 className="font-semibold text-lg">Nearby location</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {filteredTrucks.map(truck => (
          <div key={truck.id} className="bg-white p-4 rounded-md shadow" onClick={() => onTruckSelect(truck)}>
            <div className="w-16 h-16 bg-gray-300 rounded-full mb-2"></div>
            <h3 className="font-semibold">{truck.name}</h3>
            <p className="text-sm text-gray-500">{truck.type}</p>
            <p className="text-sm text-gray-500">{truck.location}</p>
            <p className="text-sm font-semibold mt-2">{truck.salary}</p>
            <div className="flex mt-2">
              {[...Array(3)].map((_, i) => (
                <svg key={i} className="w-4 h-4 text-yellow-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
export default TruckList;