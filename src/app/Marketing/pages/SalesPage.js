import React from 'react';
import Button from '../../Common/components/Buttons/Button';
import SalesTable from '../components/SalesTable';

const SalesPage = () => (
  <div>
    <div className="flex items-center justify-between mb-5">
      <h3 className="text-2xl font-bold align-middle">Sales</h3>
      <Button to="/dashboard/sales/create">Create New Data</Button>
    </div>
    <SalesTable />
  </div>
);

export default SalesPage;
