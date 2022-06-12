import { ArrowRightIcon } from '@heroicons/react/solid';
import React from 'react';
import { Link } from 'react-router-dom';

const NotFoundPage = () => (
  <div className="w-full h-screen flex justify-center items-center">
    <div className="flex justify-center items-center space-x-6">
      <div className="px-6 py-4 border-r-2">
        <h3 className="text-8xl font-extrabold text-cyan-800">404</h3>
      </div>
      <div className="space-y-3">
        <div className="space-y-1">
          <h2 className="text-4xl font-extrabold text-gray-800">
            Page not found
          </h2>
          <h3 className="text-xl font-semibold text-gray-800">
            Please check the URL in the address bar and try again
          </h3>
        </div>
        <div>
          <Link
            to="/"
            className="flex space-x-2 items-center text-cyan-800 hover:text-cyan-700 hover:underline"
          >
            <div className="font-bold">Go Back to Dashboard</div>
            <ArrowRightIcon className="w-5 h-5 " />
          </Link>
        </div>
      </div>
    </div>
  </div>
);

export default NotFoundPage;
