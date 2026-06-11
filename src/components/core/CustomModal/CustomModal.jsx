import React from "react";
import "./CustomModal.css";

const CustomModal = ({
  open,
  onClose,
  width = "sm", // sm, md, lg
  title,
  actions,
  children,
}) => {
  if (!open) return null;

  // Width mapping
  const widthClass = {
    sm: "max-w-md",
    md: "max-w-lg",
    lg: "max-w-2xl",
  }[width];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40">
      <div
        className={`bg-white rounded-lg shadow-lg w-full ${widthClass} mx-4`}
      >
        {title && (
          <>
            <div className="flex justify-between items-center p-4 border-b">
              <h5 className="text-lg font-semibold">{title}</h5>
              <button
                onClick={onClose}
                className="text-gray-500 hover:text-gray-700"
              >
                ✕
              </button>
            </div>
          </>
        )}

        <div className="p-4">{children}</div>

        {actions && <div className="p-4 border-t flex justify-end gap-2">{actions}</div>}
      </div>
    </div>
  );
};

export default CustomModal;
