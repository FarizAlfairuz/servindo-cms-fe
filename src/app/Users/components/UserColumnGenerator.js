import React from 'react';
import { Link } from 'react-router-dom';
import { PencilAltIcon } from '@heroicons/react/solid';
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
              className="hover:cursor-pointer inline-flex space-x-1 items-center hover:text-green-700"
            >
              <PencilAltIcon className="w-4 h-4" />
              <div className="font-bold">Ubah</div>
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
