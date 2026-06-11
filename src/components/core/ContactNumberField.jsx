import React, { useEffect, useState } from 'react';
import CustomTextBox from './CustomTextBox';

const ContactNumberField = ({ label, required, value, onChange, error, helperText, disabled }) => {
  const [countryCode, setCountryCode] = useState('+1');
  const [phoneNumber, setPhoneNumber] = useState('');

  useEffect(() => {
    if (value) {
      let phoneNumber = value;
      if (phoneNumber.startsWith('+')) {
        // Remove the country code (e.g., '+1') from the beginning
        phoneNumber = phoneNumber.replace(/^\+\d+\s*/, '');
      }
      setPhoneNumber(phoneNumber);
    }
  }, [value]);

  const handleCountryCodeChange = (event) => {
    event.stopPropagation();
    const updatedCountryCode = event.target.value;
    setCountryCode(updatedCountryCode);
    onChange(`${updatedCountryCode} ${phoneNumber}`);
  };

  const handlePhoneNumberChange = (event) => {
    const updatedPhoneNumber = event.target.value;
    setPhoneNumber(updatedPhoneNumber);
    onChange(`${countryCode} ${updatedPhoneNumber}`);
  };

  return (
    <div className="mb-4">
      {label && (
        <label htmlFor="mobile" className="block text-sm font-medium text-gray-700 mb-1">
          {label}{required && <span className="text-red-500"> *</span>}
        </label>
      )}
      <div className="flex space-x-2">
        <div className="w-1/6">
          <CustomTextBox
            name="mobile-countryCode"
            type="text"
            size="sm"
            value={countryCode}
            onChange={handleCountryCodeChange}
            label=""
            disabled={true}
            error={error}
            style={{ textAlign: 'center', fontWeight: 'bold' }}
          />
        </div>
        <div className="w-5/6">
          <CustomTextBox
            name="mobile-phoneNumber"
            type="text"
            size="sm"
            value={phoneNumber}
            onChange={handlePhoneNumberChange}
            placeholder="(123)456-7890"
            label=""
            disabled={disabled}
            error={error}
          />
        </div>
      </div>
      {helperText && (
        <p className="text-red-500 text-sm mt-1">
          {helperText}
        </p>
      )}
    </div>
  );
};

export default ContactNumberField;
