import React from 'react';
import ItemTable from '../components/ItemTable';

const ItemPage = () => (
  <div>
    <div className="flex items-center justify-between mb-5">
      <h3 className="text-2xl font-bold align-middle">Item Stock</h3>
    </div>
    <ItemTable />
  </div>
);

export default ItemPage;
