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
        <h2 className="tooltip">
          This is a tooltip
          <div></div>
        </h2>
      </Tooltip>
      <Tooltip text="This is another tooltip">
        <p className=" tooltip">
          This is another tooltip
          <div></div>
        </p>
      </Tooltip>
    </div>
  );
};

export default App;
