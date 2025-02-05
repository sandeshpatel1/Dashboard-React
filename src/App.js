import React from "react";
import Sidebar from "./Components/SideBar/Sidebar";
import Dashboard from "./Components/Dashboard/Dashboard";
import PageHeader from "./Components/PageHeader/PageHeader";
import MainSection from "./Components/MainSection/MainSection";

function App() {
  return (
    <div className="App">
      <Sidebar />
      <Dashboard />
      <PageHeader />
      <MainSection />
    </div>
  );
}

export default App;
