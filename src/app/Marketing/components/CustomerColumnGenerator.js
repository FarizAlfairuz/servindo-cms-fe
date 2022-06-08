import { PencilAltIcon } from '@heroicons/react/solid';
import React from 'react';
import { Link } from 'react-router-dom';

const useCustomerColumnGenerator = () => {
  const column = React.useMemo(
    () => [
      {
        Header: 'Name',
        accessor: 'name',
      },
      {
        Header: 'Address',
        accessor: 'address',
      },
      {
        Header: 'Contact Person',
        accessor: 'cp',
      },
      {
        Header: 'Phone',
        accessor: 'phone',
      },
      {
        Header: 'Action',
        Cell: (props) => {
          const { row } = props;

          return (
            <div className="flex justify-center">
              <Link
                to={`/dashboard/customer/${row.original.id}`}
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

export default useCustomerColumnGenerator;
