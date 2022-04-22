import React from 'react';

const InputForm = (props) => {
  const { label } = props;

  return (
    <div className="space-y-2">
      {label && <div className="text-sm">{label}</div>}
      <input
        type="text"
        className="w-full border-2 border-slate-300 px-2 py-1 rounded-md"
      />
    </div>
  );
};

export default InputForm;
