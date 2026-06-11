import React, { useState, useEffect } from "react";
import CustomDataTable from "./CustomDataTable/CustomDataTable";

const TabsWithDataTable = ({
  header = "",
  tabsArray = [],
  batchData = [],
  tableHeaders,
  actionButtons,
  handleActionClick
}) => {
  const [activeTab, setActiveTab] = useState(tabsArray[0]);
  const [filteredData, setFilteredData] = useState(batchData);

  useEffect(() => {
    if (activeTab === tabsArray[0]) {
      setFilteredData(batchData);
    } else {
      setFilteredData(
        batchData.filter((batch) => batch.status === activeTab)
      );
    }
  }, [activeTab, batchData, tabsArray]);

  return (
    <div className="w-full">
      {/* Tabs Header */}
      <div className="relative border-b border-gray-200">
        <div className="flex items-center">
          {tabsArray.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-4 py-2 text-sm font-medium border-b-2 transition-all
                ${
                  activeTab === tab
                    ? "border-blue-600 text-blue-600"
                    : "border-transparent text-gray-500 hover:text-blue-600 hover:border-blue-300"
                }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Right-side Action Buttons */}
        {actionButtons?.length > 0 && (
          <div className="absolute right-0 top-1/2 -translate-y-1/2 flex gap-2">
            {actionButtons}
          </div>
        )}
      </div>

      {/* Tab Content */}
      <div className="mt-0">
        <CustomDataTable
          displayType="batch"
          cardClass="batch-table-card"
          headerText={`${activeTab} ${header} Data`}
          tableClass="table-striped"
          headerStyles="thead-dark"
          headers={tableHeaders}
          rows={filteredData}
          actionButtons={[]}
          handleActionClick={handleActionClick}
        />
      </div>
    </div>
  );
};

export default TabsWithDataTable;
