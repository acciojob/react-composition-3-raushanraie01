import React, { useState } from "react";

function Tooltip({ children, text }) {
  const [enter, setEnter] = useState(false);
  return (
    <div>
      <div
        style={{
          width: "100px",
          height: "200px",
          cursor: "pointer",
        }}
        onMouseEnter={() => setEnter(true)}
        onMouseLeave={() => setEnter(false)}
      >
        {children}
      </div>
      {enter && (
        <h2 className="tooltiptext" style={{ backgroundColor: "red" }}>
          {text}
        </h2>
      )}
    </div>
  );
}
export default Tooltip;
