import React from 'react';

const CustomCheckboxField = React.forwardRef(({
  // label,
  name,
  options = [],
  value = [],
  onChange,
  error,
  errorMessage,
  disabled = false,
  ...checkboxProps
}, ref) => {
  const handleChange = (e) => {
    const { value: checkboxValue, checked } = e.target;
    let newValue;
    if (checked) {
      newValue = [...value, checkboxValue];
    } else {
      newValue = value.filter(v => v !== checkboxValue);
    }
    onChange({ target: { name, value: newValue } });
  };

  return (
    <div className="flex flex-col gap-1" ref={ref}>
      {/* Optional label */}
      {/* {label && <label className="text-gray-700 font-medium">{label}</label>} */}

      <div className="flex flex-wrap gap-2 items-start">
        {options.map((option, index) => (
          <label key={index} className="flex items-center gap-2">
            <input
              type="checkbox"
              id={`${name}-${index}`}
              name={name}
              value={option.value}
              checked={value.includes(option.value)}
              onChange={handleChange}
              disabled={disabled}
              {...checkboxProps}
              className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
            />
            <span className={`${disabled ? 'text-gray-400' : 'text-gray-700'}`}>
              {option.label}
            </span>
          </label>
        ))}
      </div>

      {error && (
        <p className="text-red-500 text-sm mt-1">
          {errorMessage}
        </p>
      )}
    </div>
  );
});

export default CustomCheckboxField;
