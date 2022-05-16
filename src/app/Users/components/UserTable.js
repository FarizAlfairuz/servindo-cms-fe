import React, { useEffect } from 'react';
import usePagination from '../../../hooks/usePagination';
import Table from '../../Common/components/Table/Table';
import TablePagination from '../../Common/components/Table/TablePagination';
import TableSize from '../../Common/components/Table/TableSize';
import useFetchUsers from '../hooks/useFetchUsers';
import useUserColumnGenerator from './UserColumnGenerator';

const UserTable = () => {
  const { column } = useUserColumnGenerator();
  const { currentPage, setCurrentPage, pageSize, setPageSize } =
    usePagination();

  const query = {
    limit: pageSize,
    page: currentPage,
  };

  const { users, pagination } = useFetchUsers(query);
  console.log(users);

  return (
    <div className="space-y-4">
      <TableSize pageSize={pageSize} setPageSize={setPageSize} />
      <Table data={users} columns={column} />
      <TablePagination
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
        hasNext={pagination.hasNext}
        hasPrev={pagination.hasPrev}
        totalPage={pagination.totalPages}
      />
    </div>
  );
};

export default UserTable;
