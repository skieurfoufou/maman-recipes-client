import React, { useState } from "react";
import InfoPopup from "../InfoPopup/InfoPopup";

function InfoButton({ className, buttonText, onConfirm, title, confirmText }) {
  const [isOpen, setIsOpen] = useState(false);

  const closePopup = () => {
    setIsOpen(false);
  };

  const openPopup = () => {
    window.scrollTo(0, 0);
    setIsOpen(true);
  };

  const confirm = () => {
    closePopup();
    onConfirm();
  };

  return (
    <div>
      <button className={className} onClick={openPopup}>
        {buttonText}
      </button>
      {isOpen ? (
        <InfoPopup
          title={title}
          onClose={closePopup}
          onSubmit={confirm}
          text={confirmText}
        />
      ) : null}
    </div>
  );
}

export default InfoButton;
