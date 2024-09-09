import React from 'react';

const Trucks = () => {
  const trucksOwned = 3;
  const trucks = [
    { id: 1, totalLoad: 4, totalIncome: 120000, expenses: 60000 },
    { id: 2, totalLoad: 3, totalIncome: 90000, expenses: 50000 },
    { id: 3, totalLoad: 3, totalIncome: 80000, expenses: 50000 },
  ];

  return (
    <div className="bg-white shadow-md rounded-lg p-6">
      <h2 className="text-xl font-bold mb-4">Total Trucks Owned : {trucksOwned}</h2>
      {trucks.map((truck) => (
        <div key={truck.id} className="mb-6">
          <h3 className="text-lg font-semibold mb-2">Truck {truck.id}</h3>
          <div className="grid grid-cols-3 gap-4">
            <div className="bg-gray-100 p-4 rounded">
              <p className="text-sm text-gray-600">Total load</p>
              <p className="text-lg font-semibold">{truck.totalLoad}</p>
            </div>
            <div className="bg-gray-100 p-4 rounded">
              <p className="text-sm text-gray-600">Total Income</p>
              <p className="text-lg font-semibold">{truck.totalIncome}</p>
            </div>
            <div className="bg-gray-100 p-4 rounded">
              <p className="text-sm text-gray-600">Expenses</p>
              <p className="text-lg font-semibold">{truck.expenses}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Trucks;
