import React from "react";
import { Routes, Route } from "react-router-dom";

import DashboardPage from "./pages/DashboardPage";
import StatisticPage from "./pages/StatisticPage";
import IncomePage from "./pages/IncomePage";
import PaymentPage from "./pages/PaymentPage";
import HelpPage from "./pages/HelpPage";
import SettingsPage from "./pages/SettingsPage";
import Sidebar from "./components/Sidebar";

import "./assets/styles/main.scss";

function App() {
  return (
    <div className="App">
      <Sidebar />
      <div className="Content">
        <Routes>
          <Route path="/" element={<DashboardPage />} />
          <Route path="/dashboard" element={<DashboardPage />} />
          <Route path="/income" element={<IncomePage />} />
          <Route path="/payment" element={<PaymentPage />} />
          <Route path="/statistic" element={<StatisticPage />} />
          <Route path="/settings" element={<SettingsPage />} />
          <Route path="/help" element={<HelpPage />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
