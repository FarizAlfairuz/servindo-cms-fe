import React from 'react';
import Navbar from './Navbar';
import Header from './Header';

const DashboardLayout = ({ children, role }) => {
  const [isOpen, setIsOpen] = React.useState(true);

  const toggleSidebar = React.useCallback(() => {
    setIsOpen(!isOpen);
  });

  return (
    <div className="flex w-full bg-slate-50">
      <Navbar show={isOpen} role={role} />
      <div className="h-full w-full">
        <Header toggleSidebar={toggleSidebar} />
        <div className="px-8 py-6 w-full">{children}</div>
      </div>
    </div>
  );
};

export default React.memo(DashboardLayout);
