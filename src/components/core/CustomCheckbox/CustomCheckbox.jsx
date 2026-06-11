import React, { useState } from "react";
import PropTypes from "prop-types";

const CustomCheckbox = ({
  label,
  fieldName,
  requireSelectAll,
  requireSelectAllLabel,
  options,
  selectedOptions = [],
  onChange,
  isHorizontal = false,
  requireAtLeastOne = false,
  validationType,
  validationErrorMessage,
}) => {
  const [error, setError] = useState("");
  const [preSelectedOptions, setPreSelectedOptions] =
    useState(selectedOptions);

  const updateOptions = (newOptions) => {
    setPreSelectedOptions(newOptions);

    if (requireAtLeastOne && validationType) {
      const validationError = validationType(newOptions);
      setError(validationError);
    }

    onChange(fieldName, newOptions);
  };

  const handleCheckboxChange = (option) => {
    setError("");

    const isSelected = preSelectedOptions.some(
      (item) => item.id === option.id
    );

    const updatedOptions = isSelected
      ? preSelectedOptions.filter((item) => item.id !== option.id)
      : [...preSelectedOptions, option];

    updateOptions(updatedOptions);
  };

  const handleSelectAll = () => {
    const allSelected =
      options.length > 0 &&
      options.every((option) =>
        preSelectedOptions.some((item) => item.id === option.id)
      );

    updateOptions(allSelected ? [] : [...options]);
  };

  const checkboxBaseClass =
    "h-4 w-4 rounded border-gray-300 text-blue-600 focus:ring-0";

  return (
    <div className={isHorizontal ? "mb-0" : "mb-3"}>
      {label && (
        <label className="block mb-2 font-medium text-gray-700">
          {label}
          {requireAtLeastOne && (
            <span className="text-red-500 ml-1">*</span>
          )}
        </label>
      )}

      <div
        className={`flex ${
          isHorizontal ? "flex-row gap-4 flex-wrap" : "flex-col gap-2"
        }`}
      >
        {requireSelectAll && (
          <label className="flex items-center gap-2 cursor-pointer">
            <input
              type="checkbox"
              className={checkboxBaseClass}
              checked={
                options.length > 0 &&
                options.every((option) =>
                  preSelectedOptions.some(
                    (item) => item.id === option.id
                  )
                )
              }
              onChange={handleSelectAll}
            />
            <span className="text-sm text-gray-700">
              {requireSelectAllLabel}
            </span>
          </label>
        )}

        {options.map((option) => (
          <label
            key={option.id}
            className="flex items-center gap-2 cursor-pointer"
          >
            <input
              type="checkbox"
              className={`${checkboxBaseClass} ${
                error ? "border-red-500" : ""
              }`}
              checked={preSelectedOptions.some(
                (item) => item.id === option.id
              )}
              onChange={() => handleCheckboxChange(option)}
            />
            <span className="text-sm text-gray-700">
              {option.label}
            </span>
          </label>
        ))}
      </div>

      {(error || validationErrorMessage) && (
        <p className="mt-1 text-sm text-red-500">
          {error || validationErrorMessage}
        </p>
      )}
    </div>
  );
};

CustomCheckbox.propTypes = {
  options: PropTypes.array.isRequired, // Pass an array of options with 'id', 'label', and 'isChecked' properties
  onChange: PropTypes.func.isRequired,
  selectedOptions: PropTypes.array,
  isHorizontal: PropTypes.bool,
  requireAtLeastOne: PropTypes.bool,
};

export default CustomCheckbox;

// // checkboxes usage
// const [selectedCheckboxOptions, setSelectedCheckboxOptions] = useState([
//   {
//     id: 1,
//     label: "Sun",
//   },
//   {
//     id: 2,
//     label: "Mon",
//   },
// ]);
// const [checkBoxOptions, setCheckBoxOptions] = useState([
//   { id: 1, label: "Sun" },
//   { id: 2, label: "Mon" },
//   { id: 3, label: "Tue" },
//   { id: 4, label: "Wed" },
//   { id: 5, label: "Thr" },
//   { id: 6, label: "Fri" },
//   { id: 7, label: "Sat" },
// ]);
// const handleCheckboxChange = (fieldName, updatedOptions) => {
//   setSelectedCheckboxOptions(updatedOptions);
//   handleInputChange(fieldName, selectedDropDownOptions);
// };
// <CustomCheckbox
//   label='Occurs'
//   fieldName='occurs'
//   requireSelectAll={false}
//   requireSelectAllLabel='All Days'
//   options={checkBoxOptions}
//   selectedOptions={selectedCheckboxOptions}
//   onChange={handleCheckboxChange}
//   isHorizontal={true}
//   requireAtLeastOne={true}
//   validationType={validateAtLeastOneCheck}
//   validationErrorMessage={formErrors["occurs"]}
// />;
// const handleInputChange = (fieldName, value) => {
//   setFormData((prevData) => ({ ...prevData, [fieldName]: value }));
//   setFormErrors({}); // Reset all form errors when any input changes
// };
