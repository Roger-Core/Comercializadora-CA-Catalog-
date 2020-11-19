import React, { useState } from "react";

import Backdrop from "./Backdrop";
import Sidedrawer from "./Sidedrawer";
import Navigation from "./Navigation";

const Navbar = () => {
  const [sidedrawerOpen, setSidedrawerOpen] = useState(false);

  const drawerToggleClickHandler = () => {
    setSidedrawerOpen((prevState) => {
      return { sidedrawerOpen: !prevState.sidedrawerOpen };
    });
  };

  const backdropClickHandler = () => {
    setSidedrawerOpen(false);
  };

  let backdrop;
  let sidedrawer;

  if (sidedrawerOpen) {
    backdrop = <Backdrop click={backdropClickHandler} />;
  }

  return (
    <>
      <Navigation drawerClickHandler={drawerToggleClickHandler} />
      <Sidedrawer show={sidedrawerOpen} />
      {sidedrawer}
      {backdrop}
    </>
  );
};

export default Navbar;
