import React from 'react';
import { Star, Truck } from 'lucide-react';

const FindLoads = () => {
  const truckTypes = ['truck type 1', 'truck type 2', 'truck type 3', 'truck type 4', 'truck type 5', 'truck type 6', 'truck type 7', 'truck type 8', 'truck type 9'];
  const nearbyDrivers = Array(7).fill(null);
  const allDrivers = Array(7).fill(null);

  return (
    <div className="space-y-8">
      <div className="bg-white rounded-lg shadow-md p-6">
        <h2 className="text-2xl font-semibold mb-4">Select Truck Type</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
          {truckTypes.map((type, index) => (
            <button key={index} className="flex items-center justify-center p-4 border border-gray-300 rounded-lg hover:bg-gray-100 transition-colors">
              <Truck className="mr-2" size={20} />
              <span>{type}</span>
            </button>
          ))}
        </div>
      </div>

      <div className="bg-white rounded-lg shadow-md p-6">
        <h2 className="text-2xl font-semibold mb-4">Nearby Location</h2>
        <div className="space-y-4">
          {nearbyDrivers.map((_, index) => (
            <div key={index} className="flex items-center justify-between p-4 border border-gray-300 rounded-lg">
              <div>
                <h3 className="font-semibold">Driver Name</h3>
                <p className="text-sm text-gray-600">truck type 1</p>
                <p className="text-sm text-gray-600">pickup to destination</p>
              </div>
              <div className="text-right">
                <p className="font-semibold">Salary quote</p>
                <div className="flex">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star key={star} size={16} className="text-yellow-400" fill="currentColor" />
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="bg-white rounded-lg shadow-md p-6">
        <h2 className="text-2xl font-semibold mb-4">All Location</h2>
        <div className="space-y-4">
          {allDrivers.map((_, index) => (
            <div key={index} className="flex items-center justify-between p-4 border border-gray-300 rounded-lg">
              <div>
                <h3 className="font-semibold">Driver Name</h3>
                <p className="text-sm text-gray-600">truck type 1</p>
                <p className="text-sm text-gray-600">pickup to destination</p>
              </div>
              <div className="text-right">
                <p className="font-semibold">Salary quote</p>
                <div className="flex">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star key={star} size={16} className="text-yellow-400" fill="currentColor" />
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FindLoads;