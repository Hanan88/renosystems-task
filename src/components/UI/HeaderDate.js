import React from "react";
import "./HeaderDate.css";

const HeaderDate = () => {
  const today = new Date();
  const currentHours = today.getHours();
  const currentDay = today.toLocaleString("en-us", {
    weekday: "short",
    year: "numeric",
    month: "short",
    day: "numeric",
  });

  const currentTime = today.toLocaleString("en-us", {
    hour: "numeric",
    minute: "numeric",
  });
  return (
    <div className="header-date">
      <div>
        {currentHours < 12 ? (
          <h5>Good Morning!</h5>
        ) : currentHours < 18 ? (
          <h5>Good afternoon!</h5>
        ) : (
          <h5>Good evening!</h5>
        )}
      </div>
      <div>{currentDay}</div>
      <div>{currentTime}</div>
    </div>
  );
};

export default HeaderDate;
