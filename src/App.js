import React, { useEffect } from "react";
import SimpleReactLightbox from "simple-react-lightbox";
import { BrowserRouter as Router, Route, useLocation } from "react-router-dom";

import Navbar from "./Components/Navbar";
import Home from "./Pages/Home";
import CarouselCards from "./Pages/CarouselCards";
import Gallery from "./Pages/Gallery";
import About from "./Pages/About";

import Cushions from "./Pages/Products/Cushions";
import Pictures from "./Pages/Products/Pictures";
import Vinyls from "./Pages/Products/DecorativeVinyls";
import Curtains from "./Pages/Products/Curtains";
import Footer from "./Components/Footer";

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

const App = () => {
  return (
    <Router>
      <ScrollToTop />
      <div style={{ height: "100%" }}>
        <SimpleReactLightbox>
          <Navbar />

          <Route exact path="/" component={Home} />
          <Route exact path="/" component={CarouselCards} />
          <Route exact path="/" component={Gallery} />
          <Route exact path="/" component={About} />

          <Route path="/productos/cojines" component={Cushions} />
          <Route path="/productos/cuadros" component={Pictures} />
          <Route path="/productos/vinilos-decorativos" component={Vinyls} />
          <Route
            path="/productos/cortinas-persianas-toldos"
            component={Curtains}
          />

          <Footer />
        </SimpleReactLightbox>
      </div>
    </Router>
  );
};

export default App;
