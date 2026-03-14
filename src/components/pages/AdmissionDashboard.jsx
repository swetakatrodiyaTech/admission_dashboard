import React, { useState, useEffect } from "react";
import { getAdmissionData } from "../../components/api/DummyApi.js";

import DateFilter from "../filters/DateFilter";
import Card from "../cards/Card";
import BarChart from "../charts/BarChart";
import TrendChart from "../charts/TrendChart.jsx";

function AdmissionDashboard() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  const [fromDate, setFromDate] = useState("");
  const [toDate, setToDate] = useState("");

  const handleFilter = () => {
    loadData();
  };

  const loadData = async () => {
    setLoading(true);

    const result = await getAdmissionData({
      fromDate,
      toDate,
    });

    setData(result);
    setLoading(false);
  };

  useEffect(() => {
    loadData();
  }, []);

  if (loading) {
    return <h2>Loading Dashboard...</h2>;
  }

  return (
    <div style={{ padding: "20px" }}>
      <h1>Admission Dashboard</h1>

      <DateFilter
        fromDate={fromDate}
        toDate={toDate}
        onFromChange={setFromDate}
        onToChange={setToDate}
        onFilter={handleFilter}
        onRefresh={loadData}
      />

      <div
        className="dashboard-grid"
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(4,1fr)",
          gap: "20px",
        }}
      >
        <Card title="Total" value={data.total} bgColor="#e8f4f8" />
        <Card title="Verified" value={data.verified} bgColor="#e8f8e8" />
        <Card title="Rejected" value={data.rejected} bgColor="#f8e8e8" />

        <Card
          title="Pending"
          value={data.total - data.verified - data.rejected}
          bgColor="#fff3e0"
        />
      </div>

      <BarChart data={data.programWise} />
      <TrendChart data={data.dailyTrend} />
    </div>
  );
}

export default AdmissionDashboard;
