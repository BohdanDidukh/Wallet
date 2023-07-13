import React from "react";

import Navigation from "./Navigation";
import Logo from "./Logo";

const Sidebar = () => (
  <div className="Sidebar">
    <div className="Sidebar__wrapper">
      <Logo />
      <Navigation />
    </div>
  </div>
);

export default Sidebar;
