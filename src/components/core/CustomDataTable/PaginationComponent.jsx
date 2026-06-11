import React from 'react';

const PaginationComponent = ({ currentPage, setCurrentPage, totalPages }) => {
  return (
    <div className="flex items-center justify-end">
      <ul className="flex items-center space-x-2 m-0">
        <li>
          <button
            className={`px-3 py-1 rounded border border-gray-300 text-sm ${
              currentPage === 1
                ? 'bg-gray-200 text-gray-500 cursor-not-allowed'
                : 'bg-white text-gray-700 hover:bg-gray-100'
            }`}
            onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
            disabled={currentPage === 1}
          >
            Previous
          </button>
        </li>

        <li>
          <span className="text-sm text-gray-700 mx-2">
            Page {currentPage} of {totalPages}
          </span>
        </li>

        <li>
          <button
            className={`px-3 py-1 rounded border border-gray-300 text-sm ${
              currentPage === totalPages
                ? 'bg-gray-200 text-gray-500 cursor-not-allowed'
                : 'bg-white text-gray-700 hover:bg-gray-100'
            }`}
            onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
            disabled={currentPage === totalPages}
          >
            Next
          </button>
        </li>
      </ul>
    </div>
  );
};

export default PaginationComponent;
