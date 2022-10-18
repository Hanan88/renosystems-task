import React, { useState } from "react";
import Header from "./components/UI/Header";
import SideMenu from "./components/UI/SideMenu";

function App() {
  const [collapse, setCollapse] = useState(false);
  return (
    <div>
      <Header collapse={collapse} setCollapse={setCollapse} />
      {collapse && <SideMenu collapse={collapse} />}
    </div>
  );
}

export default App;
