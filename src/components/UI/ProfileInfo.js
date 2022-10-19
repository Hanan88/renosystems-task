import React from "react";
import "./ProfileInfo.css";
import Avatar from '@mui/material/Avatar';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';

const ProfileInfo = () => {
  return (
    <div className="profile-info">
      <div className="profile-info__notificaitons">
        <NotificationsNoneIcon />
      </div>
      <div className="profile-info__profile-name">Profile Name
      <Avatar sx={{ width: 30, height: 30 }}>H</Avatar></div>
    </div>
  );
};

export default ProfileInfo;
