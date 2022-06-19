import React from 'react';
import toFirstLetterCapitalize from '../../../helpers/toFirstLetterCapitalize';
import toRupiah from '../../../helpers/toRupiah';

const useItemColumnGenerator = () => {
  const column = React.useMemo(
    () => [
      {
        Header: 'Name',
        accessor: 'name',
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
        Header: 'Stock',
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
    ],
    []
  );

  return { column };
};

export default useItemColumnGenerator;
