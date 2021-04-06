import React from "react";
import "./FacebookButton.scss";

const PurchaseButton = () => {
  return (
    <div>
      <a
        href="https://api.whatsapp.com/send?phone=523341602913"
        target="_blank"
        rel="noreferrer"
      >
        <button className="btnF">
          Contacto
          <i
            style={{
              fontSize: "16px",
              margin: "auto 26px",
            }}
            className="fab fa-whatsapp mr-4"
          >
            {" "}
          </i>
        </button>
      </a>
    </div>
  );
};

export default PurchaseButton;
