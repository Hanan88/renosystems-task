import React, { useState } from "react";
import SideMenu from "./components/SideMenu/SideMenu";
import Header from "./components/UI/Header";
import UserManagment from "./components/UserManagment/UserManagment";

function App() {
  const [collapse, setCollapse] = useState(false);
  return (
    <div>
      {collapse && <SideMenu collapse={collapse} />}
      <Header collapse={collapse} setCollapse={setCollapse} />
      <UserManagment />
    </div>
  );
}

export default App;
