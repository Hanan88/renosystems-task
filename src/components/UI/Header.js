import React from "react";
import HeaderDate from "./HeaderDate";
import ProfileInfo from "./ProfileInfo";

import './Header.css'

const Header = ({ collapse, setCollapse }) => {
  const openCollapse = () => {
    setCollapse(!collapse);
  };

  return (
    <div className="header">
      <div className="header__date">
        <button onClick={openCollapse}>+</button>
        <HeaderDate />
      </div>
      <ProfileInfo />
    </div>
  );
};

export default Header;
