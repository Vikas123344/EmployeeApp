import React, { useState } from 'react';

const CustomButtons = ({ 
  isShowPrimary = false, 
  isShowSecondary = false, 
  primaryText = 'Add', 
  secondaryText = 'Cancel', 
  onPrimaryClick, 
  onSecondaryClick 
}) => {
  const [loading, setLoading] = useState(false);

  // Handle primary button click
  const handlePrimaryClick = async () => {
    setLoading(true);
    if (onPrimaryClick) {
      await onPrimaryClick();
    }
    setLoading(false);
  };

  return (
    <div className="flex space-x-2">
      {isShowSecondary && (
        <button
          onClick={onSecondaryClick}
          disabled={loading}
          className={`
            px-4 py-2 border border-blue-500 text-blue-500 rounded 
            hover:bg-blue-50 disabled:opacity-50 disabled:cursor-not-allowed
          `}
        >
          {secondaryText}
        </button>
      )}

      {isShowPrimary && (
        <button
          onClick={handlePrimaryClick}
          disabled={loading}
          className={`
            px-4 py-2 bg-blue-500 text-white rounded 
            hover:bg-blue-600 disabled:opacity-50 disabled:cursor-not-allowed 
            flex items-center justify-center space-x-2
          `}
        >
          {loading && (
            <svg
              className="animate-spin h-4 w-4 text-white"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
            >
              <circle
                className="opacity-25"
                cx="12"
                cy="12"
                r="10"
                stroke="currentColor"
                strokeWidth="4"
              ></circle>
              <path
                className="opacity-75"
                fill="currentColor"
                d="M4 12a8 8 0 018-8v8z"
              ></path>
            </svg>
          )}
          <span>{primaryText}</span>
        </button>
      )}
    </div>
  );
};

export default CustomButtons;
