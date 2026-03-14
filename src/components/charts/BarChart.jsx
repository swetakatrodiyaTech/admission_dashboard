import UniversityTheme from "../theme/UniversityTheme";

function BarChart({ data }) {
  const maxValue = Math.max(...data.map((item) => item.count));

  return (
    <div
      style={{
        background: UniversityTheme.cardBg,
        padding: "20px",
        borderRadius: "8px",
        boxShadow: UniversityTheme.cardShadow,
      }}
    >
      <h3 style={{ color: UniversityTheme.textPrimary }}>
        Applications by Program
      </h3>

      {data.map((item, index) => {
        const width = (item.count / maxValue) * 100;

        return (
          <div key={index} style={{ display: "flex", marginBottom: "10px" }}>
            <div style={{ width: "150px" }}>{item.program}</div>

            <div style={{ flex: 1, background: "#eee" }}>
              <div
                style={{
                  width: `${width}%`,
                  background: UniversityTheme.primary,
                  color: "white",
                  justifyContent: "center",
                  display: "flex",
                  alignItems: "center",
                  height: "30px",
                  borderRadius: "4px",
                }}
              >
                {item.count}
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default BarChart;
