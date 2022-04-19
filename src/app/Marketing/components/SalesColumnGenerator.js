import React from 'react';
import MOCK_DATA_SALES from '../../../api/mock_data/MOCK_DATA_SALES.json';

const useSalesColumnGenerator = () => {
  const data = React.useMemo(() => MOCK_DATA_SALES, []);

  const column = React.useMemo(
    () => [
      {
        Header: 'No Invoice',
        accessor: 'invoice',
      },
      {
        Header: 'Tanggal',
        accessor: 'tanggal',
      },
      {
        Header: 'Customer',
        accessor: 'customer',
      },
      {
        Header: 'Nama Unit',
        accessor: 'unit',
      },
      {
        Header: 'QTY',
        accessor: 'quantity',
      },
      {
        Header: 'Harga',
        accessor: 'harga',
      },
      {
        Header: 'Gross',
        accessor: 'gross',
      },
      {
        Header: 'Aksi',
        Cell: () => <div>Aksi</div>,
      },
    ],
    []
  );
  return { column, data };
};

export default useSalesColumnGenerator;
