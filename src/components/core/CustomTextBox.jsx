import React, { useState, forwardRef } from 'react';
import { FaEye, FaEyeSlash } from 'react-icons/fa';

const CustomTextBox = forwardRef(({
  label,
  required,
  name,
  type = 'text',
  direction = 'column',
  size = 'md',
  value,
  onChange,
  error,
  helperText,
  autoComplete = 'off',
  disabled = false,
  ...inputProps
}, ref) => {
  const [showPassword, setShowPassword] = useState(false);

  const sizeClasses = {
    sm: 'h-8 text-sm',
    md: 'h-10 text-base',
    lg: 'h-12 text-lg'
  };

  return (
    <div className={`flex ${direction === 'row' ? 'flex-row items-center gap-3' : 'flex-col gap-1'}`}>
      
      {label && (
        <label
          htmlFor={name}
          className="text-sm font-medium text-gray-700"
        >
          {label}
          {required && <span className="text-red-500 ml-1">*</span>}
        </label>
      )}

      <div className="relative w-full">
        <input
          id={name}
          name={name}
          ref={ref}
          type={type === 'password' ? (showPassword ? 'text' : 'password') : type}
          value={value}
          onChange={onChange}
          autoComplete={autoComplete}
          disabled={disabled}
          className={`
            w-full rounded-md border px-3 pr-10
            ${sizeClasses[size]}
            ${error ? 'border-red-500 focus:ring-red-500' : 'border-gray-300 focus:ring-blue-500'}
            focus:outline-none focus:ring-2
            disabled:bg-gray-100 disabled:cursor-not-allowed
          `}
          {...inputProps}
        />

        {type === 'password' && (
          <button
            type="button"
            onClick={() => setShowPassword(!showPassword)}
            disabled={disabled}
            className="absolute inset-y-0 right-2 flex items-center text-gray-500 hover:text-gray-700"
          >
            {showPassword ? <FaEyeSlash /> : <FaEye />}
          </button>
        )}
      </div>

      {helperText && (
        <p className="text-sm text-red-500 mt-1">
          {helperText}
        </p>
      )}
    </div>
  );
});

export default CustomTextBox;
