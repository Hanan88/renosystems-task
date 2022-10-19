import React from "react";
import "./UserManagment.css";
import AddIcon from "@mui/icons-material/Add";
import Card from "../UI/Card";
import Container from "../UI/Container";
import Content from "./Content";
import Modal from "@mui/material/Modal";
import Popup from "./Popup";

const UserManagment = () => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  
  return (
    <Container>
      <div className="user-managment__header">
        <h1>User Managment</h1>
        <button className="user-managment__header-button" onClick={handleOpen}>
          <AddIcon /> Add New
        </button>
      </div>
      <Card>
        <Content />
      </Card>
      <Popup open={open} handleClose={handleClose} />
    </Container>
  );
};

export default UserManagment;
