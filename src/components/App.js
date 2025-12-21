import "./../styles/App.css";
import React from "react";
import Tooltip from "./Tooltip";
const App = () => {
  return (
    <div style={{ padding: "50px" }}>
      <Tooltip text="This is a tooltip">
        <h1 style={{ cursor: "pointer" }}>Hover over me</h1>
      </Tooltip>

      <br />
      <br />

      <Tooltip text="This is another Tooltip">
        <span>Hover over me to see another tooltip </span>
      </Tooltip>
    </div>
  );
};

export default App;
