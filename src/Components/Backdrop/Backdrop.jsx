import React from "react";
import classes from "./Backdrop.module.css";

function Backdrop({ onCancel }) {
  return <div className={classes.container} onClick={onCancel}></div>;
}

export default Backdrop;
