import React from "react";
import "./WhatsAppButton.scss";

const WhatsAppButton = () => {
  return (
    <div>
      <a
        href="https://api.whatsapp.com/send?phone=523341602913"
        target="_blank"
        rel="noreferrer"
      >
        <button className="btnF">
          <i className="fab fa-whatsapp mr-4"></i>
        </button>
      </a>
    </div>
  );
};

export default WhatsAppButton;
