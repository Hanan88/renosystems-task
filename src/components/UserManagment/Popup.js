import React from "react";
import Modal from "@mui/material/Modal";
import CloseIcon from "@mui/icons-material/Close";
import TextField from "@mui/material/TextField";
import "./Popup.css";
import { Input } from "@mui/material";

const Popup = ({ open, handleClose }) => {
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
              <input
                type="text"
                placeholder="Enter full name"
                className="form-box__input"
              />
            </div>

            <div className="form-box">
              <h4 className="form-box__label">User Name</h4>
              <input
                type="text"
                placeholder="Enter username"
                className="form-box__input"
              />
            </div>

            <div className="form-box">
              <h4 className="form-box__label">Email Address</h4>
              <input
                type="email"
                placeholder="Enter user email address"
                className="form-box__input"
              />
            </div>

            <div className="form-box">
              <h4 className="form-box__label">User Group</h4>
              <input
                type="select"
                placeholder="Choose user group"
                className="form-box__input"
              />
            </div>

            <div className="form-box">
              <h4 className="form-box__label">Assign Profile</h4>
              <input
                type="select"
                placeholder="Choose profile"
                className="form-box__input"
              />
            </div>
          </form>
        </div>

        <div className="popup-footer">
          <div>
            <button className="popuo-footer__reset-filters">
              Reset fields
            </button>
          </div>
          <div className="popuo-footer__actions">
            <button className="popuo-footer__actions-cancel" onClick={handleClose}>Cancel</button>
            <button className="popuo-footer__actions-add">Add User</button>
          </div>
        </div>
      </div>
    </Modal>
  );
};

export default Popup;
