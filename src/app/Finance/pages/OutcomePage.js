import React from 'react';
import Button from '../../Common/components/Buttons/Button';
import Tabs from '../../Common/components/Tab/Tabs';
import PurchasingTable from '../../Purchasing/components/PurchasingTable';
import OperationalTable from '../components/OperationalTable';
import TaxTable from '../components/TaxTable';

const OutcomePage = () => {
  const tabList = [
    {
      tabTitle: 'Purchases',
      tabChildren: <PurchasingTable />,
      searchParams: 'purchases',
    },
    {
      tabTitle: 'Operational',
      tabChildren: <OperationalTable />,
      searchParams: 'operational',
    },
    { tabTitle: 'Tax', tabChildren: <TaxTable />, searchParams: 'tax' },
  ];

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between mb-5">
        <h3 className="text-2xl font-bold align-middle">Outcomes</h3>
        <div className="space-y-2">
          <Button to="/dashboard/other-outcome/create">
            Add Other Outcomes
          </Button>
        </div>
      </div>
      <Tabs tabList={tabList} />
    </div>
  );
};

export default OutcomePage;
