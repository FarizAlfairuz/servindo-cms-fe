import React from 'react';
import { Link } from 'react-router-dom';

const Button = (props) => {
  const { submit, children, to, onClick } = props;

  return to ? (
    <Link to={to}>
      <button
        type="button"
        onClick={onClick}
        className="bg-cyan-800 hover:bg-cyan-700 px-4 p-2 text-white font-bold rounded-md w-full"
      >
        {children}
      </button>
    </Link>
  ) : (
    <button
      type={submit ? 'submit' : 'button'}
      onClick={onClick}
      className="bg-cyan-800 hover:bg-cyan-700 px-4 p-2 text-white font-bold rounded-md w-full"
    >
      {children}
    </button>
  );
};

export default React.memo(Button);
