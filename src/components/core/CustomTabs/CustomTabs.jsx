import React, { useState } from 'react';
import "./CustomTabs.css";

const CustomTabs = ({ tabsData }) => {
  const [activeTab, setActiveTab] = useState(1);

  const handleTabClick = (tabId) => {
    setActiveTab(tabId);
  };

  return (
    <div className="max-w-7xl mx-auto mt-5">
      {/* Tab headers */}
      <ul className="flex border-b border-gray-300">
        {tabsData.map((tab) => (
          <li key={tab.id} className="mr-4">
            <button
              className={`px-4 py-2 font-medium text-gray-600 hover:text-gray-800 transition-colors ${
                activeTab === tab.id
                  ? 'border-b-2 border-blue-500 text-blue-500'
                  : ''
              }`}
              onClick={() => handleTabClick(tab.id)}
            >
              {tab.title}
            </button>
          </li>
        ))}
      </ul>

      {/* Tab content */}
      <div className="mt-3">
        {tabsData.map((tab) => (
          <div
            key={tab.id}
            className={`${activeTab === tab.id ? 'block' : 'hidden'}`}
          >
            {tab.content}
          </div>
        ))}
      </div>
    </div>
  );
};

export default CustomTabs;
