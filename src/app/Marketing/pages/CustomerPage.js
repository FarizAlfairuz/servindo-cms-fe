import React from 'react';
import Button from '../../Common/components/Buttons/Button';
import CustomerTable from '../components/CustomerTable';

const CustomerPage = () => (
  <div>
    <div className="flex items-center justify-between mb-5">
      <h3 className="text-2xl font-bold align-middle">Customer List</h3>
      <Button to="/dashboard/customer/create">Create New Customer</Button>
    </div>
    <CustomerTable />
  </div>
);

export default CustomerPage;
