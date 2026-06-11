import React from "react";

const IconTextCard = ({ icon, text, value, percentage,className = "" }) => {
  return (
    <div
      className={`
        text-start
        border border-gray-300
        shadow-md
        mb-4
        p-4
        min-h-37.5
        bg-white
        rounded-lg
        ${className}
      `}
    >
      <div className="flex flex-col items-start">
        {/* Icon */}
        <div className="mb-3">
          {icon}
        </div>

        {/* Text */}
        <p className="text-black mb-1">
          {text}
        </p>

        <p className="text-black font-bold text-lg mb-1">
          {value}
        </p>

        <p className="text-black">
          {percentage}
        </p>
      </div>
    </div>
  );
};

export default IconTextCard;
