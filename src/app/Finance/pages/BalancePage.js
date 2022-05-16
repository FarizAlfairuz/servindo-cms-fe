import React from 'react';
import Table from '../../Common/components/Table/Table';
import useBalanceColumnGenerator from '../components/BalanceColumnGenerator';

const BalancePage = () => {
  const { column, data } = useBalanceColumnGenerator();

  return (
    <div>
      <div>
        <h3 className="text-xl font-bold">Neraca</h3>
      </div>
      <Table columns={column} data={data} />
    </div>
  );
};

export default BalancePage;
