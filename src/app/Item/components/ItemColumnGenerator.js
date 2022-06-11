import React from 'react';
import toFirstLetterCapitalize from '../../../helpers/toFirstLetterCapitalize';

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
      },
    ],
    []
  );

  return { column };
};

export default useItemColumnGenerator;
