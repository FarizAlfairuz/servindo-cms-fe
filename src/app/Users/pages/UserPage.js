import React from 'react';
import Button from '../../Common/components/Buttons/Button';
import UserTable from '../components/UserTable';

const UserPage = () => (
  <div>
    <div className="flex items-center justify-between mb-5">
      <h3 className="text-2xl font-bold align-middle">User List</h3>
      <Button to="/dashboard/users/create">Create New User</Button>
    </div>
    <UserTable />
  </div>
);

export default UserPage;
