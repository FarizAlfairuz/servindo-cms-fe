import React from 'react';
import MOCK_DATA_OUTCOME from '../../../api/mock_data/MOCK_DATA_OUTCOME.json';

const useOutcomeColumnGenerator = () => {
  const data = React.useMemo(() => MOCK_DATA_OUTCOME, []);

  const column = React.useMemo(
    () => [
      {
        Header: 'Tanggal',
        accessor: 'tanggal',
      },
      {
        Header: 'Vendor',
        accessor: 'vendor',
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
        accessor: 'hpp',
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

export default useOutcomeColumnGenerator;
