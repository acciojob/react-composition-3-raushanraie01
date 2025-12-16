import React from "react";
import "./../styles/App.css";
import Tooltip from "./Tooltip";
const App = () => {
  return (
    <div style={{ padding: "50px" }}>
      <Tooltip text="This is a tooltip">
        <span style={{ cursor: "pointer", textDecoration: "underline" }}>
          Hover over me
        </span>
      </Tooltip>

      <br />
      <br />

      <Tooltip text="This is another Tooltip">
        <button>Hover Button</button>
      </Tooltip>

      <br />
      <br />

      <Tooltip text="Another tooltip example">
        <strong>Hover this bold text</strong>
      </Tooltip>
    </div>
  );
};

export default App;
