import React from 'react';
import Table from '../../Common/components/Table/Table';
import useCustomerColumnGenerator from '../components/CustomerColumnGenerator';

const CustomerPage = () => {
  const { column, data } = useCustomerColumnGenerator();

  return (
    <div>
      <div>
        <h3 className="text-xl font-bold">Data Customer</h3>
      </div>
      <Table columns={column} data={data} />
    </div>
  );
};

export default CustomerPage;
