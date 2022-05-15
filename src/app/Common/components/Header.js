import { LogoutIcon } from '@heroicons/react/outline';
import { MenuIcon } from '@heroicons/react/solid';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { logout } from '../../../redux';

const Header = (props) => {
  const { toggleSidebar } = props;
  const username = useSelector(
    (state) => state.authReducer.currentUser.data.username
  );

  const dispatch = useDispatch();

  const logoutCallback = React.useCallback(() => {
    dispatch(logout());
  }, [dispatch]);

  return (
    <div className="bg-gray-900 h-12 flex justify-between items-center px-3 py-4 shadow-lg sticky top-0 z-50">
      <button type="button" onClick={toggleSidebar}>
        <MenuIcon className="w-8 h-8 text-white" />
      </button>
      <div className="flex space-x-2">
        <div className="text-white font-bold">{username}</div>
        <button
          type="button"
          className="flex items-center hover:cursor-pointer"
          onClick={logoutCallback}
        >
          <LogoutIcon className="w-5 h-5 text-white" />
        </button>
      </div>
    </div>
  );
};

export default Header;
