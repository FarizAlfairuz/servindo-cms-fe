import React from 'react';
import MOCK_DATA_SERVICE from '../../../api/mock_data/MOCK_DATA_SERVICE.json';

const useServiceLogColumnGenerator = () => {
  const data = React.useMemo(() => MOCK_DATA_SERVICE, []);

  const column = React.useMemo(
    () => [
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
        Header: 'No Seri',
        accessor: 'no_seri',
      },
      {
        Header: 'Deskripsi',
        accessor: 'deskripsi',
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

export default useServiceLogColumnGenerator;
