import React from 'react';
import MOCK_DATA_USER from '../../../api/mock_data/MOCK_DATA_USER.json';

const useUserColumnGenerator = () => {
  const data = React.useMemo(() => MOCK_DATA_USER, []);

  const column = React.useMemo(
    () => [
      {
        Header: 'Username',
        accessor: 'username',
      },
      {
        Header: 'Role',
        accessor: 'role',
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

export default useUserColumnGenerator;
