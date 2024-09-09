import React, { useState } from 'react';
import Sidebar from './Sidebar';
import UploadedLoads from './UploadedLoads';
import AddLoads from './AddLoads';
import Truck from './Truck';
import RecordMaintenance from './RecordMaintaince';
import ExpenseManagement from './ExpenseManagement';
import FindDriver from './FindDrivers';
import LogisticsProfile from './LogisticsProfile';

const LogisticsCompanyApp = () => {
  const [currentPage, setCurrentPage] = useState('findDriver');
  const [formData, setFormData] = useState({
    truckType: '',
    productType: '',
    loadWeight: '',
    priceQuote: '',
    distance: '',
    pickUpAddress: '',
    destinationAddress: ''
  });
  const [isEditing, setIsEditing] = useState(false);

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const handleEditLoad = () => {
    setFormData({
      truckType: 'Truck Type 1',
      productType: 'Some Product',
      loadWeight: '9',
      priceQuote: '2000',
      distance: '100',
      pickUpAddress: 'Some pickup address',
      destinationAddress: 'Some destination address'
    });
    setIsEditing(true);
    setCurrentPage('addLoads');
  };

  return (
    <div className="flex h-screen bg-gray-100">
      <Sidebar onPageChange={handlePageChange} />
      <div className="flex-1 overflow-auto p-4">
        {currentPage === 'findDrivers' && <FindDriver onPageChange={handlePageChange} />}
        {currentPage === 'uploadedLoads' && <UploadedLoads onEditLoad={handleEditLoad} />}
        {currentPage === 'addLoads' && <AddLoads formData={formData} setFormData={setFormData} isEditing={isEditing} />}
        {currentPage === 'truck' && <Truck />}
        {currentPage === 'recordMaintenance' && <RecordMaintenance />}
        {currentPage === 'expenseManagement' && <ExpenseManagement />}
        {currentPage === 'logisticsProfile' && <LogisticsProfile />}
      </div>
    </div>
  );
};

export default LogisticsCompanyApp;
