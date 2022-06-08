import React, { useCallback, useEffect } from 'react';
import SearchBar from '../../Common/components/Search/SearchBar';
import Table from '../../Common/components/Table/Table';
import TablePagination from '../../Common/components/Table/TablePagination';
import TableSize from '../../Common/components/Table/TableSize';
import usePagination from '../../Common/hooks/usePagination';
import { useGetAllOtherIncomes } from '../hooks/useFetchOtherIncome';
import useOtherIncomeColumnGenerator from './OtherIncomeColumnGenerator';

const OtherIncomeTable = () => {
  const { column } = useOtherIncomeColumnGenerator();

  const {
    currentPage,
    setCurrentPage,
    pageSize,
    setPageSize,
    query,
    setQuery,
  } = usePagination();

  const { otherIncomes, pagination, loading } = useGetAllOtherIncomes(query);

  const searchCallbackHandler = useCallback((data) => {
    setQuery({
      search: data,
    });
  });

  useEffect(() => {
    if (otherIncomes.length > 10) {
      setQuery({
        ...query,
        limit: pageSize,
        page: currentPage,
      });
    }
  }, [otherIncomes]);

  return (
    <div className="space-y-4 mt-6">
      <div className="flex items-center justify-between py-2">
        <TableSize pageSize={pageSize} setPageSize={setPageSize} />
        <SearchBar onChange={searchCallbackHandler} />
      </div>
      <div className="overflow-x-auto">
        <Table data={otherIncomes} columns={column} loading={loading} />
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

export default OtherIncomeTable;
