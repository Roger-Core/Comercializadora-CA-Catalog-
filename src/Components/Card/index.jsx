import React from "react";

const Card = ({ image, brand }) => {
  return (
    <div className="lg:w-1/5 md:w-1/3 p-4 m-2">
      <div
        style={{ boxShadow: "1px 6px 10px 0 rgba(0, 0, 0, 0.26)" }}
        className="block relative h-48 rounded overflow-hidden"
      >
        <img
          className="object-cover object-center w-full h-full block"
          style={{ cursor: "pointer" }}
          src={image}
          alt={brand}
        />
      </div>
      <div className="mt-4"></div>
    </div>
  );
};

export default Card;
