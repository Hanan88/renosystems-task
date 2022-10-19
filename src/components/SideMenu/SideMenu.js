import React from "react";
import "./SideMenu.css";
import logo from "./logo-remoSystem.png";
import TextField from "@mui/material/TextField";
import DashboardIcon from "@mui/icons-material/Dashboard";
import SideMenuCollapse from "./SideMenuCollapse";

const SideMenu = () => {
  return (
    <div className="side-menu">
      <div className="side-menu__logo">
        <img src={logo} alt="" className="side-menu__logo-img" />
      </div>

      <div className="side-menu__search">
        <TextField
          fullWidth
          id="outlined-basic"
          placeholder="Search..."
          variant="outlined"
          size="small"
        />
      </div>

      <div className="side-menu__dashboard">
        <DashboardIcon /> Dashboard
      </div>

      <div className="side-menu__settings">
        <h4 className="side-menu__settings-h4">SETTEINGS</h4>
        <SideMenuCollapse />
      </div>
    </div>
  );
};

export default SideMenu;
