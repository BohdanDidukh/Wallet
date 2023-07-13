import React from "react";

import NavigationLink from "./NavigationLink";
import SvgIcons from "./SvgIcons";

const Navigation = () => (
  <div className="Navigation">
    <NavigationLink link="/dashboard" label="Dashboard">
      <SvgIcons className="NavigationLink__icon" name="dashboard" />
    </NavigationLink>
    <NavigationLink link="/income" label="Income">
      {" "}
      <SvgIcons className="NavigationLink__icon" name="income" />
    </NavigationLink>
    <NavigationLink link="/payment" label="Payment">
      {" "}
      <SvgIcons className="NavigationLink__icon" name="payment" />
    </NavigationLink>
    <NavigationLink link="/statistic" label="Statistic">
      {" "}
      <SvgIcons className="NavigationLink__icon" name="statistic" />
    </NavigationLink>
    <NavigationLink link="/settings" label="Settings">
      {" "}
      <SvgIcons className="NavigationLink__icon" name="settings" />
    </NavigationLink>
    <NavigationLink link="/help" label="Get Help">
      {" "}
      <SvgIcons className="NavigationLink__icon" name="help" />
    </NavigationLink>
  </div>
);

export default Navigation;
