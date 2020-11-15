import React from "react";

const PurchaseButton = () => {
  return (
    <div style={{ marginBottom: "50px" }}>
      <h2
        style={{
          textAlign: "center",
          fontSize: "28px",
          marginBottom: "15px",
          textShadow: "3px 4px 8px rgba(0,0,0,.2)",
        }}
      >
        ¿Quieres Comprar?
      </h2>
      <button
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          margin: "auto",
          padding: "8px",
          backgroundColor: "rgb(54, 170, 224)",
          color: "#fff",
          border: "none",
          width: "222px",
          height: "50px",
          borderRadius: "50px",
          boxShadow: "1px 1px 10px rgba(0,0,0, .2)",
          outline: "none",
          cursor: "pointer",
        }}
      >
        Ingresa Aqui
      </button>
    </div>
  );
};

export default PurchaseButton;
