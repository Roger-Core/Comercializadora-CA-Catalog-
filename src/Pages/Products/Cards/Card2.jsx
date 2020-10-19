import React from "react";
import { Link } from "react-router-dom";

import Cojin1 from "../../../Assets/Images/Cojines/116286493_134434728326132_5128192869936772326_o.jpg";
import Cojin2 from "../../../Assets/Images/Cojines/116203709_134434818326123_5957448055326319600_o.jpg";
import Cojin3 from "../../../Assets/Images/Cojines/116429836_134434144992857_2916541331751664329_o.jpg";

const Card2 = () => {
  return (
    <div className="lg:w-1/4 md:w-1/2 p-4 w-full">
      <div
        style={{ boxShadow: "1px 6px 10px 0 rgba(0, 0, 0, 0.26)" }}
        id="carouselExampleIndicators2"
        className="carousel slide"
        data-ride="carousel"
      >
        <ol className="carousel-indicators">
          <li
            data-target="#carouselExampleIndicators2"
            data-slide-to="0"
            className="active"
          ></li>
          <li data-target="#carouselExampleIndicators2" data-slide-to="1"></li>
          <li data-target="#carouselExampleIndicators2" data-slide-to="2"></li>
        </ol>
        <div className="carousel-inner">
          <div className="carousel-item active" data-interval="3500">
            <img
              alt="ecommerce"
              className="object-cover object-center w-full h-full"
              src={Cojin1}
            />
          </div>
          <div className="carousel-item" data-interval="3500">
            <img
              alt="ecommerce"
              className="object-cover object-center w-full h-full block"
              src={Cojin2}
            />
          </div>
          <div className="carousel-item" data-interval="3500">
            <img
              alt="ecommerce"
              className="object-cover object-center w-full h-full block"
              src={Cojin3}
            />
          </div>
        </div>
        <a
          className="carousel-control-prev"
          href="#carouselExampleIndicators2"
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
          href="#carouselExampleIndicators2"
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
        <Link to="/product/cushions">
          <h2 className="text-gray-900 title-font text-lg font-medium">
            Diseño Cojines
          </h2>
        </Link>
      </div>
    </div>
  );
};

export default Card2;
