import React, { useState } from "react";
import employeesData from "../../data/EmployeeData";



const EmployeesPage = () => {
  const [search, setSearch] = useState("");
  const [department, setDepartment] = useState("All");

  const departments = [
    "All",
    "IT",
    "Operations",
    "Sales",
    "HR",
    "Finance",
  ];

  const filteredEmployees = employeesData.filter((emp) => {
  const searchText = search.toLowerCase();

  const matchesSearch =
    emp.name.toLowerCase().includes(searchText) ||
    emp.department.toLowerCase().includes(searchText) ||
    emp.email.toLowerCase().includes(searchText) ||
    emp.phone.toLowerCase().includes(searchText);

  const matchesDepartment =
    department === "All" || emp.department === department;

  return matchesSearch && matchesDepartment;
});

  return (
    <div className="p-6 bg-gray-50 min-h-screen">

      {/* Header */}
      <div className="flex justify-between items-center mb-6">
        <div>
          <h1 className="text-2xl font-semibold text-gray-800">
            Employee Management
          </h1>
          <p className="text-sm text-gray-500">
            Manage employees and their asset assignments
          </p>
        </div>

        <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg text-sm font-medium">
          + Add Employee
        </button>
      </div>

      {/* Search + Filter */}
      <div className="bg-white border rounded-xl p-4 mb-6 flex flex-col md:flex-row gap-4">
        <input
          type="text"
          placeholder="Search employees..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="flex-1 border rounded-lg px-3 py-2 text-sm"
        />

        <select
          value={department}
          onChange={(e) => setDepartment(e.target.value)}
          className="w-full md:w-60 border rounded-lg px-3 py-2 text-sm"
        >
          {departments.map((dept, index) => (
            <option key={index}>{dept}</option>
          ))}
        </select>
      </div>

      {/* Employee Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

        {filteredEmployees.map((emp) => (
          <div
            key={emp.id}
            className="bg-white border rounded-xl p-5 shadow-sm hover:shadow-md transition"
          >
            {/* Avatar */}
            <div className="flex justify-between items-start">
              <div className="w-12 h-12 bg-blue-600 text-white flex items-center justify-center rounded-full font-semibold text-lg">
                {emp.name.charAt(0)}
              </div>

              <button className="text-gray-400 hover:text-gray-600">
                👁
              </button>
            </div>

            {/* Info */}
            <div className="mt-4">
              <h2 className="font-semibold text-gray-800">
                {emp.name}
              </h2>
              <p className="text-sm text-gray-500">
                {emp.department}
              </p>
            </div>

            {/* Contact */}
            <div className="mt-4 text-sm text-gray-600 space-y-2">
              <div>📧 {emp.email}</div>
              <div>📞 {emp.phone}</div>
            </div>

            <hr className="my-4" />

            {/* Assigned Assets */}
            <div className="flex justify-between items-center text-sm">
              <span className="text-gray-600">
                Assigned Assets
              </span>
              <span className="bg-blue-100 text-blue-600 px-3 py-1 rounded-full text-xs font-medium">
                {emp.assignedAssets}
              </span>
            </div>
          </div>
        ))}

      </div>
    </div>
  );
};

export default EmployeesPage;
