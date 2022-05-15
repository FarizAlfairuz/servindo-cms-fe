import React from 'react';

const InputForm = (props) => {
  const {
    label,
    placeholder,
    name,
    type,
    disabled,
    register,
    required,
    error,
  } = props;

  return (
    <div className="space-y-1">
      {label && <div className="text-sm">{label}</div>}
      <input
        type={type}
        className={`w-full border-2 ${
          error[name] ? 'border-red-500' : 'border-slate-300'
        } px-2 py-1 rounded-md focus:outline-none`}
        placeholder={placeholder}
        disabled={disabled}
        {...register(name, { required })}
      />
      {error[name] && (
        <div className="text-xs text-red-600 break-words">
          {error[name].message}
        </div>
      )}
    </div>
  );
};

InputForm.defaultProps = {
  type: 'text',
};

export default InputForm;
