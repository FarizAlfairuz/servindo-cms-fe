import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { PencilAltIcon } from '@heroicons/react/solid';
import { useDispatch, useSelector } from 'react-redux';
import { getAllUsers } from '../../../redux/actions/userActions';

const useUserColumnGenerator = () => {
  // const dispatch = useDispatch();

  // const query = {
  //   limit: 5,
  // };

  // useEffect(() => {
  //   dispatch(getAllUsers(query));
  // }, []);

  // const users = useSelector((state) => state.userReducer.users);

  // const data = users && users.edge ? users.edge : [];

  const column = React.useMemo(
    () => [
      {
        Header: 'Username',
        accessor: 'username',
      },
      {
        Header: 'Role',
        accessor: 'role',
      },
      {
        Header: 'Action',
        Cell: (props) => {
          const { row } = props;
          return (
            <div className="flex justify-center">
              <Link
                to={`/dashboard/user/${row.original.id}`}
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

export default useUserColumnGenerator;
