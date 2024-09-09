import React,{useState} from 'react';
// import { Route, Routes } from 'react-router-dom';
import Sidebar from './Sidebar';
import IndividualOwner from './IndividualOwner';
import FindLoads from './FindLoads';
import Trucks from './Trucks';
import RecordMaintenance from './RecordMaintenance';
import ExpenseManagement from './ExpenseManagement';
import OwnerProfile from './OwnerProfile';

const IndividualOwnerApp = () => {
  const [currentPage, setCurrentPage] = useState('individualOwner');

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };
  return (
      <div className="flex h-screen bg-gray-100">
        <Sidebar onPageChange={handlePageChange} />
        <div className="flex-1 overflow-auto p-4">
          {currentPage === 'individualOwner' && <IndividualOwner onPageChange={handlePageChange} />}
          {currentPage === 'findLoads' && <FindLoads />}
          {currentPage === 'trucks' && <Trucks />}
          {currentPage === 'recordMaintenance' && <RecordMaintenance />}
          {currentPage === 'expenseManagement' && <ExpenseManagement />}
          {currentPage === 'ownerProfile' && <OwnerProfile />}
        </div>
      </div>
  );
};

export default IndividualOwnerApp;