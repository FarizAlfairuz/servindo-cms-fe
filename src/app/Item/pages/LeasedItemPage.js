import React from 'react';
import LeasedItemTable from '../components/LeasedItemTable';

const LeasedItemPage = () => (
  <div>
    <div className="flex items-center justify-between mb-5">
      <h3 className="text-2xl font-bold align-middle">Leased Items</h3>
    </div>
    <LeasedItemTable />
  </div>
);

export default LeasedItemPage;
