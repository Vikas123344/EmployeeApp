import React from "react";
import { FileText, Download } from "lucide-react";
import reportsData from "../../data/chartdata/ReportsData";

export default function Reports() {
  return (
    <div className="flex-1 bg-gray-50 min-h-screen p-8">

      {/* Header */}
      <h1 className="text-2xl font-semibold">Reports & Analytics</h1>
      <p className="text-gray-500 mb-8">
        Generate and download various reports
      </p>

      {/* Report Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

        {reportsData.map((report) => (
          <div
            key={report.id}
            className="bg-white border rounded-xl p-6 shadow-sm"
          >
            {/* Top Section */}
            <div className="flex items-start gap-4 mb-5">

              {/* Icon */}
              <div className="bg-blue-100 p-3 rounded-lg">
                <FileText className="text-blue-600" size={22} />
              </div>

              {/* Text */}
              <div>
                <h3 className="font-semibold text-lg">
                  {report.title}
                </h3>
                <p className="text-gray-500 text-sm">
                  {report.description}
                </p>
              </div>
            </div>

            {/* Buttons */}
            <div className="flex gap-4">
              <button className="flex items-center gap-2 bg-blue-600 text-white px-5 py-2 rounded-lg hover:bg-blue-700">
                <Download size={16} />
                Download PDF
              </button>

              <button className="flex items-center gap-2 border px-5 py-2 rounded-lg hover:bg-gray-50">
                <Download size={16} />
                Download CSV
              </button>
            </div>
          </div>
        ))}

      </div>
    </div>
  );
}
