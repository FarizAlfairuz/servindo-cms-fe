import React, { useCallback, useEffect } from 'react';
import usePagination from '../../Common/hooks/usePagination';
import Table from '../../Common/components/Table/Table';
import TablePagination from '../../Common/components/Table/TablePagination';
import TableSize from '../../Common/components/Table/TableSize';
import { useGetAllUsers } from '../hooks/useFetchUsers';
import useUserColumnGenerator from './UserColumnGenerator';
import SearchBar from '../../Common/components/Search/SearchBar';

const UserTable = () => {
  const { column } = useUserColumnGenerator();

  const {
    currentPage,
    setCurrentPage,
    pageSize,
    setPageSize,
    query,
    setQuery,
  } = usePagination();

  const { users, pagination, loading } = useGetAllUsers(query);

  const searchCallbackHandler = useCallback((data) => {
    setQuery({
      search: data,
    });
  });

  useEffect(() => {
    if (users.length > 10) {
      setQuery({
        ...query,
        limit: pageSize,
        page: currentPage,
      });
    }
  }, [users]);

  return (
    <div className="space-y-4 mt-6">
      <div className="flex items-center justify-between py-2">
        <TableSize pageSize={pageSize} setPageSize={setPageSize} />
        <SearchBar onChange={searchCallbackHandler} />
      </div>
      <div className="overflow-x-auto">
        <Table data={users} columns={column} loading={loading} />
        <TablePagination
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
          hasNext={pagination.hasNext}
          hasPrev={pagination.hasPrev}
          totalPage={pagination.totalPages}
        />
      </div>
    </div>
  );
};

export default UserTable;
