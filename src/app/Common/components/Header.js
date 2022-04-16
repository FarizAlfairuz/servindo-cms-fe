import { LogoutIcon } from '@heroicons/react/outline';
import React from 'react';

const Header = () => (
  <div className="bg-green-600 h-12 flex z-0 justify-end items-center px-6 py-4 shadow-lg">
    <div className="flex space-x-2">
      <div className="text-white font-bold">username</div>
      <div className="flex items-center hover:cursor-pointer">
        <LogoutIcon className="w-5 h-5 text-white" />
      </div>
    </div>
  </div>
);

export default Header;
