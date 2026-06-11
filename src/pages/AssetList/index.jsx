import React, { useState } from "react";
import { Search, Eye, Download } from "lucide-react";
import assets from "../../data/chartdata/AssetsData";

export default function AssetList() {

  /* ---------------- FILTER STATES ---------------- */
  const [statusFilter, setStatusFilter] = useState("All Status");
  const [categoryFilter, setCategoryFilter] = useState("All Categories");
  const [searchItem, setSearchItem]=useState("");

  /* ---------------- BADGE STYLES ---------------- */
  const badgeStyle = (status) => {
    switch (status) {
      case "Assigned":
        return "bg-blue-100 text-blue-600";
      case "Available":
        return "bg-green-100 text-green-600";
      case "Under Maintenance":
        return "bg-yellow-100 text-yellow-700";
      default:
        return "";
    }
  };

  const conditionStyle = (condition) =>
    condition === "Excellent"
      ? "bg-green-100 text-green-600"
      : "bg-blue-100 text-blue-600";

  /* ---------------- UNIQUE DROPDOWN VALUES ---------------- */
  const statuses = [
    "All Status",
    ...new Set(assets.map((a) => a.status)),
  ];

  const categories = [
    "All Categories",
    ...new Set(assets.map((a) => a.category)),
  ];
  const filteredAssets = assets.filter((asset) => {

  // STATUS FILTER
  const statusMatch =
    statusFilter === "All Status" ||
    asset.status === statusFilter;

  // CATEGORY FILTER
  const categoryMatch =
    categoryFilter === "All Categories" ||
    asset.category === categoryFilter;

  // SEARCH FILTER (ID, NAME, SERIAL)
  const searchMatch =
    asset.id.toString().toLowerCase().includes(searchItem.toLowerCase()) ||
    asset.name.toLowerCase().includes(searchItem.toLowerCase()) ||
    asset.serial.toLowerCase().includes(searchItem.toLowerCase())||
    asset.category.toLowerCase().includes(searchItem.toLowerCase())||
    asset.serial.toLowerCase().includes(searchItem.toLowerCase())||
    asset.value.toLowerCase().includes(searchItem);
    

  return statusMatch && categoryMatch && searchMatch;
});

  

  return (
    <div className="flex">
      <div className="flex-1 p-8 bg-gray-50 min-h-screen">

        {/* Header */}
        <h2 className="text-2xl font-semibold">Asset Management</h2>
        <p className="text-gray-500 mb-6">
          Manage all your company assets
        </p>

        {/* Filters */}
        <div className="flex gap-4 mb-6">
          <div className="flex items-center bg-white border rounded px-3 py-2 w-full">
            <Search size={18} className="text-gray-400" />
            <input
              placeholder="Search by name or serial number..."
              className="ml-2 outline-none w-full"
                        
               value={searchItem}
               onChange={(e) => setSearchItem(e.target.value)}
            />
          </div>

          {/* STATUS FILTER */}
          <select
            className="border rounded px-3 py-2"
            value={statusFilter}
            onChange={(e) => setStatusFilter(e.target.value)}
          >
            {statuses.map((status) => (
              <option key={status}>{status}</option>
            ))}
          </select>

          {/* CATEGORY FILTER */}
          <select
            className="border rounded px-3 py-2"
            value={categoryFilter}
            onChange={(e) => setCategoryFilter(e.target.value)}
          >
            {categories.map((cat) => (
              <option key={cat}>{cat}</option>
            ))}
          </select>

          <button className="flex items-center gap-2 border px-4 rounded">
            <Download size={16} /> Export
          </button>
        </div>

        {/* Table */}
        <div className="bg-white rounded-lg shadow">
          <table className="w-full">
            <thead className="border-b bg-gray-50">
              <tr className="text-left text-sm text-gray-600">
                <th className="p-4">Asset ID</th>
                <th>Name</th>
                <th>Category</th>
                <th>Serial Number</th>
                <th>Status</th>
                <th>Condition</th>
                <th>Value (₹)</th>
                <th>Actions</th>
              </tr>
            </thead>

            <tbody>
              {filteredAssets.map((asset) => (
                <tr key={asset.id} className="border-b">
                  <td className="p-4">{asset.id}</td>

                  <td>
                    <p className="font-medium">{asset.name}</p>
                    {asset.assigned && (
                      <p className="text-xs text-gray-500">
                        Assigned to: {asset.assigned}
                      </p>
                    )}
                  </td>

                  <td>{asset.category}</td>
                  <td>{asset.serial}</td>

                  <td>
                    <span
                      className={`px-3 py-1 rounded-full text-xs ${badgeStyle(
                        asset.status
                      )}`}
                    >
                      {asset.status}
                    </span>
                  </td>

                  <td>
                    <span
                      className={`px-3 py-1 rounded-full text-xs ${conditionStyle(
                        asset.condition
                      )}`}
                    >
                      {asset.condition}
                    </span>
                  </td>

                  <td>{asset.value}</td>

                  <td>
                    <Eye
                      size={18}
                      className="text-gray-500 cursor-pointer"
                    />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

          <div className="p-4 text-sm text-gray-500">
            Showing {filteredAssets.length} of {assets.length} assets
          </div>
        </div>
      </div>
    </div>
  );
}
