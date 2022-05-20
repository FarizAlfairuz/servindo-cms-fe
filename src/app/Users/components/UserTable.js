import React, { useCallback, useState } from 'react';
import { useDispatch } from 'react-redux';
import usePagination from '../../Common/hooks/usePagination';
import Table from '../../Common/components/Table/Table';
import TablePagination from '../../Common/components/Table/TablePagination';
import TableSize from '../../Common/components/Table/TableSize';
import { useGetAllUsers } from '../hooks/useFetchUsers';
import useUserColumnGenerator from './UserColumnGenerator';
import SearchBar from '../../Common/components/Search/SearchBar';
import Example from '../../Common/components/Search/Example';
import { getAllUsers } from '../../../redux/actions/userActions';
import useSearch from '../../Common/hooks/useSearch';

const UserTable = () => {
  const { column } = useUserColumnGenerator();

  const { currentPage, setCurrentPage, pageSize, setPageSize } =
    usePagination();

  const query = {
    limit: pageSize,
    page: currentPage,
  };

  const { search, searchUser } = useSearch();

  const { users, pagination, loading } = useGetAllUsers(query);

  const searchCallbackHandler = useCallback((data) => {
    searchUser(data);
  });

  return (
    <div className="space-y-4 mt-6">
      <div className="flex items-center justify-between py-2">
        <TableSize pageSize={pageSize} setPageSize={setPageSize} />
        {/* <SearchBar /> */}
        <Example
          initialData={users}
          searchCallback={searchCallbackHandler}
          searchedData={search.data}
        />
      </div>
      <Table data={users} columns={column} loading={loading} />
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
