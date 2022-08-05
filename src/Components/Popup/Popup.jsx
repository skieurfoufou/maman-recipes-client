import React from "react";
import classes from "./Popup.module.css";
import { ReactComponent as CloseIcon } from "./close.svg";

function Popup({ children, onClose, title, enabledCloseButton = true }) {
  return (
    <div className={classes.container}>
      <div className={classes.header}>
        <div>{title}</div>
        {enabledCloseButton && (
          <div className={classes.buttonClose}>
            <CloseIcon
              width="40px"
              height="40px"
              className={classes.buttonIcon}
              alt="icon"
              onClick={() => onClose(false)}
            />
          </div>
        )}
      </div>
      <div className={classes.children}> {children}</div>
    </div>
  );
}

export default Popup;
