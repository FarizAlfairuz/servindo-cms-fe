import React from 'react';
import Table from '../../Common/components/Table';
import useUserColumnGenerator from '../components/UserColumnGenerator';

const UserPage = () => {
  const { column, data } = useUserColumnGenerator();

  return (
    <div>
      <div>
        <h3 className="text-xl font-bold">Data Pengguna</h3>
      </div>
      <Table columns={column} data={data} />
    </div>
  );
};

export default UserPage;
