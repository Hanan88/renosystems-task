import React, { useState } from "react";
import Modal from "@mui/material/Modal";
import CloseIcon from "@mui/icons-material/Close";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import TextField from "@mui/material/TextField";
import "./Popup.css";

const Popup = ({ open, handleClose }) => {
  const [name, setName] = useState("");
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [userGroup, setUserGroup] = useState("");
  const [userProfile, setUserProfile] = useState("");

  const handleForm = () => {
    console.log({ name, email, userName, userGroup, userProfile });
  };

  const handleResetFields = () => {
    setName("");
    setUserName("");
    setEmail("");
    setUserGroup("");
    setUserProfile("");
  };
  return (
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <div className="popup">
        <div className="popup-header">
          <h2 className="popup-header__title">Add New User</h2>
          <button className="popup-header__button" onClick={handleClose}>
            <CloseIcon />
          </button>
        </div>

        <div className="popup-content">
          <form className="form">
            <div className="form-box">
              <h4 className="form-box__label">Full Name</h4>
              <TextField
                fullWidth
                id="outlined-basic"
                variant="outlined"
                placeholder="Enter full name"
                size="small"
                value={name}
                onChange={(event) => setName(event.target.value)}
              />
            </div>

            <div className="form-box">
              <h4 className="form-box__label">User Name</h4>
              <TextField
                fullWidth
                id="outlined-basic"
                variant="outlined"
                placeholder="Enter username"
                size="small"
                value={userName}
                onChange={(event) => setUserName(event.target.value)}
              />
            </div>

            <div className="form-box">
              <h4 className="form-box__label">Email Address</h4>
              <TextField
                fullWidth
                id="outlined-basic"
                variant="outlined"
                placeholder="Enter user email address"
                size="small"
                value={email}
                onChange={(event) => setEmail(event.target.value)}
              />
            </div>

            <div className="form-box">
              <h4 className="form-box__label">User Group</h4>
              <FormControl fullWidth size="small">
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={userGroup}
                  onChange={(event) => setUserGroup(event.target.value)}
                >
                  <MenuItem disabled value="">
                    <em>Select User Group</em>
                  </MenuItem>
                  <MenuItem value={1}>Office</MenuItem>
                  <MenuItem value={2}>Managers</MenuItem>
                  <MenuItem value={3}>Head office</MenuItem>
                </Select>
              </FormControl>
            </div>

            <div className="form-box">
              <h4 className="form-box__label">Assign Profile</h4>
              <FormControl fullWidth size="small">
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={userProfile}
                  onChange={(event) => setUserProfile(event.target.value)}
                >
                  <MenuItem disabled value="">
                    <em>Select User Profile</em>
                  </MenuItem>
                  <MenuItem value={1}>Profile 1</MenuItem>
                  <MenuItem value={2}>Profile 2</MenuItem>
                  <MenuItem value={3}>Profile 3</MenuItem>
                </Select>
              </FormControl>
            </div>
          </form>
        </div>

        <div className="popup-footer">
          <div>
            <button
              className="popuo-footer__reset-filters"
              onClick={handleResetFields}
            >
              Reset fields
            </button>
          </div>
          <div className="popuo-footer__actions">
            <button
              className="popuo-footer__actions-cancel"
              onClick={handleClose}
            >
              Cancel
            </button>
            <button className="popuo-footer__actions-add" onClick={handleForm}>
              Add User
            </button>
          </div>
        </div>
      </div>
    </Modal>
  );
};

export default Popup;
