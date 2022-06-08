import { PencilAltIcon } from '@heroicons/react/solid';
import React from 'react';
import { Link } from 'react-router-dom';
import { getTime } from '../../../helpers/getTime';
import toRupiah from '../../../helpers/toRupiah';

const useTaxColumnGenerator = () => {
  const column = React.useMemo(
    () => [
      {
        Header: 'Date',
        accessor: 'date',
        Cell: (props) => {
          const { row } = props;

          return getTime(row.original.date, 'date');
        },
      },
      {
        Header: 'Description',
        accessor: 'description',
      },
      {
        Header: 'Total',
        accessor: 'total',
        Cell: (props) => {
          const { row } = props;

          return toRupiah(row.original.total);
        },
      },
      {
        Header: 'Action',
        Cell: (props) => {
          const { row } = props;

          return (
            <div className="flex justify-center">
              <Link
                to={`/dashboard/tax/${row.original.id}`}
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

export default useTaxColumnGenerator;
