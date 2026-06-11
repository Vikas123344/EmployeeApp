import React from 'react';
import { IoMdPersonAdd } from "react-icons/io";
import { GrRefresh } from "react-icons/gr";

export default function CustomListGroup({
  header,
  rowClick,
  listData,
  showAdd,
  handleAdd,
  showRefresh,
  handleRefresh,
  moreText,
  handleMore
}) {
  return (
    <div className="bg-white border rounded-lg shadow-sm">
      
      {/* Header */}
      <div className="flex items-center justify-between px-4 py-3 border-b font-bold">
        <span>{header}</span>

        <div className="flex items-center gap-3">
          {showRefresh && (
            <span
              className="text-blue-600 cursor-pointer"
              onClick={handleRefresh}
              title="Refresh"
            >
              <GrRefresh />
            </span>
          )}

          {showAdd && (
            <span
              className="text-blue-600 cursor-pointer"
              onClick={handleAdd}
              title="Add New Enquiry"
            >
              <IoMdPersonAdd />
            </span>
          )}
        </div>
      </div>

      {/* List */}
      <ul className="divide-y">
        {listData.map((listItem, index) => (
          <li
            key={listItem.header + '' + index}
            onClick={() => rowClick(listItem.id)}
            className="px-4 py-3 cursor-pointer hover:bg-gray-50"
          >
            <div className="text-blue-600 font-bold text-sm">
              {listItem.header}
            </div>
            <p className="text-sm text-gray-700 mb-0">
              {listItem.message}
            </p>
          </li>
        ))}

        {/* More */}
        <li
          onClick={handleMore}
          className="px-4 py-3 text-center text-blue-600 cursor-pointer hover:bg-gray-50"
        >
          {moreText}
        </li>
      </ul>
    </div>
  );
}
