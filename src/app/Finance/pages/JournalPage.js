import React from 'react';
import Tabs from '../../Common/components/Tab/Tabs';
import FinancialTable from '../components/FinancialTable';
import TotalTable from '../components/TotalTable';

const JournalPage = () => {
  const tabList = [
    {
      tabTitle: 'Statements',
      tabChildren: <FinancialTable />,
      searchParams: 'statements',
    },
    {
      tabTitle: 'Total',
      tabChildren: <TotalTable />,
      searchParams: 'total',
    },
  ];

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between mb-5">
        <h3 className="text-2xl font-bold align-middle">
          Financial Statements
        </h3>
      </div>
      <Tabs tabList={tabList} />
    </div>
  );
};

export default JournalPage;
