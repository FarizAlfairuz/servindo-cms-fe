import React from 'react';
import { getMonthName } from '../../../helpers/getMonthName';
import toRupiah from '../../../helpers/toRupiah';

const useBalanceColumnGenerator = () => {
  const column = React.useMemo(
    () => [
      {
        Header: 'Month',
        accessor: 'month',
        Cell: (props) => {
          const { row } = props;

          return getMonthName(row.original.month);
        },
      },
      {
        Header: 'Gross Sale',
        accessor: 'gross',
        Cell: (props) => {
          const { row } = props;

          return toRupiah(row.original.gross);
        },
      },
      {
        Header: 'Net Sale',
        accessor: 'netSales',
        Cell: (props) => {
          const { row } = props;

          return toRupiah(row.original.netSales);
        },
      },
      {
        Header: 'Net Profit',
        accessor: 'netProfit',
        Cell: (props) => {
          const { row } = props;

          return toRupiah(row.original.netProfit);
        },
      },
    ],
    []
  );
  return { column };
};

export default useBalanceColumnGenerator;
