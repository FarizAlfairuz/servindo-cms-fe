import React from 'react';
import BackButton from '../../../Common/components/Buttons/BackButton';
import ItemSaleTab from '../../components/Tabs/ItemSaleTab';

const CreateSalesPage = () => (
  <div className="space-y-4">
    <BackButton />
    <div className="flex justify-between mb-5">
      <h3 className="text-xl font-bold">Sell Item</h3>
    </div>

    <ItemSaleTab />
  </div>
);

export default CreateSalesPage;
