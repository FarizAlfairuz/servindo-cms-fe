import React from 'react';
import Button from '../../Common/components/Buttons/Button';
import Tabs from '../../Common/components/Tab/Tabs';
import IncomeTable from '../components/IncomeTable';
import OtherIncomeTable from '../components/OtherIncomeTable';

const IncomePage = () => {
  const tabList = [
    { tabTitle: 'Sales', tabChildren: <IncomeTable /> },
    { tabTitle: 'Other Income', tabChildren: <OtherIncomeTable /> },
  ];

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between mb-5">
        <h3 className="text-2xl font-bold align-middle">Incomes</h3>
        <Button to="/dashboard/other-incomes/create">Add Other Income</Button>
      </div>
      <Tabs tabList={tabList} />
    </div>
  );
};

export default IncomePage;
