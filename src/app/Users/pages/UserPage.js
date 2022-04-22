import React from 'react';
import Button from '../../Common/components/Buttons/Button';
import Table from '../../Common/components/Table';
import useUserColumnGenerator from '../components/UserColumnGenerator';

const UserPage = () => {
  const { column, data } = useUserColumnGenerator();

  return (
    <div>
      <div className="flex justify-between mb-5">
        <h3 className="text-xl font-bold">Data Pengguna</h3>
        <Button to="/dashboard/user/create">Tambah Data User</Button>
      </div>
      <Table columns={column} data={data} />
    </div>
  );
};

export default UserPage;
