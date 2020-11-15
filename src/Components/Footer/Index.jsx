import React from "react";
import { Link } from "react-router-dom";

import "./Footer.scss";

const Footer = () => {
  return (
    <footer
      style={{ color: "#fff" }}
      className="page-footer font-small unique-color-dark"
    >
      <div className="social-media-line">
        <div className="container">
          <div className="row py-4 d-flex align-items-center">
            <div className="col-md-6 col-lg-5 text-center text-md-left mb-4 mb-md-0">
              <h6 className="mb-0">
                Mantente en contacto con nuestras redes sociales!
              </h6>
            </div>
            <div className="col-md-6 col-lg-7 text-center text-md-right">
              <a
                href="https://www.facebook.com/Comercializadoracagdl/"
                className="fb-ic"
                rel="noopener noreferrer"
                target="_blank"
              >
                <i
                  style={{
                    fontSize: "26px",
                  }}
                  className="fab fa-facebook mr-4"
                >
                  {" "}
                </i>
              </a>

              <a
                href="https://www.instagram.com/comercializadora_ca/"
                className="ins-ic"
                rel="noopener noreferrer"
                target="_blank"
              >
                <i
                  style={{
                    fontSize: "26px",
                  }}
                  className="fab fa-instagram white-text"
                >
                  {" "}
                </i>
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="container text-center text-md-left mt-5 color-custom">
        <div className="row mt-3">
          <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
            <h6 className="text-uppercase font-weight-bold">
              Comercializadora CA
            </h6>
            <hr
              className="accent-2 mb-3 mt-0 d-inline-block mx-auto"
              style={{ width: "100%", border: ".5px solid #f8f8f8" }}
            />
            <p style={{ textAlign: "center" }}>
              Under construction <br /> 🚧🚧🚧
            </p>
          </div>

          <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
            <h6 className="text-uppercase font-weight-bold">Productos</h6>
            <hr
              className="accent-2 mb-3 mt-0 d-inline-block mx-auto"
              style={{ width: "100%", border: ".5px solid #f8f8f8" }}
            />
            <p>
              <Link to="/productos/cojines">Cojines</Link>
            </p>
            <p>
              <Link to="/productos/cuadros">Cuadros</Link>
            </p>
            <p>
              <Link to="/productos/vinilos-decorativos">
                Viniles Decorativos
              </Link>
            </p>
            <p>
              <Link to="/productos/cortinas-persianas-toldos">
                Cortinas / Persianas / Toldos
              </Link>
            </p>
          </div>

          <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
            <h6 className="text-uppercase font-weight-bold">Contacto</h6>
            <hr
              className="accent-2 mb-3 mt-0 d-inline-block mx-auto"
              style={{ width: "100%", border: ".5px solid #f8f8f8" }}
            />
            <i style={{ fontSize: "19px" }} className="fas fa-home mr-3"></i>{" "}
            Circunvalación Sur #206
            <p>Col. Las Fuentes</p>
            <p>Zapopan, Jalisco 45080</p>
            <p>
              <i
                style={{ fontSize: "19px" }}
                className="fas fa-envelope mr-3"
              ></i>{" "}
              ventas@comercializadoraca.com
            </p>
            <p>
              <i
                style={{ fontSize: "19px" }}
                className="fab fa-whatsapp mr-3"
              ></i>{" "}
              333-955-89-21 y 644-132-41-46
            </p>
          </div>
        </div>
        <br />
        <h1>Developed by Rogelio Plata Cortés</h1>
      </div>

      <div className="footer-copyright text-center py-3">
        © 2020 Copyright:
        <Link style={{ color: "rgba(54, 170, 224, 1)" }} to="/">
          {" "}
          Comercializadora CA
        </Link>
      </div>
    </footer>
  );
};

export default Footer;
