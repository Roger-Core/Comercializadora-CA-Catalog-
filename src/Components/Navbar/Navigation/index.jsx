import React from "react";
import { Link, NavLink } from "react-router-dom";
import DrawerToggleButton from "../Sidedrawer/DrawerToggleButton";
import Logo from "../../../Assets/Images/Logo/logo.jpg";

import "./Navbar.scss";

const Navigation = ({ drawerClickHandler }) => {
  return (
    <header className="toolbar">
      <nav className="toolbar-navigation">
        <div className="toolbar-toggle-button">
          <DrawerToggleButton click={drawerClickHandler} />
        </div>
        <div className="toolbar-logo">
          <NavLink to="/">
            <figure>
              <img src={Logo} alt="Logo" />
            </figure>
          </NavLink>
        </div>
        <div className="space-list"></div>
        <div className="toolbar-navigation-items">
          <ul>
            <NavLink to="/">
              <li>Inicio</li>
            </NavLink>
            <p>|</p>
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
                  <li className="dropdown-item">Cojines</li>
                </Link>
                <Link to="/productos/cuadros">
                  <li className="dropdown-item">Cuadros</li>
                </Link>
                <Link to="/productos/vinilos-decorativos">
                  <li className="dropdown-item">Viniles Decorativos</li>
                </Link>
                <Link to="/productos/cortinas-persianas-toldos">
                  <li className="dropdown-item">
                    Cortinas / Persianas / Toldos
                  </li>
                </Link>
              </div>
            </div>
            <p>|</p>
            <NavLink to="/">
              <li>¿Quienes Somos?</li>
            </NavLink>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Navigation;
