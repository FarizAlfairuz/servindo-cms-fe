import React from 'react';
import MOCK_DATA_INCOME from '../../../api/mock_data/MOCK_DATA_INCOME.json';

const useJournalColumnGenerator = () => {
  const data = React.useMemo(() => MOCK_DATA_INCOME, []);

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

export default useJournalColumnGenerator;
