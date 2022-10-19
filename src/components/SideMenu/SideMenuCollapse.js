import React from "react";
import "./SideMenu.css";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import Collapse from "@mui/material/Collapse";

const SideMenuCollapse = () => {
  const [open, setOpen] = React.useState(false);
  const handleChange = () => {
    setOpen((prev) => !prev);
  };
  return (
    <div>
      <div>
        <button className="side-menu__settings-button">
          ATM Setting
          <KeyboardArrowDownIcon />
        </button>
        <Collapse>
          <ul>
            <li>item 1</li>
            <li>item 2</li>
            <li>item 3</li>
          </ul>
        </Collapse>
      </div>

      <div>
        <button className="side-menu__settings-button">
          Business Setup
          <KeyboardArrowDownIcon />
        </button>
        <Collapse>
          <ul>
            <li>item 1</li>
            <li>item 2</li>
            <li>item 3</li>
          </ul>
        </Collapse>
      </div>

      <div>
        <button className="side-menu__settings-button" onClick={handleChange}>
          User Management
          {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
        </button>
        <Collapse in={open}>
          <ul className="side-menu__setting-list">
            <li>Users</li>
            <li>Profiles</li>
            <li>Groups</li>
          </ul>
        </Collapse>
      </div>
      <div>
        <button className="side-menu__settings-button">
          License Management
          <KeyboardArrowDownIcon />
        </button>
        <Collapse>
          <ul>
            <li>item 1</li>
            <li>item 2</li>
            <li>item 3</li>
          </ul>
        </Collapse>
      </div>
    </div>
  );
};

export default SideMenuCollapse;
