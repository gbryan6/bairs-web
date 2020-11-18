import React from "react";
import "../styles/pages/dashboard.css";
import HeaderDashboard from "../components/headerDashboard";
import Header from "../components/header";
import MyAds from "../components/myads";
import {useParams} from 'react-router-dom';
// import { Container } from './styles';

function Dashboard() {

  const user = useParams();

  return (
    <div className="dashboard__all">
      <nav>
        <Header />
      </nav>
      <div>
        <HeaderDashboard userId={user.id}/>
      </div>
      <div className="my__ads">
        <MyAds />
      </div>
    </div>
  );
}

export default Dashboard;
