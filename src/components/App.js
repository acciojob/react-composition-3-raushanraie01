import React from "react";
import "../styles/App.css";
import Tooltip from "./Tooltip";
const App = () => {
  return (
    <div
      style={{
        margin: "4px",
        display: "flex",
        flexDirection: "column",
        gap: "18px",
      }}
    >
      <Tooltip text="This is a tooltip">
        <span className="tooltip btn">Hover Over Me</span>
      </Tooltip>
      <Tooltip text="This is another tooltip">
        <span className="btn1 tooltip">
          Hover over me to see another tooltip
        </span>
      </Tooltip>
    </div>
  );
};

export default App;
