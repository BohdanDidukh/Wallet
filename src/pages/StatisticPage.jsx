import React from "react";

import Title from "../components/Title";
import StatisticCard from "../components/StatisticCard";

const StatisticPage = () => (
  <div className="StatisticPage">
    <div className="StatisticPage__wrapper">
      <div className="StatisticPage__title">
        <Title label="Your Statistic" />
      </div>
      <StatisticCard />
    </div>
  </div>
);
export default StatisticPage;
