import React, { useCallback, useEffect } from 'react';
import SearchBar from '../../Common/components/Search/SearchBar';
import Table from '../../Common/components/Table/Table';
import TablePagination from '../../Common/components/Table/TablePagination';
import TableSize from '../../Common/components/Table/TableSize';
import usePagination from '../../Common/hooks/usePagination';
import { useGetAllPurchases } from '../hooks/useFetchPurchases';
import usePurchaseColumnGenerator from './PurchaseColumnGenerator';

const PurchasingTable = () => {
  const { column } = usePurchaseColumnGenerator();

  const {
    currentPage,
    setCurrentPage,
    pageSize,
    setPageSize,
    query,
    setQuery,
  } = usePagination();

  const { purchases, pagination, loading } = useGetAllPurchases(query);

  const searchCallbackHandler = useCallback((data) => {
    setQuery({
      search: data,
    });
  });

  useEffect(() => {
    if (purchases.length > 10) {
      setQuery({
        ...query,
        limit: pageSize,
        page: currentPage,
      });
    }
  }, [purchases]);

  return (
    <div className="space-y-4 mt-6">
      <div className="flex items-center justify-between py-2">
        <TableSize pageSize={pageSize} setPageSize={setPageSize} />
        <SearchBar onChange={searchCallbackHandler} />
      </div>
      <div className="overflow-x-auto">
        <Table data={purchases} columns={column} loading={loading} />
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

export default PurchasingTable;
