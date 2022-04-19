import React from 'react';
import Table from '../../Common/components/Table';
import useSalesColumnGenerator from '../components/SalesColumnGenerator';

const SalesPage = () => {
  const { column, data } = useSalesColumnGenerator();

  return (
    <div>
      <div>
        <h3 className="text-xl font-bold">Data Penjualan</h3>
      </div>
      <Table columns={column} data={data} />
    </div>
  );
};

export default SalesPage;
