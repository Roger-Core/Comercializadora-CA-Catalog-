import React from "react";
import Card from "../../../Components/Card";
import configs from "../../../product-config";

import { SRLWrapper } from "simple-react-lightbox";

import "./DecorativeVinyls.scss";

const { vinyls } = configs;

const DecorativeVinyls = () => {
  return (
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
        <div className="vinyls-card">
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
