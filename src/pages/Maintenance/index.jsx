import React from "react";
import { Wrench, Plus } from "lucide-react";
import maintenanceData from "../../data/chartdata/MaintenanceData";

export default function Maintenance() {

  /* -------- STATUS BADGE STYLE -------- */
  const statusStyle = (status) => {
    switch (status) {
      case "In Progress":
        return "bg-blue-100 text-blue-600";
      case "Completed":
        return "bg-green-100 text-green-600";
      default:
        return "";
    }
  };

  return (
    <div className="flex-1 bg-gray-50 min-h-screen p-8">

      {/* Header */}
      <div className="flex justify-between items-center mb-6">
        <div>
          <h1 className="text-2xl font-semibold">
            Maintenance Requests
          </h1>
          <p className="text-gray-500">
            Track and manage asset maintenance
          </p>
        </div>

        <button className="flex items-center gap-2 bg-blue-600 text-white px-5 py-2 rounded-lg hover:bg-blue-700">
          <Plus size={18} />
          Raise Request
        </button>
      </div>

      {/* Maintenance Cards */}
      <div className="space-y-6">
        {maintenanceData.map((item) => (
          <div
            key={item.id}
            className="bg-white border rounded-xl p-6 flex justify-between items-start"
          >
            {/* LEFT SIDE */}
            <div className="flex gap-4">
              
              {/* Icon */}
              <div className="bg-yellow-100 p-4 rounded-lg">
                <Wrench className="text-yellow-600" />
              </div>

              {/* Details */}
              <div>
                <h3 className="text-lg font-semibold">
                  {item.assetName}
                </h3>
                <p className="text-gray-500 text-sm mb-3">
                  ID: {item.assetId}
                </p>

                <p className="text-sm text-gray-500">Issue:</p>
                <p className="mb-3">{item.issue}</p>

                <p className="text-sm text-gray-500">
                  Raised by:{" "}
                  <span className="font-medium text-gray-700">
                    {item.raisedBy}
                  </span>
                  <span className="ml-6">
                    Date:{" "}
                    <span className="font-medium text-gray-700">
                      {item.date}
                    </span>
                  </span>

                  {item.completedDate && (
                    <span className="ml-6">
                      Completed:{" "}
                      <span className="font-medium text-gray-700">
                        {item.completedDate}
                      </span>
                    </span>
                  )}
                </p>
              </div>
            </div>

            {/* STATUS */}
            <span
              className={`px-4 py-1 rounded-full text-sm ${statusStyle(
                item.status
              )}`}
            >
              {item.status}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
