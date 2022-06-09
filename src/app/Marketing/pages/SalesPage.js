import React from 'react';
import Button from '../../Common/components/Buttons/Button';
import Tabs from '../../Common/components/Tab/Tabs';
import LeasesTable from '../components/LeaseTable';
import SalesTable from '../components/SalesTable';
import ServiceTable from '../components/ServiceTable';

const SalesPage = () => {
  const tabList = [
    { tabTitle: 'Item Sales', tabChildren: <SalesTable /> },
    { tabTitle: 'Item Leases', tabChildren: <LeasesTable /> },
    { tabTitle: 'Item Services', tabChildren: <ServiceTable /> },
  ];
  return (
    <div>
      <div className="flex items-center justify-between mb-5">
        <h3 className="text-2xl font-bold align-middle">Sales</h3>
        <Button to="/dashboard/sales/create">Create New Data</Button>
      </div>
      <Tabs tabList={tabList} />
    </div>
  );
};

export default SalesPage;
