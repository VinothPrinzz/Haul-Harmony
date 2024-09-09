// import React from 'react';

// const Sidebar = ({ onPageChange }) => {
//   return (
//     <div className="w-64 bg-white shadow-md flex flex-col " onClick={() => onTruckSelect()}>
//       <div className="p-4 border-b" onClick={() => onPageChange('ownerProfile')}> 
//         <div className="w-20 h-20 bg-gray-300 rounded-full mx-auto mb-2 cursor-pointer"
//           onClick={() => onPageChange('driverProfile')}></div>
//         <p className="text-center font-semibold">Name</p>
//         <p className="text-center text-sm text-gray-500">Individual Owner</p>
//       </div>
//       <nav className="flex-1">
//         <button
//           onClick={() => onPageChange('individualOwner')}
//           className="w-full py-2 px-4 text-left hover:bg-gray-100"
//         >
//           Find Driver
//         </button>
//         <button
//           onClick={() => onPageChange('findLoads')}
//           className="w-full py-2 px-4 text-left hover:bg-gray-100"
//         >
//           Find Load
//         </button>
//         <button
//           onClick={() => onPageChange('trucks')}
//           className="w-full py-2 px-4 text-left hover:bg-gray-100"
//         >
//           Trucks
//         </button>
//         <button
//           onClick={() => onPageChange('recordMaintenance')}
//           className="w-full py-2 px-4 text-left hover:bg-gray-100"
//         >
//           Record Maintainance
//         </button>
//         <button
//           onClick={() => onPageChange('expenseManagement')}
//           className="w-full py-2 px-4 text-left hover:bg-gray-100"
//         >
//           Expense Management
//         </button>
//       </nav>
//       <button className="w-full py-2 px-4 text-left hover:bg-gray-100 border-t">
//         Log out
//       </button>
//     </div>
//   );
// };

// export default Sidebar;

import React from 'react';
import { Home, Search, Truck, Wrench, DollarSign, User, LogOut } from 'lucide-react';

const Sidebar = ({ onPageChange, currentPage }) => {
  const menuItems = [
    { name: 'individualOwner', label: 'Dashboard', icon: Home },
    { name: 'findLoads', label: 'Find Loads', icon: Search },
    { name: 'trucks', label: 'Trucks', icon: Truck },
    { name: 'recordMaintenance', label: 'Maintenance', icon: Wrench },
    { name: 'expenseManagement', label: 'Expenses', icon: DollarSign },
    { name: 'ownerProfile', label: 'Profile', icon: User },
  ];

  return (
    <aside className="w-64 bg-indigo-700 text-white">
      <div className="p-6">
        <h2 className="text-2xl font-bold">TruckOwner</h2>
      </div>
      <nav className="mt-6">
        {menuItems.map((item) => (
          <button
            key={item.name}
            onClick={() => onPageChange(item.name)}
            className={`w-full flex items-center px-6 py-3 text-left hover:bg-indigo-600 transition-colors ${
              currentPage === item.name ? 'bg-indigo-800' : ''
            }`}
          >
            <item.icon className="mr-4" size={20} />
            {item.label}
          </button>
        ))}
      </nav>
      <div className="absolute bottom-0 w-64 p-6">
        <button className="w-full flex items-center px-6 py-3 text-left hover:bg-indigo-600 transition-colors">
          <LogOut className="mr-4" size={20} />
          Log out
        </button>
      </div>
    </aside>
  );
};

export default Sidebar;