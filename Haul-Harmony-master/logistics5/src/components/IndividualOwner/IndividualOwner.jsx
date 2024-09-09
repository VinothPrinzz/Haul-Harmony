import React from 'react';

const FindLoads = () => {
  const nearbyLoads = [
    { name: 'Tanish', truckType: 'truck type 1', pickup: 'Hyderabad to Delhi', salary: '20000' },
    { name: 'Mike', truckType: 'truck type 2', pickup: 'Mumbai to Ooty', salary: '15000' },
    { name: 'Superman', truckType: 'truck type 3', pickup: 'Chennai to Banglore', salary: '10000' },
    { name: 'Batman', truckType: 'truck type 4', pickup: 'Vizag to Jaipur', salary: '15000' },
    { name: 'Iron Man', truckType: 'truck type 5', pickup: 'Trivandrum to Hyderabad', salary: '10000' },
    { name: 'DeadPool', truckType: 'truck type 4', pickup: 'Mumbai to Pune', salary: '7500' },
    { name: 'vinoth', truckType: 'truck type 2', pickup: 'Bom to Assam', salary: '2312' },
  ];

  const allLoads = [
    { name: 'pranav', truckType: 'truck type 2', pickup: 'Bom to Chennai', salary: '10000' },
    { name: 'nathiesh', truckType: 'truck type 3', pickup: 'Banglore to Mysore', salary: '2000' },
    { name: 'tarun', truckType: 'truck type 4', pickup: 'Hyderabad to Vizag', salary: '50000' },
    { name: 'bathreesh', truckType: 'truck type 5', pickup: 'Ahmedabad to Delhi', salary: '5200' },
    { name: 'sai', truckType: 'truck type 2', pickup: 'Raipur to Pune', salary: '53000' },
    { name: 'sree', truckType: 'truck type 3', pickup: 'Kanyakumari to Tirupati', salary: '239533' },
    { name: 'rahul', truckType: 'truck type 4', pickup: 'Jaipur to Raichur', salary: '23300' },
  ];

  return (
    <div className="bg-white shadow-md rounded-lg p-6">
      <div className="mb-6">
        <input type="text" placeholder="location" className="w-full p-2 border rounded-md" />
      </div>

      <h2 className="text-xl font-bold mb-4">Nearby location</h2>
      <div className="grid grid-cols-4 gap-4 mb-8">
        {nearbyLoads.map((load, index) => (
          <div key={index} className="bg-gray-100 p-4 rounded-lg">
            <div className="w-12 h-12 bg-gray-300 rounded-full mb-2"></div>
            <h3 className="font-semibold">{load.name}</h3>
            <p className="text-sm text-gray-600">{load.truckType}</p>
            <p className="text-sm text-gray-600">{load.pickup}</p>
            <p className="text-sm text-gray-600">{load.salary}</p>
            <div className="flex mt-2">
              {[...Array(3)].map((_, i) => (
                <svg key={i} className="w-4 h-4 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              ))}
            </div>
          </div>
        ))}
      </div>

      <h2 className="text-xl font-bold mb-4">All location</h2>
      <div className="grid grid-cols-4 gap-4">
        {allLoads.map((load, index) => (
          <div key={index} className="bg-gray-100 p-4 rounded-lg">
            <div className="w-12 h-12 bg-gray-300 rounded-full mb-2"></div>
            <h3 className="font-semibold">{load.name}</h3>
            <p className="text-sm text-gray-600">{load.truckType}</p>
            <p className="text-sm text-gray-600">{load.pickup}</p>
            <p className="text-sm text-gray-600">{load.salary}</p>
            <div className="flex mt-2">
              {[...Array(3)].map((_, i) => (
                <svg key={i} className="w-4 h-4 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
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

export default FindLoads;