import React from 'react';

const Sidebar = ({ onPageChange }) => {
  return (
    <div className="w-64 bg-white shadow-md flex flex-col ">
      <div className="p-4 border-b" onClick={() => onPageChange('logisticsProfile')}> 
        <div className="w-20 h-20 bg-gray-300 rounded-full mx-auto mb-2 cursor-pointer"
          onClick={() => onPageChange('driverProfile')}></div>
        <p className="text-center font-semibold">Name</p>
        <p className="text-center text-sm text-gray-500">Logistic Company</p>
      </div>
      <nav className="flex-1">
        <button
          onClick={() => onPageChange('findDrivers')}
          className="w-full py-2 px-4 text-left hover:bg-gray-100"
        >
          Find Driver
        </button>
        <button
          onClick={() => onPageChange('addLoads')}
          className="w-full py-2 px-4 text-left hover:bg-gray-100"
        > 
          Add Load
        </button>
        <button
          onClick={() => onPageChange('uploadedLoads')}
          className="w-full py-2 px-4 text-left hover:bg-gray-100"
        >
          Uploaded Load
        </button>
        <button
          onClick={() => onPageChange('truck')}
          className="w-full py-2 px-4 text-left hover:bg-gray-100"
        >
          Trucks
        </button>
        <button
          onClick={() => onPageChange('recordMaintenance')}
          className="w-full py-2 px-4 text-left hover:bg-gray-100"
        >
          Record Maintainance
        </button>
        <button
          onClick={() => onPageChange('expenseManagement')}
          className="w-full py-2 px-4 text-left hover:bg-gray-100"
        >
          Expense Management
        </button>
      </nav>
      <button className="w-full py-2 px-4 text-left hover:bg-gray-100 border-t">
        Log out
      </button>
    </div>
  );
};

export default Sidebar;