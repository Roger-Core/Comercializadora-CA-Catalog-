import React from "react";
import Card1 from "./Cards/Card1";
import Card2 from "./Cards/Card2";
import Card3 from "./Cards/Card3";
import Card4 from "./Cards/Card4";

import "./Products.scss";

const Index = () => {
  return (
    <section className="text-gray-700 body-font custom-commerce">
      <div className="container px-4 py-12 mx-auto">
        <div className="flex flex-wrap -m-4">
          <Card4 />
          <Card3 />
          <Card2 />
          <Card1 />
        </div>
      </div>
    </section>
  );
};

export default Index;
