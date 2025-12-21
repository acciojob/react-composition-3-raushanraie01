import React from "react";
import "./../styles/App.css";
import Tooltip from "./Tooltip";
const App = () => {
  return (
    <div style={{ padding: "50px" }}>
      <Tooltip text="This is a tooltip">
        <span style={{ cursor: "pointer" }}>Hover over me</span>
      </Tooltip>

      <br />
      <br />

      <Tooltip text="This is another Tooltip">
        <button>Hover Button</button>
      </Tooltip>
    </div>
  );
};

export default App;
