import React from "react";
import UniversityTheme from "../theme/UniversityTheme";
function Card({ title, value, bgColor }) {

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

      <h1 style={{ color: UniversityTheme.textPrimary }}>
        {value}
      </h1>

    </div>
  );
}

export default Card;