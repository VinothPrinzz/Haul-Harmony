// import React from 'react';

// const Trucks = () => {
//   const trucksOwned = 3;
//   const trucks = [
//     { id: 1, totalLoad: 4, totalIncome: 120000, expenses: 60000 },
//     { id: 2, totalLoad: 3, totalIncome: 90000, expenses: 50000 },
//     { id: 3, totalLoad: 3, totalIncome: 80000, expenses: 50000 },
//   ];

//   return (
//     <div className="bg-white shadow-md rounded-lg p-6">
//       <h2 className="text-xl font-bold mb-4">Total Trucks Owned : {trucksOwned}</h2>
//       {trucks.map((truck) => (
//         <div key={truck.id} className="mb-6">
//           <h3 className="text-lg font-semibold mb-2">Truck {truck.id}</h3>
//           <div className="grid grid-cols-3 gap-4">
//             <div className="bg-gray-100 p-4 rounded">
//               <p className="text-sm text-gray-600">Total load</p>
//               <p className="text-lg font-semibold">{truck.totalLoad}</p>
//             </div>
//             <div className="bg-gray-100 p-4 rounded">
//               <p className="text-sm text-gray-600">Total Income</p>
//               <p className="text-lg font-semibold">{truck.totalIncome}</p>
//             </div>
//             <div className="bg-gray-100 p-4 rounded">
//               <p className="text-sm text-gray-600">Expenses</p>
//               <p className="text-lg font-semibold">{truck.expenses}</p>
//             </div>
//           </div>
//         </div>
//       ))}
//     </div>
//   );
// };

// export default Trucks;

import React from 'react';
import { Truck, Package, DollarSign, TrendingDown } from 'lucide-react';

const Trucks = () => {
  const trucksOwned = 3;
  const trucks = [
    { id: 1, totalLoad: 4, totalIncome: 120000, expenses: 60000 },
    { id: 2, totalLoad: 3, totalIncome: 90000, expenses: 50000 },
    { id: 3, totalLoad: 3, totalIncome: 80000, expenses: 50000 },
  ];

  return (
    <div className="space-y-8">
      <div className="bg-white rounded-lg shadow-md p-6">
        <h2 className="text-2xl font-semibold mb-4">Total Trucks Owned: {trucksOwned}</h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {trucks.map((truck) => (
          <div key={truck.id} className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-xl font-semibold mb-4 flex items-center">
              <Truck className="mr-2" size={24} />
              Truck {truck.id}
            </h3>
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-gray-600 flex items-center">
                  <Package className="mr-2" size={20} />
                  Total load
                </span>
                <span className="font-semibold">{truck.totalLoad}</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-gray-600 flex items-center">
                  <DollarSign className="mr-2" size={20} />
                  Total Income
                </span>
                <span className="font-semibold">{truck.totalIncome}</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-gray-600 flex items-center">
                  <TrendingDown className="mr-2" size={20} />
                  Expenses
                </span>
                <span className="font-semibold">{truck.expenses}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Trucks;