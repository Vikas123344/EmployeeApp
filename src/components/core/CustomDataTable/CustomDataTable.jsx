import React, { useState, useEffect } from "react";
import "./CustomDataTable.css";
import PaginationComponent from "./PaginationComponent";
import PageSizeSelector from "./PageSizeSelector";
import TableHeaders from "./TableHeaders";
import TableRow from "./TableRow";
import { saveAs } from "file-saver";
import { v4 as uuidv4 } from 'uuid';
import SearchExportRow from "./SearchExportRow";

const CustomDataTable = ({
  displayType,
  cardClass,
  headerText,
  tableClass,
  headerStyles,
  headers,
  rows,
  actionButtons,
  handleActionClick
}) => {
  const [sortedRows, setSortedRows] = useState(rows);
  const [searchTerm, setSearchTerm] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [pageSize, setPageSize] = useState(10);
  const [sortConfig, setSortConfig] = useState({ key: null, direction: "asc" });
  const availablePageSizes = [10, 20, 50];

  useEffect(() => {
    const filtered = rows.filter((row) =>
      Object.values(row).some((value) =>
        String(value).toLowerCase().includes(searchTerm.toLowerCase())
      )
    );

    const sorted = [...filtered].sort((a, b) => {
      if (sortConfig.key) {
        const aValue = a[sortConfig.key];
        const bValue = b[sortConfig.key];
        let comparison = 0;
        if (typeof aValue === 'number' && typeof bValue === 'number') {
          comparison = aValue - bValue;
        } else {
          comparison = String(aValue).localeCompare(String(bValue));
        }
        return sortConfig.direction === "asc" ? comparison : -comparison;
      }
      return 0;
    });

    setSortedRows(sorted);
    setCurrentPage(1);
  }, [rows, searchTerm, sortConfig]);

  const handleSort = (key) => {
    let direction = "asc";
    if (sortConfig.key === key && sortConfig.direction === "asc") {
      direction = "desc";
    }
    setSortConfig({ key, direction });
  };

  const handleSearch = (e) => {
    setSearchTerm(e.target.value.toLowerCase());
  };

  const handleExportExcel = () => {
    const fileId = uuidv4();
    const headerLabels = headers.map(({ label }) => label);
    const dataRows = sortedRows.map((row) => headers.map(({ key }) => row[key]));
    const csvContent = [
      headerLabels.join(','),
      ...dataRows.map(row => row.map(cell => `"${cell}"`).join(','))
    ].join('\n');
    const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8' });
    saveAs(blob, `data_${fileId}.csv`);
  };

  const totalPages = Math.ceil(sortedRows.length / pageSize);
  const startIndex = (currentPage - 1) * pageSize;
  const endIndex = Math.min(startIndex + pageSize - 1, sortedRows.length - 1);
  const paginatedRows = sortedRows.slice(startIndex, endIndex + 1);

  return (
    <div className="overflow-x-auto w-full">
      <SearchExportRow
        headerText={headerText}
        searchTerm={searchTerm}
        handleSearch={handleSearch}
        handleExportExcel={handleExportExcel}
        actionButtons={actionButtons}
      />

      <table className={`min-w-full border border-gray-200 ${tableClass}`}>
        <thead className={`${headerStyles} bg-gray-100`}>
          <TableHeaders headers={headers} handleSort={handleSort} sortConfig={sortConfig} />
        </thead>
        <tbody>
          {paginatedRows.map((row, rowIndex) => (
            <TableRow
              key={row.id || rowIndex}
              displayType={displayType}
              row={row}
              headers={headers}
              handleActionClick={handleActionClick}
            />
          ))}
        </tbody>
      </table>

      <div className="flex flex-col md:flex-row items-center justify-between mt-4 gap-4">
        <PageSizeSelector
          pageSize={pageSize}
          setPageSize={setPageSize}
          startIndex={startIndex}
          endIndex={endIndex}
          sortedRows={sortedRows}
          availablePageSizes={availablePageSizes}
          setCurrentPage={setCurrentPage}
        />
        <PaginationComponent
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
          totalPages={totalPages}
        />
      </div>
    </div>
  );
};

export default CustomDataTable;
