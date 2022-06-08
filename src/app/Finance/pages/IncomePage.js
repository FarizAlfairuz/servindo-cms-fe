import React from 'react';
import Tabs from '../../Common/components/Tab/Tabs';
import IncomeTable from '../components/IncomeTable';

const IncomePage = () => {
  const tabList = [{ tabTitle: 'Purchases', tabChildren: <IncomeTable /> }];

  return (
    <div className="space-y-4">
      <div>
        <h3 className="text-xl font-bold">Incomes</h3>
      </div>
      <Tabs tabList={tabList} />
    </div>
  );
};

export default IncomePage;
