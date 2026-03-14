import React from "react";
function DateFilter({
  fromDate,
  toDate,
  onFromChange,
  onToChange,
  onFilter,
  onRefresh,
}) {
  const handleFilter = () => {
    onFilter();
  };

  return (
    <div
      className="date-filter"
      style={{
        background: "white",
        padding: "20px",
        borderRadius: "8px",
        marginBottom: "20px",
        display: "flex",
        gap: "10px",
      }}
    >
      <input
        type="date"
        value={fromDate}
        onChange={(e) => onFromChange(e.target.value)}
      />

      <input
        type="date"
        value={toDate}
        onChange={(e) => onToChange(e.target.value)}
      />

      <button onClick={handleFilter}>Apply</button>

      <button onClick={onRefresh}>Refresh</button>
    </div>
  );
}

export default DateFilter;
