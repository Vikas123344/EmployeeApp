import React from 'react';

const SearchExportRow = ({ headerText, searchTerm, handleSearch, actionButtons }) => {
  return (
    <div className="mb-2">
      <div className="flex flex-col md:flex-row items-center justify-between mb-2 gap-2">
        {/* Header */}
        <div className="flex flex-col">
          <h5 className="text-lg font-semibold mb-0">{headerText}</h5>
        </div>

        {/* Search Input */}
        <div className="flex flex-col">
          <input
            type="text"
            placeholder="Search..."
            value={searchTerm}
            onChange={handleSearch}
            className="border border-gray-300 rounded px-2 py-1 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            style={{ maxWidth: '300px' }}
          />
        </div>

        {/* Action Buttons */}
        {actionButtons?.length > 0 && (
          <div className="flex items-center gap-2">
            {actionButtons.map((button, index) => (
              <div key={index}>{button}</div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default SearchExportRow;
