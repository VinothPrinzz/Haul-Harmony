import React from 'react';
import { Home, DollarSign, User, LogOut, MapPin } from 'lucide-react';

const DriverSidebar = ({ onPageChange, currentPage }) => {
  const menuItems = [
    { name: 'main', label: 'Find Truck', icon: MapPin },
    { name: 'earnings', label: 'Earnings', icon: DollarSign },
    { name: 'driverProfile', label: 'Profile', icon: User },
  ];

  return (
    <aside className="w-64 bg-indigo-700 text-white flex flex-col h-screen">
      <div className="p-6">
        <h2 className="text-2xl font-bold">TruckDriver</h2>
      </div>
      <div className="px-6 py-4 border-b border-indigo-600">
        <div 
          className="w-20 h-20 bg-indigo-500 rounded-full mx-auto mb-2 cursor-pointer"
          onClick={() => onPageChange('driverProfile')}
        ></div>
        <p className="text-center font-semibold">Name</p>
        <p className="text-center text-sm text-indigo-300">Driver</p>
      </div>
      <nav className="mt-6 flex-1">
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
      <div className="p-6">
        <button className="w-full flex items-center px-6 py-3 text-left hover:bg-indigo-600 transition-colors">
          <LogOut className="mr-4" size={20} />
          Log out
        </button>
      </div>
    </aside>
  );
};

export default DriverSidebar;