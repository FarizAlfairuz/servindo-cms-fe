import React from 'react';
import { Link } from 'react-router-dom';
import toFirstLetterCapitalize from '../../../helpers/toFirstLetterCapitalize';
import toRupiah from '../../../helpers/toRupiah';

const useIncomeColumnGenerator = () => {
  const column = React.useMemo(
    () => [
      {
        Header: 'Invoice',
        accessor: 'invoice',
        Cell: (props) => {
          const { row } = props;

          return (
            <div className="flex justify-center">
              <Link
                to={`/dashboard/print/${row.original.invoice}`}
                className="hover:cursor-pointer inline-flex space-x-1 items-center hover:text-cyan-700"
              >
                <div className="text-sm underline">{row.original.invoice}</div>
              </Link>
            </div>
          );
        },
      },
      {
        Header: 'Date',
        accessor: 'date',
      },
      {
        Header: 'Type',
        accessor: 'type',
        Cell: (props) => {
          const { row } = props;
          return toFirstLetterCapitalize(row.original.type);
        },
      },
      {
        Header: 'QTY',
        accessor: 'quantity',
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
        Header: 'Gross',
        accessor: 'gross',
        Cell: (props) => {
          const { row } = props;

          return toRupiah(row.original.gross);
        },
      },
    ],
    []
  );
  return { column };
};

export default useIncomeColumnGenerator;
