import React, { useState } from 'react';
import { demoClassesData } from '../../data/coursesData';

export default function DemoClassList() {
  const [selectedClass, setSelectedClass] = useState(demoClassesData[0]);
  const [open, setOpen] = useState(false);

  const handleSelect = (classItem) => {
    setSelectedClass(classItem);
    setOpen(false);
  };

  return (
    <div className="w-full">
      {/* Dropdown */}
      <div className="relative inline-block w-full sm:w-64">
        <button
          onClick={() => setOpen(!open)}
          className="w-full flex justify-between items-center px-4 py-2 border rounded-md bg-white shadow-sm text-sm font-medium text-gray-700 hover:bg-gray-50"
        >
          Selected Class: {selectedClass.className}
          <span className="ml-2">▾</span>
        </button>

        {open && (
          <div className="absolute z-10 mt-1 w-full bg-white border rounded-md shadow-lg">
            {demoClassesData.map((classItem, index) => (
              <button
                key={index}
                onClick={() => handleSelect(classItem)}
                className="w-full text-left px-4 py-2 text-sm hover:bg-gray-100"
              >
                {classItem.className}
              </button>
            ))}
          </div>
        )}
      </div>

      {/* Card */}
      <div className="mt-3 border rounded-lg shadow-sm bg-white">
        <div className="px-4 py-2 border-b font-semibold text-sm">
          Demo Classes for{' '}
          <span className="text-blue-600">{selectedClass.className}</span>
        </div>

        <div className="divide-y">
          {selectedClass.demoClasses.map((demoClass) => (
            <div
              key={demoClass.id}
              className="px-4 py-2 text-sm text-gray-700"
            >
              <strong>{demoClass.date}</strong> {demoClass.time}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
