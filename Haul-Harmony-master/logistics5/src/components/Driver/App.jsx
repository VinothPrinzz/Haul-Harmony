import React,{useState} from 'react';
// import { Route, Routes } from 'react-router-dom';
import Sidebar from './Sidebar';
import DriverProfile from './DriverProfile';
import TruckList from './TruckList';
import OwnerLoadProfile from './OwnerLoadProfile';

const DriverApp = () => {
  const [currentPage, setCurrentPage] = useState('main');
  const [selectedTruck, setSelectedTruck] = useState(null);

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const handleTruckSelect = (truck) => {
    setSelectedTruck(truck);    setCurrentPage('ownerLoadProfile');
  };
  return (
    <div className="flex h-screen bg-gray-100">
      <Sidebar onPageChange={handlePageChange} />
      <div className="flex-1 overflow-auto p-4">
        {currentPage === 'main' && (
          <TruckList onTruckSelect={handleTruckSelect} /> 
        )}
        {currentPage === 'driverProfile' && <DriverProfile />}
        {currentPage === 'ownerLoadProfile' && <OwnerLoadProfile truck={selectedTruck} />}
      </div>
    </div>
  );
};

export default DriverApp;