import React from 'react';
import { Link } from 'react-router-dom';
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
        Cell: (props) => {
          const { row } = props;
          return (
            <Link
              to={`/dashboard/user/${row.original.id}`}
              className="hover:cursor-pointer"
            >
              Aksi
            </Link>
          );
        },
      },
    ],
    []
  );

  return { column, data };
};

export default useUserColumnGenerator;
