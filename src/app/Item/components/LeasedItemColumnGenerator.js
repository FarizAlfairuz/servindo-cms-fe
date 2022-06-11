import React from 'react';

const useLeasedItemColumnGenerator = () => {
  const column = React.useMemo(
    () => [
      {
        Header: 'Serial Number',
        accessor: 'serialNumber',
      },
      {
        Header: 'Customer',
        accessor: 'customer.name',
      },
      {
        Header: 'Name',
        accessor: 'name',
      },
    ],
    []
  );

  return { column };
};

export default useLeasedItemColumnGenerator;
