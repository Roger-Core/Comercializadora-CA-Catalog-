import React from "react";
import ClientsCards from "../../Components/ClientsCard";
import config from "../../product-config";

import { SRLWrapper } from "simple-react-lightbox";

import "./Clients.scss";

const { clients } = config;

const Clients = () => {
  return (
    <section className="text-gray-600 body-font">
      <hr />
      <div className="container px-5 py-20 mx-auto">
        <div className="flex flex-col text-center w-full mb-20">
          <h1 className="text-3xl font-medium title-font mb-4 text-gray-900">
            Nuestros Clientes Satisfechos
          </h1>
          <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
            Gracias por confiar en nuestro trabajo. <br /> Esto es una muestra
            de nuestra dedicación y nuestro amor por lo que hacemos. <br />
            ¡Cotiza tus projectos!
          </p>
        </div>
      </div>
      <SRLWrapper>
        <div className="clients-card">
          {clients.map((item) => (
            <ClientsCards
              key={item.id}
              name={item.name}
              image={item.image}
              brand={item.brand}
            />
          ))}
        </div>
      </SRLWrapper>
    </section>
  );
};

export default Clients;
