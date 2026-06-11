import React from 'react';
// import { Form, Stack } from 'react-bootstrap';
import { Controller } from 'react-hook-form';
import CustomTextBox from './CustomTextBox';
import CustomSelectField from './CustomSelectField';
import CustomCheckboxField from './CustomCheckboxField';
import ContactNumberField from './ContactNumberField'; // Import ContactNumberField
import CustomTextAreaField from './CustomTextAreaField';

const CustomInputFields = ({ control, field, errors }) => {
  const {
    name,
    type,
    label,
    placeholder,
    options = [],
    required,
    disabled,
    maxLength,
  } = field;

  // Conditionally render based on field type
  return (
    <div className="mb-4">
      {label && (
  <label className="block mb-1 text-sm font-medium text-gray-700">
        {label}
        {required && <span className='text-red'> *</span>}
      </label>
      )}
      <Controller
        name={name}
        control={control}
        render={({ field: controllerField }) => {
          if (type === 'select') {
            return (
              <CustomSelectField
                label={label}
                name={name}
                value={controllerField.value}
                onChange={controllerField.onChange}
                options={options}
                error={!!errors[name]}
                errorMessage={errors[name]?.message}
                disabled={disabled}
              />
            );
          } else if (type === 'checkbox') {
            return (
              <CustomCheckboxField
                label={label}
                name={name}
                options={options}
                value={controllerField.value}
                onChange={controllerField.onChange}
                error={!!errors[name]}
                errorMessage={errors[name]?.message}
                disabled={disabled}
              />
            );
          } else if (type === 'contactNumber') {
            return (
              <ContactNumberField
                label={label}
                required={required}
                value={controllerField.value}
                onChange={controllerField.onChange}
                error={errors[name]?.message}
                helperText={errors[name]?.message}
                disabled={disabled}
              />
            );
          }  else if (type === 'textarea') {
            return ( 
              <CustomTextAreaField
                // label={label}
                required={required}
                value={controllerField.value}
                onChange={controllerField.onChange}
                error={errors[name]?.message}
                helperText={errors[name]?.message}
                rows={controllerField.rows}
                disabled={disabled} 
                placeholder={placeholder}
              />
            );
          } else {
            return (
              <CustomTextBox
                type={type}
                placeholder={placeholder}
                {...controllerField}
                disabled={disabled}
                maxLength={maxLength}
                error={!!errors[name]}
                helperText={errors[name]?.message}
              />
            );
          }
        }}
      />
    </div>
  );
};

export default CustomInputFields;
