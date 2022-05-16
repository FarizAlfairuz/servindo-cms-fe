import React from 'react';
import Table from '../../Common/components/Table/Table';
import useOutcomeColumnGenerator from '../components/OutcomeColumnGenerator';

const OutcomePage = () => {
  const { column, data } = useOutcomeColumnGenerator();
  return (
    <div>
      <div>
        <h3 className="text-xl font-bold">Data Pengeluaran</h3>
      </div>
      <Table columns={column} data={data} />
    </div>
  );
};

export default OutcomePage;
