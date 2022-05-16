import React from 'react';
import Table from '../../Common/components/Table/Table';
import useIncomeColumnGenerator from '../components/IncomeColumnGenerator';

const IncomePage = () => {
  const { column, data } = useIncomeColumnGenerator();

  return (
    <div>
      <div>
        <h3 className="text-xl font-bold">Data Pemasukan</h3>
      </div>
      <Table columns={column} data={data} />
    </div>
  );
};

export default IncomePage;
