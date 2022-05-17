import React from 'react';
import Button from '../../Common/components/Buttons/Button';
import UserTable from '../components/UserTable';

const UserPage = () => (
  <div>
    <div className="flex justify-between mb-5">
      <h3 className="text-xl font-bold">User List</h3>
      <Button to="/dashboard/user/create">Create New User</Button>
    </div>
    <UserTable />
  </div>
);

export default UserPage;
