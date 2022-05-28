import React from 'react';
import { Link } from 'react-router-dom';
import { PencilAltIcon } from '@heroicons/react/solid';
import toFirstLetterCapitalize from '../../../helpers/toFirstLetterCapitalize';

const useUserColumnGenerator = () => {
  const column = React.useMemo(
    () => [
      {
        Header: 'Username',
        accessor: 'username',
      },
      {
        Header: 'Role',
        accessor: 'role',
        Cell: (props) => {
          const { row } = props;
          return toFirstLetterCapitalize(row.original.role);
        },
      },
      {
        Header: 'Action',
        Cell: (props) => {
          const { row } = props;

          return (
            <div className="flex justify-center">
              <Link
                to={`/dashboard/users/${row.original.id}`}
                className="hover:cursor-pointer inline-flex space-x-1 items-center hover:text-cyan-700"
              >
                <PencilAltIcon className="w-4 h-4" />
                <div className="font-bold text-sm">Edit</div>
              </Link>
            </div>
          );
        },
      },
    ],
    []
  );

  return { column };
};

export default useUserColumnGenerator;
