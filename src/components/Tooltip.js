import React, { useState } from "react";

function Tooltip({ children, text }) {
  const [enter, setEnter] = useState(false);

  return (
    <div
      className="tooltip"
      onMouseEnter={() => setEnter(true)}
      onMouseLeave={() => setEnter(false)}
      style={{ cursor: "pointer" }}
    >
      {children}

      {enter && <div className="tooltiptext">{text}</div>}
    </div>
  );
}

export default Tooltip;
