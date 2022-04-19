import React from 'react';
import Navbar from './Navbar';
import Header from './Header';

const DashboardLayout = ({ children, role }) => (
  <div className="flex w-full">
    <Navbar role={role} />
    <div className="h-full w-full">
      <Header />
      {/* pt-8 pl-72 pr-4 pb-4  */}
      <div className="p-5 bg-gray-50 w-full h-full">{children}</div>
    </div>
  </div>
);

export default DashboardLayout;
