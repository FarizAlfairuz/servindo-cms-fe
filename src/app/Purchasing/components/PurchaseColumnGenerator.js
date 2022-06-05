import React from 'react';

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
        Cell: (props) => {
          const { row } = props;
          const qty = row.original.totalQuantity.toLocaleString();

          return qty;
        },
      },
      {
        Header: 'COGS (IDR)',
        accessor: 'item.cogs',
        Cell: (props) => {
          const { row } = props;
          const cogs = row.original.item.cogs.toLocaleString();

          return cogs;
        },
      },
      {
        Header: 'Price (IDR)',
        accessor: 'item.price',
        Cell: (props) => {
          const { row } = props;
          const price = row.original.item.price.toLocaleString();

          return price;
        },
      },
      {
        Header: 'Gross (IDR)',
        accessor: 'gross',
        Cell: (props) => {
          const { row } = props;
          const gross = row.original.gross.toLocaleString();

          return gross;
        },
      },
    ],
    []
  );
  return { column };
};

export default usePurchaseColumnGenerator;
