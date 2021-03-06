import React from "react";
import { Link, NavLink } from "react-router-dom";

import "./Sidedrawer.scss";

const Sidedrawer = (props) => {
  let drawerClasses = "side-drawer";

  if (props.show) {
    drawerClasses = "side-drawer open";
  }

  return (
    <nav className={drawerClasses}>
      <ul>
        <NavLink to="/">
          <i className="fa fa-home" aria-hidden="true"></i>
          <li>Inicio</li>
        </NavLink>
        <hr style={{ width: "80%", margin: "0 auto" }} />
        <div className="dropdown show">
          <NavLink
            className="btn btn-transparent dropdown-toggle"
            to="/"
            role="button"
            id="dropdownMenuLink"
            data-toggle="dropdown"
            aria-haspopup="true"
            aria-expanded="false"
          >
            Productos
          </NavLink>
          <div className="dropdown-menu" aria-labelledby="dropdownMenuLink">
            <Link to="/productos/cojines">
              <li style={{ height: "15px" }} className="dropdown-item">
                Cojines
              </li>
            </Link>
            <Link to="/productos/cuadros">
              <li style={{ height: "15px" }} className="dropdown-item">
                Cuadros
              </li>
            </Link>
            <Link to="/productos/vinilos-decorativos">
              <li style={{ height: "15px" }} className="dropdown-item">
                Viniles Decorativos
              </li>
            </Link>
            <Link to="/productos/cortinas-persianas-toldos">
              <li className="dropdown-item">Cortinas / Persianas / Toldos</li>
            </Link>
          </div>
        </div>
        <hr style={{ width: "80%", margin: "0 auto" }} />
        <NavLink to="/">
          <li>¿Quienes Somos?</li>
        </NavLink>
      </ul>
    </nav>
  );
};

export default Sidedrawer;
