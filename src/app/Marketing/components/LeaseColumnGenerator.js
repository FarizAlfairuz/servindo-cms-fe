import React from 'react';
import toRupiah from '../../../helpers/toRupiah';

const useSaleColumnGenerator = () => {
  const column = React.useMemo(
    () => [
      {
        Header: 'Date',
        accessor: 'paymentDate',
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
        Header: 'Description',
        accessor: 'description',
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
        accessor: 'quantity',
      },
      {
        Header: 'Price',
        accessor: 'price',
        Cell: (props) => {
          const { row } = props;

          return toRupiah(row.original.price);
        },
      },
      {
        Header: 'Gross',
        accessor: 'gross',
        Cell: (props) => {
          const { row } = props;

          return toRupiah(row.original.gross);
        },
      },
    ],
    []
  );
  return { column };
};

export default useSaleColumnGenerator;
