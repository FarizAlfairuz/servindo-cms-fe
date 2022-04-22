import React from 'react';
import { Link } from 'react-router-dom';

const Button = (props) => {
  const { submit, children, to, onClick } = props;

  return (
    <Link to={to && to}>
      <button
        type={submit ? 'button' : 'submit'}
        onClick={onClick}
        className="bg-green-700 hover:bg-green-600 px-4 p-2 text-white font-bold rounded-md"
      >
        {children}
      </button>
    </Link>
  );
};

export default Button;
