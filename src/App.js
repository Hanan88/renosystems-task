import React, { useState } from "react";
import "./App.css";
import SideMenu from "./components/SideMenu/SideMenu";
import Header from "./components/UI/Header";
import UserManagment from "./components/UserManagment/UserManagment";

function App() {
  const [collapse, setCollapse] = useState(false);
  return (
    <div>
      <Header collapse={collapse} setCollapse={setCollapse} />
      <div className="full-content">
        {collapse && <SideMenu collapse={collapse} />}
        <UserManagment />
      </div>
    </div>
  );
}

export default App;
