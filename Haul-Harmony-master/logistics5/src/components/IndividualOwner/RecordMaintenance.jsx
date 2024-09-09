// import React from 'react';

// const RecordMaintenance = () => {
//   const trucks = [
//     { id: 1, type: 'Container', loads: [
//       { pickup: 'Pickup to Destination', totalLoad: '9 ton', driver: 'Rajesh', netIncome: '9000 rs' },
//       { pickup: 'Pickup to Destination', totalLoad: '8 ton', driver: 'Ramesh', netIncome: '8000' },
//       { pickup: 'Pickup to Destination', totalLoad: '9 ton', driver: 'Bathreesh', netIncome: '9000 rs' },
//     ]},
//     { id: 2, type: 'Container', loads: [
//       { pickup: 'Pickup to Destination', totalLoad: '9 ton', driver: 'Rajesh', netIncome: '7000 rs' },
//       { pickup: 'Pickup to Destination', totalLoad: '8 ton', driver: 'Ramesh', netIncome: '6000 rs' },
//       { pickup: 'Pickup to Destination', totalLoad: '9 ton', driver: 'Bathreesh', netIncome: '8000 rs' },
//     ]},
//     { id: 3, type: 'Container', loads: [
//       { pickup: 'Pickup to Destination', totalLoad: '9 ton', driver: 'Rajesh', netIncome: '9000 rs' },
//       { pickup: 'Pickup to Destination', totalLoad: '8 ton', driver: 'Ramesh', netIncome: '9000 rs' },
//       { pickup: 'Pickup to Destination', totalLoad: '9 ton', driver: 'Bathreesh', netIncome: '9000 rs' },
//     ]},
//   ];

//   return (
//     <div className="bg-white shadow-md rounded-lg p-6">
//       <h2 className="text-xl font-bold mb-4">Total Trucks Owned: {trucks.length}</h2>
//       {trucks.map((truck) => (
//         <div key={truck.id} className="mb-6">
//           <h3 className="text-lg font-semibold mb-2">Truck {truck.id}: {truck.type}</h3>
//           {truck.loads.map((load, index) => (
//             <div key={index} className="bg-gray-100 p-4 rounded mb-2">
//               <p className="font-semibold">{load.pickup}</p>
//               <p className="text-sm text-gray-600">Total load: {load.totalLoad}</p>
//               <p className="text-sm text-gray-600">Driver: {load.driver}</p>
//               <p className="text-sm text-gray-600">Net Income: {load.netIncome}</p>
//             </div>
//           ))}
//         </div>
//       ))}
//     </div>
//   );
// };

// export default RecordMaintenance;

// import React from 'react';

// const RecordMaintenance = () => {
//   const trucks = [
//     { id: 1, type: 'Container', loads: [
//       { pickup: 'Pickup to Destination', totalLoad: '9 ton', driver: 'Rajesh', netIncome: '9000 rs' },
//       { pickup: 'Pickup to Destination', totalLoad: '8 ton', driver: 'Ramesh', netIncome: '8000' },
//       { pickup: 'Pickup to Destination', totalLoad: '9 ton', driver: 'Bathreesh', netIncome: '9000 rs' },
//     ]},
//     { id: 2, type: 'Container', loads: [
//       { pickup: 'Pickup to Destination', totalLoad: '9 ton', driver: 'Rajesh', netIncome: '7000 rs' },
//       { pickup: 'Pickup to Destination', totalLoad: '8 ton', driver: 'Ramesh', netIncome: '6000 rs' },
//       { pickup: 'Pickup to Destination', totalLoad: '9 ton', driver: 'Bathreesh', netIncome: '8000 rs' },
//     ]},
//     { id: 3, type: 'Container', loads: [
//       { pickup: 'Pickup to Destination', totalLoad: '9 ton', driver: 'Rajesh', netIncome: '9000 rs' },
//       { pickup: 'Pickup to Destination', totalLoad: '8 ton', driver: 'Ramesh', netIncome: '9000 rs' },
//       { pickup: 'Pickup to Destination', totalLoad: '9 ton', driver: 'Bathreesh', netIncome: '9000 rs' },
//     ]},
//   ];

