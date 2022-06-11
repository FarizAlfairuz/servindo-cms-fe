import React from 'react';
import { getMonthName } from '../../../helpers/getMonthName';
import toRupiah from '../../../helpers/toRupiah';

const useTotalColumnGenerator = () => {
  const column = React.useMemo(
    () => [
      {
        Header: 'Month',
        accessor: 'month',
        Cell: (props) => {
          const { row } = props;

          return getMonthName(row.original.month);
        },
        Footer: 'Total',
      },
      {
        Header: 'Debit',
        accessor: 'debit',
        Cell: (props) => {
          const { row } = props;

          return toRupiah(row.original.debit);
        },
        Footer: (props) => {
          const { data } = props;

          let debitSum = 0;

          data.forEach((dt) => {
            debitSum += dt.debit;
          });

          return toRupiah(debitSum);
        },
      },
      {
        Header: 'Credit',
        accessor: 'credit',
        Cell: (props) => {
          const { row } = props;

          return toRupiah(row.original.credit);
        },
        Footer: (props) => {
          const { data } = props;

          let creditSum = 0;

          data.forEach((dt) => {
            creditSum += dt.credit;
          });

          return toRupiah(creditSum);
        },
      },
    ],
    []
  );
  return { column };
};

export default useTotalColumnGenerator;
