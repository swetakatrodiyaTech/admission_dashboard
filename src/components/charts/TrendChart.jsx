import UniversityTheme from "../theme/UniversityTheme";

function TrendChart({ data }) {
  if (!data || data.length === 0) {
    return <p>No trend data available</p>;
  }

  const maxValue = Math.max(...data.map((item) => item.applications));

  return (
    <div
      style={{
        backgroundColor: UniversityTheme.cardBg,
        padding: "20px",
        borderRadius: "8px",
        boxShadow: UniversityTheme.cardShadow,
      }}
    >
      <h3 style={{ color: UniversityTheme.textPrimary }}>
        Daily Application Trend
      </h3>

      {data.map((item, index) => {
        const width = (item.applications / maxValue) * 100;

        return (
          <div key={index} style={{ display: "flex", marginBottom: "10px" }}>
            <div style={{ width: "120px" }}>{item.date}</div>

            <div style={{ flex: 1, background: "#eee" }}>
              <div
                style={{
                  width: `${width}%`,
                  background: UniversityTheme.success,
                  color: "white",
                  justifyContent: "center",
                  display: "flex",
                  alignItems: "center",
                  height: "30px",
                  borderRadius: "4px",
                }}
              >
                {item.applications}
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default TrendChart;
