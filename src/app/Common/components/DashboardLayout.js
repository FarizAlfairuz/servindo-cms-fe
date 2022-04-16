import React from 'react';
import Navbar from './Navbar';
import Header from './Header';

const DashboardLayout = ({ children, role }) => (
  <div className="w-full min-h-screen">
    <Header />
    <div className="flex h-full">
      <Navbar role={role} />
      <div className="pt-8 pl-72 pr-4 pb-4 bg-gray-50 w-full h-full">
        {children}
      </div>
    </div>
  </div>
);

export default DashboardLayout;
