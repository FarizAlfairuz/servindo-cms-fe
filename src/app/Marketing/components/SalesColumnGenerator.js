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
        Header: 'Unit',
        accessor: 'item.name',
      },
      {
        Header: 'QTY',
        accessor: 'totalQuantity',
      },
      {
        Header: 'Gross (IDR)',
        accessor: 'gross',
        Cell: (props) => {
          const { row } = props;

          return toRupiah(row.original.gross);
        },
      },
      {
        Header: 'Discount (IDR)',
        accessor: 'discount',
        Cell: (props) => {
          const { row } = props;

          return toRupiah(row.original.discount);
        },
      },
      {
        Header: 'Net Sales (IDR)',
        accessor: 'netSales',
        Cell: (props) => {
          const { row } = props;

          return toRupiah(row.original.netSales);
        },
      },
      {
        Header: 'Net Profit (IDR)',
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
