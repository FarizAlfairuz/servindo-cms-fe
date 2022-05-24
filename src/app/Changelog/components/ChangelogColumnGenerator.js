import React from 'react';
import { getTime } from '../../../helpers/getTime';
import toFirstLetterCapitalize from '../../../helpers/toFirstLetterCapitalize';

const useChangelogColumnGenerator = () => {
  const column = React.useMemo(
    () => [
      {
        Header: 'Date',
        accessor: 'date',
        Cell: (props) => {
          const { row } = props;
          const time = row.original.createdAt;

          return getTime(time, 'date');
        },
      },
      {
        Header: 'Time',
        accessor: 'time',
        Cell: (props) => {
          const { row } = props;
          const time = row.original.createdAt;
          return getTime(time, 'time');
        },
      },
      {
        Header: 'Username',
        accessor: 'changedBy.username',
      },
      {
        Header: 'Role',
        accessor: 'changedBy.role',
        Cell: (props) => {
          const { row } = props;
          return toFirstLetterCapitalize(row.original.changedBy.role);
        },
      },
      {
        Header: 'Description',
        accessor: 'description',
      },
    ],
    []
  );
  return { column };
};

export default useChangelogColumnGenerator;
