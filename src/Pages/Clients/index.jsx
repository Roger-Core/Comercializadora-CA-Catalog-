import React from "react";
import { SRLWrapper } from "simple-react-lightbox";

import "./Clients.scss";

import Client1 from "../../Assets/Images/Clientes-Satisfechos/cliente8.jpeg";
import Client2 from "../../Assets/Images/Clientes-Satisfechos/cliente4.jpeg";
import Client3 from "../../Assets/Images/Clientes-Satisfechos/cliente1.jpeg";
import Client4 from "../../Assets/Images/Clientes-Satisfechos/c.jpeg";
import Client5 from "../../Assets/Images/Clientes-Satisfechos/cliente7.jpeg";
import Client6 from "../../Assets/Images/Clientes-Satisfechos/cliente6.jpeg";

const About = () => {
  return (
    <section className="text-gray-600 body-font">
      <hr />
      <SRLWrapper>
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
          <div className="flex flex-wrap -m-4 clients">
            <div className="p-3 lg:w-1/3 md:w-1/2">
              <div className="h-full flex flex-col items-center text-center">
                <img
                  style={{ boxShadow: "1px 6px 10px 0 rgba(0, 0, 0, 0.26)" }}
                  alt="team"
                  className="flex-shrink-0 rounded-lg w-full h-56 object-cover object-center mb-4"
                  src={Client1}
                />
                <div className="w-full">
                  <h3 className="text-gray-500 mb-3">
                    CLIENTE COMERCIALIZADORA
                  </h3>
                  <span className="inline-flex">
                    <p className="text-gray-500">
                      <svg
                        fill="none"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        className="w-5 h-5"
                        viewBox="0 0 24 24"
                      >
                        <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
                      </svg>
                    </p>
                    <p className="ml-2 text-gray-500">
                      <svg
                        fill="none"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        className="w-5 h-5"
                        viewBox="0 0 24 24"
                      >
                        <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
                      </svg>
                    </p>
                    <p className="ml-2 text-gray-500">
                      <svg
                        fill="none"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        className="w-5 h-5"
                        viewBox="0 0 24 24"
                      >
                        <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"></path>
                      </svg>
                    </p>
                  </span>
                </div>
              </div>
            </div>
            <div className="p-3 lg:w-1/3 md:w-1/2">
              <div className="h-full flex flex-col items-center text-center">
                <img
                  style={{ boxShadow: "1px 6px 10px 0 rgba(0, 0, 0, 0.26)" }}
                  alt="team"
                  className="flex-shrink-0 rounded-lg w-full h-56 object-cover object-center mb-4"
                  src={Client2}
                />
                <div className="w-full">
                  <h3 className="text-gray-500 mb-3">
                    CLIENTE COMERCIALIZADORA
                  </h3>
                  <span className="inline-flex">
                    <p className="text-gray-500">
                      <svg
                        fill="none"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        className="w-5 h-5"
                        viewBox="0 0 24 24"
                      >
                        <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
                      </svg>
                    </p>
                    <p className="ml-2 text-gray-500">
                      <svg
                        fill="none"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        className="w-5 h-5"
                        viewBox="0 0 24 24"
                      >
                        <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
                      </svg>
                    </p>
                    <p className="ml-2 text-gray-500">
                      <svg
                        fill="none"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        className="w-5 h-5"
                        viewBox="0 0 24 24"
                      >
                        <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"></path>
                      </svg>
                    </p>
                  </span>
                </div>
              </div>
            </div>
            <div className="p-3 lg:w-1/3 md:w-1/2">
              <div className="h-full flex flex-col items-center text-center">
                <img
                  style={{ boxShadow: "1px 6px 10px 0 rgba(0, 0, 0, 0.26)" }}
                  alt="team"
                  className="flex-shrink-0 rounded-lg w-full h-56 object-cover object-center mb-4"
                  src={Client3}
                />
                <div className="w-full">
                  <h3 className="text-gray-500 mb-3">
                    CLIENTE COMERCIALIZADORA
                  </h3>
                  <span className="inline-flex">
                    <p className="text-gray-500">
                      <svg
                        fill="none"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        className="w-5 h-5"
                        viewBox="0 0 24 24"
                      >
                        <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
                      </svg>
                    </p>
                    <p className="ml-2 text-gray-500">
                      <svg
                        fill="none"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        className="w-5 h-5"
                        viewBox="0 0 24 24"
                      >
                        <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
                      </svg>
                    </p>
                    <p className="ml-2 text-gray-500">
                      <svg
                        fill="none"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        className="w-5 h-5"
                        viewBox="0 0 24 24"
                      >
                        <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"></path>
                      </svg>
                    </p>
                  </span>
                </div>
              </div>
            </div>
            <div className="p-3 lg:w-1/3 md:w-1/2">
              <div className="h-full flex flex-col items-center text-center">
                <img
                  style={{ boxShadow: "1px 6px 10px 0 rgba(0, 0, 0, 0.26)" }}
                  alt="team"
                  className="flex-shrink-0 rounded-lg w-full h-56 object-cover object-center mb-4"
                  src={Client4}
                />
                <div className="w-full">
                  <h3 className="text-gray-500 mb-3">
                    CLIENTE COMERCIALIZADORA
                  </h3>
                  <span className="inline-flex">
                    <p className="text-gray-500">
                      <svg
                        fill="none"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        className="w-5 h-5"
                        viewBox="0 0 24 24"
                      >
                        <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
                      </svg>
                    </p>
                    <p className="ml-2 text-gray-500">
                      <svg
                        fill="none"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        className="w-5 h-5"
                        viewBox="0 0 24 24"
                      >
                        <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
                      </svg>
                    </p>
                    <p className="ml-2 text-gray-500">
                      <svg
                        fill="none"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        className="w-5 h-5"
                        viewBox="0 0 24 24"
                      >
                        <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"></path>
                      </svg>
                    </p>
                  </span>
                </div>
              </div>
            </div>
            <div className="p-3 lg:w-1/3 md:w-1/2">
              <div className="h-full flex flex-col items-center text-center">
                <img
                  style={{ boxShadow: "1px 6px 10px 0 rgba(0, 0, 0, 0.26)" }}
                  alt="team"
                  className="flex-shrink-0 rounded-lg w-full h-56 object-cover object-center mb-4"
                  src={Client5}
                />
                <div className="w-full">
                  <h3 className="text-gray-500 mb-3">
                    CLIENTE COMERCIALIZADORA
                  </h3>
                  <span className="inline-flex">
                    <p className="text-gray-500">
                      <svg
                        fill="none"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        className="w-5 h-5"
                        viewBox="0 0 24 24"
                      >
                        <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
                      </svg>
                    </p>
                    <p className="ml-2 text-gray-500">
                      <svg
                        fill="none"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        className="w-5 h-5"
                        viewBox="0 0 24 24"
                      >
                        <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
                      </svg>
                    </p>
                    <p className="ml-2 text-gray-500">
                      <svg
                        fill="none"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        className="w-5 h-5"
                        viewBox="0 0 24 24"
                      >
                        <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"></path>
                      </svg>
                    </p>
                  </span>
                </div>
              </div>
            </div>
            <div className="p-3 lg:w-1/3 md:w-1/2">
              <div className="h-full flex flex-col items-center text-center">
                <img
                  style={{ boxShadow: "1px 6px 10px 0 rgba(0, 0, 0, 0.26)" }}
                  alt="team"
                  className="flex-shrink-0 rounded-lg w-full h-56 object-cover object-center mb-4"
                  src={Client6}
                />
                <div className="w-full">
                  <h3 className="text-gray-500 mb-3">
                    CLIENTE COMERCIALIZADORA
                  </h3>
                  <span className="inline-flex">
                    <p className="text-gray-500">
                      <svg
                        fill="none"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        className="w-5 h-5"
                        viewBox="0 0 24 24"
                      >
                        <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
                      </svg>
                    </p>
                    <p className="ml-2 text-gray-500">
                      <svg
                        fill="none"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        className="w-5 h-5"
                        viewBox="0 0 24 24"
                      >
                        <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
                      </svg>
                    </p>
                    <p className="ml-2 text-gray-500">
                      <svg
                        fill="none"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        className="w-5 h-5"
                        viewBox="0 0 24 24"
                      >
                        <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"></path>
                      </svg>
                    </p>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </SRLWrapper>
    </section>
  );
};

export default About;
