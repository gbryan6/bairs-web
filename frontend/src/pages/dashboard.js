import React from "react";
import "../styles/pages/dashboard.css";
import HeaderDashboard from "../components/headerDashboard";
import Header from "../components/header";
import Feed from "../components/feed";

// import { Container } from './styles';

function Dashboard() {

  return (
    <div className="dashboard__all">
      <nav>
        <Header />
      </nav>
      <div>
        <HeaderDashboard />
      </div>
      <div className="my__ads">
        <Feed />
      </div>
    </div>
  );
}

export default Dashboard;
