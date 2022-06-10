import { PencilAltIcon } from '@heroicons/react/solid';
import React from 'react';
import { Link } from 'react-router-dom';
import toRupiah from '../../../helpers/toRupiah';

const useServiceColumnGenerator = () => {
  const column = React.useMemo(
    () => [
      {
        Header: 'Date',
        accessor: 'date',
      },
      {
        Header: 'Customer',
        accessor: 'customer.name',
      },
      {
        Header: 'Description',
        accessor: 'description',
      },
      {
        Header: 'Price',
        accessor: 'price',
        Cell: (props) => {
          const { row } = props;

          return toRupiah(row.original.price);
        },
      },
      {
        Header: 'Action',
        Cell: (props) => {
          const { row } = props;

          return (
            <div className="flex justify-center">
              <Link
                to={`/dashboard/service/${row.original.id}`}
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

export default useServiceColumnGenerator;
