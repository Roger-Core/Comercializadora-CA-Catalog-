import React from "react";
import {Link} from 'react-router-dom'

import Vinil1 from "../../../Assets/Images/Viniles/116707584_137460168023588_9101685742322642801_n.jpg";
import Vinil2 from "../../../Assets/Images/Viniles/116714774_137460334690238_5275833858084786804_n.jpg";
import Vinil3 from "../../../Assets/Images/Viniles/117889187_141255777644027_4792700551357641875_n.jpg";

const Card1 = () => {
  return (
    <div className="lg:w-1/4 md:w-1/2 p-4 w-full">
      <div
        style={{ boxShadow: "1px 6px 10px 0 rgba(0, 0, 0, 0.26)" }}
        id="carouselExampleIndicators3"
        className="carousel slide"
        data-ride="carousel"
      >
        <ol className="carousel-indicators">
          <li
            data-target="#carouselExampleIndicators3"
            data-slide-to="0"
            className="active"
          ></li>
          <li data-target="#carouselExampleIndicators3" data-slide-to="1"></li>
          <li data-target="#carouselExampleIndicators3" data-slide-to="2"></li>
        </ol>
        <div className="carousel-inner">
          <div className="carousel-item active" data-interval="4000">
            <img
              alt="ecommerce"
              className="object-cover object-center w-full h-full block"
              src={Vinil1}
            />
          </div>
          <div className="carousel-item" data-interval="4000">
            <img
              alt="ecommerce"
              className="object-cover object-center w-full h-full block"
              src={Vinil2}
            />
          </div>
          <div className="carousel-item" data-interval="4000">
            <img
              alt="ecommerce"
              className="object-cover object-center w-full h-full block"
              src={Vinil3}
            />
          </div>
        </div>
        <a
          className="carousel-control-prev"
          href="#carouselExampleIndicators3"
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
          href="#carouselExampleIndicators3"
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
        <Link to="/product/Decorative-vinyl-paint">
          <h2 className="text-gray-900 title-font text-lg font-medium">
            Estilo Viniles
          </h2>
        </Link>
      </div>
    </div>
  );
};

export default Card1;
