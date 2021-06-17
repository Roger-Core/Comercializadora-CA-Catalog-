import React from "react";
import Card from "../../../Components/Card";
import configs from "../../../product-config";

import { SRLWrapper } from "simple-react-lightbox";

import "./Curtains.scss";

const { curtains } = configs;

const Curtains = () => {
  return (
    <>
      <SRLWrapper>
        <div style={{ margin: "118px auto" }} className="curtains-card">
          {curtains.map((item) => (
            <Card
              key={item.id}
              name={item.name}
              image={item.image}
              brand={item.brand}
            />
          ))}
        </div>
      </SRLWrapper>
    </>
  );
};

export default Curtains;
