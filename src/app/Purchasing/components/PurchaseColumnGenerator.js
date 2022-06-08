import React from 'react';
import toRupiah from '../../../helpers/toRupiah';

const usePurchaseColumnGenerator = () => {
  const column = React.useMemo(
    () => [
      {
        Header: 'Date',
        accessor: 'date',
      },
      {
        Header: 'Vendor',
        accessor: 'vendor.name',
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
        Header: 'COGS',
        accessor: 'item.cogs',
        Cell: (props) => {
          const { row } = props;

          return toRupiah(row.original.item.cogs);
        },
      },
      {
        Header: 'Price',
        accessor: 'item.price',
        Cell: (props) => {
          const { row } = props;

          return toRupiah(row.original.item.price);
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

export default usePurchaseColumnGenerator;
