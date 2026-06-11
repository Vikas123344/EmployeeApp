import React, { useState } from 'react';
import ActionCell from './ActionCell';

const TableRow = ({ displayType, row, headers, handleActionClick }) => {
  const [anchorEl, setAnchorEl] = useState(null);
  const [selectedRow, setSelectedRow] = useState(null);

  const openPopover = (event, row) => {
    setAnchorEl(event.currentTarget);
    setSelectedRow(row);
  };

  const closePopover = () => {
    setAnchorEl(null);
    setSelectedRow(null);
  };

  const handlePopoverClick = ({ type, row }) => {
    handleActionClick(type, row);
  };

  const isPopoverOpen = Boolean(anchorEl);

  return (
    <tr className={`${row["rowType"] === "error" ? "bg-red-100" : ""}`}>
      {headers.map(({ key, textAlign }, cellIndex) => (
        <td
          key={cellIndex}
          className={`align-middle px-2 py-1 ${
            textAlign === "center" ? "text-center" : "text-left"
          }`}
        >
          {row[key]}
        </td>
      ))}

      <ActionCell
        displayType={displayType}
        row={row}
        openPopover={(event) => openPopover(event, row)}
        isPopoverOpen={isPopoverOpen && selectedRow === row}
        anchorEl={anchorEl}
        closePopover={closePopover}
        handleClick={handlePopoverClick}
      />
    </tr>
  );
};

export default TableRow;
