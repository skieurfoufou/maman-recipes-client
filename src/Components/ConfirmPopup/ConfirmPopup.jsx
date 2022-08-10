import React from "react";
import "./ConfirmPopup.css";
import Backdrop from "../Backdrop/Backdrop";
import Popup from "../Popup/Popup";

function ConfirmPopup({ onSubmit, onClose, title, confirmText, cancelText }) {
  return (
    <div>
      <Backdrop onCancel={onClose} />
      <Popup onClose={onClose} title={title}>
        <div className="Popup__div_children ConfirmPopup__div_container">
          <div
            className="confirmPopup-button confirmPopup-button-yes"
            onClick={onSubmit}
          >
            {confirmText}
          </div>
          {cancelText && (
            <div className="confirmPopup-button" onClick={onClose}>
              {cancelText}
            </div>
          )}
        </div>
      </Popup>
    </div>
  );
}

export default ConfirmPopup;
