import React from "react";
import { NavLink } from "react-router-dom";

const NavigationLink = ({ label, link, children }) => (
  <NavLink className="NavigationLink" to={link}>
    {children}
    {label}
  </NavLink>
);

export default NavigationLink;
