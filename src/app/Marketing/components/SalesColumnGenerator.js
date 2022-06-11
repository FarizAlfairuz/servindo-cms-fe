import React from 'react';
import toRupiah from '../../../helpers/toRupiah';

const useSaleColumnGenerator = () => {
  const column = React.useMemo(
    () => [
      {
        Header: 'Date',
        accessor: 'date',
      },
      {
        Header: 'Customer',
        accessor: 'customer.name',
      },
      {
        Header: 'Item',
        accessor: 'item.name',
      },
      {
        Header: 'Tax',
        accessor: 'tax',
        Cell: (props) => {
          const { row } = props;

          return `${row.original.tax}%`;
        },
      },
      {
        Header: 'QTY',
        accessor: 'totalQuantity',
      },
      {
        Header: 'Gross',
        accessor: 'gross',
        Cell: (props) => {
          const { row } = props;

          return toRupiah(row.original.gross);
        },
      },
      {
        Header: 'Discount',
        accessor: 'discount',
        Cell: (props) => {
          const { row } = props;

          return toRupiah(row.original.discount);
        },
      },
      {
        Header: 'Net Sales',
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

export default useSaleColumnGenerator;
