import React from 'react';
import Button from '../../Common/components/Buttons/Button';
import PurchasingTable from '../components/PurchasingTable';

const PurchasePage = () => {
  const a = 0;
  return (
    <div className="overflow-x-auto">
      <div className="flex items-center justify-between mb-5">
        <h3 className="text-2xl font-bold align-middle">Purchase List</h3>
        <Button to="/dashboard/purchase/create">Purchase New Item</Button>
      </div>
      <PurchasingTable />
    </div>
  );
};

export default PurchasePage;
