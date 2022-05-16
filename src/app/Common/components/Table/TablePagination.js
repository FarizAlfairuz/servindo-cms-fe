import React, { useEffect, useState } from 'react';
import {
  ChevronDoubleLeftIcon,
  ChevronDoubleRightIcon,
  ChevronLeftIcon,
  ChevronRightIcon,
} from '@heroicons/react/solid';

const TablePagination = (props) => {
  const { currentPage, setCurrentPage, hasNext, hasPrev, totalPage } = props;
  const [canNextPage, setCanNextPage] = useState(true);
  const [canPreviousPage, setCanPreviousPage] = useState(false);

  const onNextPage = () => setCurrentPage(currentPage + 1);
  const onPrevPage = () => setCurrentPage(currentPage - 1);
  const onPageSelect = (selectedPage) => setCurrentPage(selectedPage);

  useEffect(() => {
    if (hasNext) setCanNextPage(true);
    else setCanNextPage(false);
    if (hasPrev) setCanPreviousPage(true);
    else setCanPreviousPage(false);
  }, [hasNext, hasPrev]);

  return (
    totalPage > 1 && (
      <div className="flex justify-between px-6 py-4">
        <div>
          Page{' '}
          <em>
            {currentPage} of {totalPage}
          </em>
        </div>
        <div className="flex items-center space-x-1">
          <button
            type="button"
            onClick={() => {
              onPageSelect(1);
            }}
            disabled={!canPreviousPage}
            className="bg-cyan-700 hover:bg-cyan-600 disabled:bg-slate-400 p-1 rounded"
          >
            <ChevronDoubleLeftIcon className="w-6 h-6 text-white" />
          </button>
          <button
            type="button"
            onClick={() => onPrevPage()}
            disabled={!canPreviousPage}
            className="bg-cyan-700 hover:bg-cyan-600 disabled:bg-slate-400 p-1 rounded"
          >
            <ChevronLeftIcon className="w-6 h-6 text-white" />
          </button>
          <input
            type="number"
            className="w-10 border-2 border-cyan-700 text-center text-lg pl-3 rounded"
            value={currentPage}
            min={1}
            max={totalPage}
            onChange={(e) => onPageSelect(parseInt(e.target.value, 10))}
          />
          <button
            type="button"
            onClick={() => onNextPage()}
            disabled={!canNextPage}
            className="bg-cyan-700 hover:bg-cyan-600 disabled:bg-slate-400 p-1 rounded"
          >
            <ChevronRightIcon className="w-6 h-6 text-white" />
          </button>
          <button
            type="button"
            onClick={() => {
              onPageSelect(totalPage);
            }}
            disabled={!canNextPage}
            className="bg-cyan-700 hover:bg-cyan-600 disabled:bg-slate-400 p-1 rounded"
          >
            <ChevronDoubleRightIcon className="w-6 h-6 text-white" />
          </button>
        </div>
      </div>
    )
  );
};

export default React.memo(TablePagination);
