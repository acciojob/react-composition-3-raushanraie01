import React, { useState } from "react";

const Tooltip = ({ text, children }) => {
  const [showTooltip, setShowTooltip] = useState(false);

  return (
    <span
      className="tooltip"
      onMouseEnter={() => setShowTooltip(true)}
      onMouseLeave={() => setShowTooltip(false)}
      style={{
        position: "relative",
        display: "inline-block",
      }}
    >
      {children}

      {showTooltip && (
        <span
          className="tooltiptext"
          style={{
            position: "absolute",
            bottom: "100%",
            left: "50%",
            transform: "translateX(-50%)",
            backgroundColor: "#b25353ff",
            color: "#fff",
            padding: "6px 10px",
            borderRadius: "4px",
            whiteSpace: "nowrap",
            fontSize: "22px",
            zIndex: 1000,
          }}
        >
          {text}
        </span>
      )}
    </span>
  );
};

export default Tooltip;
