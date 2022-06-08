import React from 'react';
import { getTime } from '../../../helpers/getTime';
import toRupiah from '../../../helpers/toRupiah';

const useOtherIncomeColumnGenerator = () => {
  const column = React.useMemo(
    () => [
      {
        Header: 'Date',
        accessor: 'date',
        Cell: (props) => {
          const { row } = props;

          return getTime(row.original.date, 'date');
        },
      },
      {
        Header: 'Description',
        accessor: 'description',
      },
      {
        Header: 'Total',
        accessor: 'total',
        Cell: (props) => {
          const { row } = props;

          return toRupiah(row.original.total);
        },
      },
    ],
    []
  );
  return { column };
};

export default useOtherIncomeColumnGenerator;
