import React from "react";
import Cuadro1 from "../../../Assets/Images/Cuadros/116591640_134437874992484_2155162674218664985_n.jpg";
import Cuadro2 from "../../../Assets/Images/Cuadros/116515931_134437708325834_7944572525305040548_n.jpg";
import Cuadro3 from "../../../Assets/Images/Cuadros/116260337_134437854992486_183457619947949911_n.jpg";

const Card4 = () => {
  return (
    <div className="lg:w-1/4 md:w-1/2 p-4 w-full">
      <div
        style={{ boxShadow: "1px 6px 10px 0 rgba(0, 0, 0, 0.26)" }}
        id="carouselExampleIndicators"
        className="carousel slide"
        data-ride="carousel"
      >
        <ol className="carousel-indicators">
          <li
            data-target="#carouselExampleIndicators"
            data-slide-to="0"
            className="active"
          ></li>
          <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
          <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
        </ol>
        <div className="carousel-inner">
          <div className="carousel-item active" data-interval="2500">
            <img
              alt="ecommerce"
              className="object-cover object-center w-full h-full"
              src={Cuadro1}
            />
          </div>
          <div className="carousel-item" data-interval="2500">
            <img
              alt="ecommerce"
              className="object-cover object-center w-full h-full block"
              src={Cuadro2}
            />
          </div>
          <div className="carousel-item" data-interval="2500">
            <img
              alt="ecommerce"
              className="object-cover object-center w-full h-full block"
              src={Cuadro3}
            />
          </div>
        </div>
        <a
          className="carousel-control-prev"
          href="#carouselExampleIndicators"
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
          href="#carouselExampleIndicators"
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
        <h2 className="text-gray-900 title-font text-lg font-medium">
          Diseño Cuadros
        </h2>
      </div>
    </div>
  );
};

export default Card4;
