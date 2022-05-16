import React from 'react';
import Table from '../../Common/components/Table/Table';
import useCustomerColumnGenerator from '../../Marketing/components/CustomerColumnGenerator';

const VendorPage = () => {
  const { column, data } = useCustomerColumnGenerator();

  return (
    <div>
      <div>
        <h3 className="text-xl font-bold">Data Vendor</h3>
      </div>
      <Table columns={column} data={data} />
    </div>
  );
};

export default VendorPage;
