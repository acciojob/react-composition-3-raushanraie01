import React, { useState } from "react";

function Tooltip({ children, text }) {
  const [enter, setEnter] = useState(false);
  return (
    <div>
      <span
        style={{
          width: "100px",
          height: "200px",
          cursor: "pointer",
        }}
        className="tooltip"
        onMouseEnter={() => setEnter(true)}
        onMouseLeave={() => setEnter(false)}
      >
        {children}
      </span>
      {enter && (
        <div className="tooltiptext" style={{ backgroundColor: "red" }}>
          {text}
        </div>
      )}
    </div>
  );
}
export default Tooltip;
