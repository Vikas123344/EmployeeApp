import React from 'react';

const CustomSelectField = React.forwardRef(({
  label,
  required,
  name,
  value,
  onChange,
  options,
  error,
  errorMessage,
  disabled = false,
  ...selectProps
}, ref) => {
  return (
    <div className="flex flex-col gap-2">
      <select
        id={name}
        name={name}
        value={value}
        onChange={onChange}
        disabled={disabled}
        ref={ref}
        className={`w-full rounded-md border px-3 py-2 text-sm focus:outline-none focus:ring-2
          ${error
            ? 'border-red-500 focus:ring-red-500'
            : 'border-gray-300 focus:ring-blue-500'}
          ${disabled ? 'bg-gray-100 cursor-not-allowed' : 'bg-white'}
        `}
        {...selectProps}
      >
        <option value="" disabled>
          Select an option
        </option>

        {options.map((option, index) => (
          <option key={index} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>

      {error && (
        <p className="text-sm text-red-500">
          {errorMessage}
        </p>
      )}
    </div>
  );
});

export default CustomSelectField;
