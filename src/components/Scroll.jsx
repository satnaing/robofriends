import React from "react";

const Scroll = ({ children }) => (
  <div style={{ overflowY: "auto", height: "500px" }}>{children}</div>
);
// border: "5px solid black"

export default Scroll;
