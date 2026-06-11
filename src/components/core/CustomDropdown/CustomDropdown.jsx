import React, { useState, useEffect, useRef } from "react";
import PropTypes from "prop-types";
import "./CustomDropdown.css";

const CustomDropdown = ({
  label,
  fieldName,
  requireSelectAll,
  requireSelectAllLabel,
  requireCheckboxes,
  options,
  selectedOptions,
  onChange,
  placeholder,
  requireAtLeastOne,
  validationType,
  validationErrorMessage,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [preSelectedOptions, setPreSelectedOptions] = useState(selectedOptions);
  const dropdownRef = useRef(null);
  const [error, setError] = useState("");

  useEffect(() => {
    setPreSelectedOptions(selectedOptions);
  }, [selectedOptions]);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const toggleDropdown = () => setIsOpen(!isOpen);

  const handleCheckChange = (option) => {
    setError("");
    const updatedOptions = preSelectedOptions.some(
      (selectedOption) => selectedOption.id === option.id
    )
      ? preSelectedOptions.filter(
          (selectedOption) => selectedOption.id !== option.id
        )
      : [...preSelectedOptions, option];

    setPreSelectedOptions(updatedOptions);

    if (requireAtLeastOne) {
      setError(validationType(updatedOptions));
    }

    onChange(fieldName, updatedOptions);
  };

  const handleSelectAll = () => {
    const allSelected = options.every((option) =>
      preSelectedOptions.some((selectedOption) => selectedOption.id === option.id)
    );
    const updatedOptions = allSelected ? [] : [...options];
    setPreSelectedOptions(updatedOptions);

    if (requireAtLeastOne) {
      setError(validationType(updatedOptions));
    }

    onChange(fieldName, updatedOptions);
  };

  const handleOptionClick = (option) => {
    setError("");
    const updatedOptions = [option];
    setPreSelectedOptions(updatedOptions);

    if (requireAtLeastOne) {
      setError(validationType(updatedOptions));
    }

    onChange(fieldName, updatedOptions);
  };

  const isOptionEqual = (a, b) => JSON.stringify(a) === JSON.stringify(b);

  const singleOptionClassName = (option) =>
    `flex items-center mb-1 p-1 rounded cursor-pointer ${
      !requireCheckboxes && preSelectedOptions.some((o) => isOptionEqual(o, option))
        ? "bg-blue-100 text-blue-800"
        : "hover:bg-gray-100"
    }`;

  return (
    <>
      <div className="relative w-full" ref={dropdownRef}>
        {label && (
          <label className="block text-gray-700 font-medium mb-1">
            {label}
            {requireAtLeastOne && <span className="text-red-500">*</span>}
          </label>
        )}

        <button
          type="button"
          className="w-full border border-gray-300 rounded px-3 py-2 text-left bg-white flex justify-between items-center focus:outline-none focus:ring-2 focus:ring-blue-500"
          onClick={toggleDropdown}
        >
          <span>
            {preSelectedOptions.length > 0
              ? preSelectedOptions.map((option) => option.label).join(", ")
              : placeholder || "Select"}
          </span>
          <svg
            className={`w-4 h-4 ml-2 transform ${isOpen ? "rotate-180" : ""}`}
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
          </svg>
        </button>

        {isOpen && (
          <div className="absolute z-10 w-full mt-1 bg-white border border-gray-300 rounded shadow-lg max-h-60 overflow-auto">
            {requireCheckboxes && requireSelectAll && (
              <div className="flex items-center p-2 border-b">
                <input
                  type="checkbox"
                  id="checkbox-all"
                  className="mr-2 accent-blue-500"
                  checked={
                    options.length > 0 &&
                    options.every((option) =>
                      preSelectedOptions.some((selectedOption) => selectedOption.id === option.id)
                    )
                  }
                  onChange={handleSelectAll}
                />
                <label htmlFor="checkbox-all">{requireSelectAllLabel}</label>
              </div>
            )}

            {options.map((option) => (
              <div
                key={option.id}
                className={singleOptionClassName(option)}
                onClick={!requireCheckboxes ? () => handleOptionClick(option) : undefined}
              >
                {requireCheckboxes && (
                  <input
                    type="checkbox"
                    id={`checkbox-${option.id}`}
                    className="mr-2 accent-blue-500"
                    checked={preSelectedOptions.some((selectedOption) => selectedOption.id === option.id)}
                    onChange={() => handleCheckChange(option)}
                  />
                )}
                <label htmlFor={`checkbox-${option.id}`} className="cursor-pointer">
                  {option.label}
                </label>
              </div>
            ))}
          </div>
        )}
      </div>

      {(error || validationErrorMessage) && (
        <div className="text-red-500 text-sm mt-1">{error || validationErrorMessage}</div>
      )}
    </>
  );
};

CustomDropdown.propTypes = {
  options: PropTypes.array.isRequired,
  onChange: PropTypes.func.isRequired,
  placeholder: PropTypes.string,
  requireAtLeastOne: PropTypes.bool,
  selectedOptions: PropTypes.array,
};

export default CustomDropdown;


// // drop down usage
// const dropdownOptions = [
//   { id: 1, label: "Lane 1" },
//   { id: 2, label: "Lane 2" },
//   { id: 3, label: "Lane 3" },
// ];
// const [selectedDropDownOptions, setSelectedDropDownOptions] = useState([
//   { id: 2, label: "Lane 2" },
// ]);
// const handleDropdownChange = (fieldName, selectedDropDownOptions) => {
//   setSelectedDropDownOptions(selectedDropDownOptions);
//   handleInputChange(fieldName, selectedDropDownOptions);
// };
// <CustomDropdown
//   label='Select Lane'
//   fieldName='lanes'
//   requireSelectAll={false}
//   requireSelectAllLabel='All'
//   requireCheckboxes={false}
//   options={dropdownOptions}
//   selectedOptions={selectedDropDownOptions}
//   onChange={handleDropdownChange}
//   placeholder='Select Lane'
//   requireAtLeastOne={true}
//   validationType={validateAtLeastOneCheck}
//   validationErrorMessage={formErrors["lanes"]}
// />;
// const handleInputChange = (fieldName, value) => {
//   setFormData((prevData) => ({ ...prevData, [fieldName]: value }));
//   setFormErrors({}); // Reset all form errors when any input changes
// };
