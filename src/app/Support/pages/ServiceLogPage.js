import React from 'react';
import Table from '../../Common/components/Table';
import useServiceLogColumnGenerator from '../components/ServiceLogColumnGenerator';

const ServiceLogPage = () => {
  const { column, data } = useServiceLogColumnGenerator();

  return (
    <div>
      <div>
        <h3 className="text-xl font-bold">Riwayat Service</h3>
      </div>
      <Table columns={column} data={data} />
    </div>
  );
};

export default ServiceLogPage;
