import React from 'react';
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
        Header: 'Unit',
        accessor: 'item.name',
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
    ],
    []
  );
  return { column };
};

export default useServiceColumnGenerator;
