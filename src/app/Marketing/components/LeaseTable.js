import React, { useCallback, useEffect } from 'react';
import SearchBar from '../../Common/components/Search/SearchBar';
import Table from '../../Common/components/Table/Table';
import TablePagination from '../../Common/components/Table/TablePagination';
import TableSize from '../../Common/components/Table/TableSize';
import usePagination from '../../Common/hooks/usePagination';
import { useGetAllLeases } from '../hooks/useFetchLeases';
import useLeaseColumnGenerator from './LeaseColumnGenerator';

const LeaseTable = () => {
  const { column, modal } = useLeaseColumnGenerator();

  const {
    currentPage,
    setCurrentPage,
    pageSize,
    setPageSize,
    query,
    setQuery,
  } = usePagination();

  const { leases, pagination, loading } = useGetAllLeases(query);

  const searchCallbackHandler = useCallback((data) => {
    setQuery({
      search: data,
    });
  });

  useEffect(() => {
    if (leases.length > 10) {
      setQuery({
        ...query,
        limit: pageSize,
        page: currentPage,
      });
    }
  }, [leases]);

  return (
    <div className="space-y-4 mt-6">
      <div className="flex items-center justify-between py-2">
        <TableSize pageSize={pageSize} setPageSize={setPageSize} />
        <SearchBar onChange={searchCallbackHandler} />
      </div>
      <div className="overflow-x-auto">
        <Table data={leases} columns={column} loading={loading} />
        <TablePagination
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
          hasNext={pagination.hasNext}
          hasPrev={pagination.hasPrev}
          totalPage={pagination.totalPages}
        />
      </div>
      {modal()}
    </div>
  );
};

export default LeaseTable;
