import React, { useState } from "react";
import { BrowserRouter as Router, Route, Redirect } from "react-router-dom";
import HomePage from "./Pages/HomePage/Index";
import Gallery from "./Pages/Gallery/Index";
import Products from "./Pages/Products/Index";
import About from "./Pages/About/Index";
import Backdrop from "./Components/Backdrop/Index";
import Navbar from "./Components/Navbar/Index";
import Sidedrawer from "./Components/Sidedrawer/Index";
import Cushions from "./Pages/Cushions/Index";
import Pictures from "./Pages/Pictures/Index";
import Vinyls from "./Pages/DecorativeVinyls/Index";
import Curtains from "./Pages/Curtains/Index";
import "./App.scss";
import Footer from "./Components/Footer/Index";

import SimpleReactLightbox from "simple-react-lightbox";

import { useEffect } from "react";
import { useLocation } from "react-router-dom";

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

const App = () => {
  const [sideDrawerOpen, setSideDrawerOpen] = useState(false);

  const drawerToggleClickHandler = () => {
    setSideDrawerOpen((prevState) => {
      return { sideDrawerOpen: !prevState.sideDrawerOpen };
    });
  };

  const backdropClickHandler = () => {
    setSideDrawerOpen(false);
  };

  let backdrop;
  let sideDrawer;

  if (sideDrawerOpen) {
    backdrop = <Backdrop click={backdropClickHandler} />;
  }

  /*   const PurchaseButton = () => {
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
  }; */

  return (
    <Router>
      <ScrollToTop />
      <div style={{ height: "100%" }}>
        <SimpleReactLightbox>
          <Navbar drawerClickHandler={drawerToggleClickHandler} />
          <Sidedrawer show={sideDrawerOpen} />
          {sideDrawer}
          {backdrop}
          <Route render={() => <Redirect to="/" />} />
          <Route exact path="/" component={HomePage} />
          <Route exact path="/" component={Products} />
          <Route exact path="/" component={Gallery} />
          <Route exact path="/" component={About} />

          <Route path="/product/cushions" component={Cushions} />
          <Route path="/product/pictures" component={Pictures} />
          <Route path="/product/Decorative-vinyl-paint" component={Vinyls} />
          <Route path="/product/curtains-blinds-awnings" component={Curtains} />
          {/* <PurchaseButton /> */}
          <Footer />
        </SimpleReactLightbox>
      </div>
    </Router>
  );
};

export default App;