//   return (
//     <div className="bg-white shadow-md rounded-lg p-6">
//       <h2 className="text-xl font-bold mb-4">Total Trucks Owned: {trucks.length}</h2>
//       {trucks.map((truck) => (
//         <div key={truck.id} className="mb-6">
//           <h3 className="text-lg font-semibold mb-2">Truck {truck.id}: {truck.type}</h3>
//           {truck.loads.map((load, index) => (
//             <div key={index} className="bg-gray-100 p-4 rounded mb-2">
//               <p className="font-semibold">{load.pickup}</p>
//               <p className="text-sm text-gray-600">Total load: {load.totalLoad}</p>
//               <p className="text-sm text-gray-600">Driver: {load.driver}</p>
//               <p className="text-sm text-gray-600">Net Income: {load.netIncome}</p>
//             </div>
//           ))}
//         </div>
//       ))}
//     </div>
//   );
// };

// export default RecordMaintenance;

import React from 'react';
import { Truck, Package, User, DollarSign } from 'lucide-react';

const RecordMaintenance = () => {
  const trucks = [
    { id: 1, type: 'Container', loads: [
      { pickup: 'Pickup to Destination', totalLoad: '9 ton', driver: 'Rajesh', netIncome: '9000 rs' },
      { pickup: 'Pickup to Destination', totalLoad: '8 ton', driver: 'Ramesh', netIncome: '8000' },
      { pickup: 'Pickup to Destination', totalLoad: '9 ton', driver: 'Bathreesh', netIncome: '9000 rs' },
    ]},
    { id: 2, type: 'Container', loads: [
      { pickup: 'Pickup to Destination', totalLoad: '9 ton', driver: 'Rajesh', netIncome: '7000 rs' },
      { pickup: 'Pickup to Destination', totalLoad: '8 ton', driver: 'Ramesh', netIncome: '6000 rs' },
      { pickup: 'Pickup to Destination', totalLoad: '9 ton', driver: 'Bathreesh', netIncome: '8000 rs' },
    ]},
    { id: 3, type: 'Container', loads: [
      { pickup: 'Pickup to Destination', totalLoad: '9 ton', driver: 'Rajesh', netIncome: '9000 rs' },
      { pickup: 'Pickup to Destination', totalLoad: '8 ton', driver: 'Ramesh', netIncome: '9000 rs' },
      { pickup: 'Pickup to Destination', totalLoad: '9 ton', driver: 'Bathreesh', netIncome: '9000 rs' },
    ]},
  ];

  return (
    <div className="bg-gray-100 min-h-screen p-8">
      <h2 className="text-3xl font-bold mb-8 text-indigo-700">Truck Maintenance Records</h2>
      <div className="bg-white shadow-lg rounded-lg p-6 mb-8">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-xl font-semibold text-gray-800">Total Trucks Owned</h3>
          <span className="text-2xl font-bold text-indigo-600">{trucks.length}</span>
        </div>
      </div>
      {trucks.map((truck) => (
        <div key={truck.id} className="bg-white shadow-lg rounded-lg p-6 mb-8">
          <div className="flex items-center mb-4">
            <Truck className="text-indigo-600 mr-2" size={24} />
            <h3 className="text-xl font-semibold text-gray-800">Truck {truck.id}: {truck.type}</h3>
          </div>
          <div className="space-y-4">
            {truck.loads.map((load, index) => (
              <div key={index} className="bg-gray-50 p-4 rounded-lg flex flex-wrap items-center justify-between">
                <div className="flex items-center mb-2 sm:mb-0">
                  <Package className="text-indigo-500 mr-2" size={20} />
                  <p className="font-semibold text-gray-700">{load.pickup}</p>
                </div>
                <div className="flex items-center mb-2 sm:mb-0">
                  <User className="text-indigo-500 mr-2" size={20} />
                  <p className="text-sm text-gray-600">Driver: {load.driver}</p>
                </div>
                <div className="flex items-center mb-2 sm:mb-0">
                  <Package className="text-indigo-500 mr-2" size={20} />
                  <p className="text-sm text-gray-600">Load: {load.totalLoad}</p>
                </div>
                <div className="flex items-center">
                  <DollarSign className="text-indigo-500 mr-2" size={20} />
                  <p className="text-sm font-semibold text-indigo-600">Income: {load.netIncome}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default RecordMaintenance;