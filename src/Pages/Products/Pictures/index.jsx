import React from "react";
import Card from "../../../Components/Card";
import configs from "../../../product-config";

import { SRLWrapper } from "simple-react-lightbox";

import "./Pictures.scss";

const { pictures } = configs;

const Pictures = () => (
  <>
    <SRLWrapper>
      <div style={{ margin: "118px auto" }} className="pictures-card">
        {pictures.map((item) => (
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

export default Pictures;
