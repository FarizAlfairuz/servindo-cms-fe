import React from 'react';
import Button from '../../Common/components/Buttons/Button';
import VendorTable from '../components/VendorTable';

const VendorPage = () => (
  <div>
    <div className="flex items-center justify-between mb-5">
      <h3 className="text-2xl font-bold align-middle">Vendor List</h3>
      <Button to="/dashboard/vendor/create">Create New Vendor</Button>
    </div>
    <VendorTable />
  </div>
);

export default VendorPage;
