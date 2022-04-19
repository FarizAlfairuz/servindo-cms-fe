import React from 'react';
import MOCK_DATA_CUSTOMER from '../../../api/mock_data/MOCK_DATA_CUSTOMER.json';

const useVendorColumnGenerator = () => {
  const data = React.useMemo(() => MOCK_DATA_CUSTOMER, []);

  const column = React.useMemo(
    () => [
      {
        Header: 'Nama',
        accessor: 'nama',
      },
      {
        Header: 'Alamat',
        accessor: 'alamat',
      },
      {
        Header: 'Contact Person',
        accessor: 'cp',
      },
      {
        Header: 'Nomor Telepon',
        accessor: 'telp',
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

export default useVendorColumnGenerator;
