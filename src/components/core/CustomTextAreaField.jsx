import React from "react";

const CustomTextAreaField = React.forwardRef(({
  label,
  required,
  name,
  value,
  onChange,
  error,
  helperText,
  autoComplete = "off",
  disabled = false,
  rows = 2,
  direction = "column",
  size = "md",
  ...inputProps
}, ref) => {

  const sizeClasses = {
    sm: "text-sm px-2 py-1",
    md: "text-base px-3 py-2",
    lg: "text-lg px-4 py-3",
  };

  return (
    <div
      className={`flex ${
        direction === "row" ? "flex-row items-center gap-2" : "flex-col gap-1"
      }`}
    >
      {label && (
        <label
          htmlFor={name}
          className="text-sm font-medium text-gray-700"
        >
          {label} {required && <span className="text-red-500">*</span>}
        </label>
      )}

      <textarea
        id={name}
        name={name}
        rows={rows}
        value={value}
        onChange={onChange}
        autoComplete={autoComplete}
        disabled={disabled}
        ref={ref}
        className={`
          w-full rounded-md border 
          ${sizeClasses[size] || sizeClasses.md}
          ${error ? "border-red-500 focus:ring-red-500" : "border-gray-300 focus:ring-blue-500"}
          ${disabled ? "bg-gray-100 cursor-not-allowed" : "bg-white"}
          focus:outline-none focus:ring-2
        `}
        {...inputProps}
      />

      {helperText && (
        <p className="text-sm text-red-500 mt-1">
          {helperText}
        </p>
      )}
    </div>
  );
});

export default CustomTextAreaField;
