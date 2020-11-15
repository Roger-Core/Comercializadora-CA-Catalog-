import React from "react";
import { Link } from "react-router-dom";

import Cortina1 from "../../../Assets/Images/Cortinas/116580074_134428498326755_6844690414369085726_o.jpg";
import Cortina2 from "../../../Assets/Images/Cortinas/116351457_134429061660032_8107408406560832495_o.jpg";
import Cortina3 from "../../../Assets/Images/Cortinas/116371038_134428058326799_2042073654436279698_n.jpg";

const Card3 = () => {
  return (
    <div className="lg:w-1/4 md:w-1/2 p-4 w-full">
      <div
        style={{ boxShadow: "1px 6px 10px 0 rgba(0, 0, 0, 0.26)" }}
        id="carouselExampleIndicators1"
        className="carousel slide"
        data-ride="carousel"
      >
        <ol className="carousel-indicators">
          <li
            data-target="#carouselExampleIndicators1"
            data-slide-to="0"
            className="active"
          ></li>
          <li data-target="#carouselExampleIndicators1" data-slide-to="1"></li>
          <li data-target="#carouselExampleIndicators1" data-slide-to="2"></li>
        </ol>
        <div className="carousel-inner">
          <div className="carousel-item active" data-interval="3000">
            <img
              alt="ecommerce"
              className="object-cover object-center w-full h-full"
              src={Cortina1}
            />
          </div>
          <div className="carousel-item" data-interval="3500">
            <img
              alt="ecommerce"
              className="object-cover object-center w-full h-full block"
              src={Cortina2}
            />
          </div>
          <div className="carousel-item" data-interval="4000">
            <img
              alt="ecommerce"
              className="object-cover object-center w-full h-full block"
              src={Cortina3}
            />
          </div>
        </div>
        <a
          className="carousel-control-prev"
          href="#carouselExampleIndicators1"
          role="button"
          data-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="sr-only">Previous</span>
        </a>
        <a
          className="carousel-control-next"
          href="#carouselExampleIndicators1"
          role="button"
          data-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="sr-only">Next</span>
        </a>
      </div>

      <div className="mt-4">
        <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">
          CATEGORÍA
        </h3>
        <Link to="/productos/cortinas-persianas-toldos">
          <h2 className="text-gray-900 title-font text-lg font-medium">
            Estilo Cortinas
          </h2>
        </Link>
      </div>
    </div>
  );
};

export default Card3;
