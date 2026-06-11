import React, { useEffect } from "react";
import toastSuccess from "../../assets/images/toastSuccess.png";


const ToastMessage = ({
  open,
  type = "success",
  heading,
  message,
  onClose,
}) => {
  const icons = {
    success: toastSuccess,
    error: toastError,
    warning: toastWarning,
  };

  const colors = {
    success: "border-l-emerald-500 text-emerald-500",
    error: "border-l-red-600 text-red-600",
    warning: "border-l-amber-500 text-amber-500",
  };

  // Auto hide after 3 seconds
  useEffect(() => {
    if (open) {
      const timer = setTimeout(() => {
        onClose?.();
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [open, onClose]);

  if (!open) return null;

  return (
    <>
      {/* Overlay */}
      <div className="fixed inset-0 bg-black/50 z-1300" />

      {/* Toast */}
      <div className="fixed top-4 right-4 z-1400">
        <div
          className={`w-96 bg-white rounded-lg shadow-lg border-l-4 ${colors[type]} animate-slide-in`}
        >
          {/* Header */}
          <div className="flex items-center gap-3 px-4 py-3 border-b">
            <img
              src={icons[type]}
              alt={`${type} icon`}
              className="w-10 h-10"
            />

            <strong className={`flex-1 text-sm font-semibold ${colors[type]}`}>
              {heading}
            </strong>

            <button
              onClick={onClose}
              className="text-gray-400 hover:text-gray-600 focus:outline-none caret-transparent text-xl leading-none"
            >
              ×
            </button>
          </div>

          {/* Body */}
          <div className="px-4 py-3 text-sm text-gray-700">
            {message}
          </div>
        </div>
      </div>
    </>
  );
};

export default ToastMessage;
