import React from 'react';
import MOCK_DATA_JURNAL from '../../../api/mock_data/MOCK_DATA_JURNAL.json';

const useBalanceColumnGenerator = () => {
  const data = React.useMemo(() => MOCK_DATA_JURNAL, []);

  const column = React.useMemo(
    () => [
      {
        Header: 'Bulan',
        accessor: 'bulan',
      },
      {
        Header: 'Gross Sale',
        accessor: 'gross',
      },
      {
        Header: 'Net Sale',
        accessor: 'net_sale',
      },
      {
        Header: 'Net Profit',
        accessor: 'net_profit',
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

export default useBalanceColumnGenerator;
