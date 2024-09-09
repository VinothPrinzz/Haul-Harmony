import React from 'react';

const DriverCard = ({ name, truckType, route, salaryQuote }) => (
  <div className="bg-white p-4 rounded-lg shadow">
    <div className="w-16 h-16 bg-gray-300 rounded-full mb-2 mx-auto"></div>
    <h3 className="font-bold text-center">{name}</h3>
    <p className="text-sm text-center">{truckType}</p>
    <p className="text-sm text-center">{route}</p>
    <p className="text-sm text-center">{salaryQuote}</p>
    <div className="flex justify-center mt-2">
      {[1, 2, 3, 4, 5].map((star) => (
        <svg key={star} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
        </svg>
      ))}
    </div>
  </div>
);

const FindDriver = () => {
  const nearbyDrivers = Array(7).fill(null);
  const allDrivers = Array(7).fill(null);

  return (
    <div className="p-6 bg-gray-100">
      <div className="mb-6 flex">
        <input
          type="text"
          placeholder="location"
          className="flex-grow p-2 border border-gray-300 rounded-l"
        />
        <button className="bg-white p-2 border border-l-0 border-gray-300 rounded-r">
          <svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
          </svg>
        </button>
      </div>

      <h2 className="text-xl font-bold mb-4">Nearby location</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mb-8">
        {nearbyDrivers.map((_, index) => (
          <DriverCard
            key={index}
            name="Name"
            truckType="truck type 1"
            route="pickup to destination"
            salaryQuote="Salary quote"
          />
        ))}
      </div>

      <h2 className="text-xl font-bold mb-4">All location</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {allDrivers.map((_, index) => (
          <DriverCard
            key={index}
            name="Name"
            truckType="truck type 1"
            route="pickup to destination"
            salaryQuote="Salary quote"
          />
        ))}
      </div>
    </div>
  );
};

export default FindDriver;