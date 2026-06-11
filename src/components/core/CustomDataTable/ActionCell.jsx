import React, { useState, useRef, useEffect } from "react";
import { FaEllipsisV, FaEdit, FaTrashAlt } from "react-icons/fa";
import { MdArrowForwardIos } from "react-icons/md";
import { LuEye } from "react-icons/lu";

const ActionCell = ({ displayType, row, handleClick }) => {
  const [open, setOpen] = useState(false);
  const menuRef = useRef(null);

  // Close dropdown on outside click
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (menuRef.current && !menuRef.current.contains(e.target)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const renderMenu = () => {
    if (displayType !== "users") return null;

    return (
      <ul className="py-1 text-sm text-gray-700">
        <li
          onClick={() => handleClick({ type: "view", row })}
          className="flex items-center gap-2 px-4 py-2 hover:bg-gray-100 cursor-pointer"
        >
          <LuEye />
          View
        </li>
        <li
          onClick={() => handleClick({ type: "edit", row })}
          className="flex items-center gap-2 px-4 py-2 hover:bg-gray-100 cursor-pointer"
        >
          <FaEdit />
          Edit
        </li>
        <li
          onClick={() => handleClick({ type: "delete", row })}
          className="flex items-center gap-2 px-4 py-2 text-red-600 hover:bg-red-50 cursor-pointer"
        >
          <FaTrashAlt />
          Delete
        </li>
      </ul>
    );
  };

  return (
    <td className="relative text-center">
      {(displayType === "users" || displayType === "devices") ? (
        <div ref={menuRef} className="inline-block">
          <button
            onClick={() => setOpen(!open)}
            className="p-2 rounded hover:bg-gray-100 text-gray-600"
          >
            <FaEllipsisV />
          </button>

          {open && (
            <div className="absolute right-0 z-50 mt-2 w-36 bg-white border rounded-lg shadow-lg">
              {renderMenu()}
            </div>
          )}
        </div>
      ) : (
        <button
          onClick={() => handleClick({ type: "next", row })}
          className="p-2 rounded hover:bg-gray-100 text-gray-600"
        >
          <MdArrowForwardIos />
        </button>
      )}
    </td>
  );
};

export default ActionCell;
