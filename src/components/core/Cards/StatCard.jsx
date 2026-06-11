import React from "react";

export default function StatCard({ title, value, percentage, icon }) {
  return (
    <div className="
      min-w-65
      bg-white
      border border-gray-200
      rounded-xl
      p-6
      shadow-sm
      hover:shadow-md
      transition
      shrink-0
    ">
      <div className="flex items-start justify-between">
        <div>
          <p className="text-sm font-medium text-gray-500">
            {title}
          </p>
          <p className="text-2xl font-semibold text-gray-900 mt-2">
            {value}
          </p>
        </div>

        <div className="w-11 h-11 rounded-full bg-green-100 text-green-600 flex items-center justify-center text-lg">
          {icon}
        </div>
      </div>

      <p className="text-sm text-green-600 mt-4">
        {percentage}
      </p>
    </div>
  );
}
