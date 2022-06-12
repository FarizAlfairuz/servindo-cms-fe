import React from 'react';
import BackButton from '../../../Common/components/Buttons/BackButton';
import Tabs from '../../../Common/components/Tab/Tabs';
import SellsItemForm from '../../components/Tabs/SellsItemForm';
import LeaseItemForm from '../../components/Tabs/LeaseItemForm';
import ServiceItemForm from '../../components/Tabs/ServiceItemForm';

const CreateSalesPage = () => {
  const tabList = [
    {
      tabTitle: 'Sell Item',
      tabChildren: <SellsItemForm />,
      searchParams: 'sell-item',
    },
    {
      tabTitle: 'Lease Item',
      tabChildren: <LeaseItemForm />,
      searchParams: 'lease-item',
    },
    {
      tabTitle: 'Service Item',
      tabChildren: <ServiceItemForm />,
      searchParams: 'service-item',
    },
  ];

  return (
    <div className="space-y-4">
      <BackButton />
      <div className="flex justify-between mb-5">
        <h3 className="text-xl font-bold">Create New Data</h3>
      </div>

      <Tabs tabList={tabList} />
    </div>
  );
};

export default CreateSalesPage;
