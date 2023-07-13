import React from "react";

import Container from "../components/Container";
import Title from "../components/Title";
import MainContent from "../components/MainContent";
import ProfileInfo from "../components/ProfileInfo";

const DashboardPage = () => (
  <div className="DashboardPage">
    <Container>
      <div className="DashboardPage__title">
        <Title label="Manage your income and expenses" />
      </div>
      <div className="DashboardPage__content">
        <MainContent />
        <ProfileInfo />
      </div>
    </Container>
  </div>
);

export default DashboardPage;
