import React from "react";
import UniversityTheme from "../theme/UniversityTheme";

function Card({ title, value, bgColor }) {

  // decide color based on value
  const getValueColor = (num) => {
    if (num > 1000) return UniversityTheme.danger;   // red
    if (num > 500) return UniversityTheme.warning;   // orange
    return UniversityTheme.textPrimary;              // default
  };

  return (
    <div
      style={{
        backgroundColor: bgColor || UniversityTheme.cardBg,
        padding: "20px",
        borderRadius: "8px",
        boxShadow: UniversityTheme.cardShadow,
        textAlign: "center"
      }}
    >
      <h3 style={{ color: UniversityTheme.textSecondary }}>
        {title}
      </h3>

      <h1
        style={{
          color: getValueColor(value),
          fontSize: "32px",
          margin: 0
        }}
      >
        {value}
      </h1>

    </div>
  );
}

export default Card;