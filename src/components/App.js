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
        <h2 className="tooltip">Hover Over Me</h2>
      </Tooltip>
      <Tooltip text="This is another tooltip">
        <p className=" tooltip">Hover over me to see another tooltip</p>
      </Tooltip>
    </div>
  );
};

export default App;
