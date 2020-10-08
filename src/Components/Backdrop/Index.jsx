import React from "react";
import "./Backdrop.scss";

const Index = (props) => {
  return <div className="backdrop" onClick={props.click}></div>;
};

export default Index;
