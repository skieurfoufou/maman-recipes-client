import React, { useState } from "react";
import ConfirmPopup from "../ConfirmPopup/ConfirmPopup";
// import useScrollBlock from "../../Hooks/useBlockScroll";

function ConfirmButton({
  className,
  buttonText,
  onConfirm,
  cancelText,
  confirmText,
  title,
}) {
  // const [blockScroll, allowScroll] = useScrollBlock();
  const [isOpen, setIsOpen] = useState(false);

  const closePopup = () => {
    // allowScroll();
    setIsOpen(false);
  };

  const openPopup = () => {
    window.scrollTo(0, 0);
    // blockScroll();
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
        <ConfirmPopup
          cancelText={cancelText}
          confirmText={confirmText || "autoriser"}
          title={title || "confirmer votre choix"}
          onClose={closePopup}
          onSubmit={confirm}
        />
      ) : null}
    </div>
  );
}

export default ConfirmButton;
