import React from 'react';

const PageSizeSelector = ({
  pageSize,
  setPageSize,
  startIndex,
  endIndex,
  sortedRows,
  availablePageSizes,
  setCurrentPage
}) => {
  const handlePageSizeChange = (e) => {
    setPageSize(parseInt(e.target.value, 10)); // Update the page size
    setCurrentPage(1); // Reset to the first page
  };

  return (
    <div className="flex items-center gap-2">
      <select
        className="border border-gray-300 rounded px-2 py-1 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
        value={pageSize}
        onChange={handlePageSizeChange}
        style={{ width: '70px' }}
      >
        {availablePageSizes.map((size) => (
          <option key={size} value={size}>
            {size}
          </option>
        ))}
      </select>

      <span className="text-sm text-gray-700">
        Showing {startIndex + 1} to {endIndex + 1} of {sortedRows.length} entries
      </span>
    </div>
  );
};

export default PageSizeSelector;
