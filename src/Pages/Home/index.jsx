import React from "react";

import "./Home.css";

const Home = () => {
  return (
    <section className="section hero" style={{ margin: " auto" }}>
      <div className="hero-inner">
        <h1
          style={{ textShadow: "3px 4px 8px rgba(0,0,0,.7)" }}
          className="help-center-name"
        >
          Bienvenidos
        </h1>
        <h2
          style={{
            textShadow: "3px 4px 8px rgba(0,0,0,.7)",
            borderBottom: "1px solid rgba(60, 75, 255, 1)",
          }}
          className="help-center-name"
        >
          Comercializadora CA
        </h2>
      </div>
    </section>
  );
};

export default Home;
