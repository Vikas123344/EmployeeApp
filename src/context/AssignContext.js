import React, { createContext, useState } from "react";

export const AssetContext = createContext();

export const AssetProvider = ({ children }) => {

  const [assets, setAssets] = useState([
    { id: "asset001", name: "Dell Laptop", assetTag: "LAP-101", status: "Available", assignedTo: "" },
    { id: "asset002", name: "iPhone 13", assetTag: "MOB-202", status: "Available", assignedTo: "" },
  ]);

  const assignAsset = (assignmentData) => {
    setAssets(prev =>
      prev.map(asset =>
        asset.id === assignmentData.assetId
          ? {
              ...asset,
              status: "Assigned",
              assignedTo: assignmentData.employeeName,
              assignDate: assignmentData.assignDate,
              returnDate: assignmentData.returnDate,
              notes: assignmentData.notes,
            }
          : asset
      )
    );
  };

  return (
    <AssetContext.Provider value={{ assets, assignAsset }}>
      {children}
    </AssetContext.Provider>
  );
};
