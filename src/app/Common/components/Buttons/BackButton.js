import { ArrowSmLeftIcon } from '@heroicons/react/solid';
import React from 'react';
import { useHistory } from 'react-router-dom';

const BackButton = () => {
  const history = useHistory();

  return (
    <button type="button" onClick={history.goBack} className="inline-block">
      <div className="flex hover:text-cyan-700 hover:cursor-pointer">
        <ArrowSmLeftIcon className="w-5 h-5" />
        <div className="text-sm font-bold">Back</div>
      </div>
    </button>
  );
};

export default BackButton;
