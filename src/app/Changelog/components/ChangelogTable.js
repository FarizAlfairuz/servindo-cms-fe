import React, { useCallback, useEffect } from 'react';
import { useParams } from 'react-router-dom/cjs/react-router-dom.min';
import SearchBar from '../../Common/components/Search/SearchBar';
import Table from '../../Common/components/Table/Table';
import TablePagination from '../../Common/components/Table/TablePagination';
import TableSize from '../../Common/components/Table/TableSize';
import usePagination from '../../Common/hooks/usePagination';
import { useGetChangelog } from '../hooks/useFetchChangelog';
import useChangelogColumnGenerator from './ChangelogColumnGenerator';

const ChangelogTable = () => {
  const { column } = useChangelogColumnGenerator();
  const { category } = useParams();

  const {
    currentPage,
    setCurrentPage,
    pageSize,
    setPageSize,
    query,
    setQuery,
  } = usePagination();

  useEffect(() => {
    setQuery({
      ...query,
      category,
    });
  }, [category]);

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
    <div className="space-y-4 mt-6 ">
      <div className="flex items-center justify-between py-2">
        <TableSize pageSize={pageSize} setPageSize={setPageSize} />
        <SearchBar onChange={searchCallbackHandler} />
      </div>
      <div className="overflow-x-auto">
        <Table data={changelog} columns={column} loading={loading} />
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

export default ChangelogTable;
