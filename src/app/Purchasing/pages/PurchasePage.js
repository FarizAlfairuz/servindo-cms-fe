import React from 'react';
import Table from '../../Common/components/Table';
import useOutcomeColumnGenerator from '../../Finance/components/OutcomeColumnGenerator';

const PurchasePage = () => {
  const { column, data } = useOutcomeColumnGenerator();

  return (
    <div>
      <div>
        <h3 className="text-xl font-bold">Data Pembelian</h3>
      </div>
      <Table columns={column} data={data} />
    </div>
  );
};

export default PurchasePage;
