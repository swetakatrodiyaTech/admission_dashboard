import UniversityTheme from "../theme/UniversityTheme";

function Card({ title, value, bgColor }) {
  const getValueColor = (num) => {
    if (num > 1000) return UniversityTheme.danger;
    if (num > 500) return UniversityTheme.warning;
    return UniversityTheme.textPrimary;
  };

  return (
    <div
      style={{
        backgroundColor: bgColor || UniversityTheme.cardBg,
        padding: "20px",
        borderRadius: "8px",
        boxShadow: UniversityTheme.cardShadow,
        textAlign: "center",
      }}
    >
      <h3 style={{ color: UniversityTheme.textSecondary }}>{title}</h3>

      <h1
        style={{
          color: getValueColor(value),
          fontSize: "32px",
          margin: 0,
        }}
      >
        {value}
      </h1>
    </div>
  );
}

export default Card;
