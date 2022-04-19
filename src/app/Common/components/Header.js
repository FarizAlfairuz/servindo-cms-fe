import { LogoutIcon } from '@heroicons/react/outline';
import React from 'react';
import { useDispatch } from 'react-redux';
import { fetchAuthRequest } from '../../../redux';

const Header = () => {
  const dispatch = useDispatch();

  const logoutCallback = React.useCallback(() => {
    dispatch(fetchAuthRequest());
  }, [dispatch]);

  return (
    <div className="bg-green-600 h-12 flex justify-end items-center px-6 py-4 shadow-lg sticky top-0 z-50">
      <div className="flex space-x-2">
        <div className="text-white font-bold">username</div>
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
