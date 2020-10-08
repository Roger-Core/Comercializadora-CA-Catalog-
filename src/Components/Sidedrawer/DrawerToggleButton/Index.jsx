import React from "react";

import "./DrawerToggleButton.scss";

const Index = (props) => {
  return (
    <button className="toggle-button" onClick={props.click}>
      <div className="toggle-button-line" />
      <div className="toggle-button-line" />
      <div className="toggle-button-line" />
    </button>
  );
};

export default Index;
