import React from "react";
import { NavLink } from "react-router-dom";

import LogoIcon from "../assets/img/logo.svg";

const Logo = () => (
  <NavLink to="/home" className="Logo">
    <img className="Logo__icon" src={LogoIcon} alt="Logo" />
    <p className="Logo__text">
      MeWallet
    </p>
  </NavLink>
);
export default Logo;
