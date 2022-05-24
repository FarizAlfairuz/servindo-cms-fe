import React, { useCallback, useEffect } from 'react';
import SearchBar from '../../Common/components/Search/SearchBar';
import Table from '../../Common/components/Table/Table';
import TablePagination from '../../Common/components/Table/TablePagination';
import TableSize from '../../Common/components/Table/TableSize';
import usePagination from '../../Common/hooks/usePagination';
import { useGetChangelog } from '../hooks/useFetchChangelog';
import useChangelogColumnGenerator from './ChangelogColumnGenerator';

const ChangelogTable = () => {
  const { column } = useChangelogColumnGenerator();

  const {
    currentPage,
    setCurrentPage,
    pageSize,
    setPageSize,
    query,
    setQuery,
  } = usePagination();

  const { changelog, pagination, loading } = useGetChangelog(query);

  const searchCallbackHandler = useCallback((data) => {
    setQuery({
      search: data,
    });
  });

  useEffect(() => {
    if (changelog.length > 10) {
      setQuery({
        ...query,
        limit: pageSize,
        page: currentPage,
      });
    }
  }, [changelog]);

  return (
    <div className="space-y-4 mt-6 overflow-x-auto">
      <div className="flex items-center justify-between py-2">
        <TableSize pageSize={pageSize} setPageSize={setPageSize} />
        <SearchBar onChange={searchCallbackHandler} />
      </div>
      <Table data={changelog} columns={column} loading={loading} />
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

export default ChangelogTable;
