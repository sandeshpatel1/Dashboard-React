import React from "react";
import { LucideSettings, LucideCalendar, LucideBell, Grip, LucideSearch } from "lucide-react";
import user from "../../Assests/user.jpg"
import "./Dashboard.css";

const Dashboard = () => {
  return (

    <div className="dashboard">
      <div className="main-content">
        <div className="left-section">
          <div className="dots">
            <span className="dot-horizontal"><Grip /></span>
          </div>
          <div className="company-name">Expound Technivo</div>
        </div>
        <div className="right-section">
          <div className="search">
            <LucideSearch size={20} color="black" />
          </div>
          <div className="section-line" />
          <div className="icons">
            <LucideSettings size={20} />
            <LucideCalendar size={20} />
            <LucideBell size={20} />
          </div>
          <div className="section-line" />
          <div className="user-logo">
            <img src={user} alt="User" className="user-image" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
