import React, { useState } from "react";
import "./InfoPopup.css";
import Backdrop from "../Backdrop/Backdrop";
import Popup from "../Popup/Popup";

function InfoPopup({ onClose, title, text }) {
  return (
    <div>
      <Backdrop onCancel={onClose} />
      <Popup onClose={onClose} title={title}>
        <div className="Popup__div_children ConfirmPopup__div_container">
          <div className="confirmPopup-button" onClick={onClose}>
            {text}
          </div>
        </div>
      </Popup>
    </div>
  );
}

export default InfoPopup;
