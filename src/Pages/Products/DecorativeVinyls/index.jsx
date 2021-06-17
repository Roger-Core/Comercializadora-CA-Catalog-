import React from "react";
import Card from "../../../Components/Card";
import configs from "../../../product-config";

import { SRLWrapper } from "simple-react-lightbox";

import "./DecorativeVinyls.scss";

const { vinyls } = configs;

const DecorativeVinyls = () => {
  return (
    <>
      <SRLWrapper>
        <div style={{ margin: "118px auto" }} className="vinyls-card">
          {vinyls.map((item) => (
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

export default DecorativeVinyls;
