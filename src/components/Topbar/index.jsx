import React, { useState, useRef, useEffect } from "react";
import { FaSignOutAlt, FaKey, FaSearch, FaUserCircle } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

export default function Topbar() {
  const navigate = useNavigate();
  const [showPopover, setShowPopover] = useState(false);
  const popoverRef = useRef(null);

  const handleTogglePopover = () => {
    setShowPopover(!showPopover);
  };

  const handleLogout = async () => {
    localStorage.clear();
    navigate("/");
  };

  // close popover on outside click (same as rootClose)
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (popoverRef.current && !popoverRef.current.contains(e.target)) {
        setShowPopover(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="flex justify-between items-center p-2 px-3 border-b bg-white">
      <h3></h3>

      <div className="flex items-center relative" ref={popoverRef}>
        {/* Search */}
        <div className="flex items-center border rounded-md w-62.5 mr-4">
          <input
            type="text"
            placeholder="Search..."
            className="flex-1 px-3 py-1 text-sm outline-none"
          />
          <span className="px-3 text-gray-500">
            <FaSearch />
          </span>
        </div>

        {/* Profile Icon */}
        <button
          onClick={handleTogglePopover}
          className="bg-transparent border-none p-0"
        >
          <FaUserCircle className="text-[40px] text-gray-600" />
        </button>

        {/* Popover */}
        {showPopover && (
          <div className="absolute right-0 top-12 w-48 bg-white border rounded-md shadow-lg z-50">
            <ul className="list-none mb-0">
              <li className="border-b">
                <button
                  onClick={() => alert("Reset Password")}
                  className="flex items-center gap-2 w-full px-4 py-2 text-sm text-left hover:bg-gray-100"
                >
                  <FaKey /> Reset Password
                </button>
              </li>

              <li>
                <button
                  onClick={handleLogout}
                  className="flex items-center gap-2 w-full px-4 py-2 text-sm text-left text-red-600 hover:bg-gray-100"
                >
                  <FaSignOutAlt /> Logout
                </button>
              </li>
            </ul>
          </div>
        )}
      </div>
    </div>
  );
}
