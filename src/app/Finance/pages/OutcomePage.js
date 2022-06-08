import React from 'react';
import Tabs from '../../Common/components/Tab/Tabs';
import PurchasingTable from '../../Purchasing/components/PurchasingTable';
import OperationalTable from '../components/OperationalTable';
import TaxTable from '../components/TaxTable';

const OutcomePage = () => {
  const tabList = [
    { tabTitle: 'Purchases', tabChildren: <PurchasingTable /> },
    { tabTitle: 'Operational', tabChildren: <OperationalTable /> },
    { tabTitle: 'Tax', tabChildren: <TaxTable /> },
  ];

  return (
    <div className="space-y-4">
      <div>
        <h3 className="text-xl font-bold">Outcomes</h3>
      </div>
      <Tabs tabList={tabList} />
    </div>
  );
};

export default OutcomePage;
