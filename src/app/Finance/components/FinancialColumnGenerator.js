import React from 'react';
import toRupiah from '../../../helpers/toRupiah';

const useFinancialColumnGenerator = () => {
  const column = React.useMemo(
    () => [
      {
        Header: 'Date',
        accessor: 'date',
      },
      {
        Header: 'Type',
        accessor: 'type',
      },
      {
        Header: 'Description',
        accessor: 'description',
      },
      {
        Header: 'Debit',
        accessor: 'debit',
        Cell: (props) => {
          const { row } = props;

          return toRupiah(row.original.debit);
        },
      },
      {
        Header: 'Credit',
        accessor: 'credit',
        Cell: (props) => {
          const { row } = props;

          return toRupiah(row.original.credit);
        },
      },
    ],
    []
  );
  return { column };
};

export default useFinancialColumnGenerator;
