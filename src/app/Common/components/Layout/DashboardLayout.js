import React, { useState, useCallback, useEffect } from 'react';
import Navbar from './Navbar';
import Header from './Header';
import useWindowDimensions from '../../hooks/useWindowDimensions';

const DashboardLayout = ({ children, role }) => {
  const { width } = useWindowDimensions();
  const [isOpen, setIsOpen] = useState(true);

  const toggleSidebar = useCallback(() => {
    setIsOpen(!isOpen);
  });
  useEffect(() => {
    if (width < 1112) {
      setIsOpen(false);
    } else {
      setIsOpen(true);
    }
  }, [width]);

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
