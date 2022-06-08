import React from 'react';
import toFirstLetterCapitalize from '../../../helpers/toFirstLetterCapitalize';
import toRupiah from '../../../helpers/toRupiah';

const useIncomeColumnGenerator = () => {
  const column = React.useMemo(
    () => [
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
