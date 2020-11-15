import React from "react";
import Card from "../../../Components/Card";
import configs from "../../../product-config";

import { SRLWrapper } from "simple-react-lightbox";

import "./Pictures.scss";

const { pictures } = configs;

const Pictures = () => (
  <>
    <h2
      style={{
        textAlign: "center",
        margin: "118px auto",
        textShadow: "2px 3px 10px rgba(0,0,0,.3)",
      }}
      className="text-gray-500 text-s tracking-widest title-font mb-1"
    >
      PUEDES HACER CLICK EN LAS IMAGENES PARA OBTENER MAS DETALLES.
    </h2>
    <SRLWrapper>
      <div className="pictures-card">
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
