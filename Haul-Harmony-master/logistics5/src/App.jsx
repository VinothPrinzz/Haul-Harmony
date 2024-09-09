import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';

// Driver Components
import DriverApp from './components/Driver/App';
import DriverProfile from './components/Driver/DriverProfile';

// Individual Owner Components
import IndividualOwnerApp from './components/IndividualOwner/App';
import IndividualOwner from './components/IndividualOwner/IndividualOwner';

// Logistics Company Components
import LogisticsCompanyApp from './components/LogisticsCompany/App';
import LogisticsProfile from './components/LogisticsCompany/LogisticsProfile';

// Signup Component
import Signup from './components/Signup';

const App = () => {
  const [userType, setUserType] = useState(null);

  return (
    <Router>
      <Routes>
        <Route path="/signup" element={<Signup setUserType={setUserType} />} />
        <Route 
          path="/driver/*" 
          element={
            userType === 'driver' ? <DriverApp /> : <Navigate to="/signup" />
          } 
        />
        <Route 
          path="/individual-owner/*" 
          element={
            userType === 'individual-owner' ? <IndividualOwnerApp /> : <Navigate to="/signup" />
          } 
        />
        <Route 
          path="/logistics-company/*" 
          element={
            userType === 'logistics-company' ? <LogisticsCompanyApp /> : <Navigate to="/signup" />
          } 
        />
        <Route path="/" element={<Navigate to="/signup" />} />
      </Routes>
    </Router>
  );
};

export default App;